(this["webpackJsonpisct-group"]=this["webpackJsonpisct-group"]||[]).push([[66],{1504:function(e,a,t){"use strict";t.r(a);var l=t(39),s=t(13),i=t(89),n=t(1),o=t.n(n),r=t(633),c=(t(639),t(653),t(681)),u=t(3025),d=t(701),f=t(778),m=t(115),h=(t(754),t(755),t(697)),p=t(704),b=t(679),j=Object(u.a)((function(e){return{formControl:{margin:e.spacing(1),marginLeft:"0px !important",minWidth:220,maxWidth:300},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}}));a.default=Object(d.a)(Object(l.a)({},j),{withTheme:!0})((function(e){var a=o.a.useState(!0),t=Object(i.a)(a,2),l=(t[0],t[1],o.a.useState(!0)),u=Object(i.a)(l,2),d=(u[0],u[1],o.a.useState("")),O=Object(i.a)(d,2),x=O[0],g=O[1],v=o.a.useState(""),w=Object(i.a)(v,2),C=(w[0],w[1],o.a.useState("")),y=Object(i.a)(C,2),S=(y[0],y[1],o.a.useState("")),k=Object(i.a)(S,2),V=(k[0],k[1],o.a.useState("")),q=Object(i.a)(V,2),I=q[0],N=q[1],A=o.a.useState(""),L=Object(i.a)(A,2),P=L[0],z=L[1],M=o.a.useState("form"),H=Object(i.a)(M,2),D=(H[0],H[1],o.a.useState("")),F=Object(i.a)(D,2),E=F[0],T=F[1],W=o.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainId),J=Object(i.a)(W,2),B=J[0],G=(J[1],o.a.useState([])),U=Object(i.a)(G,2),X=U[0],_=U[1],R=o.a.useState([]),Z=Object(i.a)(R,2),$=Z[0],K=Z[1],Q=o.a.useState([]),Y=Object(i.a)(Q,2),ee=Y[0],ae=Y[1],te=o.a.useState([]),le=Object(i.a)(te,2),se=le[0],ie=le[1],ne=o.a.useState({}),oe=Object(i.a)(ne,2),re=oe[0],ce=oe[1],ue=o.a.useState(""),de=Object(i.a)(ue,2),fe=de[0],me=de[1],he=o.a.useState(localStorage.getItem("username")),pe=Object(i.a)(he,2),be=(pe[0],pe[1],o.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainName)),je=Object(i.a)(be,2),Oe=je[0];je[1],j();Object(n.useEffect)((function(){ce(JSON.parse(f.a).form);var e={method:"GET",headers:{"X-Tenant":Oe,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")}};fetch(m.v+"/api/auth/role/getRoles",e).then((function(e){return e.json()})).then((function(e){console.log(e);var a=[];e.map((function(e){a.push({value:e.roleName,label:e.roleName,id:e.roleId})})),ie(a),console.log(se)})).catch((function(e){console.log(e)}))}),[]);return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(r.k,{xs:"12",sm:"12",children:Object(s.jsxs)(r.f,{children:[Object(s.jsx)(r.j,{children:Object(s.jsx)("h3",{children:"Cr\xe9er un ma\xeetre"})}),Object(s.jsx)(r.g,{children:Object(s.jsxs)(r.u,{noValidate:!0,children:[Object(s.jsxs)(r.v,{row:!0,className:"my-0",children:[Object(s.jsx)(r.k,{sm:12,md:6,children:Object(s.jsxs)(r.v,{children:[Object(s.jsx)(r.H,{htmlFor:"SNo",children:"S No"}),Object(s.jsx)(r.A,{id:"SNo",disabled:!0})]})}),Object(s.jsx)(r.k,{sm:12,md:6,children:Object(s.jsxs)(r.v,{children:[Object(s.jsx)(r.H,{htmlFor:"formName",children:"Nom du ma\xeetre"}),Object(s.jsx)(r.A,{id:"masterName",onChange:function(e){return g(e.target.value)},value:x,required:!0})]})})]}),Object(s.jsxs)(r.v,{row:!0,className:"my-0",children:[Object(s.jsx)(r.k,{sm:12,md:6,children:Object(s.jsxs)(r.v,{children:[Object(s.jsx)(r.H,{htmlFor:"masterCode",children:"Code du ma\xeetre"}),Object(s.jsx)(r.A,{invalid:"error"===E||"exist"===E||"notValid"===E,id:"masterCode",onChange:function(e){var a,t;N(e.target.value),a=e.target.value,t=3,a.length>=t?(T("success"),function(e){var a={method:"POST",headers:{"X-Tenant":Oe,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify({code:e})};/^[a-zA-Z0-9-_]*$/g.test(e)?fetch(m.n+"/api/master/auth/verifyMasterCode",a).then((function(e){return e.json()})).then((function(e){console.log(e),0===e?(T("success"),me("")):(T("exist"),me("Le code de ma\xeetre est d\xe9j\xe0 existant !"))})).catch((function(e){console.log(e)})):(T("notValid"),me("Format invalide !"))}(e.target.value)):(T("error"),me("Le code est obligatoire !"))}}),Object(s.jsx)(r.G,{className:"help-block",children:fe})]})}),Object(s.jsx)(r.k,{sm:12,md:6,children:Object(s.jsxs)(r.v,{children:[Object(s.jsx)(r.H,{htmlFor:"AccessControlAdmin",children:"Contr\xf4le d'acc\xe8s (Admin)"}),Object(s.jsx)(b.a,{name:"form-field-name2",placeholder:"Global",value:X,options:se,onChange:_,isMulti:!0})]})}),Object(s.jsx)(r.k,{sm:12,md:6,children:Object(s.jsxs)(r.v,{children:[Object(s.jsx)(r.H,{htmlFor:"AccessControlUser",children:"Contr\xf4le d'acc\xe8s (Utilisateur)"}),Object(s.jsx)(b.a,{name:"form-field-name2",placeholder:"Global",value:$,options:se,onChange:K,isMulti:!0})]})})]}),Object(s.jsx)(r.v,{row:!0,className:"my-0",children:Object(s.jsx)(r.k,{sm:12,md:6,children:Object(s.jsxs)(r.v,{variant:"custom-checkbox",inline:!0,style:{marginBottom:"20px"},children:[Object(s.jsx)(r.B,{custom:!0,id:"inline-checkbox2",name:"inline-checkbox2",value:"option2"}),Object(s.jsx)(r.H,{variant:"custom-checkbox",htmlFor:"inline-checkbox2",onChange:function(e){return z(e.target.value)},value:P,children:"Disable add new button"})]})})}),Object(s.jsxs)(r.f,{children:[Object(s.jsx)(r.j,{style:{backgroundColor:"#F5F5F5"},children:"G\xe9n\xe9rateur de ma\xeetre"}),Object(s.jsx)(r.g,{children:Object(s.jsx)(c.FormBuilder,{form:re,onChange:function(e){ae(e.components)}})})]}),Object(s.jsxs)(r.O,{xs:"4",children:[Object(s.jsx)(r.k,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0",children:Object(s.jsxs)(r.e,{block:!0,variant:"outline",color:"info",id:"masterSave",onClick:function(a){return function(a){a.preventDefault();var t={display:"form",components:ee},l={method:"POST",headers:{"X-Tenant":Oe,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify({masterName:x,masterCode:I,username:localStorage.getItem("username"),form:t,domainId:B,rolesAdmin:X,rolesUser:$,disableAddNewButton:P})};fetch(m.n+"/api/master/create",l).then((function(e){return new Promise((function(a,t){e.text().then((function(e){a(e.length?JSON.parse(e):null)})).catch((function(e){t(e)}))}))})).then((function(a){console.log(a);var t=a.masterId;e.history.push("/admin/master/menuMapping/"+t)}))}(a)},children:[Object(s.jsx)(h.a,{})," Enregister"]})}),Object(s.jsx)(r.k,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0",children:Object(s.jsxs)(r.e,{block:!0,variant:"outline",color:"danger",onClick:function(){return e.history.push("/admin/master/list")},children:[Object(s.jsx)(p.a,{}),"Annuler"]})})]})]})})]})})})}))},697:function(e,a,t){"use strict";var l=t(1),s=t(1054);a.a=Object(s.a)(l.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save")},704:function(e,a,t){"use strict";var l=t(1),s=t(1054);a.a=Object(s.a)(l.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel")},778:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var l='{"display":"form","form":{"display":"form","components":[{"title":"Panel","theme":"default","tooltip":"","customClass":"","collapsible":false,"hidden":false,"hideLabel":false,"disabled":false,"modalEdit":false,"key":"panel","tags":[],"properties":{},"customConditional":"","conditional":{"json":"","show":null,"when":null,"eq":""},"logic":[],"attributes":{},"overlay":{"style":"","page":"","left":"","top":"","width":"","height":""},"type":"panel","label":"Panel","breadcrumb":"default","tabindex":"","input":false,"placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"clearOnHide":false,"refreshOn":"","redrawOn":"","tableView":false,"labelPosition":"top","description":"","errorLabel":"","autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":null,"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"allowMultipleMasks":false,"tree":false,"components":[{"label":"Columns","columns":[{"components":[],"width":6,"offset":0,"push":0,"pull":0,"size":"md"},{"components":[],"width":6,"offset":0,"push":0,"pull":0,"size":"md"}],"autoAdjust":false,"hideOnChildrenHidden":false,"customClass":"","hidden":false,"hideLabel":false,"modalEdit":false,"key":"columns","tags":[],"properties":{},"conditional":{"show":null,"when":null,"eq":"","json":""},"customConditional":"","logic":[],"attributes":{},"overlay":{"style":"","page":"","left":"","top":"","width":"","height":""},"type":"columns","input":false,"placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"clearOnHide":false,"refreshOn":"","redrawOn":"","tableView":false,"labelPosition":"top","description":"","errorLabel":"","tooltip":"","tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":null,"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"allowMultipleMasks":false,"tree":false,"id":"e7wum4j"}],"id":"eoa4jqh"},{"type":"button","label":"Submit","key":"submit","size":"md","block":false,"action":"submit","disableOnInvalid":true,"theme":"primary","input":true,"placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"hidden":false,"clearOnHide":true,"refreshOn":"","redrawOn":"","tableView":false,"modalEdit":false,"labelPosition":"top","description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":{"type":"input"},"attributes":{},"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"conditional":{"show":null,"when":null,"eq":""},"overlay":{"style":"","left":"","top":"","width":"","height":""},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"properties":{},"allowMultipleMasks":false,"leftIcon":"","rightIcon":"","dataGridLabel":true,"id":"eh3b4xu"}]},"domainId":1,"roles":["Admin"],"components":[{"title":"Panel","theme":"default","tooltip":"","customClass":"","collapsible":false,"hidden":false,"hideLabel":false,"disabled":false,"modalEdit":false,"key":"panel","tags":[],"properties":{},"customConditional":"","conditional":{"json":"","show":null,"when":null,"eq":""},"logic":[],"attributes":{},"overlay":{"style":"","page":"","left":"","top":"","width":"","height":""},"type":"panel","label":"Panel","breadcrumb":"default","tabindex":"","input":false,"placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"clearOnHide":false,"refreshOn":"","redrawOn":"","tableView":false,"labelPosition":"top","description":"","errorLabel":"","autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":null,"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"allowMultipleMasks":false,"tree":false,"components":[{"label":"Columns","columns":[{"components":[],"width":6,"offset":0,"push":0,"pull":0,"size":"md"},{"components":[],"width":6,"offset":0,"push":0,"pull":0,"size":"md"}],"autoAdjust":false,"hideOnChildrenHidden":false,"customClass":"","hidden":false,"hideLabel":false,"modalEdit":false,"key":"columns","tags":[],"properties":{},"conditional":{"show":null,"when":null,"eq":"","json":""},"customConditional":"","logic":[],"attributes":{},"overlay":{"style":"","page":"","left":"","top":"","width":"","height":""},"type":"columns","input":false,"placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"clearOnHide":false,"refreshOn":"","redrawOn":"","tableView":false,"labelPosition":"top","description":"","errorLabel":"","tooltip":"","tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":null,"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"allowMultipleMasks":false,"tree":false,"id":"e7wum4j"}],"id":"eoa4jqh"},{"type":"button","label":"Submit","key":"submit","size":"md","block":false,"action":"submit","disableOnInvalid":true,"theme":"primary","input":true,"placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"hidden":false,"clearOnHide":true,"refreshOn":"","redrawOn":"","tableView":false,"modalEdit":false,"labelPosition":"top","description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":{"type":"input"},"attributes":{},"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"conditional":{"show":null,"when":null,"eq":""},"overlay":{"style":"","left":"","top":"","width":"","height":""},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"properties":{},"allowMultipleMasks":false,"leftIcon":"","rightIcon":"","dataGridLabel":true,"id":"eh3b4xu"}]}'}}]);
//# sourceMappingURL=66.4161b071.chunk.js.map