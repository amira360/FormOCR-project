import os
os.environ['USE_TORCH'] = '1'
import sys
import matplotlib.pyplot as plt
from doctr.io import DocumentFile
from doctr.models import ocr_predictor
import re
import json
from doctr.transforms.modules.pytorch import F


def main():
	image = sys.argv[1]
	components_obj = sys.argv[2]
	f = open(components_obj)
 
	# returns JSON object as
	# a dictionary
	data = json.load(f)
	doc = DocumentFile.from_images(image)
	predictor = ocr_predictor( det_arch='db_resnet50', reco_arch='crnn_vgg16_bn', pretrained=True)
	result = predictor(doc)
	json_export = result.export()
	form_components_1 = json.dumps(data["components"])
	form_components_1.replace('false', 'False')
	form_components_1.replace('true', 'True')
	f.close()
	form_components =  json.loads(form_components_1)

############ panels ###########################
	panels = []
	index = 0
	for comp in form_components:
	   if comp["type"] == 'panel':
	   	  panels.append({"index": index, "label": comp["label"], "key": comp["key"], "type": comp["type"], "title": comp["title"]})
	   	  index = index +1
	components = []
	index = 0
	panel_index = 0
	col_index = 0
	components_matrix = []
	col_elements = []
	count_col = []
	for comp in form_components:	  
	    if comp["type"] == 'panel':
	    	list = comp["components"]
	    	for elem in list:
	    	  if elem['type'] == "columns":
	    	    columns = elem['columns']
	    	    col_index = 0
	    	    for col in columns:
	    	      col_elements = []
	    	      col_comp_list = col["components"]
	    	      for col_comp in col_comp_list:
	    	         components.append({"index": index, "label": col_comp["label"],"key": col_comp["key"], "type": col_comp["type"], "panel_index": panel_index, "column_index": col_index})
	    	         index = index + 1
	    	         col_elements.append({"index": index, "label": col_comp["label"],"key": col_comp["key"], "type": col_comp["type"], "panel_index": panel_index, "column_index": col_index})
	    	      components_matrix.append(col_elements)
	    	      col_index = col_index + 1
	    	    count_col.append({"panel_nbr": panel_index, "max_col_nbr": col_index})
	    	  else:
	    	      components.append({"index": index, "label": elem["label"],"key": elem["key"], "type": elem["type"], "panel_index": panel_index, "column_index": None})
	    	      index = index +1
	    	panel_index = panel_index + 1

	blocks = json_export["pages"][0]["blocks"]
	obj = {}
	blocks_matrix = []
	blocks_column = []
	labels = []
	predictions = []
	val = ""
	result_tab = []
	panel_titles = []
	comp_labels = []
	important = False
	for panel in panels:
	  panel_titles.append(panel["title"].lower().replace(" ", ""))
	for component in components:
	  comp_labels.append(component["label"].lower().replace(" ", ""))
	min_pos = None
	max_pos = None
	for block in blocks:
	  lines = block["lines"]
	  for line in lines:
	     words = line["words"]
	     seq = ""
	     for word in words:
	       if (seq ==""):
	         min_pos = (float(format( word["geometry"][0][0], '.2f')),float(format( word["geometry"][0][1], '.2f')))
	         seq = seq+ str(word["value"])
	         max_pos = (float(format( word["geometry"][1][0], '.2f')),float(format( word["geometry"][1][1], '.2f')))
	       else:
	         seq = seq + " " + str(word["value"] )
	         max_pos = (float(format( word["geometry"][1][0], '.2f')),float(format( word["geometry"][1][1], '.2f')))
	     if(seq.__contains__(":")):
	       seq= seq.replace(":", "")
	     predictions.append({"label": seq , "position": (min_pos, max_pos)})
	     labels.append(seq)

	obj = {}
	last_y = 0
	last_obj = {}
	for comp in components:
	               if comp["column_index"] == None:
	                 for pred in predictions:
	                   y = pred["position"][0][1]
	                   if pred["label"] == comp["label"] or (pred["label"].lower().replace(" ", "").__contains__(comp["label"].lower().replace(" ", "")) and pred["label"].lower().replace(" ", "").split(comp["label"].lower().replace(" ", ""),1)[0]=="" )  :
	                     last_y = y
	                     if (pred["label"].lower().replace(" ", "").__contains__(comp["label"].lower().replace(" ", "")) and pred["label"].lower().replace(" ", "").split(comp["label"].lower().replace(" ", ""),1)[0]=="" ):
	                     	res = pred["label"].lower().replace(" ", "").split(comp["label"].lower().replace(" ", ""),1)[1]
	                     	txt = pred["label"].lower().replace(" ", "").split(comp["label"].lower().replace(" ", ""),1)
	                     	value_tab = pred["label"].split(" ")
	                     	max_tab = len(value_tab)
	                     	tab_index = 0 
	                     	while tab_index < max_tab and  not(res.lower().__contains__(value_tab[tab_index].lower()))  :
	                     		tab_index= tab_index + 1
	                     	if tab_index < max_tab and  res.lower().__contains__(value_tab[tab_index].lower()) :
	                     		new_res = ""
	                     		while tab_index < max_tab:
	                     			if new_res == "":
	                     				new_res =value_tab[tab_index]
	                     				tab_index = tab_index + 1
	                     			else:
	                     				new_res = new_res + " "+ value_tab[tab_index]
	                     				tab_index = tab_index + 1
	                     		res = new_res
	                     	if(res != "" and res != " " ):
	                     		obj[comp["label"]] = res
	                     		last_obj = {}
	                     	else:
	                     		last_obj = pred
	                     		for pred1 in predictions:
	                               		if pred["position"][0][1] -0.01 <= pred1["position"][0][1] <= pred["position"][0][1]+0.01 and pred["label"] != pred1["label"]:
	                                 		obj[pred["label"]] =  pred1["label"]
	                                 		last_obj = {}
	               else:
                        doc_mat = []
                        qst_pos_matrix = []
                        for pred in predictions:
                                for col in components_matrix:
                                    qst_pos_col = []
                                    for comp1 in col:
                                        field_nbr = 0
                                        for pred1 in predictions:
                                         if (pred["position"][0][1] -0.01 <= pred1["position"][0][1] <= pred["position"][0][1] + 0.01) and (comp1["label"] == pred["label"] or (pred["label"].lower().replace(" ", "").__contains__(comp1["label"].lower().replace(" ", "")) and pred["label"].lower().replace(" ", "").split(comp1["label"].lower().replace(" ", ""),1)[0]=="")):
                                            field_nbr = field_nbr + 1
                                            if (not(qst_pos_col.__contains__(pred["position"][0][0]))):
                                                qst_pos_col.append(pred["position"][0][0])
                                    if(len(qst_pos_col) != 0):
                                        if (not(qst_pos_matrix.__contains__(qst_pos_col))):
                                            qst_pos_matrix.append(qst_pos_col)
                        for counter in count_col:
                            col_index = 0
                            col_nbr = counter["max_col_nbr"]
                            line_field_ibr = col_nbr*2
                            while(col_index < col_nbr):
                                for pred2 in predictions:
                                    for col in components_matrix:
                                        for comp1 in col:
                                                xmin_dist = 100
                                                resp = ""
                                                if comp1["label"] == pred2["label"] or (pred2["label"].lower().replace(" ", "").__contains__(comp1["label"].lower().replace(" ", "")) and pred2["label"].lower().replace(" ", "").split(comp1["label"].lower().replace(" ", ""),1)[0]==""):
                                                    if (pred2["label"].lower().replace(" ", "").__contains__(comp1["label"].lower().replace(" ", "")) and pred2["label"].lower().replace(" ", "").split(comp1["label"].lower().replace(" ", ""),1)[0]==""):
                                                        txt = pred2["label"].lower().replace(" ", "").split(comp1["label"].lower().replace(" ", ""))
                                                        if( len(txt) >0):
                                                            resp = pred2["label"].lower().replace(" ", "").split(comp1["label"].lower().replace(" ", ""))[1]
                                                            value_tab = pred2["label"].split(" ")
                                                        else:
                                                            resp = ""
                                                        max_tab = len(value_tab)
                                                        tab_index = 0
                                                        new_res = ""
                                                        while tab_index < max_tab and  not(resp.lower().replace(" ", "").__contains__(value_tab[tab_index].lower().replace(" ", "")))  :
                                                            tab_index= tab_index + 1
                                                        if tab_index < max_tab and  resp.lower().replace(" ", "").__contains__(value_tab[tab_index].lower().replace(" ", "")) :
                                                            if len(value_tab[tab_index-1].lower().replace(" ", "").split(comp1["label"].lower().replace(" ", ""))) ==1 or value_tab[tab_index-1].lower().replace(" ", "").split(comp1["label"].lower().replace(" ", ""))[1] == "":
                                                                while tab_index < max_tab:
                                                                    if new_res == "":
                                                                        new_res =value_tab[tab_index]
                                                                        tab_index = tab_index + 1
                                                                    else:
                                                                        new_res = new_res + " "+ value_tab[tab_index]
                                                                        tab_index = tab_index + 1
                                                        resp = new_res
                                                    else:
                                                        resp = ""
                                                    if(resp != ""):
                                                        obj[comp1["label"]] = resp
                                                        comp1[comp1["label"]] = resp
                                                    else:
                                                        response = ""
                                                        for p in predictions:
                                                                if(p["label"] != pred2["label"] and pred2["position"][0][1] -0.01 <= p["position"][0][1] <= pred2["position"][0][1]+0.01
                                                   and p["position"][0][0] - pred2["position"][0][0] < xmin_dist):
                                                                    if p["position"][0][0] - pred2["position"][0][0] >0 :
                                                                        #print("==============",qst_pos_matrix)
                                                                        if ( qst_pos_matrix.__contains__([p["position"][0][0]])):
                                                                            resp = ""
                                                                        else:
                                                                            xmin_dist = p["position"][0][0] - pred2["position"][0][0]
                                                                            resp = p["label"]
                                                        if not(obj.__contains__(comp1["label"] )):
                                                            obj[comp1["label"]] = resp
                                                            comp1[pred2["label"]] = resp
                                    col_index = col_index + 1 

	form_data = {}
	keys = obj.keys()
	mylist = []
	mylist2 = []
	for key in keys:
	    mylist.append(key.lower().replace(" ", ""))
	    mylist2.append(key)
	for components in form_components:
	 list_comp = components["components"]
	 for comp in list_comp:
	    if comp['type'] == "columns":
	        columns = comp['columns']
	        for col in columns:
	              col_comp_list = col["components"]
	              for col_comp in col_comp_list:
	                if(mylist.__contains__(col_comp["label"].lower().replace(" ", ""))):
	                    value = mylist.index(col_comp["label"].lower().replace(" ", ""))
	                    form_data[col_comp["key"]] = obj[mylist2[value]].replace('"', ' ')
	    else:
	        if(mylist.__contains__(comp["label"].lower().replace(" ", ""))):
                                           value = mylist.index(comp["label"].lower().replace(" ", ""))
                                           form_data[comp["key"]] = obj[mylist2[value]].replace('"', ' ')

	return form_data
if __name__ == '__main__':
	obj =main()
	print(obj)
