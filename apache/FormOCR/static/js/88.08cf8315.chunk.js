(this["webpackJsonpisct-group"]=this["webpackJsonpisct-group"]||[]).push([[88],{3069:function(e,t,n){"use strict";n.r(t);var a=n(13),i=n(680),s=n(89),c=n(1),o=n.n(c),r=(n(91),n(994),n(3106)),u=n(115),l=n(639),h=n(21),d=n(633),m=n(716);t.default=function(e){var t=Object(c.useState)({showLeafIcon:!1}),n=Object(s.a)(t,2),f=n[0],b=(n[1],Object(c.useState)({})),O=Object(s.a)(b,2),p=(O[0],O[1]),j=Object(c.useState)(!0),S=Object(s.a)(j,2),g=S[0],v=(S[1],Object(c.useState)(null)),x=Object(s.a)(v,2),y=x[0],N=x[1],I=Object(c.useState)(null),J=Object(s.a)(I,2),M=J[0],C=J[1],w=Object(c.useState)([]),k=Object(s.a)(w,2),T=k[0],A=k[1],z=o.a.useState([]),P=Object(s.a)(z,2),_=P[0],B=P[1],E=o.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainName),L=Object(s.a)(E,2),X=L[0],q=(L[1],o.a.useState(localStorage.getItem("username"))),D=Object(s.a)(q,2),G=D[0];D[1],Object(h.g)();Object(c.useEffect)((function(){var e=[],t={method:"GET",headers:{"X-Tenant":X,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")}};fetch(u.l+"/api/menu/auth/allMastersMenu/"+G,t).then((function(e){return new Promise((function(t,n){e.text().then((function(e){t(e.length?JSON.parse(e):null)})).catch((function(e){n(e)}))}))})).then((function(t){var n=JSON.parse(t.menu),i=JSON.parse(t.submenu),s={};n.map((function(t,n){if(s.title=t.name,s.key="3-17-"+t.id,s.icon=Object(a.jsx)(l.a,{name:t.icon,customClasses:"c-sidebar-nav-icon"}),"CSidebarNavItem"===t._tag)s.to=t.to,e.push(s),s={};else{var c=i[n];s.expanded=!0;var o=[],r={};c.map((function(e){r.title=e.name,r.key="4-18-"+t.id+"-"+e.id,r.icon=Object(a.jsx)(l.a,{name:e.icon,customClasses:"c-sidebar-nav-icon"}),r.to=e.to,o.push(r),r={}})),s.children=o}e.push(s),s={}}))})),fetch(u.o+"/api/menu/auth/allMenu/"+G,t).then((function(e){return new Promise((function(t,n){e.text().then((function(e){t(e.length?JSON.parse(e):null)})).catch((function(e){n(e)}))}))})).then((function(t){var n=[],i=JSON.parse(JSON.parse(t.menu).menu),s=[],c={};i.filter((function(e){return"Ma\xeetres"===e.name})).map((function(t){if(c.key=t.id,c.title=t.name,c.icon=Object(a.jsx)(l.a,{name:t.icon,customClasses:"c-sidebar-nav-icon"}),"CSidebarNavItem"!==t._tag){var i=t._children,o=[],r={};i.map((function(i){r.key=t.id+"-"+i.id,r.title=i.name,r.icon=Object(a.jsx)(l.a,{name:i.icon,customClasses:"c-sidebar-nav-icon"}),"CSidebarNavItem"===i._tag?(o.push(r),r={}):("Ma\xeetres"===t.name&&"QMS"===i.name&&(r.children=e,n.push(r.key)),o.push(r),r={})})),c.children=o,n.push(c.key)}s.push(c),c={}})),B(s),A(n)}))}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(r.a,{showLine:f,showIcon:g,expandedKeys:Object(i.a)(T),onExpand:A,onSelect:function(e,t){p(t.node);var n="",a=t.node.key;if(-1!==a.indexOf("-"))if(a.substr(0,a.indexOf("-")),-1!==(a=a.substr(a.indexOf("-")+1,a.length-1)).indexOf("-")){a.substr(0,a.indexOf("-"));-1!==(a=a.substr(a.indexOf("-")+1,a.length-1)).indexOf("-")?(n=a.substr(0,a.indexOf("-")),a=a.substr(a.indexOf("-")+1,a.length-1),N(n)):(N(n=a),C("IMSMenu"))}else N(a),C("Submenu");else N(a),C("Menu")},treeData:_})}),Object(a.jsx)(d.h,{children:Object(a.jsxs)(d.e,{onClick:function(){return function(){var t=e.match.params.masterId,n={method:"POST",headers:{"X-Tenant":X,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify({id:t})};fetch(u.n+"/api/master/getByMasterId",n).then((function(e){return new Promise((function(t,n){e.text().then((function(e){t(e.length?JSON.parse(e):null)})).catch((function(e){n(e)}))}))})).then((function(t){var n=JSON.parse(t.master),a={name:n.name,_tag:"CSidebarNavItem",icon:"cil-border-all",to:"/master/list/"+n.id,mastersqmsmenuid:y,menuLevel:M},i={method:"POST",headers:{"X-Tenant":X,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify(a)};fetch(u.m+"/api/masterSubMenu/addMenu",i).then((function(e){return new Promise((function(t,n){e.text().then((function(e){t(e.length?JSON.parse(e):null)})).catch((function(e){n(e)}))}))})).then((function(t){""===t.insertId?alert("please select a repository"):(e.history.push("/admin/master/list"),window.location.reload())}))}))}()},color:"success",className:"mt-3 -item-right",active:!0,tabIndex:-1,style:{textAlign:"right"},children:[Object(a.jsx)(m.a,{}),"Submit"]})})]})}},716:function(e,t,n){"use strict";var a=n(1),i=n(1054);t.a=Object(i.a)(a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")}}]);
//# sourceMappingURL=88.08cf8315.chunk.js.map