(this["webpackJsonpisct-group"]=this["webpackJsonpisct-group"]||[]).push([[75],{3081:function(e,t,a){"use strict";a.r(t);var c=a(39),n=a(13),s=a(89),r=a(1),i=a.n(r),o=a(633),l=(a(639),a(653),a(681),a(3025)),j=a(701),u=a(697),h=a(704),d=a(679),p=a(115),b=a(742),m=Object(l.a)((function(e){return{formControl:{margin:e.spacing(1),marginLeft:"0px !important",minWidth:220,maxWidth:300},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}}));t.default=Object(j.a)(Object(c.a)({},m),{withTheme:!0})((function(e){var t=i.a.useState(!0),a=Object(s.a)(t,2),c=(a[0],a[1],i.a.useState(!0)),l=Object(s.a)(c,2),j=(l[0],l[1],i.a.useState("")),O=Object(s.a)(j,2),x=O[0],f=O[1],g=i.a.useState(""),S=Object(s.a)(g,2),v=(S[0],S[1],i.a.useState("")),N=Object(s.a)(v,2),k=N[0],y=N[1],C=i.a.useState(""),J=Object(s.a)(C,2),z=(J[0],J[1],i.a.useState("")),A=Object(s.a)(z,2),I=A[0],T=A[1],w=i.a.useState(""),F=Object(s.a)(w,2),V=F[0],H=F[1],E=i.a.useState("script"),B=Object(s.a)(E,2),L=(B[0],B[1],i.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainId)),M=Object(s.a)(L,2),P=M[0],W=(M[1],i.a.useState([])),X=Object(s.a)(W,2),_=X[0],G=X[1],R=i.a.useState(null),U=Object(s.a)(R,2),q=(U[0],U[1]),D=i.a.useState(null),K=Object(s.a)(D,2),Q=K[0],Y=K[1],Z=i.a.useState([]),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=i.a.useState(null),ce=Object(s.a)(ae,2),ne=(ce[0],ce[1],m(),i.a.useState(localStorage.getItem("username"))),se=Object(s.a)(ne,2),re=se[0],ie=(se[1],i.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainName)),oe=Object(s.a)(ie,2),le=oe[0];oe[1];Object(r.useEffect)((function(){var t={method:"GET",headers:{"X-Tenant":le,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")}};fetch(p.v+"/api/auth/role/getRoles",t).then((function(e){return e.json()})).then((function(e){var t=[];e.map((function(e){t.push({value:e.roleName,label:e.roleName})})),te(t)})).catch((function(e){console.log(e)}));var a=e.match.params.scriptId;T(a);var c={method:"POST",headers:{"X-Tenant":le,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify({id:a})};fetch(p.t+"/api/script/getByScriptId",c).then((function(e){return new Promise((function(t,a){e.text().then((function(e){t(e.length?JSON.parse(e):null)})).catch((function(e){a(e)}))}))})).then((function(e){q(JSON.parse(e.script)),Y(e.script_code);var t=JSON.parse(e.roles);y(JSON.parse(e.script).version),f(JSON.parse(e.script).name),H(JSON.parse(e.script).sno);var a=[];t.map((function(e){a.push({label:e.roleName,value:e.roleName})})),G(a)})).catch((function(e){console.log(e)}))}),[]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(o.k,{xs:"12",sm:"12",children:Object(n.jsxs)(o.f,{children:[Object(n.jsx)(o.j,{children:Object(n.jsx)("h2",{children:"Modifier le script"})}),Object(n.jsx)(o.g,{children:Object(n.jsxs)(o.u,{noValidate:!0,children:[Object(n.jsxs)(o.v,{row:!0,className:"my-0",children:[Object(n.jsx)(o.k,{xs:"6",children:Object(n.jsxs)(o.v,{children:[Object(n.jsx)(o.H,{htmlFor:"scriptSno",children:"S No"}),Object(n.jsx)(o.A,{id:"scriptSno",value:V,disabled:!0})]})}),Object(n.jsx)(o.k,{xs:"6",children:Object(n.jsxs)(o.v,{children:[Object(n.jsx)(o.H,{htmlFor:"scriptName",children:"Nom du script"}),Object(n.jsx)(o.A,{id:"scriptName",onChange:function(e){return f(e.target.value)},value:x})]})})]}),Object(n.jsxs)(o.v,{row:!0,className:"my-0",children:[Object(n.jsx)(o.k,{xs:"6",children:Object(n.jsxs)(o.v,{children:[Object(n.jsx)(o.H,{htmlFor:"scriptVersion",children:"Version"}),Object(n.jsx)(o.A,{id:"scriptVersion",onChange:function(e){return y(e.target.value)},value:k})]})}),Object(n.jsx)(o.k,{sm:12,md:6,children:Object(n.jsxs)(o.v,{children:[Object(n.jsx)(o.H,{htmlFor:"AccessControlUser",children:"Contr\xf4le d'acc\xe8s"}),Object(n.jsx)(d.a,{name:"form-field-name2",placeholder:"Global",value:_,options:ee,onChange:G,isMulti:!0})]})})]}),Object(n.jsxs)(o.f,{children:[Object(n.jsx)(o.j,{style:{backgroundColor:"#F5F5F5"},children:"Script"}),Object(n.jsx)(o.g,{style:{padding:"0px"},children:Object(n.jsx)(b.a,{height:"70vh",defaultLanguage:"java",value:Q,onChange:function(e,t){return Y(e)}})})]}),Object(n.jsxs)(o.O,{xs:"4",children:[Object(n.jsx)(o.k,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0",children:Object(n.jsxs)(o.e,{block:!0,variant:"outline",color:"info",id:"workflowSave",onClick:function(){var t={scriptId:I,scriptName:x,scriptVersion:k,scriptRoles:_,script:Q,domainId:P,username:re},a={method:"POST",headers:{"X-Tenant":le,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify(t)};fetch(p.t+"/api/script/edit",a).then((function(e){return new Promise((function(t,a){e.text().then((function(e){t(e.length?JSON.parse(e):null)})).catch((function(e){a(e)}))}))})).then((function(t){e.history.push("/admin/script/list")}))},children:[Object(n.jsx)(u.a,{})," Enregister"]})}),Object(n.jsx)(o.k,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0",children:Object(n.jsxs)(o.e,{block:!0,variant:"outline",color:"danger",onClick:function(){return e.history.push("/admin/script/list")},children:[Object(n.jsx)(h.a,{}),"Annuler"]})})]})]})})]})})})}))},697:function(e,t,a){"use strict";var c=a(1),n=a(1054);t.a=Object(n.a)(c.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save")},704:function(e,t,a){"use strict";var c=a(1),n=a(1054);t.a=Object(n.a)(c.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel")}}]);
//# sourceMappingURL=75.0d23527f.chunk.js.map