(this["webpackJsonpisct-group"]=this["webpackJsonpisct-group"]||[]).push([[31,7],{3055:function(e,t,n){"use strict";n.r(t);var r=n(13),o=(n(680),n(89)),s=n(1),i=n.n(s),a=(n(650),n(658),n(789),n(790),n(791),n(667),n(743),n(792),n(793),n(733),n(794),n(661),n(795),n(796),n(679)),c=(n(764),n(633)),u=n(3033),l=n(115);n(742);t.default=function(e){var t=Object(s.useState)(!1),n=Object(o.a)(t,2),d=(n[0],n[1],Object(s.useState)(null)),f=Object(o.a)(d,2),p=(f[0],f[1],Object(s.useState)({})),h=Object(o.a)(p,2),m=(h[0],h[1],i.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainId)),j=Object(o.a)(m,2),b=(j[0],j[1],i.a.useState(JSON.parse(localStorage.getItem("domain_data")).domainName)),O=Object(o.a)(b,2),x=O[0],v=(O[1],i.a.useState(localStorage.getItem("username"))),y=Object(o.a)(v,2),g=(y[0],y[1],Object(s.useState)(0)),S=Object(o.a)(g,2),w=(S[0],S[1],Object(s.useRef)(null),Object(s.useRef)(null),i.a.useState([])),A=Object(o.a)(w,2),N=(A[0],A[1],Object(s.useState)()),E=Object(o.a)(N,2),C=(E[0],E[1],Object(s.useState)([])),R=Object(o.a)(C,2),k=(R[0],R[1],Object(s.useState)(null)),T=Object(o.a)(k,2),B=(T[0],T[1],Object(s.useState)("")),U=Object(o.a)(B,2),F=U[0],P=U[1],H=Object(s.useState)(""),L=Object(o.a)(H,2),q=L[0],D=L[1],I=Object(s.useState)(""),z=Object(o.a)(I,2),_=(z[0],z[1]),J=Object(s.useState)(""),M=Object(o.a)(J,2),X=M[0],V=M[1],$=Object(s.useState)(""),G=Object(o.a)($,2),K=G[0],Q=G[1],W=Object(s.useState)(""),Y=Object(o.a)(W,2),Z=Y[0],ee=Y[1],te=Object(s.useState)(""),ne=Object(o.a)(te,2),re=ne[0],oe=ne[1],se=Object(s.useState)(""),ie=Object(o.a)(se,2),ae=ie[0],ce=ie[1],ue=Object(s.useState)(""),le=Object(o.a)(ue,2),de=le[0],fe=le[1],pe=Object(s.useState)(""),he=Object(o.a)(pe,2),me=he[0],je=he[1],be=Object(s.useState)(null),Oe=Object(o.a)(be,2),xe=Oe[0],ve=Oe[1],ye=Object(s.useState)(""),ge=Object(o.a)(ye,2),Se=ge[0],we=ge[1],Ae=Object(s.useState)(""),Ne=Object(o.a)(Ae,2),Ee=Ne[0],Ce=Ne[1],Re=Object(s.useState)(""),ke=Object(o.a)(Re,2),Te=ke[0],Be=ke[1],Ue=Object(s.useState)(null),Fe=Object(o.a)(Ue,2),Pe=(Fe[0],Fe[1],Object(s.useState)([{label:"Accept\xe9",value:"accept\xe9"},{label:"Refus\xe9",value:"refus\xe9"}])),He=Object(o.a)(Pe,2),Le=He[0];He[1];Object(s.useEffect)((function(){var t=e.match.params.tenant,n={method:"GET",headers:{"X-Tenant":x,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")}};fetch(l.v+"/api/auth/subscription/getById/"+t,n).then((function(e){return e.json()})).then((function(e){P(e.comment),D(e.companyName),_(e.country),V(e.domainName),fe(e.email),Q(e.firstName),ee(e.id),oe(e.lastName),je(e.mobile),ce(e.period),ve({label:e.status,value:e.status}),we(e.termAndCondition),Ce(e.type),Be(e.username)})).catch((function(e){console.log(e)}))}),[]);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(c.f,{children:[Object(r.jsx)(c.j,{children:Object(r.jsx)("h3",{children:"Demande"})}),Object(r.jsxs)(c.g,{children:[Object(r.jsxs)(c.u,{noValidate:!0,children:[Object(r.jsxs)(c.v,{row:!0,className:"my-0",children:[Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"companyName",children:"Nom de l'entreprise"}),Object(r.jsx)(c.A,{id:"companyName",value:q,disabled:!0})]})}),Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"email",children:"Email de l'entreprise"}),Object(r.jsx)(c.A,{style:{width:"100%"},id:"email",value:de,disabled:!0})]})})]}),Object(r.jsxs)(c.v,{row:!0,className:"my-0",children:[Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"address",children:"Nom de Domain"}),Object(r.jsx)(c.A,{id:"address",value:X,disabled:!0})]})}),Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"phone",children:"T\xe9l\xe9phone"}),Object(r.jsx)(c.A,{id:"phone",value:me,disabled:!0})]})})]}),Object(r.jsxs)(c.v,{row:!0,className:"my-0",children:[Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"zip",children:"Nom d'utilisateur"}),Object(r.jsx)(c.A,{id:"zip",value:Te,disabled:!0})]})}),Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"webSite",children:"Pr\xe9nom"}),Object(r.jsx)(c.A,{id:"webSite",value:K,disabled:!0})]})})]}),Object(r.jsxs)(c.v,{row:!0,className:"my-0",children:[Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"city",children:"Nom"}),Object(r.jsx)(c.A,{id:"city",value:re,disabled:!0})]})}),Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"type",children:"T\xe9l\xe9phone"}),Object(r.jsx)(c.A,{name:"type",value:me,disabled:!0})]})})]}),Object(r.jsxs)(c.v,{row:!0,className:"my-0",children:[Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"country",children:"Commentaire"}),Object(r.jsx)(c.A,{id:"country",value:F,disabled:!0})]})}),Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"country",children:"Type"}),Object(r.jsx)(c.A,{id:"country",value:Ee,disabled:!0})]})})]}),Object(r.jsxs)(c.v,{row:!0,className:"my-0",children:[Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"country",children:"Etat"}),Object(r.jsx)(c.A,{id:"country",value:xe,disabled:!0})]})}),Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"country",children:"Periode"}),Object(r.jsx)(c.A,{id:"country",value:ae,disabled:!0})]})})]}),Object(r.jsxs)(c.v,{row:!0,className:"my-0",children:[Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"country",children:"termAndCondition"}),Object(r.jsx)(c.A,{id:"country",value:Se,disabled:!0})]})}),Object(r.jsx)(c.k,{sm:12,md:6,children:Object(r.jsxs)(c.v,{children:[Object(r.jsx)(c.H,{htmlFor:"AccessControlUser",children:"Decision"}),Object(r.jsx)(a.a,{name:"form-field-name2",placeholder:"",value:xe,options:Le,onChange:ve})]})})]})]}),Object(r.jsx)(c.O,{xs:"4",style:{marginTop:"50px"},children:Object(r.jsx)(c.k,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0",children:Object(r.jsxs)(c.e,{block:!0,variant:"outline",color:"info",id:"editProfile",onClick:function(){var t={method:"POST",headers:{"X-Tenant":x,"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("Authorization")},body:JSON.stringify({decision:xe.value,requestId:Z})};fetch(l.v+"/api/auth/subscription/validateDemoRequest",t).then((function(e){return e.json()})).then((function(t){e.history.push("/admin/subscription")})).catch((function(e){console.log(e)}))},children:[Object(r.jsx)(u.a,{}),"Validation"]})})})]})]})})}},638:function(e,t,n){"use strict";var r=n(765),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function i(e){return"undefined"===typeof e}function a(e){return null!==e&&"object"===typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:a,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:l,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):s(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},764:function(e,t,n){e.exports=n(842)},765:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},766:function(e,t,n){"use strict";var r=n(638);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},767:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},768:function(e,t,n){"use strict";(function(t){var r=n(638),o=n(847),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a={adapter:function(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n(769)),e}(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){a.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){a.headers[e]=r.merge(s)})),e.exports=a}).call(this,n(748))},769:function(e,t,n){"use strict";var r=n(638),o=n(848),s=n(850),i=n(766),a=n(851),c=n(854),u=n(855),l=n(770);e.exports=function(e){return new Promise((function(t,n){var d=e.data,f=e.headers;r.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";f.Authorization="Basic "+btoa(h+":"+m)}var j=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(j,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,n,s),p=null}},p.onabort=function(){p&&(n(l("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(l("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var b=(e.withCredentials||u(j))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;b&&(f[e.xsrfHeaderName]=b)}if("setRequestHeader"in p&&r.forEach(f,(function(e,t){"undefined"===typeof d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(O){if("json"!==e.responseType)throw O}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),d||(d=null),p.send(d)}))}},770:function(e,t,n){"use strict";var r=n(849);e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},771:function(e,t,n){"use strict";var r=n(638);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],s=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(s,u),r.forEach(i,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(a,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=o.concat(s).concat(i).concat(a),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(d,u),n}},772:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},842:function(e,t,n){"use strict";var r=n(638),o=n(765),s=n(843),i=n(771);function a(e){var t=new s(e),n=o(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var c=a(n(768));c.Axios=s,c.create=function(e){return a(i(c.defaults,e))},c.Cancel=n(772),c.CancelToken=n(856),c.isCancel=n(767),c.all=function(e){return Promise.all(e)},c.spread=n(857),c.isAxiosError=n(858),e.exports=c,e.exports.default=c},843:function(e,t,n){"use strict";var r=n(638),o=n(766),s=n(844),i=n(845),a=n(771);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=c},844:function(e,t,n){"use strict";var r=n(638);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},845:function(e,t,n){"use strict";var r=n(638),o=n(846),s=n(767),i=n(768);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return a(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},846:function(e,t,n){"use strict";var r=n(638);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},847:function(e,t,n){"use strict";var r=n(638);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},848:function(e,t,n){"use strict";var r=n(770);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},849:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},850:function(e,t,n){"use strict";var r=n(638);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},851:function(e,t,n){"use strict";var r=n(852),o=n(853);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},852:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},853:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},854:function(e,t,n){"use strict";var r=n(638),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},855:function(e,t,n){"use strict";var r=n(638);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},856:function(e,t,n){"use strict";var r=n(772);function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},857:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},858:function(e,t,n){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}}}]);
//# sourceMappingURL=31.ec7ebaf0.chunk.js.map