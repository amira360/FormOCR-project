# FormOCR-project
FormOCR method for template-based form understanding 

## FormOCR application
The FormOCR application helps to automate the digital form filling from uploaded image by integrating FormOCR method into a BPMN workflow.
## Note
- The FormOCR method is provided under the "FormOCR_model" folder
- I used version of python is 3.8 
- The notification is not in real time in this version. So you need to refresh the page to get it.
## Install
In order to install the application in your machine, you must follow the instructions belows: <br>
1- install Apache Tomcat 9.0.45 and change the port to 8081<br>
2- install apache2<br>
3- install Postgresql<br>
4- download the project and extract it under Apache Tomcat folder <br>
5- move the 'FormOCR' folder under "/apache/" to "/www/html/" of Apache2 for frontend execution<br>
6- access "discovery-service/target/" folder and open the terminal on this fomder and run "nohup java -jar discovery-service.jar &" <br>
7- install jetty server version 9.4 (use port 8080) <br>
8- move files of the folder 'tomcat' to the "webapps" folder under Tomcat for execution<br>

 



Now! the application is ready for usage ! :) <br>

## Usage
In order to automate the digital form filling from a scanned form image, the following steps must be followed:<br>
1- prepare start event form<br>
 &emsp;   a- Create a form for the start event that have as code "FORMSELECT".<br>
 &emsp;   b- add to it a select list and change the API property name to "form" <br>
 &emsp;   c- add elements to the list (the value must be the same as the codes of the forms that will be created for the templates <br>
 &emsp;   c- add a upload file element and keep the API property name to "file"<br>
2- prepare the templates' forms<br>
  &emsp;  a- Create a new form <br>
  &emsp;  b- use as code one of the element's value in the select list of the start event (create for each elemtn in the select list of te start event a digital form)<br>
 &emsp;   c- prepare the digital form according to the form image template<br>
   &emsp; &emsp;    - fields' labels must be the same as the questions in the form image<br>
   &emsp; &emsp;    - all the fields must be text fields<br>
3- Prepare the workflow<br>
&emsp;    a- add a start event and add to it the "FORMSELECT" form<br>
&emsp;    b- add a service task and select the service task in the select list of the details configuration<br>
&emsp;    c- add an exclusive gateway and add next to it the forms that corresponds to the templates<br>
&emsp;    d- add to each sequence flow next to the exclusive gateway a condition like that one <br>
    ${FORMSELECT.form=='FORMOCODE'} and replace the word FORMOCODE with the code of the form that is related to that 
    sequence flow.<br>
 &emsp;   e- finally you must add an exclusive gateway that collects all the the sequence flows followed with an end event


Now ! everything is ready !)

You can execute the workflow by selecting intances of a workflow and then select 'Create New'

start the process by selectiing the template and uploading the form that corresponds to that template. At that time the FormOCR method will process the image and extract the answer of each question. Once it complete the processing you will receive a notification.
once you open the notification you can see the form filled from the image.

