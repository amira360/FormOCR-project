(this["webpackJsonpisct-group"]=this["webpackJsonpisct-group"]||[]).push([[49],{3083:function(e,t,a){"use strict";a.r(t);var s=a(13),r=a(89),n=a(633),i=(a(639),a(642),a(1)),o=a.n(i),c=(a(662),a(168)),l=a(3033),d=a(716),u=a(838),m=(a(685),a(686),a(687),a(688),a(717)),j=a(718),b=a(115),h=(a(689),a(658)),g=a(650),p=a(661);t.default=function(e){Object(i.useRef)(null);var t=o.a.useState([]),a=Object(r.a)(t,2),f=a[0],O=a[1],x=o.a.useState(""),v=Object(r.a)(x,2),S=(v[0],v[1],o.a.useState("")),N=Object(r.a)(S,2),P=(N[0],N[1],o.a.useState("")),A=Object(r.a)(P,2),F=(A[0],A[1],o.a.useState([])),C=Object(r.a)(F,2),y=C[0],k=C[1],M=o.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainId),D=Object(r.a)(M,2),I=(D[0],D[1],Object(c.c)((function(e){return e.sidebarShow})),Object(i.useRef)(null)),w=o.a.useState(""),E=Object(r.a)(w,2),z=E[0],R=E[1],T=o.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainName),B=Object(r.a)(T,2),J=B[0],L=(B[1],o.a.useState([])),G=Object(r.a)(L,2),U=G[0],_=G[1],q=Object(i.useState)(!0),H=Object(r.a)(q,2),K=H[0],V=H[1];Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userPermissions")),t=[];e.length&&(e.map((function(e){e.map((function(e){t.push(e.key)}))})),_(t));var a={method:"GET",headers:{"X-Tenant":J,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")}};fetch(b.v+"/api/auth/user/getUsers",a).then((function(e){return new Promise((function(t,a){e.text().then((function(e){t(e.length?JSON.parse(e):null)})).catch((function(e){a(e)}))}))})).then((function(e){console.log(e);var t=[];e.map((function(e){t.push({"S No":e.sno,"Nom d'utilisateur":e.username,Nom:e.firstName,"Pr\xe9nom":e.lastName,Email:e.email,"Date de naissance":e.dateBirth,Department:e.department,Designation:e.designation,username:e.username})})),k(t),O(y),localStorage.setItem("users",JSON.stringify(e)),0!==t.size&&V(!1)})).catch((function(e){console.log(e)}))}),[]);var Q=f.map((function(e){return Object.values(e).join(",")})).join("\n"),W=(encodeURIComponent(Q),function(e){return U.includes("0-0-10-1")?(U.includes("0-0-10-2"),Object(s.jsxs)(n.q,{className:"mp-0",children:[Object(s.jsxs)(n.p,{to:"/admin/user/preview/"+e.username,children:[Object(s.jsx)(u.a,{}),"\xa0\xa0 Aper\xe7u"]}),Object(s.jsxs)(n.p,{to:"/admin/user/edit/"+e.username,children:[Object(s.jsx)(l.a,{})," \xa0\xa0 \xc9diter"]})]})):(U.includes("0-0-10-2"),Object(s.jsx)(n.q,{className:"mp-0",children:Object(s.jsxs)(n.p,{to:"/admin/user/preview/"+e.username,children:[Object(s.jsx)(u.a,{}),"\xa0\xa0 Aper\xe7u"]})}))}),X=Object(s.jsxs)("div",{className:"table-header",children:[Object(s.jsx)(h.Button,{type:"button",label:"Clear",className:"p-button-outlined",icon:"pi pi-filter-slash",onClick:function(){R(""),I.current.reset()}}),Object(s.jsxs)("span",{className:"p-input-icon-left",children:[Object(s.jsx)("i",{className:"pi pi-search"}),Object(s.jsx)(g.InputText,{type:"search",value:z,onChange:function(e){return R(e.target.value)},placeholder:"Global Search"})]})]}),Y=K;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(n.O,{children:Object(s.jsx)(n.k,{children:Object(s.jsxs)(n.f,{style:{zIndex:"10 !important"},children:[Object(s.jsxs)(n.j,{style:{backgroundColor:"#494399"},children:[Object(s.jsx)("span",{style:{color:"#FFFFFF",fontWeight:"bold"},children:"Utilisateurs | G\xe9rer les utilisateurs et les autorisations"}),Object(s.jsxs)("div",{className:"card-header-actions",children:[function(){if(U.includes("0-0-10-0"))return Object(s.jsxs)(n.I,{style:{color:"#FFFFFF"},onClick:function(){return e.history.push("/admin/user/create")},rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:[Object(s.jsx)(d.a,{}),"Ajouter un nouveau"]})}(),Object(s.jsx)(n.I,{style:{color:"#FFFFFF",paddingLeft:"10px"},children:Object(s.jsx)("i",{size:"2xl",className:"pi pi-bars",onClick:function(e){return console.log(e)}})})]})]}),Object(s.jsx)(n.g,{children:Object(s.jsxs)("div",{className:"card",children:[Y&&Object(s.jsx)(p.ProgressBar,{mode:"indeterminate",style:{height:"6px"}}),Object(s.jsxs)(m.DataTable,{value:y,ref:I,header:X,globalFilter:z,dataKey:"id",paginator:!0,rows:10,rowsPerPageOptions:[5,10,25],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"{currentPage} of {totalPages} pages ({totalRecords} items)",className:"p-datatable-sm p-datatable-striped p-datatable-gridlines",children:[Object(s.jsx)(j.Column,{field:function(e){return Object(s.jsx)("td",{children:Object(s.jsxs)(n.o,{className:"m-1",children:[Object(s.jsx)(n.r,{style:{padding:"0px"},children:Object(s.jsx)("i",{size:"2xl",className:"pi pi-bars"})}),W(e)]})})},style:{width:"50px"}}),Object(s.jsx)(j.Column,{field:"S No",header:"S No",sortable:!0}),Object(s.jsx)(j.Column,{field:"Nom d'utilisateur",header:"Nom d'utilisateur",sortable:!0}),Object(s.jsx)(j.Column,{field:"Nom",header:"Nom",sortable:!0}),Object(s.jsx)(j.Column,{field:"Pr\xe9nom",header:"Pr\xe9nom",sortable:!0}),Object(s.jsx)(j.Column,{field:"Email",header:"Email",sortable:!0}),Object(s.jsx)(j.Column,{field:"Department",header:"Department",sortable:!0}),Object(s.jsx)(j.Column,{field:"Designation",header:"Designation",sortable:!0}),Object(s.jsx)(j.Column,{field:"Date de naissance",header:"Date de naissance",sortable:!0})]})]})})]})})})})}},642:function(e,t,a){"use strict";t.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]},650:function(e,t,a){"use strict";e.exports=a(728)},662:function(e,t,a){"use strict";a(13),a(1),a(633),a(653),a(642)},716:function(e,t,a){"use strict";var s=a(1),r=a(1054);t.a=Object(r.a)(s.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},838:function(e,t,a){"use strict";var s=a(1),r=a(1054);t.a=Object(r.a)(s.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye")}}]);
//# sourceMappingURL=49.5ad8af76.chunk.js.map