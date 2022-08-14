/*! For license information please see server.js.LICENSE.txt */
(()=>{"use strict";var e,r={183:(e,r,t)=>{t.d(r,{Z:()=>f});var n=t(661),o=t(537),i=t(771),a=t.n(i),u=t(997),s=a()({resolved:{},chunkName:function(){return"pages-RedPage"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(645).then(t.bind(t,952))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 952}}),c=a()({resolved:{},chunkName:function(){return"pages-BluePage"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(29).then(t.bind(t,175))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 175}}),l=a()({resolved:{},chunkName:function(){return"pages-UsersPage"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(850).then(t.bind(t,499))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 499}});const f=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)(o.Z,{}),(0,u.jsx)("hr",{}),(0,u.jsx)(n.Route,{path:"/red",component:s}),(0,u.jsx)(n.Route,{path:"/blue",component:c}),(0,u.jsx)(n.Route,{path:"/users",component:l})]})}},537:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(661),o=t(997);const i=function(){return(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(n.Link,{to:"/red",children:"Red"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n.Link,{to:"/blue",children:"Blue"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n.Link,{to:"/users",children:"Users"})})]})}},801:(e,r,t)=>{var n=t(214),o=t(861);const i=require("react-dom/server");var a=t.n(i);const u=require("express");var s=t.n(u),c=t(661),l=t(183);const f=require("path");var h=t.n(f);require("fs");const p=require("redux");var d=t(22);const v=require("redux-thunk");var y=t.n(v),g=t(312),m=t(477),x=(0,n.Z)().mark(b);function b(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.all)([(0,g.HD)()]);case 2:case"end":return e.stop()}}),x)}const w=(0,p.combineReducers)({users:g.ZP});var j=t(701);const E=require("redux-saga");var S=t.n(E);const P=require("@loadable/server");var O=t(997),k=h().resolve("./build/loadable-stats.json");function L(e,r){return'<!DOCTYPE html>\n    <html lang = "en">\n    <head>\n    <meta charset="utf-8" />\n    <link rel="shortcut icon" href="/favicon.ico" />\n    <meta \n        name="viewport"\n        content="width=device-width, initial-scale=1, shrink-to-fit=no"\n    />\n    <meta name = "theme-color" content="#000000" />\n    <title> React App</title>\n    '.concat(r.styles,"\n    ").concat(r.links,'\n    </head>\n    <body>\n        <noscript>You need to enable JavaScript to run this app.</noscript>\n        <div id="root">\n            ').concat(e,"\n        </div>\n        ").concat(r.scripts,"\n    </body>\n    </html>\n    ")}var _=s()(),R=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r,t,o){var i,u,s,f,h,v,g,m,x,_,R;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={},u=S()(),s=(0,p.createStore)(w,(0,p.applyMiddleware)(y(),u)),f=u.run(b).toPromise(),u.run(b),h={done:!1,promises:[]},v=new P.ChunkExtractor({statsFile:k}),g=(0,O.jsx)(P.ChunkExtractorManager,{extractor:v,children:(0,O.jsx)(j.ZP.Provider,{value:h,children:(0,O.jsx)(d.Provider,{store:s,children:(0,O.jsx)(c.StaticRouter,{location:r.url,context:i,children:(0,O.jsx)(l.Z,{})})})})}),a().renderToStaticMarkup(g),s.dispatch(E.END),e.prev=10,e.next=13,f;case 13:return e.next=15,Promise.all(h.promises);case 15:e.next=20;break;case 17:return e.prev=17,e.t0=e.catch(10),e.abrupt("return",t.status(500));case 20:h.done=!0,m=a().renderToString(g),x=JSON.stringify(s.getState()).replace(/</g,"\\u003c"),_="<script>__PRELOADED_STATE__=".concat(x,"<\/script>"),R={scripts:_+v.getScriptTags(),links:v.getLinkTags(),styles:v.getStyleTags()},t.send(L(m,R));case 26:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(r,t,n){return e.apply(this,arguments)}}(),q=s().static(h().resolve("./build"),{index:!1});_.use(q),_.use(R),_.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))},701:(e,r,t)=>{t.d(r,{ZP:()=>i,lm:()=>u,p9:()=>a});var n=t(689),o=(0,n.createContext)(null);const i=o;var a=function(e){var r=e.resolve,t=(0,n.useContext)(o);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null},u=function(e){var r=e.resolve,t=(0,n.useContext)(o);return t?t.done?null:void t.promises.push(Promise.resolve(r())):null}},312:(e,r,t)=>{function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.d(r,{ZP:()=>P,PR:()=>x,Rf:()=>b,HD:()=>E});var a=t(214),u=t(861);const s=require("axios");var c=t.n(s),l=t(477),f=(0,a.Z)().mark(j),h=(0,a.Z)().mark(E),p="users/GET_USERS_PENDING",d="users/GET_USERS_SUCCESS",v="users/GET_USERS_FAILURE",y="users/GET_USER",g="users/GET_USER_SUCCESS",m="users/GET_USER_FAILURE",x=function(e){return{type:y,payload:e}},b=function(){return function(){var e=(0,u.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:p}),e.next=4,c().get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,r({type:d,payload:t}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r((n=e.t0,{type:v,error:!0,payload:n})),e.t0;case 12:case"end":return e.stop()}var n}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},w=function(e){return c().get("https://jsonplaceholder.typicode.com/users/".concat(e))};function j(e){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.call)(w,e.payload);case 3:return r=t.sent,t.next=6,(0,l.put)((o=r.data,{type:g,payload:o}));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,(0,l.put)((n=t.t0,{type:m,payload:n,error:!0}));case 12:case"end":return t.stop()}var n,o}),f,null,[[0,8]])}function E(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.takeEvery)(y,j);case 2:case"end":return e.stop()}}),h)}var S={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};const P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case p:return i(i({},e),{},{loading:i(i({},e.loading),{},{users:!0})});case d:return i(i({},e),{},{loading:i(i({},e.loading),{},{users:!1}),users:r.payload.data});case v:return i(i({},e),{},{loading:i(i({},e.loading),{},{users:!1}),error:i(i({},e.error),{},{users:r.payload})});case y:return i(i({},e),{},{loading:i(i({},e.loading),{},{user:!0}),error:i(i({},e.error),{},{user:null})});case g:return i(i({},e),{},{loading:i(i({},e.loading),{},{user:!1}),user:r.payload});case m:return i(i({},e),{},{loading:i(i({},e.loading),{},{user:!1}),error:i(i({},e.error),{},{user:r.payload})});default:return e}}},771:e=>{e.exports=require("@loadable/component")},689:e=>{e.exports=require("react")},22:e=>{e.exports=require("react-redux")},661:e=>{e.exports=require("react-router-dom")},997:e=>{e.exports=require("react/jsx-runtime")},477:e=>{e.exports=require("redux-saga/effects")},861:(e,r,t)=>{function n(e,r,t,n,o,i,a){try{var u=e[i](a),s=u.value}catch(e){return void t(e)}u.done?r(s):Promise.resolve(s).then(n,o)}function o(e){return function(){var r=this,t=arguments;return new Promise((function(o,i){var a=e.apply(r,t);function u(e){n(a,o,i,u,s,"next",e)}function s(e){n(a,o,i,u,s,"throw",e)}u(void 0)}))}}t.d(r,{Z:()=>o})},214:(e,r,t)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(){o=function(){return e};var e={},r=Object.prototype,t=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{c({},"")}catch(e){c=function(e,r,t){return e[r]=t}}function l(e,r,t,n){var o=r&&r.prototype instanceof p?r:p,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(e,r,t){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(t.method=o,t.arg=i;;){var a=t.delegate;if(a){var u=j(a,t);if(u){if(u===h)continue;return u}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===n)throw n="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n="executing";var s=f(e,r,t);if("normal"===s.type){if(n=t.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(n="completed",t.method="throw",t.arg=s.arg)}}}(e,t,a),i}function f(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};c(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==r&&t.call(m,a)&&(y=m);var x=v.prototype=p.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(r){c(e,r,(function(e){return this._invoke(r,e)}))}))}function w(e,r){function o(i,a,u,s){var c=f(e[i],e,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==n(h)&&t.call(h,"__await")?r.resolve(h.__await).then((function(e){o("next",e,u,s)}),(function(e){o("throw",e,u,s)})):r.resolve(h).then((function(e){l.value=e,u(l)}),(function(e){return o("throw",e,u,s)}))}s(c.arg)}var i;this._invoke=function(e,t){function n(){return new r((function(r,n){o(e,t,r,n)}))}return i=i?i.then(n,n):n()}}function j(e,r){var t=e.iterator[r.method];if(void 0===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=void 0,j(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(t,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function S(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(t.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=v,c(x,"constructor",v),c(v,"constructor",d),d.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,u,(function(){return this})),e.AsyncIterator=w,e.async=function(r,t,n,o,i){void 0===i&&(i=Promise);var a=new w(l(r,t,n,o),i);return e.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(x),c(x,s,"Generator"),c(x,a,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var r=[];for(var t in e)r.push(t);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&t.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(t,n){return a.type="throw",a.arg=e,r.next=t,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=t.call(i,"catchLoc"),s=t.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&t.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),h},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),S(t),h}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var o=n.arg;S(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,t){return this.delegate={iterator:O(e),resultName:r,nextLoc:t},"next"===this.method&&(this.arg=void 0),h}},e}t.d(r,{Z:()=>o})}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.m=r,n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>"js/"+{29:"pages-BluePage",645:"pages-RedPage",850:"pages-UsersPage"}[e]+".chunk.js",n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e={179:1},n.f.require=(r,t)=>{e[r]||(r=>{var t=r.modules,o=r.ids,i=r.runtime;for(var a in t)n.o(t,a)&&(n.m[a]=t[a]);i&&i(n);for(var u=0;u<o.length;u++)e[o[u]]=1})(require("./"+n.u(r)))};n(801)})();