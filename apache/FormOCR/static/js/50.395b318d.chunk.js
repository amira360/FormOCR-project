(this["webpackJsonpisct-group"]=this["webpackJsonpisct-group"]||[]).push([[50],{3099:function(e,t,a){"use strict";a.r(t);var s=a(13),n=a(89),i=a(633),r=(a(639),a(642),a(1)),o=a.n(r),d=(a(662),a(168)),c=(a(3033),a(716),a(689),a(115)),u=(a(685),a(686),a(687),a(688),a(717),a(718),a(658)),l=a(650);a(661);t.default=function(e){Object(r.useRef)(null);var t=o.a.useState([]),a=Object(n.a)(t,2),m=a[0],g=a[1],h=o.a.useState(""),b=Object(n.a)(h,2),f=(b[0],b[1],o.a.useState("")),j=Object(n.a)(f,2),p=(j[0],j[1],o.a.useState("")),O=Object(n.a)(p,2),S=(O[0],O[1],o.a.useState([])),v=Object(n.a)(S,2),A=(v[0],v[1]),x=o.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainName),M=Object(n.a)(x,2),I=M[0],P=(M[1],o.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainId)),N=Object(n.a)(P,2),y=N[0],F=(N[1],Object(d.c)((function(e){return e.sidebarShow})),Object(r.useRef)(null)),J=o.a.useState(""),k=Object(n.a)(J,2),w=k[0],B=k[1],E=o.a.useState([]),T=Object(n.a)(E,2),C=(T[0],T[1]),D=Object(r.useState)(!0),z=Object(n.a)(D,2),G=(z[0],z[1]);Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userPermissions")),t=[];e.length&&(e.map((function(e){e.map((function(e){t.push(e.key)}))})),C(t));var a={method:"POST",headers:{"X-Tenant":I,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify({domainId:y})};fetch(c.r+"/api/print/getAll",a).then((function(e){return new Promise((function(t,a){e.text().then((function(e){t(e.length?JSON.parse(e):null)})).catch((function(e){a(e)}))}))})).then((function(e){console.log(e);var t=[];e.map((function(e){t.push({"S No":e.sno,Nom:e.name,Version:e.version,id:e.id})})),A(t),g(t),0!==t.size&&G(!1),localStorage.setItem("prints",JSON.stringify(e))})).catch((function(e){console.log(e)}))}),[]);var R=m.map((function(e){return Object.values(e).join(",")})).join("\n");encodeURIComponent(R),u.Button,l.InputText;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(i.O,{children:Object(s.jsx)(i.k,{children:Object(s.jsxs)(i.f,{style:{zIndex:"10 !important"},children:[Object(s.jsxs)(i.j,{style:{backgroundColor:"#494399"},children:[Object(s.jsx)("span",{style:{color:"#FFFFFF",fontWeight:"bold"},children:"Liste des Cartographies"}),Object(s.jsx)("div",{className:"card-header-actions"})]}),Object(s.jsx)(i.g,{children:Object(s.jsx)("div",{children:Object(s.jsx)("h2",{children:"D\xe9sol\xe9! il s'agissait d'un probl\xe8me temporaire ! "})})})]})})})})}},642:function(e,t,a){"use strict";t.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]},650:function(e,t,a){"use strict";e.exports=a(728)},662:function(e,t,a){"use strict";a(13),a(1),a(633),a(653),a(642)},716:function(e,t,a){"use strict";var s=a(1),n=a(1054);t.a=Object(n.a)(s.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")}}]);
//# sourceMappingURL=50.395b318d.chunk.js.map