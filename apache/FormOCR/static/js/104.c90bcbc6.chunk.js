(this["webpackJsonpisct-group"]=this["webpackJsonpisct-group"]||[]).push([[104],{3115:function(e,t,a){"use strict";a.r(t);var n=a(39),c=a(13),s=a(680),i=a(89),l=a(1),r=a.n(l),o=a(733),d=(a(667),a(633)),u=a(658),j=a(115),b=(a(1506),a(3025)),m=a(701),p=(a(685),a(686),a(687),a(688),a(704)),h=a(679),O=(a(895),a(689)),f=a(695),y=a(696),x=a(922),g=a(700),v=a(699),S=a(904),N=a.n(S),I=a(865),k=a(1169),w=a.n(k),K=a(731),T=a.n(K),A=a(732),F=a.n(A);T()(w.a),F()(w.a);var P=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(e){var n;Object(f.a)(this,a),(n=t.call(this,e)).state={height:200,width:200},n.printPage=n.printPage.bind(Object(x.a)(n)),n.createFieldsNamesTree=n.createFieldsNamesTree.bind(Object(x.a)(n)),console.log(localStorage.getItem("processHistory")),n.state={userData:{},domainName:JSON.parse(localStorage.getItem("domain_data")).domainName,dependencyId:"",formIds:[],nodeDataTable:[],processKey:"",historics:[],formDataHistoric:[],formsData:localStorage.getItem("processHistory"),chartFig:null,chartOptions:{series:[{data:[1,2,3]}],chart:{height:400,type:"column"},xAxis:{labels:{useHTML:!0,formatter:function(){return""}}}},series:[{name:"Gases",data:[{name:"Argon",y:.9,color:"#3498db"},{name:"Nitrogen",y:78.1,color:"#9b59b6"},{name:"Oxygen",y:20.9,color:"#2ecc71"},{name:"Trace Gases",y:.1,color:"#f1c40f"}]}]};e.dependencyId,n.state.domainName,localStorage.getItem("Authorization"),localStorage.getItem("username");return n}return Object(y.a)(a,[{key:"createFieldsNamesTree",value:function(e,t,a){var n=this,c=[];return console.log(e),e.map((function(e,t){"object"===typeof e.components?"datagrid"!==e.type?c.push({label:e.title,id:e.id,fieldKey:e.key,children:n.createFieldsNamesTree(e.components,!0,0)}):e.components.map((function(e,t){"object"===typeof e.components?c.push({label:e.label,id:e.id,fieldKey:e.key,children:n.createFieldsNamesTree(e.components,!0,0)}):"object"===typeof e.columns?e.columns.map((function(e){"object"===typeof e.components&&e.components.map((function(e,t){"object"===typeof e.components?"datagrid"!==e.type?c.push({label:e.label,id:e.id,fieldKey:e.key,children:n.createFieldsNamesTree(e.components,!0,0)}):e.components.map((function(e,t){"object"===typeof e.components?c.push({label:e.label,id:e.id,fieldKey:e.key,children:n.createFieldsNamesTree(e.components,!0,0)}):c.push({label:e.label,id:e.id,fieldKey:e.key})})):c.push({label:e.label,id:e.id,fieldKey:e.key})}))})):c.push({label:e.label,id:e.id,fieldKey:e.key})})):"object"===typeof e.columns?e.columns.map((function(e){"object"===typeof e.components&&e.components.map((function(e,t){"object"===typeof e.components?"datagrid"!==e.type?c.push({label:e.label,id:e.id,fieldKey:e.key,children:n.createFieldsNamesTree(e.components,!0,0)}):e.components.map((function(e,t){"object"===typeof e.components?c.push({label:e.label,id:e.id,fieldKey:e.key,children:n.createFieldsNamesTree(e.components,!0,0)}):c.push({label:e.label,id:e.id,fieldKey:e.key})})):c.push({label:e.label,id:e.id,fieldKey:e.key})}))})):c.push({label:e.label,id:e.id,fieldKey:e.key})})),c}},{key:"printPage",value:function(e){var t=null,a=document.getElementById("divToPrint");N()(a,{useCORS:!0}).then((function(e){var a=190*e.height/e.width+300,n=e.toDataURL("img/png"),c=new I.default("p","mm","a4");c.addImage(n,"PNG",10,10,190,a),t=c.output("bloburl"),document.getElementById("tab").style.display="none",document.getElementById("test").style.display="block",document.getElementById("test").src=t}))}},{key:"render",value:function(){var e,t=this,a=!0,n=localStorage.getItem("workflowMasterName"),s=(new Date).toLocaleString();return Object(c.jsx)("div",{children:Object(c.jsxs)(d.f,{children:[Object(c.jsx)(d.j,{children:Object(c.jsx)("div",{className:"m-subheader",children:Object(c.jsxs)("div",{className:"d-flex align-items-center",children:[Object(c.jsx)("div",{className:"mr-auto col-xs-6 ",children:Object(c.jsx)("h4",{className:"m-subheader__title m-subheader__title--separator",children:Object(c.jsxs)("span",{className:"ng-tns-c2-0",children:[n," "]})})}),Object(c.jsx)("div",{className:"card-header-actions"})]})})}),Object(c.jsx)(d.g,{style:{minHeight:"300px"},children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{id:"tab",children:Object(c.jsxs)("div",{className:"container",id:"divToPrint",children:[Object(c.jsx)("div",{className:"text-center",children:Object(c.jsxs)("div",{className:"row py-3",children:[Object(c.jsx)("div",{className:"col-12 mb-3",children:Object(c.jsx)("h3",{children:this.state.domainName})}),Object(c.jsxs)("div",{className:"col-12 mb-3",children:["T\xe9l\xe9charg\xe9 par ",this.state.userData.firstName," ",this.state.userData.lastName," le ",s]})]})}),Object(c.jsx)("div",{children:null===(e=this.state.nodeDataTable)||void 0===e?void 0:e.map((function(e,n){return Object(c.jsx)("div",{className:"row",children:null===e||void 0===e?void 0:e.map((function(e){var s;return Object(c.jsxs)("table",{style:{textAlign:"left",width:"100%"},className:"table table-striped table-bordered",children:[Object(c.jsx)("thead",{children:Object(c.jsx)("tr",{style:{backgroundColor:"#4a7bc4",color:"#fff"},children:Object(c.jsx)("th",{scope:"col",colSpan:"8",children:e.label})})}),Object(c.jsx)("tbody",{children:null===(s=e.children)||void 0===s?void 0:s.map((function(s){var i=t.state.formDataHistoric[n];return console.log(s),console.log(i),i[s.fieldKey]&&"object"!==typeof i[s.fieldKey]?Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{style:{width:"35%"},children:s.label}),Object(c.jsx)("td",{style:{width:"65%"},children:null!==i[s.fieldKey]?i[s.fieldKey]:null})]},s.id):i[s.fieldKey]&&"object"===typeof i[s.fieldKey]&&!Array.isArray(i[s.fieldKey])?(console.log(i[s.fieldKey]),Object(c.jsxs)("tr",{children:[s.children.map((function(e,t){return Object(c.jsx)("td",{children:e.label})})),i[s.fieldKey].map((function(e,t){s.children.map((function(t,a){return Object(c.jsx)("td",{children:null!==e[t.fieldKey]?i[s.fieldKey]:null})}))}))]},s.id)):"dataGrid"===s.fieldKey&&i.dataGrid&&a&&"object"===typeof i.dataGrid?(console.log(i.dataGrid),a=!1,Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("tr",{children:[e.children.map((function(e){return Object(c.jsx)("th",{scope:"col",children:e.label})}))," "]},e.id),i.dataGrid.map((function(t,a){return Object(c.jsxs)("tr",{children:[" ",e.children.map((function(e,a){return Object(c.jsx)("td",{children:null!==t[e.fieldKey]?i[s.fieldKey]:null})}))]})}))]})):void 0}))})]})}))})}))})]})}),Object(c.jsx)("iframe",{id:"test",style:{position:"absolute",right:0,display:"none",height:"300px"},width:"100%"})]})})]})})}}]),a}(l.Component),B=a(743),C=Object(b.a)((function(e){return{formControl:{margin:e.spacing(1),marginLeft:"0px !important",minWidth:220,maxWidth:300},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}}));t.default=Object(m.a)(Object(n.a)({},C),{withTheme:!0})((function(e){var t=Object(l.useRef)(null),a=Object(l.useRef)(null),n=r.a.useState("center"),b=Object(i.a)(n,2),m=(b[0],b[1]),f=r.a.useState(!0),y=Object(i.a)(f,2),x=(y[0],y[1],r.a.useState(!0)),g=Object(i.a)(x,2),v=(g[0],g[1],r.a.useState("")),S=Object(i.a)(v,2),k=(S[0],S[1],r.a.useState("")),w=Object(i.a)(k,2),K=w[0],T=w[1],A=r.a.useState(""),F=Object(i.a)(A,2),D=(F[0],F[1],r.a.useState("")),_=Object(i.a)(D,2),z=(_[0],_[1],r.a.useState("")),H=Object(i.a)(z,2),G=(H[0],H[1],r.a.useState([])),J=Object(i.a)(G,2),E=(J[0],J[1]),M=r.a.useState(null),R=Object(i.a)(M,2),L=(R[0],R[1],r.a.useState("workflow")),W=Object(i.a)(L,2),U=(W[0],W[1],r.a.useState("")),X=Object(i.a)(U,2),V=(X[0],X[1],r.a.useState("")),q=Object(i.a)(V,2),Q=(q[0],q[1],r.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainId)),Y=Object(i.a)(Q,2),Z=Y[0],$=(Y[1],r.a.useState([])),ee=Object(i.a)($,2),te=(ee[0],ee[1],r.a.useState([])),ae=Object(i.a)(te,2),ne=(ae[0],ae[1],r.a.useState([])),ce=Object(i.a)(ne,2),se=(ce[0],ce[1],r.a.useState([])),ie=Object(i.a)(se,2),le=(ie[0],ie[1],r.a.useState([])),re=Object(i.a)(le,2),oe=(re[0],re[1],r.a.useState("")),de=Object(i.a)(oe,2),ue=(de[0],de[1],r.a.useState("")),je=Object(i.a)(ue,2),be=(je[0],je[1],r.a.useState([])),me=Object(i.a)(be,2),pe=(me[0],me[1],r.a.useState([])),he=Object(i.a)(pe,2),Oe=(he[0],he[1],r.a.useState(null)),fe=Object(i.a)(Oe,2),ye=(fe[0],fe[1],C(),r.a.useState(null)),xe=Object(i.a)(ye,2),ge=(xe[0],xe[1],r.a.useState(null)),ve=Object(i.a)(ge,2),Se=(ve[0],ve[1],r.a.useState(localStorage.getItem("username"))),Ne=Object(i.a)(Se,2),Ie=(Ne[0],Ne[1],r.a.useState("")),ke=Object(i.a)(Ie,2),we=(ke[0],ke[1],r.a.useState("")),Ke=Object(i.a)(we,2),Te=(Ke[0],Ke[1],r.a.useState("")),Ae=Object(i.a)(Te,2),Fe=(Ae[0],Ae[1],r.a.useState([])),Pe=Object(i.a)(Fe,2),Be=Pe[0],Ce=(Pe[1],r.a.useState("")),De=Object(i.a)(Ce,2),_e=(De[0],De[1],r.a.useState("")),ze=Object(i.a)(_e,2),He=(ze[0],ze[1],r.a.useState("")),Ge=Object(i.a)(He,2),Je=(Ge[0],Ge[1],r.a.useState("")),Ee=Object(i.a)(Je,2),Me=(Ee[0],Ee[1],r.a.useState("")),Re=Object(i.a)(Me,2),Le=(Re[0],Re[1],r.a.useState("")),We=Object(i.a)(Le,2),Ue=(We[0],We[1],r.a.useState("")),Xe=Object(i.a)(Ue,2),Ve=(Xe[0],Xe[1]),qe=r.a.useState(""),Qe=Object(i.a)(qe,2),Ye=Qe[0],Ze=Qe[1],$e=r.a.useState([]),et=Object(i.a)($e,2),tt=(et[0],et[1],r.a.useState("")),at=Object(i.a)(tt,2),nt=at[0],ct=at[1],st=r.a.useState([]),it=Object(i.a)(st,2),lt=(it[0],it[1],r.a.useState(!1)),rt=Object(i.a)(lt,2),ot=(rt[0],rt[1],r.a.useState([])),dt=Object(i.a)(ot,2),ut=dt[0],jt=dt[1],bt=r.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainName),mt=Object(i.a)(bt,2),pt=mt[0],ht=(mt[1],r.a.useState(!1)),Ot=Object(i.a)(ht,2),ft=Ot[0],yt=Ot[1];Object(l.useEffect)((function(){var t=[],a={method:"POST",headers:{"X-Tenant":pt,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify({domainId:Z})};fetch(j.x+"/api/workflow/getAll",a).then((function(e){return new Promise((function(t,a){e.text().then((function(e){t(e.length?JSON.parse(e):null)})).catch((function(e){a(e)}))}))})).then((function(e){console.log(e),e.map((function(e){t.push({value:e.id,label:e.name+"-"+e.version})})),E(t),Ve(t)}));var n=e.match.params.dependencyId;Ze(e.match.params.dependencyId);var c={method:"POST",headers:{"X-Tenant":pt,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify({id:n})};fetch(j.d+"/api/auth/getById",c).then((function(e){return new Promise((function(t,a){e.text().then((function(e){t(e.length?JSON.parse(e):null)})).catch((function(e){a(e)}))}))})).then((function(e){var a=JSON.parse(e.matrix),n=JSON.parse(e.process_list);console.log(n),ct(a.name),T(a.sno);var c=[],i=[],l={},r=[],o=0;n.map((function(e){var a=e.processId,n=o.toString();if(c.includes(a)){var r=c.indexOf(a).toString();d=t.filter((function(t){return t.value===e.dependsOnId}));l[r]=[].concat(Object(s.a)(l[r]),[d[0]])}else{c.push(a);var d=t.filter((function(e){return e.value===a}));if(i.push(d[0]),void 0===l[n]){var d=t.filter((function(t){return t.value===e.dependsOnId}));l[n]=[d[0]]}else{d=t.filter((function(t){return t.value===e.dependsOnId}));l[n]=[].concat(Object(s.a)(l[n]),[d[0]])}o++}})),i.map((function(e,t){var a=t.toString();r=[].concat(Object(s.a)(r),[{processId:e,dependOn:l[a]}])})),console.log(r),jt(Object(s.a)(r))}))}),[]);var xt,gt={displayMaximizable:yt},vt=[{label:"Imprimer",icon:"pi pi-print",command:function(){!function(e){gt.displayMaximizable(!0),localStorage.setItem("processHistory",Be),e&&m(e)}()}},{label:"Imprimer (Navigateur)",icon:"pi pi-print",command:function(){window.print()}}],St=function(e){gt["".concat(e)](!1)},Nt=function(e){var t=null,a=document.getElementById("divToPrint");N()(a,{useCORS:!0}).then((function(e){var a=e.toDataURL("img/png"),n=190*e.height/e.width,c=n,s=new I.default("p","mm","a4"),i=0;for(s.addImage(a,"PNG",10,i,190,n),c-=295;c>=5;)i=c-n,s.addPage(),s.addImage(a,"PNG",10,i,190,n),c-=295;t=s.output("bloburl"),document.getElementById("tab").style.display="none",document.getElementById("test").style.display="block",document.getElementById("test").src=t}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.Toast,{ref:t}),Object(c.jsx)(d.k,{xs:"12",sm:"12",children:Object(c.jsxs)(d.f,{children:[Object(c.jsx)(d.j,{children:Object(c.jsx)("div",{className:"m-subheader",children:Object(c.jsxs)("div",{className:"d-flex align-items-center",children:[Object(c.jsxs)("div",{className:"mr-auto col-xs-6 ",children:[Object(c.jsx)("h4",{className:"m-subheader__title m-subheader__title--separator",children:Object(c.jsx)("span",{className:"ng-tns-c2-0",children:"Aper\xe7u de matrice de d\xe9pendance"})}),"              "]}),Object(c.jsxs)("div",{className:"card-header-actions",children:[Object(c.jsx)(d.I,{style:{color:"#716ACA"},onClick:function(){return e.history.push("/admin/dependencies/list")},rel:"noreferrer noopener",target:"_blank",className:"c-subheader-nav-link",children:Object(c.jsx)("i",{size:"2xl",className:"pi pi-arrow-left",onClick:function(e){return console.log(e)}})}),Object(c.jsx)(O.Menu,{model:vt,popup:!0,ref:a}),Object(c.jsx)(d.I,{className:"c-subheader-nav-link",style:{paddingLeft:"15px",paddingRight:"20px"},children:Object(c.jsx)("i",{size:"2xl",className:"pi pi-bars",onClick:function(e){return a.current.toggle(e)}})})]})]})})}),Object(c.jsx)(d.g,{children:Object(c.jsxs)(d.u,{noValidate:!0,children:[Object(c.jsxs)(d.v,{row:!0,className:"my-0",children:[Object(c.jsx)(d.k,{sm:12,md:6,children:Object(c.jsxs)(d.v,{children:[Object(c.jsx)(d.H,{htmlFor:"dependencyId",children:"S No"}),Object(c.jsx)(d.A,{id:"dependencyId",value:K,disabled:!0})]})}),Object(c.jsx)(d.k,{sm:12,md:6,children:Object(c.jsxs)(d.v,{children:[Object(c.jsx)(d.H,{htmlFor:"dependencyName",children:" Nom "}),Object(c.jsx)(d.A,{id:"dependencyName",disabled:!0,value:nt})]})})]}),Object(c.jsxs)(d.f,{children:[Object(c.jsx)(d.j,{color:"light",children:"D\xe9pendance"}),Object(c.jsx)(d.g,{children:ut.map((function(e,t){return Object(c.jsx)("div",{style:{marginTop:"10px"},children:Object(c.jsx)("div",{style:{width:"100%",borderBottom:"1px solid lightGray"},children:Object(c.jsxs)(d.v,{row:!0,className:"my-0",children:[Object(c.jsx)(d.k,{sm:12,md:5,children:Object(c.jsxs)(d.v,{children:[Object(c.jsx)(d.H,{htmlFor:"processus",children:"Processus"}),Object(c.jsx)(h.a,{name:"processus",value:e.processId,disabled:!0})]})}),Object(c.jsx)(d.k,{sm:12,md:5,children:Object(c.jsxs)(d.v,{children:[Object(c.jsx)(d.H,{htmlFor:"source",children:"D\xe9pend de"}),Object(c.jsx)(h.a,{name:"source",value:e.dependOn,isMulti:!0,disabled:!0})]})})]})})},t)}))})]}),Object(c.jsx)(d.O,{xs:"4",children:Object(c.jsx)(d.k,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0",children:Object(c.jsxs)(d.e,{block:!0,variant:"outline",color:"danger",onClick:function(){return e.history.push("/admin/dependencies/list")},children:[Object(c.jsx)(p.a,{}),"Retourner"]})})})]})})]})}),Object(c.jsx)(B.Dialog,{visible:ft,maximizable:!0,modal:!0,style:{width:"70vw"},footer:(xt="displayMaximizable",Object(c.jsxs)("div",{children:[Object(c.jsx)(u.Button,{label:"Imprimer",icon:"pi pi-check",onClick:function(){return Nt(xt)},autoFocus:!0}),Object(c.jsx)(u.Button,{label:"Annuler",icon:"pi pi-times",onClick:function(){return St(xt)},className:"p-button-text"})]})),onHide:function(){return St("displayMaximizable")},children:Object(c.jsx)(P,{dependencyId:Ye})})]})}))}}]);
//# sourceMappingURL=104.c90bcbc6.chunk.js.map