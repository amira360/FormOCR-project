(this["webpackJsonpisct-group"]=this["webpackJsonpisct-group"]||[]).push([[72],{3058:function(e,t,a){"use strict";a.r(t);var n=a(39),c=a(13),o=a(89),r=a(1),s=a.n(r),i=a(633),l=(a(639),a(653),a(681)),m=a(3025),j=a(701),d=a(115),h=(a(754),a(755),a(697)),u=a(704),b=a(679),O=Object(m.a)((function(e){return{formControl:{margin:e.spacing(1),marginLeft:"0px !important",minWidth:220,maxWidth:300},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}}));t.default=Object(j.a)(Object(n.a)({},O),{withTheme:!0})((function(e){var t=s.a.useState(!0),a=Object(o.a)(t,2),n=(a[0],a[1],s.a.useState(!0)),m=Object(o.a)(n,2),j=(m[0],m[1],s.a.useState("")),f=Object(o.a)(j,2),x=f[0],g=f[1],p=s.a.useState(""),v=Object(o.a)(p,2),S=(v[0],v[1],s.a.useState("")),N=Object(o.a)(S,2),k=N[0],C=N[1],y=s.a.useState(""),F=Object(o.a)(y,2),I=F[0],A=F[1],z=s.a.useState(""),T=Object(o.a)(z,2),J=(T[0],T[1],s.a.useState("")),w=Object(o.a)(J,2),B=w[0],H=w[1],V=s.a.useState(""),E=Object(o.a)(V,2),_=E[0],M=E[1],G=s.a.useState("form"),L=Object(o.a)(G,2),P=(L[0],L[1],s.a.useState("")),W=Object(o.a)(P,2),X=W[0],D=W[1],R=s.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainId),U=Object(o.a)(R,2),q=U[0],K=(U[1],s.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainName)),Q=Object(o.a)(K,2),Y=Q[0],Z=(Q[1],s.a.useState([])),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ae=s.a.useState([]),ne=Object(o.a)(ae,2),ce=ne[0],oe=ne[1],re=s.a.useState([]),se=Object(o.a)(re,2),ie=se[0],le=se[1],me=s.a.useState([]),je=Object(o.a)(me,2),de=(je[0],je[1]),he=s.a.useState({}),ue=Object(o.a)(he,2),be=ue[0],Oe=ue[1],fe=s.a.useState({}),xe=Object(o.a)(fe,2),ge=xe[0],pe=xe[1],ve=s.a.useState(""),Se=Object(o.a)(ve,2),Ne=(Se[0],Se[1],s.a.useState(!1)),ke=Object(o.a)(Ne,2),Ce=ke[0],ye=ke[1],Fe=s.a.useState(localStorage.getItem("username")),Ie=Object(o.a)(Fe,2),Ae=Ie[0];Ie[1],O();Object(r.useEffect)((function(){var t=[],a={method:"GET",headers:{"X-Tenant":Y,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")}};fetch(d.v+"/api/auth/role/getRoles",a).then((function(e){return e.json()})).then((function(a){console.log(a),a.map((function(e){t.push({value:e.roleName,label:e.roleName,id:e.roleId})})),le(t);var n=e.match.params.formCode,c=e.match.params.formId,o={method:"POST",headers:{"X-Tenant":Y,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify({code:n})};fetch(d.g+"/api/form/getByFormCode",o).then((function(e){return new Promise((function(t,a){e.text().then((function(e){t(e.length?JSON.parse(e):null)})).catch((function(e){a(e)}))}))})).then((function(e){var a=JSON.parse(e.form_data),n=JSON.parse(e.form_roles);console.log(a);var o=JSON.parse(e.form_json);C(c),H(a.code),g(a.name),A(a.sno),M(a.version),Oe(a);var r=[];console.log(n),console.log(t),n.map((function(e){var a=t.filter((function(t){return t.id===e.roleId}));r.push(a[0])})),console.log(r),de(r),te([].concat(r)),pe(o)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}),[]);return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(i.k,{xs:"12",sm:"12",children:Object(c.jsxs)(i.f,{children:[Object(c.jsx)(i.j,{children:Object(c.jsxs)("h4",{children:["Modifier  -  ",be.name]})}),Object(c.jsx)(i.g,{children:Object(c.jsxs)(i.u,{noValidate:!0,children:[Object(c.jsxs)(i.v,{row:!0,className:"my-0",children:[Object(c.jsx)(i.k,{sm:12,md:6,children:Object(c.jsxs)(i.v,{children:[Object(c.jsx)(i.H,{htmlFor:"SNo",children:"S No"}),Object(c.jsx)(i.A,{id:"SNo",value:I,disabled:!0})]})}),Object(c.jsx)(i.k,{sm:12,md:6,children:Object(c.jsxs)(i.v,{children:[Object(c.jsx)(i.H,{htmlFor:"formName",children:"Nom du formulaire"}),Object(c.jsx)(i.A,{id:"formName",onChange:function(e){return g(e.target.value)},value:x})]})})]}),Object(c.jsxs)(i.v,{row:!0,className:"my-0",children:[Object(c.jsx)(i.k,{sm:12,md:6,children:Object(c.jsxs)(i.v,{children:[Object(c.jsx)(i.H,{htmlFor:"formCode",children:"Form code"}),Object(c.jsx)(i.A,{id:"formCode",value:B,disabled:!0})]})}),Object(c.jsx)(i.k,{sm:12,md:6,children:Object(c.jsxs)(i.v,{children:[Object(c.jsx)(i.H,{htmlFor:"AccessControlUser",children:"Contr\xf4le d'acc\xe8s"}),Object(c.jsx)(b.a,{name:"form-field-name2",placeholder:"Global",value:ee,options:ie,onChange:te,isMulti:!0})]})})]}),Object(c.jsxs)(i.v,{row:!0,className:"my-0",children:[Object(c.jsx)(i.k,{sm:12,md:6,children:Object(c.jsxs)(i.v,{children:[Object(c.jsx)(i.H,{htmlFor:"formVersion",children:"Version"}),Object(c.jsx)(i.A,{id:"formVersion",onChange:function(e){return M(e.target.value)},value:_,disabled:!0})]})}),Object(c.jsx)(i.k,{sm:12,md:6,children:Object(c.jsxs)(i.v,{variant:"custom-checkbox",inline:!0,style:{marginBottom:"20px"},children:[Object(c.jsx)(i.B,{custom:!0,id:"inline-checkbox2",name:"inline-checkbox2",onChange:function(e){var t;t=e.target.checked,ye(t),document.getElementById("formVersion").disabled=!0!==t,console.log(e.target.checked)},value:Ce}),Object(c.jsx)(i.H,{variant:"custom-checkbox",htmlFor:"inline-checkbox2",children:"Nouvelle version"})]})})]}),Object(c.jsxs)(i.f,{children:[Object(c.jsx)(i.j,{style:{backgroundColor:"#F5F5F5"},children:"G\xe9n\xe9rateur de formulaires"}),Object(c.jsx)(i.g,{children:Object(c.jsx)(l.FormBuilder,{form:ge,onChange:function(e){oe(e.components)}})})]}),Object(c.jsxs)(i.O,{xs:"4",children:[Object(c.jsx)(i.k,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0",children:Object(c.jsxs)(i.e,{block:!0,variant:"outline",color:"info",id:"formSave",onClick:function(t){t.preventDefault();var a={display:"form",components:ce},n={method:"POST",headers:{"X-Tenant":Y,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify({formName:x,formId:k,formCode:B,username:Ae,domainId:q,roles:ee,form:a,version:_,newVersion:Ce})};""===X&&D("error"),fetch(d.g+"/api/form/edit",n).then((function(t){console.log(t),e.history.push("/admin/form/list")}))},children:[Object(c.jsx)(h.a,{})," Enregister"]})}),Object(c.jsx)(i.k,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0",children:Object(c.jsxs)(i.e,{block:!0,variant:"outline",color:"danger",onClick:function(){return e.history.push("/admin/form/list")},children:[Object(c.jsx)(u.a,{}),"Annuler"]})})]})]})})]})})})}))},697:function(e,t,a){"use strict";var n=a(1),c=a(1054);t.a=Object(c.a)(n.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save")},704:function(e,t,a){"use strict";var n=a(1),c=a(1054);t.a=Object(c.a)(n.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel")}}]);
//# sourceMappingURL=72.b1e01bd3.chunk.js.map