(this["webpackJsonpisct-group"]=this["webpackJsonpisct-group"]||[]).push([[76],{3089:function(e,t,a){"use strict";a.r(t);var c=a(13),s=a(89),j=a(1),n=a.n(j),l=(a(650),a(658),a(789),a(790),a(791),a(667)),r=(a(743),a(792),a(793),a(733),a(794),a(661),a(795),a(796),a(805),a(764),a(633)),b=a(3033),i=a(115),O=a(875);a(742);t.default=function(e){var t=Object(j.useState)(!1),a=Object(s.a)(t,2),o=(a[0],a[1],Object(j.useState)(!1)),d=Object(s.a)(o,2),u=(d[0],d[1],Object(j.useState)("")),h=Object(s.a)(u,2),m=h[0],x=h[1],p=Object(j.useState)(""),S=Object(s.a)(p,2),f=S[0],v=S[1],g=Object(j.useState)(""),k=Object(s.a)(g,2),N=k[0],y=k[1],w=Object(j.useState)(""),A=Object(s.a)(w,2),F=A[0],I=A[1],T=Object(j.useState)(""),J=Object(s.a)(T,2),H=J[0],R=J[1],C=Object(j.useState)(""),E=Object(s.a)(C,2),z=(E[0],E[1],Object(j.useState)("")),B=Object(s.a)(z,2),K=(B[0],B[1],Object(j.useState)("")),L=Object(s.a)(K,2),P=(L[0],L[1],Object(j.useState)("")),U=Object(s.a)(P,2),Z=(U[0],U[1],Object(j.useState)("")),_=Object(s.a)(Z,2),G=(_[0],_[1],Object(j.useState)("")),M=Object(s.a)(G,2),V=(M[0],M[1],Object(j.useState)("")),X=Object(s.a)(V,2),Y=(X[0],X[1],Object(j.useState)("")),q=Object(s.a)(Y,2),D=(q[0],q[1],Object(j.useState)("")),Q=Object(s.a)(D,2),W=(Q[0],Q[1],Object(j.useState)("")),$=Object(s.a)(W,2),ee=($[0],$[1],Object(j.useState)("")),te=Object(s.a)(ee,2),ae=(te[0],te[1],Object(j.useState)("")),ce=Object(s.a)(ae,2),se=(ce[0],ce[1],Object(j.useState)("")),je=Object(s.a)(se,2),ne=(je[0],je[1],Object(j.useState)(null)),le=Object(s.a)(ne,2),re=le[0],be=le[1],ie=Object(j.useState)({}),Oe=Object(s.a)(ie,2),oe=(Oe[0],Oe[1],n.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainId)),de=Object(s.a)(oe,2),ue=(de[0],de[1],n.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainName)),he=Object(s.a)(ue,2),me=he[0],xe=(he[1],n.a.useState(localStorage.getItem("username"))),pe=Object(s.a)(xe,2),Se=pe[0],fe=pe[1],ve=Object(j.useState)(0),ge=Object(s.a)(ve,2),ke=(ge[0],ge[1],Object(j.useRef)(null),Object(j.useRef)(null),n.a.useState([])),Ne=Object(s.a)(ke,2),ye=Ne[0],we=Ne[1],Ae=Object(j.useState)([]),Fe=Object(s.a)(Ae,2),Ie=Fe[0],Te=Fe[1];Object(j.useEffect)((function(){var t=e.match.params.username;fe(t);var a={method:"GET",headers:{"X-Tenant":me,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")}};fetch(i.v+"/api/auth/role/getRoles",a).then((function(e){return e.json()})).then((function(e){var t=[];e.map((function(e){t.push({name:e.roleName,key:e.roleName,checked:e.default})})),we(t)})).catch((function(e){console.log(e)})),fetch(i.v+"/api/auth/user/getUserByUsername/"+t,a).then((function(e){return e.json()})).then((function(e){console.log(e);var t=JSON.parse(e.user),a=null;a=e.photo?"data:image/png;base64,"+e.photo:O.a,R(t.username),x(t.firstName),v(t.lastName),I(t.phone),y(t.email),be(a);var c=t.roles,s=[];c.map((function(e){s.push({name:e.roleName,key:e.roleName,checked:e.default})})),Te(s)}))}),[]);return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(r.f,{children:[Object(c.jsx)(r.j,{children:Object(c.jsx)("h3",{children:"Profile"})}),Object(c.jsxs)(r.g,{children:[Object(c.jsxs)(r.ab,{activeTab:"user",children:[Object(c.jsxs)(r.J,{variant:"tabs",children:[Object(c.jsx)(r.K,{children:Object(c.jsx)(r.L,{"data-tab":"user",children:"Information d'utilisateur"})}),Object(c.jsx)(r.K,{children:Object(c.jsx)(r.L,{"data-tab":"role",children:"Roles"})})]}),Object(c.jsxs)(r.Y,{children:[Object(c.jsx)(r.Z,{"data-tab":"user",children:Object(c.jsxs)(r.u,{noValidate:!0,style:{marginTop:"20px"},children:[Object(c.jsxs)(r.v,{row:!0,className:"my-0",children:[Object(c.jsx)(r.k,{sm:12,md:6,children:Object(c.jsx)("div",{className:"profile-pic",children:Object(c.jsx)("img",{src:re,id:"output",width:"200"})})}),Object(c.jsxs)(r.k,{sm:12,md:6,children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)(r.v,{children:[Object(c.jsx)(r.H,{htmlFor:"lastname",children:"Nom"}),Object(c.jsx)(r.A,{id:"lastname",disabled:!0,value:f})]})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)(r.v,{children:[Object(c.jsx)(r.H,{htmlFor:"firstname",children:"Pr\xe9nom"}),Object(c.jsx)(r.A,{style:{width:"100%"},id:"firstname",disabled:!0,value:m})]})})]})]}),Object(c.jsxs)(r.v,{row:!0,className:"my-0",children:[Object(c.jsx)(r.k,{sm:12,md:6,children:Object(c.jsxs)(r.v,{children:[Object(c.jsx)(r.H,{htmlFor:"username",children:"Nom d'utilisateur"}),Object(c.jsx)(r.A,{id:"username",disabled:!0,value:H})]})}),Object(c.jsx)(r.k,{sm:12,md:6,children:Object(c.jsxs)(r.v,{children:[Object(c.jsx)(r.H,{htmlFor:"email",children:"Email"}),Object(c.jsx)(r.A,{id:"email",disabled:!0,value:N})]})})]}),Object(c.jsx)(r.v,{row:!0,className:"my-0",children:Object(c.jsx)(r.k,{sm:12,md:6,children:Object(c.jsxs)(r.v,{children:[Object(c.jsx)(r.H,{htmlFor:"phone",children:"T\xe9l\xe9phone"}),Object(c.jsx)(r.A,{id:"phone",disabled:!0,value:F})]})})})]})}),Object(c.jsx)(r.Z,{"data-tab":"role",children:Object(c.jsx)(r.g,{children:ye.map((function(e){return Object(c.jsxs)("div",{className:"field-checkbox",style:{margin:"10px"},children:[Object(c.jsx)(l.Checkbox,{disabled:!0,inputId:e.key,name:"role",value:e,checked:Ie.some((function(t){return t.key===e.key}))}),Object(c.jsxs)("label",{style:{position:"absolute"},htmlFor:e.key,children:[" \xa0",e.name]})]},e.key)}))})})]})]}),Object(c.jsx)(r.O,{xs:"4",style:{marginTop:"50px"},children:Object(c.jsx)(r.k,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0",children:Object(c.jsxs)(r.e,{block:!0,variant:"outline",color:"info",id:"workflowSave",onClick:function(){e.history.push("/user/edit/"+Se)},children:[Object(c.jsx)(b.a,{})," Modifier"]})})})]})]})})}},805:function(e,t,a){}}]);
//# sourceMappingURL=76.860d02d5.chunk.js.map