!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!g[e]||!O[e])return;for(var r in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(h[r]=n[r]);0==--b&&0===m&&D()}(e,r),n&&n(e,r)};var r,t=!0,o="ff3eab1b5952e180d65f",i={},c=[],d=[];function a(e){var n=H[e];if(!n)return k;var t=function(t){return n.hot.active?(H[t]?-1===H[t].parents.indexOf(e)&&H[t].parents.push(e):(c=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),c=[]),k(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(n){k[e]=n}}};for(var i in k)Object.prototype.hasOwnProperty.call(k,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,o(i));return t.e=function(e){return"ready"===u&&p("prepare"),m++,k.e(e).then(n,(function(e){throw n(),e}));function n(){m--,"prepare"===u&&(w[e]||j(e),0===m&&0===b&&D())}},t.t=function(e,n){return 1&n&&(e=t(e)),k.t(e,-2&n)},t}function l(n){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:r!==n,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(h={})[n]=e[n],p("ready");break;case"ready":x(n);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(n)}},check:E,apply:I,status:function(e){if(!e)return u;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var n=s.indexOf(e);n>=0&&s.splice(n,1)},data:i[n]};return r=void 0,t}var s=[],u="idle";function p(e){u=e;for(var n=0;n<s.length;n++)s[n].call(null,e)}var f,h,y,v,b=0,m=0,w={},O={},g={};function _(e){return+e+""===e?+e:e}function E(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return t=e,p("check"),(n=1e4,n=n||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,i=k.p+""+o+".hot-update.json";t.open("GET",i,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+i+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}}))).then((function(e){if(!e)return p(P()?"ready":"idle"),null;O={},w={},g=e.c,y=e.h,p("prepare");var n=new Promise((function(e,n){f={resolve:e,reject:n}}));h={};return j(0),"prepare"===u&&0===m&&0===b&&D(),n}));var n}function j(e){g[e]?(O[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=k.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):w[e]=!0}function D(){p("ready");var e=f;if(f=null,e)if(t)Promise.resolve().then((function(){return I(t)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&n.push(_(r));e.resolve(n)}}function I(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function n(t){var d,a,l,s,u;function f(e){for(var n=[e],r={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,c=o.chain;if((s=H[i])&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<s.parents.length;d++){var a=s.parents[d],l=H[a];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([a]),moduleId:i,parentId:a};-1===n.indexOf(a)&&(l.hot._acceptedDependencies[i]?(r[a]||(r[a]=[]),b(r[a],[i])):(delete r[a],n.push(a),t.push({chain:c.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function b(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}P();var m={},w=[],O={},E=function(){console.warn("[HMR] unexpected require("+D.moduleId+") to disposed module")};for(var j in h)if(Object.prototype.hasOwnProperty.call(h,j)){var D;u=_(j),D=h[j]?f(u):{type:"disposed",moduleId:j};var I=!1,x=!1,M=!1,A="";switch(D.chain&&(A="\nUpdate propagation: "+D.chain.join(" -> ")),D.type){case"self-declined":t.onDeclined&&t.onDeclined(D),t.ignoreDeclined||(I=new Error("Aborted because of self decline: "+D.moduleId+A));break;case"declined":t.onDeclined&&t.onDeclined(D),t.ignoreDeclined||(I=new Error("Aborted because of declined dependency: "+D.moduleId+" in "+D.parentId+A));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(D),t.ignoreUnaccepted||(I=new Error("Aborted because "+u+" is not accepted"+A));break;case"accepted":t.onAccepted&&t.onAccepted(D),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(D),M=!0;break;default:throw new Error("Unexception type "+D.type)}if(I)return p("abort"),Promise.reject(I);if(x)for(u in O[u]=h[u],b(w,D.outdatedModules),D.outdatedDependencies)Object.prototype.hasOwnProperty.call(D.outdatedDependencies,u)&&(m[u]||(m[u]=[]),b(m[u],D.outdatedDependencies[u]));M&&(b(w,[D.moduleId]),O[u]=E)}var S,U=[];for(a=0;a<w.length;a++)u=w[a],H[u]&&H[u].hot._selfAccepted&&O[u]!==E&&!H[u].hot._selfInvalidated&&U.push({module:u,parents:H[u].parents.slice(),errorHandler:H[u].hot._selfAccepted});p("dispose"),Object.keys(g).forEach((function(e){!1===g[e]&&function(e){delete installedChunks[e]}(e)}));var q,B,L=w.slice();for(;L.length>0;)if(u=L.pop(),s=H[u]){var R={},T=s.hot._disposeHandlers;for(l=0;l<T.length;l++)(d=T[l])(R);for(i[u]=R,s.hot.active=!1,delete H[u],delete m[u],l=0;l<s.children.length;l++){var C=H[s.children[l]];C&&((S=C.parents.indexOf(u))>=0&&C.parents.splice(S,1))}}for(u in m)if(Object.prototype.hasOwnProperty.call(m,u)&&(s=H[u]))for(B=m[u],l=0;l<B.length;l++)q=B[l],(S=s.children.indexOf(q))>=0&&s.children.splice(S,1);p("apply"),void 0!==y&&(o=y,y=void 0);for(u in h=void 0,O)Object.prototype.hasOwnProperty.call(O,u)&&(e[u]=O[u]);var N=null;for(u in m)if(Object.prototype.hasOwnProperty.call(m,u)&&(s=H[u])){B=m[u];var X=[];for(a=0;a<B.length;a++)if(q=B[a],d=s.hot._acceptedDependencies[q]){if(-1!==X.indexOf(d))continue;X.push(d)}for(a=0;a<X.length;a++){d=X[a];try{d(B)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:B[a],error:e}),t.ignoreErrored||N||(N=e)}}}for(a=0;a<U.length;a++){var G=U[a];u=G.module,c=G.parents,r=u;try{k(u)}catch(e){if("function"==typeof G.errorHandler)try{G.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||N||(N=e)}}if(N)return p("fail"),Promise.reject(N);if(v)return n(t).then((function(e){return w.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}));return p("idle"),new Promise((function(e){e(w)}))}(n=n||{})}function P(){if(v)return h||(h={}),v.forEach(x),v=void 0,!0}function x(n){Object.prototype.hasOwnProperty.call(h,n)||(h[n]=e[n])}var H={};function k(n){if(H[n])return H[n].exports;var r=H[n]={i:n,l:!1,exports:{},hot:l(n),parents:(d=c,c=[],d),children:[]};return e[n].call(r.exports,r,r.exports,a(n)),r.l=!0,r.exports}k.m=e,k.c=H,k.d=function(e,n,r){k.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,n){if(1&n&&(e=k(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(k.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)k.d(r,t,function(n){return e[n]}.bind(null,t));return r},k.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(n,"a",n),n},k.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},k.p="",k.h=function(){return o},a(0)(k.s=0)}([function(e,n){let r=0;const t=(e=0)=>(r+=e,r);let o=document.getElementById("consulta"),i=document.getElementById("consigna");document.getElementById("retira");o.addEventListener("click",()=>{alert("Saldo disponible: "+t)}),i.addEventListener("click",()=>{let e=Number(document.getElementById("input").value);alert(`Consigno ${t(e)} con exito!`)})}]);