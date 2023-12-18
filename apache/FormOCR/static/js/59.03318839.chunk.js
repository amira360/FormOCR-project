(this["webpackJsonpisct-group"]=this["webpackJsonpisct-group"]||[]).push([[59],{1218:function(e,t,n){"use strict";e.exports=n(1219)},1219:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.OrganizationChart=t.OrganizationChartNode=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(1)),l=(a=n(62))&&a.__esModule?a:{default:a},i=n(645);function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function c(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v(e);if(t){var a=v(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){h(n,e);var t=g(n);function n(e){var o;return u(this,n),(o=t.call(this,e)).node=o.props.node,o.state={expanded:o.node.expanded},o}return f(n,[{key:"getLeaf",value:function(){return!1!==this.node.leaf&&!(this.node.children&&this.node.children.length)}},{key:"getColspan",value:function(){return this.node.children&&this.node.children.length?2*this.node.children.length:null}},{key:"onNodeClick",value:function(e,t){this.props.onNodeClick(e,t)}},{key:"toggleNode",value:function(e,t){this.setState((function(e){return{expanded:!e.expanded}})),e.preventDefault()}},{key:"isSelected",value:function(){return this.props.isSelected(this.node)}},{key:"render",value:function(){var e=this;this.node=this.props.node;var t=this.getColspan(),o=(0,i.classNames)("p-organizationchart-node-content",this.node.className,{"p-organizationchart-selectable-node":this.props.selectionMode&&!1!==this.node.selectable,"p-highlight":this.isSelected()}),a=this.props.nodeTemplate&&this.props.nodeTemplate(this.node)?r.default.createElement("div",null,this.props.nodeTemplate(this.node)):r.default.createElement("div",null,this.node.label),l=(0,i.classNames)("p-node-toggler-icon",{"pi pi-chevron-down":this.state.expanded,"pi pi-chevron-up":!this.state.expanded}),s=r.default.createElement("tr",null,r.default.createElement("td",{colSpan:t},r.default.createElement("div",{className:o,onClick:function(t){return e.onNodeClick(t,e.node)}},a,!this.getLeaf()&&r.default.createElement("a",{href:"#",className:"p-node-toggler",onClick:function(t){return e.toggleNode(t,e.node)}},r.default.createElement("i",{className:l}))))),c=!this.getLeaf()&&this.state.expanded?"inherit":"hidden",d=r.default.createElement("tr",{style:{visibility:c},className:"p-organizationchart-lines"},r.default.createElement("td",{colSpan:t},r.default.createElement("div",{className:"p-organizationchart-line-down"}))),u=this.node.children&&this.node.children.length,p=r.default.createElement("tr",{style:{visibility:c},className:"p-organizationchart-lines"},this.node.children&&1===this.node.children.length&&r.default.createElement("td",{colSpan:this.getColspan()},r.default.createElement("div",{className:"p-organizationchart-line-down"})),this.node.children&&this.node.children.length>1&&this.node.children.map((function(e,t){var n=(0,i.classNames)("p-organizationchart-line-left",{"p-organizationchart-line-top":0!==t}),o=(0,i.classNames)("p-organizationchart-line-right",{"p-organizationchart-line-top":t!==u-1});return[r.default.createElement("td",{key:t+"_lineleft",className:n},"\xa0"),r.default.createElement("td",{key:t+"_lineright",className:o},"\xa0")]}))),f=r.default.createElement("tr",{style:{visibility:c},className:"p-organizationchart-nodes"},this.node.children&&this.node.children.map((function(t,o){return r.default.createElement("td",{key:o,colSpan:"2"},r.default.createElement(n,{node:t,nodeTemplate:e.props.nodeTemplate,selectionMode:e.props.selectionMode,onNodeClick:e.props.onNodeClick,isSelected:e.props.isSelected}))})));return r.default.createElement("table",{className:"p-organizationchart-table"},r.default.createElement("tbody",null,s,d,p,f))}}]),n}(r.Component);t.OrganizationChartNode=O,N(O,"defaultProps",{node:null,nodeTemplate:null,root:!1,first:!1,last:!1,selectionMode:null,onNodeClick:null,isSelected:null}),N(O,"propTypes",{node:l.default.any,nodeTemplate:l.default.any,root:l.default.bool,first:l.default.bool,last:l.default.bool,selectionMode:l.default.string,onNodeClick:l.default.func,isSelected:l.default.func});var j=function(e){h(n,e);var t=g(n);function n(e){var o;return u(this,n),(o=t.call(this,e)).root=o.props.value&&o.props.value.length?o.props.value[0]:null,o.onNodeClick=o.onNodeClick.bind(b(o)),o.isSelected=o.isSelected.bind(b(o)),o}return f(n,[{key:"onNodeClick",value:function(e,t){if(this.props.selectionMode){var n=e.target;if(n.className&&(-1!==n.className.indexOf("p-node-toggler")||-1!==n.className.indexOf("p-node-toggler-icon")))return;if(!1===t.selectable)return;var o,a=this.findIndexInSelection(t),r=a>=0;"single"===this.props.selectionMode?r?(o=null,this.props.onNodeUnselect&&this.props.onNodeUnselect({originalEvent:e,node:t})):(o=t,this.props.onNodeSelect&&this.props.onNodeSelect({originalEvent:e,node:t})):"multiple"===this.props.selectionMode&&(r?(o=this.props.selection.filter((function(e,t){return t!==a})),this.props.onNodeUnselect&&this.props.onNodeUnselect({originalEvent:e,node:t})):(o=[].concat(c(this.props.selection||[]),[t]),this.props.onNodeSelect&&this.props.onNodeSelect({originalEvent:e,node:t}))),this.props.onSelectionChange&&this.props.onSelectionChange({originalEvent:e,data:o})}}},{key:"findIndexInSelection",value:function(e){var t=-1;if(this.props.selectionMode&&this.props.selection)if("single"===this.props.selectionMode)t=this.props.selection===e?0:-1;else if("multiple"===this.props.selectionMode)for(var n=0;n<this.props.selection.length;n++)if(this.props.selection[n]===e){t=n;break}return t}},{key:"isSelected",value:function(e){return-1!==this.findIndexInSelection(e)}},{key:"render",value:function(){this.root=this.props.value&&this.props.value.length?this.props.value[0]:null;var e=(0,i.classNames)("p-organizationchart p-component",this.props.className);return r.default.createElement("div",{id:this.props.id,style:this.props.style,className:e},r.default.createElement(O,{node:this.root,nodeTemplate:this.props.nodeTemplate,selectionMode:this.props.selectionMode,onNodeClick:this.onNodeClick,isSelected:this.isSelected}))}}]),n}(r.Component);t.OrganizationChart=j,N(j,"defaultProps",{id:null,value:null,style:null,className:null,selectionMode:null,selection:null,nodeTemplate:null,onSelectionChange:null,onNodeSelect:null,onNodeUnselect:null}),N(j,"propTypes",{id:l.default.string,value:l.default.any,style:l.default.object,className:l.default.string,selectionMode:l.default.string,selection:l.default.any,nodeTemplate:l.default.any,onSelectionChange:l.default.func,onNodeSelect:l.default.func,onNodeUnselect:l.default.func})},1220:function(e,t,n){},1498:function(e,t,n){"use strict";n.r(t);var o=n(13),a=n(89),r=n(1),l=n.n(r),i=n(1218),s=(n(1220),n(633)),c=n(168),d=n(115),u=n(661);t.default=function(e){var t=Object(r.useState)([]),n=Object(a.a)(t,2),p=n[0],f=n[1],h=l.a.useState([]),m=Object(a.a)(h,2),g=(m[0],m[1]),y=l.a.useState(""),b=Object(a.a)(y,2),v=(b[0],b[1],l.a.useState("")),N=Object(a.a)(v,2),O=(N[0],N[1],l.a.useState("")),j=Object(a.a)(O,2),S=(j[0],j[1],l.a.useState([])),x=Object(a.a)(S,2),E=x[0],k=x[1],C=l.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainId),w=Object(a.a)(C,2),z=(w[0],w[1],Object(c.c)((function(e){return e.sidebarShow})),Object(r.useRef)(null),l.a.useState("")),M=Object(a.a)(z,2),T=(M[0],M[1],l.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainName)),_=Object(a.a)(T,2),P=_[0],I=(_[1],l.a.useState([])),A=Object(a.a)(I,2),U=(A[0],A[1],Object(r.useState)(!0)),R=Object(a.a)(U,2),J=R[0],B=R[1],D=Object(r.useState)(!0),L=Object(a.a)(D,2),W=L[0],G=L[1];Object(r.useEffect)((function(){setTimeout((function(){var e={method:"GET",headers:{"X-Tenant":P,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")}};fetch(d.v+"/api/auth/user/getUsers",e).then((function(e){return new Promise((function(t,n){e.text().then((function(e){t(e.length?JSON.parse(e):null)})).catch((function(e){n(e)}))}))})).then((function(e){console.log(e);var t=[],n=[],o=[],a=[];e.map((function(e,r){if(null!==e.manager&&""!==e.manager)if(n.includes(e.manager)){var l=n.indexOf(e.manager);console.log(t[l].children),t[l].children?t[l].children.push({label:e.designation,type:"person",className:"p-person",expanded:!0,data:{name:e.firstName+" "+e.lastName,avatar:e.photo?"/database"+e.photo:"walter.jpg"}}):(t[l].children=[],t[l].children.push({label:e.designation,type:"person",className:"p-person",expanded:!0,data:{name:e.firstName+" "+e.lastName,avatar:e.photo?e.photo:"walter.jpg"}}))}else a.push(e.manager),o.push({label:e.designation,type:"person",className:"p-person",expanded:!0,data:{name:e.firstName+" "+e.lastName,avatar:e.photo?e.photo:"walter.jpg"}});else n.push(e.username),t.push({label:e.designation,type:"person",className:"p-person",expanded:!0,data:{name:e.firstName+" "+e.lastName,avatar:e.photo?e.photo:"walter.jpg"}})})),a.map((function(e,a){var r=n.indexOf(e);t[r].children||(t[r].children=[]),t[r].children.push(o[a])})),console.log(t),k(t),g(E),0!==t.size&&(B(!1),G(!1))})).catch((function(e){console.log(e)}))}),4e3)}),[]);var X=J;return W?Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"},children:["Loading the data ",console.log("loading state")]}):Object(o.jsxs)("div",{className:"organizationchart-demo",children:[X&&Object(o.jsx)(u.ProgressBar,{mode:"indeterminate",style:{height:"6px"}}),Object(o.jsx)(i.OrganizationChart,{value:E,nodeTemplate:function(e){return"person"===e.type?Object(o.jsxs)(s.f,{children:[Object(o.jsx)("div",{className:"node-header",children:e.label||"not affected"}),Object(o.jsxs)("div",{className:"node-content",children:[Object(o.jsx)("img",{alt:e.data.avatar,src:"/database".concat(e.data.avatar),onError:function(e){return e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"},style:{width:"32px"}}),Object(o.jsx)("div",{children:e.data.name})]})]}):"department"===e.type?e.label:void 0},selection:p,selectionMode:"multiple",onSelectionChange:function(e){return f(e.data)},className:"company"})]})}}}]);
//# sourceMappingURL=59.03318839.chunk.js.map