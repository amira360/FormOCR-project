(this["webpackJsonpisct-group"]=this["webpackJsonpisct-group"]||[]).push([[58],{3085:function(e,t,a){"use strict";a.r(t);var c=a(13),s=a(680),n=a(89),r=a(1),l=a.n(r),i=(a(650),a(658),a(789),a(790),a(791),a(667)),o=(a(743),a(792),a(793),a(733),a(794),a(661),a(795),a(796),a(633)),j=a(697),u=a(704),b=a(115),d=a(875);a(805);t.default=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),h=(a[0],a[1],Object(r.useState)(!1)),m=Object(n.a)(h,2),O=(m[0],m[1],Object(r.useState)("")),p=Object(n.a)(O,2),x=p[0],f=p[1],g=Object(r.useState)(""),v=Object(n.a)(g,2),S=v[0],k=v[1],y=Object(r.useState)(""),N=Object(n.a)(y,2),C=N[0],I=N[1],T=Object(r.useState)(""),w=Object(n.a)(T,2),A=w[0],z=w[1],F=Object(r.useState)(""),L=Object(n.a)(F,2),J=L[0],R=L[1],E=Object(r.useState)(""),H=Object(n.a)(E,2),B=(H[0],H[1],Object(r.useState)("")),G=Object(n.a)(B,2),P=(G[0],G[1],Object(r.useState)("success")),U=Object(n.a)(P,2),X=U[0],M=U[1],V=Object(r.useState)(""),K=Object(n.a)(V,2),W=K[0],Z=K[1],_=Object(r.useState)(""),D=Object(n.a)(_,2),Y=D[0],$=D[1],q=Object(r.useState)("success"),Q=Object(n.a)(q,2),ee=Q[0],te=Q[1],ae=Object(r.useState)("success"),ce=Object(n.a)(ae,2),se=ce[0],ne=ce[1],re=Object(r.useState)(""),le=Object(n.a)(re,2),ie=le[0],oe=le[1],je=Object(r.useState)("success"),ue=Object(n.a)(je,2),be=ue[0],de=ue[1],he=Object(r.useState)(""),me=Object(n.a)(he,2),Oe=me[0],pe=me[1],xe=Object(r.useState)(""),fe=Object(n.a)(xe,2),ge=(fe[0],fe[1],Object(r.useState)("")),ve=Object(n.a)(ge,2),Se=(ve[0],ve[1],Object(r.useState)("")),ke=Object(n.a)(Se,2),ye=(ke[0],ke[1],Object(r.useState)("success")),Ne=Object(n.a)(ye,2),Ce=(Ne[0],Ne[1],Object(r.useState)("")),Ie=Object(n.a)(Ce,2),Te=(Ie[0],Ie[1],Object(r.useState)("")),we=Object(n.a)(Te,2),Ae=(we[0],we[1],Object(r.useState)(null)),ze=Object(n.a)(Ae,2),Fe=ze[0],Le=ze[1],Je=Object(r.useState)(null),Re=Object(n.a)(Je,2),Ee=Re[0],He=Re[1],Be=Object(r.useState)(null),Ge=Object(n.a)(Be,2),Pe=Ge[0],Ue=Ge[1],Xe=Object(r.useState)({}),Me=Object(n.a)(Xe,2),Ve=(Me[0],Me[1],l.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainId)),Ke=Object(n.a)(Ve,2),We=Ke[0],Ze=(Ke[1],l.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainName)),_e=Object(n.a)(Ze,2),De=_e[0],Ye=(_e[1],l.a.useState(localStorage.getItem("username"))),$e=Object(n.a)(Ye,2),qe=($e[0],$e[1],Object(r.useState)(0)),Qe=Object(n.a)(qe,2),et=(Qe[0],Qe[1],Object(r.useRef)(null),Object(r.useRef)(null),l.a.useState([])),tt=Object(n.a)(et,2),at=tt[0],ct=tt[1],st=Object(r.useState)(),nt=Object(n.a)(st,2),rt=nt[0],lt=nt[1];Object(r.useEffect)((function(){var t=e.match.params.username;R(t);var a={method:"GET",headers:{"X-Tenant":De,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")}};fetch(b.v+"/api/auth/role/getRoles",a).then((function(e){return e.json()})).then((function(e){var t=[],a=[];e.map((function(e){t.push({name:e.roleName,key:e.roleName,checked:e.default}),!0===e.default&&a.push({name:e.roleName,key:e.roleName,checked:e.default})})),lt(a),ct(t)})).catch((function(e){console.log(e)})),fetch(b.v+"/api/auth/user/getUserByUsername/"+t,a).then((function(e){return e.json()})).then((function(e){var t=JSON.parse(e.user),a=null;a=e.photo?"data:image/png;base64,"+e.photo:d.a,R(t.username),f(t.firstName),k(t.lastName),z(t.phone),I(t.email),He(a),Le(a),Ue(a);var c=t.roles,s=[];c.map((function(e){s.push({name:e.roleName,key:e.roleName,checked:e.default})})),lt(s)}))}),[]);var it=function(e){var t=Object(s.a)(rt);if(e.checked)t.push(e.value);else for(var a=0;a<t.length;a++){if(t[a].key===e.value.key){t.splice(a,1);break}}lt(t)},ot=function(e,t){return e.length>=t};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(o.f,{children:[Object(c.jsx)(o.j,{children:Object(c.jsx)("h3",{children:"Modifier l'utilisateur"})}),Object(c.jsxs)(o.g,{children:[Object(c.jsxs)(o.ab,{activeTab:"user",children:[Object(c.jsxs)(o.J,{variant:"tabs",children:[Object(c.jsx)(o.K,{children:Object(c.jsx)(o.L,{"data-tab":"user",children:"Information d'utilisateur"})}),Object(c.jsx)(o.K,{children:Object(c.jsx)(o.L,{"data-tab":"role",children:"Roles"})})]}),Object(c.jsxs)(o.Y,{children:[Object(c.jsx)(o.Z,{"data-tab":"user",children:Object(c.jsxs)(o.u,{noValidate:!0,style:{marginTop:"20px"},children:[Object(c.jsxs)(o.v,{row:!0,className:"my-0",children:[Object(c.jsx)(o.k,{sm:12,md:6,children:Object(c.jsxs)("div",{className:"profile-pic",children:[Object(c.jsxs)("label",{className:"-label",htmlFor:"file",children:[Object(c.jsx)("i",{style:{fontWeight:"bold"},className:"pi pi-camera"}),Object(c.jsx)("span",{style:{fontWeight:"bold"},children:"Changer l'image"})]}),Object(c.jsx)("input",{id:"file",type:"file",onChange:function(e){return function(e){var t=document.getElementById("output"),a=e.target.files;/(\.jpg|\.jpeg|\.png|\.gif)$/i.exec(a[0].name)?(He(a[0]),t.src=URL.createObjectURL(a[0])):alert("Format invalid!")}(e)}}),Object(c.jsx)("img",{src:Pe,id:"output",width:"200"})]})}),Object(c.jsxs)(o.k,{sm:12,md:6,children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)(o.v,{children:[Object(c.jsx)(o.H,{htmlFor:"lastname",children:"Nom"}),Object(c.jsx)(o.A,{invalid:"error"===X,id:"lastname",onChange:function(e){k(e.target.value),ot(e.target.value,3)?M("success"):(M("error"),Z("Le nom est obligatoire !"))},value:S}),Object(c.jsx)(o.G,{className:"help-block",children:W})]})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)(o.v,{children:[Object(c.jsx)(o.H,{htmlFor:"firstname",children:"Pr\xe9nom"}),Object(c.jsx)(o.A,{style:{width:"100%"},id:"firstname",invalid:"error"===ee,onChange:function(e){f(e.target.value),ot(e.target.value,3)?te("success"):(te("error"),$("Le pr\xe9nom est obligatoire !"))},value:x}),Object(c.jsx)(o.G,{className:"help-block",children:Y})]})})]})]}),Object(c.jsxs)(o.v,{row:!0,className:"my-0",children:[Object(c.jsx)(o.k,{sm:12,md:6,children:Object(c.jsxs)(o.v,{children:[Object(c.jsx)(o.H,{htmlFor:"username",children:"Nom d'utilisateur"}),Object(c.jsx)(o.A,{id:"username",value:J,disabled:!0})]})}),Object(c.jsx)(o.k,{sm:12,md:6,children:Object(c.jsxs)(o.v,{children:[Object(c.jsx)(o.H,{htmlFor:"email",children:"Email"}),Object(c.jsx)(o.A,{id:"email",invalid:"error"===se,onChange:function(e){I(e.target.value),ot(e.target.value,3)?ne("success"):(ne("error"),oe("L'adresse email  est obligatoire !"))},value:C}),Object(c.jsx)(o.G,{className:"help-block",children:ie})]})})]}),Object(c.jsx)(o.v,{row:!0,className:"my-0",children:Object(c.jsx)(o.k,{sm:12,md:6,children:Object(c.jsxs)(o.v,{children:[Object(c.jsx)(o.H,{htmlFor:"phone",children:"T\xe9l\xe9phone"}),Object(c.jsx)(o.A,{id:"phone",invalid:"error"===be,onChange:function(e){z(e.target.value),ot(e.target.value,3)?de("success"):(de("error"),pe("Le num\xe9ro de t\xe9l\xe9phone email  est obligatoire !"))},value:A}),Object(c.jsx)(o.G,{className:"help-block",children:Oe})]})})})]})}),Object(c.jsx)(o.Z,{"data-tab":"role",children:Object(c.jsx)(o.g,{children:at.map((function(e){return Object(c.jsxs)("div",{className:"field-checkbox",style:{margin:"10px"},children:[Object(c.jsx)(i.Checkbox,{inputId:e.key,name:"role",value:e,onChange:it,checked:rt.some((function(t){return t.key===e.key}))}),Object(c.jsxs)("label",{style:{position:"absolute"},htmlFor:e.key,children:[" \xa0",e.name]})]},e.key)}))})})]})]}),Object(c.jsxs)(o.O,{xs:"4",style:{marginTop:"50px"},children:[Object(c.jsx)(o.k,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0",children:Object(c.jsxs)(o.e,{block:!0,variant:"outline",color:"info",id:"workflowSave",onClick:function(){var t=null;if("success"===ee&&"success"===X&&"success"===be&&"success"===se)if(Ee!==Fe){var a=new FormData;a.append("image",Ee,Ee.name),a.append("domainId",We),a.append("domainName",De),a.append("username",J),localStorage.setItem("image",Ee);var c={method:"POST",headers:{"X-Tenant":De,Authorization:"Bearer "+localStorage.getItem("Authorization")},body:a};fetch(b.v+"/api/auth/user/upload",c).then((function(e){return e.json()})).then((function(a){t=a.url;var c={domainId:We,url:t,username:J,firstname:x,lastname:S,email:C,phone:A,selectedRoles:rt},s={method:"POST",headers:{"X-Tenant":De,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify(c)};fetch(b.v+"/api/auth/user/edit",s).then((function(e){console.log(e)})),e.history.push("/admin/user/list"),window.location.reload()}))}else{var s={domainId:We,username:J,firstname:x,lastname:S,email:C,phone:A,selectedRoles:rt},n={method:"POST",headers:{"X-Tenant":De,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify(s)};fetch(b.v+"/api/auth/user/edit",n).then((function(e){console.log(e)})),e.history.push("/admin/user/list"),e.history.go(0)}},children:[Object(c.jsx)(j.a,{})," Enregister"]})}),Object(c.jsx)(o.k,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0",children:Object(c.jsxs)(o.e,{block:!0,variant:"outline",color:"danger",onClick:function(){return e.history.push("/admin/user/list")},children:[Object(c.jsx)(u.a,{}),"Annuler"]})})]})]})]})})}},697:function(e,t,a){"use strict";var c=a(1),s=a(1054);t.a=Object(s.a)(c.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save")},704:function(e,t,a){"use strict";var c=a(1),s=a(1054);t.a=Object(s.a)(c.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel")},805:function(e,t,a){}}]);
//# sourceMappingURL=58.aee87a9b.chunk.js.map