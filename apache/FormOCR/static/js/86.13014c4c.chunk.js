(this["webpackJsonpisct-group"]=this["webpackJsonpisct-group"]||[]).push([[86],{3098:function(e,a,t){"use strict";t.r(a);var l=t(39),s=t(13),i=t(89),n=t(1),o=t.n(n),u=t(633),c=(t(639),t(653),t(3025)),r=t(701),d=(t(778),t(1062)),f=t.n(d),h=t(115),p=t(704),b=t(679),m=Object(c.a)((function(e){return{formControl:{margin:e.spacing(1),marginLeft:"0px !important",minWidth:220,maxWidth:300},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}}));a.default=Object(r.a)(Object(l.a)({},m),{withTheme:!0})((function(e){var a=o.a.useState(!0),t=Object(i.a)(a,2),l=(t[0],t[1],o.a.useState(!0)),c=Object(i.a)(l,2),r=(c[0],c[1],o.a.useState("")),d=Object(i.a)(r,2),j=(d[0],d[1],o.a.useState("")),O=Object(i.a)(j,2),g=(O[0],O[1]),x=o.a.useState(""),w=Object(i.a)(x,2),v=(w[0],w[1],o.a.useState("")),C=Object(i.a)(v,2),S=(C[0],C[1],o.a.useState("")),y=Object(i.a)(S,2),V=(y[0],y[1],o.a.useState("support@isct-group.com")),k=Object(i.a)(V,2),q=(k[0],k[1]),I=o.a.useState(""),N=Object(i.a)(I,2),P=N[0],L=N[1],D=o.a.useState(""),H=Object(i.a)(D,2),A=H[0],M=H[1],T=o.a.useState(""),z=Object(i.a)(T,2),F=(z[0],z[1]),W=o.a.useState(""),E=Object(i.a)(W,2),J=E[0],B=E[1],G=o.a.useState(""),R=Object(i.a)(G,2),_=R[0],X=R[1],U=o.a.useState(""),K=Object(i.a)(U,2),Q=K[0],Y=K[1],Z=o.a.useState(""),$=Object(i.a)(Z,2),ee=($[0],$[1],o.a.useState("")),ae=Object(i.a)(ee,2),te=(ae[0],ae[1],o.a.useState("")),le=Object(i.a)(te,2),se=(le[0],le[1],o.a.useState("")),ie=Object(i.a)(se,2),ne=(ie[0],ie[1],o.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainId)),oe=Object(i.a)(ne,2),ue=(oe[0],oe[1],o.a.useState([])),ce=Object(i.a)(ue,2),re=(ce[0],ce[1],o.a.useState([])),de=Object(i.a)(re,2),fe=de[0],he=de[1],pe=o.a.useState([]),be=Object(i.a)(pe,2),me=(be[0],be[1],o.a.useState([])),je=Object(i.a)(me,2),Oe=je[0],ge=je[1],xe=o.a.useState(""),we=Object(i.a)(xe,2),ve=(we[0],we[1],o.a.useState("")),Ce=Object(i.a)(ve,2),Se=Ce[0],ye=Ce[1],Ve=o.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainName),ke=Object(i.a)(Ve,2),qe=ke[0];ke[1],m();Object(n.useEffect)((function(){var a=e.match.params.messageId;console.log(a),g(a);var t={method:"GET",headers:{"X-Tenant":qe,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")}};fetch(h.v+"/api/auth/role/getRoles",t).then((function(e){return e.json()})).then((function(e){console.log(e);var a=[];e.map((function(e){a.push({value:e.roleName,label:e.roleName})})),ge(a),console.log(Oe)})).catch((function(e){console.log(e)}));var l=e.match.params.messageId;console.log(l),F(l);var s={method:"POST",headers:{"X-Tenant":qe,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify({id:l})};fetch(h.p+"/api/auth/getById",s).then((function(e){return new Promise((function(a,t){e.text().then((function(e){a(e.length?JSON.parse(e):null)})).catch((function(e){t(e)}))}))})).then((function(e){console.log(e);var a=JSON.parse(e.notification),t=e.messaging_msg;ye(t);var l=JSON.parse(e.notificationToRoles),s=[];l.map((function(e){s.push({value:e.roleName,label:e.roleName})})),he(s),Y(a.messagingBcc),X(a.messagingCc),q("support@isct-group.com"),M(a.messagingSubject),L(a.messagingTo),B(a.sno)})).catch((function(e){console.log(e)}))}),[]);return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(u.k,{xs:"12",sm:"12",children:Object(s.jsxs)(u.f,{children:[Object(s.jsx)(u.j,{children:Object(s.jsx)("h2",{children:"Details de message"})}),Object(s.jsx)(u.g,{children:Object(s.jsxs)(u.u,{noValidate:!0,children:[Object(s.jsxs)(u.v,{row:!0,className:"my-0",children:[Object(s.jsx)(u.k,{xs:"6",children:Object(s.jsxs)(u.v,{children:[Object(s.jsx)(u.H,{htmlFor:"SNo",children:"S No"}),Object(s.jsx)(u.A,{id:"SNo",onChange:function(e){return B(e.target.value)},value:J,disabled:!0})]})}),Object(s.jsx)(u.k,{xs:"6",children:Object(s.jsxs)(u.v,{children:[Object(s.jsx)(u.H,{htmlFor:"Subject",children:"Sujet"}),Object(s.jsx)(u.A,{id:"Subject",onChange:function(e){return M(e.target.value)},value:A,disabled:!0})]})})]}),Object(s.jsxs)(u.v,{row:!0,className:"my-0",children:[Object(s.jsx)(u.k,{xs:"6",children:Object(s.jsxs)(u.v,{children:[Object(s.jsx)(u.H,{htmlFor:"To",children:"\xc0"}),Object(s.jsx)(u.A,{id:"To",disabled:!0,onChange:function(e){return L(e.target.value)},value:P})]})}),Object(s.jsx)(u.k,{sm:12,md:6,children:Object(s.jsxs)(u.v,{children:[Object(s.jsx)(u.H,{htmlFor:"AccessControlUser",children:"\xc0 (Roles)"}),Object(s.jsx)(b.a,{disabled:!0,name:"form-field-name2",placeholder:"Global",value:fe,isMulti:!0})]})})]}),Object(s.jsxs)(u.v,{row:!0,className:"my-0",children:[Object(s.jsx)(u.k,{xs:"6",children:Object(s.jsxs)(u.v,{children:[Object(s.jsx)(u.H,{htmlFor:"Cc",children:"Cc"}),Object(s.jsx)(u.A,{id:"Cc",disabled:!0,onChange:function(e){return X(e.target.value)},value:_})]})}),Object(s.jsx)(u.k,{xs:"6",children:Object(s.jsxs)(u.v,{children:[Object(s.jsx)(u.H,{htmlFor:"Bcc",children:"Cci"}),Object(s.jsx)(u.A,{id:"Bcc",disabled:!0,onChange:function(e){return Y(e.target.value)},value:Q})]})})]}),Object(s.jsxs)(u.f,{children:[Object(s.jsx)(u.j,{style:{backgroundColor:"#F5F5F5"},children:"Body"}),Object(s.jsx)(u.g,{style:{padding:"0px"},children:Object(s.jsx)(f.a,{disabled:!0,data:Se,onChange:function(e){ye(e.editor.getData())}})})]}),Object(s.jsx)(u.O,{xs:"4",children:Object(s.jsx)(u.k,{xs:"4",className:"text-md-left",children:Object(s.jsxs)(u.e,{color:"danger",onClick:function(){return e.history.push("/admin/messaging/list")},children:[Object(s.jsx)(p.a,{}),"Cancel"]})})})]})})]})})})}))},778:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var l='{"display":"form","form":{"display":"form","components":[{"title":"Panel","theme":"default","tooltip":"","customClass":"","collapsible":false,"hidden":false,"hideLabel":false,"disabled":false,"modalEdit":false,"key":"panel","tags":[],"properties":{},"customConditional":"","conditional":{"json":"","show":null,"when":null,"eq":""},"logic":[],"attributes":{},"overlay":{"style":"","page":"","left":"","top":"","width":"","height":""},"type":"panel","label":"Panel","breadcrumb":"default","tabindex":"","input":false,"placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"clearOnHide":false,"refreshOn":"","redrawOn":"","tableView":false,"labelPosition":"top","description":"","errorLabel":"","autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":null,"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"allowMultipleMasks":false,"tree":false,"components":[{"label":"Columns","columns":[{"components":[],"width":6,"offset":0,"push":0,"pull":0,"size":"md"},{"components":[],"width":6,"offset":0,"push":0,"pull":0,"size":"md"}],"autoAdjust":false,"hideOnChildrenHidden":false,"customClass":"","hidden":false,"hideLabel":false,"modalEdit":false,"key":"columns","tags":[],"properties":{},"conditional":{"show":null,"when":null,"eq":"","json":""},"customConditional":"","logic":[],"attributes":{},"overlay":{"style":"","page":"","left":"","top":"","width":"","height":""},"type":"columns","input":false,"placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"clearOnHide":false,"refreshOn":"","redrawOn":"","tableView":false,"labelPosition":"top","description":"","errorLabel":"","tooltip":"","tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":null,"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"allowMultipleMasks":false,"tree":false,"id":"e7wum4j"}],"id":"eoa4jqh"},{"type":"button","label":"Submit","key":"submit","size":"md","block":false,"action":"submit","disableOnInvalid":true,"theme":"primary","input":true,"placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"hidden":false,"clearOnHide":true,"refreshOn":"","redrawOn":"","tableView":false,"modalEdit":false,"labelPosition":"top","description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":{"type":"input"},"attributes":{},"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"conditional":{"show":null,"when":null,"eq":""},"overlay":{"style":"","left":"","top":"","width":"","height":""},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"properties":{},"allowMultipleMasks":false,"leftIcon":"","rightIcon":"","dataGridLabel":true,"id":"eh3b4xu"}]},"domainId":1,"roles":["Admin"],"components":[{"title":"Panel","theme":"default","tooltip":"","customClass":"","collapsible":false,"hidden":false,"hideLabel":false,"disabled":false,"modalEdit":false,"key":"panel","tags":[],"properties":{},"customConditional":"","conditional":{"json":"","show":null,"when":null,"eq":""},"logic":[],"attributes":{},"overlay":{"style":"","page":"","left":"","top":"","width":"","height":""},"type":"panel","label":"Panel","breadcrumb":"default","tabindex":"","input":false,"placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"clearOnHide":false,"refreshOn":"","redrawOn":"","tableView":false,"labelPosition":"top","description":"","errorLabel":"","autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":null,"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"allowMultipleMasks":false,"tree":false,"components":[{"label":"Columns","columns":[{"components":[],"width":6,"offset":0,"push":0,"pull":0,"size":"md"},{"components":[],"width":6,"offset":0,"push":0,"pull":0,"size":"md"}],"autoAdjust":false,"hideOnChildrenHidden":false,"customClass":"","hidden":false,"hideLabel":false,"modalEdit":false,"key":"columns","tags":[],"properties":{},"conditional":{"show":null,"when":null,"eq":"","json":""},"customConditional":"","logic":[],"attributes":{},"overlay":{"style":"","page":"","left":"","top":"","width":"","height":""},"type":"columns","input":false,"placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"clearOnHide":false,"refreshOn":"","redrawOn":"","tableView":false,"labelPosition":"top","description":"","errorLabel":"","tooltip":"","tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":null,"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"allowMultipleMasks":false,"tree":false,"id":"e7wum4j"}],"id":"eoa4jqh"},{"type":"button","label":"Submit","key":"submit","size":"md","block":false,"action":"submit","disableOnInvalid":true,"theme":"primary","input":true,"placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"hidden":false,"clearOnHide":true,"refreshOn":"","redrawOn":"","tableView":false,"modalEdit":false,"labelPosition":"top","description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":{"type":"input"},"attributes":{},"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"conditional":{"show":null,"when":null,"eq":""},"overlay":{"style":"","left":"","top":"","width":"","height":""},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"properties":{},"allowMultipleMasks":false,"leftIcon":"","rightIcon":"","dataGridLabel":true,"id":"eh3b4xu"}]}'}}]);
//# sourceMappingURL=86.13014c4c.chunk.js.map