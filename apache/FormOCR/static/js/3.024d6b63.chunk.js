(this["webpackJsonpisct-group"]=this["webpackJsonpisct-group"]||[]).push([[3],{742:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}function f(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}function d(e){return{}.toString.call(e).includes("Object")}function g(e){return"function"===typeof e}n.d(t,"a",(function(){return ge}));var p=f((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),h={changes:function(e,t){return d(t)||p("changeType"),Object.keys(t).some((function(t){return n=e,r=t,!Object.prototype.hasOwnProperty.call(n,r);var n,r}))&&p("changeField"),t},selector:function(e){g(e)||p("selectorType")},handler:function(e){g(e)||d(e)||p("handlerType"),d(e)&&Object.values(e).some((function(e){return!g(e)}))&&p("handlersType")},initial:function(e){var t;e||p("initialIsRequired"),d(e)||p("initialType"),t=e,Object.keys(t).length||p("initialContent")}};function b(e,t){return g(t)?t(e.current):t}function v(e,t){return e.current=l(l({},e.current),t),t}function O(e,t,n){return g(t)?t(e.current):Object.keys(n).forEach((function(n){var r;return null===(r=t[n])||void 0===r?void 0:r.call(t,e.current[n])})),n}var m={create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h.initial(e),h.handler(t);var n={current:e},r=f(O)(n,t),o=f(v)(n),i=f(h.changes)(e),a=f(b)(n);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return h.selector(e),e(n.current)}function u(e){s(r,o,i,a)(e)}return[c,u]}},y={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.23.0/min/vs"}};var j=function(e){return{}.toString.call(e).includes("Object")};var w={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},M=function(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}((function(e,t){throw new Error(e[t]||e.default)}))(w),E={config:function(e){return e||M("configIsRequired"),j(e)||M("configType"),e.urls?(console.warn(w.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}};var P=function e(t,n){return Object.keys(n).forEach((function(r){n[r]instanceof Object&&t[r]&&Object.assign(n[r],e(t[r],n[r]))})),i(i({},t),n)},R={type:"cancelation",msg:"operation is manually canceled"};var C,T,S=function(e){var t=!1,n=new Promise((function(n,r){e.then((function(e){return t?r(R):n(e)})),e.catch(r)}));return n.cancel=function(){return t=!0},n},N=m.create({config:y,isInitialized:!1,resolve:null,reject:null,monaco:null}),V=(T=2,function(e){if(Array.isArray(e))return e}(C=N)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(C,T)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(C,T)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),I=V[0],L=V[1];function A(e){return document.body.appendChild(e)}function q(e){var t=I((function(e){return{config:e.config,reject:e.reject}})),n=function(e){var t=document.createElement("script");return e&&(t.src=e),t}("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function D(){var e=I((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){x(t),e.resolve(t)}),(function(t){e.reject(t)}))}function x(e){I().monaco||L({monaco:e})}var z=new Promise((function(e,t){return L({resolve:e,reject:t})})),U={config:function(e){L((function(t){return{config:P(t.config,E.config(e))}}))},init:function(){if(!I((function(e){return{isInitialized:e.isInitialized}})).isInitialized){if(window.monaco&&window.monaco.editor)return x(window.monaco),S(Promise.resolve(window.monaco));k(A,q)(D),L({isInitialized:!0})}return S(z)},__getMonacoInstance:function(){return I((function(e){return e.monaco}))}},F=n(1),_=n.n(F),B=n(39),J=n(89),W=n(62),Y=n.n(W),$={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var G=function(e){var t=e.content;return _.a.createElement("div",{style:$},t)},H={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function K(e){var t=e.width,n=e.height,r=e.isEditorReady,o=e.loading,i=e._ref,a=e.className,c=e.wrapperClassName;return _.a.createElement("section",{style:Object(B.a)(Object(B.a)({},H.wrapper),{},{width:t,height:n}),className:c},!r&&_.a.createElement(G,{content:o}),_.a.createElement("div",{ref:i,style:Object(B.a)(Object(B.a)({},H.fullWidth),!r&&H.hide),className:a}))}K.propTypes={width:Y.a.oneOfType([Y.a.number,Y.a.string]).isRequired,height:Y.a.oneOfType([Y.a.number,Y.a.string]).isRequired,loading:Y.a.oneOfType([Y.a.element,Y.a.string]).isRequired,isEditorReady:Y.a.bool.isRequired,className:Y.a.string,wrapperClassName:Y.a.string};var Q=K,X=Object(F.memo)(Q);var Z=function(e){Object(F.useEffect)(e,[])};var ee=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=Object(F.useRef)(!0);Object(F.useEffect)(r.current||!n?function(){r.current=!1}:e,t)};function te(){}function ne(e,t,n,r){return function(e,t){return e.editor.getModel(re(e,t))}(e,r)||function(e,t,n,r){return e.editor.createModel(t,n,r&&re(e,r))}(e,t,n,r)}function re(e,t){return e.Uri.parse(t)}function oe(e){var t=e.original,n=e.modified,r=e.language,o=e.originalLanguage,i=e.modifiedLanguage,a=e.originalModelPath,c=e.modifiedModelPath,u=e.keepCurrentOriginalModel,l=e.keepCurrentModifiedModel,s=e.theme,f=e.loading,d=e.options,g=e.height,p=e.width,h=e.className,b=e.wrapperClassName,v=e.beforeMount,O=e.onMount,m=Object(F.useState)(!1),y=Object(J.a)(m,2),j=y[0],w=y[1],M=Object(F.useState)(!0),E=Object(J.a)(M,2),k=E[0],P=E[1],R=Object(F.useRef)(null),C=Object(F.useRef)(null),T=Object(F.useRef)(null),S=Object(F.useRef)(O),N=Object(F.useRef)(v);Z((function(){var e=U.init();return e.then((function(e){return(C.current=e)&&P(!1)})).catch((function(e){return"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e)})),function(){return R.current?function(){var e,t,n=R.current.getModel();u||null===(e=n.original)||void 0===e||e.dispose();l||null===(t=n.modified)||void 0===t||t.dispose();R.current.dispose()}():e.cancel()}})),ee((function(){var e=R.current.getModifiedEditor();e.getOption(C.current.editor.EditorOption.readOnly)?e.setValue(n):n!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),e.pushUndoStop())}),[n],j),ee((function(){R.current.getModel().original.setValue(t)}),[t],j),ee((function(){var e=R.current.getModel(),t=e.original,n=e.modified;C.current.editor.setModelLanguage(t,o||r),C.current.editor.setModelLanguage(n,i||r)}),[r,o,i],j),ee((function(){C.current.editor.setTheme(s)}),[s],j),ee((function(){R.current.updateOptions(d)}),[d],j);var V=Object(F.useCallback)((function(){N.current(C.current);var e=C.current.editor.createModel(t,o||r,a&&C.current.Uri.parse(a)),u=C.current.editor.createModel(n,i||r,c&&C.current.Uri.parse(c));R.current.setModel({original:e,modified:u})}),[r,n,i,t,o,a,c]),I=Object(F.useCallback)((function(){R.current=C.current.editor.createDiffEditor(T.current,Object(B.a)({automaticLayout:!0},d)),V(),C.current.editor.setTheme(s),w(!0)}),[d,s,V]);return Object(F.useEffect)((function(){j&&S.current(R.current,C.current)}),[j]),Object(F.useEffect)((function(){!k&&!j&&I()}),[k,j,I]),_.a.createElement(X,{width:p,height:g,isEditorReady:j,loading:f,_ref:T,className:h,wrapperClassName:b})}oe.propTypes={original:Y.a.string,modified:Y.a.string,language:Y.a.string,originalLanguage:Y.a.string,modifiedLanguage:Y.a.string,originalModelPath:Y.a.string,modifiedModelPath:Y.a.string,keepCurrentOriginalModel:Y.a.bool,keepCurrentModifiedModel:Y.a.bool,theme:Y.a.string,loading:Y.a.oneOfType([Y.a.element,Y.a.string]),options:Y.a.object,width:Y.a.oneOfType([Y.a.number,Y.a.string]),height:Y.a.oneOfType([Y.a.number,Y.a.string]),className:Y.a.string,wrapperClassName:Y.a.string,beforeMount:Y.a.func,onMount:Y.a.func},oe.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",beforeMount:te,onMount:te};var ie=function(e){var t=Object(F.useRef)();return Object(F.useEffect)((function(){t.current=e}),[e]),t.current},ae=m.create({backup:null}),ce=Object(J.a)(ae,2),ue=ce[0],le=ce[1],se=new Map;function fe(e){var t=e.defaultValue,n=e.defaultLanguage,r=e.defaultPath,o=e.value,i=e.language,a=e.path,c=e.theme,u=e.line,l=e.loading,s=e.options,f=e.overrideServices,d=e.saveViewState,g=e.keepCurrentModel,p=e.width,h=e.height,b=e.className,v=e.wrapperClassName,O=e.beforeMount,m=e.onMount,y=e.onChange,j=e.onValidate,w=Object(F.useState)(!1),M=Object(J.a)(w,2),E=M[0],k=M[1],P=Object(F.useState)(!0),R=Object(J.a)(P,2),C=R[0],T=R[1],S=Object(F.useRef)(null),N=Object(F.useRef)(null),V=Object(F.useRef)(null),I=Object(F.useRef)(m),L=Object(F.useRef)(O),A=Object(F.useRef)(null),q=Object(F.useRef)(o),D=ie(a);Z((function(){var e=U.init();return e.then((function(e){return(S.current=e)&&T(!1)})).catch((function(e){return"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e)})),function(){return N.current?function(){var e,t;null===(e=A.current)||void 0===e||e.dispose(),g?d&&se.set(a,N.current.saveViewState()):null===(t=N.current.getModel())||void 0===t||t.dispose();N.current.dispose()}():e.cancel()}})),ee((function(){var e=ne(S.current,t||o,n||i,a);e!==N.current.getModel()&&(d&&se.set(D,N.current.saveViewState()),N.current.setModel(e),d&&N.current.restoreViewState(se.get(a)))}),[a],E),ee((function(){N.current.updateOptions(s)}),[s],E),ee((function(){N.current.getOption(S.current.editor.EditorOption.readOnly)?N.current.setValue(o):o!==N.current.getValue()&&(N.current.executeEdits("",[{range:N.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),N.current.pushUndoStop())}),[o],E),ee((function(){S.current.editor.setModelLanguage(N.current.getModel(),i)}),[i],E),ee((function(){void 0!==u&&N.current.revealLine(u)}),[u],E),ee((function(){S.current.editor.setTheme(c)}),[c],E);var x=Object(F.useCallback)((function(){L.current(S.current);var e=a||r,u=ne(S.current,o||t,n||i,e);N.current=S.current.editor.create(V.current,Object(B.a)({model:u,automaticLayout:!0},s),f),d&&N.current.restoreViewState(se.get(e)),S.current.editor.setTheme(c),ue().backup||le({backup:S.current.editor.setModelMarkers}),k(!0)}),[t,n,r,o,i,a,s,f,d,c]);return Object(F.useEffect)((function(){E&&I.current(N.current,S.current)}),[E]),Object(F.useEffect)((function(){!C&&!E&&x()}),[C,E,x]),q.current=o,Object(F.useEffect)((function(){var e,t;E&&y&&(null===(e=A.current)||void 0===e||e.dispose(),A.current=null===(t=N.current)||void 0===t?void 0:t.onDidChangeModelContent((function(e){var t=N.current.getValue();q.current!==t&&y(t,e)})))}),[E,y]),Object(F.useEffect)((function(){E&&(S.current.editor.setModelMarkers=function(e,t,n){var r;null===(r=ue().backup)||void 0===r||r.call(S.current.editor,e,t,n),null===j||void 0===j||j(n)})}),[E,j]),_.a.createElement(X,{width:p,height:h,isEditorReady:E,loading:l,_ref:V,className:b,wrapperClassName:v})}fe.propTypes={defaultValue:Y.a.string,defaultPath:Y.a.string,defaultLanguage:Y.a.string,value:Y.a.string,language:Y.a.string,path:Y.a.string,theme:Y.a.string,line:Y.a.number,loading:Y.a.oneOfType([Y.a.element,Y.a.string]),options:Y.a.object,overrideServices:Y.a.object,saveViewState:Y.a.bool,keepCurrentModel:Y.a.bool,width:Y.a.oneOfType([Y.a.number,Y.a.string]),height:Y.a.oneOfType([Y.a.number,Y.a.string]),className:Y.a.string,wrapperClassName:Y.a.string,beforeMount:Y.a.func,onMount:Y.a.func,onChange:Y.a.func,onValidate:Y.a.func},fe.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",beforeMount:te,onMount:te,onValidate:te};var de=fe,ge=Object(F.memo)(de)}}]);
//# sourceMappingURL=3.024d6b63.chunk.js.map