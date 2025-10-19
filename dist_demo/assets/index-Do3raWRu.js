(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function c(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function i(d){if(d.ep)return;d.ep=!0;const p=c(d);fetch(d.href,p)}})();function pf(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var _c={exports:{}},bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function ty(){if(Gh)return bl;Gh=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(i,d,p){var m=null;if(p!==void 0&&(m=""+p),d.key!==void 0&&(m=""+d.key),"key"in d){p={};for(var f in d)f!=="key"&&(p[f]=d[f])}else p=d;return d=p.ref,{$$typeof:l,type:i,key:m,ref:d!==void 0?d:null,props:p}}return bl.Fragment=r,bl.jsx=c,bl.jsxs=c,bl}var Vh;function ny(){return Vh||(Vh=1,_c.exports=ty()),_c.exports}var o=ny(),Gc={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function oy(){if(qh)return ye;qh=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),m=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),A=Symbol.iterator;function j(w){return w===null||typeof w!="object"?null:(w=A&&w[A]||w["@@iterator"],typeof w=="function"?w:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,B={};function I(w,U,F){this.props=w,this.context=U,this.refs=B,this.updater=F||k}I.prototype.isReactComponent={},I.prototype.setState=function(w,U){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,U,"setState")},I.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function V(){}V.prototype=I.prototype;function K(w,U,F){this.props=w,this.context=U,this.refs=B,this.updater=F||k}var G=K.prototype=new V;G.constructor=K,z(G,I.prototype),G.isPureReactComponent=!0;var Q=Array.isArray;function ue(){}var J={H:null,A:null,T:null,S:null},ae=Object.prototype.hasOwnProperty;function xe(w,U,F){var Z=F.ref;return{$$typeof:l,type:w,key:U,ref:Z!==void 0?Z:null,props:F}}function De(w,U){return xe(w.type,U,w.props)}function ce(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function ge(w){var U={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(F){return U[F]})}var $e=/\/+/g;function me(w,U){return typeof w=="object"&&w!==null&&w.key!=null?ge(""+w.key):U.toString(36)}function he(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(ue,ue):(w.status="pending",w.then(function(U){w.status==="pending"&&(w.status="fulfilled",w.value=U)},function(U){w.status==="pending"&&(w.status="rejected",w.reason=U)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function O(w,U,F,Z,te){var le=typeof w;(le==="undefined"||le==="boolean")&&(w=null);var de=!1;if(w===null)de=!0;else switch(le){case"bigint":case"string":case"number":de=!0;break;case"object":switch(w.$$typeof){case l:case r:de=!0;break;case v:return de=w._init,O(de(w._payload),U,F,Z,te)}}if(de)return te=te(w),de=Z===""?"."+me(w,0):Z,Q(te)?(F="",de!=null&&(F=de.replace($e,"$&/")+"/"),O(te,U,F,"",function(Te){return Te})):te!=null&&(ce(te)&&(te=De(te,F+(te.key==null||w&&w.key===te.key?"":(""+te.key).replace($e,"$&/")+"/")+de)),U.push(te)),1;de=0;var X=Z===""?".":Z+":";if(Q(w))for(var se=0;se<w.length;se++)Z=w[se],le=X+me(Z,se),de+=O(Z,U,F,le,te);else if(se=j(w),typeof se=="function")for(w=se.call(w),se=0;!(Z=w.next()).done;)Z=Z.value,le=X+me(Z,se++),de+=O(Z,U,F,le,te);else if(le==="object"){if(typeof w.then=="function")return O(he(w),U,F,Z,te);throw U=String(w),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return de}function W(w,U,F){if(w==null)return w;var Z=[],te=0;return O(w,Z,"","",function(le){return U.call(F,le,te++)}),Z}function oe(w){if(w._status===-1){var U=w._result;U=U(),U.then(function(F){(w._status===0||w._status===-1)&&(w._status=1,w._result=F)},function(F){(w._status===0||w._status===-1)&&(w._status=2,w._result=F)}),w._status===-1&&(w._status=0,w._result=U)}if(w._status===1)return w._result.default;throw w._result}var Ce=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},Se={map:W,forEach:function(w,U,F){W(w,function(){U.apply(this,arguments)},F)},count:function(w){var U=0;return W(w,function(){U++}),U},toArray:function(w){return W(w,function(U){return U})||[]},only:function(w){if(!ce(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ye.Activity=C,ye.Children=Se,ye.Component=I,ye.Fragment=c,ye.Profiler=d,ye.PureComponent=K,ye.StrictMode=i,ye.Suspense=x,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,ye.__COMPILER_RUNTIME={__proto__:null,c:function(w){return J.H.useMemoCache(w)}},ye.cache=function(w){return function(){return w.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(w,U,F){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var Z=z({},w.props),te=w.key;if(U!=null)for(le in U.key!==void 0&&(te=""+U.key),U)!ae.call(U,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&U.ref===void 0||(Z[le]=U[le]);var le=arguments.length-2;if(le===1)Z.children=F;else if(1<le){for(var de=Array(le),X=0;X<le;X++)de[X]=arguments[X+2];Z.children=de}return xe(w.type,te,Z)},ye.createContext=function(w){return w={$$typeof:m,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:p,_context:w},w},ye.createElement=function(w,U,F){var Z,te={},le=null;if(U!=null)for(Z in U.key!==void 0&&(le=""+U.key),U)ae.call(U,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(te[Z]=U[Z]);var de=arguments.length-2;if(de===1)te.children=F;else if(1<de){for(var X=Array(de),se=0;se<de;se++)X[se]=arguments[se+2];te.children=X}if(w&&w.defaultProps)for(Z in de=w.defaultProps,de)te[Z]===void 0&&(te[Z]=de[Z]);return xe(w,le,te)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(w){return{$$typeof:f,render:w}},ye.isValidElement=ce,ye.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:oe}},ye.memo=function(w,U){return{$$typeof:g,type:w,compare:U===void 0?null:U}},ye.startTransition=function(w){var U=J.T,F={};J.T=F;try{var Z=w(),te=J.S;te!==null&&te(F,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(ue,Ce)}catch(le){Ce(le)}finally{U!==null&&F.types!==null&&(U.types=F.types),J.T=U}},ye.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},ye.use=function(w){return J.H.use(w)},ye.useActionState=function(w,U,F){return J.H.useActionState(w,U,F)},ye.useCallback=function(w,U){return J.H.useCallback(w,U)},ye.useContext=function(w){return J.H.useContext(w)},ye.useDebugValue=function(){},ye.useDeferredValue=function(w,U){return J.H.useDeferredValue(w,U)},ye.useEffect=function(w,U){return J.H.useEffect(w,U)},ye.useEffectEvent=function(w){return J.H.useEffectEvent(w)},ye.useId=function(){return J.H.useId()},ye.useImperativeHandle=function(w,U,F){return J.H.useImperativeHandle(w,U,F)},ye.useInsertionEffect=function(w,U){return J.H.useInsertionEffect(w,U)},ye.useLayoutEffect=function(w,U){return J.H.useLayoutEffect(w,U)},ye.useMemo=function(w,U){return J.H.useMemo(w,U)},ye.useOptimistic=function(w,U){return J.H.useOptimistic(w,U)},ye.useReducer=function(w,U,F){return J.H.useReducer(w,U,F)},ye.useRef=function(w){return J.H.useRef(w)},ye.useState=function(w){return J.H.useState(w)},ye.useSyncExternalStore=function(w,U,F){return J.H.useSyncExternalStore(w,U,F)},ye.useTransition=function(){return J.H.useTransition()},ye.version="19.2.0",ye}var Yh;function ru(){return Yh||(Yh=1,Gc.exports=oy()),Gc.exports}var b=ru();const He=pf(b);var Vc={exports:{}},yl={},qc={exports:{}},Yc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function ay(){return Fh||(Fh=1,(function(l){function r(O,W){var oe=O.length;O.push(W);e:for(;0<oe;){var Ce=oe-1>>>1,Se=O[Ce];if(0<d(Se,W))O[Ce]=W,O[oe]=Se,oe=Ce;else break e}}function c(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var W=O[0],oe=O.pop();if(oe!==W){O[0]=oe;e:for(var Ce=0,Se=O.length,w=Se>>>1;Ce<w;){var U=2*(Ce+1)-1,F=O[U],Z=U+1,te=O[Z];if(0>d(F,oe))Z<Se&&0>d(te,F)?(O[Ce]=te,O[Z]=oe,Ce=Z):(O[Ce]=F,O[U]=oe,Ce=U);else if(Z<Se&&0>d(te,oe))O[Ce]=te,O[Z]=oe,Ce=Z;else break e}}return W}function d(O,W){var oe=O.sortIndex-W.sortIndex;return oe!==0?oe:O.id-W.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var m=Date,f=m.now();l.unstable_now=function(){return m.now()-f}}var x=[],g=[],v=1,C=null,A=3,j=!1,k=!1,z=!1,B=!1,I=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function G(O){for(var W=c(g);W!==null;){if(W.callback===null)i(g);else if(W.startTime<=O)i(g),W.sortIndex=W.expirationTime,r(x,W);else break;W=c(g)}}function Q(O){if(z=!1,G(O),!k)if(c(x)!==null)k=!0,ue||(ue=!0,ge());else{var W=c(g);W!==null&&he(Q,W.startTime-O)}}var ue=!1,J=-1,ae=5,xe=-1;function De(){return B?!0:!(l.unstable_now()-xe<ae)}function ce(){if(B=!1,ue){var O=l.unstable_now();xe=O;var W=!0;try{e:{k=!1,z&&(z=!1,V(J),J=-1),j=!0;var oe=A;try{t:{for(G(O),C=c(x);C!==null&&!(C.expirationTime>O&&De());){var Ce=C.callback;if(typeof Ce=="function"){C.callback=null,A=C.priorityLevel;var Se=Ce(C.expirationTime<=O);if(O=l.unstable_now(),typeof Se=="function"){C.callback=Se,G(O),W=!0;break t}C===c(x)&&i(x),G(O)}else i(x);C=c(x)}if(C!==null)W=!0;else{var w=c(g);w!==null&&he(Q,w.startTime-O),W=!1}}break e}finally{C=null,A=oe,j=!1}W=void 0}}finally{W?ge():ue=!1}}}var ge;if(typeof K=="function")ge=function(){K(ce)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,me=$e.port2;$e.port1.onmessage=ce,ge=function(){me.postMessage(null)}}else ge=function(){I(ce,0)};function he(O,W){J=I(function(){O(l.unstable_now())},W)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(O){O.callback=null},l.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<O?Math.floor(1e3/O):5},l.unstable_getCurrentPriorityLevel=function(){return A},l.unstable_next=function(O){switch(A){case 1:case 2:case 3:var W=3;break;default:W=A}var oe=A;A=W;try{return O()}finally{A=oe}},l.unstable_requestPaint=function(){B=!0},l.unstable_runWithPriority=function(O,W){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var oe=A;A=O;try{return W()}finally{A=oe}},l.unstable_scheduleCallback=function(O,W,oe){var Ce=l.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Ce+oe:Ce):oe=Ce,O){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=oe+Se,O={id:v++,callback:W,priorityLevel:O,startTime:oe,expirationTime:Se,sortIndex:-1},oe>Ce?(O.sortIndex=oe,r(g,O),c(x)===null&&O===c(g)&&(z?(V(J),J=-1):z=!0,he(Q,oe-Ce))):(O.sortIndex=Se,r(x,O),k||j||(k=!0,ue||(ue=!0,ge()))),O},l.unstable_shouldYield=De,l.unstable_wrapCallback=function(O){var W=A;return function(){var oe=A;A=W;try{return O.apply(this,arguments)}finally{A=oe}}}})(Yc)),Yc}var Xh;function ly(){return Xh||(Xh=1,qc.exports=ay()),qc.exports}var Fc={exports:{}},ft={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function sy(){if(Kh)return ft;Kh=1;var l=ru();function r(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var i={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(x,g,v){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:C==null?null:""+C,children:x,containerInfo:g,implementation:v}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,ft.createPortal=function(x,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return p(x,g,null,v)},ft.flushSync=function(x){var g=m.T,v=i.p;try{if(m.T=null,i.p=2,x)return x()}finally{m.T=g,i.p=v,i.d.f()}},ft.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(x,g))},ft.prefetchDNS=function(x){typeof x=="string"&&i.d.D(x)},ft.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var v=g.as,C=f(v,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,j=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:C,integrity:A,fetchPriority:j}):v==="script"&&i.d.X(x,{crossOrigin:C,integrity:A,fetchPriority:j,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ft.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=f(g.as,g.crossOrigin);i.d.M(x,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(x)},ft.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,C=f(v,g.crossOrigin);i.d.L(x,v,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ft.preloadModule=function(x,g){if(typeof x=="string")if(g){var v=f(g.as,g.crossOrigin);i.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(x)},ft.requestFormReset=function(x){i.d.r(x)},ft.unstable_batchedUpdates=function(x,g){return x(g)},ft.useFormState=function(x,g,v){return m.H.useFormState(x,g,v)},ft.useFormStatus=function(){return m.H.useHostTransitionStatus()},ft.version="19.2.0",ft}var Qh;function mf(){if(Qh)return Fc.exports;Qh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Fc.exports=sy(),Fc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function ry(){if(Zh)return yl;Zh=1;var l=ly(),r=ru(),c=mf();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(p(e)!==e)throw Error(i(188))}function g(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,a=t;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(a=s.return,a!==null){n=a;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return x(s),e;if(u===a)return x(s),t;u=u.sibling}throw Error(i(188))}if(n.return!==a.return)n=s,a=u;else{for(var h=!1,y=s.child;y;){if(y===n){h=!0,n=s,a=u;break}if(y===a){h=!0,a=s,n=u;break}y=y.sibling}if(!h){for(y=u.child;y;){if(y===n){h=!0,n=u,a=s;break}if(y===a){h=!0,a=u,n=s;break}y=y.sibling}if(!h)throw Error(i(189))}}if(n.alternate!==a)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var C=Object.assign,A=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),K=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),De=Symbol.for("react.memo_cache_sentinel"),ce=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=ce&&e[ce]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case I:return"Profiler";case B:return"StrictMode";case Q:return"Suspense";case ue:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case K:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case G:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case ae:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var he=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},Ce=[],Se=-1;function w(e){return{current:e}}function U(e){0>Se||(e.current=Ce[Se],Ce[Se]=null,Se--)}function F(e,t){Se++,Ce[Se]=e.current,e.current=t}var Z=w(null),te=w(null),le=w(null),de=w(null);function X(e,t){switch(F(le,t),F(te,e),F(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ph(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ph(t),e=mh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(Z),F(Z,e)}function se(){U(Z),U(te),U(le)}function Te(e){e.memoizedState!==null&&F(de,e);var t=Z.current,n=mh(t,e.type);t!==n&&(F(te,e),F(Z,n))}function We(e){te.current===e&&(U(Z),U(te)),de.current===e&&(U(de),hl._currentValue=oe)}var tt,Bt;function Ye(e){if(tt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tt=t&&t[1]||"",Bt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tt+e+Bt}var Yt=!1;function no(e,t){if(!e||Yt)return"";Yt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch($){var L=$}Reflect.construct(e,[],q)}else{try{q.call()}catch($){L=$}e.call(q.prototype)}}else{try{throw Error()}catch($){L=$}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch($){if($&&L&&typeof $.stack=="string")return[$.stack,L.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),h=u[0],y=u[1];if(h&&y){var S=h.split(`
`),E=y.split(`
`);for(s=a=0;a<S.length&&!S[a].includes("DetermineComponentFrameRoot");)a++;for(;s<E.length&&!E[s].includes("DetermineComponentFrameRoot");)s++;if(a===S.length||s===E.length)for(a=S.length-1,s=E.length-1;1<=a&&0<=s&&S[a]!==E[s];)s--;for(;1<=a&&0<=s;a--,s--)if(S[a]!==E[s]){if(a!==1||s!==1)do if(a--,s--,0>s||S[a]!==E[s]){var H=`
`+S[a].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=a&&0<=s);break}}}finally{Yt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ye(n):""}function No(e,t){switch(e.tag){case 26:case 27:case 5:return Ye(e.type);case 16:return Ye("Lazy");case 13:return e.child!==t&&t!==null?Ye("Suspense Fallback"):Ye("Suspense");case 19:return Ye("SuspenseList");case 0:case 15:return no(e.type,!1);case 11:return no(e.type.render,!1);case 1:return no(e.type,!0);case 31:return Ye("Activity");default:return""}}function on(e){try{var t="",n=null;do t+=No(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ft=Object.prototype.hasOwnProperty,Rr=l.unstable_scheduleCallback,Nr=l.unstable_cancelCallback,Ex=l.unstable_shouldYield,Lx=l.unstable_requestPaint,kt=l.unstable_now,Bx=l.unstable_getCurrentPriorityLevel,Vu=l.unstable_ImmediatePriority,qu=l.unstable_UserBlockingPriority,El=l.unstable_NormalPriority,$x=l.unstable_LowPriority,Yu=l.unstable_IdlePriority,Ix=l.log,Ox=l.unstable_setDisableYieldValue,wa=null,wt=null;function An(e){if(typeof Ix=="function"&&Ox(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(wa,e)}catch{}}var At=Math.clz32?Math.clz32:Px,Hx=Math.log,Ux=Math.LN2;function Px(e){return e>>>=0,e===0?32:31-(Hx(e)/Ux|0)|0}var Ll=256,Bl=262144,$l=4194304;function oo(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Il(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var s=0,u=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var y=a&134217727;return y!==0?(a=y&~u,a!==0?s=oo(a):(h&=y,h!==0?s=oo(h):n||(n=y&~e,n!==0&&(s=oo(n))))):(y=a&~u,y!==0?s=oo(y):h!==0?s=oo(h):n||(n=a&~e,n!==0&&(s=oo(n)))),s===0?0:t!==0&&t!==s&&(t&u)===0&&(u=s&-s,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:s}function Aa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _x(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fu(){var e=$l;return $l<<=1,($l&62914560)===0&&($l=4194304),e}function Dr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ra(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gx(e,t,n,a,s,u){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,S=e.expirationTimes,E=e.hiddenUpdates;for(n=h&~n;0<n;){var H=31-At(n),q=1<<H;y[H]=0,S[H]=-1;var L=E[H];if(L!==null)for(E[H]=null,H=0;H<L.length;H++){var $=L[H];$!==null&&($.lane&=-536870913)}n&=~q}a!==0&&Xu(e,a,0),u!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=u&~(h&~t))}function Xu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-At(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Ku(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-At(n),s=1<<a;s&t|e[a]&t&&(e[a]|=t),n&=~s}}function Qu(e,t){var n=t&-t;return n=(n&42)!==0?1:zr(n),(n&(e.suspendedLanes|t))!==0?0:n}function zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zu(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:$h(e.type))}function Wu(e,t){var n=W.p;try{return W.p=e,t()}finally{W.p=n}}var Rn=Math.random().toString(36).slice(2),ct="__reactFiber$"+Rn,bt="__reactProps$"+Rn,Do="__reactContainer$"+Rn,Er="__reactEvents$"+Rn,Vx="__reactListeners$"+Rn,qx="__reactHandles$"+Rn,Ju="__reactResources$"+Rn,Na="__reactMarker$"+Rn;function Lr(e){delete e[ct],delete e[bt],delete e[Er],delete e[Vx],delete e[qx]}function zo(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Do]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vh(e);e!==null;){if(n=e[ct])return n;e=vh(e)}return t}e=n,n=e.parentNode}return null}function Mo(e){if(e=e[ct]||e[Do]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Da(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Eo(e){var t=e[Ju];return t||(t=e[Ju]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rt(e){e[Na]=!0}var ed=new Set,td={};function ao(e,t){Lo(e,t),Lo(e+"Capture",t)}function Lo(e,t){for(td[e]=t,e=0;e<t.length;e++)ed.add(t[e])}var Yx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nd={},od={};function Fx(e){return Ft.call(od,e)?!0:Ft.call(nd,e)?!1:Yx.test(e)?od[e]=!0:(nd[e]=!0,!1)}function Ol(e,t,n){if(Fx(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Hl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function an(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ad(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xx(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(h){n=""+h,u.call(this,h)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){if(!e._valueTracker){var t=ad(e)?"checked":"value";e._valueTracker=Xx(e,t,""+e[t])}}function ld(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=ad(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ul(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kx=/[\n"\\]/g;function It(e){return e.replace(Kx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $r(e,t,n,a,s,u,h,y){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$t(t)):e.value!==""+$t(t)&&(e.value=""+$t(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?Ir(e,h,$t(t)):n!=null?Ir(e,h,$t(n)):a!=null&&e.removeAttribute("value"),s==null&&u!=null&&(e.defaultChecked=!!u),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+$t(y):e.removeAttribute("name")}function sd(e,t,n,a,s,u,h,y){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Br(e);return}n=n!=null?""+$t(n):"",t=t!=null?""+$t(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}a=a??s,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=y?e.checked:!!a,e.defaultChecked=!!a,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Br(e)}function Ir(e,t,n){t==="number"&&Ul(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Bo(e,t,n,a){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&a&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,a&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function rd(e,t,n){if(t!=null&&(t=""+$t(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$t(n):""}function id(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(i(92));if(he(a)){if(1<a.length)throw Error(i(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=$t(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Br(e)}function $o(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cd(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Qx.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ud(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var s in t)a=t[s],t.hasOwnProperty(s)&&n[s]!==a&&cd(e,s,a)}else for(var u in t)t.hasOwnProperty(u)&&cd(e,u,t[u])}function Or(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(e){return Wx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ln(){}var Hr=null;function Ur(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Io=null,Oo=null;function dd(e){var t=Mo(e);if(t&&(e=t.stateNode)){var n=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if($r(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+It(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var s=a[bt]||null;if(!s)throw Error(i(90));$r(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&ld(a)}break e;case"textarea":rd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Bo(e,!!n.multiple,t,!1)}}}var Pr=!1;function pd(e,t,n){if(Pr)return e(t,n);Pr=!0;try{var a=e(t);return a}finally{if(Pr=!1,(Io!==null||Oo!==null)&&(Rs(),Io&&(t=Io,e=Oo,Oo=Io=null,dd(t),e)))for(t=0;t<e.length;t++)dd(e[t])}}function za(e,t){var n=e.stateNode;if(n===null)return null;var a=n[bt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_r=!1;if(sn)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){_r=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{_r=!1}var Nn=null,Gr=null,_l=null;function md(){if(_l)return _l;var e,t=Gr,n=t.length,a,s="value"in Nn?Nn.value:Nn.textContent,u=s.length;for(e=0;e<n&&t[e]===s[e];e++);var h=n-e;for(a=1;a<=h&&t[n-a]===s[u-a];a++);return _l=s.slice(e,1<a?1-a:void 0)}function Gl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vl(){return!0}function hd(){return!1}function yt(e){function t(n,a,s,u,h){this._reactName=n,this._targetInst=s,this.type=a,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(u):u[y]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Vl:hd,this.isPropagationStopped=hd,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),t}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=yt(lo),Ea=C({},lo,{view:0,detail:0}),Jx=yt(Ea),Vr,qr,La,Yl=C({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==La&&(La&&e.type==="mousemove"?(Vr=e.screenX-La.screenX,qr=e.screenY-La.screenY):qr=Vr=0,La=e),Vr)},movementY:function(e){return"movementY"in e?e.movementY:qr}}),fd=yt(Yl),e0=C({},Yl,{dataTransfer:0}),t0=yt(e0),n0=C({},Ea,{relatedTarget:0}),Yr=yt(n0),o0=C({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),a0=yt(o0),l0=C({},lo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s0=yt(l0),r0=C({},lo,{data:0}),gd=yt(r0),i0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u0[e])?!!t[e]:!1}function Fr(){return d0}var p0=C({},Ea,{key:function(e){if(e.key){var t=i0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fr,charCode:function(e){return e.type==="keypress"?Gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m0=yt(p0),h0=C({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=yt(h0),f0=C({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fr}),g0=yt(f0),x0=C({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),b0=yt(x0),y0=C({},Yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),v0=yt(y0),C0=C({},lo,{newState:0,oldState:0}),S0=yt(C0),j0=[9,13,27,32],Xr=sn&&"CompositionEvent"in window,Ba=null;sn&&"documentMode"in document&&(Ba=document.documentMode);var T0=sn&&"TextEvent"in window&&!Ba,bd=sn&&(!Xr||Ba&&8<Ba&&11>=Ba),yd=" ",vd=!1;function Cd(e,t){switch(e){case"keyup":return j0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ho=!1;function k0(e,t){switch(e){case"compositionend":return Sd(t);case"keypress":return t.which!==32?null:(vd=!0,yd);case"textInput":return e=t.data,e===yd&&vd?null:e;default:return null}}function w0(e,t){if(Ho)return e==="compositionend"||!Xr&&Cd(e,t)?(e=md(),_l=Gr=Nn=null,Ho=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bd&&t.locale!=="ko"?null:t.data;default:return null}}var A0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A0[e.type]:t==="textarea"}function Td(e,t,n,a){Io?Oo?Oo.push(a):Oo=[a]:Io=a,t=Bs(t,"onChange"),0<t.length&&(n=new ql("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var $a=null,Ia=null;function R0(e){sh(e,0)}function Fl(e){var t=Da(e);if(ld(t))return e}function kd(e,t){if(e==="change")return t}var wd=!1;if(sn){var Kr;if(sn){var Qr="oninput"in document;if(!Qr){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),Qr=typeof Ad.oninput=="function"}Kr=Qr}else Kr=!1;wd=Kr&&(!document.documentMode||9<document.documentMode)}function Rd(){$a&&($a.detachEvent("onpropertychange",Nd),Ia=$a=null)}function Nd(e){if(e.propertyName==="value"&&Fl(Ia)){var t=[];Td(t,Ia,e,Ur(e)),pd(R0,t)}}function N0(e,t,n){e==="focusin"?(Rd(),$a=t,Ia=n,$a.attachEvent("onpropertychange",Nd)):e==="focusout"&&Rd()}function D0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(Ia)}function z0(e,t){if(e==="click")return Fl(t)}function M0(e,t){if(e==="input"||e==="change")return Fl(t)}function E0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:E0;function Oa(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var s=n[a];if(!Ft.call(t,s)||!Rt(e[s],t[s]))return!1}return!0}function Dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,t){var n=Dd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dd(n)}}function Md(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Md(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ed(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ul(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ul(e.document)}return t}function Zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var L0=sn&&"documentMode"in document&&11>=document.documentMode,Uo=null,Wr=null,Ha=null,Jr=!1;function Ld(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jr||Uo==null||Uo!==Ul(a)||(a=Uo,"selectionStart"in a&&Zr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ha&&Oa(Ha,a)||(Ha=a,a=Bs(Wr,"onSelect"),0<a.length&&(t=new ql("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Uo)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Po={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionrun:so("Transition","TransitionRun"),transitionstart:so("Transition","TransitionStart"),transitioncancel:so("Transition","TransitionCancel"),transitionend:so("Transition","TransitionEnd")},ei={},Bd={};sn&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete Po.animationend.animation,delete Po.animationiteration.animation,delete Po.animationstart.animation),"TransitionEvent"in window||delete Po.transitionend.transition);function ro(e){if(ei[e])return ei[e];if(!Po[e])return e;var t=Po[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bd)return ei[e]=t[n];return e}var $d=ro("animationend"),Id=ro("animationiteration"),Od=ro("animationstart"),B0=ro("transitionrun"),$0=ro("transitionstart"),I0=ro("transitioncancel"),Hd=ro("transitionend"),Ud=new Map,ti="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ti.push("scrollEnd");function Xt(e,t){Ud.set(e,t),ao(t,[e])}var Xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ot=[],_o=0,ni=0;function Kl(){for(var e=_o,t=ni=_o=0;t<e;){var n=Ot[t];Ot[t++]=null;var a=Ot[t];Ot[t++]=null;var s=Ot[t];Ot[t++]=null;var u=Ot[t];if(Ot[t++]=null,a!==null&&s!==null){var h=a.pending;h===null?s.next=s:(s.next=h.next,h.next=s),a.pending=s}u!==0&&Pd(n,s,u)}}function Ql(e,t,n,a){Ot[_o++]=e,Ot[_o++]=t,Ot[_o++]=n,Ot[_o++]=a,ni|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function oi(e,t,n,a){return Ql(e,t,n,a),Zl(e)}function io(e,t){return Ql(e,null,null,t),Zl(e)}function Pd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var s=!1,u=e.return;u!==null;)u.childLanes|=n,a=u.alternate,a!==null&&(a.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(s=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,s&&t!==null&&(s=31-At(n),e=u.hiddenUpdates,a=e[s],a===null?e[s]=[t]:a.push(t),t.lane=n|536870912),u):null}function Zl(e){if(50<rl)throw rl=0,pc=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Go={};function O0(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,n,a){return new O0(e,t,n,a)}function ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rn(e,t){var n=e.alternate;return n===null?(n=Nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _d(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wl(e,t,n,a,s,u){var h=0;if(a=e,typeof e=="function")ai(e)&&(h=1);else if(typeof e=="string")h=Gb(e,n,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=Nt(31,n,t,s),e.elementType=xe,e.lanes=u,e;case z:return co(n.children,s,u,t);case B:h=8,s|=24;break;case I:return e=Nt(12,n,t,s|2),e.elementType=I,e.lanes=u,e;case Q:return e=Nt(13,n,t,s),e.elementType=Q,e.lanes=u,e;case ue:return e=Nt(19,n,t,s),e.elementType=ue,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:h=10;break e;case V:h=9;break e;case G:h=11;break e;case J:h=14;break e;case ae:h=16,a=null;break e}h=29,n=Error(i(130,e===null?"null":typeof e,"")),a=null}return t=Nt(h,n,t,s),t.elementType=e,t.type=a,t.lanes=u,t}function co(e,t,n,a){return e=Nt(7,e,a,t),e.lanes=n,e}function li(e,t,n){return e=Nt(6,e,null,t),e.lanes=n,e}function Gd(e){var t=Nt(18,null,null,0);return t.stateNode=e,t}function si(e,t,n){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Vd=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var n=Vd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:on(t)},Vd.set(e,t),t)}return{value:e,source:t,stack:on(t)}}var Vo=[],qo=0,Jl=null,Ua=0,Ut=[],Pt=0,Dn=null,Zt=1,Wt="";function cn(e,t){Vo[qo++]=Ua,Vo[qo++]=Jl,Jl=e,Ua=t}function qd(e,t,n){Ut[Pt++]=Zt,Ut[Pt++]=Wt,Ut[Pt++]=Dn,Dn=e;var a=Zt;e=Wt;var s=32-At(a)-1;a&=~(1<<s),n+=1;var u=32-At(t)+s;if(30<u){var h=s-s%5;u=(a&(1<<h)-1).toString(32),a>>=h,s-=h,Zt=1<<32-At(t)+s|n<<s|a,Wt=u+e}else Zt=1<<u|n<<s|a,Wt=e}function ri(e){e.return!==null&&(cn(e,1),qd(e,1,0))}function ii(e){for(;e===Jl;)Jl=Vo[--qo],Vo[qo]=null,Ua=Vo[--qo],Vo[qo]=null;for(;e===Dn;)Dn=Ut[--Pt],Ut[Pt]=null,Wt=Ut[--Pt],Ut[Pt]=null,Zt=Ut[--Pt],Ut[Pt]=null}function Yd(e,t){Ut[Pt++]=Zt,Ut[Pt++]=Wt,Ut[Pt++]=Dn,Zt=t.id,Wt=t.overflow,Dn=e}var ut=null,Ve=null,Ne=!1,zn=null,_t=!1,ci=Error(i(519));function Mn(e){var t=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pa(Ht(t,e)),ci}function Fd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ct]=e,t[bt]=a,n){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(n=0;n<cl.length;n++)we(cl[n],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),sd(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),id(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||uh(t.textContent,n)?(a.popover!=null&&(we("beforetoggle",t),we("toggle",t)),a.onScroll!=null&&we("scroll",t),a.onScrollEnd!=null&&we("scrollend",t),a.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Mn(e,!0)}function Xd(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 31:case 13:_t=!1;return;case 27:case 3:_t=!0;return;default:ut=ut.return}}function Yo(e){if(e!==ut)return!1;if(!Ne)return Xd(e),Ne=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ac(e.type,e.memoizedProps)),n=!n),n&&Ve&&Mn(e),Xd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));Ve=yh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));Ve=yh(e)}else t===27?(t=Ve,Yn(e.type)?(e=Mc,Mc=null,Ve=e):Ve=t):Ve=ut?Vt(e.stateNode.nextSibling):null;return!0}function uo(){Ve=ut=null,Ne=!1}function ui(){var e=zn;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),zn=null),e}function Pa(e){zn===null?zn=[e]:zn.push(e)}var di=w(null),po=null,un=null;function En(e,t,n){F(di,t._currentValue),t._currentValue=n}function dn(e){e._currentValue=di.current,U(di)}function pi(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function mi(e,t,n,a){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){var h=s.child;u=u.firstContext;e:for(;u!==null;){var y=u;u=s;for(var S=0;S<t.length;S++)if(y.context===t[S]){u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),pi(u.return,n,e),a||(h=null);break e}u=y.next}}else if(s.tag===18){if(h=s.return,h===null)throw Error(i(341));h.lanes|=n,u=h.alternate,u!==null&&(u.lanes|=n),pi(h,n,e),h=null}else h=s.child;if(h!==null)h.return=s;else for(h=s;h!==null;){if(h===e){h=null;break}if(s=h.sibling,s!==null){s.return=h.return,h=s;break}h=h.return}s=h}}function Fo(e,t,n,a){e=null;for(var s=t,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var h=s.alternate;if(h===null)throw Error(i(387));if(h=h.memoizedProps,h!==null){var y=s.type;Rt(s.pendingProps.value,h.value)||(e!==null?e.push(y):e=[y])}}else if(s===de.current){if(h=s.alternate,h===null)throw Error(i(387));h.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(hl):e=[hl])}s=s.return}e!==null&&mi(t,e,n,a),t.flags|=262144}function es(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function mo(e){po=e,un=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return Kd(po,e)}function ts(e,t){return po===null&&mo(e),Kd(e,t)}function Kd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},un===null){if(e===null)throw Error(i(308));un=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else un=un.next=t;return n}var H0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},U0=l.unstable_scheduleCallback,P0=l.unstable_NormalPriority,nt={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hi(){return{controller:new H0,data:new Map,refCount:0}}function _a(e){e.refCount--,e.refCount===0&&U0(P0,function(){e.controller.abort()})}var Ga=null,fi=0,Xo=0,Ko=null;function _0(e,t){if(Ga===null){var n=Ga=[];fi=0,Xo=bc(),Ko={status:"pending",value:void 0,then:function(a){n.push(a)}}}return fi++,t.then(Qd,Qd),t}function Qd(){if(--fi===0&&Ga!==null){Ko!==null&&(Ko.status="fulfilled");var e=Ga;Ga=null,Xo=0,Ko=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function G0(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(a.status="rejected",a.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),a}var Zd=O.S;O.S=function(e,t){Lm=kt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_0(e,t),Zd!==null&&Zd(e,t)};var ho=w(null);function gi(){var e=ho.current;return e!==null?e:Ge.pooledCache}function ns(e,t){t===null?F(ho,ho.current):F(ho,t.pool)}function Wd(){var e=gi();return e===null?null:{parent:nt._currentValue,pool:e}}var Qo=Error(i(460)),xi=Error(i(474)),os=Error(i(542)),as={then:function(){}};function Jd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ep(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,np(e),e;default:if(typeof t.status=="string")t.then(ln,ln);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=a}},function(a){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,np(e),e}throw go=t,Qo}}function fo(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(go=n,Qo):n}}var go=null;function tp(){if(go===null)throw Error(i(459));var e=go;return go=null,e}function np(e){if(e===Qo||e===os)throw Error(i(483))}var Zo=null,Va=0;function ls(e){var t=Va;return Va+=1,Zo===null&&(Zo=[]),ep(Zo,e,t)}function qa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ss(e,t){throw t.$$typeof===A?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function op(e){function t(N,R){if(e){var M=N.deletions;M===null?(N.deletions=[R],N.flags|=16):M.push(R)}}function n(N,R){if(!e)return null;for(;R!==null;)t(N,R),R=R.sibling;return null}function a(N){for(var R=new Map;N!==null;)N.key!==null?R.set(N.key,N):R.set(N.index,N),N=N.sibling;return R}function s(N,R){return N=rn(N,R),N.index=0,N.sibling=null,N}function u(N,R,M){return N.index=M,e?(M=N.alternate,M!==null?(M=M.index,M<R?(N.flags|=67108866,R):M):(N.flags|=67108866,R)):(N.flags|=1048576,R)}function h(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function y(N,R,M,P){return R===null||R.tag!==6?(R=li(M,N.mode,P),R.return=N,R):(R=s(R,M),R.return=N,R)}function S(N,R,M,P){var pe=M.type;return pe===z?H(N,R,M.props.children,P,M.key):R!==null&&(R.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ae&&fo(pe)===R.type)?(R=s(R,M.props),qa(R,M),R.return=N,R):(R=Wl(M.type,M.key,M.props,null,N.mode,P),qa(R,M),R.return=N,R)}function E(N,R,M,P){return R===null||R.tag!==4||R.stateNode.containerInfo!==M.containerInfo||R.stateNode.implementation!==M.implementation?(R=si(M,N.mode,P),R.return=N,R):(R=s(R,M.children||[]),R.return=N,R)}function H(N,R,M,P,pe){return R===null||R.tag!==7?(R=co(M,N.mode,P,pe),R.return=N,R):(R=s(R,M),R.return=N,R)}function q(N,R,M){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=li(""+R,N.mode,M),R.return=N,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case j:return M=Wl(R.type,R.key,R.props,null,N.mode,M),qa(M,R),M.return=N,M;case k:return R=si(R,N.mode,M),R.return=N,R;case ae:return R=fo(R),q(N,R,M)}if(he(R)||ge(R))return R=co(R,N.mode,M,null),R.return=N,R;if(typeof R.then=="function")return q(N,ls(R),M);if(R.$$typeof===K)return q(N,ts(N,R),M);ss(N,R)}return null}function L(N,R,M,P){var pe=R!==null?R.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return pe!==null?null:y(N,R,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case j:return M.key===pe?S(N,R,M,P):null;case k:return M.key===pe?E(N,R,M,P):null;case ae:return M=fo(M),L(N,R,M,P)}if(he(M)||ge(M))return pe!==null?null:H(N,R,M,P,null);if(typeof M.then=="function")return L(N,R,ls(M),P);if(M.$$typeof===K)return L(N,R,ts(N,M),P);ss(N,M)}return null}function $(N,R,M,P,pe){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return N=N.get(M)||null,y(R,N,""+P,pe);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case j:return N=N.get(P.key===null?M:P.key)||null,S(R,N,P,pe);case k:return N=N.get(P.key===null?M:P.key)||null,E(R,N,P,pe);case ae:return P=fo(P),$(N,R,M,P,pe)}if(he(P)||ge(P))return N=N.get(M)||null,H(R,N,P,pe,null);if(typeof P.then=="function")return $(N,R,M,ls(P),pe);if(P.$$typeof===K)return $(N,R,M,ts(R,P),pe);ss(R,P)}return null}function ne(N,R,M,P){for(var pe=null,ze=null,ie=R,je=R=0,Re=null;ie!==null&&je<M.length;je++){ie.index>je?(Re=ie,ie=null):Re=ie.sibling;var Me=L(N,ie,M[je],P);if(Me===null){ie===null&&(ie=Re);break}e&&ie&&Me.alternate===null&&t(N,ie),R=u(Me,R,je),ze===null?pe=Me:ze.sibling=Me,ze=Me,ie=Re}if(je===M.length)return n(N,ie),Ne&&cn(N,je),pe;if(ie===null){for(;je<M.length;je++)ie=q(N,M[je],P),ie!==null&&(R=u(ie,R,je),ze===null?pe=ie:ze.sibling=ie,ze=ie);return Ne&&cn(N,je),pe}for(ie=a(ie);je<M.length;je++)Re=$(ie,N,je,M[je],P),Re!==null&&(e&&Re.alternate!==null&&ie.delete(Re.key===null?je:Re.key),R=u(Re,R,je),ze===null?pe=Re:ze.sibling=Re,ze=Re);return e&&ie.forEach(function(Zn){return t(N,Zn)}),Ne&&cn(N,je),pe}function fe(N,R,M,P){if(M==null)throw Error(i(151));for(var pe=null,ze=null,ie=R,je=R=0,Re=null,Me=M.next();ie!==null&&!Me.done;je++,Me=M.next()){ie.index>je?(Re=ie,ie=null):Re=ie.sibling;var Zn=L(N,ie,Me.value,P);if(Zn===null){ie===null&&(ie=Re);break}e&&ie&&Zn.alternate===null&&t(N,ie),R=u(Zn,R,je),ze===null?pe=Zn:ze.sibling=Zn,ze=Zn,ie=Re}if(Me.done)return n(N,ie),Ne&&cn(N,je),pe;if(ie===null){for(;!Me.done;je++,Me=M.next())Me=q(N,Me.value,P),Me!==null&&(R=u(Me,R,je),ze===null?pe=Me:ze.sibling=Me,ze=Me);return Ne&&cn(N,je),pe}for(ie=a(ie);!Me.done;je++,Me=M.next())Me=$(ie,N,je,Me.value,P),Me!==null&&(e&&Me.alternate!==null&&ie.delete(Me.key===null?je:Me.key),R=u(Me,R,je),ze===null?pe=Me:ze.sibling=Me,ze=Me);return e&&ie.forEach(function(ey){return t(N,ey)}),Ne&&cn(N,je),pe}function _e(N,R,M,P){if(typeof M=="object"&&M!==null&&M.type===z&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case j:e:{for(var pe=M.key;R!==null;){if(R.key===pe){if(pe=M.type,pe===z){if(R.tag===7){n(N,R.sibling),P=s(R,M.props.children),P.return=N,N=P;break e}}else if(R.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ae&&fo(pe)===R.type){n(N,R.sibling),P=s(R,M.props),qa(P,M),P.return=N,N=P;break e}n(N,R);break}else t(N,R);R=R.sibling}M.type===z?(P=co(M.props.children,N.mode,P,M.key),P.return=N,N=P):(P=Wl(M.type,M.key,M.props,null,N.mode,P),qa(P,M),P.return=N,N=P)}return h(N);case k:e:{for(pe=M.key;R!==null;){if(R.key===pe)if(R.tag===4&&R.stateNode.containerInfo===M.containerInfo&&R.stateNode.implementation===M.implementation){n(N,R.sibling),P=s(R,M.children||[]),P.return=N,N=P;break e}else{n(N,R);break}else t(N,R);R=R.sibling}P=si(M,N.mode,P),P.return=N,N=P}return h(N);case ae:return M=fo(M),_e(N,R,M,P)}if(he(M))return ne(N,R,M,P);if(ge(M)){if(pe=ge(M),typeof pe!="function")throw Error(i(150));return M=pe.call(M),fe(N,R,M,P)}if(typeof M.then=="function")return _e(N,R,ls(M),P);if(M.$$typeof===K)return _e(N,R,ts(N,M),P);ss(N,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,R!==null&&R.tag===6?(n(N,R.sibling),P=s(R,M),P.return=N,N=P):(n(N,R),P=li(M,N.mode,P),P.return=N,N=P),h(N)):n(N,R)}return function(N,R,M,P){try{Va=0;var pe=_e(N,R,M,P);return Zo=null,pe}catch(ie){if(ie===Qo||ie===os)throw ie;var ze=Nt(29,ie,null,N.mode);return ze.lanes=P,ze.return=N,ze}finally{}}}var xo=op(!0),ap=op(!1),Ln=!1;function bi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $n(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ee&2)!==0){var s=a.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),a.pending=t,t=Zl(e),Pd(e,null,n),t}return Ql(e,a,t,n),Zl(e)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ku(e,n)}}function vi(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?s=u=h:u=u.next=h,n=n.next}while(n!==null);u===null?s=u=t:u=u.next=t}else s=u=t;n={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ci=!1;function Fa(){if(Ci){var e=Ko;if(e!==null)throw e}}function Xa(e,t,n,a){Ci=!1;var s=e.updateQueue;Ln=!1;var u=s.firstBaseUpdate,h=s.lastBaseUpdate,y=s.shared.pending;if(y!==null){s.shared.pending=null;var S=y,E=S.next;S.next=null,h===null?u=E:h.next=E,h=S;var H=e.alternate;H!==null&&(H=H.updateQueue,y=H.lastBaseUpdate,y!==h&&(y===null?H.firstBaseUpdate=E:y.next=E,H.lastBaseUpdate=S))}if(u!==null){var q=s.baseState;h=0,H=E=S=null,y=u;do{var L=y.lane&-536870913,$=L!==y.lane;if($?(Ae&L)===L:(a&L)===L){L!==0&&L===Xo&&(Ci=!0),H!==null&&(H=H.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ne=e,fe=y;L=t;var _e=n;switch(fe.tag){case 1:if(ne=fe.payload,typeof ne=="function"){q=ne.call(_e,q,L);break e}q=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=fe.payload,L=typeof ne=="function"?ne.call(_e,q,L):ne,L==null)break e;q=C({},q,L);break e;case 2:Ln=!0}}L=y.callback,L!==null&&(e.flags|=64,$&&(e.flags|=8192),$=s.callbacks,$===null?s.callbacks=[L]:$.push(L))}else $={lane:L,tag:y.tag,payload:y.payload,callback:y.callback,next:null},H===null?(E=H=$,S=q):H=H.next=$,h|=L;if(y=y.next,y===null){if(y=s.shared.pending,y===null)break;$=y,y=$.next,$.next=null,s.lastBaseUpdate=$,s.shared.pending=null}}while(!0);H===null&&(S=q),s.baseState=S,s.firstBaseUpdate=E,s.lastBaseUpdate=H,u===null&&(s.shared.lanes=0),Pn|=h,e.lanes=h,e.memoizedState=q}}function lp(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function sp(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)lp(n[e],t)}var Wo=w(null),rs=w(0);function rp(e,t){e=vn,F(rs,e),F(Wo,t),vn=e|t.baseLanes}function Si(){F(rs,vn),F(Wo,Wo.current)}function ji(){vn=rs.current,U(Wo),U(rs)}var Dt=w(null),Gt=null;function In(e){var t=e.alternate;F(Je,Je.current&1),F(Dt,e),Gt===null&&(t===null||Wo.current!==null||t.memoizedState!==null)&&(Gt=e)}function Ti(e){F(Je,Je.current),F(Dt,e),Gt===null&&(Gt=e)}function ip(e){e.tag===22?(F(Je,Je.current),F(Dt,e),Gt===null&&(Gt=e)):On()}function On(){F(Je,Je.current),F(Dt,Dt.current)}function zt(e){U(Dt),Gt===e&&(Gt=null),U(Je)}var Je=w(0);function is(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Dc(n)||zc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pn=0,ve=null,Ue=null,ot=null,cs=!1,Jo=!1,bo=!1,us=0,Ka=0,ea=null,V0=0;function Qe(){throw Error(i(321))}function ki(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function wi(e,t,n,a,s,u){return pn=u,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?qp:Pi,bo=!1,u=n(a,s),bo=!1,Jo&&(u=up(t,n,a,s)),cp(e),u}function cp(e){O.H=Wa;var t=Ue!==null&&Ue.next!==null;if(pn=0,ot=Ue=ve=null,cs=!1,Ka=0,ea=null,t)throw Error(i(300));e===null||at||(e=e.dependencies,e!==null&&es(e)&&(at=!0))}function up(e,t,n,a){ve=e;var s=0;do{if(Jo&&(ea=null),Ka=0,Jo=!1,25<=s)throw Error(i(301));if(s+=1,ot=Ue=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}O.H=Yp,u=t(n,a)}while(Jo);return u}function q0(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?Qa(t):t,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(ve.flags|=1024),t}function Ai(){var e=us!==0;return us=0,e}function Ri(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ni(e){if(cs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}cs=!1}pn=0,ot=Ue=ve=null,Jo=!1,Ka=us=0,ea=null}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?ve.memoizedState=ot=e:ot=ot.next=e,ot}function et(){if(Ue===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=ot===null?ve.memoizedState:ot.next;if(t!==null)ot=t,Ue=e;else{if(e===null)throw ve.alternate===null?Error(i(467)):Error(i(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},ot===null?ve.memoizedState=ot=e:ot=ot.next=e}return ot}function ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qa(e){var t=Ka;return Ka+=1,ea===null&&(ea=[]),e=ep(ea,e,t),t=ve,(ot===null?t.memoizedState:ot.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?qp:Pi),e}function ps(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qa(e);if(e.$$typeof===K)return dt(e)}throw Error(i(438,String(e)))}function Di(e){var t=null,n=ve.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ve.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ds(),ve.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=De;return t.index++,n}function mn(e,t){return typeof t=="function"?t(e):t}function ms(e){var t=et();return zi(t,Ue,e)}function zi(e,t,n){var a=e.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=n;var s=e.baseQueue,u=a.pending;if(u!==null){if(s!==null){var h=s.next;s.next=u.next,u.next=h}t.baseQueue=s=u,a.pending=null}if(u=e.baseState,s===null)e.memoizedState=u;else{t=s.next;var y=h=null,S=null,E=t,H=!1;do{var q=E.lane&-536870913;if(q!==E.lane?(Ae&q)===q:(pn&q)===q){var L=E.revertLane;if(L===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),q===Xo&&(H=!0);else if((pn&L)===L){E=E.next,L===Xo&&(H=!0);continue}else q={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},S===null?(y=S=q,h=u):S=S.next=q,ve.lanes|=L,Pn|=L;q=E.action,bo&&n(u,q),u=E.hasEagerState?E.eagerState:n(u,q)}else L={lane:q,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},S===null?(y=S=L,h=u):S=S.next=L,ve.lanes|=q,Pn|=q;E=E.next}while(E!==null&&E!==t);if(S===null?h=u:S.next=y,!Rt(u,e.memoizedState)&&(at=!0,H&&(n=Ko,n!==null)))throw n;e.memoizedState=u,e.baseState=h,e.baseQueue=S,a.lastRenderedState=u}return s===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Mi(e){var t=et(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var a=n.dispatch,s=n.pending,u=t.memoizedState;if(s!==null){n.pending=null;var h=s=s.next;do u=e(u,h.action),h=h.next;while(h!==s);Rt(u,t.memoizedState)||(at=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,a]}function dp(e,t,n){var a=ve,s=et(),u=Ne;if(u){if(n===void 0)throw Error(i(407));n=n()}else n=t();var h=!Rt((Ue||s).memoizedState,n);if(h&&(s.memoizedState=n,at=!0),s=s.queue,Bi(hp.bind(null,a,s,e),[e]),s.getSnapshot!==t||h||ot!==null&&ot.memoizedState.tag&1){if(a.flags|=2048,ta(9,{destroy:void 0},mp.bind(null,a,s,n,t),null),Ge===null)throw Error(i(349));u||(pn&127)!==0||pp(a,t,n)}return n}function pp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t=ds(),ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mp(e,t,n,a){t.value=n,t.getSnapshot=a,fp(t)&&gp(e)}function hp(e,t,n){return n(function(){fp(t)&&gp(e)})}function fp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function gp(e){var t=io(e,2);t!==null&&Tt(t,e,2)}function Ei(e){var t=xt();if(typeof e=="function"){var n=e;if(e=n(),bo){An(!0);try{n()}finally{An(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},t}function xp(e,t,n,a){return e.baseState=n,zi(e,Ue,typeof a=="function"?a:mn)}function Y0(e,t,n,a,s){if(gs(e))throw Error(i(485));if(e=t.action,e!==null){var u={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){u.listeners.push(h)}};O.T!==null?n(!0):u.isTransition=!1,a(u),n=t.pending,n===null?(u.next=t.pending=u,bp(t,u)):(u.next=n.next,t.pending=n.next=u)}}function bp(e,t){var n=t.action,a=t.payload,s=e.state;if(t.isTransition){var u=O.T,h={};O.T=h;try{var y=n(s,a),S=O.S;S!==null&&S(h,y),yp(e,t,y)}catch(E){Li(e,t,E)}finally{u!==null&&h.types!==null&&(u.types=h.types),O.T=u}}else try{u=n(s,a),yp(e,t,u)}catch(E){Li(e,t,E)}}function yp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){vp(e,t,a)},function(a){return Li(e,t,a)}):vp(e,t,n)}function vp(e,t,n){t.status="fulfilled",t.value=n,Cp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,bp(e,n)))}function Li(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Cp(t),t=t.next;while(t!==a)}e.action=null}function Cp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Sp(e,t){return t}function jp(e,t){if(Ne){var n=Ge.formState;if(n!==null){e:{var a=ve;if(Ne){if(Ve){t:{for(var s=Ve,u=_t;s.nodeType!==8;){if(!u){s=null;break t}if(s=Vt(s.nextSibling),s===null){s=null;break t}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){Ve=Vt(s.nextSibling),a=s.data==="F!";break e}}Mn(a)}a=!1}a&&(t=n[0])}}return n=xt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sp,lastRenderedState:t},n.queue=a,n=_p.bind(null,ve,a),a.dispatch=n,a=Ei(!1),u=Ui.bind(null,ve,!1,a.queue),a=xt(),s={state:t,dispatch:null,action:e,pending:null},a.queue=s,n=Y0.bind(null,ve,s,u,n),s.dispatch=n,a.memoizedState=e,[t,n,!1]}function Tp(e){var t=et();return kp(t,Ue,e)}function kp(e,t,n){if(t=zi(e,t,Sp)[0],e=ms(mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Qa(t)}catch(h){throw h===Qo?os:h}else a=t;t=et();var s=t.queue,u=s.dispatch;return n!==t.memoizedState&&(ve.flags|=2048,ta(9,{destroy:void 0},F0.bind(null,s,n),null)),[a,u,e]}function F0(e,t){e.action=t}function wp(e){var t=et(),n=Ue;if(n!==null)return kp(t,n,e);et(),t=t.memoizedState,n=et();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ta(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ve.updateQueue,t===null&&(t=ds(),ve.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Ap(){return et().memoizedState}function hs(e,t,n,a){var s=xt();ve.flags|=e,s.memoizedState=ta(1|t,{destroy:void 0},n,a===void 0?null:a)}function fs(e,t,n,a){var s=et();a=a===void 0?null:a;var u=s.memoizedState.inst;Ue!==null&&a!==null&&ki(a,Ue.memoizedState.deps)?s.memoizedState=ta(t,u,n,a):(ve.flags|=e,s.memoizedState=ta(1|t,u,n,a))}function Rp(e,t){hs(8390656,8,e,t)}function Bi(e,t){fs(2048,8,e,t)}function X0(e){ve.flags|=4;var t=ve.updateQueue;if(t===null)t=ds(),ve.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Np(e){var t=et().memoizedState;return X0({ref:t,nextImpl:e}),function(){if((Ee&2)!==0)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Dp(e,t){return fs(4,2,e,t)}function zp(e,t){return fs(4,4,e,t)}function Mp(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ep(e,t,n){n=n!=null?n.concat([e]):null,fs(4,4,Mp.bind(null,t,e),n)}function $i(){}function Lp(e,t){var n=et();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&ki(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Bp(e,t){var n=et();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&ki(t,a[1]))return a[0];if(a=e(),bo){An(!0);try{e()}finally{An(!1)}}return n.memoizedState=[a,t],a}function Ii(e,t,n){return n===void 0||(pn&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=$m(),ve.lanes|=e,Pn|=e,n)}function $p(e,t,n,a){return Rt(n,t)?n:Wo.current!==null?(e=Ii(e,n,a),Rt(e,t)||(at=!0),e):(pn&42)===0||(pn&1073741824)!==0&&(Ae&261930)===0?(at=!0,e.memoizedState=n):(e=$m(),ve.lanes|=e,Pn|=e,t)}function Ip(e,t,n,a,s){var u=W.p;W.p=u!==0&&8>u?u:8;var h=O.T,y={};O.T=y,Ui(e,!1,t,n);try{var S=s(),E=O.S;if(E!==null&&E(y,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var H=G0(S,a);Za(e,t,H,Lt(e))}else Za(e,t,a,Lt(e))}catch(q){Za(e,t,{then:function(){},status:"rejected",reason:q},Lt())}finally{W.p=u,h!==null&&y.types!==null&&(h.types=y.types),O.T=h}}function K0(){}function Oi(e,t,n,a){if(e.tag!==5)throw Error(i(476));var s=Op(e).queue;Ip(e,s,t,oe,n===null?K0:function(){return Hp(e),n(a)})}function Op(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:oe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Hp(e){var t=Op(e);t.next===null&&(t=e.alternate.memoizedState),Za(e,t.next.queue,{},Lt())}function Hi(){return dt(hl)}function Up(){return et().memoizedState}function Pp(){return et().memoizedState}function Q0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Lt();e=Bn(n);var a=$n(t,e,n);a!==null&&(Tt(a,t,n),Ya(a,t,n)),t={cache:hi()},e.payload=t;return}t=t.return}}function Z0(e,t,n){var a=Lt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},gs(e)?Gp(t,n):(n=oi(e,t,n,a),n!==null&&(Tt(n,e,a),Vp(n,t,a)))}function _p(e,t,n){var a=Lt();Za(e,t,n,a)}function Za(e,t,n,a){var s={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(gs(e))Gp(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var h=t.lastRenderedState,y=u(h,n);if(s.hasEagerState=!0,s.eagerState=y,Rt(y,h))return Ql(e,t,s,0),Ge===null&&Kl(),!1}catch{}finally{}if(n=oi(e,t,s,a),n!==null)return Tt(n,e,a),Vp(n,t,a),!0}return!1}function Ui(e,t,n,a){if(a={lane:2,revertLane:bc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gs(e)){if(t)throw Error(i(479))}else t=oi(e,n,a,2),t!==null&&Tt(t,e,2)}function gs(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Gp(e,t){Jo=cs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vp(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ku(e,n)}}var Wa={readContext:dt,use:ps,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};Wa.useEffectEvent=Qe;var qp={readContext:dt,use:ps,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Rp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,hs(4194308,4,Mp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hs(4194308,4,e,t)},useInsertionEffect:function(e,t){hs(4,2,e,t)},useMemo:function(e,t){var n=xt();t=t===void 0?null:t;var a=e();if(bo){An(!0);try{e()}finally{An(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=xt();if(n!==void 0){var s=n(t);if(bo){An(!0);try{n(t)}finally{An(!1)}}}else s=t;return a.memoizedState=a.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},a.queue=e,e=e.dispatch=Z0.bind(null,ve,e),[a.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ei(e);var t=e.queue,n=_p.bind(null,ve,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:$i,useDeferredValue:function(e,t){var n=xt();return Ii(n,e,t)},useTransition:function(){var e=Ei(!1);return e=Ip.bind(null,ve,e.queue,!0,!1),xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ve,s=xt();if(Ne){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ge===null)throw Error(i(349));(Ae&127)!==0||pp(a,t,n)}s.memoizedState=n;var u={value:n,getSnapshot:t};return s.queue=u,Rp(hp.bind(null,a,u,e),[e]),a.flags|=2048,ta(9,{destroy:void 0},mp.bind(null,a,u,n,t),null),n},useId:function(){var e=xt(),t=Ge.identifierPrefix;if(Ne){var n=Wt,a=Zt;n=(a&~(1<<32-At(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=us++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=V0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Hi,useFormState:jp,useActionState:jp,useOptimistic:function(e){var t=xt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ui.bind(null,ve,!0,n),n.dispatch=t,[e,t]},useMemoCache:Di,useCacheRefresh:function(){return xt().memoizedState=Q0.bind(null,ve)},useEffectEvent:function(e){var t=xt(),n={impl:e};return t.memoizedState=n,function(){if((Ee&2)!==0)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Pi={readContext:dt,use:ps,useCallback:Lp,useContext:dt,useEffect:Bi,useImperativeHandle:Ep,useInsertionEffect:Dp,useLayoutEffect:zp,useMemo:Bp,useReducer:ms,useRef:Ap,useState:function(){return ms(mn)},useDebugValue:$i,useDeferredValue:function(e,t){var n=et();return $p(n,Ue.memoizedState,e,t)},useTransition:function(){var e=ms(mn)[0],t=et().memoizedState;return[typeof e=="boolean"?e:Qa(e),t]},useSyncExternalStore:dp,useId:Up,useHostTransitionStatus:Hi,useFormState:Tp,useActionState:Tp,useOptimistic:function(e,t){var n=et();return xp(n,Ue,e,t)},useMemoCache:Di,useCacheRefresh:Pp};Pi.useEffectEvent=Np;var Yp={readContext:dt,use:ps,useCallback:Lp,useContext:dt,useEffect:Bi,useImperativeHandle:Ep,useInsertionEffect:Dp,useLayoutEffect:zp,useMemo:Bp,useReducer:Mi,useRef:Ap,useState:function(){return Mi(mn)},useDebugValue:$i,useDeferredValue:function(e,t){var n=et();return Ue===null?Ii(n,e,t):$p(n,Ue.memoizedState,e,t)},useTransition:function(){var e=Mi(mn)[0],t=et().memoizedState;return[typeof e=="boolean"?e:Qa(e),t]},useSyncExternalStore:dp,useId:Up,useHostTransitionStatus:Hi,useFormState:wp,useActionState:wp,useOptimistic:function(e,t){var n=et();return Ue!==null?xp(n,Ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Di,useCacheRefresh:Pp};Yp.useEffectEvent=Np;function _i(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gi={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Lt(),s=Bn(a);s.payload=t,n!=null&&(s.callback=n),t=$n(e,s,a),t!==null&&(Tt(t,e,a),Ya(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Lt(),s=Bn(a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=$n(e,s,a),t!==null&&(Tt(t,e,a),Ya(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Lt(),a=Bn(n);a.tag=2,t!=null&&(a.callback=t),t=$n(e,a,n),t!==null&&(Tt(t,e,n),Ya(t,e,n))}};function Fp(e,t,n,a,s,u,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,h):t.prototype&&t.prototype.isPureReactComponent?!Oa(n,a)||!Oa(s,u):!0}function Xp(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Gi.enqueueReplaceState(t,t.state,null)}function yo(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=C({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Kp(e){Xl(e)}function Qp(e){console.error(e)}function Zp(e){Xl(e)}function xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Wp(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Vi(e,t,n){return n=Bn(n),n.tag=3,n.payload={element:null},n.callback=function(){xs(e,t)},n}function Jp(e){return e=Bn(e),e.tag=3,e}function em(e,t,n,a){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var u=a.value;e.payload=function(){return s(u)},e.callback=function(){Wp(t,n,a)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){Wp(t,n,a),typeof s!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var y=a.stack;this.componentDidCatch(a.value,{componentStack:y!==null?y:""})})}function W0(e,t,n,a,s){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Fo(t,n,s,!0),n=Dt.current,n!==null){switch(n.tag){case 31:case 13:return Gt===null?Ns():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=s,a===as?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),fc(e,a,s)),!1;case 22:return n.flags|=65536,a===as?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),fc(e,a,s)),!1}throw Error(i(435,n.tag))}return fc(e,a,s),Ns(),!1}if(Ne)return t=Dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,a!==ci&&(e=Error(i(422),{cause:a}),Pa(Ht(e,n)))):(a!==ci&&(t=Error(i(423),{cause:a}),Pa(Ht(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,a=Ht(a,n),s=Vi(e.stateNode,a,s),vi(e,s),Ze!==4&&(Ze=2)),!1;var u=Error(i(520),{cause:a});if(u=Ht(u,n),sl===null?sl=[u]:sl.push(u),Ze!==4&&(Ze=2),t===null)return!0;a=Ht(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Vi(n.stateNode,a,e),vi(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(_n===null||!_n.has(u))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Jp(s),em(s,e,n,a),vi(n,s),!1}n=n.return}while(n!==null);return!1}var qi=Error(i(461)),at=!1;function pt(e,t,n,a){t.child=e===null?ap(t,null,n,a):xo(t,e.child,n,a)}function tm(e,t,n,a,s){n=n.render;var u=t.ref;if("ref"in a){var h={};for(var y in a)y!=="ref"&&(h[y]=a[y])}else h=a;return mo(t),a=wi(e,t,n,h,u,s),y=Ai(),e!==null&&!at?(Ri(e,t,s),hn(e,t,s)):(Ne&&y&&ri(t),t.flags|=1,pt(e,t,a,s),t.child)}function nm(e,t,n,a,s){if(e===null){var u=n.type;return typeof u=="function"&&!ai(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,om(e,t,u,a,s)):(e=Wl(n.type,null,a,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Ji(e,s)){var h=u.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(h,a)&&e.ref===t.ref)return hn(e,t,s)}return t.flags|=1,e=rn(u,a),e.ref=t.ref,e.return=t,t.child=e}function om(e,t,n,a,s){if(e!==null){var u=e.memoizedProps;if(Oa(u,a)&&e.ref===t.ref)if(at=!1,t.pendingProps=a=u,Ji(e,s))(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,hn(e,t,s)}return Yi(e,t,n,a,s)}function am(e,t,n,a){var s=a.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(a=t.child=e.child,s=0;a!==null;)s=s|a.lanes|a.childLanes,a=a.sibling;a=s&~u}else a=0,t.child=null;return lm(e,t,u,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ns(t,u!==null?u.cachePool:null),u!==null?rp(t,u):Si(),ip(t);else return a=t.lanes=536870912,lm(e,t,u!==null?u.baseLanes|n:n,n,a)}else u!==null?(ns(t,u.cachePool),rp(t,u),On(),t.memoizedState=null):(e!==null&&ns(t,null),Si(),On());return pt(e,t,s,n),t.child}function Ja(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lm(e,t,n,a,s){var u=gi();return u=u===null?null:{parent:nt._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&ns(t,null),Si(),ip(t),e!==null&&Fo(e,t,a,!0),t.childLanes=s,null}function bs(e,t){return t=vs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sm(e,t,n){return xo(t,e.child,null,n),e=bs(t,t.pendingProps),e.flags|=2,zt(t),t.memoizedState=null,e}function J0(e,t,n){var a=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ne){if(a.mode==="hidden")return e=bs(t,a),t.lanes=536870912,Ja(null,e);if(Ti(t),(e=Ve)?(e=bh(e,_t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Dn!==null?{id:Zt,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},n=Gd(e),n.return=t,t.child=n,ut=t,Ve=null)):e=null,e===null)throw Mn(t);return t.lanes=536870912,null}return bs(t,a)}var u=e.memoizedState;if(u!==null){var h=u.dehydrated;if(Ti(t),s)if(t.flags&256)t.flags&=-257,t=sm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(at||Fo(e,t,n,!1),s=(n&e.childLanes)!==0,at||s){if(a=Ge,a!==null&&(h=Qu(a,n),h!==0&&h!==u.retryLane))throw u.retryLane=h,io(e,h),Tt(a,e,h),qi;Ns(),t=sm(e,t,n)}else e=u.treeContext,Ve=Vt(h.nextSibling),ut=t,Ne=!0,zn=null,_t=!1,e!==null&&Yd(t,e),t=bs(t,a),t.flags|=4096;return t}return e=rn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ys(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Yi(e,t,n,a,s){return mo(t),n=wi(e,t,n,a,void 0,s),a=Ai(),e!==null&&!at?(Ri(e,t,s),hn(e,t,s)):(Ne&&a&&ri(t),t.flags|=1,pt(e,t,n,s),t.child)}function rm(e,t,n,a,s,u){return mo(t),t.updateQueue=null,n=up(t,a,n,s),cp(e),a=Ai(),e!==null&&!at?(Ri(e,t,u),hn(e,t,u)):(Ne&&a&&ri(t),t.flags|=1,pt(e,t,n,u),t.child)}function im(e,t,n,a,s){if(mo(t),t.stateNode===null){var u=Go,h=n.contextType;typeof h=="object"&&h!==null&&(u=dt(h)),u=new n(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Gi,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},bi(t),h=n.contextType,u.context=typeof h=="object"&&h!==null?dt(h):Go,u.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(_i(t,n,h,a),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),h!==u.state&&Gi.enqueueReplaceState(u,u.state,null),Xa(t,a,u,s),Fa(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var y=t.memoizedProps,S=yo(n,y);u.props=S;var E=u.context,H=n.contextType;h=Go,typeof H=="object"&&H!==null&&(h=dt(H));var q=n.getDerivedStateFromProps;H=typeof q=="function"||typeof u.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,H||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y||E!==h)&&Xp(t,u,a,h),Ln=!1;var L=t.memoizedState;u.state=L,Xa(t,a,u,s),Fa(),E=t.memoizedState,y||L!==E||Ln?(typeof q=="function"&&(_i(t,n,q,a),E=t.memoizedState),(S=Ln||Fp(t,n,S,a,L,E,h))?(H||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=E),u.props=a,u.state=E,u.context=h,a=S):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,yi(e,t),h=t.memoizedProps,H=yo(n,h),u.props=H,q=t.pendingProps,L=u.context,E=n.contextType,S=Go,typeof E=="object"&&E!==null&&(S=dt(E)),y=n.getDerivedStateFromProps,(E=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==q||L!==S)&&Xp(t,u,a,S),Ln=!1,L=t.memoizedState,u.state=L,Xa(t,a,u,s),Fa();var $=t.memoizedState;h!==q||L!==$||Ln||e!==null&&e.dependencies!==null&&es(e.dependencies)?(typeof y=="function"&&(_i(t,n,y,a),$=t.memoizedState),(H=Ln||Fp(t,n,H,a,L,$,S)||e!==null&&e.dependencies!==null&&es(e.dependencies))?(E||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,$,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,$,S)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=$),u.props=a,u.state=$,u.context=S,a=H):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,ys(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=xo(t,e.child,null,s),t.child=xo(t,null,n,s)):pt(e,t,n,s),t.memoizedState=u.state,e=t.child):e=hn(e,t,s),e}function cm(e,t,n,a){return uo(),t.flags|=256,pt(e,t,n,a),t.child}var Fi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xi(e){return{baseLanes:e,cachePool:Wd()}}function Ki(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Et),e}function um(e,t,n){var a=t.pendingProps,s=!1,u=(t.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),h&&(s=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ne){if(s?In(t):On(),(e=Ve)?(e=bh(e,_t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Dn!==null?{id:Zt,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},n=Gd(e),n.return=t,t.child=n,ut=t,Ve=null)):e=null,e===null)throw Mn(t);return zc(e)?t.lanes=32:t.lanes=536870912,null}var y=a.children;return a=a.fallback,s?(On(),s=t.mode,y=vs({mode:"hidden",children:y},s),a=co(a,s,n,null),y.return=t,a.return=t,y.sibling=a,t.child=y,a=t.child,a.memoizedState=Xi(n),a.childLanes=Ki(e,h,n),t.memoizedState=Fi,Ja(null,a)):(In(t),Qi(t,y))}var S=e.memoizedState;if(S!==null&&(y=S.dehydrated,y!==null)){if(u)t.flags&256?(In(t),t.flags&=-257,t=Zi(e,t,n)):t.memoizedState!==null?(On(),t.child=e.child,t.flags|=128,t=null):(On(),y=a.fallback,s=t.mode,a=vs({mode:"visible",children:a.children},s),y=co(y,s,n,null),y.flags|=2,a.return=t,y.return=t,a.sibling=y,t.child=a,xo(t,e.child,null,n),a=t.child,a.memoizedState=Xi(n),a.childLanes=Ki(e,h,n),t.memoizedState=Fi,t=Ja(null,a));else if(In(t),zc(y)){if(h=y.nextSibling&&y.nextSibling.dataset,h)var E=h.dgst;h=E,a=Error(i(419)),a.stack="",a.digest=h,Pa({value:a,source:null,stack:null}),t=Zi(e,t,n)}else if(at||Fo(e,t,n,!1),h=(n&e.childLanes)!==0,at||h){if(h=Ge,h!==null&&(a=Qu(h,n),a!==0&&a!==S.retryLane))throw S.retryLane=a,io(e,a),Tt(h,e,a),qi;Dc(y)||Ns(),t=Zi(e,t,n)}else Dc(y)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Ve=Vt(y.nextSibling),ut=t,Ne=!0,zn=null,_t=!1,e!==null&&Yd(t,e),t=Qi(t,a.children),t.flags|=4096);return t}return s?(On(),y=a.fallback,s=t.mode,S=e.child,E=S.sibling,a=rn(S,{mode:"hidden",children:a.children}),a.subtreeFlags=S.subtreeFlags&65011712,E!==null?y=rn(E,y):(y=co(y,s,n,null),y.flags|=2),y.return=t,a.return=t,a.sibling=y,t.child=a,Ja(null,a),a=t.child,y=e.child.memoizedState,y===null?y=Xi(n):(s=y.cachePool,s!==null?(S=nt._currentValue,s=s.parent!==S?{parent:S,pool:S}:s):s=Wd(),y={baseLanes:y.baseLanes|n,cachePool:s}),a.memoizedState=y,a.childLanes=Ki(e,h,n),t.memoizedState=Fi,Ja(e.child,a)):(In(t),n=e.child,e=n.sibling,n=rn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function Qi(e,t){return t=vs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function vs(e,t){return e=Nt(22,e,null,t),e.lanes=0,e}function Zi(e,t,n){return xo(t,e.child,null,n),e=Qi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dm(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),pi(e.return,t,n)}function Wi(e,t,n,a,s,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:s,treeForkCount:u}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=n,h.tailMode=s,h.treeForkCount=u)}function pm(e,t,n){var a=t.pendingProps,s=a.revealOrder,u=a.tail;a=a.children;var h=Je.current,y=(h&2)!==0;if(y?(h=h&1|2,t.flags|=128):h&=1,F(Je,h),pt(e,t,a,n),a=Ne?Ua:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dm(e,n,t);else if(e.tag===19)dm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&is(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Wi(t,!1,s,n,u,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&is(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Wi(t,!0,n,null,u,a);break;case"together":Wi(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Fo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ji(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&es(e)))}function eb(e,t,n){switch(t.tag){case 3:X(t,t.stateNode.containerInfo),En(t,nt,e.memoizedState.cache),uo();break;case 27:case 5:Te(t);break;case 4:X(t,t.stateNode.containerInfo);break;case 10:En(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ti(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(In(t),t.flags|=128,null):(n&t.child.childLanes)!==0?um(e,t,n):(In(t),e=hn(e,t,n),e!==null?e.sibling:null);In(t);break;case 19:var s=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Fo(e,t,n,!1),a=(n&t.childLanes)!==0),s){if(a)return pm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),F(Je,Je.current),a)break;return null;case 22:return t.lanes=0,am(e,t,n,t.pendingProps);case 24:En(t,nt,e.memoizedState.cache)}return hn(e,t,n)}function mm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)at=!0;else{if(!Ji(e,n)&&(t.flags&128)===0)return at=!1,eb(e,t,n);at=(e.flags&131072)!==0}else at=!1,Ne&&(t.flags&1048576)!==0&&qd(t,Ua,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=fo(t.elementType),t.type=e,typeof e=="function")ai(e)?(a=yo(e,a),t.tag=1,t=im(null,t,e,a,n)):(t.tag=0,t=Yi(null,t,e,a,n));else{if(e!=null){var s=e.$$typeof;if(s===G){t.tag=11,t=tm(null,t,e,a,n);break e}else if(s===J){t.tag=14,t=nm(null,t,e,a,n);break e}}throw t=me(e)||e,Error(i(306,t,""))}}return t;case 0:return Yi(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,s=yo(a,t.pendingProps),im(e,t,a,s,n);case 3:e:{if(X(t,t.stateNode.containerInfo),e===null)throw Error(i(387));a=t.pendingProps;var u=t.memoizedState;s=u.element,yi(e,t),Xa(t,a,null,n);var h=t.memoizedState;if(a=h.cache,En(t,nt,a),a!==u.cache&&mi(t,[nt],n,!0),Fa(),a=h.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=cm(e,t,a,n);break e}else if(a!==s){s=Ht(Error(i(424)),t),Pa(s),t=cm(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ve=Vt(e.firstChild),ut=t,Ne=!0,zn=null,_t=!0,n=ap(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(uo(),a===s){t=hn(e,t,n);break e}pt(e,t,a,n)}t=t.child}return t;case 26:return ys(e,t),e===null?(n=Th(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ne||(n=t.type,e=t.pendingProps,a=$s(le.current).createElement(n),a[ct]=t,a[bt]=e,mt(a,n,e),rt(a),t.stateNode=a):t.memoizedState=Th(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Te(t),e===null&&Ne&&(a=t.stateNode=Ch(t.type,t.pendingProps,le.current),ut=t,_t=!0,s=Ve,Yn(t.type)?(Mc=s,Ve=Vt(a.firstChild)):Ve=s),pt(e,t,t.pendingProps.children,n),ys(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ne&&((s=a=Ve)&&(a=Db(a,t.type,t.pendingProps,_t),a!==null?(t.stateNode=a,ut=t,Ve=Vt(a.firstChild),_t=!1,s=!0):s=!1),s||Mn(t)),Te(t),s=t.type,u=t.pendingProps,h=e!==null?e.memoizedProps:null,a=u.children,Ac(s,u)?a=null:h!==null&&Ac(s,h)&&(t.flags|=32),t.memoizedState!==null&&(s=wi(e,t,q0,null,null,n),hl._currentValue=s),ys(e,t),pt(e,t,a,n),t.child;case 6:return e===null&&Ne&&((e=n=Ve)&&(n=zb(n,t.pendingProps,_t),n!==null?(t.stateNode=n,ut=t,Ve=null,e=!0):e=!1),e||Mn(t)),null;case 13:return um(e,t,n);case 4:return X(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=xo(t,null,a,n):pt(e,t,a,n),t.child;case 11:return tm(e,t,t.type,t.pendingProps,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,En(t,t.type,a.value),pt(e,t,a.children,n),t.child;case 9:return s=t.type._context,a=t.pendingProps.children,mo(t),s=dt(s),a=a(s),t.flags|=1,pt(e,t,a,n),t.child;case 14:return nm(e,t,t.type,t.pendingProps,n);case 15:return om(e,t,t.type,t.pendingProps,n);case 19:return pm(e,t,n);case 31:return J0(e,t,n);case 22:return am(e,t,n,t.pendingProps);case 24:return mo(t),a=dt(nt),e===null?(s=gi(),s===null&&(s=Ge,u=hi(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=n),s=u),t.memoizedState={parent:a,cache:s},bi(t),En(t,nt,s)):((e.lanes&n)!==0&&(yi(e,t),Xa(t,null,null,n),Fa()),s=e.memoizedState,u=t.memoizedState,s.parent!==a?(s={parent:a,cache:a},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),En(t,nt,a)):(a=u.cache,En(t,nt,a),a!==s.cache&&mi(t,[nt],n,!0))),pt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function fn(e){e.flags|=4}function ec(e,t,n,a,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Um())e.flags|=8192;else throw go=as,xi}else e.flags&=-16777217}function hm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Nh(t))if(Um())e.flags|=8192;else throw go=as,xi}function Cs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Fu():536870912,e.lanes|=t,la|=t)}function el(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags&65011712,a|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function tb(e,t,n){var a=t.pendingProps;switch(ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return qe(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),dn(nt),se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yo(t)?fn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ui())),qe(t),null;case 26:var s=t.type,u=t.memoizedState;return e===null?(fn(t),u!==null?(qe(t),hm(t,u)):(qe(t),ec(t,s,null,a,n))):u?u!==e.memoizedState?(fn(t),qe(t),hm(t,u)):(qe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&fn(t),qe(t),ec(t,s,e,a,n)),null;case 27:if(We(t),n=le.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&fn(t);else{if(!a){if(t.stateNode===null)throw Error(i(166));return qe(t),null}e=Z.current,Yo(t)?Fd(t):(e=Ch(s,a,n),t.stateNode=e,fn(t))}return qe(t),null;case 5:if(We(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&fn(t);else{if(!a){if(t.stateNode===null)throw Error(i(166));return qe(t),null}if(u=Z.current,Yo(t))Fd(t);else{var h=$s(le.current);switch(u){case 1:u=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:u=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":u=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":u=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":u=h.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?h.createElement("select",{is:a.is}):h.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?h.createElement(s,{is:a.is}):h.createElement(s)}}u[ct]=t,u[bt]=a;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)u.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=u;e:switch(mt(u,s,a),s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&fn(t)}}return qe(t),ec(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&fn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(i(166));if(e=le.current,Yo(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,s=ut,s!==null)switch(s.tag){case 27:case 5:a=s.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||uh(e.nodeValue,n)),e||Mn(t,!0)}else e=$s(e).createTextNode(a),e[ct]=t,t.stateNode=e}return qe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Yo(t),n!==null){if(e===null){if(!a)throw Error(i(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(557));e[ct]=t}else uo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),e=!1}else n=ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zt(t),t):(zt(t),null);if((t.flags&128)!==0)throw Error(i(558))}return qe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Yo(t),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(i(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(i(317));s[ct]=t}else uo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),s=!1}else s=ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(zt(t),t):(zt(t),null)}return zt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,s=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(s=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==s&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Cs(t,t.updateQueue),qe(t),null);case 4:return se(),e===null&&Sc(t.stateNode.containerInfo),qe(t),null;case 10:return dn(t.type),qe(t),null;case 19:if(U(Je),a=t.memoizedState,a===null)return qe(t),null;if(s=(t.flags&128)!==0,u=a.rendering,u===null)if(s)el(a,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=is(e),u!==null){for(t.flags|=128,el(a,!1),e=u.updateQueue,t.updateQueue=e,Cs(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_d(n,e),n=n.sibling;return F(Je,Je.current&1|2),Ne&&cn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&kt()>ws&&(t.flags|=128,s=!0,el(a,!1),t.lanes=4194304)}else{if(!s)if(e=is(u),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Cs(t,e),el(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!Ne)return qe(t),null}else 2*kt()-a.renderingStartTime>ws&&n!==536870912&&(t.flags|=128,s=!0,el(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=kt(),e.sibling=null,n=Je.current,F(Je,s?n&1|2:n&1),Ne&&cn(t,a.treeForkCount),e):(qe(t),null);case 22:case 23:return zt(t),ji(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),n=t.updateQueue,n!==null&&Cs(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&U(ho),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),dn(nt),qe(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function nb(e,t){switch(ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(nt),se(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return We(t),null;case 31:if(t.memoizedState!==null){if(zt(t),t.alternate===null)throw Error(i(340));uo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));uo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Je),null;case 4:return se(),null;case 10:return dn(t.type),null;case 22:case 23:return zt(t),ji(),e!==null&&U(ho),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return dn(nt),null;case 25:return null;default:return null}}function fm(e,t){switch(ii(t),t.tag){case 3:dn(nt),se();break;case 26:case 27:case 5:We(t);break;case 4:se();break;case 31:t.memoizedState!==null&&zt(t);break;case 13:zt(t);break;case 19:U(Je);break;case 10:dn(t.type);break;case 22:case 23:zt(t),ji(),e!==null&&U(ho);break;case 24:dn(nt)}}function tl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var s=a.next;n=s;do{if((n.tag&e)===e){a=void 0;var u=n.create,h=n.inst;a=u(),h.destroy=a}n=n.next}while(n!==s)}}catch(y){Oe(t,t.return,y)}}function Hn(e,t,n){try{var a=t.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){var h=a.inst,y=h.destroy;if(y!==void 0){h.destroy=void 0,s=t;var S=n,E=y;try{E()}catch(H){Oe(s,S,H)}}}a=a.next}while(a!==u)}}catch(H){Oe(t,t.return,H)}}function gm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{sp(t,n)}catch(a){Oe(e,e.return,a)}}}function xm(e,t,n){n.props=yo(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Oe(e,t,a)}}function nl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(s){Oe(e,t,s)}}function Jt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(s){Oe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Oe(e,t,s)}else n.current=null}function bm(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(s){Oe(e,e.return,s)}}function tc(e,t,n){try{var a=e.stateNode;Tb(a,e.type,n,t),a[bt]=t}catch(s){Oe(e,e.return,s)}}function ym(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Yn(e.type)||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Yn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(a!==4&&(a===27&&Yn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(oc(e,t,n),e=e.sibling;e!==null;)oc(e,t,n),e=e.sibling}function Ss(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Yn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}function vm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);mt(t,a,n),t[ct]=e,t[bt]=n}catch(u){Oe(e,e.return,u)}}var gn=!1,lt=!1,ac=!1,Cm=typeof WeakSet=="function"?WeakSet:Set,it=null;function ob(e,t){if(e=e.containerInfo,kc=Gs,e=Ed(e),Zr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var s=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var h=0,y=-1,S=-1,E=0,H=0,q=e,L=null;t:for(;;){for(var $;q!==n||s!==0&&q.nodeType!==3||(y=h+s),q!==u||a!==0&&q.nodeType!==3||(S=h+a),q.nodeType===3&&(h+=q.nodeValue.length),($=q.firstChild)!==null;)L=q,q=$;for(;;){if(q===e)break t;if(L===n&&++E===s&&(y=h),L===u&&++H===a&&(S=h),($=q.nextSibling)!==null)break;q=L,L=q.parentNode}q=$}n=y===-1||S===-1?null:{start:y,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(wc={focusedElem:e,selectionRange:n},Gs=!1,it=t;it!==null;)if(t=it,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,it=e;else for(;it!==null;){switch(t=it,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,s=u.memoizedProps,u=u.memoizedState,a=n.stateNode;try{var ne=yo(n.type,s);e=a.getSnapshotBeforeUpdate(ne,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(fe){Oe(n,n.return,fe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Nc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,it=e;break}it=t.return}}function Sm(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:bn(e,n),a&4&&tl(5,n);break;case 1:if(bn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){Oe(n,n.return,h)}else{var s=yo(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Oe(n,n.return,h)}}a&64&&gm(n),a&512&&nl(n,n.return);break;case 3:if(bn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{sp(e,t)}catch(h){Oe(n,n.return,h)}}break;case 27:t===null&&a&4&&vm(n);case 26:case 5:bn(e,n),t===null&&a&4&&bm(n),a&512&&nl(n,n.return);break;case 12:bn(e,n);break;case 31:bn(e,n),a&4&&km(e,n);break;case 13:bn(e,n),a&4&&wm(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=pb.bind(null,n),Mb(e,n))));break;case 22:if(a=n.memoizedState!==null||gn,!a){t=t!==null&&t.memoizedState!==null||lt,s=gn;var u=lt;gn=a,(lt=t)&&!u?yn(e,n,(n.subtreeFlags&8772)!==0):bn(e,n),gn=s,lt=u}break;case 30:break;default:bn(e,n)}}function jm(e){var t=e.alternate;t!==null&&(e.alternate=null,jm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fe=null,vt=!1;function xn(e,t,n){for(n=n.child;n!==null;)Tm(e,t,n),n=n.sibling}function Tm(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(wa,n)}catch{}switch(n.tag){case 26:lt||Jt(n,t),xn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:lt||Jt(n,t);var a=Fe,s=vt;Yn(n.type)&&(Fe=n.stateNode,vt=!1),xn(e,t,n),dl(n.stateNode),Fe=a,vt=s;break;case 5:lt||Jt(n,t);case 6:if(a=Fe,s=vt,Fe=null,xn(e,t,n),Fe=a,vt=s,Fe!==null)if(vt)try{(Fe.nodeType===9?Fe.body:Fe.nodeName==="HTML"?Fe.ownerDocument.body:Fe).removeChild(n.stateNode)}catch(u){Oe(n,t,u)}else try{Fe.removeChild(n.stateNode)}catch(u){Oe(n,t,u)}break;case 18:Fe!==null&&(vt?(e=Fe,gh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ma(e)):gh(Fe,n.stateNode));break;case 4:a=Fe,s=vt,Fe=n.stateNode.containerInfo,vt=!0,xn(e,t,n),Fe=a,vt=s;break;case 0:case 11:case 14:case 15:Hn(2,n,t),lt||Hn(4,n,t),xn(e,t,n);break;case 1:lt||(Jt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&xm(n,t,a)),xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:lt=(a=lt)||n.memoizedState!==null,xn(e,t,n),lt=a;break;default:xn(e,t,n)}}function km(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ma(e)}catch(n){Oe(t,t.return,n)}}}function wm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ma(e)}catch(n){Oe(t,t.return,n)}}function ab(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Cm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Cm),t;default:throw Error(i(435,e.tag))}}function js(e,t){var n=ab(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var s=mb.bind(null,e,a);a.then(s,s)}})}function Ct(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var s=n[a],u=e,h=t,y=h;e:for(;y!==null;){switch(y.tag){case 27:if(Yn(y.type)){Fe=y.stateNode,vt=!1;break e}break;case 5:Fe=y.stateNode,vt=!1;break e;case 3:case 4:Fe=y.stateNode.containerInfo,vt=!0;break e}y=y.return}if(Fe===null)throw Error(i(160));Tm(u,h,s),Fe=null,vt=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Am(t,e),t=t.sibling}var Kt=null;function Am(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ct(t,e),St(e),a&4&&(Hn(3,e,e.return),tl(3,e),Hn(5,e,e.return));break;case 1:Ct(t,e),St(e),a&512&&(lt||n===null||Jt(n,n.return)),a&64&&gn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var s=Kt;if(Ct(t,e),St(e),a&512&&(lt||n===null||Jt(n,n.return)),a&4){var u=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(a){case"title":u=s.getElementsByTagName("title")[0],(!u||u[Na]||u[ct]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(a),s.head.insertBefore(u,s.querySelector("head > title"))),mt(u,a,n),u[ct]=e,rt(u),a=u;break e;case"link":var h=Ah("link","href",s).get(a+(n.href||""));if(h){for(var y=0;y<h.length;y++)if(u=h[y],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(y,1);break t}}u=s.createElement(a),mt(u,a,n),s.head.appendChild(u);break;case"meta":if(h=Ah("meta","content",s).get(a+(n.content||""))){for(y=0;y<h.length;y++)if(u=h[y],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(y,1);break t}}u=s.createElement(a),mt(u,a,n),s.head.appendChild(u);break;default:throw Error(i(468,a))}u[ct]=e,rt(u),a=u}e.stateNode=a}else Rh(s,e.type,e.stateNode);else e.stateNode=wh(s,a,e.memoizedProps);else u!==a?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,a===null?Rh(s,e.type,e.stateNode):wh(s,a,e.memoizedProps)):a===null&&e.stateNode!==null&&tc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ct(t,e),St(e),a&512&&(lt||n===null||Jt(n,n.return)),n!==null&&a&4&&tc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ct(t,e),St(e),a&512&&(lt||n===null||Jt(n,n.return)),e.flags&32){s=e.stateNode;try{$o(s,"")}catch(ne){Oe(e,e.return,ne)}}a&4&&e.stateNode!=null&&(s=e.memoizedProps,tc(e,s,n!==null?n.memoizedProps:s)),a&1024&&(ac=!0);break;case 6:if(Ct(t,e),St(e),a&4){if(e.stateNode===null)throw Error(i(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ne){Oe(e,e.return,ne)}}break;case 3:if(Hs=null,s=Kt,Kt=Is(t.containerInfo),Ct(t,e),Kt=s,St(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(t.containerInfo)}catch(ne){Oe(e,e.return,ne)}ac&&(ac=!1,Rm(e));break;case 4:a=Kt,Kt=Is(e.stateNode.containerInfo),Ct(t,e),St(e),Kt=a;break;case 12:Ct(t,e),St(e);break;case 31:Ct(t,e),St(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,js(e,a)));break;case 13:Ct(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ks=kt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,js(e,a)));break;case 22:s=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,E=gn,H=lt;if(gn=E||s,lt=H||S,Ct(t,e),lt=H,gn=E,St(e),a&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||S||gn||lt||vo(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(u=S.stateNode,s)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{y=S.stateNode;var q=S.memoizedProps.style,L=q!=null&&q.hasOwnProperty("display")?q.display:null;y.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(ne){Oe(S,S.return,ne)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=s?"":S.memoizedProps}catch(ne){Oe(S,S.return,ne)}}}else if(t.tag===18){if(n===null){S=t;try{var $=S.stateNode;s?xh($,!0):xh(S.stateNode,!1)}catch(ne){Oe(S,S.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,js(e,n))));break;case 19:Ct(t,e),St(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,js(e,a)));break;case 30:break;case 21:break;default:Ct(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(ym(a)){n=a;break}a=a.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var s=n.stateNode,u=nc(e);Ss(e,u,s);break;case 5:var h=n.stateNode;n.flags&32&&($o(h,""),n.flags&=-33);var y=nc(e);Ss(e,y,h);break;case 3:case 4:var S=n.stateNode.containerInfo,E=nc(e);oc(e,E,S);break;default:throw Error(i(161))}}catch(H){Oe(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Rm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Sm(e,t.alternate,t),t=t.sibling}function vo(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hn(4,t,t.return),vo(t);break;case 1:Jt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&xm(t,t.return,n),vo(t);break;case 27:dl(t.stateNode);case 26:case 5:Jt(t,t.return),vo(t);break;case 22:t.memoizedState===null&&vo(t);break;case 30:vo(t);break;default:vo(t)}e=e.sibling}}function yn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,s=e,u=t,h=u.flags;switch(u.tag){case 0:case 11:case 15:yn(s,u,n),tl(4,u);break;case 1:if(yn(s,u,n),a=u,s=a.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(E){Oe(a,a.return,E)}if(a=u,s=a.updateQueue,s!==null){var y=a.stateNode;try{var S=s.shared.hiddenCallbacks;if(S!==null)for(s.shared.hiddenCallbacks=null,s=0;s<S.length;s++)lp(S[s],y)}catch(E){Oe(a,a.return,E)}}n&&h&64&&gm(u),nl(u,u.return);break;case 27:vm(u);case 26:case 5:yn(s,u,n),n&&a===null&&h&4&&bm(u),nl(u,u.return);break;case 12:yn(s,u,n);break;case 31:yn(s,u,n),n&&h&4&&km(s,u);break;case 13:yn(s,u,n),n&&h&4&&wm(s,u);break;case 22:u.memoizedState===null&&yn(s,u,n),nl(u,u.return);break;case 30:break;default:yn(s,u,n)}t=t.sibling}}function lc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&_a(n))}function sc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_a(e))}function Qt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nm(e,t,n,a),t=t.sibling}function Nm(e,t,n,a){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Qt(e,t,n,a),s&2048&&tl(9,t);break;case 1:Qt(e,t,n,a);break;case 3:Qt(e,t,n,a),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_a(e)));break;case 12:if(s&2048){Qt(e,t,n,a),e=t.stateNode;try{var u=t.memoizedProps,h=u.id,y=u.onPostCommit;typeof y=="function"&&y(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Oe(t,t.return,S)}}else Qt(e,t,n,a);break;case 31:Qt(e,t,n,a);break;case 13:Qt(e,t,n,a);break;case 23:break;case 22:u=t.stateNode,h=t.alternate,t.memoizedState!==null?u._visibility&2?Qt(e,t,n,a):ol(e,t):u._visibility&2?Qt(e,t,n,a):(u._visibility|=2,na(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),s&2048&&lc(h,t);break;case 24:Qt(e,t,n,a),s&2048&&sc(t.alternate,t);break;default:Qt(e,t,n,a)}}function na(e,t,n,a,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,h=t,y=n,S=a,E=h.flags;switch(h.tag){case 0:case 11:case 15:na(u,h,y,S,s),tl(8,h);break;case 23:break;case 22:var H=h.stateNode;h.memoizedState!==null?H._visibility&2?na(u,h,y,S,s):ol(u,h):(H._visibility|=2,na(u,h,y,S,s)),s&&E&2048&&lc(h.alternate,h);break;case 24:na(u,h,y,S,s),s&&E&2048&&sc(h.alternate,h);break;default:na(u,h,y,S,s)}t=t.sibling}}function ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,s=a.flags;switch(a.tag){case 22:ol(n,a),s&2048&&lc(a.alternate,a);break;case 24:ol(n,a),s&2048&&sc(a.alternate,a);break;default:ol(n,a)}t=t.sibling}}var al=8192;function oa(e,t,n){if(e.subtreeFlags&al)for(e=e.child;e!==null;)Dm(e,t,n),e=e.sibling}function Dm(e,t,n){switch(e.tag){case 26:oa(e,t,n),e.flags&al&&e.memoizedState!==null&&Vb(n,Kt,e.memoizedState,e.memoizedProps);break;case 5:oa(e,t,n);break;case 3:case 4:var a=Kt;Kt=Is(e.stateNode.containerInfo),oa(e,t,n),Kt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=al,al=16777216,oa(e,t,n),al=a):oa(e,t,n));break;default:oa(e,t,n)}}function zm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ll(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];it=a,Em(a,e)}zm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mm(e),e=e.sibling}function Mm(e){switch(e.tag){case 0:case 11:case 15:ll(e),e.flags&2048&&Hn(9,e,e.return);break;case 3:ll(e);break;case 12:ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ts(e)):ll(e);break;default:ll(e)}}function Ts(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];it=a,Em(a,e)}zm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hn(8,t,t.return),Ts(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ts(t));break;default:Ts(t)}e=e.sibling}}function Em(e,t){for(;it!==null;){var n=it;switch(n.tag){case 0:case 11:case 15:Hn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:_a(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,it=a;else e:for(n=e;it!==null;){a=it;var s=a.sibling,u=a.return;if(jm(a),a===n){it=null;break e}if(s!==null){s.return=u,it=s;break e}it=u}}}var lb={getCacheForType:function(e){var t=dt(nt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return dt(nt).controller.signal}},sb=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Ge=null,ke=null,Ae=0,Ie=0,Mt=null,Un=!1,aa=!1,rc=!1,vn=0,Ze=0,Pn=0,Co=0,ic=0,Et=0,la=0,sl=null,jt=null,cc=!1,ks=0,Lm=0,ws=1/0,As=null,_n=null,st=0,Gn=null,sa=null,Cn=0,uc=0,dc=null,Bm=null,rl=0,pc=null;function Lt(){return(Ee&2)!==0&&Ae!==0?Ae&-Ae:O.T!==null?bc():Zu()}function $m(){if(Et===0)if((Ae&536870912)===0||Ne){var e=Bl;Bl<<=1,(Bl&3932160)===0&&(Bl=262144),Et=e}else Et=536870912;return e=Dt.current,e!==null&&(e.flags|=32),Et}function Tt(e,t,n){(e===Ge&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(ra(e,0),Vn(e,Ae,Et,!1)),Ra(e,n),((Ee&2)===0||e!==Ge)&&(e===Ge&&((Ee&2)===0&&(Co|=n),Ze===4&&Vn(e,Ae,Et,!1)),en(e))}function Im(e,t,n){if((Ee&6)!==0)throw Error(i(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Aa(e,t),s=a?cb(e,t):hc(e,t,!0),u=a;do{if(s===0){aa&&!a&&Vn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!rb(n)){s=hc(e,t,!1),u=!1;continue}if(s===2){if(u=t,e.errorRecoveryDisabledLanes&u)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var y=e;s=sl;var S=y.current.memoizedState.isDehydrated;if(S&&(ra(y,h).flags|=256),h=hc(y,h,!1),h!==2){if(rc&&!S){y.errorRecoveryDisabledLanes|=u,Co|=u,s=4;break e}u=jt,jt=s,u!==null&&(jt===null?jt=u:jt.push.apply(jt,u))}s=h}if(u=!1,s!==2)continue}}if(s===1){ra(e,0),Vn(e,t,0,!0);break}e:{switch(a=e,u=s,u){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Vn(a,t,Et,!Un);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(s=ks+300-kt(),10<s)){if(Vn(a,t,Et,!Un),Il(a,0,!0)!==0)break e;Cn=t,a.timeoutHandle=hh(Om.bind(null,a,n,jt,As,cc,t,Et,Co,la,Un,u,"Throttled",-0,0),s);break e}Om(a,n,jt,As,cc,t,Et,Co,la,Un,u,null,-0,0)}}break}while(!0);en(e)}function Om(e,t,n,a,s,u,h,y,S,E,H,q,L,$){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Dm(t,u,q);var ne=(u&62914560)===u?ks-kt():(u&4194048)===u?Lm-kt():0;if(ne=qb(q,ne),ne!==null){Cn=u,e.cancelPendingCommit=ne(Ym.bind(null,e,t,u,n,a,s,h,y,S,H,q,null,L,$)),Vn(e,u,h,!E);return}}Ym(e,t,u,n,a,s,h,y,S)}function rb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var s=n[a],u=s.getSnapshot;s=s.value;try{if(!Rt(u(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t,n,a){t&=~ic,t&=~Co,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var s=t;0<s;){var u=31-At(s),h=1<<u;a[u]=-1,s&=~h}n!==0&&Xu(e,n,t)}function Rs(){return(Ee&6)===0?(il(0),!1):!0}function mc(){if(ke!==null){if(Ie===0)var e=ke.return;else e=ke,un=po=null,Ni(e),Zo=null,Va=0,e=ke;for(;e!==null;)fm(e.alternate,e),e=e.return;ke=null}}function ra(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ab(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Cn=0,mc(),Ge=e,ke=n=rn(e.current,null),Ae=t,Ie=0,Mt=null,Un=!1,aa=Aa(e,t),rc=!1,la=Et=ic=Co=Pn=Ze=0,jt=sl=null,cc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var s=31-At(a),u=1<<s;t|=e[s],a&=~u}return vn=t,Kl(),n}function Hm(e,t){ve=null,O.H=Wa,t===Qo||t===os?(t=tp(),Ie=3):t===xi?(t=tp(),Ie=4):Ie=t===qi?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Mt=t,ke===null&&(Ze=1,xs(e,Ht(t,e.current)))}function Um(){var e=Dt.current;return e===null?!0:(Ae&4194048)===Ae?Gt===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===Gt:!1}function Pm(){var e=O.H;return O.H=Wa,e===null?Wa:e}function _m(){var e=O.A;return O.A=lb,e}function Ns(){Ze=4,Un||(Ae&4194048)!==Ae&&Dt.current!==null||(aa=!0),(Pn&134217727)===0&&(Co&134217727)===0||Ge===null||Vn(Ge,Ae,Et,!1)}function hc(e,t,n){var a=Ee;Ee|=2;var s=Pm(),u=_m();(Ge!==e||Ae!==t)&&(As=null,ra(e,t)),t=!1;var h=Ze;e:do try{if(Ie!==0&&ke!==null){var y=ke,S=Mt;switch(Ie){case 8:mc(),h=6;break e;case 3:case 2:case 9:case 6:Dt.current===null&&(t=!0);var E=Ie;if(Ie=0,Mt=null,ia(e,y,S,E),n&&aa){h=0;break e}break;default:E=Ie,Ie=0,Mt=null,ia(e,y,S,E)}}ib(),h=Ze;break}catch(H){Hm(e,H)}while(!0);return t&&e.shellSuspendCounter++,un=po=null,Ee=a,O.H=s,O.A=u,ke===null&&(Ge=null,Ae=0,Kl()),h}function ib(){for(;ke!==null;)Gm(ke)}function cb(e,t){var n=Ee;Ee|=2;var a=Pm(),s=_m();Ge!==e||Ae!==t?(As=null,ws=kt()+500,ra(e,t)):aa=Aa(e,t);e:do try{if(Ie!==0&&ke!==null){t=ke;var u=Mt;t:switch(Ie){case 1:Ie=0,Mt=null,ia(e,t,u,1);break;case 2:case 9:if(Jd(u)){Ie=0,Mt=null,Vm(t);break}t=function(){Ie!==2&&Ie!==9||Ge!==e||(Ie=7),en(e)},u.then(t,t);break e;case 3:Ie=7;break e;case 4:Ie=5;break e;case 7:Jd(u)?(Ie=0,Mt=null,Vm(t)):(Ie=0,Mt=null,ia(e,t,u,7));break;case 5:var h=null;switch(ke.tag){case 26:h=ke.memoizedState;case 5:case 27:var y=ke;if(h?Nh(h):y.stateNode.complete){Ie=0,Mt=null;var S=y.sibling;if(S!==null)ke=S;else{var E=y.return;E!==null?(ke=E,Ds(E)):ke=null}break t}}Ie=0,Mt=null,ia(e,t,u,5);break;case 6:Ie=0,Mt=null,ia(e,t,u,6);break;case 8:mc(),Ze=6;break e;default:throw Error(i(462))}}ub();break}catch(H){Hm(e,H)}while(!0);return un=po=null,O.H=a,O.A=s,Ee=n,ke!==null?0:(Ge=null,Ae=0,Kl(),Ze)}function ub(){for(;ke!==null&&!Ex();)Gm(ke)}function Gm(e){var t=mm(e.alternate,e,vn);e.memoizedProps=e.pendingProps,t===null?Ds(e):ke=t}function Vm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=rm(n,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=rm(n,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:Ni(t);default:fm(n,t),t=ke=_d(t,vn),t=mm(n,t,vn)}e.memoizedProps=e.pendingProps,t===null?Ds(e):ke=t}function ia(e,t,n,a){un=po=null,Ni(t),Zo=null,Va=0;var s=t.return;try{if(W0(e,s,t,n,Ae)){Ze=1,xs(e,Ht(n,e.current)),ke=null;return}}catch(u){if(s!==null)throw ke=s,u;Ze=1,xs(e,Ht(n,e.current)),ke=null;return}t.flags&32768?(Ne||a===1?e=!0:aa||(Ae&536870912)!==0?e=!1:(Un=e=!0,(a===2||a===9||a===3||a===6)&&(a=Dt.current,a!==null&&a.tag===13&&(a.flags|=16384))),qm(t,e)):Ds(t)}function Ds(e){var t=e;do{if((t.flags&32768)!==0){qm(t,Un);return}e=t.return;var n=tb(t.alternate,t,vn);if(n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ze===0&&(Ze=5)}function qm(e,t){do{var n=nb(e.alternate,e);if(n!==null){n.flags&=32767,ke=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ke=e;return}ke=e=n}while(e!==null);Ze=6,ke=null}function Ym(e,t,n,a,s,u,h,y,S){e.cancelPendingCommit=null;do zs();while(st!==0);if((Ee&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(u=t.lanes|t.childLanes,u|=ni,Gx(e,n,u,h,y,S),e===Ge&&(ke=Ge=null,Ae=0),sa=t,Gn=e,Cn=n,uc=u,dc=s,Bm=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hb(El,function(){return Zm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null,s=W.p,W.p=2,h=Ee,Ee|=4;try{ob(e,t,n)}finally{Ee=h,W.p=s,O.T=a}}st=1,Fm(),Xm(),Km()}}function Fm(){if(st===1){st=0;var e=Gn,t=sa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var a=W.p;W.p=2;var s=Ee;Ee|=4;try{Am(t,e);var u=wc,h=Ed(e.containerInfo),y=u.focusedElem,S=u.selectionRange;if(h!==y&&y&&y.ownerDocument&&Md(y.ownerDocument.documentElement,y)){if(S!==null&&Zr(y)){var E=S.start,H=S.end;if(H===void 0&&(H=E),"selectionStart"in y)y.selectionStart=E,y.selectionEnd=Math.min(H,y.value.length);else{var q=y.ownerDocument||document,L=q&&q.defaultView||window;if(L.getSelection){var $=L.getSelection(),ne=y.textContent.length,fe=Math.min(S.start,ne),_e=S.end===void 0?fe:Math.min(S.end,ne);!$.extend&&fe>_e&&(h=_e,_e=fe,fe=h);var N=zd(y,fe),R=zd(y,_e);if(N&&R&&($.rangeCount!==1||$.anchorNode!==N.node||$.anchorOffset!==N.offset||$.focusNode!==R.node||$.focusOffset!==R.offset)){var M=q.createRange();M.setStart(N.node,N.offset),$.removeAllRanges(),fe>_e?($.addRange(M),$.extend(R.node,R.offset)):(M.setEnd(R.node,R.offset),$.addRange(M))}}}}for(q=[],$=y;$=$.parentNode;)$.nodeType===1&&q.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<q.length;y++){var P=q[y];P.element.scrollLeft=P.left,P.element.scrollTop=P.top}}Gs=!!kc,wc=kc=null}finally{Ee=s,W.p=a,O.T=n}}e.current=t,st=2}}function Xm(){if(st===2){st=0;var e=Gn,t=sa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var a=W.p;W.p=2;var s=Ee;Ee|=4;try{Sm(e,t.alternate,t)}finally{Ee=s,W.p=a,O.T=n}}st=3}}function Km(){if(st===4||st===3){st=0,Lx();var e=Gn,t=sa,n=Cn,a=Bm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?st=5:(st=0,sa=Gn=null,Qm(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(_n=null),Mr(n),t=t.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(wa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=O.T,s=W.p,W.p=2,O.T=null;try{for(var u=e.onRecoverableError,h=0;h<a.length;h++){var y=a[h];u(y.value,{componentStack:y.stack})}}finally{O.T=t,W.p=s}}(Cn&3)!==0&&zs(),en(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===pc?rl++:(rl=0,pc=e):rl=0,il(0)}}function Qm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,_a(t)))}function zs(){return Fm(),Xm(),Km(),Zm()}function Zm(){if(st!==5)return!1;var e=Gn,t=uc;uc=0;var n=Mr(Cn),a=O.T,s=W.p;try{W.p=32>n?32:n,O.T=null,n=dc,dc=null;var u=Gn,h=Cn;if(st=0,sa=Gn=null,Cn=0,(Ee&6)!==0)throw Error(i(331));var y=Ee;if(Ee|=4,Mm(u.current),Nm(u,u.current,h,n),Ee=y,il(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(wa,u)}catch{}return!0}finally{W.p=s,O.T=a,Qm(e,t)}}function Wm(e,t,n){t=Ht(n,t),t=Vi(e.stateNode,t,2),e=$n(e,t,2),e!==null&&(Ra(e,2),en(e))}function Oe(e,t,n){if(e.tag===3)Wm(e,e,n);else for(;t!==null;){if(t.tag===3){Wm(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_n===null||!_n.has(a))){e=Ht(n,e),n=Jp(2),a=$n(t,n,2),a!==null&&(em(n,a,t,e),Ra(a,2),en(a));break}}t=t.return}}function fc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new sb;var s=new Set;a.set(t,s)}else s=a.get(t),s===void 0&&(s=new Set,a.set(t,s));s.has(n)||(rc=!0,s.add(n),e=db.bind(null,e,t,n),t.then(e,e))}function db(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ge===e&&(Ae&n)===n&&(Ze===4||Ze===3&&(Ae&62914560)===Ae&&300>kt()-ks?(Ee&2)===0&&ra(e,0):ic|=n,la===Ae&&(la=0)),en(e)}function Jm(e,t){t===0&&(t=Fu()),e=io(e,t),e!==null&&(Ra(e,t),en(e))}function pb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jm(e,n)}function mb(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(i(314))}a!==null&&a.delete(t),Jm(e,n)}function hb(e,t){return Rr(e,t)}var Ms=null,ca=null,gc=!1,Es=!1,xc=!1,qn=0;function en(e){e!==ca&&e.next===null&&(ca===null?Ms=ca=e:ca=ca.next=e),Es=!0,gc||(gc=!0,gb())}function il(e,t){if(!xc&&Es){xc=!0;do for(var n=!1,a=Ms;a!==null;){if(e!==0){var s=a.pendingLanes;if(s===0)var u=0;else{var h=a.suspendedLanes,y=a.pingedLanes;u=(1<<31-At(42|e)+1)-1,u&=s&~(h&~y),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,oh(a,u))}else u=Ae,u=Il(a,a===Ge?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Aa(a,u)||(n=!0,oh(a,u));a=a.next}while(n);xc=!1}}function fb(){eh()}function eh(){Es=gc=!1;var e=0;qn!==0&&wb()&&(e=qn);for(var t=kt(),n=null,a=Ms;a!==null;){var s=a.next,u=th(a,t);u===0?(a.next=null,n===null?Ms=s:n.next=s,s===null&&(ca=n)):(n=a,(e!==0||(u&3)!==0)&&(Es=!0)),a=s}st!==0&&st!==5||il(e),qn!==0&&(qn=0)}function th(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var h=31-At(u),y=1<<h,S=s[h];S===-1?((y&n)===0||(y&a)!==0)&&(s[h]=_x(y,t)):S<=t&&(e.expiredLanes|=y),u&=~y}if(t=Ge,n=Ae,n=Il(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Nr(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Aa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Nr(a),Mr(n)){case 2:case 8:n=qu;break;case 32:n=El;break;case 268435456:n=Yu;break;default:n=El}return a=nh.bind(null,e),n=Rr(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Nr(a),e.callbackPriority=2,e.callbackNode=null,2}function nh(e,t){if(st!==0&&st!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(zs()&&e.callbackNode!==n)return null;var a=Ae;return a=Il(e,e===Ge?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Im(e,a,t),th(e,kt()),e.callbackNode!=null&&e.callbackNode===n?nh.bind(null,e):null)}function oh(e,t){if(zs())return null;Im(e,t,!0)}function gb(){Rb(function(){(Ee&6)!==0?Rr(Vu,fb):eh()})}function bc(){if(qn===0){var e=Xo;e===0&&(e=Ll,Ll<<=1,(Ll&261888)===0&&(Ll=256)),qn=e}return qn}function ah(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pl(""+e)}function lh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function xb(e,t,n,a,s){if(t==="submit"&&n&&n.stateNode===s){var u=ah((s[bt]||null).action),h=a.submitter;h&&(t=(t=h[bt]||null)?ah(t.formAction):h.getAttribute("formAction"),t!==null&&(u=t,h=null));var y=new ql("action","action",null,a,s);e.push({event:y,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(qn!==0){var S=h?lh(s,h):new FormData(s);Oi(n,{pending:!0,data:S,method:s.method,action:u},null,S)}}else typeof u=="function"&&(y.preventDefault(),S=h?lh(s,h):new FormData(s),Oi(n,{pending:!0,data:S,method:s.method,action:u},u,S))},currentTarget:s}]})}}for(var yc=0;yc<ti.length;yc++){var vc=ti[yc],bb=vc.toLowerCase(),yb=vc[0].toUpperCase()+vc.slice(1);Xt(bb,"on"+yb)}Xt($d,"onAnimationEnd"),Xt(Id,"onAnimationIteration"),Xt(Od,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(B0,"onTransitionRun"),Xt($0,"onTransitionStart"),Xt(I0,"onTransitionCancel"),Xt(Hd,"onTransitionEnd"),Lo("onMouseEnter",["mouseout","mouseover"]),Lo("onMouseLeave",["mouseout","mouseover"]),Lo("onPointerEnter",["pointerout","pointerover"]),Lo("onPointerLeave",["pointerout","pointerover"]),ao("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ao("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ao("onBeforeInput",["compositionend","keypress","textInput","paste"]),ao("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ao("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ao("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function sh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],s=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var h=a.length-1;0<=h;h--){var y=a[h],S=y.instance,E=y.currentTarget;if(y=y.listener,S!==u&&s.isPropagationStopped())break e;u=y,s.currentTarget=E;try{u(s)}catch(H){Xl(H)}s.currentTarget=null,u=S}else for(h=0;h<a.length;h++){if(y=a[h],S=y.instance,E=y.currentTarget,y=y.listener,S!==u&&s.isPropagationStopped())break e;u=y,s.currentTarget=E;try{u(s)}catch(H){Xl(H)}s.currentTarget=null,u=S}}}}function we(e,t){var n=t[Er];n===void 0&&(n=t[Er]=new Set);var a=e+"__bubble";n.has(a)||(rh(t,e,2,!1),n.add(a))}function Cc(e,t,n){var a=0;t&&(a|=4),rh(n,e,a,t)}var Ls="_reactListening"+Math.random().toString(36).slice(2);function Sc(e){if(!e[Ls]){e[Ls]=!0,ed.forEach(function(n){n!=="selectionchange"&&(vb.has(n)||Cc(n,!1,e),Cc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ls]||(t[Ls]=!0,Cc("selectionchange",!1,t))}}function rh(e,t,n,a){switch($h(t)){case 2:var s=Xb;break;case 8:s=Kb;break;default:s=Ic}n=s.bind(null,t,n,e),s=void 0,!_r||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),a?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function jc(e,t,n,a,s){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var y=a.stateNode.containerInfo;if(y===s)break;if(h===4)for(h=a.return;h!==null;){var S=h.tag;if((S===3||S===4)&&h.stateNode.containerInfo===s)return;h=h.return}for(;y!==null;){if(h=zo(y),h===null)return;if(S=h.tag,S===5||S===6||S===26||S===27){a=u=h;continue e}y=y.parentNode}}a=a.return}pd(function(){var E=u,H=Ur(n),q=[];e:{var L=Ud.get(e);if(L!==void 0){var $=ql,ne=e;switch(e){case"keypress":if(Gl(n)===0)break e;case"keydown":case"keyup":$=m0;break;case"focusin":ne="focus",$=Yr;break;case"focusout":ne="blur",$=Yr;break;case"beforeblur":case"afterblur":$=Yr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=g0;break;case $d:case Id:case Od:$=a0;break;case Hd:$=b0;break;case"scroll":case"scrollend":$=Jx;break;case"wheel":$=v0;break;case"copy":case"cut":case"paste":$=s0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=xd;break;case"toggle":case"beforetoggle":$=S0}var fe=(t&4)!==0,_e=!fe&&(e==="scroll"||e==="scrollend"),N=fe?L!==null?L+"Capture":null:L;fe=[];for(var R=E,M;R!==null;){var P=R;if(M=P.stateNode,P=P.tag,P!==5&&P!==26&&P!==27||M===null||N===null||(P=za(R,N),P!=null&&fe.push(ul(R,P,M))),_e)break;R=R.return}0<fe.length&&(L=new $(L,ne,null,n,H),q.push({event:L,listeners:fe}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",L&&n!==Hr&&(ne=n.relatedTarget||n.fromElement)&&(zo(ne)||ne[Do]))break e;if(($||L)&&(L=H.window===H?H:(L=H.ownerDocument)?L.defaultView||L.parentWindow:window,$?(ne=n.relatedTarget||n.toElement,$=E,ne=ne?zo(ne):null,ne!==null&&(_e=p(ne),fe=ne.tag,ne!==_e||fe!==5&&fe!==27&&fe!==6)&&(ne=null)):($=null,ne=E),$!==ne)){if(fe=fd,P="onMouseLeave",N="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(fe=xd,P="onPointerLeave",N="onPointerEnter",R="pointer"),_e=$==null?L:Da($),M=ne==null?L:Da(ne),L=new fe(P,R+"leave",$,n,H),L.target=_e,L.relatedTarget=M,P=null,zo(H)===E&&(fe=new fe(N,R+"enter",ne,n,H),fe.target=M,fe.relatedTarget=_e,P=fe),_e=P,$&&ne)t:{for(fe=Cb,N=$,R=ne,M=0,P=N;P;P=fe(P))M++;P=0;for(var pe=R;pe;pe=fe(pe))P++;for(;0<M-P;)N=fe(N),M--;for(;0<P-M;)R=fe(R),P--;for(;M--;){if(N===R||R!==null&&N===R.alternate){fe=N;break t}N=fe(N),R=fe(R)}fe=null}else fe=null;$!==null&&ih(q,L,$,fe,!1),ne!==null&&_e!==null&&ih(q,_e,ne,fe,!0)}}e:{if(L=E?Da(E):window,$=L.nodeName&&L.nodeName.toLowerCase(),$==="select"||$==="input"&&L.type==="file")var ze=kd;else if(jd(L))if(wd)ze=M0;else{ze=D0;var ie=N0}else $=L.nodeName,!$||$.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?E&&Or(E.elementType)&&(ze=kd):ze=z0;if(ze&&(ze=ze(e,E))){Td(q,ze,n,H);break e}ie&&ie(e,L,E),e==="focusout"&&E&&L.type==="number"&&E.memoizedProps.value!=null&&Ir(L,"number",L.value)}switch(ie=E?Da(E):window,e){case"focusin":(jd(ie)||ie.contentEditable==="true")&&(Uo=ie,Wr=E,Ha=null);break;case"focusout":Ha=Wr=Uo=null;break;case"mousedown":Jr=!0;break;case"contextmenu":case"mouseup":case"dragend":Jr=!1,Ld(q,n,H);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":Ld(q,n,H)}var je;if(Xr)e:{switch(e){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Ho?Cd(e,n)&&(Re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Re="onCompositionStart");Re&&(bd&&n.locale!=="ko"&&(Ho||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Ho&&(je=md()):(Nn=H,Gr="value"in Nn?Nn.value:Nn.textContent,Ho=!0)),ie=Bs(E,Re),0<ie.length&&(Re=new gd(Re,e,null,n,H),q.push({event:Re,listeners:ie}),je?Re.data=je:(je=Sd(n),je!==null&&(Re.data=je)))),(je=T0?k0(e,n):w0(e,n))&&(Re=Bs(E,"onBeforeInput"),0<Re.length&&(ie=new gd("onBeforeInput","beforeinput",null,n,H),q.push({event:ie,listeners:Re}),ie.data=je)),xb(q,e,E,n,H)}sh(q,t)})}function ul(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bs(e,t){for(var n=t+"Capture",a=[];e!==null;){var s=e,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=za(e,n),s!=null&&a.unshift(ul(e,s,u)),s=za(e,t),s!=null&&a.push(ul(e,s,u))),e.tag===3)return a;e=e.return}return[]}function Cb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ih(e,t,n,a,s){for(var u=t._reactName,h=[];n!==null&&n!==a;){var y=n,S=y.alternate,E=y.stateNode;if(y=y.tag,S!==null&&S===a)break;y!==5&&y!==26&&y!==27||E===null||(S=E,s?(E=za(n,u),E!=null&&h.unshift(ul(n,E,S))):s||(E=za(n,u),E!=null&&h.push(ul(n,E,S)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var Sb=/\r\n?/g,jb=/\u0000|\uFFFD/g;function ch(e){return(typeof e=="string"?e:""+e).replace(Sb,`
`).replace(jb,"")}function uh(e,t){return t=ch(t),ch(e)===t}function Pe(e,t,n,a,s,u){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||$o(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&$o(e,""+a);break;case"className":Hl(e,"class",a);break;case"tabIndex":Hl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Hl(e,n,a);break;case"style":ud(e,a,u);break;case"data":if(t!=="object"){Hl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Pl(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Pe(e,t,"name",s.name,s,null),Pe(e,t,"formEncType",s.formEncType,s,null),Pe(e,t,"formMethod",s.formMethod,s,null),Pe(e,t,"formTarget",s.formTarget,s,null)):(Pe(e,t,"encType",s.encType,s,null),Pe(e,t,"method",s.method,s,null),Pe(e,t,"target",s.target,s,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Pl(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=ln);break;case"onScroll":a!=null&&we("scroll",e);break;case"onScrollEnd":a!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(i(61));if(n=a.__html,n!=null){if(s.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Pl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":we("beforetoggle",e),we("toggle",e),Ol(e,"popover",a);break;case"xlinkActuate":an(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":an(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":an(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":an(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":an(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":an(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":an(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":an(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":an(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ol(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Zx.get(n)||n,Ol(e,n,a))}}function Tc(e,t,n,a,s,u){switch(n){case"style":ud(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(i(61));if(n=a.__html,n!=null){if(s.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof a=="string"?$o(e,a):(typeof a=="number"||typeof a=="bigint")&&$o(e,""+a);break;case"onScroll":a!=null&&we("scroll",e);break;case"onScrollEnd":a!=null&&we("scrollend",e);break;case"onClick":a!=null&&(e.onclick=ln);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!td.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),u=e[bt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,s),typeof a=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,s);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ol(e,n,a)}}}function mt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var a=!1,s=!1,u;for(u in n)if(n.hasOwnProperty(u)){var h=n[u];if(h!=null)switch(u){case"src":a=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Pe(e,t,u,h,n,null)}}s&&Pe(e,t,"srcSet",n.srcSet,n,null),a&&Pe(e,t,"src",n.src,n,null);return;case"input":we("invalid",e);var y=u=h=s=null,S=null,E=null;for(a in n)if(n.hasOwnProperty(a)){var H=n[a];if(H!=null)switch(a){case"name":s=H;break;case"type":h=H;break;case"checked":S=H;break;case"defaultChecked":E=H;break;case"value":u=H;break;case"defaultValue":y=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(i(137,t));break;default:Pe(e,t,a,H,n,null)}}sd(e,u,y,S,E,h,s,!1);return;case"select":we("invalid",e),a=h=u=null;for(s in n)if(n.hasOwnProperty(s)&&(y=n[s],y!=null))switch(s){case"value":u=y;break;case"defaultValue":h=y;break;case"multiple":a=y;default:Pe(e,t,s,y,n,null)}t=u,n=h,e.multiple=!!a,t!=null?Bo(e,!!a,t,!1):n!=null&&Bo(e,!!a,n,!0);return;case"textarea":we("invalid",e),u=s=a=null;for(h in n)if(n.hasOwnProperty(h)&&(y=n[h],y!=null))switch(h){case"value":a=y;break;case"defaultValue":s=y;break;case"children":u=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(i(91));break;default:Pe(e,t,h,y,n,null)}id(e,a,s,u);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(a=n[S],a!=null))switch(S){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Pe(e,t,S,a,n,null)}return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(a=0;a<cl.length;a++)we(cl[a],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(a=n[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Pe(e,t,E,a,n,null)}return;default:if(Or(t)){for(H in n)n.hasOwnProperty(H)&&(a=n[H],a!==void 0&&Tc(e,t,H,a,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(a=n[y],a!=null&&Pe(e,t,y,a,n,null))}function Tb(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,h=null,y=null,S=null,E=null,H=null;for($ in n){var q=n[$];if(n.hasOwnProperty($)&&q!=null)switch($){case"checked":break;case"value":break;case"defaultValue":S=q;default:a.hasOwnProperty($)||Pe(e,t,$,null,a,q)}}for(var L in a){var $=a[L];if(q=n[L],a.hasOwnProperty(L)&&($!=null||q!=null))switch(L){case"type":u=$;break;case"name":s=$;break;case"checked":E=$;break;case"defaultChecked":H=$;break;case"value":h=$;break;case"defaultValue":y=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(i(137,t));break;default:$!==q&&Pe(e,t,L,$,a,q)}}$r(e,h,y,S,E,H,u,s);return;case"select":$=h=y=L=null;for(u in n)if(S=n[u],n.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":$=S;default:a.hasOwnProperty(u)||Pe(e,t,u,null,a,S)}for(s in a)if(u=a[s],S=n[s],a.hasOwnProperty(s)&&(u!=null||S!=null))switch(s){case"value":L=u;break;case"defaultValue":y=u;break;case"multiple":h=u;default:u!==S&&Pe(e,t,s,u,a,S)}t=y,n=h,a=$,L!=null?Bo(e,!!n,L,!1):!!a!=!!n&&(t!=null?Bo(e,!!n,t,!0):Bo(e,!!n,n?[]:"",!1));return;case"textarea":$=L=null;for(y in n)if(s=n[y],n.hasOwnProperty(y)&&s!=null&&!a.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Pe(e,t,y,null,a,s)}for(h in a)if(s=a[h],u=n[h],a.hasOwnProperty(h)&&(s!=null||u!=null))switch(h){case"value":L=s;break;case"defaultValue":$=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(i(91));break;default:s!==u&&Pe(e,t,h,s,a,u)}rd(e,L,$);return;case"option":for(var ne in n)if(L=n[ne],n.hasOwnProperty(ne)&&L!=null&&!a.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Pe(e,t,ne,null,a,L)}for(S in a)if(L=a[S],$=n[S],a.hasOwnProperty(S)&&L!==$&&(L!=null||$!=null))switch(S){case"selected":e.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:Pe(e,t,S,L,a,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in n)L=n[fe],n.hasOwnProperty(fe)&&L!=null&&!a.hasOwnProperty(fe)&&Pe(e,t,fe,null,a,L);for(E in a)if(L=a[E],$=n[E],a.hasOwnProperty(E)&&L!==$&&(L!=null||$!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(i(137,t));break;default:Pe(e,t,E,L,a,$)}return;default:if(Or(t)){for(var _e in n)L=n[_e],n.hasOwnProperty(_e)&&L!==void 0&&!a.hasOwnProperty(_e)&&Tc(e,t,_e,void 0,a,L);for(H in a)L=a[H],$=n[H],!a.hasOwnProperty(H)||L===$||L===void 0&&$===void 0||Tc(e,t,H,L,a,$);return}}for(var N in n)L=n[N],n.hasOwnProperty(N)&&L!=null&&!a.hasOwnProperty(N)&&Pe(e,t,N,null,a,L);for(q in a)L=a[q],$=n[q],!a.hasOwnProperty(q)||L===$||L==null&&$==null||Pe(e,t,q,L,a,$)}function dh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var s=n[a],u=s.transferSize,h=s.initiatorType,y=s.duration;if(u&&y&&dh(h)){for(h=0,y=s.responseEnd,a+=1;a<n.length;a++){var S=n[a],E=S.startTime;if(E>y)break;var H=S.transferSize,q=S.initiatorType;H&&dh(q)&&(S=S.responseEnd,h+=H*(S<y?1:(y-E)/(S-E)))}if(--a,t+=8*(u+h)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kc=null,wc=null;function $s(e){return e.nodeType===9?e:e.ownerDocument}function ph(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ac(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rc=null;function wb(){var e=window.event;return e&&e.type==="popstate"?e===Rc?!1:(Rc=e,!0):(Rc=null,!1)}var hh=typeof setTimeout=="function"?setTimeout:void 0,Ab=typeof clearTimeout=="function"?clearTimeout:void 0,fh=typeof Promise=="function"?Promise:void 0,Rb=typeof queueMicrotask=="function"?queueMicrotask:typeof fh<"u"?function(e){return fh.resolve(null).then(e).catch(Nb)}:hh;function Nb(e){setTimeout(function(){throw e})}function Yn(e){return e==="head"}function gh(e,t){var n=t,a=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(s),ma(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")dl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,dl(n);for(var u=n.firstChild;u;){var h=u.nextSibling,y=u.nodeName;u[Na]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=h}}else n==="body"&&dl(e.ownerDocument.body);n=s}while(n);ma(t)}function xh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Nc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Nc(n),Lr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Db(e,t,n,a){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Na])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function zb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vt(e.nextSibling),e===null))return null;return e}function bh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function Dc(e){return e.data==="$?"||e.data==="$~"}function zc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Mc=null;function yh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Vt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function vh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ch(e,t,n){switch(t=$s(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function dl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lr(e)}var qt=new Map,Sh=new Set;function Is(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sn=W.d;W.d={f:Eb,r:Lb,D:Bb,C:$b,L:Ib,m:Ob,X:Ub,S:Hb,M:Pb};function Eb(){var e=Sn.f(),t=Rs();return e||t}function Lb(e){var t=Mo(e);t!==null&&t.tag===5&&t.type==="form"?Hp(t):Sn.r(e)}var ua=typeof document>"u"?null:document;function jh(e,t,n){var a=ua;if(a&&typeof t=="string"&&t){var s=It(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Sh.has(s)||(Sh.add(s),e={rel:e,crossOrigin:n,href:t},a.querySelector(s)===null&&(t=a.createElement("link"),mt(t,"link",e),rt(t),a.head.appendChild(t)))}}function Bb(e){Sn.D(e),jh("dns-prefetch",e,null)}function $b(e,t){Sn.C(e,t),jh("preconnect",e,t)}function Ib(e,t,n){Sn.L(e,t,n);var a=ua;if(a&&e&&t){var s='link[rel="preload"][as="'+It(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+It(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+It(n.imageSizes)+'"]')):s+='[href="'+It(e)+'"]';var u=s;switch(t){case"style":u=da(e);break;case"script":u=pa(e)}qt.has(u)||(e=C({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),qt.set(u,e),a.querySelector(s)!==null||t==="style"&&a.querySelector(pl(u))||t==="script"&&a.querySelector(ml(u))||(t=a.createElement("link"),mt(t,"link",e),rt(t),a.head.appendChild(t)))}}function Ob(e,t){Sn.m(e,t);var n=ua;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+It(a)+'"][href="'+It(e)+'"]',u=s;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=pa(e)}if(!qt.has(u)&&(e=C({rel:"modulepreload",href:e},t),qt.set(u,e),n.querySelector(s)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ml(u)))return}a=n.createElement("link"),mt(a,"link",e),rt(a),n.head.appendChild(a)}}}function Hb(e,t,n){Sn.S(e,t,n);var a=ua;if(a&&e){var s=Eo(a).hoistableStyles,u=da(e);t=t||"default";var h=s.get(u);if(!h){var y={loading:0,preload:null};if(h=a.querySelector(pl(u)))y.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":t},n),(n=qt.get(u))&&Ec(e,n);var S=h=a.createElement("link");rt(S),mt(S,"link",e),S._p=new Promise(function(E,H){S.onload=E,S.onerror=H}),S.addEventListener("load",function(){y.loading|=1}),S.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Os(h,t,a)}h={type:"stylesheet",instance:h,count:1,state:y},s.set(u,h)}}}function Ub(e,t){Sn.X(e,t);var n=ua;if(n&&e){var a=Eo(n).hoistableScripts,s=pa(e),u=a.get(s);u||(u=n.querySelector(ml(s)),u||(e=C({src:e,async:!0},t),(t=qt.get(s))&&Lc(e,t),u=n.createElement("script"),rt(u),mt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(s,u))}}function Pb(e,t){Sn.M(e,t);var n=ua;if(n&&e){var a=Eo(n).hoistableScripts,s=pa(e),u=a.get(s);u||(u=n.querySelector(ml(s)),u||(e=C({src:e,async:!0,type:"module"},t),(t=qt.get(s))&&Lc(e,t),u=n.createElement("script"),rt(u),mt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(s,u))}}function Th(e,t,n,a){var s=(s=le.current)?Is(s):null;if(!s)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=da(n.href),n=Eo(s).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=da(n.href);var u=Eo(s).hoistableStyles,h=u.get(e);if(h||(s=s.ownerDocument||s,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,h),(u=s.querySelector(pl(e)))&&!u._p&&(h.instance=u,h.state.loading=5),qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},qt.set(e,n),u||_b(s,e,n,h.state))),t&&a===null)throw Error(i(528,""));return h}if(t&&a!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=pa(n),n=Eo(s).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function da(e){return'href="'+It(e)+'"'}function pl(e){return'link[rel="stylesheet"]['+e+"]"}function kh(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function _b(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),mt(t,"link",n),rt(t),e.head.appendChild(t))}function pa(e){return'[src="'+It(e)+'"]'}function ml(e){return"script[async]"+e}function wh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+It(n.href)+'"]');if(a)return t.instance=a,rt(a),a;var s=C({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),rt(a),mt(a,"style",s),Os(a,n.precedence,e),t.instance=a;case"stylesheet":s=da(n.href);var u=e.querySelector(pl(s));if(u)return t.state.loading|=4,t.instance=u,rt(u),u;a=kh(n),(s=qt.get(s))&&Ec(a,s),u=(e.ownerDocument||e).createElement("link"),rt(u);var h=u;return h._p=new Promise(function(y,S){h.onload=y,h.onerror=S}),mt(u,"link",a),t.state.loading|=4,Os(u,n.precedence,e),t.instance=u;case"script":return u=pa(n.src),(s=e.querySelector(ml(u)))?(t.instance=s,rt(s),s):(a=n,(s=qt.get(u))&&(a=C({},n),Lc(a,s)),e=e.ownerDocument||e,s=e.createElement("script"),rt(s),mt(s,"link",a),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Os(a,n.precedence,e));return t.instance}function Os(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=a.length?a[a.length-1]:null,u=s,h=0;h<a.length;h++){var y=a[h];if(y.dataset.precedence===t)u=y;else if(u!==s)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ec(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Lc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hs=null;function Ah(e,t,n){if(Hs===null){var a=new Map,s=Hs=new Map;s.set(n,a)}else s=Hs,a=s.get(n),a||(a=new Map,s.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var u=n[s];if(!(u[Na]||u[ct]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var h=u.getAttribute(t)||"";h=e+h;var y=a.get(h);y?y.push(u):a.set(h,[u])}}return a}function Rh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Gb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Nh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Vb(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=da(a.href),u=t.querySelector(pl(s));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Us.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,rt(u);return}u=t.ownerDocument||t,a=kh(a),(s=qt.get(s))&&Ec(a,s),u=u.createElement("link"),rt(u);var h=u;h._p=new Promise(function(y,S){h.onload=y,h.onerror=S}),mt(u,"link",a),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Us.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Bc=0;function qb(e,t){return e.stylesheets&&e.count===0&&_s(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&_s(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Bc===0&&(Bc=62500*kb());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_s(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Bc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(s)}}:null}function Us(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_s(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ps=null;function _s(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ps=new Map,t.forEach(Yb,e),Ps=null,Us.call(e))}function Yb(e,t){if(!(t.state.loading&4)){var n=Ps.get(e);if(n)var a=n.get(null);else{n=new Map,Ps.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var h=s[u];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),a=h)}a&&n.set(null,a)}s=t.instance,h=s.getAttribute("data-precedence"),u=n.get(h)||a,u===a&&n.set(null,s),n.set(h,s),this.count++,a=Us.bind(this),s.addEventListener("load",a),s.addEventListener("error",a),u?u.parentNode.insertBefore(s,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var hl={$$typeof:K,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function Fb(e,t,n,a,s,u,h,y,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dr(0),this.hiddenUpdates=Dr(null),this.identifierPrefix=a,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Dh(e,t,n,a,s,u,h,y,S,E,H,q){return e=new Fb(e,t,n,h,S,E,H,q,y),t=1,u===!0&&(t|=24),u=Nt(3,null,null,t),e.current=u,u.stateNode=e,t=hi(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:n,cache:t},bi(u),e}function zh(e){return e?(e=Go,e):Go}function Mh(e,t,n,a,s,u){s=zh(s),a.context===null?a.context=s:a.pendingContext=s,a=Bn(t),a.payload={element:n},u=u===void 0?null:u,u!==null&&(a.callback=u),n=$n(e,a,t),n!==null&&(Tt(n,e,t),Ya(n,e,t))}function Eh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $c(e,t){Eh(e,t),(e=e.alternate)&&Eh(e,t)}function Lh(e){if(e.tag===13||e.tag===31){var t=io(e,67108864);t!==null&&Tt(t,e,67108864),$c(e,67108864)}}function Bh(e){if(e.tag===13||e.tag===31){var t=Lt();t=zr(t);var n=io(e,t);n!==null&&Tt(n,e,t),$c(e,t)}}var Gs=!0;function Xb(e,t,n,a){var s=O.T;O.T=null;var u=W.p;try{W.p=2,Ic(e,t,n,a)}finally{W.p=u,O.T=s}}function Kb(e,t,n,a){var s=O.T;O.T=null;var u=W.p;try{W.p=8,Ic(e,t,n,a)}finally{W.p=u,O.T=s}}function Ic(e,t,n,a){if(Gs){var s=Oc(a);if(s===null)jc(e,t,a,Vs,n),Ih(e,a);else if(Zb(s,e,t,n,a))a.stopPropagation();else if(Ih(e,a),t&4&&-1<Qb.indexOf(e)){for(;s!==null;){var u=Mo(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var h=oo(u.pendingLanes);if(h!==0){var y=u;for(y.pendingLanes|=2,y.entangledLanes|=2;h;){var S=1<<31-At(h);y.entanglements[1]|=S,h&=~S}en(u),(Ee&6)===0&&(ws=kt()+500,il(0))}}break;case 31:case 13:y=io(u,2),y!==null&&Tt(y,u,2),Rs(),$c(u,2)}if(u=Oc(a),u===null&&jc(e,t,a,Vs,n),u===s)break;s=u}s!==null&&a.stopPropagation()}else jc(e,t,a,null,n)}}function Oc(e){return e=Ur(e),Hc(e)}var Vs=null;function Hc(e){if(Vs=null,e=zo(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=f(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Vs=e,null}function $h(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bx()){case Vu:return 2;case qu:return 8;case El:case $x:return 32;case Yu:return 268435456;default:return 32}default:return 32}}var Uc=!1,Fn=null,Xn=null,Kn=null,fl=new Map,gl=new Map,Qn=[],Qb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ih(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":fl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(t.pointerId)}}function xl(e,t,n,a,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:u,targetContainers:[s]},t!==null&&(t=Mo(t),t!==null&&Lh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Zb(e,t,n,a,s){switch(t){case"focusin":return Fn=xl(Fn,e,t,n,a,s),!0;case"dragenter":return Xn=xl(Xn,e,t,n,a,s),!0;case"mouseover":return Kn=xl(Kn,e,t,n,a,s),!0;case"pointerover":var u=s.pointerId;return fl.set(u,xl(fl.get(u)||null,e,t,n,a,s)),!0;case"gotpointercapture":return u=s.pointerId,gl.set(u,xl(gl.get(u)||null,e,t,n,a,s)),!0}return!1}function Oh(e){var t=zo(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,Wu(e.priority,function(){Bh(n)});return}}else if(t===31){if(t=f(n),t!==null){e.blockedOn=t,Wu(e.priority,function(){Bh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Hr=a,n.target.dispatchEvent(a),Hr=null}else return t=Mo(n),t!==null&&Lh(t),e.blockedOn=n,!1;t.shift()}return!0}function Hh(e,t,n){qs(e)&&n.delete(t)}function Wb(){Uc=!1,Fn!==null&&qs(Fn)&&(Fn=null),Xn!==null&&qs(Xn)&&(Xn=null),Kn!==null&&qs(Kn)&&(Kn=null),fl.forEach(Hh),gl.forEach(Hh)}function Ys(e,t){e.blockedOn===t&&(e.blockedOn=null,Uc||(Uc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Wb)))}var Fs=null;function Uh(e){Fs!==e&&(Fs=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Fs===e&&(Fs=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],s=e[t+2];if(typeof a!="function"){if(Hc(a||n)===null)continue;break}var u=Mo(n);u!==null&&(e.splice(t,3),t-=3,Oi(u,{pending:!0,data:s,method:n.method,action:a},a,s))}}))}function ma(e){function t(S){return Ys(S,e)}Fn!==null&&Ys(Fn,e),Xn!==null&&Ys(Xn,e),Kn!==null&&Ys(Kn,e),fl.forEach(t),gl.forEach(t);for(var n=0;n<Qn.length;n++){var a=Qn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)Oh(n),n.blockedOn===null&&Qn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var s=n[a],u=n[a+1],h=s[bt]||null;if(typeof u=="function")h||Uh(n);else if(h){var y=null;if(u&&u.hasAttribute("formAction")){if(s=u,h=u[bt]||null)y=h.formAction;else if(Hc(s)!==null)continue}else y=h.action;typeof y=="function"?n[a+1]=y:(n.splice(a,3),a-=3),Uh(n)}}}function Ph(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(h){return s=h})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Pc(e){this._internalRoot=e}Xs.prototype.render=Pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,a=Lt();Mh(n,a,e,t,null,null)},Xs.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mh(e.current,2,null,e,null,null),Rs(),t[Do]=null}};function Xs(e){this._internalRoot=e}Xs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qn.length&&t!==0&&t<Qn[n].priority;n++);Qn.splice(n,0,e),n===0&&Oh(e)}};var _h=r.version;if(_h!=="19.2.0")throw Error(i(527,_h,"19.2.0"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=g(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Jb={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{wa=Ks.inject(Jb),wt=Ks}catch{}}return yl.createRoot=function(e,t){if(!d(e))throw Error(i(299));var n=!1,a="",s=Kp,u=Qp,h=Zp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Dh(e,1,!1,null,null,n,a,null,s,u,h,Ph),e[Do]=t.current,Sc(e),new Pc(t)},yl.hydrateRoot=function(e,t,n){if(!d(e))throw Error(i(299));var a=!1,s="",u=Kp,h=Qp,y=Zp,S=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=Dh(e,1,!0,t,n??null,a,s,S,u,h,y,Ph),t.context=zh(null),n=t.current,a=Lt(),a=zr(a),s=Bn(a),s.callback=null,$n(n,s,a),n=a,t.current.lanes=n,Ra(t,n),en(t),e[Do]=t.current,Sc(e),new Xs(t)},yl.version="19.2.0",yl}var Wh;function iy(){if(Wh)return Vc.exports;Wh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Vc.exports=ry(),Vc.exports}var cy=iy();const uy=pf(cy);let vl=null;const Xc=new Map;let Jh=0;const dy=l=>{let r=0;for(let c=0;c<l.length;c++){const i=l.charCodeAt(c);r=(r<<5)-r+i,r=r&r}return Math.abs(r).toString(36)},py=()=>(!vl&&typeof document<"u"&&(vl=document.createElement("style"),vl.setAttribute("data-zwheui",""),document.head.appendChild(vl)),vl),my={borderRadius:"radii"},hy={blur:"blur"},fy=(l,r,c)=>{if(!c||typeof r!="string")return r;const i=my[l];if(i){const m=c[i];if(m&&m[r])return m[r]}const d=/(\w+)\((.+)\)/,p=r.match(d);if(p){const[,m,f]=p,x=hy[m];if(x){const g=c[x];if(g&&g[f])return`${m}(${g[f]})`}}return r},Cl=(l,r)=>Object.entries(l).map(([c,i])=>{if(typeof i=="object"&&i!==null||i===void 0)return"";const d=fy(c,i,r);return`${c.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${d};`}).filter(Boolean).join(" "),gy=l=>l.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),xy=(l,r)=>{if(!r?.breakpoints)return l;const c=/\(\s*([a-zA-Z-]+)\s*:\s*['"]?(\w+)['"]?\s*\)/g;return l.replace(c,(i,d,p)=>{const m=r.breakpoints[p];return m?`(${gy(d)}: ${m})`:i})},by=(l,r={},c)=>{const{prefix:i="zw",cache:d=!0}=r,p=JSON.stringify(l);if(d&&Xc.has(p))return Xc.get(p);const m=py();if(!m)return"";Jh++;const f=`${i}-${dy(p)}-${Jh}`,x={},g=[],v=[];for(const[A,j]of Object.entries(l))if(!(A==="@media"||j===void 0))if(typeof j=="object"&&j!==null)if(A.startsWith("&")){const k=A.replace(/&/g,`.${f}`);g.push(`${k} { ${Cl(j,c)} }`)}else if(A.startsWith("@keyframes")){const k=Object.entries(j).map(([z,B])=>`${z} { ${Cl(B,c)} }`).join(" ");v.push(`${A} { ${k} }`)}else A.startsWith("@")&&g.push(`${A} { .${f} { ${Cl(j,c)} } }`);else x[A]=j;let C=`.${f} { ${Cl(x,c)} }`;return g.length>0&&(C+=`
${g.join(`
`)}`),l["@media"]&&Object.entries(l["@media"]).forEach(([A,j])=>{const k=xy(A,c);C+=`
@media ${k} { .${f} { ${Cl(j,c)} } }`}),v.length>0&&(C+=`
${v.join(`
`)}`),m.textContent+=`
${C}`,d&&Xc.set(p,f),f},Tl={colors:{primary:"#60a5fa",secondary:"#4b5563",accent:"#b45309",background:"transparent",backgroundSecondary:"rgba(28, 28, 28, 0.75)",border:"rgba(255, 255, 255, 0.15)",text:"#e6edf3",textSecondary:"#7d8590"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2.5rem"},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},typography:{fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem"},fontWeights:{normal:400,medium:500,semibold:600,bold:700},lineHeights:{tight:1.25,normal:1.5,relaxed:1.75}},radii:{sm:"0.125rem",md:"0.25rem",lg:"0.5rem",xl:"1rem","2xl":"1.5rem",full:"9999px"},blur:{sm:"4px",md:"8px",lg:"16px",xl:"24px"},maxWidths:{xs:"640px",sm:"768px",md:"1024px",lg:"1280px",xl:"1536px","2xl":"1800px",container:"1280px"}},ef={...Tl,colors:{...Tl.colors,primary:"#60a5fa",secondary:"#94a3b8",background:"transparent",text:"#f3f4f6"}},yy={...Tl,colors:{...Tl.colors,primary:"#1d4ed8",secondary:"#6b7280",background:"#f3f4f6",backgroundSecondary:"rgba(255, 255, 255, 0.75)",border:"rgba(0, 0, 0, 0.1)",text:"#1f2937",textSecondary:"#4b5563"}},tf="zwheui-theme-mode",vy=()=>{const[l,r]=b.useState(()=>typeof window>"u"?"dark":localStorage.getItem(tf)||"dark"),[c,i]=b.useState(null),d=b.useCallback(m=>{switch(m){case"dark":return ef;case"light":return yy;case"custom":return c||Tl;default:return ef}},[c]),p=b.useCallback((m,f)=>{r(m),m==="custom"&&f&&i(f),typeof window<"u"&&localStorage.setItem(tf,m)},[]);return{mode:l,switchTheme:p,currentTheme:d(l),setCustomTheme:i}},hf=b.createContext(null),ff=({children:l})=>{const{currentTheme:r,mode:c,switchTheme:i,setCustomTheme:d}=vy(),p={theme:r,mode:c,switchTheme:i,setCustomTheme:d};return o.jsx(hf.Provider,{value:p,children:l})},_=()=>{const l=b.useContext(hf);if(!l)throw new Error("useTheme must be used within a ThemeProvider");return l},Y=l=>{const{theme:r}=_();return b.useRef(new Map),b.useCallback((i,d={})=>by(i,{...d,prefix:l},r),[l,r])},gf=b.createContext(null),xf=()=>{const l=b.useContext(gf);if(!l)throw new Error("Accordion components must be used within an Accordion provider.");return l},mr=({children:l,defaultValue:r,className:c})=>{const[i,d]=b.useState(r||null);return o.jsx(gf.Provider,{value:{activeItem:i,setActiveItem:d},children:o.jsx("div",{className:c,children:l})})},ba=({children:l,value:r,className:c})=>{const{theme:i}=_(),p=Y("accordion-item")({borderBottom:`1px solid ${i.colors.border}`,"&:last-child":{borderBottom:"none"}});return o.jsx("div",{className:`${p} ${c}`,children:He.Children.map(l,m=>He.isValidElement(m)?He.cloneElement(m,{value:r}):m)})},ya=({children:l,value:r,className:c})=>{const{activeItem:i,setActiveItem:d}=xf(),{theme:p}=_(),m=Y("accordion-trigger"),f=i===r,x=m({width:"100%",padding:`${p.spacing.md} 0`,display:"flex",justifyContent:"space-between",alignItems:"center",background:"none",border:"none",color:p.colors.text,cursor:"pointer",fontSize:"1rem",textAlign:"left","&::after":{content:'"▼"',fontSize:"10px",color:p.colors.textSecondary,transition:"transform 0.2s ease",transform:f?"rotate(180deg)":"none"}});return o.jsx("button",{className:`${x} ${c}`,onClick:()=>d(f?null:r),"aria-expanded":f,"aria-controls":`accordion-content-${r}`,children:l})},va=({children:l,value:r,className:c})=>{const{activeItem:i}=xf(),{theme:d}=_(),p=Y("accordion-content"),m=i===r,f=p({overflow:"hidden",transition:"max-height 0.3s ease, padding 0.3s ease",maxHeight:m?"500px":"0"}),x=p({paddingBottom:m?d.spacing.md:"0",color:d.colors.textSecondary});return o.jsx("div",{id:`accordion-content-${r}`,className:`${f} ${c}`,"aria-hidden":!m,children:o.jsx("div",{className:x,children:l})})},T=({as:l="p",size:r,weight:c,color:i,className:d="",style:p,...m})=>{const{theme:f}=_(),g=Y("text")({fontSize:r||f.typography.fontSizes.base,fontWeight:String(c||f.typography.fontWeights.normal),color:i||f.colors.text,lineHeight:f.typography.lineHeights.normal});return He.createElement(l,{className:`${g} ${d}`,style:p,...m})},Cy={info:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',warning:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',error:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',success:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'},bf=({title:l,children:r,variant:c="info",className:i=""})=>{const{theme:d}=_(),p=Y("alert"),m={__html:Cy[c]},f={info:{backgroundColor:"rgba(59, 130, 246, 0.2)",borderColor:"rgba(59, 130, 246, 0.5)",color:"#93c5fd"},warning:{backgroundColor:"rgba(245, 158, 11, 0.2)",borderColor:"rgba(245, 158, 11, 0.5)",color:"#fcd34d"},error:{backgroundColor:"rgba(239, 68, 68, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#fca5a5"},success:{backgroundColor:"rgba(16, 185, 129, 0.2)",borderColor:"rgba(16, 185, 129, 0.5)",color:"#6ee7b7"}},x=p({display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"start",gap:d.spacing.md,borderRadius:"8px",border:"1px solid",padding:d.spacing.md,...f[c],"@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(12px)"}});return o.jsxs("div",{role:"alert",className:`${x} ${i}`,children:[o.jsx("span",{"aria-hidden":"true",style:{flexShrink:0,width:"20px",height:"20px"},dangerouslySetInnerHTML:m}),o.jsxs("div",{children:[o.jsx(T,{weight:"600",style:{marginBottom:"0.25rem"},children:l}),r&&o.jsx(T,{size:"0.875rem",color:"inherit",style:{opacity:.8},children:r})]})]})};class Sy{constructor(r,c,i){this.animationFrame=null,this.startTime=null,this.easingFunctions={linear:d=>d,easeIn:d=>d*d,easeOut:d=>1-(1-d)*(1-d),easeInOut:d=>d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2,bounce:d=>{const p=this.config.bounceStrength||3;return 1-Math.exp(-p*d)*Math.cos(2*Math.PI*d)},elastic:d=>{const p=this.config.elasticity||.3;return Math.pow(2,-10*d)*Math.sin((d-p/4)*(2*Math.PI)/p)+1}},this.animate=d=>{this.startTime||(this.startTime=d);const p=d-this.startTime,m=Math.min(p/this.config.duration,1),f=this.interpolate(m);this.onUpdate({value:f,progress:m,isRunning:m<1}),m<1?this.animationFrame=requestAnimationFrame(this.animate):(this.stop(),this.onComplete?.())},this.config=r,this.onUpdate=c,this.onComplete=i}interpolate(r){const c=this.easingFunctions[this.config.type],i=c(r);return this.config.from+(this.config.to-this.config.from)*i}start(){this.animationFrame===null&&(this.startTime=null,this.animationFrame=requestAnimationFrame(this.animate))}stop(){this.animationFrame!==null&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null)}updateConfig(r){this.config={...this.config,...r}}}const jy=l=>{const{initialValue:r=0,duration:c=1e3,type:i="easeInOut",bounceStrength:d,elasticity:p}=l,[m,f]=b.useState({value:r,progress:0,isRunning:!1}),x=b.useRef(null),g=b.useCallback((A,j)=>{x.current&&x.current.stop(),x.current=new Sy({duration:c,from:A,to:j,type:i,bounceStrength:d,elasticity:p},f)},[c,i,d,p]),v=b.useCallback(A=>{g(m.value,A),x.current?.start()},[m.value,g]),C=b.useCallback(()=>{x.current?.stop()},[]);return b.useEffect(()=>()=>{x.current?.stop()},[]),{...m,animate:v,stop:C}},yf=({className:l=""})=>{const{theme:r}=_(),c=Y("animated-block"),[i,d]=b.useState("easeInOut"),p=jy({duration:1e3,type:i,bounceStrength:3,elasticity:.3}),m=c({width:"100px",height:"100px",backgroundColor:r.colors.primary,borderRadius:"8px",transition:"background-color 0.3s"}),f=c({padding:r.spacing.lg,display:"grid",gap:r.spacing.md}),x=c({display:"grid",gap:r.spacing.sm,gridTemplateColumns:"repeat(auto-fill, minmax(80px, 1fr))"}),g=c({padding:`${r.spacing.sm} ${r.spacing.md}`,backgroundColor:r.colors.secondary,color:r.colors.background,border:"none",borderRadius:"4px",cursor:"pointer","&:hover":{opacity:.9}}),v=["linear","easeIn","easeOut","easeInOut","bounce","elastic"];return o.jsxs("div",{className:`${f} ${l}`,children:[o.jsx("div",{style:{position:"relative",height:"100px",overflow:"hidden"},children:o.jsx("div",{className:m,style:{transform:`translateX(${p.value}px)`,position:"absolute"}})}),o.jsx("div",{className:x,children:v.map(C=>o.jsx("button",{className:g,onClick:()=>{d(C),p.animate(p.value===0?200:0)},children:C},C))}),o.jsxs("div",{children:["Progress: ",Math.round(p.progress*100),"%"]})]})},wl=({as:l="div",...r})=>He.createElement(l,r),iu=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),o.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),hr=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("circle",{cx:"12",cy:"12",r:"3"}),o.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),cu=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),vf=l=>o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...l,children:o.jsx("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})}),Cf=l=>o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...l,children:o.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})}),Sf=l=>o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...l,children:o.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})}),jf=l=>o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...l,children:o.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})}),Tf=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),o.jsx("polyline",{points:"10 17 15 12 10 7"}),o.jsx("line",{x1:"15",y1:"12",x2:"3",y2:"12"})]}),Ty=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),o.jsx("polyline",{points:"16 17 21 12 16 7"}),o.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),ky=l=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:o.jsx("path",{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"})}),kf=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),o.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),wy=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),o.jsx("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),o.jsx("line",{x1:"17",y1:"11",x2:"23",y2:"11"})]}),Ay=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"9",cy:"7",r:"4"}),o.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),o.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),Ry=l=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:o.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),Ny=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}),o.jsx("line",{x1:"8",y1:"10",x2:"8.01",y2:"10"}),o.jsx("line",{x1:"12",y1:"10",x2:"12.01",y2:"10"}),o.jsx("line",{x1:"16",y1:"10",x2:"16.01",y2:"10"})]}),wf=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),o.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),Dy=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("circle",{cx:"12",cy:"12",r:"3"}),o.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),zy=l=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:o.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})}),My=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("line",{x1:"4",y1:"21",x2:"4",y2:"14"}),o.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"3"}),o.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"12"}),o.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"3"}),o.jsx("line",{x1:"20",y1:"21",x2:"20",y2:"16"}),o.jsx("line",{x1:"20",y1:"12",x2:"20",y2:"3"}),o.jsx("line",{x1:"1",y1:"14",x2:"7",y2:"14"}),o.jsx("line",{x1:"9",y1:"8",x2:"15",y2:"8"}),o.jsx("line",{x1:"17",y1:"16",x2:"23",y2:"16"})]}),Ey=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),o.jsx("polyline",{points:"16 17 21 12 16 7"}),o.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),Ly=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("circle",{cx:"9",cy:"21",r:"1"}),o.jsx("circle",{cx:"20",cy:"21",r:"1"}),o.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),By=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.jsx("polyline",{points:"19 12 12 19 5 12"})]}),$y=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]}),Iy=l=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:o.jsx("polyline",{points:"15 18 9 12 15 6"})}),Oy=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M8 17l4 4 4-4"}),o.jsx("path",{d:"M12 12v9"}),o.jsx("path",{d:"M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"})]}),Hy=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M8 17l4-4 4 4"}),o.jsx("path",{d:"M12 19V8"}),o.jsx("path",{d:"M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"})]}),Uy=l=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:o.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),Py=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),o.jsx("polyline",{points:"7 10 12 15 17 10"}),o.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),_y=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("circle",{cx:"12",cy:"12",r:"1"}),o.jsx("circle",{cx:"12",cy:"5",r:"1"}),o.jsx("circle",{cx:"12",cy:"19",r:"1"})]}),fr=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),o.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),o.jsx("polyline",{points:"21 15 16 10 5 21"})]}),Gy=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),o.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),uu=l=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:o.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),du=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Vy=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("polyline",{points:"23 4 23 10 17 10"}),o.jsx("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"})]}),qy=l=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:o.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),Yy=l=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:o.jsx("rect",{x:"6",y:"6",width:"12",height:"12"})}),gr=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Fy=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M12 2L9 9h6l-3-7z"}),o.jsx("path",{d:"M12 9c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"}),o.jsx("path",{d:"M12 19.5V22"}),o.jsx("path",{d:"M7 22h10"})]}),Xy=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),o.jsx("polyline",{points:"17 8 12 3 7 8"}),o.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),Ky=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("circle",{cx:"8",cy:"8",r:"6"}),o.jsx("path",{d:"M18.09 10.76A6 6 0 0 0 10.24 3M8 12.5A6 6 0 1 0 8 23a6 6 0 0 0 0-10.5z"}),o.jsx("path",{d:"M14.24 16.76A6 6 0 0 0 16 9"})]}),Qy=l=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:o.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),Zy=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),o.jsx("polyline",{points:"15 3 21 3 21 9"}),o.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),Af=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49338 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92123 19.4875 1.9139C19.836 1.90657 20.1821 1.97006 20.5056 2.10085C20.8291 2.23165 21.1219 2.4273 21.3686 2.67398C21.6153 2.92066 21.811 3.21345 21.9418 3.53697C22.0726 3.86049 22.1361 4.20655 22.1287 4.55505C22.1214 4.90355 22.0435 5.2469 21.8998 5.5644C21.7561 5.8819 21.5493 6.16702 21.2799 6.40005Z"}),o.jsx("path",{d:"M11 4H6C4.93913 4 3.92172 4.42143 3.17157 5.17157C2.42143 5.92172 2 6.93913 2 8V18C2 19.0609 2.42143 20.0783 3.17157 20.8284C3.92172 21.5786 4.93913 22 6 22H16C17.0609 22 18.0783 21.5786 18.8284 20.8284C19.5786 20.0783 20 19.0609 20 18V13"})]}),pu=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M16 4H20C21.1046 4 22 4.89543 22 6V20C22 21.1046 21.1046 22 20 22H8C6.89543 22 6 21.1046 6 20V16"}),o.jsx("path",{d:"M16 2H8C6.89543 2 6 2.89543 6 4V16C6 17.1046 6.89543 18 8 18H16C17.1046 18 18 17.1046 18 16V4C18 2.89543 17.1046 2 16 2Z"})]}),Rf=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M21 8V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V8"}),o.jsx("path",{d:"M23 3H1V8H23V3Z"}),o.jsx("path",{d:"M10 12H14"})]}),mu=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M3 6H5H21"}),o.jsx("path",{d:"M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"})]}),hu=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),o.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),Nf=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),o.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),Df=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),o.jsx("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),o.jsx("line",{x1:"17",y1:"9",x2:"23",y2:"15"})]}),xr=l=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:o.jsx("polyline",{points:"9 18 15 12 9 6"})}),nr=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),o.jsx("polyline",{points:"16 6 12 2 8 6"}),o.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"15"})]}),zf=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("polyline",{points:"6 9 6 2 18 2 18 9"}),o.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),o.jsx("rect",{x:"6",y:"14",width:"12",height:"8"})]}),jl=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),o.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),o.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]}),fa=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("polyline",{points:"4 7 4 4 20 4 20 7"}),o.jsx("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),o.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20"})]}),Mf=l=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"})}),Ef=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),o.jsx("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),or=l=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:o.jsx("path",{d:"M12 2L2 12l10 10 10-10L12 2z"})}),Lf=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),o.jsx("polyline",{points:"14 2 14 8 20 8"})]}),Bf=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),o.jsx("polyline",{points:"5 12 12 5 19 12"})]}),$f=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.jsx("polyline",{points:"19 12 12 19 5 12"})]}),If=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("polyline",{points:"7 15 12 20 17 15"}),o.jsx("polyline",{points:"7 9 12 4 17 9"})]}),Of=l=>o.jsxs("svg",{viewBox:"0 0 48 48",...l,children:[o.jsx("path",{fill:"#FFC107",d:"M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 9.61C34.566 5.845 29.643 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"}),o.jsx("path",{fill:"#FF3D00",d:"M6.306 14.691c-1.321 2.356-2.094 5.12-2.094 8.129s.773 5.773 2.094 8.129l5.62-4.381C11.091 25.131 11 24.575 11 24s.091-1.131.226-2.249l-5.62-4.381z"}),o.jsx("path",{fill:"#4CAF50",d:"M24 44c5.166 0 9.657-1.855 13.04-4.85l-5.48-4.246c-1.631 1.09-3.701 1.74-5.961 1.74-4.903 0-9.09-3.212-10.58-7.551l-5.62 4.381C8.909 39.448 15.897 44 24 44z"}),o.jsx("path",{fill:"#1976D2",d:"M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.16-4.082 5.564l5.48 4.246c3.226-2.991 5.34-7.233 5.34-12.233c0-1.341-.138-2.65-.389-3.917z"})]}),Hf=l=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...l,children:o.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"})}),Uf=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),o.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),o.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),Pf=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),o.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),ar=l=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[o.jsx("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),o.jsx("polyline",{points:"13 2 13 9 20 9"})]}),ha=l=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:o.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),_f=Object.freeze(Object.defineProperty({__proto__:null,ArchiveIcon:Rf,ArrowDownIcon:By,BookOpenIcon:$y,ChatBubbleIcon:Ry,ChatDotsIcon:Ny,ChevronLeftIcon:Iy,ChevronRightIcon:xr,CloudArrowDownIcon:Oy,CloudArrowUpIcon:Hy,CogIcon:Dy,CoinsIcon:Ky,CommentsIcon:Uy,CopyIcon:pu,DiamondIcon:or,DocumentIcon:Lf,DownloadIcon:Py,EllipsisVerticalIcon:_y,ErrorIcon:vf,ExternalLinkIcon:Zy,FileIcon:ar,FilterIcon:zy,FolderIcon:ha,GithubIcon:Hf,GoogleIcon:Of,HeartIcon:Qy,HomeIcon:iu,ImageIcon:fr,InfoIcon:Cf,KeyIcon:ky,LayoutIcon:jl,LockIcon:kf,LockOpenIcon:Ef,LoginIcon:Tf,LogoutIcon:Ty,MinusSquareIcon:Pf,PaperPlaneIcon:Gy,PauseIcon:hu,PencilIcon:Af,PlayIcon:uu,PlusIcon:du,PlusSquareIcon:Uf,PrintIcon:zf,RedoIcon:Vy,SelectorIcon:If,SendIcon:wf,SettingsIcon:hr,ShareIcon:nr,ShoppingCartIcon:Ly,SignOutAltIcon:Ey,SlidersIcon:My,SortAscendingIcon:Bf,SortDescendingIcon:$f,SquareIcon:Mf,StarIcon:qy,StopIcon:Yy,SuccessIcon:Sf,TimesIcon:gr,TrashIcon:mu,TrophyIcon:Fy,TypeIcon:fa,UploadIcon:Xy,UserIcon:cu,UserPlusIcon:wy,UsersIcon:Ay,VolumeMuteIcon:Df,VolumeUpIcon:Nf,WarningIcon:jf},Symbol.toStringTag,{value:"Module"})),Wy=({alert:l})=>l?o.jsx(bf,{title:l.type==="error"?"Error":"Success",variant:l.type,children:l.message}):null,Jy=({provider:l,onSubmit:r})=>{const[c,i]=b.useState({}),[d,p]=b.useState(!1),m=x=>{i(g=>({...g,[x.target.name]:x.target.value}))},f=async x=>{x.preventDefault(),p(!0),await r(c),p(!1)};return o.jsx("form",{onSubmit:f,children:o.jsxs(D,{gap:"1rem",children:[Object.entries(l.credentials).map(([x,g])=>o.jsx(re,{name:x,type:g.type,label:g.label,placeholder:g.placeholder,onChange:m,required:!0},x)),o.jsx(be,{type:"submit",variant:"primary",disabled:d,children:d?o.jsx(zl,{size:20}):`Sign in with ${l.name}`})]})})},ev=({provider:l,onSubmit:r})=>{const[c,i]=b.useState(""),[d,p]=b.useState(!1),m=async f=>{f.preventDefault(),p(!0),await r({email:c}),p(!1)};return o.jsx("form",{onSubmit:m,children:o.jsxs(D,{gap:"1rem",children:[o.jsx(re,{name:"email",type:"email",label:"Email Address",placeholder:"you@example.com",onChange:f=>i(f.target.value),required:!0}),o.jsx(be,{type:"submit",variant:"primary",disabled:d,children:d?o.jsx(zl,{size:20}):"Send Magic Link"})]})})},tv={google:Of,github:Hf},nv=({providers:l,signIn:r,title:c="Sign In",subtitle:i,className:d})=>{const{theme:p}=_(),[m,f]=b.useState(null),[x,g]=b.useState(null),v=b.useMemo(()=>l.filter(k=>k.type==="oauth"),[l]),C=b.useMemo(()=>l.find(k=>k.type==="credentials"),[l]),A=b.useMemo(()=>l.find(k=>k.type==="magiclink"),[l]),j=async(k,z)=>{g(k),f(null);try{const B=await r(k,z);B&&(B.error?f({type:"error",message:B.error}):B.success&&f({type:"success",message:B.success}))}catch(B){f({type:"error",message:B.message||"An unknown error occurred."})}finally{g(null)}};return o.jsx(gt,{className:d,style:{maxWidth:"400px",margin:"0 auto"},children:o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{gap:"0.25rem",style:{textAlign:"center"},children:[o.jsx(T,{as:"h1",size:"1.5rem",weight:"600",children:c}),i&&o.jsx(T,{color:p.colors.textSecondary,children:i})]}),o.jsx(Wy,{alert:m}),v.length>0&&o.jsx(D,{gap:"1rem",children:v.map(k=>{const z=tv[k.id];return o.jsxs(be,{variant:"secondary",onClick:()=>j(k.id),disabled:!!x,children:[x===k.id?o.jsx(zl,{size:20}):z&&o.jsx(Le,{as:z,size:20}),o.jsxs("span",{children:["Sign in with ",k.name]})]},k.id)})}),v.length>0&&(C||A)&&o.jsxs(D,{direction:"row",align:"center",gap:"1rem",children:[o.jsx(to,{}),o.jsx(T,{size:"0.75rem",color:p.colors.textSecondary,children:"OR"}),o.jsx(to,{})]}),C&&o.jsx(Jy,{provider:C,onSubmit:k=>j(C.id,k)}),A&&o.jsx(ev,{provider:A,onSubmit:k=>j(A.id,k)})]})})},Gf=({ratio:l=16/9,children:r,className:c="",...i})=>{const d=Y("aspect-ratio"),p=d({position:"relative",width:"100%","&::before":{content:'""',display:"block",paddingBottom:`${100/l}%`}}),m=d({position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center","& > *":{width:"100%",height:"100%",objectFit:"cover"}});return o.jsx(wl,{className:`${p} ${c}`,...i,children:o.jsx("div",{className:m,children:r})})},fu=b.createContext(null),To=()=>{const l=b.useContext(fu);if(!l)throw new Error("useAudio must be used within an Audio provider");return l},nf=[{freq:100,gain:0,q:1,type:"lowshelf"},{freq:1e3,gain:0,q:1,type:"peaking"},{freq:1e4,gain:0,q:1,type:"highshelf"}],gu=({children:l,className:r})=>{const c=b.useRef(null),[i,d]=b.useState(!1),[p,m]=b.useState(0),[f,x]=b.useState(0),[g,v]=b.useState(nf),C=b.useRef(null),A=b.useRef(null),j=b.useRef([]),k=b.useRef(null),z=b.useRef(!1),B=()=>{if(z.current||!c.current)return;const G=new(window.AudioContext||window.webkitAudioContext);C.current=G;const Q=G.createMediaElementSource(c.current);A.current=Q;const ue=nf.map(xe=>{const De=G.createBiquadFilter();return De.type=xe.type,De.frequency.value=xe.freq,De.gain.value=xe.gain,De.Q.value=xe.q,De});j.current=ue;const J=G.createAnalyser();J.fftSize=256,k.current=J;let ae=Q;ue.forEach(xe=>{ae.connect(xe),ae=xe}),ae.connect(J),J.connect(G.destination),z.current=!0,v([...g])},I=()=>{C.current&&C.current.state==="suspended"&&C.current.resume(),z.current||B();const G=c.current;G&&(G.paused?G.play():G.pause())},V=G=>{c.current&&(c.current.currentTime=G)};b.useEffect(()=>{const G=c.current;if(!G)return;const Q=()=>d(!0),ue=()=>d(!1),J=()=>m(G.currentTime),ae=()=>x(G.duration);return G.addEventListener("play",Q),G.addEventListener("pause",ue),G.addEventListener("timeupdate",J),G.addEventListener("loadedmetadata",ae),()=>{G.removeEventListener("play",Q),G.removeEventListener("pause",ue),G.removeEventListener("timeupdate",J),G.removeEventListener("loadedmetadata",ae)}},[]),b.useEffect(()=>{z.current&&g.forEach((G,Q)=>{j.current[Q]&&(j.current[Q].gain.value=G.gain)})},[g]);const K={audioRef:c,isPlaying:i,currentTime:p,duration:f,togglePlay:I,seek:V,eqBands:g,setEqBands:v,analyserNode:k.current,isGraphReady:z.current};return o.jsx(fu.Provider,{value:K,children:o.jsx("div",{className:r,children:l})})},D=({direction:l="column",gap:r="1rem",align:c,justify:i,wrap:d=!1,className:p="",children:m,...f})=>{const g=Y("stack")({display:"flex",flexDirection:l,gap:r,alignItems:c,justifyContent:i,flexWrap:d?"wrap":"nowrap"});return o.jsx("div",{className:`${g} ${p}`,...f,children:m})},be=({variant:l="primary",className:r="",children:c,...i})=>{const{theme:d,mode:p}=_(),m=Y("button"),f=p!=="light",x=m({padding:"0.5rem 1rem",borderRadius:"0.375rem",fontWeight:"500",display:"inline-grid",gridAutoFlow:"column",alignItems:"center",justifyContent:"center",gap:"0.5rem",transition:"all 0.2s",border:"1px solid transparent","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(8px)"},"&:disabled":{cursor:"not-allowed",opacity:.6},"&:focus":{outline:"none"}}),g={primary:m({backgroundColor:d.colors.primary,color:f?"#172554":"#fff","&:hover:not(:disabled)":{filter:f?"brightness(1.2)":"brightness(0.9)"},"&:focus-visible":{boxShadow:`0 0 0 2px ${d.colors.background}, 0 0 0 4px ${d.colors.primary}`}}),secondary:m({backgroundColor:d.colors.border,color:d.colors.text,"&:hover:not(:disabled)":{backgroundColor:f?d.colors.secondary:"#d1d5db"},"&:focus-visible":{boxShadow:`0 0 0 2px ${d.colors.background}, 0 0 0 4px ${d.colors.secondary}`}}),accent:m({backgroundColor:d.colors.accent,color:"#fff","&:hover:not(:disabled)":{filter:"brightness(0.9)"},"&:focus-visible":{boxShadow:`0 0 0 2px ${d.colors.background}, 0 0 0 4px ${d.colors.accent}`}})};return o.jsx("button",{className:`${x} ${g[l]} ${r}`,...i,children:c})},Xe=({value:l,onChange:r,min:c=0,max:i=100,step:d=1,disabled:p=!1,showValue:m=!1,className:f="",color:x})=>{const{theme:g}=_(),v=Y("slider"),[C,A]=b.useState(!1),j=b.useRef(null),k=x||g.colors.primary,z=ae=>"touches"in ae&&ae.touches.length>0?ae.touches[0].clientX:ae.clientX,B=b.useCallback(ae=>{if(p||!j.current)return;const xe=z(ae),De=j.current.getBoundingClientRect(),$e=(Math.max(0,Math.min(1,(xe-De.left)/De.width))*(i-c)+c-c)/d,he=Math.round($e)*d+c;r(Math.max(c,Math.min(i,he)))},[p,c,i,d,r]),I=ae=>{p||(B(ae),A(!0))};b.useEffect(()=>{if(C){const ae=De=>B(De),xe=()=>A(!1);return document.addEventListener("mousemove",ae),document.addEventListener("touchmove",ae),document.addEventListener("mouseup",xe),document.addEventListener("touchend",xe),()=>{document.removeEventListener("mousemove",ae),document.removeEventListener("touchmove",ae),document.removeEventListener("mouseup",xe),document.removeEventListener("touchend",xe)}}},[C,B]);const V=ae=>{if(p)return;let xe=l;if(ae.key==="ArrowRight"||ae.key==="ArrowUp")xe=l+d;else if(ae.key==="ArrowLeft"||ae.key==="ArrowDown")xe=l-d;else return;ae.preventDefault(),r(Math.max(c,Math.min(i,xe)))},K=v({position:"relative",width:"100%",padding:`${g.spacing.md} ${g.spacing.sm}`,userSelect:"none"}),G=v({height:"2px",backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",position:"relative",cursor:p?"not-allowed":"pointer",opacity:p?.5:1}),Q=v({position:"absolute",left:0,top:0,height:"100%",backgroundColor:k,borderRadius:"2px",width:`${(l-c)/(i-c)*100}%`,boxShadow:`0 0 10px ${k}`,transition:C?"none":"width 0.1s ease",pointerEvents:"none"}),ue=v({width:"16px",height:"16px",backgroundColor:"rgba(0, 0, 0, 0.8)",border:`2px solid ${k}`,borderRadius:"50%",position:"absolute",top:"50%",left:`${(l-c)/(i-c)*100}%`,transform:"translate(-50%, -50%)",cursor:p?"not-allowed":"grab",boxShadow:`0 0 10px ${k}`,transition:C?"none":"all 0.2s ease","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(4px)"},"&:hover":p?void 0:{transform:"translate(-50%, -50%) scale(1.2)",boxShadow:`0 0 15px ${k}`},"&:active":p?void 0:{cursor:"grabbing",transform:"translate(-50%, -50%) scale(0.95)"},"&:focus":{outline:"none",transform:"translate(-50%, -50%) scale(1.2)",boxShadow:`0 0 0 2px ${g.colors.background}, 0 0 0 4px ${k}`}}),J=v({position:"absolute",top:"-24px",left:`${(l-c)/(i-c)*100}%`,transform:"translateX(-50%)",backgroundColor:"rgba(0, 0, 0, 0.8)",color:k,padding:"2px 6px",borderRadius:"4px",fontSize:"12px",pointerEvents:"none",opacity:C||m?1:0,transition:"opacity 0.2s ease, left 0.1s ease","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(4px)"}});return o.jsx("div",{className:`${K} ${f}`,children:o.jsxs("div",{ref:j,className:G,onMouseDown:I,onTouchStart:I,children:[o.jsx("div",{className:Q}),o.jsx("div",{className:ue,onKeyDown:V,onMouseDown:ae=>{ae.stopPropagation(),I(ae)},onTouchStart:ae=>{ae.stopPropagation(),I(ae)},tabIndex:p?-1:0,role:"slider","aria-valuenow":l,"aria-valuemin":c,"aria-valuemax":i,"aria-disabled":p,"aria-orientation":"horizontal"}),(m||C)&&o.jsx("div",{className:J,children:l})]})})},ov=l=>{if(isNaN(l))return"0:00";const r=Math.floor(l/60),c=Math.floor(l%60).toString().padStart(2,"0");return`${r}:${c}`},Vf=({className:l})=>{const{currentTime:r}=To();return o.jsx(T,{as:"span",className:l,children:ov(r)})},av=l=>{if(isNaN(l)||l===0)return"0:00";const r=Math.floor(l/60),c=Math.floor(l%60).toString().padStart(2,"0");return`${r}:${c}`},qf=({className:l})=>{const{duration:r}=To();return o.jsx(T,{as:"span",className:l,children:av(r)})},Le=({as:l,size:r="1em",className:c="",...i})=>{const d=Y("icon"),{theme:p}=_(),m=d({display:"inline-flex",alignItems:"center",justifyContent:"center",color:"inherit"}),f=l,x=`${m} ${c}`,g={width:r,height:r};return o.jsx("span",{className:x,style:g,children:o.jsx(f,{...i})})},xu=({className:l})=>{const{isPlaying:r,togglePlay:c,currentTime:i,duration:d,seek:p}=To(),{theme:m}=_(),x=Y("audio-controls")({padding:`${m.spacing.sm} ${m.spacing.md}`,display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center",gap:m.spacing.md});return o.jsxs("div",{className:`${x} ${l}`,children:[o.jsx(be,{variant:"secondary",onClick:c,style:{padding:"0.5rem"},"aria-label":r?"Pause":"Play",disabled:d===0,children:o.jsx(Le,{as:r?hu:uu,size:20})}),o.jsxs(D,{direction:"row",align:"center",gap:m.spacing.sm,children:[o.jsx(Vf,{}),o.jsx(Xe,{min:0,max:d||100,value:i,onChange:p,disabled:d===0}),o.jsx(qf,{})]})]})},bu=l=>o.jsx("source",{...l}),gt=({title:l,children:r,className:c="",variant:i="default",onClick:d,style:p})=>{const{theme:m}=_(),f=Y("card"),x=f({padding:m.spacing.md,borderRadius:"6px",backgroundColor:m.colors.backgroundSecondary,border:`1px solid ${m.colors.border}`,height:"100%",transition:"all 0.3s ease",cursor:d?"pointer":"default","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"},"&:hover":{transform:"translateY(-4px)",borderColor:"rgba(255, 255, 255, 0.25)",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.5)"},"&:focus-visible":d?{outline:`2px solid ${m.colors.primary}`,outlineOffset:"2px"}:{}}),g=l&&f({fontSize:m.typography.fontSizes.base,fontWeight:String(m.typography.fontWeights.semibold),marginBottom:m.spacing.md,color:m.colors.text}),C=d?{role:"button",tabIndex:0,onKeyDown:A=>{d&&(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),d(A))}}:{};return o.jsxs("div",{className:`${x} ${c}`,style:p,onClick:d?A=>d(A):void 0,...C,children:[l&&o.jsx("h3",{className:g,children:l}),r]})},lv=["Bass Boost","Mid","Treble"],Yf=()=>{const{eqBands:l,setEqBands:r,isGraphReady:c}=To();if(!c)return o.jsx(T,{size:"12px",color:"textSecondary",style:{textAlign:"center",padding:"1rem"},children:"Play audio to enable effects."});const i=(d,p)=>{r(m=>m.map((f,x)=>x===d?{...f,gain:p}:f))};return o.jsx(gt,{children:o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{weight:"600",style:{textAlign:"center"},children:"Equalizer"}),l.map((d,p)=>o.jsxs(D,{gap:"0.25rem",children:[o.jsx(T,{as:"span",size:"14px",children:lv[p]||`${d.freq} Hz`}),o.jsx(Xe,{value:d.gain,onChange:m=>i(p,m),min:-12,max:12,step:1,showValue:!0})]},d.freq))]})})},yu=({className:l="",children:r,...c})=>{const{audioRef:i}=To(),p=Y("audio-view")({display:"none"});return o.jsxs("audio",{ref:i,className:`${p} ${l}`,...c,children:[r,"Your browser does not support the audio element."]})},vu=({className:l})=>{const{analyserNode:r,isPlaying:c}=To(),i=b.useRef(null),d=b.useRef(void 0),{theme:p}=_(),f=Y("audio-visualizer")({width:"100%",height:"100px",display:"block"});return b.useEffect(()=>{const x=i.current,g=x?.getContext("2d"),v=()=>{d.current&&cancelAnimationFrame(d.current),g&&g.clearRect(0,0,g.canvas.width,g.canvas.height)};if(!x||!r||!c||!g){v();return}r.fftSize=256;const C=r.frequencyBinCount,A=new Uint8Array(C),j=()=>{d.current=requestAnimationFrame(j),r.getByteFrequencyData(A),g.clearRect(0,0,x.width,x.height);const k=x.width/C*1.5;let z,B=0;for(let I=0;I<C;I++)z=A[I]/2,g.fillStyle=p.colors.primary,g.fillRect(B,x.height-z,k,z),B+=k+2};return j(),v},[r,c,p.colors.primary]),o.jsx("canvas",{ref:i,className:`${f} ${l}`})},Tn=({src:l,alt:r,fallback:c,size:i=40,className:d="",...p})=>{const{theme:m}=_(),f=Y("avatar"),x=f({width:`${i}px`,height:`${i}px`,borderRadius:"50%",display:"inline-flex",alignItems:"center",justifyContent:"center",overflow:"hidden",backgroundColor:m.colors.border,color:m.colors.textSecondary,fontWeight:"500",fontSize:`${i*.45}px`,userSelect:"none"}),g=f({width:"100%",height:"100%",objectFit:"cover"});return o.jsx("div",{className:`${x} ${d}`,...p,children:l?o.jsx("img",{src:l,alt:r,className:g}):o.jsx("span",{children:c})})},Ff=({children:l,max:r=3,className:c=""})=>{const{theme:i}=_(),d=Y("avatar-group"),p=He.Children.toArray(l),m=p.slice(0,r),f=p.length-r,x=d({display:"inline-flex","& > *:not(:first-child)":{marginLeft:"-12px"},"& > *":{border:`2px solid ${i.colors.background}`}}),g=d({backgroundColor:i.colors.secondary,color:i.colors.text});return o.jsxs("div",{className:`${x} ${c}`,children:[m,f>0&&o.jsx(Tn,{fallback:`+${f}`,className:g})]})},sv=(l=!1,r={})=>{const{duration:c=300,delay:i=0,timingFunction:d="ease"}=r,[p,m]=b.useState(l),[f,x]=b.useState(l),g=b.useRef(null);b.useEffect(()=>{m(l)},[l]),b.useEffect(()=>(p?x(!0):g.current=setTimeout(()=>{x(!1)},c),()=>{g.current&&clearTimeout(g.current)}),[p,c]);const v={transition:`opacity ${c}ms ${d} ${i}ms`,opacity:p?1:0},C=b.useCallback(()=>m(!0),[]),A=b.useCallback(()=>m(!1),[]),j=b.useCallback(()=>m(k=>!k),[]);return{isVisible:p,isRendered:f,style:v,show:C,hide:A,toggle:j}},Al=(l=!1,r=300)=>sv(l,{duration:r}),rv=(l=!1,r={})=>{const{direction:c="right",duration:i=300,delay:d=0,timingFunction:p="ease"}=r,[m,f]=b.useState(l),[x,g]=b.useState(l);b.useEffect(()=>{f(l)},[l]),b.useEffect(()=>{if(m)g(!0);else{const z=setTimeout(()=>{g(!1)},i);return()=>clearTimeout(z)}},[m,i]);const v=b.useCallback(()=>{const z="100%";switch(c){case"left":return`translateX(${m?"0":`-${z}`})`;case"right":return`translateX(${m?"0":z})`;case"up":return`translateY(${m?"0":`-${z}`})`;case"down":return`translateY(${m?"0":z})`}},[c,m]),C={transition:`transform ${i}ms ${p} ${d}ms`,transform:v()},A=b.useCallback(()=>f(!0),[]),j=b.useCallback(()=>f(!1),[]),k=b.useCallback(()=>f(z=>!z),[]);return{isVisible:m,isRendered:x,style:C,show:A,hide:j,toggle:k}},Cu=({isOpen:l,onClick:r,className:c=""})=>{const i=Y("backdrop"),{isRendered:d,style:p}=Al(l,200);if(!d)return null;const m=i({position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(16px)",zIndex:40});return o.jsx("div",{className:`${m} ${c}`,style:p,onClick:r})};function Ca(l,r=1){let c;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(l))return c=l.substring(1).split(""),c.length===3&&(c=[c[0],c[0],c[1],c[1],c[2],c[2]]),c="0x"+c.join(""),`rgba(${[c>>16&255,c>>8&255,c&255].join(",")},${r})`;throw new Error("Bad Hex")}function iv(l){if(l.startsWith("#")){const r=l.slice(1),c=parseInt(r,16),i=c>>16&255,d=c>>8&255,p=c&255;return[i,d,p]}if(l.startsWith("rgb")){const r=l.match(/(\d+)/g);if(r&&r.length>=3)return[parseInt(r[0]),parseInt(r[1]),parseInt(r[2])]}return[0,0,0]}const br=({children:l,variant:r="solid",colorScheme:c="primary",className:i="",...d})=>{const{theme:p}=_(),m=Y("badge"),x={primary:p.colors.primary,accent:p.colors.accent,success:"#10b981",error:"#ef4444"}[c],g={solid:{backgroundColor:Ca(x,.2),color:x,border:"1px solid transparent"},outline:{backgroundColor:"transparent",color:x,border:`1px solid ${x}`}},v=m({display:"inline-block",padding:"0.125rem 0.625rem",fontSize:"0.75rem",fontWeight:"500",borderRadius:"999px",lineHeight:"1.25",...g[r]});return o.jsx("span",{className:`${v} ${i}`,...d,children:l})},Sa=({children:l,className:r="",to:c,...i})=>{const{theme:d}=_(),f=`${Y("link")({color:d.colors.primary,textDecoration:"none",transition:"color 0.2s","&:hover":{color:"#93c5fd",textDecoration:"underline"}})} ${r}`;return c?o.jsx("a",{href:c,className:f,...i,children:l}):o.jsx("a",{className:f,...i,children:l})},Xf=({items:l,separator:r="/",className:c=""})=>{const{theme:i}=_(),d=Y("breadcrumbs"),p=d({display:"flex",alignItems:"center",gap:i.spacing.sm}),m=d({color:i.colors.textSecondary});return o.jsx("nav",{"aria-label":"breadcrumb",className:`${p} ${c}`,children:l.map((f,x)=>o.jsxs(He.Fragment,{children:[f.href||f.to?o.jsx(Sa,{href:f.href,to:f.to,children:f.label}):o.jsx(T,{as:"span",color:i.colors.textSecondary,children:f.label}),x<l.length-1&&o.jsx("span",{className:m,"aria-hidden":"true",children:r})]},x))})},Su=({isAttached:l,className:r,children:c,...i})=>{const d=Y("button-group"),p=l?d({"& > button:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"& > button:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0,borderRight:0}}):"";return o.jsx(D,{direction:"row",gap:l?"0":"0.5rem",className:`${p} ${r}`,...i,children:c})},Kf=({value:l,onChange:r})=>{const{theme:c}=_(),i=Y("calendar"),[d,p]=b.useState(l||new Date),m=i({padding:c.spacing.md,backgroundColor:c.colors.backgroundSecondary,borderRadius:"8px",width:"300px",border:`1px solid ${c.colors.border}`,"@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"}}),f=i({display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:c.spacing.md}),x=i({display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:c.spacing.sm,textAlign:"center"}),g=i({fontSize:"12px",color:c.colors.textSecondary,fontWeight:500}),v=i({width:"32px",height:"32px",borderRadius:"50%",border:"none",background:"transparent",color:c.colors.text,cursor:"pointer",transition:"all 0.2s","&:hover":{backgroundColor:c.colors.border},'&[data-selected="true"]':{backgroundColor:c.colors.primary,color:"#fff"}}),C=new Date(d.getFullYear(),d.getMonth(),1),A=new Date(d.getFullYear(),d.getMonth()+1,0),j=C.getDay(),k=A.getDate(),z=Array.from({length:j},(I,V)=>o.jsx("div",{},`empty-${V}`));for(let I=1;I<=k;I++){const V=new Date(d.getFullYear(),d.getMonth(),I),K=l&&V.toDateString()===l.toDateString();z.push(o.jsx("button",{onClick:()=>r(V),className:v,"data-selected":K,children:I},I))}const B=I=>{p(new Date(d.getFullYear(),d.getMonth()+I,1))};return o.jsxs("div",{className:m,children:[o.jsxs("div",{className:f,children:[o.jsx(be,{variant:"secondary",onClick:()=>B(-1),style:{padding:"4px"},children:"<"}),o.jsx(T,{weight:"600",children:d.toLocaleString("default",{month:"long",year:"numeric"})}),o.jsx(be,{variant:"secondary",onClick:()=>B(1),style:{padding:"4px"},children:">"})]}),o.jsxs("div",{className:x,children:[["S","M","T","W","T","F","S"].map(I=>o.jsx("div",{className:g,children:I},I)),z]})]})},yr=({direction:l,align:r,justify:c,wrap:i,gap:d,as:p="div",className:m,...f})=>{const v=[Y("flex")({display:"flex",flexDirection:l,alignItems:r,justifyContent:c,flexWrap:i,gap:d}),m].filter(Boolean).join(" ");return He.createElement(p,{...f,className:v})},ko=l=>o.jsx(yr,{align:"center",justify:"center",...l}),cv=({marginTop:l=40,marginRight:r=30,marginBottom:c=50,marginLeft:i=60,children:d,className:p="",style:m})=>{const f=b.useRef(null),[x,g]=b.useState(0),[v,C]=b.useState(0);b.useEffect(()=>{if(!f.current)return;const j=f.current.getBoundingClientRect();g(j.width),C(j.height);const k=new ResizeObserver(([z])=>{z&&(g(z.contentRect.width),C(z.contentRect.height))});return k.observe(f.current),()=>k.disconnect()},[]);const A=b.useMemo(()=>{const j=Math.max(0,x-i-r),k=Math.max(0,v-l-c);return{width:x,height:v,marginTop:l,marginRight:r,marginBottom:c,marginLeft:i,boundedWidth:j,boundedHeight:k}},[x,v,l,r,c,i]);return o.jsx("div",{ref:f,className:p,style:{width:"100%",height:"100%",minHeight:"300px",...m},children:x>0&&v>0&&d(A)})},Qf=b.createContext(null),lr=(l,r)=>{const c=i=>{if(l[1]===l[0])return r[0];const d=(i-l[0])/(l[1]-l[0]);return r[0]+d*(r[1]-r[0])};return c.invert=i=>{if(r[1]===r[0])return l[0];const d=(i-r[0])/(r[1]-r[0]);return l[0]+d*(l[1]-l[0])},c.domain=()=>l,c},uv=({dataset:l,xAxis:r,series:c,dimensions:i,children:d})=>{const p=b.useMemo(()=>C=>C[r[0].dataKey],[r]),m=b.useMemo(()=>{if(!l||l.length===0)return[0,1];const C=l.map(p);return[Math.min(...C),Math.max(...C)]},[l,p]),f=b.useMemo(()=>{if(!l||l.length===0||c.length===0)return[0,1];const C=c.flatMap(k=>l.map(z=>z[k.dataKey]));if(C.length===0)return[0,1];const A=Math.min(...C),j=Math.max(...C);return[A,j===A?A+1:j]},[l,c]),x=b.useMemo(()=>lr(m,[0,i.boundedWidth]),[m,i.boundedWidth]),g=b.useMemo(()=>lr(f,[i.boundedHeight,0]),[f,i.boundedHeight]),v={dataset:l,xAccessor:p,xScale:x,yScale:g,dimensions:i};return o.jsx(Qf.Provider,{value:v,children:d})},Rl=()=>{const l=b.useContext(Qf);if(!l)throw new Error("useCharts must be used within a ChartsProvider");return l},Zf=({color:l,strokeWidth:r=2,yAccessor:c})=>{const{dataset:i,xAccessor:d,xScale:p,yScale:m}=Rl(),{theme:f}=_();if(!i||i.length===0)return null;const x=i.map((g,v)=>{const C=p(d(g,v)),A=m(c(g,v));return`${v===0?"M":"L"} ${C.toFixed(2)},${A.toFixed(2)}`}).join(" ");return o.jsx("path",{d:x,fill:"none",stroke:l||f.colors.primary,strokeWidth:r,style:{vectorEffect:"non-scaling-stroke"}})},Wf=({color:l,opacity:r=.3,yAccessor:c})=>{const{dataset:i,xAccessor:d,xScale:p,yScale:m,dimensions:f}=Rl(),{theme:x}=_();if(!i||i.length<2)return null;const g=l||x.colors.primary,v=[...i.map((C,A)=>{const j=p(d(C,A)),k=m(c(C,A));return`${A===0?"M":"L"} ${j.toFixed(2)},${k.toFixed(2)}`}),`L ${p(d(i[i.length-1],i.length-1)).toFixed(2)},${f.boundedHeight}`,`L ${p(d(i[0],0)).toFixed(2)},${f.boundedHeight}`,"Z"].join(" ");return o.jsx("path",{d:v,fill:Ca(g,r),stroke:"none"})},Jf=({color:l,barWidthRatio:r=.6,yAccessor:c})=>{const{dataset:i,xAccessor:d,xScale:p,yScale:m,dimensions:f}=Rl(),{theme:x}=_();if(!i||i.length===0)return null;const g=l||x.colors.primary,v=p.domain(),A=(p(v[1])-p(v[0]))/(i.length>1?i.length-1:1)*r;return o.jsx("g",{children:i.map((j,k)=>{const z=d(j,k),B=c(j,k);if(B==null)return null;const I=p(z),V=m(B),K=f.boundedHeight-V;return o.jsx("rect",{x:I-A/2,y:V,width:A,height:Math.max(0,K),fill:g,rx:"2",ry:"2"},k)})})},Wc=({dataset:l,xAxis:r,series:c,children:i,className:d,style:p})=>o.jsx(cv,{className:d,style:p,children:m=>o.jsx(uv,{dataset:l,xAxis:r,series:c,dimensions:m,children:o.jsx("svg",{width:m.width,height:m.height,children:o.jsxs("g",{transform:`translate(${m.marginLeft}, ${m.marginTop})`,children:[c.map(f=>{const x=g=>g[f.dataKey];switch(f.type){case"line":return o.jsx(Zf,{yAccessor:x,color:f.color},`${f.type}-${f.dataKey}`);case"area":return o.jsx(Wf,{yAccessor:x,color:f.color},`${f.type}-${f.dataKey}`);case"bar":return o.jsx(Jf,{yAccessor:x,color:f.color},`${f.type}-${f.dataKey}`);default:return null}}),i]})})})}),of=(l,r)=>{if(l[0]===l[1])return[l[0]];const[c,i]=l;if(r<2)return[c];const d=(i-c)/(r-1);return d===0?[c]:Array.from({length:r},(p,m)=>c+m*d)},Sl=({dimension:l,label:r,numberOfTicks:c=5})=>{const{xScale:i,yScale:d,dimensions:p}=Rl(),{theme:m}=_();if(l==="x"){const f=of(i.domain(),c);return o.jsxs("g",{transform:`translate(0, ${p.boundedHeight})`,children:[o.jsx("line",{x1:0,x2:p.boundedWidth,y1:0,y2:0,stroke:m.colors.border}),f.map((x,g)=>o.jsxs("g",{transform:`translate(${i(x)}, 0)`,children:[o.jsx("line",{y2:6,stroke:m.colors.textSecondary}),o.jsx("text",{style:{fill:m.colors.textSecondary,fontSize:"10px",textAnchor:"middle"},y:20,children:x.toLocaleString()})]},g)),r&&o.jsx("text",{style:{fill:m.colors.text,fontSize:"12px",textAnchor:"middle"},x:p.boundedWidth/2,y:p.marginBottom-10,children:r})]})}else{const f=of(d.domain(),c);return o.jsxs("g",{children:[o.jsx("line",{y1:0,y2:p.boundedHeight,x1:0,x2:0,stroke:m.colors.border}),f.map((x,g)=>o.jsxs("g",{transform:`translate(0, ${d(x)})`,children:[o.jsx("line",{x2:-6,stroke:m.colors.textSecondary}),o.jsx("text",{style:{fill:m.colors.textSecondary,fontSize:"10px",textAnchor:"end",dominantBaseline:"middle"},x:-10,children:x.toLocaleString()})]},g)),r&&o.jsx("text",{style:{fill:m.colors.text,fontSize:"12px",textAnchor:"middle"},transform:`translate(${-p.marginLeft+20}, ${p.boundedHeight/2}) rotate(-90)`,children:r})]})}},eg=({data:l,rowLabels:r,colLabels:c,className:i=""})=>{const{theme:d}=_();if(!l.length||!l[0].length)return null;const p=l.length,m=l[0].length,f=Math.max(...l.flat()),x=d.colors.primary,g=30,v=20,C=40,A=20,j=m*g,k=p*v,z=j+C,B=k+A;return o.jsx("div",{className:i,style:{display:"grid",placeItems:"center"},children:o.jsxs("svg",{width:z,height:B,children:[c.map((I,V)=>o.jsx("text",{x:C+V*g+g/2,y:B-5,textAnchor:"middle",fontSize:"12",fill:d.colors.textSecondary,children:I},`col-${V}`)),r.map((I,V)=>o.jsx("text",{x:C-8,y:V*v+v/2,textAnchor:"end",alignmentBaseline:"middle",fontSize:"12",fill:d.colors.textSecondary,children:I},`row-${V}`)),o.jsx("g",{transform:`translate(${C}, 0)`,children:l.map((I,V)=>I.map((K,G)=>o.jsx("rect",{x:G*g,y:V*v,width:g-2,height:v-2,fill:Ca(x,K/f),rx:"2",ry:"2"},`${V}-${G}`)))})]})})},tg=({data:l,size:r=300,maxValue:c,className:i="",gridLevels:d=5})=>{const{theme:p}=_();if(!l||l.length===0||!l[0].values||l[0].values.length===0)return null;const m=l[0].values.map(z=>z.axis),f=m.length,x=Math.PI*2/f,g=r/2,v=g*.75,C=c||Math.max(...l.flatMap(z=>z.values.map(B=>B.value))),A=()=>o.jsxs("g",{className:"radar-grid",children:[Array.from({length:d}).map((z,B)=>{const I=v*((B+1)/d),V=Array.from({length:f}).map((K,G)=>{const Q=x*G-Math.PI/2,ue=g+I*Math.cos(Q),J=g+I*Math.sin(Q);return`${ue.toFixed(2)},${J.toFixed(2)}`}).join(" ");return o.jsx("polygon",{points:V,stroke:p.colors.border,strokeWidth:"1",fill:"none"},`grid-level-${B}`)}),m.map((z,B)=>{const I=x*B-Math.PI/2,V=g+v*Math.cos(I),K=g+v*Math.sin(I);return o.jsx("line",{x1:g,y1:g,x2:V,y2:K,stroke:p.colors.border,strokeWidth:"1"},`spoke-${B}`)})]}),j=()=>o.jsx("g",{className:"radar-labels",children:m.map((z,B)=>{const I=x*B-Math.PI/2,V=v*1.15,K=g+V*Math.cos(I),G=g+V*Math.sin(I);return o.jsx("text",{x:K,y:G,textAnchor:Math.abs(K-g)<1?"middle":K>g?"start":"end",dominantBaseline:"middle",fontSize:"12px",fill:p.colors.textSecondary,children:z},`label-${B}`)})}),k=()=>o.jsx("g",{className:"radar-data",children:l.map((z,B)=>{const I=z.values.map((V,K)=>{const G=V.value/C*v,Q=x*K-Math.PI/2,ue=g+G*Math.cos(Q),J=g+G*Math.sin(Q);return`${ue.toFixed(2)},${J.toFixed(2)}`}).join(" ");return o.jsx("polygon",{points:I,stroke:z.color,strokeWidth:"2",fill:Ca(z.color,.25),style:{transition:"all 0.3s"}},`series-${B}`)})});return o.jsx("div",{className:i,style:{width:r,height:r,display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsxs("svg",{width:r,height:r,children:[A(),k(),j()]})})},af=(l,r,c,i)=>{const d=(i-180)*Math.PI/180;return{x:l+c*Math.cos(d),y:r+c*Math.sin(d)}},dv=(l,r,c,i,d)=>{const p=af(l,r,c,d),m=af(l,r,c,i),f=d-i<=180?"0":"1";return`M ${p.x} ${p.y} A ${c} ${c} 0 ${f} 0 ${m.x} ${m.y}`},ng=({data:l,size:r=150,strokeWidth:c=20,className:i=""})=>{const{theme:d}=_(),p=Y("chart-radial"),m=l.reduce((j,k)=>j+k.value,0),f=(r-c)/2,x=r/2;let g=0;const v=p({display:"grid",justifyItems:"center",gap:d.spacing.md,width:`${r}px`}),C=p({display:"grid",gridAutoFlow:"column",alignItems:"center",justifyContent:"center",gap:d.spacing.md}),A=p({display:"grid",gridAutoFlow:"column",alignItems:"center",gap:d.spacing.sm});return o.jsxs("div",{className:`${v} ${i}`,children:[o.jsx("svg",{width:r,height:r/2+c,viewBox:`0 0 ${r} ${r}`,children:o.jsx("g",{transform:`translate(0, ${r/2})`,children:l.map((j,k)=>{const z=j.value/m*180,B=g+z,I=dv(x,x,f,g,B);return g=B,o.jsx("path",{d:I,fill:"none",stroke:j.color,strokeWidth:c},k)})})}),o.jsx("div",{className:C,children:l.map(j=>o.jsxs("div",{className:A,children:[o.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",backgroundColor:j.color}}),o.jsx("span",{style:{fontSize:"12px",color:d.colors.textSecondary},children:j.label})]},j.label))})]})},Qs=({data:l,xAccessor:r,yAccessor:c,width:i="100%",height:d=50,color:p,strokeWidth:m=1.5,className:f="",style:x})=>{const{theme:g}=_();if(!l||l.length<2)return o.jsx("div",{style:{width:i,height:d,...x},className:f,"aria-label":"Sparkline chart placeholder"});const v=100,C=30,A=[Math.min(...l.map(r)),Math.max(...l.map(r))],j=[Math.min(...l.map(c)),Math.max(...l.map(c))],k=j[1]-j[0],z=k>0?[j[0]-k*.1,j[1]+k*.1]:[j[0]-1,j[1]+1],B=lr(A,[0,v]),I=lr(z,[C,0]),V=p||g.colors.primary,K=l.map((ue,J)=>{const ae=B(r(ue,J)),xe=I(c(ue,J));return`${J===0?"M":"L"}${ae.toFixed(2)},${xe.toFixed(2)}`}).join(" "),G=[K,`L${v},${C}`,`L0,${C}`,"Z"].join(" "),Q={x:B(r(l[l.length-1],l.length-1)),y:I(c(l[l.length-1],l.length-1))};return o.jsxs("svg",{width:i,height:d,viewBox:`0 0 ${v} ${C}`,preserveAspectRatio:"none",className:f,style:x,"aria-label":`Sparkline chart showing trend from ${c(l[0],0)} to ${c(l[l.length-1],l.length-1)}`,role:"img",children:[o.jsx("path",{d:G,fill:Ca(V,.1),stroke:"none"}),o.jsx("path",{d:K,fill:"none",stroke:V,strokeWidth:m,strokeLinejoin:"round",strokeLinecap:"round",style:{vectorEffect:"non-scaling-stroke"}}),o.jsx("circle",{cx:Q.x,cy:Q.y,r:m*1.2,fill:V,stroke:"none"})]})};var Nl=mf();const og=({children:l,style:r,className:c=""})=>{const{theme:i}=_(),p=Y("tooltip")({position:"fixed",padding:`${i.spacing.sm} ${i.spacing.md}`,backgroundColor:"rgba(20, 20, 20, 0.8)",backdropFilter:"blur(8px)",border:`1px solid ${i.colors.border}`,borderRadius:"6px",color:i.colors.text,fontSize:i.typography.fontSizes.sm,boxShadow:"0 4px 12px rgba(0,0,0,0.5)",pointerEvents:"none",zIndex:1e3,transition:"opacity 0.2s, transform 0.2s",whiteSpace:"nowrap"});return o.jsx("div",{className:`${p} ${c}`,style:r,children:l})},ag=({series:l,formatX:r=i=>i.toString(),formatY:c=i=>i.toLocaleString()})=>{const{dataset:i,xScale:d,yScale:p,dimensions:m,xAccessor:f}=Rl(),{theme:x}=_(),[g,v]=b.useState(null),C=k=>{if(!i||i.length===0)return;const{left:z}=k.currentTarget.getBoundingClientRect(),B=k.clientX-z-m.marginLeft,I=d.invert(B);let V=i[0],K=Math.abs(f(i[0],0)-I);for(let G=1;G<i.length;G++){const Q=Math.abs(f(i[G],G)-I);Q<K&&(K=Q,V=i[G])}v({point:V,x:k.clientX,y:k.clientY})},A=()=>{v(null)},j=g?d(f(g.point,0)):null;return o.jsxs("g",{children:[o.jsx("rect",{x:0,y:0,width:m.boundedWidth,height:m.boundedHeight,fill:"transparent",onMouseMove:C,onMouseLeave:A}),g&&j!==null&&o.jsxs(o.Fragment,{children:[o.jsx("line",{x1:j,x2:j,y1:0,y2:m.boundedHeight,stroke:x.colors.border,strokeWidth:1,strokeDasharray:"3 3",pointerEvents:"none"}),l.map(({key:k,color:z,accessor:B})=>{const I=B(g.point);return I==null?null:o.jsx("circle",{cx:j,cy:p(I),r:4,fill:z,stroke:x.colors.background,strokeWidth:2,pointerEvents:"none"},k)}),Nl.createPortal(o.jsxs(og,{style:{top:g.y,left:g.x,transform:`translate(${g.x>window.innerWidth/2?"-110%":"10%"}, -50%)`},children:[o.jsx("div",{style:{marginBottom:"0.5rem",fontWeight:"600",color:x.colors.text},children:r(f(g.point,0))}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"auto auto auto",gap:"0.25rem 1rem",alignItems:"center"},children:l.map(({key:k,label:z,color:B,accessor:I})=>o.jsxs(He.Fragment,{children:[o.jsx("div",{style:{width:"10-px",height:"10px",backgroundColor:B,borderRadius:"50%"}}),o.jsxs("span",{style:{color:x.colors.textSecondary},children:[z,":"]}),o.jsx("span",{style:{fontWeight:"500",textAlign:"right"},children:c(I(g.point))})]},k))})]}),document.body)]})]})},Ke=({label:l,id:r,className:c="",checked:i,disabled:d,...p})=>{const{theme:m}=_(),f=Y("checkbox"),x=f({display:"grid",gridTemplateColumns:"auto 1fr",gap:m.spacing.sm,alignItems:"center",cursor:d?"not-allowed":"pointer",userSelect:"none",opacity:d?.6:1}),g=f({width:"18px",height:"18px",border:"2px solid",borderRadius:"4px",display:"grid",placeContent:"center",transition:"all 0.2s",backgroundColor:i?m.colors.primary:"transparent",borderColor:i?m.colors.primary:m.colors.border}),v=f({position:"absolute",opacity:0,height:0,width:0,"&:focus-visible + div":{boxShadow:`0 0 0 2px ${m.colors.background}, 0 0 0 4px ${m.colors.primary}`}});return o.jsxs("label",{htmlFor:r,className:`${x} ${c}`,children:[o.jsx("input",{type:"checkbox",id:r,checked:i,disabled:d,...p,className:v}),o.jsx("div",{className:g,children:i&&o.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:m.colors.background,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("polyline",{points:"20 6 9 17 4 12"})})}),l&&o.jsx("span",{style:{color:m.colors.text},children:l})]})},lg=({children:l,className:r="",...c})=>{const{theme:i}=_(),p=Y("code")({fontFamily:"monospace",fontSize:"0.875em",backgroundColor:"rgba(255, 255, 255, 0.1)",padding:"0.125em 0.3em",borderRadius:"4px",color:i.colors.text});return o.jsx("code",{className:`${p} ${r}`,...c,children:l})},pv={keyword:"#c792ea",tag:"#f07178",punctuation:"#89ddff",attribute:"#ffcb6b",string:"#c3e88d",comment:"#546e7a",number:"#f78c6c",default:"inherit"},mv=l=>{const r=[{type:"comment",regex:/\/\*[\s\S]*?\*\/|\/\/.*/g},{type:"string",regex:/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*`|`(?:\\.|[^`\\])*`/g},{type:"tag",regex:/<\/?([A-Z][a-zA-Z0-9]*)/g},{type:"keyword",regex:/\b(import|from|export|const|let|var|return|=>|if|else|new|React|useState|useEffect|type|interface|extends)\b/g},{type:"attribute",regex:/([a-zA-Z0-9]+)=/g},{type:"number",regex:/\b\d+\b/g},{type:"punctuation",regex:/[{}()[\].,:;]/g},{type:"tag",regex:/[<>]/g}],c=[];r.forEach(({type:m,regex:f})=>{let x;for(;(x=f.exec(l))!==null;)c.push({type:m,value:x[0],index:x.index})}),c.sort((m,f)=>m.index-f.index);const i=[];let d=0;return c.filter((m,f)=>!(f>0&&m.index<c[f-1].index+c[f-1].value.length)).forEach(m=>{m.index>d&&i.push(l.substring(d,m.index)),i.push(o.jsx("span",{style:{color:pv[m.type]},children:m.value},`${m.index}-${m.type}`)),d=m.index+m.value.length}),d<l.length&&i.push(l.substring(d)),i},sg=({code:l})=>{const c=Y("syntax-highlighter")({margin:0,whiteSpace:"pre-wrap",wordBreak:"break-word"});return o.jsx("pre",{className:c,children:o.jsx("code",{children:mv(l)})})},Jc=({value:l,onChange:r})=>{const{theme:c}=_(),i=Y("code-editor"),d=b.useRef(null),p=b.useRef(null),m=()=>{d.current&&p.current&&(d.current.scrollTop=p.current.scrollTop,d.current.scrollLeft=p.current.scrollLeft)},f={margin:0,padding:"1rem",border:"none",fontFamily:"monospace",fontSize:"13px",lineHeight:"1.5",tabSize:2,MozTabSize:2,whiteSpace:"pre-wrap",wordBreak:"break-word"},x=i({position:"relative",height:"100%",backgroundColor:"rgba(0,0,0,0.3)",borderRadius:"8px"}),g=i({...f,position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"auto",pointerEvents:"none",color:c.colors.text}),v=i({...f,position:"relative",width:"100%",height:"100%",overflow:"auto",background:"transparent",color:"transparent",caretColor:c.colors.text,resize:"none",outline:"none"});return o.jsxs("div",{className:x,children:[o.jsx("textarea",{ref:p,value:l,onChange:C=>r(C.target.value),onScroll:m,className:v,spellCheck:"false",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off"}),o.jsx("div",{ref:d,className:g,children:o.jsx(sg,{code:l})})]})},eu=({in:l,children:r})=>{const c=Y("collapse"),i=b.useRef(null),d=b.useRef(null),p=c({overflow:"hidden",transition:"max-height 0.3s ease-in-out"});return b.useLayoutEffect(()=>{d.current&&i.current&&(d.current.style.maxHeight=l?`${i.current.scrollHeight}px`:"0px")},[l]),o.jsx("div",{ref:d,className:p,children:o.jsx("div",{ref:i,children:r})})},rg=({value:l,onChange:r,className:c=""})=>{const{theme:i}=_(),d=Y("color-picker"),[p,m,f]=iv(l),x=(A,j)=>{const k=[p,m,f];A==="r"&&(k[0]=j),A==="g"&&(k[1]=j),A==="b"&&(k[2]=j);const z=B=>`0${B.toString(16)}`.slice(-2);r(`#${z(k[0])}${z(k[1])}${z(k[2])}`)},g=d({padding:i.spacing.md,backgroundColor:i.colors.backgroundSecondary,borderRadius:"8px",border:`1px solid ${i.colors.border}`,width:"250px","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"}}),v=d({width:"100%",height:"60px",backgroundColor:l,borderRadius:"4px",border:`1px solid ${i.colors.border}`,marginBottom:i.spacing.md}),C=d({width:"100%",fontFamily:"monospace",textAlign:"center",padding:i.spacing.sm,backgroundColor:i.colors.background,border:`1px solid ${i.colors.border}`,color:i.colors.text,borderRadius:"4px"});return o.jsxs("div",{className:`${g} ${c}`,children:[o.jsx("div",{className:v}),o.jsxs(D,{direction:"column",gap:i.spacing.sm,children:[o.jsxs(D,{direction:"row",align:"center",gap:i.spacing.sm,style:{gridTemplateColumns:"auto 1fr"},children:[o.jsx(T,{as:"span",size:"14px",color:"#ef4444",style:{width:"15px"},children:"R"}),o.jsx(Xe,{value:p,onChange:A=>x("r",A),min:0,max:255,color:"#ef4444"})]}),o.jsxs(D,{direction:"row",align:"center",gap:i.spacing.sm,style:{gridTemplateColumns:"auto 1fr"},children:[o.jsx(T,{as:"span",size:"14px",color:"#10b981",style:{width:"15px"},children:"G"}),o.jsx(Xe,{value:m,onChange:A=>x("g",A),min:0,max:255,color:"#10b981"})]}),o.jsxs(D,{direction:"row",align:"center",gap:i.spacing.sm,style:{gridTemplateColumns:"auto 1fr"},children:[o.jsx(T,{as:"span",size:"14px",color:"#3b82f6",style:{width:"15px"},children:"B"}),o.jsx(Xe,{value:f,onChange:A=>x("b",A),min:0,max:255,color:"#3b82f6"})]}),o.jsx("input",{className:C,type:"text",value:l,onChange:A=>r(A.target.value)})]})]})},ig=b.createContext(null),vr=()=>{const l=b.useContext(ig);if(!l)throw new Error("Popper components must be used within a Popper provider.");return l},wo=({children:l,...r})=>{const[c,i]=b.useState(!1),d=b.useRef(null),p=b.useRef(null),m=r.isOpen??c,f=r.setIsOpen??i,x=b.useCallback(()=>{if(d.current&&p.current){const v=d.current.getBoundingClientRect();p.current.style.position="fixed",p.current.style.top=`${v.bottom+4}px`,p.current.style.left=`${v.left}px`}},[]);b.useLayoutEffect(()=>(m&&(x(),window.addEventListener("scroll",x,!0),window.addEventListener("resize",x)),()=>{window.removeEventListener("scroll",x,!0),window.removeEventListener("resize",x)}),[m,x]);const g={isOpen:m,setIsOpen:f,triggerRef:d,popperRef:p,setPosition:x};return o.jsx(ig.Provider,{value:g,children:l})},Ao=({children:l})=>{const{setIsOpen:r,triggerRef:c,setPosition:i}=vr(),d=He.Children.only(l),p=m=>{c.current=m;const f=d.ref;typeof f=="function"?f(m):f&&(f.current=m)};return He.cloneElement(d,{ref:p,onClick:m=>{r(f=>!f),i(),d.props.onClick?.(m)}})},ja=({children:l,className:r=""})=>{const{isOpen:c,popperRef:i}=vr(),{isRendered:d,style:p}=Al(c,200);return d?o.jsx("div",{ref:i,className:r,style:{...p,zIndex:100},children:l}):null},Ro=He.forwardRef(({className:l="",...r},c)=>{const{theme:i}=_(),d=Y("text-input"),p=i.colors.background.startsWith("#1"),m=d({display:"block",backgroundColor:i.colors.backgroundSecondary,border:`1px solid ${i.colors.border}`,borderRadius:"0.375rem",padding:"0.5rem 0.75rem",color:i.colors.text,transition:"all 0.2s","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(8px)"},"&::placeholder":{color:i.colors.textSecondary},"&:focus":{outline:"none",boxShadow:`0 0 0 2px ${p?i.colors.background:"#fff"}, 0 0 0 4px ${i.colors.primary}`}});return o.jsx("input",{type:"text",ref:c,className:`${m} ${l}`,...r})});Ro.displayName="TextInput";const Cr=l=>{const r=b.useRef(null);return b.useEffect(()=>{const c=i=>{r.current&&!r.current.contains(i.target)&&l()};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[l]),r},Kc=(l,r)=>{const[c,i]=b.useState(l);return b.useEffect(()=>{const d=setTimeout(()=>i(l),r);return()=>clearTimeout(d)},[l,r]),c},cg=({items:l,value:r,onChange:c,placeholder:i})=>{const{theme:d}=_(),p=Y("combobox"),[m,f]=b.useState(!1),[x,g]=b.useState(""),[v,C]=b.useState(-1),A=Cr(()=>f(!1)),j=b.useMemo(()=>l.find(K=>K.value===r),[l,r]);He.useEffect(()=>{g(j?.label||"")},[j]);const k=b.useMemo(()=>x?l.filter(K=>K.label.toLowerCase().includes(x.toLowerCase())):l,[l,x]),z=K=>{c(K.value),g(K.label),f(!1)},B=K=>{K.key==="ArrowDown"?(K.preventDefault(),C(G=>(G+1)%k.length)):K.key==="ArrowUp"?(K.preventDefault(),C(G=>(G-1+k.length)%k.length)):K.key==="Enter"?(K.preventDefault(),v>=0&&k[v]&&z(k[v])):K.key==="Escape"&&f(!1)},I=p({maxHeight:"200px",overflowY:"auto",display:"grid",gap:"4px"}),V=p({padding:"8px 12px",borderRadius:"4px",cursor:"pointer",color:d.colors.textSecondary,transition:"all 0.2s ease","&:hover":{backgroundColor:d.colors.border,color:d.colors.text},'&[data-active="true"]':{backgroundColor:d.colors.border,color:d.colors.text}});return o.jsx(wo,{isOpen:m,setIsOpen:f,children:o.jsxs("div",{ref:A,style:{width:"250px"},children:[o.jsx(Ao,{children:o.jsx(Ro,{placeholder:i,value:x,onChange:K=>{g(K.target.value),f(!0),c("")},onFocus:()=>f(!0),onKeyDown:B,autoComplete:"off"})}),o.jsx(ja,{children:o.jsx("div",{className:I,children:k.length>0?k.map((K,G)=>o.jsx("div",{className:V,"data-active":G===v,onClick:()=>z(K),onMouseMove:()=>C(G),children:K.label},K.value)):o.jsx("div",{style:{padding:"8px 12px",color:d.colors.textSecondary},children:"No results found."})})})]})})},Sr=({children:l,className:r="",maxWidth:c,size:i,...d})=>{const{theme:p}=_(),f=Y("container")({maxWidth:(i?p.maxWidths[i]:void 0)||c||p.maxWidths.container,margin:"0 auto",padding:`0 ${p.spacing.lg}`,"@media":{"(maxWidth: 'sm')":{padding:`0 ${p.spacing.md}`}}});return o.jsx("div",{className:`${f} ${r}`,...d,children:l})},sr=({isOpen:l,onClose:r,position:c,items:i})=>{const{theme:d}=_(),p=Y("context-menu"),m=Cr(r),f=p({position:"fixed",backgroundColor:d.colors.backgroundSecondary,borderRadius:"6px",border:`1px solid ${d.colors.border}`,boxShadow:"0 4px 12px rgba(0,0,0,0.5)",minWidth:"180px",zIndex:100,overflow:"hidden",padding:"4px","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"}}),x=p({width:"100%",padding:"8px 12px",border:"none",backgroundColor:"transparent",textAlign:"left",cursor:"pointer",color:d.colors.textSecondary,transition:"all 0.2s ease",borderRadius:"4px",fontSize:"14px","&:hover:not(:disabled)":{backgroundColor:"rgba(255, 255, 255, 0.1)",color:d.colors.text},"&:disabled":{opacity:.5,cursor:"not-allowed"}}),g=p({height:"1px",border:"none",backgroundColor:d.colors.border,margin:"4px 0"});return l?Nl.createPortal(o.jsx("div",{ref:m,className:f,style:{top:c.y,left:c.x},children:i.map((v,C)=>"label"in v?o.jsx("button",{className:x,onClick:v.onClick,disabled:v.disabled,children:v.label},v.label):o.jsx("hr",{className:g},`sep-${C}`))}),document.body):null},ug=({data:l,columns:r,pageSize:c=10,enableFiltering:i=!0,enableSorting:d=!0,enableSelection:p=!0,actions:m,className:f=""})=>{const{theme:x}=_(),[g,v]=b.useState(""),[C,A]=b.useState(null),[j,k]=b.useState(1),[z,B]=b.useState(new Set),I=b.useMemo(()=>g?l.filter(ce=>r.some(ge=>{const $e=ce[ge.accessorKey];return String($e).toLowerCase().includes(g.toLowerCase())})):l,[l,r,g]),V=b.useMemo(()=>C?[...I].sort((ge,$e)=>{const me=ge[C.key],he=$e[C.key];return me<he?C.direction==="asc"?-1:1:me>he?C.direction==="asc"?1:-1:0}):I,[I,C]),K=Math.ceil(V.length/c),G=b.useMemo(()=>{const ce=(j-1)*c,ge=ce+c;return V.slice(ce,ge)},[V,j,c]),Q=ce=>{if(!d)return;let ge="asc";C&&C.key===ce&&C.direction==="asc"&&(ge="desc"),A({key:ce,direction:ge}),k(1)},ue=ce=>{B(ge=>{const $e=new Set(ge);return $e.has(ce)?$e.delete(ce):$e.add(ce),$e})},J=()=>{B(ce=>{const ge=new Set(ce),$e=G.map(he=>he.id);return $e.length>0&&$e.every(he=>ge.has(he))?$e.forEach(he=>ge.delete(he)):$e.forEach(he=>ge.add(he)),ge})},ae=()=>{B(new Set)},xe=b.useMemo(()=>l.filter(ce=>z.has(ce.id)),[l,z]),De=G.length>0&&G.every(ce=>z.has(ce.id));return o.jsx(gt,{className:f,children:o.jsxs(D,{gap:"1.5rem",children:[(i||m&&z.size>0)&&o.jsxs(D,{direction:"row",justify:"space-between",align:"center",children:[i?o.jsx("div",{style:{minWidth:"250px"},children:o.jsx(Eu,{placeholder:"Search table...",value:g,onChange:ce=>{v(ce.target.value),k(1)}})}):o.jsx("div",{}),m&&o.jsx("div",{style:{transition:"opacity 0.3s, transform 0.3s",opacity:z.size>0?1:0,transform:z.size>0?"translateY(0)":"translateY(-10px)",pointerEvents:z.size>0?"auto":"none"},children:o.jsxs(D,{direction:"row",align:"center",gap:"1rem",children:[o.jsxs(T,{size:x.typography.fontSizes.sm,color:x.colors.textSecondary,children:[z.size," selected"]}),m(xe,ae)]})})]}),o.jsx("div",{style:{overflowX:"auto"},children:o.jsxs($u,{children:[o.jsx(Iu,{children:o.jsxs(kl,{children:[p&&o.jsx(ga,{style:{width:"40px"},children:o.jsx(Ke,{checked:De,onChange:J,"aria-label":"Select all items on this page",disabled:G.length===0})}),r.map(ce=>o.jsx(ga,{onClick:()=>ce.enableSorting!==!1&&Q(ce.accessorKey),style:{cursor:ce.enableSorting!==!1&&d?"pointer":"default",whiteSpace:"nowrap"},children:o.jsxs(D,{direction:"row",align:"center",gap:"0.5rem",children:[o.jsx("span",{children:ce.header}),d&&ce.enableSorting!==!1&&o.jsx(Le,{as:C?.key===ce.accessorKey?C.direction==="asc"?Bf:$f:If,size:14,style:{color:C?.key===ce.accessorKey?x.colors.text:x.colors.textSecondary,opacity:C?.key===ce.accessorKey?1:.5}})]})},String(ce.accessorKey)))]})}),o.jsx(Ou,{children:G.map(ce=>o.jsxs(kl,{"data-selected":z.has(ce.id),style:{backgroundColor:z.has(ce.id)?"rgba(59, 130, 246, 0.1)":"transparent"},children:[p&&o.jsx(xa,{children:o.jsx(Ke,{checked:z.has(ce.id),onChange:()=>ue(ce.id),"aria-label":`Select row ${ce.id}`})}),r.map(ge=>o.jsx(xa,{children:ge.cell?ge.cell(ce[ge.accessorKey],ce):String(ce[ge.accessorKey])},`${ce.id}-${String(ge.accessorKey)}`))]},ce.id))})]})}),G.length===0&&o.jsx(D,{align:"center",style:{padding:"2rem"},children:o.jsx(T,{color:x.colors.textSecondary,children:g?"No results found.":"No data available."})}),K>1&&o.jsxs(D,{direction:"row",justify:"space-between",align:"center",style:{marginTop:"1rem",flexWrap:"wrap",gap:"1rem"},children:[o.jsxs(T,{size:x.typography.fontSizes.sm,color:x.colors.textSecondary,children:["Page ",j," of ",K]}),o.jsx(Mu,{count:K,page:j,onChange:k})]})]})})},jr=({children:l,className:r="",...c})=>l?o.jsx("p",{className:`mt-1 text-sm text-red-400 ${r}`,...c,children:l}):null,re=({label:l,id:r,error:c,className:i="",...d})=>{const{theme:p}=_(),f=Y("input-wrapper")({display:"grid",gap:"4px",width:"100%"});return o.jsxs("div",{className:`${f} ${i}`,children:[l&&o.jsx("label",{htmlFor:r,children:o.jsx(T,{as:"span",size:p.typography.fontSizes.sm,weight:p.typography.fontWeights.medium,color:p.colors.textSecondary,children:l})}),o.jsx(Ro,{id:r,...d}),o.jsx(jr,{children:c})]})},dg=({value:l,onChange:r,label:c,className:i})=>{const[d,p]=b.useState(!1),m=l?l.toLocaleDateString():"",f=x=>{r(x),p(!1)};return o.jsx(wo,{isOpen:d,setIsOpen:p,children:o.jsxs("div",{className:i,children:[o.jsx(Ao,{children:o.jsx(re,{label:c,value:m,readOnly:!0,placeholder:"Select a date",style:{cursor:"pointer"}})}),o.jsx(ja,{children:o.jsx(Kf,{value:l,onChange:f})})]})})},ju=({isOpen:l,onClose:r,children:c,title:i,className:d=""})=>{const{theme:p}=_(),m=Y("modal"),{isRendered:f,style:x}=Al(l,200),g=b.useRef(null),v=b.useRef(null),C=b.useRef(`modal-title-${Math.random().toString(36).substring(2,9)}`).current;if(b.useEffect(()=>{if(l){const I=document.body.style.overflow;document.body.style.overflow="hidden",v.current=document.activeElement;const V=setTimeout(()=>{g.current?.focus()},100),K=G=>{if(G.key==="Escape"&&r(),G.key==="Tab"){const Q=g.current?.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');if(!Q||Q.length===0){G.preventDefault();return}const ue=Q[0],J=Q[Q.length-1];G.shiftKey?document.activeElement===ue&&(J.focus(),G.preventDefault()):document.activeElement===J&&(ue.focus(),G.preventDefault())}};return document.addEventListener("keydown",K),()=>{document.body.style.overflow=I,clearTimeout(V),document.removeEventListener("keydown",K),v.current?.focus()}}},[l,r]),!f)return null;const A=m({position:"fixed",top:0,left:0,right:0,bottom:0,display:"grid",placeItems:"center",zIndex:50,backgroundColor:"rgba(0, 0, 0, 0.7)","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(8px)"}}),j=m({backgroundColor:p.colors.backgroundSecondary,borderRadius:"8px",border:`1px solid ${p.colors.border}`,padding:p.spacing.lg,maxWidth:"400px",width:"90%",position:"relative",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.5)","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"},"&:focus":{outline:"none"}}),k=i&&m({fontSize:"16px",fontWeight:String(p.typography.fontWeights.semibold),marginBottom:p.spacing.sm,color:p.colors.text}),z=m({position:"absolute",top:"12px",right:"12px",cursor:"pointer",border:"none",background:"none",color:"#888",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",transition:"background-color 0.2s, color 0.2s","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.1)",color:"#FFF"}}),B=I=>{I.target===I.currentTarget&&r()};return o.jsx("div",{className:A,style:x,onClick:B,children:o.jsxs("div",{ref:g,className:`${j} ${d}`,role:"dialog","aria-modal":"true","aria-labelledby":i?C:void 0,tabIndex:-1,children:[i&&o.jsx("h2",{id:C,className:k,children:i}),o.jsx("button",{className:z,onClick:r,"aria-label":"Close modal",children:o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),c]})})},Tu=({isOpen:l,onClose:r,title:c,children:i,actions:d,className:p=""})=>{const{theme:m}=_(),f=Y("dialog"),x=f({display:"grid",gap:m.spacing.md}),g=f({borderTop:`1px solid ${m.colors.border}`,paddingTop:m.spacing.md,marginTop:m.spacing.md});return o.jsx(ju,{isOpen:l,onClose:r,title:c,className:p,children:o.jsxs("div",{className:x,children:[o.jsx("div",{children:i}),d&&d.length>0&&o.jsx(D,{direction:"row",className:g,justify:"end",gap:m.spacing.sm,children:d.map(({label:v,...C},A)=>o.jsx(be,{...C,children:v},A))})]})})},to=({orientation:l="horizontal",className:r,...c})=>{const{theme:i}=_(),p=Y("divider")({border:"none",backgroundColor:i.colors.border,...l==="horizontal"?{height:"1px",width:"100%",margin:"0.5rem 0"}:{width:"1px",height:"auto",alignSelf:"stretch",margin:"0 0.5rem"}});return o.jsx("hr",{className:`${p} ${r}`,...c})},pg=({isOpen:l,onClose:r,children:c,title:i,position:d="right",className:p=""})=>{const{theme:m}=_(),f=Y("drawer"),{isRendered:x,style:g}=rv(l,{direction:d}),v=b.useRef(null),C=b.useRef(null),A=b.useRef(`drawer-title-${Math.random().toString(36).substring(2,9)}`).current;if(b.useEffect(()=>{if(l){const I=document.body.style.overflow;document.body.style.overflow="hidden",C.current=document.activeElement;const V=setTimeout(()=>{v.current?.focus()},100),K=G=>{if(G.key==="Escape"&&r(),G.key==="Tab"){const Q=v.current?.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');if(!Q||Q.length===0){G.preventDefault();return}const ue=Q[0],J=Q[Q.length-1];G.shiftKey?document.activeElement===ue&&(J.focus(),G.preventDefault()):document.activeElement===J&&(ue.focus(),G.preventDefault())}};return document.addEventListener("keydown",K),()=>{document.body.style.overflow=I,clearTimeout(V),document.removeEventListener("keydown",K),C.current?.focus()}}},[l,r]),!x)return null;const j=f({position:"fixed",top:0,bottom:0,[d]:0,width:"320px",maxWidth:"90vw",backgroundColor:m.colors.backgroundSecondary,borderLeft:d==="right"?`1px solid ${m.colors.border}`:"none",borderRight:d==="left"?`1px solid ${m.colors.border}`:"none",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.5)",zIndex:60,display:"flex",flexDirection:"column","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"},"&:focus":{outline:"none"}}),k=f({padding:m.spacing.md,borderBottom:`1px solid ${m.colors.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}),z=f({padding:m.spacing.md,overflowY:"auto",flex:1}),B=f({cursor:"pointer",border:"none",background:"none",color:m.colors.textSecondary,padding:"4px","&:hover":{color:m.colors.text}});return Nl.createPortal(o.jsxs(o.Fragment,{children:[o.jsx(Cu,{isOpen:l,onClick:r}),o.jsxs("div",{ref:v,className:`${j} ${p}`,style:g,role:"dialog","aria-modal":"true","aria-labelledby":i?A:void 0,tabIndex:-1,children:[o.jsxs("div",{className:k,children:[i&&o.jsx("h2",{id:A,style:{fontSize:"1.125rem",fontWeight:600,color:m.colors.text},children:i}),o.jsx("button",{className:B,onClick:r,"aria-label":"Close drawer",children:o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o.jsx("div",{className:z,children:c})]})]}),document.body)},mg=({children:l})=>o.jsx(wo,{children:l}),hg=({children:l})=>o.jsx(Ao,{children:l}),fg=({children:l,className:r=""})=>{const{theme:c}=_(),d=Y("dropdown-content")({backgroundColor:c.colors.backgroundSecondary,borderRadius:"6px",border:`1px solid ${c.colors.border}`,boxShadow:"0 4px 12px rgba(0,0,0,0.5)",zIndex:50,overflow:"hidden",padding:"4px",minWidth:"180px","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"}});return o.jsx(ja,{className:`${d} ${r}`,children:l})},Zs=({children:l,className:r,...c})=>{const{theme:i}=_(),d=Y("dropdown-item"),{setIsOpen:p}=vr(),m=d({width:"100%",padding:"8px 12px",border:"none",backgroundColor:"transparent",textAlign:"left",cursor:"pointer",display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center",gap:i.spacing.sm,color:i.colors.textSecondary,transition:"all 0.2s ease",borderRadius:"4px",fontSize:"14px","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.1)",color:i.colors.text}}),f=x=>{c.onClick?.(x),p(!1)};return o.jsx("button",{className:`${m} ${r}`,...c,onClick:f,children:l})},hv=()=>o.jsx("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("polyline",{points:"20 6 9 17 4 12"})}),gg=({defaultValue:l,onSave:r})=>{const[c,i]=b.useState(!1),[d,p]=b.useState(l),m=()=>{r(d),i(!1)},f=()=>{p(l),i(!1)};return c?o.jsxs(yr,{align:"center",gap:"0.5rem",children:[o.jsx(Ro,{value:d,onChange:x=>p(x.target.value),onKeyDown:x=>{x.key==="Enter"&&m(),x.key==="Escape"&&f()},autoFocus:!0}),o.jsxs(Su,{isAttached:!0,children:[o.jsx(ir,{icon:hv,"aria-label":"Save",onClick:m}),o.jsx(ir,{icon:gr,"aria-label":"Cancel",onClick:f})]})]}):o.jsx(T,{onClick:()=>i(!0),style:{cursor:"pointer",borderBottom:"1px dashed grey",padding:"0.5rem 0.75rem"},children:d})},Tr=({onFileSelect:l,className:r})=>{const{theme:c}=_(),i=Y("file-upload"),[d,p]=b.useState(!1),[m,f]=b.useState(""),x=b.useRef(null),g=B=>{const I=B.target.files?.[0];I?(f(I.name),l(I)):(f(""),l(null))},v=b.useCallback(B=>{B.preventDefault(),B.stopPropagation()},[]),C=b.useCallback(B=>{v(B),B.dataTransfer.items&&B.dataTransfer.items.length>0&&p(!0)},[v]),A=b.useCallback(B=>{v(B),p(!1)},[v]),j=b.useCallback(B=>{v(B),p(!1);const I=B.dataTransfer.files?.[0];I&&(f(I.name),l(I))},[v,l]),k=()=>{x.current?.click()},z=i({padding:c.spacing.lg,border:`2px dashed ${d?c.colors.primary:c.colors.border}`,borderRadius:"8px",backgroundColor:d?"rgba(59, 130, 246, 0.1)":c.colors.backgroundSecondary,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",cursor:"pointer",transition:"all 0.2s","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(12px)"}});return o.jsxs("div",{className:`${z} ${r}`,onClick:k,onDragEnter:C,onDragLeave:A,onDragOver:v,onDrop:j,children:[o.jsx("input",{type:"file",ref:x,onChange:g,style:{display:"none"}}),o.jsx(T,{children:m?`Selected: ${m}`:"Drag & drop a file here, or click to select"}),o.jsx(T,{size:"12px",color:c.colors.textSecondary,children:"Max file size: 10MB"})]})},rr=({icon:l,label:r,position:c={bottom:"2rem",right:"2rem"},size:i="medium",className:d="",...p})=>{const m=Y("fab"),f={small:{wrapper:"40px",icon:18},medium:{wrapper:"56px",icon:24},large:{wrapper:"72px",icon:32}},x=m({position:"fixed",...c,width:f[i].wrapper,height:f[i].wrapper,borderRadius:"50%",padding:0,boxShadow:"0 4px 12px rgba(0,0,0,0.4)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:40});return o.jsx(be,{variant:"primary",className:`${x} ${d}`,"aria-label":r,...p,children:o.jsx(Le,{as:l,size:f[i].icon})})},xg=({children:l,className:r="",...c})=>{const{theme:i}=_(),p=Y("footer")({padding:`${i.spacing.lg} ${i.spacing.lg}`,backgroundColor:i.colors.backgroundSecondary,borderTop:`1px solid ${i.colors.border}`,color:i.colors.textSecondary,textAlign:"center",marginTop:"auto"});return o.jsx("footer",{className:`${p} ${r}`,...c,children:l})},bg=b.createContext(null),ku=()=>b.useContext(bg),yg=({isInvalid:l,isDisabled:r,...c})=>{const d={id:b.useId(),isInvalid:l,isDisabled:r},m=Y("form-control")({display:"flex",flexDirection:"column",gap:"0.25rem"});return o.jsx(bg.Provider,{value:d,children:o.jsx(wl,{className:m,...c})})},vg=l=>{const r=ku(),{theme:c}=_();return o.jsx(T,{as:"label",htmlFor:r?.id,size:c.typography.fontSizes.sm,weight:c.typography.fontWeights.medium,color:c.colors.textSecondary,...l})},Cg=l=>{const r=ku(),{theme:c}=_();return o.jsx(T,{size:c.typography.fontSizes.sm,color:c.colors.textSecondary,id:r?`${r.id}-helper-text`:void 0,...l})},Sg=l=>{const r=ku();return r?.isInvalid?o.jsx(T,{color:"#f87171",size:"0.875rem",id:r?`${r.id}-error-message`:void 0,"aria-live":"polite",...l}):null},wu=b.createContext(null),wn=()=>{const l=b.useContext(wu);if(!l)throw new Error("useGraphicsContext must be used within a GraphicsProvider");return l},fv=({id:l,label:r,position:c,size:i,inputs:d,outputs:p,children:m,onContextMenu:f})=>{const{startConnecting:x,stopConnecting:g,setNodes:v,zoom:C,registerSocketPositions:A}=wn(),{theme:j}=_(),k=Y("graphics-node"),z=b.useRef({isDragging:!1,startPos:{x:0,y:0},startMouse:{x:0,y:0}}),B=b.useRef(null),I=b.useRef({}),V=b.useRef(null);b.useLayoutEffect(()=>{const me=B.current;if(!me)return;const he=()=>{if(!B.current)return;const W=B.current.getBoundingClientRect(),oe={};Object.entries(I.current).forEach(([Ce,Se])=>{if(Se){const w=Se.getBoundingClientRect();oe[Ce]={x:(w.left-W.left+w.width/2)/C,y:(w.top-W.top+w.height/2)/C}}}),Object.keys(oe).length>0&&A(l,oe)};he();const O=new ResizeObserver(he);return O.observe(me),()=>O.disconnect()},[l,d.length,p.length,A,C,i]);const K=me=>{me.stopPropagation(),z.current={isDragging:!0,startPos:{...c},startMouse:{x:me.clientX,y:me.clientY}};const he=W=>{if(!z.current.isDragging)return;const oe=(W.clientX-z.current.startMouse.x)/C,Ce=(W.clientY-z.current.startMouse.y)/C;v(Se=>Se.map(w=>w.id===l?{...w,position:{x:z.current.startPos.x+oe,y:z.current.startPos.y+Ce}}:w))},O=()=>{z.current.isDragging=!1,window.removeEventListener("mousemove",he),window.removeEventListener("mouseup",O)};window.addEventListener("mousemove",he),window.addEventListener("mouseup",O)},G=(me,he)=>{me.stopPropagation();const O=i?.width??B.current?.offsetWidth??180,W=i?.height??B.current?.offsetHeight??100;V.current={isResizing:!0,handle:he,startPos:{...c},startSize:{width:O,height:W},startMouse:{x:me.clientX,y:me.clientY}};const oe=Se=>{if(!V.current?.isResizing)return;const w=(Se.clientX-V.current.startMouse.x)/C,U=(Se.clientY-V.current.startMouse.y)/C;let F=V.current.startSize.width,Z=V.current.startSize.height,te=V.current.startPos.x,le=V.current.startPos.y;const de=180,X=120;if(he.includes("right")&&(F=Math.max(de,V.current.startSize.width+w)),he.includes("bottom")&&(Z=Math.max(X,V.current.startSize.height+U)),he.includes("left")){const se=V.current.startSize.width-w;se>=de&&(F=se,te=V.current.startPos.x+w)}if(he.includes("top")){const se=V.current.startSize.height-U;se>=X&&(Z=se,le=V.current.startPos.y+U)}v(se=>se.map(Te=>Te.id===l?{...Te,position:{x:te,y:le},size:{width:F,height:Z}}:Te))},Ce=()=>{V.current=null,window.removeEventListener("mousemove",oe),window.removeEventListener("mouseup",Ce)};window.addEventListener("mousemove",oe),window.addEventListener("mouseup",Ce)},Q=k({position:"absolute",backgroundColor:j.colors.backgroundSecondary,border:`1px solid ${j.colors.border}`,borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",userSelect:"none",pointerEvents:"auto",display:"flex",flexDirection:"column","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"}}),ue=k({padding:"8px 12px",borderBottom:`1px solid ${j.colors.border}`,fontWeight:600,fontSize:"14px",color:j.colors.text,cursor:"grab"}),J=k({display:"grid",gridTemplateColumns:"1fr 1fr",flex:1,minHeight:0}),ae=k({padding:m?"8px 12px":"0",gridColumn:"1 / -1"}),xe=me=>k({display:"flex",flexDirection:"column",gap:"8px",padding:"8px 12px",alignItems:me?"flex-end":"flex-start",justifyContent:"space-around",height:"100%"}),De=me=>k({display:"flex",alignItems:"center",gap:"8px",flexDirection:me?"row-reverse":"row"}),ce=k({width:"12px",height:"12px",backgroundColor:j.colors.background,border:`2px solid ${j.colors.secondary}`,borderRadius:"50%",cursor:"crosshair",transition:"background-color 0.2s, border-color 0.2s","&:hover":{backgroundColor:j.colors.primary,borderColor:j.colors.primary}}),ge={position:"absolute",backgroundColor:"transparent",zIndex:10},$e={"top-left":k({...ge,top:"-5px",left:"-5px",width:"10px",height:"10px",cursor:"nwse-resize"}),"top-right":k({...ge,top:"-5px",right:"-5px",width:"10px",height:"10px",cursor:"nesw-resize"}),"bottom-left":k({...ge,bottom:"-5px",left:"-5px",width:"10px",height:"10px",cursor:"nesw-resize"}),"bottom-right":k({...ge,bottom:"-5px",right:"-5px",width:"10px",height:"10px",cursor:"nwse-resize"}),top:k({...ge,top:"-5px",left:"5px",right:"5px",height:"10px",cursor:"ns-resize"}),bottom:k({...ge,bottom:"-5px",left:"5px",right:"5px",height:"10px",cursor:"ns-resize"}),left:k({...ge,top:"5px",bottom:"5px",left:"-5px",width:"10px",cursor:"ew-resize"}),right:k({...ge,top:"5px",bottom:"5px",right:"-5px",width:"10px",cursor:"ew-resize"})};return o.jsxs("div",{ref:B,className:Q,style:{left:c.x,top:c.y,width:i?`${i.width}px`:"auto",minWidth:"180px",height:i?`${i.height}px`:"auto"},onContextMenu:me=>{me.preventDefault(),me.stopPropagation(),f?.(me,l)},"data-node-id":l,children:[Object.entries($e).map(([me,he])=>o.jsx("div",{className:he,onMouseDown:O=>G(O,me)},me)),o.jsx("div",{className:ue,onMouseDown:K,children:r}),o.jsxs("div",{className:J,children:[o.jsx("div",{className:xe(!1),children:d.map(me=>o.jsxs("div",{"data-socket-id":me.id,"data-socket-type":"input",className:De(!1),children:[o.jsx("div",{ref:he=>{I.current[me.id]=he},className:ce,onMouseDown:he=>{he.stopPropagation(),x(l,me.id,"input",he)},onMouseUp:()=>g(l,me.id,"input")}),o.jsx("span",{style:{fontSize:"12px",color:j.colors.textSecondary},children:me.label})]},me.id))}),o.jsx("div",{className:xe(!0),children:p.map(me=>o.jsxs("div",{"data-socket-id":me.id,"data-socket-type":"output",className:De(!0),children:[o.jsx("div",{ref:he=>{I.current[me.id]=he},className:ce,onMouseDown:he=>{he.stopPropagation(),x(l,me.id,"output",he)},onMouseUp:()=>g(l,me.id,"output")}),o.jsx("span",{style:{fontSize:"12px",color:j.colors.textSecondary},children:me.label})]},me.id))}),m&&o.jsx("div",{className:ae,children:m})]})]})},gv=(l,r,c="curved")=>{if(c==="straight")return`M ${l.x} ${l.y} L ${r.x} ${r.y}`;const i=Math.abs(l.x-r.x),d={x:l.x+i*.6,y:l.y},p={x:r.x-i*.6,y:r.y};return`M ${l.x} ${l.y} C ${d.x} ${d.y}, ${p.x} ${p.y}, ${r.x} ${r.y}`},xv=({startPos:l,endPos:r,color:c,type:i,onContextMenu:d})=>{const p=gv(l,r,i);return o.jsxs("g",{onContextMenu:d,children:[o.jsx("path",{d:p,stroke:"transparent",strokeWidth:"12",fill:"none",style:{pointerEvents:"stroke"}}),o.jsx("path",{d:p,stroke:c,strokeWidth:"2",fill:"none",style:{pointerEvents:"none"}})]})},bv=(l,r)=>{const c=Math.abs(l.x-r.x),i={x:l.x+c*.5,y:l.y},d={x:r.x-c*.5,y:r.y};return`M ${l.x} ${l.y} C ${i.x} ${i.y}, ${d.x} ${d.y}, ${r.x} ${r.y}`},yv=()=>{const{draftConnection:l}=wn(),{theme:r}=_();return l?o.jsx("path",{d:bv(l.start,l.end),stroke:r.colors.primary,strokeWidth:"2",fill:"none",strokeDasharray:"4 4",style:{pointerEvents:"none"}}):null},vv=(l,r)=>{const c={},i=new Set(l.map(f=>f.id)),d=l.length*2;let p=0;const m={};for(r.forEach(f=>{m[f.targetNodeId]||(m[f.targetNodeId]={}),m[f.targetNodeId][f.targetSocketId]={sourceNodeId:f.sourceNodeId,sourceSocketId:f.sourceSocketId}});i.size>0&&p<d;){let f=!1;if(i.forEach(x=>{const g=l.find(k=>k.id===x);if(!g)return;const v=m[x]||{},C=g.inputs;let A=!0;const j={};for(const k of C){const z=v[k.id];if(z){const B=c[z.sourceNodeId];if(B&&B[z.sourceSocketId]!==void 0)j[k.id]=B[z.sourceSocketId];else{A=!1;break}}else k.value!==void 0&&(j[k.id]=k.value)}if(A){if(g.process)try{const k=g.process(j,g.data);c[x]=k}catch(k){console.error(`Error processing node ${g.label} (${g.id}):`,k),c[x]={}}else c[x]={};i.delete(x),f=!0}}),!f)break;p++}return i.size>0&&console.error("Could not fully process graph. Possible cycle detected or missing inputs for nodes:",Array.from(i)),c},Au=({children:l,initialNodes:r,initialConnections:c,creatableNodeTypes:i={}})=>{const[d,p]=b.useState(r),[m,f]=b.useState(c),[x,g]=b.useState({x:0,y:0}),[v,C]=b.useState(1),A=b.useRef(null),j=b.useRef(null),[k,z]=b.useState(null),[B,I]=b.useState({}),[V,K]=b.useState({}),{addToast:G}=Ta(),[Q,ue]=b.useState(i),J=b.useCallback((F,Z)=>{ue(te=>({...te,[F]:Z}))},[]),ae=b.useRef(d);b.useEffect(()=>{ae.current=d},[d]);const xe=b.useRef({}),De=b.useRef(null);b.useEffect(()=>()=>{De.current!==null&&clearTimeout(De.current)},[]);const ce=b.useCallback((F,Z)=>{xe.current[F]=Z,De.current!==null&&clearTimeout(De.current),De.current=window.setTimeout(()=>{K(te=>({...te,...xe.current})),xe.current={},De.current=null},0)},[]),ge=b.useCallback(()=>ae.current,[]),$e=b.useCallback(F=>{const Z={...F,id:`node_${Date.now()}_${Math.random().toString(36).substring(2,9)}`,data:{...F.data||{}}};p(te=>[...te,Z])},[p]),me=b.useCallback((F,Z)=>{p(te=>te.map(le=>le.id===F?{...le,...Z}:le))},[p]),he=b.useCallback(F=>{p(Z=>Z.filter(te=>te.id!==F)),f(Z=>Z.filter(te=>te.sourceNodeId!==F&&te.targetNodeId!==F))},[p,f]),O=b.useCallback((F,Z)=>{const te=d.find(de=>de.id===F);if(!te)return;let le=null;if(d.forEach(de=>{de.id!==F&&de.inputs.forEach(X=>{if(!m.some(Te=>Te.targetNodeId===de.id&&Te.targetSocketId===X.id)){const Te=Math.sqrt(Math.pow(de.position.x-te.position.x,2)+Math.pow(de.position.y-te.position.y,2));(le===null||Te<le.distance)&&(le={targetNodeId:de.id,targetSocketId:X.id,distance:Te})}})}),le){const de={id:`conn_${Date.now()}_${Math.random().toString(36).substring(2,9)}`,sourceNodeId:F,sourceSocketId:Z,targetNodeId:le.targetNodeId,targetSocketId:le.targetSocketId,type:"curved"};f(X=>[...X,de])}},[d,m,f]),W=b.useCallback((F,Z,te,le)=>{j.current={nodeId:F,socketId:Z,type:te};const de=A.current?.getBoundingClientRect();if(de){const X={x:le.clientX-de.left,y:le.clientY-de.top};z({start:X,end:X})}},[]),oe=b.useCallback((F,Z,te)=>{if(j.current){const le=j.current,de={nodeId:F,socketId:Z,type:te};if(le.type!==de.type&&le.nodeId!==de.nodeId){const X=le.type==="output"?le:de,se=le.type==="input"?le:de,Te=d.find(tt=>tt.id===X.nodeId),We=d.find(tt=>tt.id===se.nodeId);if(Te&&We){const tt=Te.outputs.find(Ye=>Ye.id===X.socketId),Bt=We.inputs.find(Ye=>Ye.id===se.socketId);if(tt&&Bt){const Ye=tt.type,Yt=Bt.type;if(!(Ye==="any"||Yt==="any"||Ye===Yt))G({title:"Connection Error",description:`Cannot connect type '${Ye}' to type '${Yt}'.`,variant:"error"});else if(m.some(on=>on.targetNodeId===se.nodeId&&on.targetSocketId===se.socketId))G({title:"Connection Warning",description:`Input '${Bt.label}' is already connected.`,variant:"warning"});else{const on={id:`conn_${Date.now()}_${Math.random().toString(36).substring(2,9)}`,sourceNodeId:X.nodeId,sourceSocketId:X.socketId,targetNodeId:se.nodeId,targetSocketId:se.socketId,type:"curved"};f(Ft=>[...Ft,on])}}}}}j.current=null,z(null)},[m,d,G]),Ce=b.useCallback(F=>{if(j.current&&A.current){const Z=A.current.getBoundingClientRect();z(te=>te?{...te,end:{x:F.clientX-Z.left,y:F.clientY-Z.top}}:null)}},[]),Se=b.useCallback(()=>{j.current&&(j.current=null,z(null))},[]),w=b.useCallback(()=>{const F=vv(d,m);I(F)},[d,m]);He.useEffect(()=>(window.addEventListener("mousemove",Ce),window.addEventListener("mouseup",Se),()=>{window.removeEventListener("mousemove",Ce),window.removeEventListener("mouseup",Se)}),[Ce,Se]);const U={nodes:d,setNodes:p,connections:m,setConnections:f,pan:x,setPan:g,zoom:v,setZoom:C,editorRef:A,startConnecting:W,stopConnecting:oe,isConnecting:!!j.current,draftConnection:k,processGraph:w,nodeOutputs:B,createNode:$e,getNodes:ge,updateNode:me,deleteNode:he,autoConnect:O,socketRelativePositions:V,registerSocketPositions:ce,creatableNodeTypes:Q,newCreateNode:J};return o.jsx(wu.Provider,{value:U,children:l})},Cv=({node:l,onContextMenu:r})=>{const{connections:c,nodeOutputs:i,setNodes:d}=wn(),p=b.useMemo(()=>{const f={};return c.forEach(x=>{if(x.targetNodeId===l.id){const g=i[x.sourceNodeId];g&&(f[x.targetSocketId]=g[x.sourceSocketId])}}),l.inputs.forEach(x=>{!c.some(v=>v.targetNodeId===l.id&&v.targetSocketId===x.id)&&x.value!==void 0&&(f[x.id]=x.value)}),f},[l.id,l.inputs,c,i]),m=b.useCallback(f=>{d(x=>x.map(g=>g.id===l.id?{...g,data:{...g.data,...f}}:g))},[l.id,d]);return o.jsx(fv,{...l,onContextMenu:r,children:l.component&&o.jsx(l.component,{data:l,inputs:p,onUpdateData:m})})},Ru=({style:l,plugins:r})=>{const{nodes:c,connections:i,setConnections:d,pan:p,setPan:m,zoom:f,editorRef:x,updateNode:g,deleteNode:v,autoConnect:C,socketRelativePositions:A}=wn(),{theme:j}=_(),k=Y("graphics-editor"),[z,B]=b.useState(!1),I=b.useRef({startPan:{x:0,y:0},startMouse:{x:0,y:0}}),[V,K]=b.useState({isOpen:!1,position:{x:0,y:0},connection:null}),[G,Q]=b.useState({isOpen:!1,position:{x:0,y:0},node:null}),[ue,J]=b.useState({isOpen:!1,nodeId:null,currentName:""}),[ae,xe]=b.useState(""),De=k({width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.2)",backgroundImage:`radial-gradient(${j.colors.border} 1px, transparent 0)`,backgroundSize:"20px 20px",position:"relative",overflow:"hidden",cursor:z?"grabbing":"grab"}),ce=k({position:"absolute",width:"100%",height:"100%",transformOrigin:"top left",pointerEvents:"none"}),ge=k({position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"auto"}),$e=X=>{X.button===0&&X.target===X.currentTarget&&(B(!0),I.current={startPan:{...p},startMouse:{x:X.clientX,y:X.clientY}})},me=X=>{if(z){const se=X.clientX-I.current.startMouse.x,Te=X.clientY-I.current.startMouse.y;m({x:I.current.startPan.x+se,y:I.current.startPan.y+Te})}},he=()=>{B(!1)},O=(X,se)=>{X.preventDefault(),X.stopPropagation(),K({isOpen:!0,position:{x:X.clientX,y:X.clientY},connection:se})},W=()=>{K(X=>({...X,isOpen:!1,connection:null}))},oe=(X,se)=>{d(Te=>Te.map(We=>We.id===X?{...We,...se}:We)),W()},Ce=X=>{d(se=>se.filter(Te=>Te.id!==X)),W()},Se=X=>{const se=i.find(Te=>Te.id===X);if(se){const Te=se.type==="straight"?"curved":"straight";oe(X,{type:Te})}},w=(X,se)=>{const Te=c.find(We=>We.id===se);Te&&Q({isOpen:!0,position:{x:X.clientX,y:X.clientY},node:Te})},U=()=>{Q(X=>({...X,isOpen:!1,node:null}))},F=()=>{J({isOpen:!1,nodeId:null,currentName:""}),xe("")},Z=()=>{ue.nodeId&&ae.trim()&&g(ue.nodeId,{label:ae.trim()}),F()},te=b.useMemo(()=>i.map(X=>{const se=c.find(Ft=>Ft.id===X.sourceNodeId),Te=c.find(Ft=>Ft.id===X.targetNodeId),We=A[X.sourceNodeId],tt=A[X.targetNodeId];if(!se||!Te||!We||!tt)return null;const Bt=We[X.sourceSocketId],Ye=tt[X.targetSocketId];if(!Bt||!Ye)return null;const Yt={x:se.position.x+Bt.x,y:se.position.y+Bt.y},no={x:Te.position.x+Ye.x,y:Te.position.y+Ye.y},No=se.outputs.find(Ft=>Ft.id===X.sourceSocketId),on=X.color||No?.color||j.colors.secondary;return{id:X.id,startPos:Yt,endPos:no,color:on,type:X.type||"curved",originalConnection:X}}).filter(X=>X!==null),[c,i,A,j.colors.secondary]),le=b.useMemo(()=>{if(!V.connection)return[];const X=V.connection;return[{label:"Delete Connection",onClick:()=>Ce(X.id)},{isSeparator:!0},{label:"Set Color to Accent",onClick:()=>oe(X.id,{color:j.colors.accent})},{label:"Set Color to Secondary",onClick:()=>oe(X.id,{color:j.colors.secondary})},{label:"Reset Color",onClick:()=>oe(X.id,{color:void 0})},{isSeparator:!0},{label:`Set Type to ${X.type==="straight"?"Curved":"Straight"}`,onClick:()=>Se(X.id)}]},[V.connection,j.colors,i,d]),de=b.useMemo(()=>{if(!G.node)return[];const X=G.node,se=[j.colors.primary,j.colors.accent,"#10b981","#ef4444",j.colors.secondary,"#9333ea"],Te=tt=>{const Bt=X.outputs.map(Ye=>{if(Ye.id===tt){const Yt=Ye.color||j.colors.secondary,No=(se.indexOf(Yt)+1)%se.length;return{...Ye,color:se[No]}}return Ye});g(X.id,{outputs:Bt}),U()},We=[{label:"Rename Node",onClick:()=>{xe(X.label),J({isOpen:!0,nodeId:X.id,currentName:X.label}),U()}},{label:"Delete Node",onClick:()=>{v(X.id),U()}}];return X.outputs.length>0&&(We.push({isSeparator:!0}),X.outputs.forEach(tt=>{We.push({label:`Cycle '${tt.label}' Color`,onClick:()=>Te(tt.id)}),We.push({label:`Auto-connect '${tt.label}'`,onClick:()=>{C(X.id,tt.id),U()}})})),We},[G.node,j.colors,g,v,C]);return o.jsxs("div",{ref:x,className:De,style:l,children:[o.jsxs("svg",{className:ge,onMouseDown:$e,onMouseMove:me,onMouseUp:he,onMouseLeave:he,children:[o.jsx("g",{transform:`translate(${p.x}, ${p.y}) scale(${f})`,children:te.map(X=>o.jsx(xv,{startPos:X.startPos,endPos:X.endPos,color:X.color,type:X.type,onContextMenu:se=>O(se,X.originalConnection)},X.id))}),o.jsx(yv,{})]}),o.jsx("div",{className:ce,style:{transform:`translate(${p.x}px, ${p.y}px) scale(${f})`},children:c.map(X=>o.jsx(Cv,{node:X,onContextMenu:w},X.id))}),r&&r.map((X,se)=>o.jsx(X,{},se)),V.isOpen&&o.jsx(sr,{isOpen:V.isOpen,onClose:W,position:V.position,items:le}),G.isOpen&&o.jsx(sr,{isOpen:G.isOpen,onClose:U,position:G.position,items:de}),ue.isOpen&&o.jsx(Tu,{isOpen:ue.isOpen,onClose:F,title:`Rename Node: "${ue.currentName}"`,actions:[{label:"Cancel",onClick:F,variant:"secondary"},{label:"Save",onClick:Z,variant:"primary"}],children:o.jsx(re,{label:"New Name",value:ae,onChange:X=>xe(X.target.value),onKeyDown:X=>{X.key==="Enter"&&(X.preventDefault(),Z())},autoFocus:!0})})]})},jg=({colSpan:l,rowSpan:r,className:c="",children:i,...d})=>{const m=Y("grid-item")({gridColumn:l?`span ${l}`:void 0,gridRow:r?`span ${r}`:void 0});return o.jsx("div",{className:`${m} ${c}`,...d,children:i})};jg.displayName="Grid.Item";const nn=({minItemWidth:l="350px",gap:r="1.5rem",columns:c,alignItems:i,justifyContent:d,flow:p="row",className:m="",children:f,...x})=>{const v=Y("grid")({display:"grid",gridTemplateColumns:c?`repeat(${c}, 1fr)`:`repeat(auto-fit, minmax(${l}, 1fr))`,gap:r,alignItems:i,justifyContent:d,gridAutoFlow:p,"@media":{"(maxWidth: 'sm')":{gridTemplateColumns:c?void 0:"1fr"}}});return o.jsx("div",{className:`${v} ${m}`,...x,children:f})};nn.Item=jg;const Tg=({children:l,className:r})=>{const i=Y("header-left")({display:"flex",alignItems:"center",gap:"1rem",justifySelf:"start","@media":{"(maxWidth: 'md')":{justifySelf:"center"}}});return o.jsx("div",{className:`${i} ${r}`,children:l})};Tg.displayName="Header.Left";const kg=({children:l,className:r})=>{const i=Y("header-right")({display:"flex",alignItems:"center",gap:"1rem",justifySelf:"end","@media":{"(maxWidth: 'md')":{justifySelf:"center"},"(maxWidth: 'sm')":{display:"none"}}});return o.jsx("div",{className:`${i} ${r}`,children:l})};kg.displayName="Header.Right";const kn=({children:l,className:r="",height:c,...i})=>{const{theme:d}=_(),p=Y("header"),m=p({padding:c?"0":"10px 0",backgroundColor:d.colors.backgroundSecondary,borderBottom:`1px solid ${d.colors.border}`,position:"sticky",top:0,zIndex:50,height:c,display:c?"flex":"block",alignItems:c?"center":void 0,"@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)",backgroundColor:d.colors.backgroundSecondary.replace(/, ?\d+\.?\d*\)$/,", 0.5)")},"@media":{"(maxWidth: 'sm')":{padding:c?"0":`${d.spacing.sm} 0`}}}),f=p({display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",padding:0,width:c?"100%":void 0,"@media":{"(maxWidth: 'md')":{gridTemplateColumns:"1fr",gap:d.spacing.sm}}});return o.jsx("header",{className:`${m} ${r}`,...i,children:o.jsx(Sr,{className:f,children:l})})};kn.Left=Tg;kn.Right=kg;const Nu=({children:l})=>o.jsx(wo,{children:l}),Du=({children:l})=>o.jsx(Ao,{children:l}),kr=({children:l,className:r=""})=>{const{theme:c}=_(),i=Y("popover-content"),d=c.colors.background.startsWith("#"),p=i({backgroundColor:c.colors.backgroundSecondary,borderRadius:"6px",border:`1px solid ${c.colors.border}`,boxShadow:`0 4px 12px ${d?"rgba(0,0,0,0.5)":"rgba(0,0,0,0.1)"}`,zIndex:"50",overflow:"hidden",padding:"4px",minWidth:"150px","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"}});return o.jsx(ja,{className:`${p} ${r}`,children:l})},wg=({children:l})=>{const[r,c]=b.useState(!1),i=b.useRef(void 0),d=()=>{clearTimeout(i.current),c(!0)},p=()=>{i.current=setTimeout(()=>{c(!1)},100)};return o.jsx(wo,{isOpen:r,setIsOpen:c,children:o.jsx("div",{onMouseEnter:d,onMouseLeave:p,children:l})})},Ag=({children:l})=>o.jsx(Ao,{children:l}),Rg=({children:l,className:r})=>o.jsx(kr,{className:r,children:l}),ir=({icon:l,"aria-label":r,isRound:c,className:i="",...d})=>{const m=Y("icon-button")({padding:"0.5rem",borderRadius:c?"50%":void 0});return o.jsx(be,{className:`${m} ${i}`,"aria-label":r,...d,children:o.jsx(Le,{as:l,size:"1.25em"})})},zu=({width:l="100%",height:r="1rem",variant:c="text",className:i="",style:d,...p})=>{const{theme:m}=_(),f=Y("skeleton"),x=f({"@keyframes shimmer":{"0%":{backgroundPosition:"-1000px 0"},"100%":{backgroundPosition:"1000px 0"}},animation:"shimmer 2s infinite linear",backgroundImage:`linear-gradient(90deg, ${m.colors.border} 25%, rgba(255,255,255,0.1) 50%, ${m.colors.border} 75%)`,backgroundSize:"2000px 100%"}),g=f({backgroundColor:m.colors.border,width:l,height:r,borderRadius:c==="circle"?"50%":c==="text"?"4px":"8px"});return o.jsx("div",{className:`${g} ${x} ${i}`,style:d,...p})},Ng=({src:l,fallbackSrc:r,fallback:c,fit:i="cover",radius:d="8px",className:p,...m})=>{const{theme:f}=_(),x=Y("image"),[g,v]=b.useState("loading"),C=()=>v("loaded"),A=()=>v("error"),j=x({width:"100%",height:"100%",objectFit:i,borderRadius:d}),k=g==="error"&&r?r:l;return o.jsxs(wl,{style:{position:"relative",width:"100%",height:"100%"},children:[g==="loading"&&o.jsx(zu,{variant:"rect",width:"100%",height:"100%",style:{position:"absolute",borderRadius:d}}),o.jsx("img",{src:k,onLoad:C,onError:A,className:`${j} ${p}`,style:{opacity:g==="loading"?0:1},...m}),g==="error"&&!r&&c&&o.jsx(ko,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:f.colors.border,borderRadius:d},children:c})]})},cr=({children:l,className:r})=>{const{theme:c}=_(),d=Y("kbd")({display:"inline-block",padding:"2px 6px",fontFamily:"monospace",fontSize:"12px",color:c.colors.textSecondary,backgroundColor:c.colors.border,border:"1px solid rgba(255, 255, 255, 0.1)",borderBottomWidth:"2px",borderRadius:"4px","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(4px)"}});return o.jsx("kbd",{className:`${d} ${r}`,children:l})},Dg=({children:l,z:r=0,className:c="",style:i})=>{const d=Y("layer"),{theme:p}=_(),m=d({position:"relative",zIndex:r,background:"transparent",color:p.colors.text});return o.jsx("div",{className:`${m} ${c}`,style:i,"data-layer":r,children:l})},Dl=({children:l,className:r="",...c})=>{const{theme:i}=_(),p=Y("list")({listStyle:"none",padding:0,margin:0,display:"grid",backgroundColor:"rgba(28, 28, 28, 0.5)",backdropFilter:"blur(8px)",borderRadius:"8px",border:`1px solid ${i.colors.border}`,overflow:"hidden"});return o.jsx("ul",{className:`${p} ${r}`,...c,children:l})},eo=({children:l,className:r="",...c})=>{const{theme:i}=_(),p=Y("list-item")({display:"grid",alignItems:"center",gridTemplateColumns:"1fr auto",gap:i.spacing.md,padding:`${i.spacing.sm} ${i.spacing.md}`,color:i.colors.text,transition:"background-color 0.2s","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.05)"}});return o.jsx("li",{className:`${p} ${r}`,...c,children:l})},Sv=({children:l,className:r,...c})=>{const d=Y("list-item-body")({minWidth:0});return o.jsx("div",{className:`${d} ${r}`,...c,children:l})},jo=({primary:l,secondary:r})=>{const{theme:c}=_();return o.jsxs("div",{children:[o.jsx(T,{weight:"500",children:l}),r&&o.jsx(T,{size:"0.875rem",color:c.colors.textSecondary,children:r})]})},wr=b.createContext(null),zg=({children:l,className:r=""})=>{const[c,i]=b.useState(!1),d=Cr(()=>i(!1)),p=b.useRef(null),m=b.useRef(null),f={isOpen:c,setIsOpen:i,buttonRef:p,itemsRef:m};return o.jsx(wr.Provider,{value:f,children:o.jsx("div",{ref:d,className:r,children:l})})},Mg=({children:l,className:r="",...c})=>{const i=b.useContext(wr);if(!i)throw new Error("MenuButton must be used within a Menu");const{isOpen:d,setIsOpen:p}=i,m=f=>{(f.key==="ArrowDown"||f.key==="Enter")&&(f.preventDefault(),p(!0))};return o.jsx("button",{...c,ref:i.buttonRef,className:r,onClick:()=>p(!d),onKeyDown:m,"data-active":d,"aria-expanded":d,"aria-haspopup":"true",children:l})},Eg=({children:l,className:r=""})=>{const c=b.useContext(wr);if(!c)throw new Error("MenuItems must be used within a Menu");const{isOpen:i,setIsOpen:d,buttonRef:p,itemsRef:m}=c;b.useEffect(()=>{if(i&&m.current){const g=Array.from(m.current.children).find(v=>v.getAttribute("role")==="menuitem"&&v.getAttribute("disabled")===null);setTimeout(()=>g?.focus(),0)}},[i]);const f=x=>{if(!m.current)return;const v=Array.from(m.current.children).filter(C=>C.getAttribute("role")==="menuitem"&&C.getAttribute("disabled")===null);if(v.length!==0)if(x.key==="ArrowDown"||x.key==="ArrowUp"){x.preventDefault();const C=v.findIndex(j=>j===document.activeElement);let A;x.key==="ArrowDown"?A=C>=0?(C+1)%v.length:0:A=C>0?C-1:v.length-1,v[A]?.focus()}else x.key==="Enter"||x.key===" "?(x.preventDefault(),document.activeElement&&v.includes(document.activeElement)&&document.activeElement.click()):x.key==="Escape"&&(x.preventDefault(),d(!1),p.current?.focus())};return i?o.jsx("div",{ref:m,className:r,role:"menu",onKeyDown:f,"data-active":i,children:l}):null},Lg=({children:l,className:r="",onClick:c,...i})=>{const d=b.useContext(wr);if(!d)throw new Error("MenuItem must be used within a Menu");const{setIsOpen:p}=d,m=f=>{c?.(f),p(!1)};return o.jsx("button",{...i,className:r,role:"menuitem",onClick:m,tabIndex:-1,children:l})};function jv(l){return"label"in l}const Bg=({label:l,items:r,className:c=""})=>{const{theme:i}=_(),d=Y("menu"),p=i.colors.background.startsWith("#"),m=d({position:"relative",display:"inline-block"}),f=d({padding:"6px 12px",backgroundColor:i.colors.backgroundSecondary,color:i.colors.text,border:`1px solid ${i.colors.border}`,borderRadius:"6px",cursor:"pointer",transition:"all 0.2s ease",display:"inline-grid",gridAutoFlow:"column",alignItems:"center",gap:"6px",fontSize:"14px","&:hover":{borderColor:i.colors.secondary},"&::after":{content:'"▼"',fontSize:"10px",color:i.colors.textSecondary}}),x=d({position:"absolute",top:"calc(100% + 4px)",left:"0",backgroundColor:i.colors.backgroundSecondary,borderRadius:"6px",border:`1px solid ${i.colors.border}`,boxShadow:`0 4px 12px ${p?"rgba(0,0,0,0.5)":"rgba(0,0,0,0.1)"}`,minWidth:"200px",zIndex:"50",overflow:"hidden",padding:"4px","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"}}),g=d({width:"100%",padding:"8px 12px",border:"none",backgroundColor:"transparent",textAlign:"left",cursor:"pointer",display:"flex",alignItems:"center",gap:i.spacing.sm,color:i.colors.textSecondary,transition:"all 0.2s ease",position:"relative",borderRadius:"4px",fontSize:"14px","&:hover:not(:disabled), &:focus":{backgroundColor:"rgba(255, 255, 255, 0.1)",color:i.colors.text,outline:"none",transform:"scale(1.03)"},"&:disabled":{opacity:.5,cursor:"not-allowed",backgroundColor:"transparent",color:i.colors.textSecondary}}),v=d({marginLeft:"auto",color:i.colors.textSecondary,opacity:.7,fontSize:"13px"}),C=d({height:"1px",border:"none",backgroundColor:i.colors.border,margin:"4px 0"}),A=d({padding:"8px 12px 4px",fontSize:"11px",fontWeight:"600",color:i.colors.textSecondary,textTransform:"uppercase",letterSpacing:"0.05em"}),k=r.length>0&&"items"in r[0]&&Array.isArray(r[0].items)?r:[{items:r}];return o.jsxs(zg,{className:`${m} ${c}`,children:[o.jsx(Mg,{className:f,children:l}),o.jsx(Eg,{className:x,children:k.map((z,B)=>o.jsxs(He.Fragment,{children:[z.title&&o.jsx("div",{className:A,children:z.title}),z.items.map((I,V)=>jv(I)?o.jsxs(Lg,{className:g,onClick:I.onClick,disabled:I.disabled,children:[I.icon,o.jsx("span",{children:I.label}),I.shortcut&&o.jsx("span",{className:v,children:I.shortcut})]},`${B}-${V}`):o.jsx("hr",{className:C},`${B}-${V}`)),z.divider==="after"&&B<k.length-1&&o.jsx("hr",{className:C})]},B))})]})},$g=({children:l,className:r})=>{const i=Y("nav-list")({display:"flex",alignItems:"center",gap:"0.5rem"});return o.jsx("div",{className:`${i} ${r}`,children:l})};$g.displayName="Nav.List";const Ig=({children:l,className:r,isActive:c,...i})=>{const{theme:d}=_(),m=Y("nav-item")({padding:"6px 1rem",borderRadius:"6px",color:d.colors.textSecondary,fontWeight:"400",position:"relative",textDecoration:"none",transition:"color 0.2s, background-color 0.2s",'&:hover:not([data-active="true"])':{color:d.colors.text,backgroundColor:"rgba(255, 255, 255, 0.05)"},'&[data-active="true"]':{color:d.colors.text,fontWeight:"500"}});return o.jsx(Sa,{className:`${m} ${r}`,"data-active":c,...i,children:l})};Ig.displayName="Nav.Item";const Jn=({children:l,className:r,container:c=!1,height:i,...d})=>{const m=Y("nav")({width:"100%",height:i,display:i?"flex":"block",alignItems:i?"center":void 0}),f=c?o.jsx(Sr,{children:l}):l;return o.jsx("nav",{className:`${m} ${r}`,...d,children:f})};Jn.List=$g;Jn.Item=Ig;const Og=({value:l,onChange:r,min:c,max:i,step:d=1,className:p})=>{const m=Y("number-input"),f=v=>{const C=l+(v==="up"?d:-d);c!==void 0&&C<c||i!==void 0&&C>i||r(C)},x=m({display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center"}),g=m({padding:"0 4px",minWidth:"24px",height:"100%"});return o.jsxs("div",{className:`${x} ${p}`,children:[o.jsx(Ro,{type:"number",value:l,onChange:v=>r(parseInt(v.target.value,10)),min:c,max:i,step:d,style:{borderRadius:"0.375rem 0 0 0.375rem",borderRight:0}}),o.jsxs(D,{direction:"column",gap:"2px",style:{height:"100%"},children:[o.jsx(be,{variant:"secondary",onClick:()=>f("up"),className:g,style:{borderRadius:"0 0.375rem 0 0",height:"50%"},children:"+"}),o.jsx(be,{variant:"secondary",onClick:()=>f("down"),className:g,style:{borderRadius:"0 0 0.375rem 0",height:"50%"},children:"-"})]})]})},Mu=({count:l,page:r,onChange:c,className:i=""})=>{const{theme:d}=_(),p=Y("pagination"),m=p({display:"inline-grid",gridAutoFlow:"column",alignItems:"center",gap:d.spacing.sm}),f=p({minWidth:"36px",height:"36px",padding:"0",borderRadius:"4px",justifyContent:"center"}),x=p({backgroundColor:d.colors.primary,color:d.colors.background,borderColor:d.colors.primary,"&:hover:not(:disabled)":{backgroundColor:d.colors.primary}}),g=C=>{C>=1&&C<=l&&c(C)},v=()=>{const C=[];let j,k;l<=5?(j=1,k=l):r<=Math.ceil(5/2)?(j=1,k=5):r+Math.floor(5/2)>=l?(j=l-5+1,k=l):(j=r-Math.floor(5/2),k=r+Math.floor(5/2)),j>1&&(C.push(o.jsx(be,{onClick:()=>g(1),variant:"secondary",className:f,children:"1"},1)),j>2&&C.push(o.jsx(T,{style:{padding:"0 8px"},"aria-hidden":"true",children:"..."},"start-ellipsis")));for(let z=j;z<=k;z++){const B=z===r;C.push(o.jsx(be,{onClick:()=>g(z),variant:B?"primary":"secondary",className:`${f} ${B?x:""}`,"aria-current":B?"page":void 0,disabled:B,children:z},z))}return k<l&&(k<l-1&&C.push(o.jsx(T,{style:{padding:"0 8px"},"aria-hidden":"true",children:"..."},"end-ellipsis")),C.push(o.jsx(be,{onClick:()=>g(l),variant:"secondary",className:f,children:l},l))),C};return o.jsxs("nav",{className:`${m} ${i}`,"aria-label":"Pagination",children:[o.jsx(be,{onClick:()=>g(r-1),disabled:r<=1,variant:"secondary",className:f,children:"<"}),v(),o.jsx(be,{onClick:()=>g(r+1),disabled:r>=l,variant:"secondary",className:f,children:">"})]})},Hg=({length:l=4,value:r="",onChange:c})=>{const{theme:i}=_(),d=Y("pin-input"),[p,m]=b.useState(r),f=b.useRef([]),x=(A,j)=>{const k=[...p];k[j]=A.target.value.slice(-1);const z=k.join("").slice(0,l);m(z),c?.(z),A.target.value&&j<l-1&&f.current[j+1]?.focus()},g=(A,j)=>{A.key==="Backspace"&&!A.currentTarget.value&&j>0&&f.current[j-1]?.focus()},v=A=>{A.preventDefault();const j=A.clipboardData.getData("text").slice(0,l);m(j),c?.(j);const k=Math.min(l-1,j.length-1);f.current[k]?.focus()},C=d({width:"40px",height:"40px",textAlign:"center",fontSize:"1.25rem",backgroundColor:i.colors.backgroundSecondary,border:`1px solid ${i.colors.border}`,borderRadius:"6px",color:i.colors.text,transition:"all 0.2s","&:focus":{outline:"none",borderColor:i.colors.primary,boxShadow:`0 0 0 2px ${i.colors.background}, 0 0 0 4px ${i.colors.primary}`}});return o.jsx(yr,{gap:"0.5rem",children:Array.from({length:l}).map((A,j)=>o.jsx("input",{ref:k=>{f.current[j]=k},className:C,type:"text",maxLength:1,value:p[j]||"",onChange:k=>x(k,j),onKeyDown:k=>g(k,j),onPaste:j===0?v:void 0},j))})},Ug=({value:l,size:r=48,strokeWidth:c=4,className:i="","aria-label":d="Loading progress"})=>{const{theme:p}=_(),m=Y("circular-progress"),f=l===void 0,x=m({width:`${r}px`,height:`${r}px`,position:"relative"}),g=m({transform:"rotate(-90deg)",animation:f?"$spin 1.4s linear infinite":void 0,"@keyframes spin":{"0%":{transform:"rotate(-90deg)"},"100%":{transform:"rotate(270deg)"}}}),v=(r-c)/2,C=2*Math.PI*v,A=l!==void 0?C-l/100*C:void 0,j=m({stroke:"rgba(255, 255, 255, 0.1)",fill:"transparent"}),k=m({stroke:p.colors.primary,fill:"transparent",strokeLinecap:"round",transition:"stroke-dashoffset 0.3s",animation:f?"$dash 1.4s ease-in-out infinite":void 0,"@keyframes dash":{"0%":{strokeDasharray:"1, 200",strokeDashoffset:"0"},"50%":{strokeDasharray:"89, 200",strokeDashoffset:"-35px"},"100%":{strokeDasharray:"89, 200",strokeDashoffset:"-124px"}}});return o.jsx("div",{className:`${x} ${i}`,role:"progressbar","aria-valuenow":f?void 0:l,"aria-valuemin":f?void 0:0,"aria-valuemax":f?void 0:100,"aria-label":d,children:o.jsxs("svg",{width:r,height:r,viewBox:`0 0 ${r} ${r}`,className:g,children:[o.jsx("circle",{className:j,cx:r/2,cy:r/2,r:v,strokeWidth:c}),o.jsx("circle",{className:k,cx:r/2,cy:r/2,r:v,strokeWidth:c,strokeDasharray:C,strokeDashoffset:A})]})})},Pg=({value:l,height:r="4px",className:c="","aria-label":i="Loading progress"})=>{const{theme:d}=_(),p=Y("linear-progress"),m=l===void 0,f=p({width:"100%",height:r,backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:r,overflow:"hidden",position:"relative"}),x=p({height:"100%",backgroundColor:d.colors.primary,borderRadius:r,transition:"width 0.3s ease-out",width:m?"100%":`${l}%`,position:"absolute",animation:m?"$indeterminate 1.5s ease-in-out infinite":"none","@keyframes indeterminate":{"0%":{left:"-100%",width:"100%"},"100%":{left:"100%",width:"10%"}}});return o.jsx("div",{className:`${f} ${c}`,role:"progressbar","aria-valuenow":m?void 0:l,"aria-valuemin":m?void 0:0,"aria-valuemax":m?void 0:100,"aria-label":i,children:o.jsx("div",{className:x})})},_g=b.createContext(null),Tv=()=>{const l=b.useContext(_g);if(!l)throw new Error("RadioGroupItem must be used within a RadioGroup.");return l},Gg=({children:l,value:r,onChange:c,name:i,label:d,className:p})=>o.jsx(_g.Provider,{value:{value:r,onChange:c,name:i},children:o.jsxs("div",{role:"radiogroup","aria-label":d,className:p,children:[d&&o.jsx(T,{as:"span",style:{marginBottom:"0.5rem",display:"block"},children:d}),l]})}),Ws=({value:l,label:r,className:c})=>{const{value:i,onChange:d,name:p}=Tv(),{theme:m}=_(),f=Y("radio-item"),x=i===l,g=f({display:"flex",alignItems:"center",gap:m.spacing.sm,cursor:"pointer",padding:`${m.spacing.sm} 0`}),v=f({width:"18px",height:"18px",borderRadius:"50%",border:`2px solid ${x?m.colors.primary:m.colors.border}`,display:"grid",placeContent:"center",transition:"all 0.2s"}),C=f({width:"10px",height:"10px",borderRadius:"50%",backgroundColor:m.colors.primary,transform:x?"scale(1)":"scale(0)",transition:"transform 0.2s"}),A=f({position:"absolute",opacity:0,width:0,height:0,"&:focus-visible + span":{boxShadow:`0 0 0 2px ${m.colors.background}, 0 0 0 4px ${m.colors.primary}`}});return o.jsxs("label",{className:`${g} ${c}`,children:[o.jsx("input",{type:"radio",name:p,value:l,checked:x,onChange:()=>d(l),className:A}),o.jsx("span",{className:v,children:o.jsx("span",{className:C})}),o.jsx(T,{as:"span",children:r})]})},Vg=({value:l,onChange:r,max:c=5,readonly:i=!1,size:d="medium",className:p=""})=>{const{theme:m}=_(),f=Y("rating"),x=f({display:"inline-grid",gridAutoFlow:"column",gap:m.spacing.xs,padding:m.spacing.sm,backgroundColor:"rgba(0, 0, 0, 0.3)",backdropFilter:"blur(8px)",borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.1)",cursor:i?"default":"pointer","&:focus":{outline:"none"},"&:focus-visible":{boxShadow:`0 0 0 2px ${m.colors.background}, 0 0 0 4px ${m.colors.primary}`}}),g={small:"16px",medium:"24px",large:"32px"},v=f({width:g[d],height:g[d],position:"relative",transition:"all 0.2s ease",pointerEvents:"none","&::before":{content:'"★"',position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:g[d],color:"rgba(255, 255, 255, 0.2)",textShadow:"none",transition:"all 0.2s ease"},'&[data-filled="true"]::before':{color:m.colors.primary,textShadow:`0 0 10px ${m.colors.primary}, 0 0 20px ${m.colors.primary}`}}),C=k=>{!i&&r&&r(k+1)},j=i?{}:{tabIndex:0,role:"slider","aria-valuemin":0,"aria-valuemax":c,"aria-valuenow":l,"aria-label":"Rating",onKeyDown:k=>{if(i||!r)return;let z=l;k.key==="ArrowRight"?z=Math.min(c,l+1):k.key==="ArrowLeft"?z=Math.max(0,l-1):k.key==="Home"?z=0:k.key==="End"&&(z=c),z!==l&&(k.preventDefault(),r(z))}};return o.jsx("div",{className:`${x} ${p}`,...j,role:i?"img":"slider","aria-label":i?`${l} out of ${c} stars`:"Rating",children:Array.from({length:c},(k,z)=>o.jsx("span",{className:v,"data-filled":z<l,onClick:()=>C(z),"aria-hidden":"true"},z))})},kv=()=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("circle",{cx:"11",cy:"11",r:"8"}),o.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),Eu=({className:l="",...r})=>{const{theme:c}=_(),i=Y("search"),d=i({position:"relative",width:"100%"}),p=i({position:"absolute",top:"50%",left:"12px",transform:"translateY(-50%)",color:c.colors.textSecondary,pointerEvents:"none"}),m=i({paddingLeft:"36px"});return o.jsxs("div",{className:`${d} ${l}`,children:[o.jsx("span",{className:p,children:o.jsx(kv,{})}),o.jsx(Ro,{className:m,...r})]})},Be=({options:l,value:r,onChange:c,className:i})=>{const{theme:d}=_(),p=Y("segmented-control"),m=p({display:"inline-flex",backgroundColor:d.colors.backgroundSecondary,borderRadius:"8px",padding:"4px",border:`1px solid ${d.colors.border}`,"@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"}}),f=p({padding:"6px 16px",border:"none",background:"transparent",color:d.colors.textSecondary,cursor:"pointer",borderRadius:"6px",transition:"all 0.2s",'&[data-active="true"]':{backgroundColor:d.colors.backgroundSecondary,color:d.colors.text,boxShadow:"0 1px 3px rgba(0,0,0,0.3)"}});return o.jsx("div",{className:`${m} ${i}`,children:l.map(x=>o.jsx("button",{className:f,"data-active":r===x.value,onClick:()=>c(x.value),children:x.label},x.value))})},qg=({value:l,onChange:r,options:c,disabled:i=!1,className:d=""})=>{const{theme:p}=_(),m=Y("select"),[f,x]=b.useState(!1),g=c.find(k=>k.value===l),v=m({width:"auto",padding:"2px 8px",backgroundColor:"transparent",color:p.colors.textSecondary,border:"1px solid transparent",borderRadius:"6px",cursor:i?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",fontSize:"14px",transition:"all 0.2s ease","&:hover":i?void 0:{backgroundColor:p.colors.border,color:p.colors.text},"&::after":{content:'"▼"',marginLeft:p.spacing.sm,fontSize:"10px",transition:"transform 0.2s ease",transform:f?"rotate(180deg)":"none"}}),C=m({backgroundColor:p.colors.backgroundSecondary,border:`1px solid ${p.colors.border}`,borderRadius:"6px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.5)",marginTop:"4px",minWidth:"180px",zIndex:100,padding:"4px","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"}}),A=m({padding:"6px 10px",cursor:"pointer",transition:"all 0.2s ease",color:p.colors.text,borderRadius:"4px",fontSize:"14px","&:hover":{backgroundColor:p.colors.primary,color:"#fff"},'&[data-selected="true"]':{fontWeight:"500"}}),j=k=>{i||(r(k),x(!1))};return o.jsxs(wo,{isOpen:f,setIsOpen:x,children:[o.jsx(Ao,{children:o.jsx("button",{className:v,disabled:i,children:g?.label})}),o.jsx(ja,{className:C,children:c.map(k=>o.jsx("div",{className:A,onClick:()=>j(k.value),"data-selected":k.value===l,children:k.label},k.value))})]})},Lu=({children:l,width:r="250px",height:c="100%",className:i})=>{const{theme:d}=_(),m=Y("sidebar")({width:r,height:c,backgroundColor:d.colors.backgroundSecondary,borderRight:`1px solid ${d.colors.border}`,padding:d.spacing.md,display:"flex",flexDirection:"column",gap:d.spacing.lg,"@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"}});return o.jsx("aside",{className:`${m} ${i}`,children:l})},tn=({children:l,title:r})=>{const{theme:c}=_(),i=Y("sidebar-nav"),d=i({display:"flex",flexDirection:"column",gap:c.spacing.xs}),p=i({padding:`0 ${c.spacing.sm}`,fontSize:"12px",fontWeight:600,color:c.colors.textSecondary,marginBottom:c.spacing.sm});return o.jsxs("nav",{children:[r&&o.jsx("h3",{className:p,children:r}),o.jsx("div",{className:d,children:l})]})},ur=({children:l,icon:r,isActive:c,className:i,...d})=>{const{theme:p}=_(),f=Y("sidebar-nav-item")({display:"flex",alignItems:"center",gap:p.spacing.md,padding:`${p.spacing.sm} ${p.spacing.md}`,borderRadius:"6px",color:c?p.colors.text:p.colors.textSecondary,backgroundColor:c?p.colors.backgroundSecondary:"transparent",textDecoration:"none",transition:"all 0.2s","&:hover":{backgroundColor:p.colors.backgroundSecondary,color:p.colors.text}});return o.jsxs("a",{className:`${f} ${i}`,...d,children:[r&&o.jsx(Le,{as:r,size:16}),o.jsx("span",{children:l})]})},Yg=({snackbar:l,onDismiss:r})=>{const{theme:c}=_(),i=Y("snackbar"),{isRendered:d,isVisible:p,show:m,hide:f}=Al(!1,200);b.useEffect(()=>{m();const C=l.duration||5e3,A=setTimeout(()=>{f()},C),j=setTimeout(()=>{r(l.id)},C+300);return()=>{clearTimeout(A),clearTimeout(j)}},[l,r,m,f]);const x=i({backgroundColor:"#323232",borderRadius:"4px",boxShadow:"0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)",padding:"6px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:c.spacing.md,minWidth:"344px",maxWidth:"568px",color:"#fff"}),g=i({color:c.colors.primary,fontWeight:"600",padding:"0.25rem 0.5rem",backgroundColor:"transparent","&:hover:not(:disabled)":{backgroundColor:"rgba(255, 255, 255, 0.1)"}});if(!d)return null;const v=()=>{l.action?.onClick(),f(),setTimeout(()=>r(l.id),200)};return o.jsxs("div",{className:x,style:{opacity:p?1:0,transition:"opacity 0.2s, transform 0.2s",transform:p?"translateY(0)":"translateY(20px)"},role:"alert","aria-live":"assertive",children:[o.jsx(T,{size:"14px",color:"inherit",children:l.message}),l.action&&o.jsx(be,{variant:"secondary",className:g,onClick:v,children:l.action.label})]})},Bu=b.createContext(null),Fg=()=>{const l=b.useContext(Bu);if(!l)throw new Error("useSnackbar must be used within a SnackbarProvider");return l},Xg=({children:l})=>{const[r,c]=b.useState([]),i=Y("snackbar-container"),d=b.useCallback(f=>{const g={id:new Date().getTime().toString(),duration:5e3,...f};c(v=>[...v,g])},[]),p=b.useCallback(f=>{c(x=>x.filter(g=>g.id!==f))},[]),m=i({position:"fixed",bottom:"1rem",left:"50%",transform:"translateX(-50%)",zIndex:1e3,display:"grid",gap:"0.75rem",justifyItems:"center"});return o.jsxs(Bu.Provider,{value:{addSnackbar:d},children:[l,Nl.createPortal(o.jsx("div",{className:m,children:r.map(f=>o.jsx(Yg,{snackbar:f,onDismiss:p},f.id))}),document.body)]})},ht=({children:l,className:r="",title:c,description:i,...d})=>{const{theme:p}=_(),f=Y("sofa")({padding:"24px",backgroundColor:p.colors.backgroundSecondary,borderRadius:"8px",border:`1px solid ${p.colors.border}`,transition:"background-color 0.3s, border-color 0.3s","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"}});return o.jsx("div",{className:`${f} ${r}`,...d,children:c||i?o.jsxs(D,{gap:"1rem",children:[c&&o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:c}),i&&o.jsx(T,{children:i}),o.jsx("div",{children:l})]}):l})},Kg=({actions:l,position:r={bottom:"2rem",right:"2rem"}})=>{const[c,i]=b.useState(!1),{theme:d}=_(),p=Y("speed-dial"),m=Cr(()=>i(!1)),f=p({position:"fixed",...r,zIndex:45,display:"flex",flexDirection:"column-reverse",alignItems:"center",gap:"1rem"}),x=v=>p({display:"flex",alignItems:"center",gap:"1rem",transition:`all 0.3s ease ${v*.05}s`,opacity:c?1:0,transform:c?"translateY(0)":"translateY(10px)"}),g=p({backgroundColor:d.colors.backgroundSecondary,color:d.colors.text,padding:"0.25rem 0.75rem",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.3)",whiteSpace:"nowrap"});return o.jsxs("div",{ref:m,className:f,children:[o.jsx(rr,{icon:c?gr:du,label:c?"Close actions":"Open actions",onClick:()=>i(!c)}),o.jsx(D,{direction:"column-reverse",align:"end",gap:"1.5rem",children:l.map((v,C)=>o.jsxs("div",{className:x(C),children:[o.jsx("div",{className:g,children:o.jsx(T,{size:d.typography.fontSizes.sm,children:v.label})}),o.jsx(rr,{icon:v.icon,label:v.label,onClick:()=>{v.onClick(),i(!1)},size:"small",position:{},style:{position:"relative"}})]},v.label))})]})},zl=({size:l=24,className:r})=>{const{theme:c}=_(),d=Y("spinner")({width:`${l}px`,height:`${l}px`,border:"2px solid transparent",borderTopColor:c.colors.primary,borderRadius:"50%",animation:"spin 0.8s linear infinite","@keyframes spin":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}});return o.jsx("div",{className:`${d} ${r}`,role:"status","aria-label":"Loading"})},Qg=({activeStep:l,steps:r,className:c})=>{const{theme:i}=_(),d=Y("stepper"),p=d({display:"flex",alignItems:"flex-start"}),m=d({display:"flex",alignItems:"center",position:"relative",flex:1,"&:last-child":{flex:"0 1 auto"},"&:last-child > div:last-child":{display:"none"}}),f=d({textAlign:"center",minWidth:"60px"}),x=v=>d({width:"32px",height:"32px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"600",transition:"all 0.3s",backgroundColor:v<=l?i.colors.primary:i.colors.border,color:v<=l?"#fff":i.colors.textSecondary,border:`2px solid ${v<=l?i.colors.primary:"transparent"}`,margin:"0 auto",marginBottom:i.spacing.sm}),g=v=>d({height:"2px",flex:1,backgroundColor:v<l?i.colors.primary:i.colors.border,transition:"background-color 0.3s",margin:"0 -1px",position:"relative",top:"16px"});return o.jsx("div",{className:`${p} ${c}`,children:r.map((v,C)=>o.jsxs("div",{className:m,children:[o.jsxs("div",{className:f,children:[o.jsx("div",{className:x(C),children:C+1}),o.jsx(T,{size:"14px",weight:C===l?600:400,children:v.label})]}),o.jsx("div",{className:g(C)})]},C))})},Zg=({label:l,id:r,checked:c,disabled:i,...d})=>{const{theme:p}=_(),m=Y("switch"),f=m({display:"inline-flex",alignItems:"center",gap:p.spacing.sm,cursor:i?"not-allowed":"pointer",opacity:i?.6:1}),x=m({width:"40px",height:"22px",borderRadius:"999px",backgroundColor:c?p.colors.primary:p.colors.border,position:"relative",transition:"all 0.2s"}),g=m({width:"18px",height:"18px",borderRadius:"50%",backgroundColor:"#fff",position:"absolute",top:"2px",left:c?"20px":"2px",transition:"left 0.2s ease"}),v=m({position:"absolute",opacity:0,width:0,height:0,"&:focus-visible + div":{boxShadow:`0 0 0 2px ${p.colors.background}, 0 0 0 4px ${p.colors.primary}`}});return o.jsxs("label",{htmlFor:r,className:f,children:[o.jsx("input",{type:"checkbox",id:r,checked:c,disabled:i,role:"switch","aria-checked":c,...d,className:v}),o.jsx("div",{className:x,children:o.jsx("div",{className:g})}),l&&o.jsx("span",{children:l})]})},$u=({children:l,className:r,...c})=>{const d=Y("table")({width:"100%",borderCollapse:"collapse",textAlign:"left"});return o.jsx("table",{className:`${d} ${r}`,...c,children:l})},Iu=({children:l,className:r,...c})=>o.jsx("thead",{className:r,...c,children:l}),Ou=({children:l,className:r,...c})=>o.jsx("tbody",{className:r,...c,children:l}),kl=({children:l,className:r,...c})=>{const{theme:i}=_(),p=Y("table-row")({transition:"background-color 0.2s","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.05)"}});return o.jsx("tr",{className:`${p} ${r}`,...c,children:l})},ga=({children:l,className:r,...c})=>{const{theme:i}=_(),p=Y("table-head")({padding:"12px 16px",borderBottom:`1px solid ${i.colors.border}`,color:i.colors.textSecondary,fontWeight:"600",fontSize:"12px",textTransform:"uppercase"});return o.jsx("th",{className:`${p} ${r}`,scope:"col",...c,children:l})},xa=({children:l,className:r,...c})=>{const{theme:i}=_(),p=Y("table-cell")({padding:"12px 16px",borderBottom:`1px solid ${i.colors.border}`});return o.jsx("td",{className:`${p} ${r}`,...c,children:l})},Wg=b.createContext(null),Jg=()=>{const l=b.useContext(Wg);if(!l)throw new Error("Tab components must be used within a <Tabs> component.");return l},ex=({defaultValue:l,children:r,className:c})=>{const[i,d]=b.useState(l),p=b.useRef(`tabs-${Math.random().toString(36).substring(2,9)}`).current;return o.jsx(Wg.Provider,{value:{activeTab:i,setActiveTab:d,baseId:p},children:o.jsx("div",{className:c,children:r})})},tx=({children:l,className:r})=>{const{theme:c}=_(),i=Y("tabs-list"),d=b.useRef([]);b.useEffect(()=>{d.current=d.current.slice(0,He.Children.count(l))},[l]);const p=i({backgroundColor:"rgba(28, 28, 28, 0.5)",borderRadius:"8px",padding:"4px",display:"inline-flex",gap:"4px",border:`1px solid ${c.colors.border}`,marginBottom:c.spacing.lg,"@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(12px)"}}),m=f=>{if(f.key==="ArrowRight"||f.key==="ArrowLeft"){f.preventDefault();const x=d.current.findIndex(C=>C===document.activeElement);if(x===-1)return;const g=f.key==="ArrowRight"?1:-1,v=(x+g+d.current.length)%d.current.length;d.current[v]?.focus()}};return o.jsx("div",{role:"tablist","aria-orientation":"horizontal",className:`${p} ${r}`,onKeyDown:m,children:He.Children.map(l,(f,x)=>He.isValidElement(f)?He.cloneElement(f,{ref:g=>d.current[x]=g}):f)})},tu=He.forwardRef(({value:l,children:r,className:c},i)=>{const{activeTab:d,setActiveTab:p,baseId:m}=Jg(),{theme:f}=_(),x=Y("tab"),g=d===l,v=x({padding:"6px 16px",borderRadius:"6px",background:"none",border:"none",color:f.colors.textSecondary,cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"color 0.3s, background-color 0.3s",'&[data-active="true"]':{color:f.colors.text,backgroundColor:f.colors.backgroundSecondary},'&:hover:not([data-active="true"])':{color:f.colors.text},"&:focus-visible":{outline:`2px solid ${f.colors.primary}`,outlineOffset:"2px"}});return o.jsx("button",{ref:i,id:`${m}-tab-${l}`,onClick:()=>p(l),className:`${v} ${c}`,role:"tab","aria-selected":g,"aria-controls":`${m}-panel-${l}`,"data-active":g,tabIndex:g?0:-1,children:r})}),nx=({children:l,className:r})=>o.jsx("div",{className:r,children:l}),nu=({value:l,children:r,className:c})=>{const{activeTab:i,baseId:d}=Jg();return i===l?o.jsx("div",{id:`${d}-panel-${l}`,role:"tabpanel","aria-labelledby":`${d}-tab-${l}`,className:c,children:r}):null},wv=({children:l,variant:r="solid",colorScheme:c="primary",size:i="md",className:d="",...p})=>{const{theme:m}=_(),f=Y("tag"),g={primary:m.colors.primary,accent:m.colors.accent,success:"#10b981",error:"#ef4444"}[c],v={solid:{backgroundColor:Ca(g,.2),color:g,border:"1px solid transparent"},outline:{backgroundColor:"transparent",color:g,border:`1px solid ${g}`}},C={sm:{padding:"0.1rem 0.4rem",fontSize:"11px"},md:{padding:"0.125rem 0.625rem",fontSize:"12px"},lg:{padding:"0.25rem 0.75rem",fontSize:"14px"}},A=f({display:"inline-flex",alignItems:"center",gap:"0.3rem",fontWeight:"500",borderRadius:"999px",lineHeight:"1.25",...v[r],...C[i]});return o.jsx("span",{className:`${A} ${d}`,...p,children:l})},Av=l=>{const c=Y("tag-close-button")({display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",background:"none",border:"none",cursor:"pointer",color:"inherit",opacity:.6,marginLeft:"0.25rem","&:hover":{opacity:1,backgroundColor:"rgba(255, 255, 255, 0.1)"}});return o.jsx("button",{className:c,"aria-label":"Remove tag",...l,children:o.jsx(Le,{as:gr,size:"0.8em"})})},dr=wv;dr.CloseButton=Av;const Ml=({className:l="",...r})=>{const{theme:c}=_(),i=Y("textarea"),d=c.colors.background.startsWith("#1"),p=i({display:"block",width:"100%",backgroundColor:c.colors.backgroundSecondary,border:`1px solid ${c.colors.border}`,borderRadius:"0.375rem",padding:"0.5rem 0.75rem",color:c.colors.text,transition:"all 0.2s","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(8px)"},"&::placeholder":{color:c.colors.textSecondary},"&:focus":{outline:"none",boxShadow:`0 0 0 2px ${d?c.colors.background:"#fff"}, 0 0 0 4px ${c.colors.primary}`}});return o.jsx("textarea",{className:`${p} ${l}`,...r})},Rv=()=>{const{theme:l,mode:r,switchTheme:c,setCustomTheme:i}=_(),[d,p]=b.useState(l.colors.primary),[m,f]=b.useState(l.colors.background),[x,g]=b.useState(l.colors.text),v=Kc(d,300),C=Kc(m,300),A=Kc(x,300);return b.useEffect(()=>{if(r==="custom"){const j={...l,colors:{...l.colors,primary:v,background:C,text:A}};i(j)}},[v,C,A,r]),b.useEffect(()=>{p(l.colors.primary),f(l.colors.background),g(l.colors.text)},[l.colors.primary,l.colors.background,l.colors.text]),o.jsx(gt,{title:"Theme Settings",children:o.jsxs(D,{gap:"1rem",children:[o.jsx(Be,{options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"},{label:"Custom",value:"custom"}],value:r,onChange:j=>c(j)}),r==="custom"&&o.jsxs(D,{direction:"row",gap:"1rem",align:"end",style:{transition:"opacity 0.3s",opacity:1},children:[o.jsx(re,{label:"Primary",value:d,onChange:j=>p(j.target.value)}),o.jsx(re,{label:"Background",value:m,onChange:j=>f(j.target.value)}),o.jsx(re,{label:"Text",value:x,onChange:j=>g(j.target.value)})]})]})})},ox=({children:l,className:r})=>{const i=Y("timeline-list")({listStyle:"none",padding:0,margin:0});return o.jsx("ul",{className:`${i} ${r}`,children:l})},Js=({children:l,isLast:r})=>{const i=Y("timeline-item")({display:"flex",position:"relative",paddingBottom:r?"0":"2rem"});return o.jsx("li",{className:i,children:l})},ou=()=>{const{theme:l}=_(),c=Y("timeline-connector")({width:"2px",backgroundColor:l.colors.border,position:"absolute",top:"12px",bottom:"-12px",left:"11px"});return o.jsx("div",{className:c})},er=({children:l,className:r})=>{const{theme:c}=_(),d=Y("timeline-dot")({width:"24px",height:"24px",borderRadius:"50%",backgroundColor:c.colors.primary,border:`3px solid ${c.colors.background}`,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1,flexShrink:0,color:"#fff"});return o.jsx("div",{className:`${d} ${r}`,children:l})},tr=({children:l,className:r})=>{const i=Y("timeline-content")({marginLeft:"1.5rem"});return o.jsx("div",{className:`${i} ${r}`,children:l})},Nv={info:Cf,success:Sf,warning:jf,error:vf},ax=({toast:l,onDismiss:r})=>{const{theme:c}=_(),i=Y("toast"),{isRendered:d,isVisible:p,show:m,hide:f}=Al(!1);b.useEffect(()=>{m();const A=setTimeout(()=>{f()},l.duration),j=setTimeout(()=>{r(l.id)},l.duration+300);return()=>{clearTimeout(A),clearTimeout(j)}},[l,r,m,f]);const x={info:c.colors.primary,success:"#10b981",warning:c.colors.accent,error:"#ef4444"},g=i({backgroundColor:c.colors.backgroundSecondary,borderRadius:"8px",border:`1px solid ${c.colors.border}`,borderLeft:`5px solid ${x[l.variant]}`,boxShadow:"0 8px 24px rgba(0,0,0,0.5)",padding:"12px 16px",display:"flex",alignItems:"center",gap:c.spacing.md,width:"360px",maxWidth:"90vw","@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(16px)"}}),v=i({color:x[l.variant],flexShrink:0,width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center"});if(!d)return null;const C=Nv[l.variant];return o.jsxs("div",{className:g,style:{opacity:p?1:0,transition:"all 0.3s cubic-bezier(0.21, 1.02, 0.73, 1)",transform:p?"translateX(0)":"translateX(20px)"},role:"alert","aria-live":"assertive",children:[o.jsx("div",{className:v,"aria-hidden":"true",children:o.jsx(C,{})}),o.jsxs("div",{children:[o.jsx(T,{weight:"600",children:l.title}),l.description&&o.jsx(T,{size:"14px",color:c.colors.textSecondary,children:l.description})]})]})},Hu=b.createContext(null),Ta=()=>{const l=b.useContext(Hu);if(!l)throw new Error("useToast must be used within a ToastProvider");return l},lx=({children:l})=>{const[r,c]=b.useState([]),i=Y("toast-container"),d=b.useCallback(f=>{const g={id:new Date().getTime().toString(),duration:5e3,variant:"info",...f};c(v=>[...v,g])},[]),p=b.useCallback(f=>{c(x=>x.filter(g=>g.id!==f))},[]),m=i({position:"fixed",top:"1rem",right:"1rem",zIndex:1e3,display:"grid",gap:"0.75rem"});return o.jsxs(Hu.Provider,{value:{addToast:d},children:[l,Nl.createPortal(o.jsx("div",{className:m,children:r.map(f=>o.jsx(ax,{toast:f,onDismiss:p},f.id))}),document.body)]})},sx=b.createContext(null),rx=()=>{const l=b.useContext(sx);if(!l)throw new Error("ToggleButton must be used within a ToggleButtonGroup.");return l},au=({children:l,value:r,onChange:c,type:i="single",className:d})=>{const{theme:p}=_(),f=Y("toggle-button-group")({display:"inline-flex",borderRadius:"8px",overflow:"hidden",border:`1px solid ${p.colors.border}`});return o.jsx(sx.Provider,{value:{value:r,onChange:c,type:i},children:o.jsx("div",{className:`${f} ${d}`,role:i==="single"?"radiogroup":"group",children:l})})},So=({children:l,value:r,...c})=>{const{value:i,onChange:d,type:p}=rx(),{theme:m}=_(),f=Y("toggle-button"),x=p==="multiple"?i?.includes(r):i===r,g=f({padding:"0.5rem 1rem",border:"none",borderRight:`1px solid ${m.colors.border}`,backgroundColor:x?m.colors.primary:"transparent",color:x?"#fff":m.colors.textSecondary,cursor:"pointer",transition:"all 0.2s","&:last-child":{borderRight:"none"},"&:hover":{backgroundColor:x?m.colors.primary:"rgba(255, 255, 255, 0.05)"}}),v=()=>{if(p==="single")d(r);else{const C=i||[],A=C.includes(r)?C.filter(j=>j!==r):[...C,r];d(A)}};return o.jsx("button",{className:g,onClick:v,"aria-pressed":x,...c,children:l})},ix=({initialLeft:l,initialRight:r,leftTitle:c="Choices",rightTitle:i="Chosen"})=>{const{theme:d}=_(),[p,m]=b.useState(l),[f,x]=b.useState(r),[g,v]=b.useState(new Set),C=p.filter(I=>g.has(I.id)),A=f.filter(I=>g.has(I.id)),j=I=>{const V=new Set(g);V.has(I.id)?V.delete(I.id):V.add(I.id),v(V)},k=()=>{x(f.concat(C)),m(p.filter(V=>!g.has(V.id)));const I=new Set(g);C.forEach(V=>I.delete(V.id)),v(I)},z=()=>{m(p.concat(A)),x(f.filter(V=>!g.has(V.id)));const I=new Set(g);A.forEach(V=>I.delete(V.id)),v(I)},B=({title:I,items:V})=>o.jsx(gt,{title:I,style:{height:"300px",display:"flex",flexDirection:"column"},children:o.jsx(Dl,{style:{flex:1,overflowY:"auto",backgroundColor:"transparent",border:"none"},children:V.map(K=>o.jsx(eo,{onClick:()=>j(K),style:{cursor:"pointer",padding:`${d.spacing.sm} 0`},children:o.jsx(Ke,{checked:g.has(K.id),label:K.label,readOnly:!0})},K.id))})});return o.jsxs(D,{direction:"row",align:"center",gap:"1rem",children:[o.jsx("div",{style:{flex:1},children:o.jsx(B,{title:c,items:p})}),o.jsxs(D,{direction:"column",gap:"0.5rem",children:[o.jsx(be,{variant:"secondary",onClick:k,disabled:C.length===0,children:">"}),o.jsx(be,{variant:"secondary",onClick:z,disabled:A.length===0,children:"<"})]}),o.jsx("div",{style:{flex:1},children:o.jsx(B,{title:i,items:f})})]})},cx=b.createContext(null),Uu=()=>{const l=b.useContext(cx);if(!l)throw new Error("useTreeViewContext must be used within a TreeView provider.");return l},ux=(l,r)=>{const{expandedIds:c,selectedIds:i,toggleExpand:d,toggleSelect:p,itemRefs:m}=Uu(),f=c.has(l.id),x=i.has(l.id),g=!!(l.children&&l.children.length>0);return{node:l,isExpanded:f,isExpandable:g,isSelected:x,level:r,getTreeItemProps:(A={})=>({...A,ref:j=>{m&&m.current.set(l.id,j)},role:"treeitem","aria-expanded":g?f:void 0,"aria-selected":x,tabIndex:-1,onClick:j=>{p(j,l.id),j.target.closest("[data-zwtv-toggle]")||g&&d(l.id),A.onClick?.(j)}}),getToggleProps:(A={})=>({...A,"data-zwtv-toggle":!0,onClick:j=>{j.stopPropagation(),g&&d(l.id),A.onClick?.(j)}})}},Dv=l=>{const{node:r,isExpanded:c,isExpandable:i,isSelected:d,level:p,getTreeItemProps:m,getToggleProps:f}=l,{expandIcon:x,collapseIcon:g,defaultEndIcon:v}=Uu(),{theme:C}=_(),A=Y("tree-item-default"),j=A({display:"flex",alignItems:"center",padding:"4px 8px",paddingLeft:`calc(${p} * 1.5rem)`,borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s, color 0.2s",color:d?C.colors.text:C.colors.textSecondary,backgroundColor:d?"rgba(59, 130, 246, 0.2)":"transparent","&:hover":{backgroundColor:d?"rgba(59, 130, 246, 0.3)":"rgba(255, 255, 255, 0.05)",color:C.colors.text},"&:focus":{outline:"none",boxShadow:`0 0 0 2px ${C.colors.background}, 0 0 0 4px ${C.colors.primary}`}}),k=A({width:"16px",height:"16px",marginRight:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}),z=()=>{if(!i)return v?o.jsx("div",{className:k,children:v}):o.jsx("span",{style:{width:"16px",marginRight:"0.5rem"}});if(x||g)return c?g:x;const B=A({transition:"transform 0.2s",transform:c?"rotate(90deg)":"rotate(0deg)"});return o.jsx(Le,{as:xr,size:16,className:B})};return o.jsxs("div",{...m({className:j}),children:[o.jsx("div",{...f({className:k}),children:z()}),o.jsx("span",{children:r.label})]})},dx=({nodeId:l,level:r})=>{const{nodesById:c,item:i,groupTransition:d}=Uu(),p=c.get(l);if(!p)return null;const m=ux(p,r),f=i||Dv,x=d||He.Fragment,g=d?x:"div";return o.jsxs(o.Fragment,{children:[o.jsx(f,{...m}),m.isExpandable&&p.children&&o.jsx(g,{...d&&{in:m.isExpanded},children:o.jsx("div",{role:"group",children:m.isExpanded&&p.children.map(v=>o.jsx(dx,{nodeId:v.id,level:r+1},v.id))})})]})},px=(l,r=null,c,i)=>{l.forEach(d=>{c.set(d.id,d),i.set(d.id,r),d.children&&px(d.children,d.id,c,i)})},pr=b.forwardRef(({data:l,selectionMode:r="single",defaultSelectedIds:c=[],defaultExpandedIds:i=[],onSelectionChange:d,onExpansionChange:p,item:m,...f},x)=>{const[g,v]=b.useState(new Set(i)),[C,A]=b.useState(new Set(c)),j=b.useRef(new Map);b.useImperativeHandle(x,()=>({focusItem:K=>{j.current.get(K)?.focus({preventScroll:!1})}}));const{nodesById:k,nodeParents:z}=b.useMemo(()=>{const K=new Map,G=new Map;return px(l,null,K,G),{nodesById:K,nodeParents:G}},[l]);b.useEffect(()=>{p?.(Array.from(g))},[g,p]),b.useEffect(()=>{d?.(Array.from(C))},[C,d]);const B=b.useCallback(K=>{v(G=>{const Q=new Set(G);return Q.has(K)?Q.delete(K):Q.add(K),Q})},[]),I=b.useCallback((K,G)=>{const Q=r==="multiple"&&(K.ctrlKey||K.metaKey);A(ue=>{const J=Q?new Set(ue):new Set;return J.has(G)&&Q?J.delete(G):J.add(G),J})},[r]),V={expandedIds:g,selectedIds:C,nodesById:k,nodeParents:z,toggleExpand:B,toggleSelect:I,itemRefs:j,item:m,...f};return o.jsx(cx.Provider,{value:V,children:o.jsx("div",{role:"tree",children:l.map(K=>o.jsx(dx,{nodeId:K.id,level:0},K.id))})})});pr.displayName="TreeView";const Pu=b.createContext(null),ka=()=>{const l=b.useContext(Pu);if(!l)throw new Error("useVideo must be used within a Video provider");return l},_u=({children:l,className:r})=>{const c=b.useRef(null),[i,d]=b.useState(!1),[p,m]=b.useState(0),[f,x]=b.useState(0),[g,v]=b.useState(1),[C,A]=b.useState(!1),{theme:j}=_(),z=Y("video-container")({backgroundColor:j.colors.backgroundSecondary,borderRadius:"8px",border:`1px solid ${j.colors.border}`,"@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)":{backdropFilter:"blur(12px)"}}),B=()=>{const Q=c.current;Q&&(Q.paused?Q.play():Q.pause())},I=Q=>{c.current&&(c.current.currentTime=Q)},V=Q=>{if(c.current){const ue=Math.max(0,Math.min(1,Q));c.current.muted=ue===0,c.current.volume=ue}},K=()=>{c.current&&(c.current.muted=!c.current.muted)};b.useEffect(()=>{const Q=c.current;if(!Q)return;const ue=()=>d(!0),J=()=>d(!1),ae=()=>m(Q.currentTime),xe=()=>{x(Q.duration),v(Q.volume),A(Q.muted)},De=()=>{v(Q.volume),A(Q.muted)};return Q.addEventListener("play",ue),Q.addEventListener("pause",J),Q.addEventListener("timeupdate",ae),Q.addEventListener("loadedmetadata",xe),Q.addEventListener("volumechange",De),()=>{Q.removeEventListener("play",ue),Q.removeEventListener("pause",J),Q.removeEventListener("timeupdate",ae),Q.removeEventListener("loadedmetadata",xe),Q.removeEventListener("volumechange",De)}},[]);const G={videoRef:c,isPlaying:i,currentTime:p,duration:f,togglePlay:B,volume:g,isMuted:C,seek:I,setVolume:V,toggleMute:K};return o.jsx(Pu.Provider,{value:G,children:o.jsx("div",{className:`${z} ${r}`,children:l})})},zv=l=>{if(isNaN(l))return"0:00";const r=Math.floor(l/60),c=Math.floor(l%60).toString().padStart(2,"0");return`${r}:${c}`},mx=({className:l})=>{const{currentTime:r}=ka();return o.jsx(T,{as:"span",className:l,children:zv(r)})},Mv=l=>{if(isNaN(l)||l===0)return"0:00";const r=Math.floor(l/60),c=Math.floor(l%60).toString().padStart(2,"0");return`${r}:${c}`},hx=({className:l})=>{const{duration:r}=ka();return o.jsx(T,{as:"span",className:l,children:Mv(r)})},fx=({className:l})=>{const{isPlaying:r,togglePlay:c,currentTime:i,duration:d,seek:p,volume:m,setVolume:f,isMuted:x,toggleMute:g}=ka(),{theme:v}=_(),A=Y("video-controls")({padding:`${v.spacing.sm} ${v.spacing.md}`,display:"grid",gridTemplateColumns:"auto 1fr auto auto",alignItems:"center",gap:v.spacing.md});return o.jsxs("div",{className:`${A} ${l}`,children:[o.jsx(be,{variant:"secondary",onClick:c,style:{padding:"0.5rem"},"aria-label":r?"Pause":"Play",children:o.jsx(Le,{as:r?hu:uu,size:20})}),o.jsx(D,{direction:"row",align:"center",gap:v.spacing.sm,children:o.jsx(Xe,{min:0,max:d||100,value:i,onChange:p})}),o.jsxs(D,{direction:"row",gap:"0.25rem",align:"center",children:[o.jsx(mx,{}),o.jsx(T,{as:"span",color:v.colors.textSecondary,children:"/"}),o.jsx(hx,{})]}),o.jsxs(Nu,{children:[o.jsx(Du,{children:o.jsx(be,{variant:"secondary",onClick:g,style:{padding:"0.5rem"},"aria-label":x?"Unmute":"Mute",children:o.jsx(Le,{as:x||m===0?Df:Nf,size:20})})}),o.jsx(kr,{children:o.jsx("div",{style:{padding:"0.5rem",width:"120px"},children:o.jsx(Xe,{min:0,max:100,value:x?0:m*100,onChange:j=>f(j/100)})})})]})]})},gx=l=>o.jsx("source",{...l}),xx=({className:l,style:r})=>{const{duration:c,videoRef:i}=ka(),d=i.current;return o.jsx("div",{className:l,style:r,children:o.jsxs(T,{size:"12px",color:"textSecondary",children:[d?`Dimensions: ${d.videoWidth}x${d.videoHeight}`:"Loading..."," | ","Duration: ",c.toFixed(2),"s"]})})},Gu=({className:l="",children:r,...c})=>{const{videoRef:i}=ka(),p=Y("video-view")({width:"100%",borderRadius:"8px",display:"block"});return o.jsxs("video",{ref:i,className:`${p} ${l}`,...c,children:[r,"Your browser does not support the video tag."]})},bx=({data:l,initialExpandedIds:r=[],initialLockedIds:c=[]})=>{const{theme:i}=_(),d=Y("x-node-tree"),[p,m]=b.useState(new Set(r)),[f,x]=b.useState(new Set(c)),g=B=>{m(I=>{const V=new Set(I);return V.has(B)?V.delete(B):V.add(B),V})},v=B=>{x(I=>{const V=new Set(I);return V.has(B)?V.delete(B):V.add(B),V})},C=d({color:i.colors.text,fontSize:i.typography.fontSizes.sm,userSelect:"none"}),A=d({display:"flex",alignItems:"center",padding:"4px 8px",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.05)"}}),j=B=>d({transition:"transform 0.2s",transform:B?"rotate(90deg)":"rotate(0deg)"}),k=d({marginLeft:"auto",color:i.colors.textSecondary,opacity:.5,"&:hover":{color:i.colors.text,opacity:1}}),z=(B,I)=>{const V=p.has(B.id),K=f.has(B.id),G=B.children&&B.children.length>0;return o.jsxs("div",{children:[o.jsxs("div",{className:A,style:{paddingLeft:`calc(${I} * 1.25rem + 0.5rem)`},onClick:()=>G&&g(B.id),children:[o.jsx(Le,{as:xr,size:16,className:j(V),style:{visibility:G?"visible":"hidden",marginRight:"0.25rem",flexShrink:0}}),B.icon&&o.jsx(Le,{as:B.icon,size:16,style:{marginRight:"0.5rem",color:i.colors.textSecondary,flexShrink:0}}),o.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:B.label}),o.jsx(Le,{as:K?kf:Ef,size:14,className:k,onClick:Q=>{Q.stopPropagation(),v(B.id)}})]}),G&&V&&o.jsx("div",{children:B.children.map(Q=>z(Q,I+1))})]},B.id)};return o.jsx("div",{className:C,children:l.map(B=>z(B,0))})},Ev={layer:Dg,layout:D,div:"div",span:"span",p:"p",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",a:"a",img:"img",ul:"ul",ol:"ol",li:"li",button:"button",input:"input",textarea:"textarea",select:"select",option:"option",form:"form",label:"label",fieldset:"fieldset",legend:"legend",table:"table",thead:"thead",tbody:"tbody",tfoot:"tfoot",tr:"tr",th:"th",td:"td",iframe:"iframe",video:"video",audio:"audio",canvas:"canvas",svg:"svg",path:"path",circle:"circle",rect:"rect",polyline:"polyline",polygon:"polygon",line:"line",text:"text",tspan:"tspan",g:"g",defs:"defs",use:"use",symbol:"symbol",marker:"marker",pattern:"pattern",clipPath:"clipPath",mask:"mask",linearGradient:"linearGradient",radialGradient:"radialGradient",stop:"stop",foreignObject:"foreignObject"};function Lv(l){const r={};for(let c=0;c<l.attributes.length;c++){const i=l.attributes[c];if(i.name==="style")try{r.style=JSON.parse(i.value)}catch(d){console.error("Failed to parse style attribute JSON:",i.value,d),r.style=i.value}else i.value==="true"?r[i.name]=!0:i.value==="false"?r[i.name]=!1:r[i.name]=i.value}return r}function yx(l,r){if(l.nodeType===Node.TEXT_NODE)return l.textContent;if(l.nodeType!==Node.ELEMENT_NODE)return null;const c=l,i=c.tagName,d=r[i]||r[i.toLowerCase()]||"div",p=Lv(c),m=Array.from(c.childNodes).map((f,x)=>{const g=yx(f,r);return He.isValidElement(g)?He.cloneElement(g,{key:x}):g}).filter(f=>f!=null);return m.length>0?He.createElement(d,p,...m):He.createElement(d,p)}const vx=({xml:l,components:r={}})=>{const c={...Ev,..._f,...r};if(typeof window>"u"||typeof window.DOMParser>"u")return o.jsx("div",{children:l});try{const d=new DOMParser().parseFromString(`<root>${l}</root>`,"text/xml"),p=d.querySelector("parsererror");if(p)return console.error("XML parsing error:",p.textContent),o.jsx("div",{style:{color:"red",fontFamily:"monospace"},children:"XML Parsing Error. Check console for details."});const m=Array.from(d.documentElement.childNodes).map((f,x)=>{const g=yx(f,c);return He.isValidElement(g)?He.cloneElement(g,{key:x}):g}).filter(f=>f!=null);return o.jsx(o.Fragment,{children:m})}catch(i){return console.error("Error rendering XML:",i),o.jsx("div",{style:{color:"red",fontFamily:"monospace"},children:"Error rendering component. Check console."})}},Qc=Object.freeze(Object.defineProperty({__proto__:null,Accordion:mr,AccordionContent:va,AccordionItem:ba,AccordionTrigger:ya,Alert:bf,AnimatedBlock:yf,AspectRatio:Gf,Audio:gu,AudioContext:fu,AudioControls:xu,AudioDuration:qf,AudioFile:bu,AudioFilters:Yf,AudioTime:Vf,AudioView:yu,AudioVisualizer:vu,Avatar:Tn,AvatarGroup:Ff,Backdrop:Cu,Badge:br,Box:wl,Breadcrumbs:Xf,Button:be,ButtonGroup:Su,Calendar:Kf,Card:gt,Center:ko,ChartArea:Wf,ChartAxis:Sl,ChartBar:Jf,ChartHeatmap:eg,ChartLine:Zf,ChartRadar:tg,ChartRadial:ng,ChartSparkline:Qs,ChartTooltip:ag,Charts:Wc,Checkbox:Ke,CircularProgress:Ug,Code:lg,CodeEditor:Jc,Collapse:eu,ColorPicker:rg,Combobox:cg,Container:Sr,ContextMenu:sr,DataTable:ug,DatePicker:dg,Dialog:Tu,Divider:to,Drawer:pg,Dropdown:mg,DropdownContent:fg,DropdownItem:Zs,DropdownTrigger:hg,Editable:gg,Error:jr,FileUpload:Tr,Flex:yr,FloatingActionButton:rr,Footer:xg,FormControl:yg,FormErrorMessage:Sg,FormHelperText:Cg,FormLabel:vg,GraphicsContext:wu,GraphicsNodeEditorView:Ru,GraphicsProvider:Au,Grid:nn,Header:kn,HoverCard:wg,HoverCardContent:Rg,HoverCardTrigger:Ag,Icon:Le,IconButton:ir,Image:Ng,Input:re,Kbd:cr,Layer:Dg,LinearProgress:Pg,Link:Sa,List:Dl,ListItem:eo,ListItemBody:Sv,ListItemText:jo,Menu:zg,MenuButton:Mg,MenuItem:Lg,MenuItems:Eg,Modal:ju,Nav:Jn,NumberInput:Og,Pagination:Mu,PinInput:Hg,Popover:Nu,PopoverContent:kr,PopoverTrigger:Du,Popper:wo,PopperContent:ja,PopperTrigger:Ao,RadioGroup:Gg,RadioGroupItem:Ws,Rating:Vg,Search:Eu,SegmentedControl:Be,Select:qg,Sidebar:Lu,SidebarNav:tn,SidebarNavItem:ur,Skeleton:zu,Slider:Xe,Snackbar:Yg,SnackbarContext:Bu,SnackbarProvider:Xg,Sofa:ht,SpeedDial:Kg,Spinner:zl,Stack:D,Stepper:Qg,StyledMenu:Bg,Switch:Zg,SyntaxHighlighter:sg,Tab:tu,TabList:tx,TabPanel:nu,TabPanels:nx,Table:$u,TableBody:Ou,TableCell:xa,TableHead:ga,TableHeader:Iu,TableRow:kl,Tabs:ex,Tag:dr,Text:T,TextInput:Ro,Textarea:Ml,ThemeSwitcher:Rv,Timeline:ox,TimelineConnector:ou,TimelineContent:tr,TimelineDot:er,TimelineItem:Js,Toast:ax,ToastContext:Hu,ToastProvider:lx,ToggleButton:So,ToggleButtonGroup:au,Tooltip:og,TransferList:ix,TreeView:pr,Video:_u,VideoContext:Pu,VideoControls:fx,VideoDuration:hx,VideoFile:gx,VideoMetadata:xx,VideoTime:mx,VideoView:Gu,XNodeTree:bx,XmlRenderer:vx,useAudio:To,useGraphicsContext:wn,usePopperContext:vr,useSnackbar:Fg,useToast:Ta,useToggleButtonGroup:rx,useTreeItem:ux,useVideo:ka},Symbol.toStringTag,{value:"Module"})),Bv=({onNavigate:l})=>{const{theme:r}=_(),c=[{id:"grid",label:"Grid System",icon:jl},{id:"text",label:"Typography",icon:fa},{id:"button",label:"Buttons",icon:or},{id:"charts",label:"Charts",icon:nr},{id:"graphics-node-editor",label:"Node Editor",icon:nr},{id:"photo-editor",label:"Photo Editor",icon:fr}];return o.jsx(ko,{style:{width:"100%",padding:"2rem"},children:o.jsxs(D,{gap:"2rem",align:"center",style:{maxWidth:"800px",textAlign:"center"},children:[o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"h1",size:"3rem",weight:"700",style:{letterSpacing:"-0.05em"},children:"Welcome to ZwheUI"}),o.jsx(T,{size:"1.125rem",color:r.colors.textSecondary,children:"A showcase of a modern, reusable, and aesthetically pleasing React component library. Select a component from the sidebar to begin exploring."})]}),o.jsx(nn,{minItemWidth:"200px",gap:"4rem",style:{width:"100%"},children:c.map(i=>o.jsx(gt,{onClick:()=>l(i.id),children:o.jsxs(D,{direction:"row",gap:"1rem",align:"center",children:[o.jsx(Le,{as:i.icon,size:20,color:r.colors.primary}),o.jsx(T,{weight:"500",children:i.label})]})},i.id))}),o.jsx(T,{size:"0.875rem",color:r.colors.textSecondary,style:{marginTop:"2rem"},children:"This entire showcase is built with the ZwheUI components themselves."})]})})},Cx={Input:re,Button:be,Text:T,Stack:D,Center:ko,Accordion:mr,AccordionItem:ba,AccordionTrigger:ya,AccordionContent:va,Grid:nn,"Grid.Item":nn.Item,SegmentedControl:Be};for(const l in Qc)Object.prototype.hasOwnProperty.call(Qc,l)&&(l.startsWith("use")||(Cx[l]=Qc[l]));const $v={...Cx,..._f},ee=({title:l,description:r,initialCode:c,livePreview:i,propControls:d,documentation:p,fullSourceCode:m})=>{const{theme:f}=_(),[x,g]=b.useState(c||"");return b.useEffect(()=>{c!==void 0&&g(c)},[c]),o.jsx(ht,{children:o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{children:[o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:l}),o.jsx(T,{children:r})]}),o.jsxs(nn,{minItemWidth:"300px",gap:"2rem",style:{alignItems:"start"},children:[o.jsx(nn.Item,{children:o.jsxs(mr,{defaultValue:"props",children:[o.jsxs(ba,{value:"props",children:[o.jsx(ya,{children:o.jsx(T,{weight:"600",children:"Props"})}),o.jsx(va,{children:o.jsx(D,{gap:"1.5rem",style:{paddingTop:"1rem"},children:d})})]}),o.jsxs(ba,{value:"docs",children:[o.jsx(ya,{children:o.jsx(T,{weight:"600",children:"Documentation"})}),o.jsx(va,{children:o.jsx("pre",{style:{whiteSpace:"pre-wrap",fontFamily:"monospace",fontSize:"13px",color:f.colors.textSecondary,lineHeight:"1.5",paddingTop:"1rem"},children:p})})]})]})}),o.jsx(nn.Item,{colSpan:2,children:o.jsxs(D,{gap:"1.5rem",children:[o.jsx(ht,{title:"Live Preview",children:o.jsx(ko,{style:{minHeight:"150px",padding:"1rem"},children:i??o.jsx(vx,{xml:x,components:$v})})}),c!==void 0&&o.jsxs(ht,{title:"Editable Code",children:[o.jsx("div",{style:{height:"250px"},children:o.jsx(Jc,{value:x,onChange:g})}),o.jsx(T,{size:"xs",color:f.colors.textSecondary,style:{marginTop:"0.5rem"},children:'Note: Editing the code here directly may be overwritten if you change a value in the "Props" panel.'})]}),o.jsx(ht,{title:"Full Component Source",children:o.jsx("div",{style:{height:"300px",overflow:"auto"},children:o.jsx(Jc,{value:m,onChange:()=>{}})})})]})})]})]})})},Iv=({variant:l,setVariant:r,childrenText:c,setChildrenText:i,isDisabled:d,setIsDisabled:p})=>{const{theme:m}=_();return o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{gap:"4px",children:[o.jsx(T,{as:"label",size:m.typography.fontSizes.sm,weight:m.typography.fontWeights.medium,color:m.colors.textSecondary,children:"Variant Prop"}),o.jsx(Be,{options:[{label:"Primary",value:"primary"},{label:"Secondary",value:"secondary"},{label:"Accent",value:"accent"}],value:l,onChange:f=>r(f)})]}),o.jsx(re,{label:"Children Prop (Text)",value:c,onChange:f=>i(f.target.value)}),o.jsx(Ke,{label:"Disabled Prop",checked:d,onChange:f=>p(f.target.checked)})]})},Ov=`# Button

A standard, clickable button component with multiple variants and states. It features an enhanced, high-contrast focus state for improved keyboard navigation and accessibility.

## Props

*   \`variant\` (enum: 'primary' | 'secondary' | 'accent', optional, default: 'primary'): The visual style of the button.
*   \`className\` (string, optional): Additional CSS classes for custom styling.
*   All other standard HTML \`<button>\` attributes are supported (e.g., \`onClick\`, \`disabled\`).

## Usage

\`\`\`tsx
import { Button } from './src/components';

// Primary Button
<Button variant="primary" onClick={() => alert('Clicked!')}>
  Submit
</Button>
\`\`\``,Hv=`import React from 'react'
import { useStyles } from '../core/hooks/useStyles';
import { useTheme } from '../core/theme/ThemeProvider';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent'
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...rest }) => {
  const { theme, mode } = useTheme();
  const createStyle = useStyles('button');
  const isDark = mode !== 'light';

  const base = createStyle({
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontWeight: '500',
    display: 'inline-grid',
    gridAutoFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s',
    border: '1px solid transparent',
    '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
        backdropFilter: 'blur(8px)',
    },
    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.6
    },
    // Remove default outline for all focus states to prevent interference
    '&:focus': {
        outline: 'none',
    }
  });

  const variants = {
    primary: createStyle({
      backgroundColor: theme.colors.primary,
      color: isDark ? '#172554' : '#fff', // Use dark text on light blue, white text on dark blue
      '&:hover:not(:disabled)': {
        filter: isDark ? 'brightness(1.2)' : 'brightness(0.9)',
      },
       '&:focus-visible': {
        boxShadow: \`0 0 0 2px \${theme.colors.background}, 0 0 0 4px \${theme.colors.primary}\`
      },
    }),
    secondary: createStyle({
      backgroundColor: theme.colors.border,
      color: theme.colors.text,
      '&:hover:not(:disabled)': {
        backgroundColor: isDark ? theme.colors.secondary : '#d1d5db' // darker gray
      },
      '&:focus-visible': {
        boxShadow: \`0 0 0 2px \${theme.colors.background}, 0 0 0 4px \${theme.colors.secondary}\`
      },
    }),
    accent: createStyle({
      backgroundColor: theme.colors.accent,
      color: '#fff',
      '&:hover:not(:disabled)': {
        filter: 'brightness(0.9)',
      },
      '&:focus-visible': {
        boxShadow: \`0 0 0 2px \${theme.colors.background}, 0 0 0 4px \${theme.colors.accent}\`
      },
    })
  };

  return (
    <button className={\`\${base} \${variants[variant]} \${className}\`} {...rest}>
      {children}
    </button>
  )
}

export default Button`,Uv=()=>{const[l,r]=b.useState("primary"),[c,i]=b.useState("Click Me"),[d,p]=b.useState(!1),m=`<Button variant="${l}" disabled="${d}">${c}</Button>`;return o.jsx(ee,{title:"Button",description:"A standard button component with primary, secondary, accent, and disabled states.",initialCode:m,propControls:o.jsx(Iv,{variant:l,setVariant:r,childrenText:c,setChildrenText:i,isDisabled:d,setIsDisabled:p}),documentation:Ov,fullSourceCode:Hv})},Pv=({size:l,setSize:r,color:c,setColor:i})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{gap:"0.5rem",children:[o.jsxs(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:["Size (",l,"px)"]}),o.jsx(Xe,{value:l,onChange:r,min:12,max:48})]}),o.jsx(re,{label:"Color",value:c,onChange:d=>i(d.target.value)})]}),_v=`# Icon

A flexible component for rendering SVG icons, allowing for consistent sizing and coloring across the application.

## Props

*   \`as\` (React.ElementType, required): The SVG icon component to render (e.g., \`HomeIcon\`).
*   \`size\` (number | string, optional, default: '1em'): The width and height of the icon.
*   \`className\` (string, optional): Additional CSS classes for custom styling.
*   All other standard SVG attributes are supported (e.g., \`color\`, \`strokeWidth\`).

## Usage

First, import the \`Icon\` component and the specific icon you want to use.

\`\`\`tsx
import { Icon } from './src/components';
import { HomeIcon, SettingsIcon } from './src/icons';

// Basic usage
<Icon as={HomeIcon} />

// With custom size and color
<Icon as={SettingsIcon} size={24} color="#60a5fa" />

// Inside another component, like a Button
<Button>
  <Icon as={HomeIcon} size={16} />
  <span>Dashboard</span>
</Button>
\`\`\``,Gv=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface IconProps extends React.SVGAttributes<SVGElement> {
    as: React.ElementType;
    size?: number | string;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({ as, size = '1em', className = '', ...props }) => {
    const createStyle = useStyles('icon');
    const { theme } = useTheme();

    const iconClass = createStyle({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'inherit', // Inherit color by default
    });

    const IconComponent = as;
    
    const combinedClassName = \`\${iconClass} \${className}\`;

    const style = {
        width: size,
        height: size,
    };

    return (
        <span className={combinedClassName} style={style}>
            <IconComponent {...props} />
        </span>
    );
};`,Vv=()=>{const{theme:l}=_(),[r,c]=b.useState(24),[i,d]=b.useState(l.colors.primary);return o.jsx(ee,{title:"Icon",description:"A flexible component for rendering SVG icons with consistent sizing and coloring.",livePreview:o.jsxs(D,{direction:"row",gap:"1.5rem",align:"center",children:[o.jsx(Le,{as:iu,size:r,color:i}),o.jsx(Le,{as:hr,size:r,color:i}),o.jsx(Le,{as:cu,size:r,color:i}),o.jsx(Le,{as:Tf,size:r,color:i}),o.jsx(Le,{as:wf,size:r,color:i})]}),propControls:o.jsx(Pv,{size:r,setSize:c,color:i,setColor:d}),documentation:_v,fullSourceCode:Gv})},qv=({as:l,setAs:r,size:c,setSize:i,weight:d,setWeight:p,color:m,setColor:f})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"As Prop"}),o.jsx(Be,{value:l,onChange:r,options:[{label:"p",value:"p"},{label:"span",value:"span"},{label:"h1",value:"h1"},{label:"h2",value:"h2"}]})]}),o.jsx(re,{label:"Size Prop",value:c,onChange:x=>i(x.target.value)}),o.jsx(re,{label:"Weight Prop",value:d,onChange:x=>p(x.target.value)}),o.jsx(re,{label:"Color Prop",value:m,onChange:x=>f(x.target.value)})]}),Yv=`# Text

A versatile and polymorphic component for rendering text with consistent, theme-based typography styles. It can be rendered as different HTML elements using the \`as\` prop.

## Props

*   \`as\` (enum: 'p' | 'span' | 'h1' ... , optional): The underlying HTML element.
*   \`size\` (string, optional): The font size (e.g., '1rem', '14px').
*   \`weight\` (string | number, optional): The font weight.
*   \`color\` (string, optional): The text color.

## Usage

\`\`\`tsx
<Text as="h2" size="1.5rem" weight="600">
  Section Title
</Text>
\`\`\``,Fv=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

type TextProps<C extends React.ElementType> = {
    as?: C;
    size?: string;
    weight?: string | number;
    color?: string;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'size' | 'weight' | 'color'>;

type AllowedTags = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'pre' | 'label';

export const Text = <C extends AllowedTags = 'p'>({
    as: Component = 'p' as C,
    size,
    weight,
    color,
    className = '',
    style,
    ...props
}: TextProps<C>) => {
    const { theme } = useTheme();
    const createStyle = useStyles('text');

    const textClass = createStyle({
        fontSize: size || theme.typography.fontSizes.base,
        fontWeight: String(weight || theme.typography.fontWeights.normal),
        color: color || theme.colors.text,
        lineHeight: theme.typography.lineHeights.normal,
    });

    return React.createElement(Component, {
        className: \`\${textClass} \${className}\`,
        style,
        ...props,
    });
};`,Xv=()=>{const{theme:l}=_(),[r,c]=b.useState("p"),[i,d]=b.useState("1rem"),[p,m]=b.useState("400"),[f,x]=b.useState(l.colors.text),g=`<Text as="${r}" size="${i}" weight="${p}" color="${f}">
    This is a configurable Text component.
</Text>`;return o.jsx(ee,{title:"Text",description:"A versatile component for rendering text with consistent typography styles.",initialCode:g,propControls:o.jsx(qv,{as:r,setAs:c,size:i,setSize:d,weight:p,setWeight:m,color:f,setColor:x}),documentation:Yv,fullSourceCode:Fv})},Kv=({href:l,setHref:r,childrenText:c,setChildrenText:i})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Href Prop",value:l,onChange:d=>r(d.target.value)}),o.jsx(re,{label:"Children Prop (Text)",value:c,onChange:d=>i(d.target.value)})]}),Qv=`# Link

A styled anchor (\`<a>\`) tag for navigation, consistent with the application's theme. It seamlessly integrates with \`react-router-dom\` for client-side routing.

## Props

*   \`to\` (string, optional): The path for client-side navigation. If this prop is provided, the component will render a \`react-router-dom\` \`Link\`.
*   \`href\` (string, optional): The URL for a standard anchor tag. This is used for external links or when not using a router.
*   All other standard \`<a>\` attributes are supported (e.g., \`target\`, \`onClick\`).
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

### Standard External Link
\`\`\`tsx
import { Link } from './src/components';

<Link href="https://example.com" target="_blank">
  Visit Example
</Link>
\`\`\`

### Client-Side Routing Link
\`\`\`tsx
import { Link } from './src/components';

// This will render a <Link> from react-router-dom
<Link to="/profile">
  View Profile
</Link>
\`\`\``,Zv=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to?: string;
}

export const Link: React.FC<LinkProps> = ({ children, className = '', to, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('link');

    const linkClass = createStyle({
        color: theme.colors.primary,
        textDecoration: 'none',
        transition: 'color 0.2s',
        '&:hover': {
            color: '#93c5fd', // Lighter blue
            textDecoration: 'underline',
        },
    });

    const combinedClassName = \`\${linkClass} \${className}\`;

    if (to) {
        return (
            <a href={to} className={combinedClassName} {...props}>
                {children}
            </a>
        );
    }

    return (
        <a className={combinedClassName} {...props}>
            {children}
        </a>
    );
};`,Wv=()=>{const[l,r]=b.useState("https://example.com"),[c,i]=b.useState("example.com");return o.jsx(ee,{title:"Link",description:"A styled anchor tag for navigation. Supports standard `href` for external links and `to` for client-side routing.",livePreview:o.jsxs(T,{children:["This is a standard external link to ",o.jsx(Sa,{href:l,target:"_blank",rel:"noopener noreferrer",children:c}),"."]}),propControls:o.jsx(Kv,{href:l,setHref:r,childrenText:c,setChildrenText:i}),documentation:Qv,fullSourceCode:Zv})},Jv=({key1:l,setKey1:r,key2:c,setKey2:i})=>o.jsxs(D,{direction:"row",gap:"1rem",children:[o.jsx(re,{label:"Key 1",value:l,onChange:d=>r(d.target.value)}),o.jsx(re,{label:"Key 2",value:c,onChange:d=>i(d.target.value)})]}),e1=`# Kbd

A component for displaying keyboard shortcuts in a visually distinct style, mimicking the appearance of a physical key.

## Props

*   \`children\` (React.ReactNode, required): The key or symbol to display (e.g., '⌘', 'Shift', 'K').
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

\`\`\`tsx
import { Kbd, Text } from './src/components';

<Text>
  Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
</Text>
\`\`\``,t1=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Kbd: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('kbd');

    const kbdClass = createStyle({
        display: 'inline-block',
        padding: '2px 6px',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: theme.colors.textSecondary,
        backgroundColor: theme.colors.border,
        border: \`1px solid rgba(255, 255, 255, 0.1)\`,
        borderBottomWidth: '2px',
        borderRadius: '4px',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(4px)',
        },
    });

    return (
        <kbd className={\`\${kbdClass} \${className}\`}>
            {children}
        </kbd>
    );
};`,n1=()=>{const[l,r]=b.useState("⌘"),[c,i]=b.useState("K");return o.jsx(ee,{title:"Kbd",description:"A component for displaying keyboard shortcuts.",livePreview:o.jsxs(T,{children:["Press ",o.jsx(cr,{children:l})," + ",o.jsx(cr,{children:c})," to open the command palette."]}),propControls:o.jsx(Jv,{key1:l,setKey1:r,key2:c,setKey2:i}),documentation:e1,fullSourceCode:t1})},o1=({variant:l,setVariant:r,colorScheme:c,setColorScheme:i,childrenText:d,setChildrenText:p})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Children Prop (Text)",value:d,onChange:m=>p(m.target.value)}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Variant Prop"}),o.jsx(Be,{value:l,onChange:r,options:[{label:"Solid",value:"solid"},{label:"Outline",value:"outline"}]})]}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Color Scheme Prop"}),o.jsx(Be,{value:c,onChange:i,options:[{label:"Primary",value:"primary"},{label:"Accent",value:"accent"},{label:"Success",value:"success"},{label:"Error",value:"error"}]})]})]}),a1=`# Badge

A small component used to highlight status, metadata, or other snippet-sized information.

## Props

*   \`children\` (React.ReactNode): The content to display inside the badge.
*   \`variant\` (enum: 'solid' | 'outline', optional, default: 'solid'): The visual style of the badge.
*   \`colorScheme\` (enum: 'primary' | 'accent' | 'success' | 'error', optional, default: 'primary'): The color theme of the badge.
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

\`\`\`tsx
import { Badge } from './src/components';

<Badge colorScheme="success">
  Active
</Badge>

<Badge colorScheme="error" variant="outline">
  Offline
</Badge>
\`\`\``,l1=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { hexToRgba } from '../../core/color/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'solid' | 'outline';
    colorScheme?: 'primary' | 'accent' | 'success' | 'error';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'solid', colorScheme = 'primary', className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('badge');

    const colors = {
        primary: theme.colors.primary,
        accent: theme.colors.accent,
        success: '#10b981',
        error: '#ef4444',
    };
    
    const baseColor = colors[colorScheme];

    const variantStyles = {
        solid: {
            backgroundColor: hexToRgba(baseColor, 0.2),
            color: baseColor,
            border: '1px solid transparent',
        },
        outline: {
            backgroundColor: 'transparent',
            color: baseColor,
            border: \`1px solid \${baseColor}\`,
        },
    };

    const badgeClass = createStyle({
        display: 'inline-block',
        padding: '0.125rem 0.625rem',
        fontSize: '0.75rem',
        fontWeight: '500',
        borderRadius: '999px',
        lineHeight: '1.25',
        ...variantStyles[variant],
    });

    return (
        <span className={\`\${badgeClass} \${className}\`} {...props}>
            {children}
        </span>
    );
};`,s1=()=>{const[l,r]=b.useState("solid"),[c,i]=b.useState("primary"),[d,p]=b.useState("New");return o.jsx(ee,{title:"Badge",description:"A small component to highlight status or metadata.",livePreview:o.jsx(br,{variant:l,colorScheme:c,children:d}),propControls:o.jsx(o1,{variant:l,setVariant:r,colorScheme:c,setColorScheme:i,childrenText:d,setChildrenText:p}),documentation:a1,fullSourceCode:l1})},r1=({variant:l,setVariant:r,colorScheme:c,setColorScheme:i,size:d,setSize:p,childrenText:m,setChildrenText:f,showClose:x,setShowClose:g})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Children Prop (Text)",value:m,onChange:v=>f(v.target.value)}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Variant Prop"}),o.jsx(Be,{value:l,onChange:r,options:[{label:"Solid",value:"solid"},{label:"Outline",value:"outline"}]})]}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Color Scheme Prop"}),o.jsx(Be,{value:c,onChange:i,options:[{label:"Primary",value:"primary"},{label:"Accent",value:"accent"},{label:"Success",value:"success"},{label:"Error",value:"error"}]})]}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Size Prop"}),o.jsx(Be,{value:d,onChange:p,options:[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"}]})]}),o.jsx(Ke,{label:"Show Close Button",checked:x,onChange:v=>g(v.target.checked)})]}),i1=`# Tag

A component for labeling and categorizing content. It's similar to a \`Badge\` but supports different sizes and can include an optional close button.

## Props

*   \`variant\` (enum: 'solid' | 'outline', optional): The visual style.
*   \`colorScheme\` (enum: 'primary' | 'accent' | 'success' | 'error', optional): The color theme.
*   \`size\` (enum: 'sm' | 'md' | 'lg', optional): The size of the tag.

## Components

*   **Tag.CloseButton**: An optional button to render inside the tag, typically for removal.

## Usage

\`\`\`tsx
import { Tag } from './src/components';

<Tag colorScheme="success" size="lg">
  Completed
  <Tag.CloseButton onClick={() => alert('Closing!')} />
</Tag>
\`\`\``,c1=`import React from 'react';
import { useStyles, useTheme } from '../../core';
import { hexToRgba } from '../../core/color/utils';
import { Icon } from '../Icon/Icon';
import { TimesIcon } from '../../icons';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> { /* ... */ }

const Tag: React.FC<TagProps> = ({ children, variant = 'solid', colorScheme = 'primary', size = 'md', className = '', ...props }) => {
    /* ...styles... */
    return <span className={\`\${tagClass} \${className}\`} {...props}>{children}</span>;
};

const TagCloseButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    /* ...styles... */
    return (
        <button className={buttonClass} aria-label="Remove tag" {...props}>
            <Icon as={TimesIcon} size="0.8em" />
        </button>
    );
};

interface CompoundTag { (props: TagProps): React.ReactElement; CloseButton: typeof TagCloseButton; }
const CompoundTag = Tag as CompoundTag;
CompoundTag.CloseButton = TagCloseButton;
export { CompoundTag as Tag };`,u1=()=>{const[l,r]=b.useState("solid"),[c,i]=b.useState("primary"),[d,p]=b.useState("md"),[m,f]=b.useState("React"),[x,g]=b.useState(!0);return o.jsx(ee,{title:"Tag",description:"A label for categorizing content, with sizes and an optional close button.",livePreview:o.jsxs(dr,{variant:l,colorScheme:c,size:d,children:[m,x&&o.jsx(dr.CloseButton,{})]}),propControls:o.jsx(r1,{variant:l,setVariant:r,colorScheme:c,setColorScheme:i,size:d,setSize:p,childrenText:m,setChildrenText:f,showClose:x,setShowClose:g}),documentation:i1,fullSourceCode:c1})},d1=({childrenText:l,setChildrenText:r})=>o.jsx(re,{label:"Children Prop (Text)",value:l,onChange:c=>r(c.target.value)}),p1=`# Code

A component for displaying inline code snippets with appropriate styling.

## Props

*   All standard \`<code>\` attributes are supported.

## Usage

\`\`\`tsx
import { Code, Text } from './src/components';

<Text>
  Run the command <Code>npm install</Code> to get started.
</Text>
\`\`\``,m1=`import React from 'react';
import { useStyles, useTheme } from '../../core';

export const Code: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('code');

    const codeClass = createStyle({
        fontFamily: 'monospace',
        fontSize: '0.875em',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '0.125em 0.3em',
        borderRadius: '4px',
        color: theme.colors.text,
    });

    return (
        <code className={\`\${codeClass} \${className}\`} {...props}>
            {children}
        </code>
    );
};`,h1=()=>{const[l,r]=b.useState("useStyles()");return o.jsx(ee,{title:"Code",description:"A component for displaying inline code snippets.",livePreview:o.jsxs(T,{children:["The ",o.jsx(lg,{children:l})," hook is a powerful tool."]}),propControls:o.jsx(d1,{childrenText:l,setChildrenText:r}),documentation:p1,fullSourceCode:m1})},f1=({direction:l,setDirection:r,gap:c,setGap:i,align:d,setAlign:p,justify:m,setJustify:f,wrap:x,setWrap:g})=>{const{theme:v}=_();return o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{gap:"4px",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Direction"}),o.jsx(Be,{value:l,onChange:r,options:[{label:"row",value:"row"},{label:"column",value:"column"},{label:"row-reverse",value:"row-reverse"},{label:"column-reverse",value:"column-reverse"}]})]}),o.jsx(re,{label:"Gap",value:c,onChange:C=>i(C.target.value)}),o.jsxs(D,{gap:"4px",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Align Items"}),o.jsx(Be,{value:d,onChange:p,options:[{label:"start",value:"start"},{label:"center",value:"center"},{label:"end",value:"end"},{label:"stretch",value:"stretch"}]})]}),o.jsxs(D,{gap:"4px",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Justify Content"}),o.jsx(Be,{value:m,onChange:f,options:[{label:"start",value:"start"},{label:"center",value:"center"},{label:"end",value:"end"},{label:"space-between",value:"space-between"}]})]}),o.jsx(Ke,{label:"Wrap",checked:x,onChange:C=>g(C.target.checked)})]})},g1="# Stack\n\nA layout component for arranging items in a vertical or horizontal stack with a consistent gap between them. It is built on `flexbox`.\n\n## Props\n\n*   `direction` (enum: 'row' | 'column' | 'row-reverse' | 'column-reverse', optional): The `flex-direction`.\n*   `gap` (string, optional): The space between items.\n*   `align` (string, optional): The `align-items`.\n*   `justify` (string, optional): The `justify-content`.\n*   `wrap` (boolean, optional): Whether to wrap items to the next line (`flex-wrap`).\n\n## Usage\n\n```tsx\n<Stack direction=\"row\" gap=\"1rem\" align=\"center\" wrap={true}>\n  <Card>Item A</Card>\n  <Card>Item B</Card>\n</Stack>\n```",x1=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    gap?: string;
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    wrap?: boolean;
}

export const Stack: React.FC<StackProps> = ({ 
    direction = 'column', 
    gap = '1rem', 
    align, 
    justify, 
    wrap = false,
    className = '', 
    children, 
    ...props 
}) => {
    const createStyle = useStyles('stack');
    
    const stackClass = createStyle({
        display: 'flex',
        flexDirection: direction,
        gap: gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
    });

    return (
        <div className={\`\${stackClass} \${className}\`} {...props}>
            {children}
        </div>
    );
};`,b1=()=>{const[l,r]=b.useState("row"),[c,i]=b.useState("1rem"),[d,p]=b.useState("center"),[m,f]=b.useState("start"),[x,g]=b.useState(!0),v=`<Stack direction="${l}" gap="${c}" align="${d}" justify="${m}" wrap="${x}">
    <Card><Text>Item 1</Text></Card>
    <Card><Text>Item 2</Text></Card>
    <Card><Text>Item 3</Text></Card>
</Stack>`;return o.jsx(ee,{title:"Stack",description:"A layout component for arranging items with consistent spacing, powered by Flexbox.",initialCode:v,propControls:o.jsx(f1,{direction:l,setDirection:r,gap:c,setGap:i,align:d,setAlign:p,justify:m,setJustify:f,wrap:x,setWrap:g}),documentation:g1,fullSourceCode:x1})},y1=({columns:l,setColumns:r,minItemWidth:c,setMinItemWidth:i,gap:d,setGap:p})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Columns (fixed, overrides min width)"}),o.jsx(Xe,{value:l,onChange:r,min:0,max:6,step:1,showValue:!0}),o.jsx(T,{size:"xs",color:"textSecondary",children:"Set to 0 to use responsive mode with minItemWidth."})]}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Min Item Width (px, responsive mode)"}),o.jsx(Xe,{value:c,onChange:i,min:80,max:300,step:10,showValue:!0})]}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Gap (rem)"}),o.jsx(Xe,{value:d,onChange:p,min:0,max:4,step:.5,showValue:!0})]})]}),v1=`# Grid

A responsive grid layout component. It automatically adjusts the number of columns to fit its container, or uses a fixed number of columns. Now includes a \`Grid.Item\` sub-component for controlling column and row spans.

## Components

*   **Grid**: The main grid container.
*   **Grid.Item**: A wrapper for a grid item, allowing control over its span.

## Props

### Grid
*   \`minItemWidth\` (string, optional, default: '350px'): The minimum width for each item in a responsive grid.
*   \`gap\` (string, optional, default: '1.5rem'): The space between grid items.
*   \`columns\` (number, optional): A fixed number of columns. Overrides \`minItemWidth\`.

### Grid.Item
*   \`colSpan\` (number, optional): The number of columns the item should span.
*   \`rowSpan\` (number, optional): The number of rows the item should span.
`,C1=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    colSpan?: number;
    rowSpan?: number;
}

const GridItem: React.FC<GridItemProps> = ({
    colSpan,
    rowSpan,
    className = '',
    children,
    ...props
}) => {
    const createStyle = useStyles('grid-item');
    const itemClass = createStyle({
        gridColumn: colSpan ? \`span \${colSpan}\` : undefined,
        gridRow: rowSpan ? \`span \${rowSpan}\` : undefined,
    });
    return (
        <div className={\`\${itemClass} \${className}\`} {...props}>
            {children}
        </div>
    );
};
GridItem.displayName = 'Grid.Item';


interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    minItemWidth?: string;
    gap?: string;
    columns?: number;
    alignItems?: string;
    justifyContent?: string;
    flow?: 'row' | 'column';
}

export const Grid: React.FC<GridProps> & { Item: typeof GridItem } = ({ 
    minItemWidth = '350px', 
    gap = '1.5rem', 
    columns,
    alignItems,
    justifyContent,
    flow = 'row',
    className = '', 
    children, 
    ...props 
}) => {
    const createStyle = useStyles('grid');
    
    const gridClass = createStyle({
        display: 'grid',
        gridTemplateColumns: columns ? \`repeat(\${columns}, 1fr)\` : \`repeat(auto-fit, minmax(\${minItemWidth}, 1fr))\`,
        gap: gap,
        alignItems: alignItems,
        justifyContent: justifyContent,
        gridAutoFlow: flow,
        '@media': {
            "(maxWidth: 'sm')": {
                gridTemplateColumns: columns ? undefined : '1fr',
            },
        },
    });

    return (
        <div className={\`\${gridClass} \${className}\`} {...props}>
            {children}
        </div>
    );
};

Grid.Item = GridItem;`,S1=()=>{const[l,r]=b.useState(0),[c,i]=b.useState(150),[d,p]=b.useState(1),f=`<Grid ${l>0?`columns="${l}"`:`minItemWidth="${c}px"`} gap="${d}rem">
    <Grid.Item colSpan="${l>2?2:1}"><Card><Text>Item A</Text></Card></Grid.Item>
    <Grid.Item><Card><Text>Item B</Text></Card></Grid.Item>
    <Grid.Item><Card><Text>Item C</Text></Card></Grid.Item>
    <Grid.Item><Card><Text>Item D</Text></Card></Grid.Item>
</Grid>`;return o.jsx(ee,{title:"Grid",description:"A responsive grid layout with support for fixed columns, auto-fit columns, and spanning.",initialCode:f,propControls:o.jsx(y1,{columns:l,setColumns:r,minItemWidth:c,setMinItemWidth:i,gap:d,setGap:p}),documentation:v1,fullSourceCode:C1})},j1=({size:l,setSize:r})=>o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Size Prop"}),o.jsx(Be,{value:l,onChange:r,options:[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"},{label:"container",value:"container"}]})]}),T1=`# Container

A layout component that centers its content and constrains it to a maximum width. This is essential for creating consistent, readable layouts on wider screens.

## Props

*   \`children\` (React.ReactNode): The content to be rendered inside the container.
*   \`size\` (enum: 'xs' | 'sm' | 'md' | 'lg' | 'xl', optional): A predefined size from the theme's \`maxWidths\` scale.
*   \`maxWidth\` (string, optional): A specific max-width for the container (e.g., '800px'). Overrides \`size\` if both are provided. Defaults to \`theme.maxWidths.container\`.
*   \`className\` (string, optional): Additional CSS classes for custom styling.
*   All other standard \`<div>\` attributes are supported.

## Usage

\`\`\`tsx
import { Container, Card, Text } from './src/components';

// Default container
<Container>
  <Text>This content is centered with the default max-width.</Text>
</Container>

// Sized container
<Container size="sm">
  <Text>This content is in a small container.</Text>
</Container>
\`\`\``,k1=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme, Theme } from '../../core/theme/ThemeProvider';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: string;
    size?: keyof Theme['maxWidths'];
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', maxWidth, size, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('container');

    const containerClass = createStyle({
        width: '100%',
        maxWidth: (size ? theme.maxWidths[size] : undefined) || maxWidth || theme.maxWidths.container,
        margin: '0 auto',
        padding: \`0 \${theme.spacing.lg}\`,
        '@media': {
            "(maxWidth: 'sm')": {
                padding: \`0 \${theme.spacing.md}\`,
            }
        }
    });

    return (
        <div className={\`\${containerClass} \${className}\`} {...props}>
            {children}
        </div>
    );
};`,w1=()=>{const{theme:l}=_(),[r,c]=b.useState("sm");return o.jsx(ee,{title:"Container",description:"A layout component that centers its content and constrains it to a maximum width. Supports a `size` prop for theme-based widths.",livePreview:o.jsx("div",{style:{backgroundColor:"rgba(0,0,0,0.3)",padding:"1rem 0",borderRadius:"8px",width:"100%"},children:o.jsx(Sr,{size:r,children:o.jsx(gt,{children:o.jsxs(T,{children:['This content is inside a `Container` with `size="',r,'"`.']})})})}),propControls:o.jsx(j1,{size:r,setSize:c}),documentation:T1,fullSourceCode:k1})},A1=({title:l,setTitle:r,description:c,setDescription:i})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Title Prop",value:l,onChange:d=>r(d.target.value)}),o.jsx(re,{label:"Description Prop",value:c,onChange:d=>i(d.target.value)})]}),R1=`# Sofa

A styled container component used throughout the component showcase application. It provides a consistent bordered and padded box for wrapping component demonstrations and can now include a title and description.

## Props

*   \`children\` (React.ReactNode, required): The content to be displayed inside the container.
*   \`title\` (string, optional): A title to render in a heading style above the children.
*   \`description\` (string, optional): A descriptive text to render below the title.
*   All other standard HTML \`<div>\` attributes are supported.

## Usage

\`\`\`tsx
<Sofa
  title="Component Demo"
  description="This is a demonstration of another component."
>
  {/* ... other components ... */}
</Sofa>
\`\`\``,N1=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

interface SofaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

export const Sofa: React.FC<SofaProps> = ({ children, className = '', title, description, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('sofa');
    
    const sofaClass = createStyle({ 
        padding: '24px',
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '8px',
        border: \`1px solid \${theme.colors.border}\`,
        transition: 'background-color 0.3s, border-color 0.3s',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });
    
    return (
        <div className={\`\${sofaClass} \${className}\`} {...props}>
            {(title || description) ? (
                <Stack gap="1rem">
                    {title && <Text as="h2" size="1.5rem" weight="600">{title}</Text>}
                    {description && <Text>{description}</Text>}
                    <div>{children}</div>
                </Stack>
            ) : (
                children
            )}
        </div>
    );
};`,D1=()=>{const[l,r]=b.useState("Sofa Container"),[c,i]=b.useState("This is a styled container component used throughout the showcase."),d=`<Sofa title="${l}" description="${c}">
    <Text>This is the main content area.</Text>
</Sofa>`;return o.jsx(ee,{title:"Sofa",description:"A styled container component for wrapping content sections. It can include an optional title and description.",initialCode:d,propControls:o.jsx(A1,{title:l,setTitle:r,description:c,setDescription:i}),documentation:R1,fullSourceCode:N1})},z1=({height:l,setHeight:r})=>o.jsx(re,{label:"Height Prop (e.g., 60px)",value:l,onChange:c=>r(c.target.value)}),M1=`# Header

A semantic container component for the top section of a page, typically containing branding, navigation, and primary actions. It uses sub-components for layout.

## Components

*   **Header**: The main container.
*   **Header.Left**: A wrapper for content aligned to the left (e.g., logo, title).
*   **Header.Right**: A wrapper for content aligned to the right (e.g., actions, user menu).

## Usage

\`\`\`tsx
import { Header, Text, Button } from './src/components';

<Header>
  <Header.Left>
    <Text as="h1" size="1.25rem" weight="600">My App</Text>
  </Header.Left>
  <Header.Right>
    <Button>Log In</Button>
  </Header.Right>
</Header>
\`\`\``,E1=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Container } from '../Container/Container';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    height?: string;
}

const HeaderLeft: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const createStyle = useStyles('header-left');
    const class_ = createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        justifySelf: 'start',
        '@media': {
            "(maxWidth: 'md')": {
                justifySelf: 'center',
            },
        },
    });

    return <div className={\`\${class_} \${className}\`}>{children}</div>;
};
HeaderLeft.displayName = 'Header.Left';

const HeaderRight: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const createStyle = useStyles('header-right');
    const class_ = createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        justifySelf: 'end',
        '@media': {
            "(maxWidth: 'md')": {
                justifySelf: 'center',
            },
             "(maxWidth: 'sm')": {
                display: 'none',
            },
        },
    });

    return <div className={\`\${class_} \${className}\`}>{children}</div>;
};
HeaderRight.displayName = 'Header.Right';


export const Header: React.FC<HeaderProps> & {
    Left: typeof HeaderLeft;
    Right: typeof HeaderRight;
} = ({ children, className = '', height, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('header');

    const headerClass = createStyle({
        padding: height ? '0' : '10px 0',
        backgroundColor: theme.colors.backgroundSecondary,
        borderBottom: \`1px solid \${theme.colors.border}\`,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: height,
        display: height ? 'flex' : 'block',
        alignItems: height ? 'center' : undefined,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
            backgroundColor: theme.colors.backgroundSecondary.replace(/, ?\\d+\\.?\\d*\\)$/, ', 0.5)'),
        },
        '@media': {
            "(maxWidth: 'sm')": {
                padding: height ? '0' : \`\${theme.spacing.sm} 0\`,
            }
        },
    });
    
    const containerClass = createStyle({
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        padding: 0,
        width: height ? '100%' : undefined,
        '@media': {
            "(maxWidth: 'md')": {
                gridTemplateColumns: '1fr',
                gap: theme.spacing.sm,
            },
        },
    });

    return (
        <header className={\`\${headerClass} \${className}\`} {...props}>
            <Container className={containerClass}>
                {children}
            </Container>
        </header>
    );
};

Header.Left = HeaderLeft;
Header.Right = HeaderRight;`,L1=()=>{const[l,r]=b.useState("60px");return o.jsx(ee,{title:"Header",description:"A semantic container for the top of a page layout. Use Header.Left and Header.Right to align content.",livePreview:o.jsxs(kn,{height:l,children:[o.jsx(kn.Left,{children:o.jsx(T,{weight:"600",children:"My Application"})}),o.jsx(kn.Right,{children:o.jsx(be,{variant:"secondary",children:"Login"})})]}),propControls:o.jsx(z1,{height:l,setHeight:r}),documentation:M1,fullSourceCode:E1})},B1=`# Footer

A semantic container component for the bottom section of a page, typically containing copyright information, links, and other metadata.

## Props

*   \`children\` (React.ReactNode): The content to be rendered inside the footer.
*   All other standard \`<footer>\` attributes are supported.

## Usage

\`\`\`tsx
import { Footer, Text, Link } from './src/components';

<Footer>
  <Text size="14px">
    © {new Date().getFullYear()} ZwheUI. All Rights Reserved.
  </Text>
  <Link href="/privacy">Privacy Policy</Link>
</Footer>
\`\`\``,$1=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export const Footer: React.FC<FooterProps> = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('footer');

    const footerClass = createStyle({
        padding: \`\${theme.spacing.lg} \${theme.spacing.lg}\`,
        backgroundColor: theme.colors.backgroundSecondary,
        borderTop: \`1px solid \${theme.colors.border}\`,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        marginTop: 'auto', // Pushes footer to the bottom in a flex column layout
    });

    return (
        <footer className={\`\${footerClass} \${className}\`} {...props}>
            {children}
        </footer>
    );
};`,I1=()=>o.jsx(ee,{title:"Footer",description:"A semantic container for the bottom of a page layout.",livePreview:o.jsx(xg,{children:o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{size:"14px",color:"inherit",children:"© 2024 ZwheUI"}),o.jsx(Sa,{href:"#",children:"Terms of Service"})]})}),propControls:o.jsx(T,{color:"textSecondary",children:"This is a standard implementation of the Footer component. No props are available to configure in this demo."}),documentation:B1,fullSourceCode:$1}),O1=({width:l,setWidth:r})=>o.jsx(re,{label:"Width Prop",value:l,onChange:c=>r(c.target.value)}),H1=`# Sidebar

A set of components for creating a vertical navigation sidebar, commonly used for main application navigation.

## Components

*   **Sidebar**: The main container for the sidebar content.
*   **SidebarNav**: A wrapper for a navigation section, which can include a title.
*   **SidebarNavItem**: A single, clickable navigation link, with support for an icon and an active state.

## Props

### Sidebar
*   \`width\` (string, optional, default: '250px'): The width of the sidebar.
*   \`children\` (React.ReactNode): The content of the sidebar.

### SidebarNav
*   \`title\` (string, optional): A title for the navigation section.
*   \`children\` (React.ReactNode): A collection of \`SidebarNavItem\` components.

### SidebarNavItem
*   \`icon\` (React.ReactNode, optional): An icon to display next to the text.
*   \`isActive\` (boolean, optional): If true, applies an active style to the item.
*   All other props are passed to the underlying \`<a>\` tag (e.g., \`href\`, \`onClick\`).

## Usage

\`\`\`tsx
import { Sidebar, SidebarNav, SidebarNavItem } from './src/components';

<Sidebar>
    <SidebarNav title="Main Menu">
        <SidebarNavItem href="/dashboard" isActive>
            Dashboard
        </SidebarNavItem>
        <SidebarNavItem href="/settings">
            Settings
        </SidebarNavItem>
    </SidebarNav>
</Sidebar>
\`\`\``,U1=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Icon } from '../Icon/Icon';

interface SidebarProps { /* ... */ }

export const Sidebar: React.FC<SidebarProps> = ({ children, width = '250px', height = '100%', className }) => {
    /* ... styles ... */
    return <aside className={\`\${sidebarClass} \${className}\`}>{children}</aside>;
};

interface SidebarNavProps { /* ... */ }
export const SidebarNav: React.FC<SidebarNavProps> = ({ children, title }) => { /* ... */ };

interface SidebarNavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { /* ... */ }
export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ children, icon, isActive, className, ...props }) => {
    /* ... styles ... */
    return (
        <a className={\`\${itemClass} \${className}\`} {...props}>
            {icon && <Icon as={icon} size={16} />}
            <span>{children}</span>
        </a>
    );
};`,P1=()=>{const[l,r]=b.useState("250px");return o.jsx(ee,{title:"Sidebar",description:"A vertical navigation component, typically used for main application navigation.",livePreview:o.jsxs(D,{direction:"row",style:{height:"300px",width:"100%",backgroundColor:"rgba(0,0,0,0.2)",borderRadius:"8px"},children:[o.jsxs(Lu,{width:l,children:[o.jsx(T,{size:"1.25rem",weight:"600",children:"App"}),o.jsxs(tn,{title:"Menu",children:[o.jsx(ur,{href:"#",icon:iu,isActive:!0,children:"Dashboard"}),o.jsx(ur,{href:"#",icon:hr,children:"Settings"})]})]}),o.jsx("div",{style:{padding:"1rem",flex:1},children:o.jsx(T,{children:"Main content area"})})]}),propControls:o.jsx(O1,{width:l,setWidth:r}),documentation:H1,fullSourceCode:U1})},_1=({as:l,setAs:r})=>o.jsx(re,{label:"As Prop",value:typeof l=="string"?l:"",onChange:c=>r(c.target.value)}),G1=`# Box

A polymorphic layout primitive that renders a \`div\` by default but can be changed to any other HTML element using the \`as\` prop.

## Props

*   \`as\` (React.ElementType, optional): The underlying HTML element to render. Defaults to \`div\`.
*   All other standard HTML attributes for the rendered element are supported.

## Usage

\`\`\`tsx
import { Box } from './src/components';

// Renders a div
<Box style={{ padding: '1rem', background: '#333' }}>
  This is a box.
</Box>

// Renders a section element
<Box as="section">
  This is a section.
</Box>
\`\`\``,V1=`import React from 'react';

type BoxProps<C extends React.ElementType> = {
    as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as'>;

export const Box = <C extends React.ElementType = 'div'>({
    as: Component = 'div' as C,
    ...props
}: BoxProps<C>) => {
    return React.createElement(Component, props);
};`,q1=()=>{const{theme:l}=_(),[r,c]=b.useState("div");return o.jsx(ee,{title:"Box",description:"A polymorphic layout primitive, a foundational building block for other components.",livePreview:o.jsx(wl,{as:r,style:{padding:"1rem",backgroundColor:l.colors.background,border:`1px solid ${l.colors.border}`,borderRadius:"8px"},children:o.jsxs(T,{children:["This is a <",typeof r=="string"?r:"Component","> element."]})}),propControls:o.jsx(_1,{as:r,setAs:c}),documentation:G1,fullSourceCode:V1})},Y1=({direction:l,setDirection:r,align:c,setAlign:i,justify:d,setJustify:p,wrap:m,setWrap:f})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Direction"}),o.jsx(Be,{value:l,onChange:r,options:[{label:"row",value:"row"},{label:"column",value:"column"},{label:"row-reverse",value:"row-reverse"},{label:"column-reverse",value:"column-reverse"}]})]}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Align Items"}),o.jsx(Be,{value:c,onChange:i,options:[{label:"start",value:"flex-start"},{label:"center",value:"center"},{label:"end",value:"flex-end"},{label:"stretch",value:"stretch"}]})]}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Justify Content"}),o.jsx(Be,{value:d,onChange:p,options:[{label:"start",value:"flex-start"},{label:"center",value:"center"},{label:"end",value:"flex-end"},{label:"space-between",value:"space-between"}]})]}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Wrap"}),o.jsx(Be,{value:m,onChange:f,options:[{label:"nowrap",value:"nowrap"},{label:"wrap",value:"wrap"}]})]})]}),F1='# Flex\n\nA polymorphic layout primitive that renders a `div` by default but can be changed to any other HTML element using the `as` prop. It provides convenient props for controlling flexbox layouts.\n\n## Props\n\n*   `as` (React.ElementType, optional): The underlying HTML element to render.\n*   `direction` (CSS `flex-direction`, optional)\n*   `align` (CSS `align-items`, optional)\n*   `justify` (CSS `justify-content`, optional)\n*   `wrap` (CSS `flex-wrap`, optional)\n*   `gap` (CSS `gap`, optional)\n\n## Usage\n\n```tsx\n<Flex direction="row" gap="1rem" align="center">\n  <Card>Item A</Card>\n  <Card>Item B</Card>\n</Flex>\n```',X1=`import React from 'react';
import { useStyles } from '../../core';

type FlexProps<C extends React.ElementType> = {
    as?: C;
    direction?: React.CSSProperties['flexDirection'];
    align?: React.CSSProperties['alignItems'];
    justify?: React.CSSProperties['justifyContent'];
    wrap?: React.CSSProperties['flexWrap'];
    gap?: React.CSSProperties['gap'];
} & Omit<React.ComponentPropsWithoutRef<C>, 'as'>;

export const Flex = <C extends React.ElementType = 'div'>({
    direction,
    align,
    justify,
    wrap,
    gap,
    as: Component = 'div' as C,
    className,
    ...props
}: FlexProps<C>) => {
    const createStyle = useStyles('flex');

    const flexClass = createStyle({
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        gap: gap,
    });

    const finalClassName = [flexClass, className].filter(Boolean).join(' ');

    return React.createElement(Component, { ...props, className: finalClassName });
};`,K1=()=>{const{theme:l}=_(),[r,c]=b.useState("row"),[i,d]=b.useState("center"),[p,m]=b.useState("flex-start"),[f,x]=b.useState("wrap"),g=`<Flex direction="${r}" align="${i}" justify="${p}" wrap="${f}" gap="1rem">
    <Card><Text>Item 1</Text></Card>
    <Card><Text>Item 2</Text></Card>
    <Card><Text>Item 3</Text></Card>
</Flex>`;return o.jsx(ee,{title:"Flex",description:"A layout component for arranging items with consistent spacing, powered by Flexbox.",initialCode:g,propControls:o.jsx(Y1,{direction:r,setDirection:c,align:i,setAlign:d,justify:p,setJustify:m,wrap:f,setWrap:x}),documentation:F1,fullSourceCode:X1})},Q1=({as:l,setAs:r})=>o.jsx(re,{label:"As Prop",value:typeof l=="string"?l:"",onChange:c=>r(c.target.value)}),Z1=`# Center

A layout component that centers its children both horizontally and vertically. It is built on top of the \`Flex\` component.

## Props

*   All \`Flex\` props are supported.

## Usage

\`\`\`tsx
import { Center } from './src/components';

<Center style={{ height: '100px', background: '#333' }}>
  <p>Centered Content</p>
</Center>
\`\`\``,W1=`import React from 'react';
import { Flex } from '../Flex/Flex';

type CenterProps<C extends React.ElementType> = React.ComponentProps<typeof Flex<C>>;

export const Center = <C extends React.ElementType = 'div'>(props: CenterProps<C>) => {
    return (
        <Flex
            align="center"
            justify="center"
            {...props}
        />
    );
};`,J1=()=>{const{theme:l}=_(),[r,c]=b.useState("div");return o.jsx(ee,{title:"Center",description:"A layout component to center its children both horizontally and vertically.",livePreview:o.jsx(ko,{as:r,style:{height:"100px",width:"100%",backgroundColor:l.colors.background,borderRadius:"8px"},children:o.jsx(gt,{children:o.jsx(T,{children:"Perfectly Centered"})})}),propControls:o.jsx(Q1,{as:r,setAs:c}),documentation:Z1,fullSourceCode:W1})},e2=({ratio:l,setRatio:r})=>o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Ratio Prop"}),o.jsx(Be,{value:String(l),onChange:c=>r(Number(c)),options:[{label:"16 / 9",value:String(16/9)},{label:"4 / 3",value:String(4/3)},{label:"1 / 1",value:"1"},{label:"9 / 16",value:String(9/16)}]})]}),t2=`# AspectRatio

A layout component that wraps its children in a container that maintains a specific aspect ratio. Useful for videos, images, or any embedded content.

## Props

*   \`ratio\` (number, optional): The aspect ratio, calculated as \`width / height\`. Defaults to \`16 / 9\`.
*   All other \`Box\` props are supported.

## Usage

\`\`\`tsx
import { AspectRatio } from './src/components';

<AspectRatio ratio={4 / 3}>
  <img src="path/to/image.jpg" alt="A landscape image" />
</AspectRatio>
\`\`\``,n2=`import React from 'react';
import { Box } from '../Box/Box';
import { useStyles } from '../../core';

interface AspectRatioProps extends React.ComponentProps<typeof Box<'div'>> {
    ratio?: number;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ ratio = 16 / 9, children, className = '', ...props }) => {
    const createStyle = useStyles('aspect-ratio');
    
    const containerClass = createStyle({
        position: 'relative',
        width: '100%',
        '&::before': {
            content: '""',
            display: 'block',
            paddingBottom: \`\${100 / ratio}%\`,
        },
    });

    const contentClass = createStyle({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }
    });

    return (
        <Box className={\`\${containerClass} \${className}\`} {...props}>
            <div className={contentClass}>
                {children}
            </div>
        </Box>
    );
};`,o2=()=>{const{theme:l}=_(),[r,c]=b.useState(16/9);return o.jsx(ee,{title:"AspectRatio",description:"A container that maintains a fixed aspect ratio.",livePreview:o.jsx(Gf,{ratio:r,style:{backgroundColor:l.colors.background,borderRadius:"8px"},children:o.jsx(ko,{children:o.jsx(T,{children:r===16/9?"16 / 9":r===4/3?"4 / 3":r===1?"1 / 1":"9 / 16"})})}),propControls:o.jsx(e2,{ratio:r,setRatio:c}),documentation:t2,fullSourceCode:n2})},a2=({orientation:l,setOrientation:r})=>o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Orientation Prop"}),o.jsx(Be,{value:l,onChange:r,options:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}]})]}),l2=`# Divider

A component to visually separate content, either horizontally or vertically.

## Props

*   \`orientation\` (enum: 'horizontal' | 'vertical', optional): The orientation of the divider. Defaults to \`horizontal\`.
*   All other standard \`<hr>\` attributes are supported.

## Usage

\`\`\`tsx
import { Divider, Stack, Text } from './src/components';

// Horizontal divider
<Stack>
  <Text>Content above</Text>
  <Divider />
  <Text>Content below</Text>
</Stack>

// Vertical divider
<Stack direction="row" align="center">
  <Text>Left</Text>
  <Divider orientation="vertical" style={{ height: '24px' }}/>
  <Text>Right</Text>
</Stack>
\`\`\``,s2=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
    orientation?: 'horizontal' | 'vertical';
}

export const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('divider');
    const dividerClass = createStyle({
        border: 'none',
        backgroundColor: theme.colors.border,
        ...(orientation === 'horizontal' 
            ? { height: '1px', width: '100%', margin: '0.5rem 0' }
            : { width: '1px', height: 'auto', alignSelf: 'stretch', margin: '0 0.5rem' }
        ),
    });
    return <hr className={\`\${dividerClass} \${className}\`} {...props} />;
}`,r2=()=>{const[l,r]=b.useState("horizontal");return o.jsx(ee,{title:"Divider",description:"A component to visually separate content, either horizontally or vertically.",livePreview:l==="horizontal"?o.jsxs(D,{align:"stretch",style:{width:"200px"},children:[o.jsx(T,{children:"Content A"}),o.jsx(to,{orientation:"horizontal"}),o.jsx(T,{children:"Content B"})]}):o.jsxs(D,{direction:"row",align:"center",style:{height:"40px"},children:[o.jsx(T,{children:"Item 1"}),o.jsx(to,{orientation:"vertical"}),o.jsx(T,{children:"Item 2"})]}),propControls:o.jsx(a2,{orientation:l,setOrientation:r}),documentation:l2,fullSourceCode:s2})},i2=({label:l,setLabel:r,placeholder:c,setPlaceholder:i,error:d,setError:p,isDisabled:m,setIsDisabled:f})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Label Prop",value:l,onChange:x=>r(x.target.value)}),o.jsx(re,{label:"Placeholder Prop",value:c,onChange:x=>i(x.target.value)}),o.jsx(re,{label:"Error Prop",value:d,onChange:x=>p(x.target.value)}),o.jsx(Ke,{label:"Disabled Prop",checked:m,onChange:x=>f(x.target.checked)})]}),c2='# Input\n\nA complete form input component that wraps `TextInput` to include a label and an error message display.\n\n## Props\n\n*   `label` (string, optional): The text label displayed above the input field.\n*   `error` (string, optional): An error message to display below the input field.\n*   `id` (string, optional): A unique identifier for associating the label with the input.\n*   All other props are passed down to the `TextInput` component.\n\n## Usage\n\n```tsx\n<Input label="Email Address" placeholder="you@example.com" error="Email is required." />\n```',u2=`import React from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { Error } from '../Error/Error';
import { Text } from '../Text/Text';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useStyles } from '../../core/hooks/useStyles';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({ label, id, error, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('input-wrapper');

    const containerClass = createStyle({
        display: 'grid',
        gap: '4px',
        width: '100%',
    });

    return (
        <div className={\`\${containerClass} \${className}\`}>
            {label && (
                <label htmlFor={id}>
                    <Text as="span" size={theme.typography.fontSizes.sm} weight={theme.typography.fontWeights.medium} color={theme.colors.textSecondary}>
                        {label}
                    </Text>
                </label>
            )}
            <TextInput id={id} {...props} />
            <Error>{error}</Error>
        </div>
    );
};`,d2=()=>{const[l,r]=b.useState("Email Address"),[c,i]=b.useState("you@example.com"),[d,p]=b.useState(""),[m,f]=b.useState(!1),x=`<Input 
    label="${l}" 
    placeholder="${c}" 
    error="${d}" 
    disabled="${m}" 
/>`;return o.jsx(ee,{title:"Input",description:"A wrapper for TextInput that includes a label and an error message display area.",initialCode:x,propControls:o.jsx(i2,{label:l,setLabel:r,placeholder:c,setPlaceholder:i,error:d,setError:p,isDisabled:m,setIsDisabled:f}),documentation:c2,fullSourceCode:u2})},p2=({placeholder:l,setPlaceholder:r,isDisabled:c,setIsDisabled:i})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Placeholder Prop",value:l,onChange:d=>r(d.target.value)}),o.jsx(Ke,{label:"Disabled Prop",checked:c,onChange:d=>i(d.target.checked)})]}),m2='# Text Input\n\nThe base styled text input component. It serves as the foundation for other form elements like `Input`, `Search`, and `Combobox`.\n\n## Props\n\n*   All standard HTML `<input>` attributes are supported (e.g., `placeholder`, `type`, `disabled`).\n*   `className` (string, optional): Additional CSS classes for custom styling.\n\n## Usage\n\n```tsx\n<TextInput placeholder="Enter your name..." />\n```',h2=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ className = '', ...props }, ref) => {
    const { theme } = useTheme();
    const createStyle = useStyles('text-input');
    const isDark = theme.colors.background.startsWith('#1');

    const baseClasses = createStyle({
        display: 'block',
        width: '100%',
        backgroundColor: theme.colors.backgroundSecondary,
        border: \`1px solid \${theme.colors.border}\`,
        borderRadius: '0.375rem',
        padding: '0.5rem 0.75rem',
        color: theme.colors.text,
        transition: 'all 0.2s',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(8px)',
        },
        '&::placeholder': {
            color: theme.colors.textSecondary,
        },
        '&:focus': {
            outline: 'none',
            boxShadow: \`0 0 0 2px \${isDark ? theme.colors.background : '#fff'}, 0 0 0 4px \${theme.colors.primary}\`
        }
    });

    return <input type="text" ref={ref} className={\`\${baseClasses} \${className}\`} {...props} />;
});

TextInput.displayName = 'TextInput';`,f2=()=>{const[l,r]=b.useState("Enter your name..."),[c,i]=b.useState(!1),d=`<TextInput placeholder="${l}" disabled="${c}" />`;return o.jsx(ee,{title:"Text Input",description:"The base styled text input component used in other form elements.",initialCode:d,propControls:o.jsx(p2,{placeholder:l,setPlaceholder:r,isDisabled:c,setIsDisabled:i}),documentation:m2,fullSourceCode:h2})},g2=({placeholder:l,setPlaceholder:r,isDisabled:c,setIsDisabled:i})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Placeholder Prop",value:l,onChange:d=>r(d.target.value)}),o.jsx(Ke,{label:"Disabled Prop",checked:c,onChange:d=>i(d.target.checked)})]}),x2='# Textarea\n\nA styled multi-line text input field, ideal for longer form content like comments or descriptions.\n\n## Props\n\n*   All standard HTML `<textarea>` attributes are supported (e.g., `placeholder`, `rows`, `disabled`).\n*   `className` (string, optional): Additional CSS classes for custom styling.\n\n## Usage\n\n```tsx\n<Textarea\n  placeholder="Enter your comments here..."\n  rows={4}\n/>\n```',b2=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('textarea');
    const isDark = theme.colors.background.startsWith('#1');

    const baseClasses = createStyle({
        display: 'block',
        width: '100%',
        backgroundColor: theme.colors.backgroundSecondary,
        border: \`1px solid \${theme.colors.border}\`,
        borderRadius: '0.375rem',
        padding: '0.5rem 0.75rem',
        color: theme.colors.text,
        transition: 'all 0.2s',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(8px)',
        },
        '&::placeholder': {
            color: theme.colors.textSecondary,
        },
        '&:focus': {
            outline: 'none',
            boxShadow: \`0 0 0 2px \${isDark ? theme.colors.background : '#fff'}, 0 0 0 4px \${theme.colors.primary}\`
        }
    });

    return <textarea className={\`\${baseClasses} \${className}\`} {...props} />;
};`,y2=()=>{const[l,r]=b.useState("Enter your comments here..."),[c,i]=b.useState(!1),d=`<Textarea placeholder="${l}" disabled="${c}" rows="4" />`;return o.jsx(ee,{title:"Textarea",description:"A styled multi-line text input field for longer form content.",initialCode:d,propControls:o.jsx(g2,{placeholder:l,setPlaceholder:r,isDisabled:c,setIsDisabled:i}),documentation:x2,fullSourceCode:b2})},v2=({label:l,setLabel:r,isChecked:c,setIsChecked:i,isDisabled:d,setIsDisabled:p})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Label Prop",value:l,onChange:m=>r(m.target.value)}),o.jsx(Ke,{label:"Checked Prop",checked:c,onChange:m=>i(m.target.checked)}),o.jsx(Ke,{label:"Disabled Prop",checked:d,onChange:m=>p(m.target.checked)})]}),C2=`# Checkbox

A standard checkbox component for capturing boolean (true/false) input from a user.

## Props

*   \`label\` (string, optional): The text label displayed next to the checkbox.
*   \`id\` (string, optional): A unique identifier, necessary for associating the label with the input.
*   \`checked\` (boolean): The current state of the checkbox.
*   \`disabled\` (boolean, optional): If true, the checkbox will be un-interactive.
*   All other standard HTML \`<input type="checkbox">\` attributes are supported (e.g., \`onChange\`).

## Usage

\`\`\`tsx
import { Checkbox } from './src/components';
import { useState } from 'react';

const [isChecked, setIsChecked] = useState(false);

<Checkbox
  label="Accept terms and conditions"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
\`\`\``,S2=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, className = '', checked, disabled, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('checkbox');
    
    const containerClass = createStyle({
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: theme.spacing.sm,
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        opacity: disabled ? 0.6 : 1,
    });
    
    const customCheckboxClass = createStyle({
        width: '18px',
        height: '18px',
        border: '2px solid',
        borderRadius: '4px',
        display: 'grid',
        placeContent: 'center',
        transition: 'all 0.2s',
        backgroundColor: checked ? theme.colors.primary : 'transparent',
        borderColor: checked ? theme.colors.primary : theme.colors.border,
    });

    const inputClass = createStyle({
        position: 'absolute',
        opacity: 0,
        height: 0,
        width: 0,
        '&:focus-visible + div': {
            boxShadow: \`0 0 0 2px \${theme.colors.background}, 0 0 0 4px \${theme.colors.primary}\`,
        }
    });

    return (
        <label htmlFor={id} className={\`\${containerClass} \${className}\`}>
            <input 
                type="checkbox" 
                id={id} 
                checked={checked} 
                disabled={disabled}
                {...props} 
                className={inputClass}
            />
            <div className={customCheckboxClass}>
                 {checked && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={theme.colors.background} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
            </div>
            {label && <span style={{color: theme.colors.text}}>{label}</span>}
        </label>
    );
};`,j2=()=>{const[l,r]=b.useState("Accept terms"),[c,i]=b.useState(!0),[d,p]=b.useState(!1),m=`<Checkbox label="${l}" checked="${c}" disabled="${d}" />`;return o.jsx(ee,{title:"Checkbox",description:"A standard checkbox component for capturing boolean input.",initialCode:m,propControls:o.jsx(v2,{label:l,setLabel:r,isChecked:c,setIsChecked:i,isDisabled:d,setIsDisabled:p}),documentation:C2,fullSourceCode:S2})},T2=({label:l,setLabel:r,value:c})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Label Prop",value:l,onChange:i=>r(i.target.value)}),o.jsxs(T,{children:["Selected value: ",o.jsx("code",{style:{background:"rgba(255,255,255,0.1)",padding:"2px 4px",borderRadius:"4px"},children:c})]})]}),k2=`# Radio Group

A set of checkable buttons where only one option can be selected at a time.

## Components

*   **RadioGroup**: The main wrapper that manages state and provides context.
*   **RadioGroupItem**: A single radio button option with a label.

## Props

### RadioGroup
*   \`value\` (string, required): The \`value\` of the currently selected \`RadioGroupItem\`.
*   \`onChange\` (function, required): A callback function triggered when the selection changes.
*   \`name\` (string, required): A name for the group, passed to the underlying radio inputs for accessibility.
*   \`label\` (string, optional): An accessible label for the entire group.

### RadioGroupItem
*   \`value\` (string, required): A unique value for this option.
*   \`label\` (string, required): The text label for this option.

## Usage

\`\`\`tsx
import { RadioGroup, RadioGroupItem } from './src/components';
import { useState } from 'react';

const [plan, setPlan] = useState('free');

<RadioGroup
  value={plan}
  onChange={setPlan}
  name="subscription-plan"
  label="Select a Plan"
>
    <RadioGroupItem value="free" label="Free Tier" />
    <RadioGroupItem value="pro" label="Pro Tier" />
</RadioGroup>
\`\`\``,w2=`import React, { createContext, useContext } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Text } from '../Text/Text';

interface RadioGroupContextType { /* ... */ }
const RadioGroupContext = createContext<RadioGroupContextType | null>(null);
const useRadioGroup = () => { /* ... */ };

interface RadioGroupProps { /* ... */ }

export const RadioGroup: React.FC<RadioGroupProps> = ({ children, value, onChange, name, label, className }) => {
    return (
        <RadioGroupContext.Provider value={{ value, onChange, name }}>
            <div role="radiogroup" aria-label={label} className={className}>
                {label && <Text as="span">{label}</Text>}
                {children}
            </div>
        </RadioGroupContext.Provider>
    );
};

interface RadioGroupItemProps { /* ... */ }

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ value, label, className }) => {
    /* ... internal logic and styles ... */

    return (
        <label className={\`\${containerClass} \${className}\`}>
            <input 
                type="radio" 
                name={name} 
                value={value} 
                checked={isChecked} 
                onChange={() => onChange(value)}
                className={inputClass}
            />
            <span className={radioClass}>
                <span className={indicatorClass}></span>
            </span>
            <Text as="span">{label}</Text>
        </label>
    );
};`,A2=()=>{const[l,r]=b.useState("free"),[c,i]=b.useState("Select a Plan");return o.jsx(ee,{title:"Radio Group",description:"A set of checkable buttons, where only one can be selected at a time.",livePreview:o.jsxs(Gg,{value:l,onChange:r,name:"subscription-plan",label:c,children:[o.jsx(Ws,{value:"free",label:"Free Tier"}),o.jsx(Ws,{value:"pro",label:"Pro Tier"}),o.jsx(Ws,{value:"enterprise",label:"Enterprise Tier"})]}),propControls:o.jsx(T2,{label:c,setLabel:i,value:l}),documentation:k2,fullSourceCode:w2})},R2=({label:l,setLabel:r,isChecked:c,setIsChecked:i,isDisabled:d,setIsDisabled:p})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Label Prop",value:l,onChange:m=>r(m.target.value)}),o.jsx(Ke,{label:"Checked Prop",checked:c,onChange:m=>i(m.target.checked)}),o.jsx(Ke,{label:"Disabled Prop",checked:d,onChange:m=>p(m.target.checked)})]}),N2=`# Switch

A control that allows the user to toggle between two states, typically "on" and "off". It's a visually distinct alternative to a \`Checkbox\`.

## Props

*   \`label\` (string, optional): A text label displayed next to the switch.
*   \`id\` (string, optional): A unique identifier for associating the label with the input.
*   \`checked\` (boolean): The current state of the switch.
*   \`disabled\` (boolean, optional): If true, the switch will be un-interactive.
*   All other standard HTML \`<input type="checkbox">\` attributes are supported (e.g., \`onChange\`).

## Usage

\`\`\`tsx
import { Switch } from './src/components';
import { useState } from 'react';

const [notifications, setNotifications] = useState(true);

<Switch
  label="Enable Notifications"
  checked={notifications}
  onChange={(e) => setNotifications(e.target.checked)}
/>
\`\`\``,D2=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Switch: React.FC<SwitchProps> = ({ label, id, checked, disabled, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('switch');

    const containerClass = createStyle({ /* ...styles... */ });
    const trackClass = createStyle({ /* ...styles... */ });
    const thumbClass = createStyle({ /* ...styles... */ });
    const inputClass = createStyle({ /* ...styles... */ });

    return (
        <label htmlFor={id} className={containerClass}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                disabled={disabled}
                role="switch"
                aria-checked={checked}
                {...props}
                className={inputClass}
            />
            <div className={trackClass}>
                <div className={thumbClass}></div>
            </div>
            {label && <span>{label}</span>}
        </label>
    );
};`,z2=()=>{const[l,r]=b.useState(!0),[c,i]=b.useState("Enable Notifications"),[d,p]=b.useState(!1);return o.jsx(ee,{title:"Switch",description:"A control that allows the user to toggle between two states.",livePreview:o.jsx(Zg,{label:c,checked:l,onChange:m=>r(m.target.checked),disabled:d}),propControls:o.jsx(R2,{label:c,setLabel:i,isChecked:l,setIsChecked:r,isDisabled:d,setIsDisabled:p}),documentation:N2,fullSourceCode:D2})},lf=[{value:"grid",label:"Data Grid Pro"},{value:"suite",label:"Component Suite"},{value:"headless",label:"Headless Components"}],M2=({optionsString:l,setOptionsString:r,error:c,value:i})=>o.jsxs(D,{gap:"1rem",children:[o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Options Prop (JSON Array)"}),o.jsx(Ml,{value:l,onChange:d=>r(d.target.value),rows:5,style:{fontFamily:"monospace"}}),c&&o.jsx(jr,{children:c})]}),o.jsxs(T,{children:["Selected value: ",o.jsx("code",{style:{background:"rgba(255,255,255,0.1)",padding:"2px 4px",borderRadius:"4px"},children:i})]})]}),E2=`# Select

A custom-styled dropdown component for selecting a single option from a list.

## Props

*   \`value\` (string, required): The \`value\` of the currently selected option.
*   \`onChange\` (function, required): A callback function triggered when the selection changes.
*   \`options\` (array of objects, required): The list of options to display. Each object must have \`value\` and \`label\` properties.
*   \`disabled\` (boolean, optional): If true, the select is not interactive.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { Select } from './src/components';
import { useState } from 'react';

const selectOptions = [
    { value: 'grid', label: 'Data Grid' },
    { value: 'suite', label: 'Component Suite' },
];

const [selection, setSelection] = useState('grid');

<Select value={selection} onChange={setSelection} options={selectOptions} />
\`\`\``,L2=`import React, { useState, useRef } from 'react'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'
import { useClickOutside } from '../../core/hooks/useInteractions'
import { Popper, PopperContent, PopperTrigger } from '../Popper/Popper'

export interface SelectProps { /* ... */ }

export const Select: React.FC<SelectProps> = ({ value, onChange, options, disabled = false, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('select');
    const [isOpen, setIsOpen] = useState(false);
    
    const selectedOption = options.find(opt => opt.value === value);

    const triggerClass = createStyle({ /* ... styles ... */ });
    const dropdownClass = createStyle({ /* ... styles ... */ });
    const optionClass = createStyle({ /* ... styles ... */ });

    const handleSelect = (optionValue: string) => { /* ... */ };

    return (
       <Popper isOpen={isOpen} setIsOpen={setIsOpen}>
            <PopperTrigger>
                 <button className={triggerClass} disabled={disabled}>
                    {selectedOption?.label}
                </button>
            </PopperTrigger>
            <PopperContent className={dropdownClass}>
                 {options.map((option) => (
                    <div
                        key={option.value}
                        className={optionClass}
                        onClick={() => handleSelect(option.value)}
                        data-selected={option.value === value}
                    >
                        {option.label}
                    </div>
                ))}
            </PopperContent>
       </Popper>
    );
}`,B2=()=>{const[l,r]=b.useState(JSON.stringify(lf,null,2)),[c,i]=b.useState("");let d=lf;try{const f=JSON.parse(l);Array.isArray(f)?(d=f,c&&i("")):c||i("Options must be a valid JSON array.")}catch{c||i("Invalid JSON format")}const[p,m]=b.useState(d[0]?.value||"");return o.jsx(ee,{title:"Select",description:"A custom-styled dropdown component for selecting a single option from a list.",livePreview:o.jsx(qg,{value:p,onChange:m,options:d}),propControls:o.jsx(M2,{optionsString:l,setOptionsString:r,error:c,value:p}),documentation:E2,fullSourceCode:L2})},$2=[{value:"react",label:"React"},{value:"vue",label:"Vue.js"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"SolidJS"}],I2=({placeholder:l,setPlaceholder:r,value:c})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Placeholder Prop",value:l,onChange:i=>r(i.target.value)}),o.jsxs(T,{children:["Selected value: ",o.jsx("code",{style:{background:"rgba(255,255,255,0.1)",padding:"2px 4px",borderRadius:"4px"},children:c||"None"})]})]}),O2=`# Combobox

An input field that combines a text input with a dropdown list. It allows users to filter a list of options and select one.

## Props

*   \`items\` (array of objects, required): The list of options to display. Each object must have \`value\` and \`label\` properties.
*   \`value\` (string, required): The \`value\` of the currently selected item.
*   \`onChange\` (function, required): A callback function triggered when an item is selected.
*   \`placeholder\` (string, optional): Placeholder text for the input field.

## Usage

\`\`\`tsx
import { Combobox } from './src/components';
import { useState } from 'react';

const frameworks = [
  { value: 'react', label: 'React' },
];

const [selectedValue, setSelectedValue] = useState('react');

<Combobox
  items={frameworks}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Select a framework..."
/>
\`\`\``,H2=`import React, { useState, useMemo, useRef } from 'react';
import { Popper, PopperTrigger, PopperContent } from '../Popper/Popper';
import { TextInput } from '../TextInput/TextInput';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useClickOutside } from '../../core/hooks/useInteractions';

interface ComboboxItem {
    value: string;
    label: string;
}

interface ComboboxProps {
    items: ComboboxItem[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const Combobox: React.FC<ComboboxProps> = ({ items, value, onChange, placeholder }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('combobox');
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState(-1);
    const comboboxRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

    const selectedItem = useMemo(() => items.find(item => item.value === value), [items, value]);

    React.useEffect(() => {
        setInputValue(selectedItem?.label || '');
    }, [selectedItem]);

    const filteredItems = useMemo(() => {
        if (!inputValue) return items;
        return items.filter(item => item.label.toLowerCase().includes(inputValue.toLowerCase()));
    }, [items, inputValue]);

    const handleSelect = (item: ComboboxItem) => {
        onChange(item.value);
        setInputValue(item.label);
        setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex(prev => (prev + 1) % filteredItems.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeIndex >= 0 && filteredItems[activeIndex]) {
                handleSelect(filteredItems[activeIndex]);
            }
        } else if (e.key === 'Escape') {
            setIsOpen(false);
        }
    };

    const optionsListClass = createStyle({
        maxHeight: '200px',
        overflowY: 'auto',
        display: 'grid',
        gap: '4px',
    });

    const optionClass = createStyle({
        padding: '8px 12px',
        borderRadius: '4px',
        cursor: 'pointer',
        color: theme.colors.textSecondary,
        transition: 'all 0.2s ease',
        '&:hover': {
            backgroundColor: theme.colors.border,
            color: theme.colors.text,
        },
        '&[data-active="true"]': {
            backgroundColor: theme.colors.border,
            color: theme.colors.text,
        }
    });

    return (
        <Popper isOpen={isOpen} setIsOpen={setIsOpen}>
            <div ref={comboboxRef} style={{width: '250px'}}>
                <PopperTrigger>
                    <TextInput
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            setIsOpen(true);
                            onChange('');
                        }}
                        onFocus={() => setIsOpen(true)}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                    />
                </PopperTrigger>
                <PopperContent>
                    <div className={optionsListClass}>
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, index) => (
                                <div
                                    key={item.value}
                                    className={optionClass}
                                    data-active={index === activeIndex}
                                    onClick={() => handleSelect(item)}
                                    onMouseMove={() => setActiveIndex(index)}
                                >
                                    {item.label}
                                </div>
                            ))
                        ) : (
                            <div style={{ padding: '8px 12px', color: theme.colors.textSecondary }}>
                                No results found.
                            </div>
                        )}
                    </div>
                </PopperContent>
            </div>
        </Popper>
    );
};`,U2=()=>{const[l,r]=b.useState("react"),[c,i]=b.useState("Select a framework..."),d=`<Combobox 
    items={[
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue.js' },
        // ... more items
    ]}
    placeholder="${c}" 
/> 
// The 'value' and 'onChange' props are managed in the live preview.`;return o.jsx(ee,{title:"Combobox",description:"An input field that combines a text input with a dropdown list for filtering and selecting options.",livePreview:o.jsx(cg,{items:$2,value:l,onChange:r,placeholder:c}),initialCode:d,propControls:o.jsx(I2,{placeholder:c,setPlaceholder:i,value:l}),documentation:O2,fullSourceCode:H2})},P2=({min:l,setMin:r,max:c,setMax:i,step:d,setStep:p,showValue:m,setShowValue:f,isDisabled:x,setIsDisabled:g})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Min Prop",type:"number",value:l,onChange:v=>r(Number(v.target.value))}),o.jsx(re,{label:"Max Prop",type:"number",value:c,onChange:v=>i(Number(v.target.value))}),o.jsx(re,{label:"Step Prop",type:"number",value:d,onChange:v=>p(Number(v.target.value))}),o.jsx(Ke,{label:"Show Value Prop",checked:m,onChange:v=>f(v.target.checked)}),o.jsx(Ke,{label:"Disabled Prop",checked:x,onChange:v=>g(v.target.checked)})]}),_2=`# Slider

An input component that allows the user to select a value from a continuous or discrete range by dragging a thumb along a track.

## Props

*   \`value\` (number, required): The current value of the slider.
*   \`onChange\` (function, required): A callback function triggered when the value changes.
*   \`min\` (number, optional, default: 0): The minimum value of the range.
*   \`max\` (number, optional, default: 100): The maximum value of the range.
*   \`step\` (number, optional, default: 1): The increment value.
*   \`disabled\` (boolean, optional): If true, the slider is not interactive.
*   \`showValue\` (boolean, optional): If true, the current value is always displayed above the thumb.
*   \`color\` (string, optional): A custom color for the slider's track and thumb.

## Usage

\`\`\`tsx
import { Slider } from './src/components';
import { useState } from 'react';

const [volume, setVolume] = useState(50);

<Slider value={volume} onChange={setVolume} min={0} max={100} />
\`\`\``,G2=`import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export interface SliderProps { /* ... */ }

export const Slider: React.FC<SliderProps> = ({
    value, onChange, min = 0, max = 100, step = 1, disabled = false, showValue = false, className = '', color,
}) => {
    /* ... internal logic for dragging, keyboard events, and styles ... */

    return (
        <div className={\`\${containerClass} \${className}\`}>
            <div ref={trackRef} className={trackClass} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
                <div className={progressClass} />
                <div
                    className={thumbClass}
                    onKeyDown={handleKeyDown}
                    tabIndex={disabled ? -1 : 0}
                    role="slider"
                    /* ... aria props ... */
                />
                {(showValue || isDragging) && (
                    <div className={valueClass}>{value}</div>
                )}
            </div>
        </div>
    );
}`,V2=()=>{const[l,r]=b.useState(50),[c,i]=b.useState(0),[d,p]=b.useState(100),[m,f]=b.useState(1),[x,g]=b.useState(!1),[v,C]=b.useState(!1);return o.jsx(ee,{title:"Slider",description:"An input component that allows selecting a value from a continuous or discrete range.",livePreview:o.jsx(Xe,{value:l,onChange:r,min:c,max:d,step:m,showValue:x,disabled:v}),propControls:o.jsx(P2,{min:c,setMin:i,max:d,setMax:p,step:m,setStep:f,showValue:x,setShowValue:g,isDisabled:v,setIsDisabled:C}),documentation:_2,fullSourceCode:G2})},q2=({min:l,setMin:r,max:c,setMax:i,step:d,setStep:p})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Min Prop",type:"number",value:l,onChange:m=>r(Number(m.target.value))}),o.jsx(re,{label:"Max Prop",type:"number",value:c,onChange:m=>i(Number(m.target.value))}),o.jsx(re,{label:"Step Prop",type:"number",value:d,onChange:m=>p(Number(m.target.value))})]}),Y2=`# Number Input

An input component specifically for numbers, which includes stepper controls to increment and decrement the value.

## Props

*   \`value\` (number, required): The current value of the input.
*   \`onChange\` (function, required): A callback function triggered when the value changes.
*   \`min\` (number, optional): The minimum allowed value.
*   \`max\` (number, optional): The maximum allowed value.
*   \`step\` (number, optional, default: 1): The amount to increment or decrement by.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { NumberInput } from './src/components';
import { useState } from 'react';

const [quantity, setQuantity] = useState(1);

<NumberInput
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={10}
/>
\`\`\``,F2=`import React from 'react';
import { TextInput } from '../TextInput/TextInput';
import { Button } from '../Button';
import { Stack } from '../Stack/Stack';
import { useStyles } from '../../core/hooks/useStyles';

interface NumberInputProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    className?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, min, max, step = 1, className }) => {
    const createStyle = useStyles('number-input');

    const handleStep = (direction: 'up' | 'down') => {
        const newValue = value + (direction === 'up' ? step : -step);
        if (min !== undefined && newValue < min) return;
        if (max !== undefined && newValue > max) return;
        onChange(newValue);
    };

    const containerClass = createStyle({ /* ... styles ... */ });
    const stepperButtonClass = createStyle({ /* ... styles ... */ });

    return (
        <div className={\`\${containerClass} \${className}\`}>
            <TextInput
                type="number"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value, 10))}
                min={min}
                max={max}
                step={step}
                style={{ borderRadius: '0.375rem 0 0 0.375rem', borderRight: 0 }}
            />
            <Stack direction="column" gap="2px" style={{height: '100%'}}>
                <Button variant="secondary" onClick={() => handleStep('up')} className={stepperButtonClass} style={{borderRadius: '0 0.375rem 0 0', height: '50%'}}>+</Button>
                <Button variant="secondary" onClick={() => handleStep('down')} className={stepperButtonClass} style={{borderRadius: '0 0 0.375rem 0', height: '50%'}}>-</Button>
            </Stack>
        </div>
    );
};`,X2=()=>{const[l,r]=b.useState(1),[c,i]=b.useState(0),[d,p]=b.useState(10),[m,f]=b.useState(1);return o.jsx(ee,{title:"Number Input",description:"An input for numbers with stepper controls.",livePreview:o.jsx("div",{style:{width:"150px"},children:o.jsx(Og,{value:l,onChange:r,min:c,max:d,step:m})}),propControls:o.jsx(q2,{min:c,setMin:i,max:d,setMax:p,step:m,setStep:f}),documentation:Y2,fullSourceCode:F2})},K2=`# File Upload

A component that allows users to select a file by clicking or by dragging and dropping it into a designated area.

## Props

*   \`onFileSelect\` (function, required): A callback function that is triggered when a file is selected or cleared. It receives the \`File\` object or \`null\`.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { FileUpload } from './src/components';
import { useState } from 'react';

const [selectedFile, setSelectedFile] = useState(null);

<FileUpload onFileSelect={setSelectedFile} />
\`\`\``,Q2=`import React, { useState, useRef, useCallback } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Text } from '../Text/Text';

interface FileUploadProps {
    onFileSelect: (file: File | null) => void;
    className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('file-upload');
    const [isDragging, setIsDragging] = useState(false);
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            onFileSelect(file);
        } else {
            setFileName('');
            onFileSelect(null);
        }
    };

    const handleDrag = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDragIn = useCallback((e: React.DragEvent) => {
        handleDrag(e);
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setIsDragging(true);
        }
    }, [handleDrag]);
    
    const handleDragOut = useCallback((e: React.DragEvent) => {
        handleDrag(e);
        setIsDragging(false);
    }, [handleDrag]);
    
    const handleDrop = useCallback((e: React.DragEvent) => {
        handleDrag(e);
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
         if (file) {
            setFileName(file.name);
            onFileSelect(file);
        }
    }, [handleDrag, onFileSelect]);

    const handleClick = () => {
        fileInputRef.current?.click();
    };
    
    const containerClass = createStyle({
        width: '100%',
        padding: theme.spacing.lg,
        border: \`2px dashed \${isDragging ? theme.colors.primary : theme.colors.border}\`,
        borderRadius: '8px',
        backgroundColor: isDragging ? 'rgba(59, 130, 246, 0.1)' : theme.colors.backgroundSecondary,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(12px)',
        },
    });

    return (
        <div 
            className={\`\${containerClass} \${className}\`}
            onClick={handleClick}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragOver={handleDrag}
            onDrop={handleDrop}
        >
            <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
            <Text>
                {fileName ? \`Selected: \${fileName}\` : 'Drag & drop a file here, or click to select'}
            </Text>
            <Text size="12px" color={theme.colors.textSecondary}>Max file size: 10MB</Text>
        </div>
    );
};`,Z2=()=>{const[l,r]=b.useState(null);return o.jsx(ee,{title:"File Upload",description:"A drag-and-drop file input component.",livePreview:o.jsxs(D,{gap:"1rem",style:{width:"100%"},children:[o.jsx(Tr,{onFileSelect:r}),l&&o.jsxs(T,{size:"14px",children:["File ready for upload: ",l.name," (",Math.round(l.size/1024)," KB)"]})]}),propControls:o.jsx(T,{color:"textSecondary",children:"The main prop, `onFileSelect`, is a callback. Use the Preview tab to test the file selection and drag-and-drop functionality."}),documentation:K2,fullSourceCode:Q2})},W2=({color:l,setColor:r})=>o.jsx(re,{label:"Value Prop (hex color)",value:l,onChange:c=>r(c.target.value)}),J2=`# Color Picker

An interactive component for selecting a color. It displays a color swatch, RGB sliders, and a hex input field.

## Props

*   \`value\` (string, required): The currently selected color as a hex string (e.g., \`#RRGGBB\`).
*   \`onChange\` (function, required): A callback function triggered when the color value changes. It receives the new hex color string as an argument.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { ColorPicker } from './src/components';
import { useState } from 'react';

const [color, setColor] = useState('#60a5fa');

<ColorPicker value={color} onChange={setColor} />
\`\`\``,eC=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Slider } from '../Slider/Slider';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { parseColor } from '../../core/color/utils';

interface ColorPickerProps {
    value: string; // hex color string e.g. #RRGGBB
    onChange: (color: string) => void;
    className?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('color-picker');
    const [r, g, b] = parseColor(value);

    const handleColorChange = (channel: 'r' | 'g' | 'b', newValue: number) => {
        const newColor = [r, g, b];
        if (channel === 'r') newColor[0] = newValue;
        if (channel === 'g') newColor[1] = newValue;
        if (channel === 'b') newColor[2] = newValue;

        const toHex = (c: number) => \`0\${c.toString(16)}\`.slice(-2);
        onChange(\`#\${toHex(newColor[0])}\${toHex(newColor[1])}\${toHex(newColor[2])}\`);
    };

    const containerClass = createStyle({
        padding: theme.spacing.md,
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '8px',
        border: \`1px solid \${theme.colors.border}\`,
        width: '250px',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });

    const swatchClass = createStyle({
        width: '100%',
        height: '60px',
        backgroundColor: value,
        borderRadius: '4px',
        border: \`1px solid \${theme.colors.border}\`,
        marginBottom: theme.spacing.md,
    });
    
    const hexInputClass = createStyle({
        width: '100%',
        fontFamily: 'monospace',
        textAlign: 'center',
        padding: theme.spacing.sm,
        backgroundColor: theme.colors.background,
        border: \`1px solid \${theme.colors.border}\`,
        color: theme.colors.text,
        borderRadius: '4px'
    });

    return (
        <div className={\`\${containerClass} \${className}\`}>
            <div className={swatchClass} />
            <Stack direction="column" gap={theme.spacing.sm}>
                <Stack direction="row" align="center" gap={theme.spacing.sm} style={{ gridTemplateColumns: 'auto 1fr' }}>
                    <Text as="span" size="14px" color="#ef4444" style={{width: '15px'}}>R</Text>
                    <Slider value={r} onChange={(newR) => handleColorChange('r', newR)} min={0} max={255} color="#ef4444" />
                </Stack>
                <Stack direction="row" align="center" gap={theme.spacing.sm} style={{ gridTemplateColumns: 'auto 1fr' }}>
                    <Text as="span" size="14px" color="#10b981" style={{width: '15px'}}>G</Text>
                    <Slider value={g} onChange={(newG) => handleColorChange('g', newG)} min={0} max={255} color="#10b981" />
                </Stack>
                <Stack direction="row" align="center" gap={theme.spacing.sm} style={{ gridTemplateColumns: 'auto 1fr' }}>
                    <Text as="span" size="14px" color="#3b82f6" style={{width: '15px'}}>B</Text>
                    <Slider value={b} onChange={(newB) => handleColorChange('b', newB)} min={0} max={255} color="#3b82f6" />
                </Stack>
                <input 
                    className={hexInputClass} 
                    type="text" 
                    value={value} 
                    onChange={(e) => onChange(e.target.value)}
                />
            </Stack>
        </div>
    );
};

export default ColorPicker;`,tC=()=>{const[l,r]=b.useState("#60a5fa");return o.jsx(ee,{title:"Color Picker",description:"An interactive component for selecting a color using RGB sliders.",livePreview:o.jsx(rg,{value:l,onChange:r}),propControls:o.jsx(W2,{color:l,setColor:r}),documentation:J2,fullSourceCode:eC})},nC=()=>{const[l,r]=b.useState(new Date);return o.jsx(ht,{children:o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Date Picker"}),o.jsx(T,{children:"An input that allows users to select a date from a calendar."}),o.jsx(dg,{label:"Event Date",value:l,onChange:r}),o.jsxs(T,{children:["Selected Date: ",l?l.toDateString():"None"]})]})})},oC=({placeholder:l,setPlaceholder:r})=>o.jsx(re,{label:"Placeholder Prop",value:l,onChange:c=>r(c.target.value)}),aC="# Search\n\nA styled text input component specifically designed for search queries, featuring a leading search icon. It is built upon the `TextInput` component.\n\n## Props\n\n*   All props from `TextInput` are supported (e.g., `placeholder`, `value`, `onChange`).\n*   `className` (string, optional): Additional CSS classes for the container `div`.\n\n## Usage\n\n```tsx\nimport { Search } from './src/components';\n\n<Search placeholder=\"Search documentation...\" />\n```",lC=`import React from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

const SearchIcon = () => ( /* ... svg ... */ );

export interface SearchProps extends TextInputProps {}

export const Search: React.FC<SearchProps> = ({ className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('search');
    
    const containerClass = createStyle({ /* ... styles ... */ });
    const iconClass = createStyle({ /* ... styles ... */ });
    const inputClass = createStyle({ paddingLeft: '36px' });

    return (
        <div className={\`\${containerClass} \${className}\`}>
            <span className={iconClass}>
                <SearchIcon />
            </span>
            <TextInput className={inputClass} {...props} />
        </div>
    );
};

export default Search;`,sC=()=>{const[l,r]=b.useState("Search documentation...");return o.jsx(ee,{title:"Search",description:"A styled text input component specifically designed for search queries, featuring a leading search icon.",livePreview:o.jsx(Eu,{placeholder:l,style:{width:"300px"}}),propControls:o.jsx(oC,{placeholder:l,setPlaceholder:r}),documentation:aC,fullSourceCode:lC})},rC=({max:l,setMax:r,size:c,setSize:i,isReadonly:d,setIsReadonly:p,value:m})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Max Prop (Total Stars)"}),o.jsx(Xe,{value:l,onChange:r,min:3,max:10,showValue:!0})]}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Size Prop"}),o.jsx(Be,{value:c,onChange:i,options:[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}]})]}),o.jsx(Ke,{label:"Readonly Prop",checked:d,onChange:f=>p(f.target.checked)}),o.jsxs(T,{children:["Current value: ",m]})]}),iC=`# Rating

A star rating component to display and collect user ratings.

## Props

*   \`value\` (number, required): The current rating value (number of filled stars).
*   \`onChange\` (function, optional): A callback function triggered when the rating is changed by the user.
*   \`max\` (number, optional, default: 5): The total number of stars to display.
*   \`readonly\` (boolean, optional, default: false): If true, the rating is display-only and cannot be changed.
*   \`size\` (enum: 'small' | 'medium' | 'large', optional, default: 'medium'): The size of the stars.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { Rating } from './src/components';
import { useState } from 'react';

const [rating, setRating] = useState(3);

// Interactive rating
<Rating value={rating} onChange={setRating} max={5} />

// Read-only rating
<Rating value={4} readonly />
\`\`\``,cC=`import React from 'react'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'

export interface RatingProps {
    value: number;
    onChange?: (value: number) => void;
    max?: number;
    readonly?: boolean;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

export const Rating: React.FC<RatingProps> = ({ value, onChange, max = 5, readonly = false, size = 'medium', className = '' }) => {
    /* ... internal logic and styles ... */

    const handleClick = (index: number) => {
        if (!readonly && onChange) {
            onChange(index + 1)
        }
    }
    
    return (
        <div className={\`\${containerClass} \${className}\`} {...interactiveProps} >
            {Array.from({ length: max }, (_, i) => (
                <span key={i} className={starClass} data-filled={i < value} onClick={() => handleClick(i)} />
            ))}
        </div>
    )
}`,uC=()=>{const[l,r]=b.useState(3),[c,i]=b.useState(5),[d,p]=b.useState("medium"),[m,f]=b.useState(!1);return o.jsx(ee,{title:"Rating",description:"A star rating component to display and collect user ratings.",livePreview:o.jsx(Vg,{value:l,onChange:r,max:c,size:d,readonly:m}),propControls:o.jsx(rC,{max:c,setMax:i,size:d,setSize:p,isReadonly:m,setIsReadonly:f,value:l}),documentation:iC,fullSourceCode:cC})},dC=`# Toggle Button

A set of components for creating a group of buttons that can be toggled on or off, similar to a checkbox or radio group but with a button-like appearance.

## Components

*   **ToggleButtonGroup**: The main wrapper that manages the state for a group of toggle buttons.
*   **ToggleButton**: A single button within the group.

## Props

### ToggleButtonGroup
*   \`value\` (string | string[] | null, required): The value of the currently selected button(s). Use a string for \`single\` type and an array of strings for \`multiple\`.
*   \`onChange\` (function, required): A callback function that is triggered when the selection changes.
*   \`type\` (enum: 'single' | 'multiple', optional, default: 'single'): The selection behavior of the group.

### ToggleButton
*   \`value\` (string, required): A unique value for the button.
*   All other standard \`<button>\` attributes are supported.

## Usage

\`\`\`tsx
import { ToggleButtonGroup, ToggleButton } from './src/components';

// Single selection
const [align, setAlign] = useState('left');
<ToggleButtonGroup value={align} onChange={setAlign} type="single">
  <ToggleButton value="left">Left</ToggleButton>
</ToggleButtonGroup>
\`\`\``,pC=`import React, { createContext, useContext } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface ToggleButtonGroupContextType { /*...*/ }
const ToggleButtonGroupContext = createContext<ToggleButtonGroupContextType | null>(null);
export const useToggleButtonGroup = () => { /*...*/ };

interface ToggleButtonGroupProps { /*...*/ }
export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = (props) => { /*...*/ };

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { value: string; }
export const ToggleButton: React.FC<ToggleButtonProps> = (props) => { /*...*/ };
`,mC=()=>{const[l,r]=b.useState("left"),[c,i]=b.useState(["bold"]);return o.jsx(ee,{title:"Toggle Button",description:"A group of buttons that can be toggled, supporting single or multiple selections.",livePreview:o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{weight:"600",children:"Single Selection"}),o.jsxs(au,{value:l,onChange:d=>r(d),type:"single",children:[o.jsx(So,{value:"left",children:"Left"}),o.jsx(So,{value:"center",children:"Center"}),o.jsx(So,{value:"right",children:"Right"})]})]}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{weight:"600",children:"Multiple Selection"}),o.jsxs(au,{value:c,onChange:d=>i(d),type:"multiple",children:[o.jsx(So,{value:"bold",children:"Bold"}),o.jsx(So,{value:"italic",children:"Italic"}),o.jsx(So,{value:"underline",children:"Underline"})]})]})]}),propControls:o.jsx(T,{color:"textSecondary",children:"This component's main props (`value`, `onChange`, `type`) are demonstrated in the preview."}),documentation:dC,fullSourceCode:pC})},hC=({variant:l,setVariant:r,isRound:c,setIsRound:i})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Variant Prop"}),o.jsx(Be,{value:l,onChange:r,options:[{label:"Primary",value:"primary"},{label:"Secondary",value:"secondary"},{label:"Accent",value:"accent"}]})]}),o.jsx(Ke,{label:"Is Round Prop",checked:c,onChange:d=>i(d.target.checked)})]}),fC=`# IconButton

A button variant for rendering only an icon. It's crucial to provide an \`aria-label\` for accessibility.

## Props

*   \`icon\` (React.ElementType, required): The icon component to render.
*   \`aria-label\` (string, required): A label for accessibility, as the button has no visible text.
*   \`isRound\` (boolean, optional): If true, the button will be circular.
*   All other \`Button\` props (except \`children\`) are supported.

## Usage

\`\`\`tsx
import { IconButton } from './src/components';
import { SettingsIcon } from './src/icons';

<IconButton
  icon={SettingsIcon}
  aria-label="Settings"
  onClick={() => alert('Settings clicked')}
/>

<IconButton
  icon={SettingsIcon}
  aria-label="Settings"
  isRound
/>
\`\`\``,gC=`import React from 'react';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon/Icon';
import { useStyles } from '../../core';

interface IconButtonProps extends Omit<ButtonProps, 'children'> {
    icon: React.ElementType;
    'aria-label': string;
    isRound?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, 'aria-label': ariaLabel, isRound, className = '', ...props }) => {
    const createStyle = useStyles('icon-button');
    
    const iconButtonClass = createStyle({
        padding: '0.5rem',
        borderRadius: isRound ? '50%' : undefined,
    });

    return (
        <Button className={\`\${iconButtonClass} \${className}\`} aria-label={ariaLabel} {...props}>
            <Icon as={icon} size="1.25em" />
        </Button>
    );
};`,xC=()=>{const[l,r]=b.useState("primary"),[c,i]=b.useState(!1);return o.jsx(ee,{title:"Icon Button",description:"A button for rendering a single icon.",livePreview:o.jsx(ir,{icon:hr,"aria-label":"Settings",variant:l,isRound:c}),propControls:o.jsx(hC,{variant:l,setVariant:r,isRound:c,setIsRound:i}),documentation:fC,fullSourceCode:gC})},bC=({isAttached:l,setIsAttached:r})=>o.jsx(Ke,{label:"Is Attached Prop",checked:l,onChange:c=>r(c.target.checked)}),yC=`# ButtonGroup

A layout component to group related buttons together.

## Props

*   \`isAttached\` (boolean, optional): If true, the buttons will be visually attached with no space or rounded corners between them.
*   All \`Stack\` props are supported.

## Usage

\`\`\`tsx
import { ButtonGroup, Button } from './src/components';

// Spaced group
<ButtonGroup>
  <Button>Save</Button>
  <Button>Cancel</Button>
</ButtonGroup>

// Attached group
<ButtonGroup isAttached>
  <Button>Bold</Button>
  <Button>Italic</Button>
  <Button>Underline</Button>
</ButtonGroup>
\`\`\``,vC=`import React from 'react';
import { Stack } from '../Stack/Stack';
import { useStyles } from '../../core';

interface ButtonGroupProps extends React.ComponentProps<typeof Stack> {
    isAttached?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ isAttached, className, children, ...props }) => {
    const createStyle = useStyles('button-group');
    
    const attachedClass = isAttached ? createStyle({
        '& > button:not(:first-child)': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },
        '& > button:not(:last-child)': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: 0,
        },
    }) : '';

    return (
        <Stack direction="row" gap={isAttached ? '0' : '0.5rem'} className={\`\${attachedClass} \${className}\`} {...props}>
            {children}
        </Stack>
    );
};`,CC=()=>{const[l,r]=b.useState(!1);return o.jsx(ee,{title:"Button Group",description:"A component to group related buttons together, either spaced or attached.",livePreview:o.jsxs(Su,{isAttached:l,children:[o.jsx(be,{variant:"secondary",children:"Copy"}),o.jsx(be,{variant:"secondary",children:"Paste"}),o.jsx(be,{variant:"secondary",children:"Cut"})]}),propControls:o.jsx(bC,{isAttached:l,setIsAttached:r}),documentation:yC,fullSourceCode:vC})},SC=({isInvalid:l,setIsInvalid:r})=>o.jsx(Ke,{label:"Is Invalid Prop",checked:l,onChange:c=>r(c.target.checked)}),jC=`# FormControl

A set of components that provides context to form inputs for building accessible and structured forms.

## Components

*   **FormControl**: The main wrapper that provides context (\`id\`, \`isInvalid\`, \`isDisabled\`) to its children.
*   **FormLabel**: A \`<label>\` that is automatically associated with the input via the context \`id\`.
*   **FormHelperText**: Text displayed below the input to provide additional guidance.
*   **FormErrorMessage**: An error message that is only rendered when \`isInvalid\` is true on \`FormControl\`.

## Usage

\`\`\`tsx
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, TextInput } from './src/components';

<FormControl isInvalid={isError}>
  <FormLabel>Email Address</FormLabel>
  <TextInput type="email" />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormErrorMessage>Your email is invalid.</FormErrorMessage>
</FormControl>
\`\`\``,TC=`import React, { createContext, useContext, useId } from 'react';
import { Box } from '../Box/Box';
import { useStyles, useTheme } from '../../core';
import { Text } from '../Text/Text';

interface FormControlContextType {
    id: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
}

const FormControlContext = createContext<FormControlContextType | null>(null);
const useFormControl = () => useContext(FormControlContext);

interface FormControlProps extends React.ComponentProps<typeof Box<'div'>> {
    isInvalid?: boolean;
    isDisabled?: boolean;
}

export const FormControl: React.FC<FormControlProps> = ({ isInvalid, isDisabled, ...props }) => {
    const id = useId();
    const context = { id, isInvalid, isDisabled };
    
    const createStyle = useStyles('form-control');
    const formControlClass = createStyle({
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
    });

    return (
        <FormControlContext.Provider value={context}>
            <Box className={formControlClass} {...props} />
        </FormControlContext.Provider>
    );
};

export const FormLabel: React.FC<React.ComponentProps<typeof Text<'label'>>> = (props) => {
    const context = useFormControl();
    const { theme } = useTheme();
    return (
        <Text 
            as="label"
            htmlFor={context?.id}
            size={theme.typography.fontSizes.sm}
            weight={theme.typography.fontWeights.medium}
            color={theme.colors.textSecondary}
            {...props}
        />
    );
};

export const FormHelperText: React.FC<React.ComponentProps<typeof Text<'p'>>> = (props) => {
    const context = useFormControl();
    const { theme } = useTheme();
    return (
        <Text 
            size={theme.typography.fontSizes.sm}
            color={theme.colors.textSecondary}
            id={context ? \`\${context.id}-helper-text\` : undefined}
            {...props}
        />
    );
};

export const FormErrorMessage: React.FC<React.ComponentProps<typeof Text<'p'>>> = (props) => {
    const context = useFormControl();
    if (!context?.isInvalid) return null;
    
    return (
        <Text
            color="#f87171" // red-400
            size="0.875rem"
            id={context ? \`\${context.id}-error-message\` : undefined}
            aria-live="polite"
            {...props}
        />
    );
};`,kC=()=>{const[l,r]=b.useState(!1);return o.jsx(ee,{title:"Form Control",description:"A group of components for building accessible and structured forms.",livePreview:o.jsxs(yg,{isInvalid:l,style:{width:"300px"},children:[o.jsx(vg,{children:"Email Address"}),o.jsx(re,{placeholder:"you@example.com"}),o.jsx(Cg,{children:"We'll never share your email."}),o.jsx(Sg,{children:"This email address is not valid."})]}),propControls:o.jsx(SC,{isInvalid:l,setIsInvalid:r}),documentation:jC,fullSourceCode:TC})},wC=({length:l,setLength:r})=>o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Length Prop"}),o.jsx(Xe,{value:l,onChange:r,min:3,max:8,showValue:!0})]}),AC=`# PinInput

A component for entering PINs or one-time codes. It provides a set of styled inputs that automatically handle focus shifting, backspace, and pasting.

## Props

*   \`length\` (number, optional): The number of characters in the PIN. Defaults to \`4\`.
*   \`value\` (string, optional): The current value of the input.
*   \`onChange\` (function, optional): A callback function triggered when the value changes.

## Usage

\`\`\`tsx
import { PinInput } from './src/components';
import { useState } from 'react';

const [pin, setPin] = useState('');

<PinInput length={6} value={pin} onChange={setPin} />
\`\`\``,RC=`import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { useStyles, useTheme } from '../../core';
import { Flex } from '../Flex/Flex';

interface PinInputProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
}

export const PinInput: React.FC<PinInputProps> = ({ length = 4, value = '', onChange }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('pin-input');
    const [localValue, setLocalValue] = useState(value);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => { /* ... */ };
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => { /* ... */ };
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => { /* ... */ };

    const inputClass = createStyle({ /* ... styles ... */ });

    return (
        <Flex gap="0.5rem">
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    ref={el => { inputRefs.current[index] = el; }}
                    className={inputClass}
                    type="text"
                    maxLength={1}
                    value={localValue[index] || ''}
                    onChange={e => handleChange(e, index)}
                    onKeyDown={e => handleKeyDown(e, index)}
                    onPaste={index === 0 ? handlePaste : undefined}
                />
            ))}
        </Flex>
    );
};`,NC=()=>{const[l,r]=b.useState(""),[c,i]=b.useState(6);return o.jsx(ee,{title:"Pin Input",description:"For entering PINs or one-time codes.",livePreview:o.jsxs(D,{gap:"1rem",align:"center",children:[o.jsx(Hg,{length:c,value:l,onChange:r}),o.jsxs(T,{size:"sm",children:["Current Value: ",l]})]}),propControls:o.jsx(wC,{length:c,setLength:i}),documentation:AC,fullSourceCode:RC})},DC=({defaultValue:l,setDefaultValue:r})=>o.jsxs(D,{gap:"1rem",children:[o.jsx(re,{label:"DefaultValue Prop",value:l,onChange:c=>r(c.target.value)}),o.jsx(T,{size:"sm",children:"This control remounts the component with a new default value."})]}),zC=`# Editable

A component that provides an inline editing experience. It displays text that, when clicked, transforms into an input field.

## Props

*   \`defaultValue\` (string, required): The initial text value to display.
*   \`onSave\` (function, required): A callback function that is triggered when the user confirms their edit. It receives the new value as an argument.

## Usage

\`\`\`tsx
import { Editable } from './src/components';

<Editable 
  defaultValue="Click to edit me"
  onSave={(newValue) => console.log('Saved:', newValue)}
/>
\`\`\``,MC=`import React, { useState } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { TextInput } from '../TextInput/TextInput';
import { ButtonGroup, IconButton } from '..';
import { Flex } from '../Flex/Flex';
import { TimesIcon } from '../../icons';

const CheckIcon = () => <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;

interface EditableProps {
    defaultValue: string;
    onSave: (value: string) => void;
}

export const Editable: React.FC<EditableProps> = ({ defaultValue, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(defaultValue);

    const handleSave = () => {
        onSave(value);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setValue(defaultValue);
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <Flex align="center" gap="0.5rem">
                <TextInput
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSave();
                        if (e.key === 'Escape') handleCancel();
                    }}
                    autoFocus
                />
                <ButtonGroup isAttached>
                    <IconButton icon={CheckIcon} aria-label="Save" onClick={handleSave} />
                    <IconButton icon={TimesIcon} aria-label="Cancel" onClick={handleCancel} />
                </ButtonGroup>
            </Flex>
        );
    }

    return (
        <Text onClick={() => setIsEditing(true)} style={{ cursor: 'pointer', borderBottom: '1px dashed grey', padding: '0.5rem 0.75rem' }}>
            {value}
        </Text>
    );
};`,EC=()=>{const{addToast:l}=Ta(),[r,c]=b.useState("Project Alpha");return o.jsx(ee,{title:"Editable",description:"A component for inline editing. Click the text in the preview to edit it.",livePreview:o.jsx(gg,{defaultValue:r,onSave:i=>{l({title:"Saved!",description:`Name changed to "${i}"`,variant:"success"})}},r),propControls:o.jsx(DC,{defaultValue:r,setDefaultValue:c}),documentation:zC,fullSourceCode:MC})},LC=`# List

A set of components for displaying structured lists of items.

## Components

*   **List**: The main \`<ul>\` wrapper with styling for the container.
*   **ListItem**: A \`<li>\` element representing a single row in the list.
*   **ListItemBody**: A \`<div>\` wrapper for the main content area of a ListItem, useful for complex layouts.
*   **ListItemText**: A component for displaying primary and optional secondary text in a standard format.
*   **Divider**: A \`<hr>\` element for visually separating \`ListItem\` components.

## Usage

\`\`\`tsx
import { List, ListItem, ListItemText, Divider, Button } from './src/components';

<List>
  <ListItem>
    <ListItemText primary="Profile" secondary="Update your personal details" />
  </ListItem>
  <Divider />
  <ListItem>
    <ListItemText primary="Billing" />
    <Button variant="secondary">Manage</Button>
  </ListItem>
</List>
\`\`\``,BC=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Text } from '../Text/Text';

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
    children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('list');
    const listClass = createStyle({
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'grid',
        backgroundColor: 'rgba(28, 28, 28, 0.5)',
        backdropFilter: 'blur(8px)',
        borderRadius: '8px',
        border: \`1px solid \${theme.colors.border}\`,
        overflow: 'hidden',
    });
    return <ul className={\`\${listClass} \${className}\`} {...props}>{children}</ul>;
};

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('list-item');
    const itemClass = createStyle({
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: '1fr auto',
        gap: theme.spacing.md,
        padding: \`\${theme.spacing.sm} \${theme.spacing.md}\`,
        color: theme.colors.text,
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
        }
    });
    return <li className={\`\${itemClass} \${className}\`} {...props}>{children}</li>;
};

interface ListItemBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export const ListItemBody: React.FC<ListItemBodyProps> = ({ children, className, ...props }) => {
    const createStyle = useStyles('list-item-body');
    const bodyClass = createStyle({
        minWidth: 0,
    });
    return <div className={\`\${bodyClass} \${className}\`} {...props}>{children}</div>;
}

interface ListItemTextProps {
    primary: React.ReactNode;
    secondary?: React.ReactNode;
}
export const ListItemText: React.FC<ListItemTextProps> = ({ primary, secondary }) => {
    const { theme } = useTheme();
    return (
        <div>
            <Text weight="500">{primary}</Text>
            {secondary && <Text size="0.875rem" color={theme.colors.textSecondary}>{secondary}</Text>}
        </div>
    );
};`,$C=()=>o.jsx(ee,{title:"List",description:"A set of components for displaying structured lists of items with optional dividers and rich content.",livePreview:o.jsxs(Dl,{children:[o.jsx(eo,{children:o.jsx(jo,{primary:"Profile",secondary:"Update your personal details"})}),o.jsx(to,{}),o.jsx(eo,{children:o.jsx(jo,{primary:"Billing",secondary:"Manage your subscription"})}),o.jsx(to,{}),o.jsxs(eo,{children:[o.jsx(jo,{primary:"Log Out"}),o.jsx(be,{variant:"secondary",children:"Action"})]})]}),propControls:o.jsx(T,{color:"textSecondary",children:"This is a standard implementation of the List component. No props are available to configure in this demo."}),documentation:LC,fullSourceCode:BC}),IC=[{invoice:"INV-2024-001",status:"Paid",amount:"$250.00"},{invoice:"INV-2024-002",status:"Pending",amount:"$150.00"},{invoice:"INV-2024-003",status:"Overdue",amount:"$350.00"}],OC=`# Table

A set of components for displaying sets of data in rows and columns.

## Components

*   **Table**: The main \`<table>\` wrapper.
*   **TableHeader**: The \`<thead>\` element for column headers.
*   **TableBody**: The \`<tbody>\` element for data rows.
*   **TableRow**: The \`<tr>\` element for a single row.
*   **TableHead**: The \`<th>\` element for a header cell.
*   **TableCell**: The \`<td>\` element for a data cell.

## Usage

\`\`\`tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './src/components';

const data = [
    { id: 1, name: 'Product A', price: '$50' },
    { id: 2, name: 'Product B', price: '$75' },
];

<Table>
    <TableHeader>
        <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {data.map((item) => (
            <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
            </TableRow>
        ))}
    </TableBody>
</Table>
\`\`\``,HC=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = (props) => { /* ... */ };
export const TableHeader: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = (props) => <thead {...props} />;
export const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = (props) => <tbody {...props} />;
export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = (props) => { /* ... */ };
export const TableHead: React.FC<React.HTMLAttributes<HTMLTableCellElement>> = (props) => { /* ... */ };
export const TableCell: React.FC<React.HTMLAttributes<HTMLTableCellElement>> = (props) => { /* ... */ };`,UC=()=>o.jsx(ee,{title:"Table",description:"A component for displaying sets of data in rows and columns.",livePreview:o.jsxs($u,{children:[o.jsx(Iu,{children:o.jsxs(kl,{children:[o.jsx(ga,{children:"Invoice"}),o.jsx(ga,{children:"Status"}),o.jsx(ga,{children:"Amount"})]})}),o.jsx(Ou,{children:IC.map(l=>o.jsxs(kl,{children:[o.jsx(xa,{children:l.invoice}),o.jsx(xa,{children:o.jsx(br,{colorScheme:l.status==="Paid"?"success":l.status==="Pending"?"accent":"error",children:l.status})}),o.jsx(xa,{children:l.amount})]},l.invoice))})]}),propControls:o.jsx(T,{color:"textSecondary",children:"These are presentational table components. For a more feature-rich experience with sorting and filtering, see the `DataTable` component."}),documentation:OC,fullSourceCode:HC}),PC=[{id:1,name:"John Doe",email:"john.d@example.com",role:"Admin",status:"Active",createdAt:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane.s@example.com",role:"Member",status:"Active",createdAt:"2024-02-20"},{id:3,name:"Sam Wilson",email:"sam.w@example.com",role:"Member",status:"Pending",createdAt:"2024-03-01"},{id:4,name:"Alice Johnson",email:"alice.j@example.com",role:"Guest",status:"Inactive",createdAt:"2023-12-10"},{id:5,name:"Michael Brown",email:"michael.b@example.com",role:"Member",status:"Active",createdAt:"2024-01-25"},{id:6,name:"Emily Davis",email:"emily.d@example.com",role:"Admin",status:"Active",createdAt:"2023-11-30"},{id:7,name:"Chris Green",email:"chris.g@example.com",role:"Member",status:"Pending",createdAt:"2024-04-05"},{id:8,name:"Patricia White",email:"patricia.w@example.com",role:"Guest",status:"Inactive",createdAt:"2024-03-15"},{id:9,name:"Robert Harris",email:"robert.h@example.com",role:"Member",status:"Active",createdAt:"2024-02-10"},{id:10,name:"Linda Martinez",email:"linda.m@example.com",role:"Member",status:"Active",createdAt:"2023-10-05"},{id:11,name:"James Taylor",email:"james.t@example.com",role:"Guest",status:"Pending",createdAt:"2024-05-01"},{id:12,name:"Mary Anderson",email:"mary.a@example.com",role:"Admin",status:"Inactive",createdAt:"2024-01-01"},{id:13,name:"David Thomas",email:"david.t@example.com",role:"Member",status:"Active",createdAt:"2024-04-20"},{id:14,name:"Jennifer Garcia",email:"jennifer.g@example.com",role:"Member",status:"Active",createdAt:"2024-03-22"}],_C=()=>{const{addToast:l}=Ta(),r=[{accessorKey:"name",header:"Name"},{accessorKey:"email",header:"Email"},{accessorKey:"role",header:"Role"},{accessorKey:"status",header:"Status",cell:i=>{const d=i==="Active"?"success":i==="Pending"?"accent":"error";return o.jsx(br,{colorScheme:d,children:i})}},{accessorKey:"createdAt",header:"Created At"}],c=(i,d)=>o.jsxs(be,{variant:"accent",onClick:()=>{l({title:`Deleted ${i.length} user(s)`,description:i.map(p=>p.name).join(", "),variant:"error"}),d()},children:[o.jsx(Le,{as:mu,size:16}),o.jsx("span",{children:"Delete Selected"})]});return o.jsx(ht,{children:o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Data Table"}),o.jsx(T,{children:"A powerful table component with built-in pagination, sorting, filtering, selection, and contextual actions."}),o.jsx(ug,{data:PC,columns:r,pageSize:5,actions:c})]})})},GC=({size:l,setSize:r,fallback:c,setFallback:i,src:d,setSrc:p,groupMax:m,setGroupMax:f})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{gap:"0.5rem",children:[o.jsxs(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:["Avatar: Size (",l,"px)"]}),o.jsx(Xe,{value:l,onChange:r,min:20,max:80})]}),o.jsx(re,{label:"Avatar: Fallback",value:c,onChange:x=>i(x.target.value)}),o.jsx(re,{label:"Avatar: Src (URL)",value:d,onChange:x=>p(x.target.value),placeholder:"Enter image URL"}),o.jsxs(D,{gap:"0.5rem",children:[o.jsxs(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:["AvatarGroup: Max (",m,")"]}),o.jsx(Xe,{value:m,onChange:f,min:1,max:5})]})]}),VC=`# Avatar & AvatarGroup

Components for displaying user profile images or initials.

## Components

*   **Avatar**: Displays a single avatar image with a fallback to initials.
*   **AvatarGroup**: Displays a stacked collection of avatars, with an indicator for overflow.

## Props

### Avatar
*   \`src\` (string, optional): The URL of the image to display.
*   \`alt\` (string, optional): Alternative text for the image.
*   \`fallback\` (string, required): The initials or text to display if the image fails to load.
*   \`size\` (number, optional, default: 40): The width and height of the avatar in pixels.

### AvatarGroup
*   \`children\` (React.ReactNode): A series of \`Avatar\` components.
*   \`max\` (number, optional, default: 3): The maximum number of avatars to display before showing an overflow count.

## Usage

\`\`\`tsx
import { Avatar, AvatarGroup } from './src/components';

// Single Avatar
<Avatar src="path/to/image.jpg" fallback="JD" />

// Avatar Group
<AvatarGroup max={3}>
    <Avatar src="path/to/user1.jpg" fallback="U1" />
    <Avatar src="path/to/user2.jpg" fallback="U2" />
    <Avatar fallback="U3" />
    <Avatar fallback="U4" />
</AvatarGroup>
\`\`\``,qC=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    fallback: string;
    size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback, size = 40, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('avatar');

    const containerClass = createStyle({
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: theme.colors.border,
        color: theme.colors.textSecondary,
        fontWeight: '500',
        fontSize: \`\${size * 0.45}px\`,
        userSelect: 'none',
    });

    const imageClass = createStyle({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    });

    return (
        <div className={\`\${containerClass} \${className}\`} {...props}>
            {src ? (
                <img src={src} alt={alt} className={imageClass} />
            ) : (
                <span>{fallback}</span>
            )}
        </div>
    );
};


interface AvatarGroupProps {
    children: React.ReactNode;
    max?: number;
    className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, max = 3, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('avatar-group');
    const avatars = React.Children.toArray(children);
    const visibleAvatars = avatars.slice(0, max);
    const hiddenCount = avatars.length - max;

    const groupClass = createStyle({
        display: 'inline-flex',
        '& > *:not(:first-child)': {
            marginLeft: '-12px', // Overlap avatars
        },
         '& > *': {
            border: \`2px solid \${theme.colors.background}\`,
        }
    });
    
    const excessClass = createStyle({
        backgroundColor: theme.colors.secondary,
        color: theme.colors.text,
    });

    return (
        <div className={\`\${groupClass} \${className}\`}>
            {visibleAvatars}
            {hiddenCount > 0 && <Avatar fallback={\`+\${hiddenCount}\`} className={excessClass} />}
        </div>
    );
};`,YC=()=>{const[l,r]=b.useState(40),[c,i]=b.useState("ZW"),[d,p]=b.useState("https://i.pravatar.cc/150?u=a042581f4e29026704d"),[m,f]=b.useState(3);return o.jsx(ee,{title:"Avatar",description:"An image element with a fallback for representing a user. Includes an AvatarGroup for stacking.",livePreview:o.jsxs(D,{direction:"row",gap:"2rem",align:"center",children:[o.jsx(Tn,{size:l,fallback:c,src:d}),o.jsxs(Ff,{max:m,children:[o.jsx(Tn,{fallback:"A",src:"https://i.pravatar.cc/150?u=a042581f4e29026704d"}),o.jsx(Tn,{fallback:"B",src:"https://i.pravatar.cc/150?u=a042581f4e29026704e"}),o.jsx(Tn,{fallback:"C",src:"https://i.pravatar.cc/150?u=a042581f4e29026704f"}),o.jsx(Tn,{fallback:"D"}),o.jsx(Tn,{fallback:"E"})]})]}),propControls:o.jsx(GC,{size:l,setSize:r,fallback:c,setFallback:i,src:d,setSrc:p,groupMax:m,setGroupMax:f}),documentation:VC,fullSourceCode:qC})},FC=({title:l,setTitle:r,childrenText:c,setChildrenText:i,variant:d,setVariant:p})=>{const{theme:m}=_();return o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Title Prop",value:l,onChange:f=>r(f.target.value),placeholder:"Enter card title"}),o.jsxs(D,{gap:"4px",children:[o.jsx("label",{htmlFor:"card-children-input",children:o.jsx(T,{as:"span",size:m.typography.fontSizes.sm,weight:m.typography.fontWeights.medium,color:m.colors.textSecondary,children:"Children Prop (Text)"})}),o.jsx(Ml,{id:"card-children-input",value:c,onChange:f=>i(f.target.value),rows:3})]}),o.jsxs(D,{gap:"4px",children:[o.jsx(T,{as:"span",size:m.typography.fontSizes.sm,weight:m.typography.fontWeights.medium,color:m.colors.textSecondary,children:"Variant Prop"}),o.jsx(Be,{options:[{label:"Default",value:"default"},{label:"Glass",value:"glass"}],value:d,onChange:f=>p(f)})]})]})},XC=`# Card

A versatile container component that displays content in a distinct bordered box. It supports a default style and a \`glass\` variant for a blurred, transparent effect.

## Props

*   \`title\` (string, optional): The title to display at the top of the card.
*   \`children\` (React.ReactNode): The content to be rendered inside the card.
*   \`className\` (string, optional): Additional CSS class for custom styling.
*   \`variant\` (enum: 'default' | 'glass', optional, default: 'default'): The visual style of the card. 'glass' applies a blur effect.
*   \`onClick\` (function, optional): A callback function to execute when the card is clicked.

## Usage

\`\`\`tsx
<Card variant="glass" title="Glass Card">
  <p>Content with a blurred background effect.</p>
</Card>
\`\`\``,KC=`import React from 'react'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'

export interface CardProps {
    title?: string
    children: React.ReactNode
    className?: string
    variant?: 'default' | 'glass'
    onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void
    style?: React.CSSProperties
}

export const Card: React.FC<CardProps> = ({
    title,
    children,
    className = '',
    variant = 'default',
    onClick,
    style
}) => {
    const { theme } = useTheme()
    const createStyle = useStyles('card')

    const cardClass = createStyle({
        padding: theme.spacing.md,
        borderRadius: '6px',
        backgroundColor: theme.colors.backgroundSecondary,
        border: \`1px solid \${theme.colors.border}\`,
        height: '100%',
        transition: 'all 0.3s ease',
        cursor: onClick ? 'pointer' : 'default',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
        '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: 'rgba(255, 255, 255, 0.25)',
            boxShadow: \`0 8px 24px rgba(0, 0, 0, 0.5)\`,
        },
        '&:focus-visible': onClick ? {
            outline: \`2px solid \${theme.colors.primary}\`,
            outlineOffset: '2px',
        } : {},
    })

    const titleClass = title && createStyle({
        fontSize: theme.typography.fontSizes.base,
        fontWeight: String(theme.typography.fontWeights.semibold),
        marginBottom: theme.spacing.md,
        color: theme.colors.text
    })

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (onClick && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            onClick(event);
        }
    };

    const interactiveProps = onClick ? {
        role: 'button',
        tabIndex: 0,
        onKeyDown: handleKeyDown,
    } : {};

    return (
        <div 
            className={\`\${cardClass} \${className}\`} 
            style={style}
            onClick={onClick ? (e) => onClick(e) : undefined}
            {...interactiveProps}
        >
            {title && <h3 className={titleClass}>{title}</h3>}
            {children}
        </div>
    )
}`,QC=()=>{const[l,r]=b.useState("Configurable Card"),[c,i]=b.useState("This is the content of the card. You can edit it using the controls in the Props panel."),[d,p]=b.useState("default"),m=`<Card title="${l}" variant="${d}">
    <Text>${c}</Text>
</Card>`;return o.jsx(ee,{title:"Card",description:"A flexible content container. Use the controls to configure the card in real-time.",initialCode:m,propControls:o.jsx(FC,{title:l,setTitle:r,childrenText:c,setChildrenText:i,variant:d,setVariant:p}),documentation:XC,fullSourceCode:KC})},ZC=({defaultValue:l,setDefaultValue:r})=>o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"DefaultValue Prop"}),o.jsx(T,{size:"sm",children:"This control remounts the component with a new default value to see the effect."}),o.jsx(Be,{value:l||"none",onChange:c=>r(c==="none"?"":c),options:[{label:"Item 1",value:"item-1"},{label:"Item 2",value:"item-2"},{label:"None",value:"none"}]})]}),WC=`# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

## Components

*   **Accordion**: The main wrapper that manages the state.
*   **AccordionItem**: A container for a single accordion section.
*   **AccordionTrigger**: The clickable header that toggles the content's visibility.
*   **AccordionContent**: The collapsible content panel.

## Props

### Accordion
*   \`defaultValue\` (string, optional): The \`value\` of the \`AccordionItem\` that should be open by default.
*   \`children\` (React.ReactNode): Should be a series of \`AccordionItem\` components.

### AccordionItem
*   \`value\` (string, required): A unique identifier for the item.
*   \`children\` (React.ReactNode): Should contain an \`AccordionTrigger\` and an \`AccordionContent\`.

## Usage

\`\`\`tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './src/components';

<Accordion defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern for accordions.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with a modern, dark-theme-friendly style.
    </AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\``,JC=`import React, { useState, createContext, useContext } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface AccordionContextType {
    activeItem: string | null;
    setActiveItem: (id: string | null) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error('Accordion components must be used within an Accordion provider.');
    }
    return context;
};

export const Accordion: React.FC<{ children: React.ReactNode; defaultValue?: string; className?: string }> = ({ children, defaultValue, className }) => {
    const [activeItem, setActiveItem] = useState<string | null>(defaultValue || null);
    return (
        <AccordionContext.Provider value={{ activeItem, setActiveItem }}>
            <div className={className}>{children}</div>
        </AccordionContext.Provider>
    );
};

export const AccordionItem: React.FC<{ children: React.ReactNode; value: string; className?: string }> = ({ children, value, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('accordion-item');
    const itemClass = createStyle({
        borderBottom: \`1px solid \${theme.colors.border}\`,
        '&:last-child': {
            borderBottom: 'none',
        },
    });

    return <div className={\`\${itemClass} \${className}\`}>{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { value }) : child)}</div>;
};

export const AccordionTrigger: React.FC<{ children: React.ReactNode; value?: string; className?: string }> = ({ children, value, className }) => {
    const { activeItem, setActiveItem } = useAccordion();
    const { theme } = useTheme();
    const createStyle = useStyles('accordion-trigger');
    const isOpen = activeItem === value;

    const triggerClass = createStyle({
        width: '100%',
        padding: \`\${theme.spacing.md} 0\`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        color: theme.colors.text,
        cursor: 'pointer',
        fontSize: '1rem',
        textAlign: 'left',
        '&::after': {
            content: '"▼"',
            fontSize: '10px',
            color: theme.colors.textSecondary,
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'none',
        }
    });

    return (
        <button
            className={\`\${triggerClass} \${className}\`}
            onClick={() => setActiveItem(isOpen ? null : value!)}
            aria-expanded={isOpen}
            aria-controls={\`accordion-content-\${value}\`}
        >
            {children}
        </button>
    );
};

export const AccordionContent: React.FC<{ children: React.ReactNode; value?: string; className?: string }> = ({ children, value, className }) => {
    const { activeItem } = useAccordion();
    const { theme } = useTheme();
    const createStyle = useStyles('accordion-content');
    const isOpen = activeItem === value;
    
    const contentClass = createStyle({
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, padding 0.3s ease',
        maxHeight: isOpen ? '500px' : '0',
    });

    const innerClass = createStyle({
         paddingBottom: isOpen ? theme.spacing.md : '0',
         color: theme.colors.textSecondary,
    });

    return (
        <div id={\`accordion-content-\${value}\`} className={\`\${contentClass} \${className}\`} aria-hidden={!isOpen}>
            <div className={innerClass}>{children}</div>
        </div>
    );
};`,eS=()=>{const[l,r]=b.useState("item-1");return o.jsx(ee,{title:"Accordion",description:"A vertically stacked set of interactive headings that each reveal a section of content.",livePreview:o.jsxs(mr,{defaultValue:l,children:[o.jsxs(ba,{value:"item-1",children:[o.jsx(ya,{children:"Is it accessible?"}),o.jsx(va,{children:"Yes. It adheres to the WAI-ARIA design pattern for accordions."})]}),o.jsxs(ba,{value:"item-2",children:[o.jsx(ya,{children:"Is it styled?"}),o.jsx(va,{children:"Yes. It comes with a modern, dark-theme-friendly style that fits the library's aesthetic."})]})]},l),propControls:o.jsx(ZC,{defaultValue:l,setDefaultValue:r}),documentation:WC,fullSourceCode:JC})},sf=[{id:"root",label:"Project Root",icon:ha,children:[{id:"src",label:"src",icon:ha,children:[{id:"components",label:"components",icon:ha},{id:"hooks",label:"hooks",icon:ha}]},{id:"public",label:"public",icon:ha,children:[{id:"index.html",label:"index.html",icon:ar}]},{id:"package.json",label:"package.json",icon:ar}]}],tS=l=>{const{node:r,isExpanded:c,isExpandable:i,isSelected:d,level:p,getTreeItemProps:m,getToggleProps:f}=l,{theme:x}=_(),g=`transition-transform ${c?"rotate-90":"rotate-0"}`;return o.jsxs("div",{...m({className:`flex items-center p-1 rounded-md transition-colors ${d?"bg-blue-500/20 text-white":"text-gray-400 hover:bg-white/5 hover:text-white"}`,style:{paddingLeft:`calc(${p} * 1.5rem)`},tabIndex:-1}),children:[o.jsx("div",{...f({className:"w-5 h-5 flex-shrink-0 flex items-center justify-center"}),children:i&&o.jsx(Le,{as:xr,size:16,className:g})}),r.icon&&o.jsx(Le,{as:r.icon,size:16,className:"mr-2 flex-shrink-0"}),o.jsx("span",{className:"truncate",children:r.label})]})},nS=()=>{const l=b.useRef(null),r=()=>{l.current?.focusItem("index.html")};return o.jsx(ht,{children:o.jsxs(D,{gap:"1.5rem",children:[o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Tree View"}),o.jsx(T,{children:"A component for displaying hierarchical data. Now supports custom item rendering via the `item` prop and `useTreeItem` hook, plus single/multi-selection and programmatic focus."}),o.jsx(T,{weight:"600",children:"Custom Tree Item, Multi-Selection & Programmatic Focus"}),o.jsx(T,{size:"sm",children:"This example uses a custom component to render each item in a file-explorer style. Use Ctrl/Cmd-click to select multiple items."}),o.jsx(D,{direction:"row",gap:"1rem",children:o.jsx(be,{onClick:r,children:"Focus 'index.html'"})}),o.jsx(gt,{style:{padding:"1rem"},children:o.jsx(pr,{ref:l,data:sf,item:tS,groupTransition:eu,selectionMode:"multiple",defaultExpandedIds:["root","src","public"]})}),o.jsx(T,{weight:"600",style:{marginTop:"1rem"},children:"Custom Icons & Single Selection"}),o.jsx(T,{size:"sm",children:"This example uses the default item renderer but provides custom icons for expand, collapse, and end nodes. It also uses the `Collapse` component for animations."}),o.jsx(gt,{style:{padding:"1rem"},children:o.jsx(pr,{data:sf,expandIcon:o.jsx(Le,{as:Uf}),collapseIcon:o.jsx(Le,{as:Pf}),defaultEndIcon:o.jsx(Le,{as:ar,size:16}),groupTransition:eu})})]})})},oS=[{id:"paper",label:"Paper",icon:Lf,children:[{id:"header-container",label:"Header container",icon:jl,children:[{id:"avatar",label:"Avatar",icon:cu,children:[{id:"text-content-1",label:"Text Content",icon:fa},{id:"header-title",label:"Header Title",icon:fa},{id:"header-caption",label:"Header Caption",icon:fa}]},{id:"action-button-1",label:"Action Button",icon:Mf},{id:"image",label:"Image",icon:fr}]},{id:"content",label:"Content",icon:jl,children:[{id:"text-content-2",label:"Text Content",icon:fa}]},{id:"action-bar",label:"Action Bar",icon:jl,children:[{id:"icon-button-1",label:"Icon Button",icon:or},{id:"icon-button-2",label:"Icon Button",icon:or}]}]}],aS=`# XNodeTree

A component for displaying hierarchical data in a tree-like structure, such as a file system, scene graph, or component tree. Users can expand and collapse nodes to navigate the hierarchy and toggle a "locked" state for each item.

## Props

*   \`data\` (array of \`XNodeTreeData\`, required): An array of root nodes for the tree.
*   \`initialExpandedIds\` (string[], optional): An array of node IDs that should be expanded by default.
*   \`initialLockedIds\` (string[], optional): An array of node IDs that should be locked by default.

## Data Structure

\`\`\`ts
interface XNodeTreeData {
    id: string;
    label: string;
    icon?: React.ElementType; // An icon component to display
    children?: XNodeTreeData[];
}
\`\`\``,lS=`import React, { useState } from 'react';
import { useStyles, useTheme } from '../../core';
import { Icon } from '../Icon/Icon';
import { ChevronRightIcon, LockIcon } from '../../icons';
import { LockOpenIcon } from '../../icons/LockOpenIcon';

export interface XNodeTreeData { /*...*/ }

interface XNodeTreeProps {
    data: XNodeTreeData[];
    initialExpandedIds?: string[];
    initialLockedIds?: string[];
}

export const XNodeTree: React.FC<XNodeTreeProps> = (props) => {
    /* ... internal state and logic ... */

    const renderNode = (node: XNodeTreeData, level: number) => {
        /* ... recursive rendering logic ... */
    };

    return <div className={treeClass}>{data.map(node => renderNode(node, 0))}</div>;
};`,sS=()=>o.jsx(ee,{title:"XNodeTree",description:"A component for displaying hierarchical data, like a scene graph or component tree.",livePreview:o.jsx(gt,{style:{padding:"0.5rem",minWidth:"300px"},children:o.jsx(bx,{data:oS,initialExpandedIds:["paper","header-container","avatar","content","action-bar"]})}),propControls:o.jsx(T,{color:"textSecondary",children:"The main props (`data`, `initialExpandedIds`) are complex arrays. The preview demonstrates the component's interactive features."}),documentation:aS,fullSourceCode:lS}),rS=`# Timeline

A component for displaying a list of events in chronological order.

## Components

*   **Timeline**: The main container for the timeline.
*   **TimelineItem**: A wrapper for a single event in the timeline.
*   **TimelineConnector**: The vertical line that connects the timeline dots.
*   **TimelineDot**: The circular marker for an event. Can contain an icon or text.
*   **TimelineContent**: A container for the event's details (title, description, etc.).

## Props

### TimelineItem
*   \`isLast\` (boolean, optional): If true, removes the padding at the bottom of the item to properly terminate the timeline.

## Usage

\`\`\`tsx
import { Timeline, TimelineItem, TimelineConnector, TimelineDot, TimelineContent } from './src/components';

<Timeline>
    <TimelineItem>
        <TimelineConnector />
        <TimelineDot>🚀</TimelineDot>
        <TimelineContent>
            <p><strong>Launch</strong></p>
            <p>Project kickoff and team alignment.</p>
        </TimelineContent>
    </TimelineItem>
    <TimelineItem isLast>
        <TimelineDot>🎉</TimelineDot>
        <TimelineContent>
            <p><strong>Deployment</strong></p>
            <p>First version deployed to production.</p>
        </TimelineContent>
    </TimelineItem>
</Timeline>
\`\`\``,iS=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Timeline: React.FC<{ children: React.ReactNode, className?: string }> = (props) => { /*...*/ };
export const TimelineItem: React.FC<{ children: React.ReactNode, isLast?: boolean }> = (props) => { /*...*/ };
export const TimelineConnector: React.FC = () => { /*...*/ };
export const TimelineDot: React.FC<{ children?: React.ReactNode, className?: string }> = (props) => { /*...*/ };
export const TimelineContent: React.FC<{ children: React.ReactNode, className?: string }> = (props) => { /*...*/ };
`,cS=()=>o.jsx(ee,{title:"Timeline",description:"Displays a list of events in chronological order.",livePreview:o.jsxs(ox,{children:[o.jsxs(Js,{children:[o.jsx(ou,{}),o.jsx(er,{children:"🚀"}),o.jsxs(tr,{children:[o.jsx(T,{weight:"600",children:"Launch"}),o.jsx(T,{size:"14px",color:"textSecondary",children:"Project kickoff and team alignment."})]})]}),o.jsxs(Js,{children:[o.jsx(ou,{}),o.jsx(er,{children:"💻"}),o.jsxs(tr,{children:[o.jsx(T,{weight:"600",children:"Development"}),o.jsx(T,{size:"14px",color:"textSecondary",children:"Component library development in progress."})]})]}),o.jsxs(Js,{isLast:!0,children:[o.jsx(er,{children:"🎉"}),o.jsxs(tr,{children:[o.jsx(T,{weight:"600",children:"Deployment"}),o.jsx(T,{size:"14px",color:"textSecondary",children:"First version deployed to production."})]})]})]}),propControls:o.jsx(T,{color:"textSecondary",children:"This is a presentational component with no configurable props."}),documentation:rS,fullSourceCode:iS}),uS=({src:l,setSrc:r,fit:c,setFit:i,radius:d,setRadius:p})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Src Prop (URL)",value:l,onChange:m=>r(m.target.value),placeholder:"Enter image URL"}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Fit Prop"}),o.jsx(Be,{value:c,onChange:i,options:[{label:"Cover",value:"cover"},{label:"Contain",value:"contain"},{label:"Fill",value:"fill"}]})]}),o.jsx(re,{label:"Radius Prop (e.g., 8px, 50%)",value:d,onChange:m=>p(m.target.value)})]}),dS='# Image\n\nA component for displaying images with support for loading skeletons and fallback content.\n\n## Props\n\n*   `fallbackSrc` (string, optional): A fallback image URL to use if the primary `src` fails to load.\n*   `fallback` (React.ReactNode, optional): A React node to display if the image fails to load and no `fallbackSrc` is provided.\n*   `fit` (string, optional): The `object-fit` CSS property. Defaults to `cover`.\n*   `radius` (string, optional): The `border-radius` of the image. Defaults to `8px`.\n*   All other standard `<img>` attributes are supported.\n\n## Usage\n\n```tsx\nimport { Image, Text } from \'./src/components\';\n\n<Image \n  src="https://example.com/image.jpg"\n  alt="An example image"\n  fallback={<Text>Image not available</Text>}\n/>\n```',pS=`import React, { useState } from 'react';
import { Box } from '../Box/Box';
import { Center } from '../Center/Center';
import { Skeleton } from '../Skeleton/Skeleton';
import { useStyles, useTheme } from '../../core';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
    fallback?: React.ReactNode;
    fit?: React.CSSProperties['objectFit'];
    radius?: string;
}

export const Image: React.FC<ImageProps> = ({ src, fallbackSrc, fallback, fit = 'cover', radius = '8px', className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('image');
    const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

    const handleLoad = () => setStatus('loaded');
    const handleError = () => setStatus('error');

    const imageClass = createStyle({
        width: '100%',
        height: '100%',
        objectFit: fit,
        borderRadius: radius,
    });
    
    const finalSrc = status === 'error' && fallbackSrc ? fallbackSrc : src;

    return (
        <Box style={{ position: 'relative', width: '100%', height: '100%' }}>
            {status === 'loading' && <Skeleton variant="rect" width="100%" height="100%" style={{ position: 'absolute', borderRadius: radius }} />}
            
            <img
                src={finalSrc}
                onLoad={handleLoad}
                onError={handleError}
                className={\`\${imageClass} \${className}\`}
                style={{ opacity: status === 'loading' ? 0 : 1 }}
                {...props}
            />
            
            {status === 'error' && !fallbackSrc && fallback && (
                <Center style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: theme.colors.border, borderRadius: radius }}>
                    {fallback}
                </Center>
            )}
        </Box>
    );
};`,mS=()=>{const[l,r]=b.useState("https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400"),[c,i]=b.useState("cover"),[d,p]=b.useState("8px"),m=l+c+d;return o.jsx(ee,{title:"Image",description:"A component for displaying images with loading states and fallbacks.",livePreview:o.jsx("div",{style:{width:"200px",height:"200px"},children:o.jsx(Ng,{src:l,alt:"Configurable image",fit:c,radius:d,fallback:o.jsx(Le,{as:fr,size:48})},m)}),propControls:o.jsx(uS,{src:l,setSrc:r,fit:c,setFit:i,radius:d,setRadius:p}),documentation:dS,fullSourceCode:pS})},hS=({title:l,setTitle:r,childrenText:c,setChildrenText:i,variant:d,setVariant:p})=>{const{theme:m}=_();return o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Title Prop",value:l,onChange:f=>r(f.target.value)}),o.jsxs(D,{gap:"4px",children:[o.jsx(T,{as:"label",htmlFor:"alert-children-input",size:m.typography.fontSizes.sm,weight:m.typography.fontWeights.medium,color:m.colors.textSecondary,children:"Children Prop (Text)"}),o.jsx(Ml,{id:"alert-children-input",value:c,onChange:f=>i(f.target.value),rows:3})]}),o.jsxs(D,{gap:"4px",children:[o.jsx(T,{as:"label",size:m.typography.fontSizes.sm,weight:m.typography.fontWeights.medium,color:m.colors.textSecondary,children:"Variant Prop"}),o.jsx(Be,{options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Error",value:"error"}],value:d,onChange:f=>p(f)})]})]})},fS=`# Alert

A component to display contextual feedback messages for user actions.

## Props

*   \`title\` (string, required): The main title of the alert.
*   \`children\` (React.ReactNode, optional): Additional description text for the alert.
*   \`variant\` (enum: 'info' | 'warning' | 'error' | 'success', optional, default: 'info'): The style and color scheme of the alert.
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

\`\`\`tsx
import { Alert } from './src/components';

<Alert title="Success!" variant="success">
  Your profile has been updated.
</Alert>
\`\`\``,gS=`import React from 'react';
import { Text } from '../Text/Text';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useStyles } from '../../core/hooks/useStyles';

interface AlertProps {
    title: string;
    children?: React.ReactNode;
    variant?: 'info' | 'warning' | 'error' | 'success';
    className?: string;
}

const icons = {
    info: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>\`,
    warning: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>\`,
    error: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>\`,
    success: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>\`
};

export const Alert: React.FC<AlertProps> = ({ title, children, variant = 'info', className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('alert');
    const iconHtml = { __html: icons[variant] };

    const variantStyles = {
        info: { backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: 'rgba(59, 130, 246, 0.5)', color: '#93c5fd' },
        warning: { backgroundColor: 'rgba(245, 158, 11, 0.2)', borderColor: 'rgba(245, 158, 11, 0.5)', color: '#fcd34d' },
        error: { backgroundColor: 'rgba(239, 68, 68, 0.2)', borderColor: 'rgba(239, 68, 68, 0.5)', color: '#fca5a5' },
        success: { backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.5)', color: '#6ee7b7' },
    };

    const containerClass = createStyle({
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'start',
        gap: theme.spacing.md,
        borderRadius: '8px',
        border: '1px solid',
        padding: theme.spacing.md,
        ...variantStyles[variant],
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(12px)',
        },
    });

    return (
        <div role="alert" className={\`\${containerClass} \${className}\`}>
            <span aria-hidden="true" style={{ flexShrink: 0, width: '20px', height: '20px' }} dangerouslySetInnerHTML={iconHtml}></span>
            <div>
                <Text weight="600" style={{ marginBottom: '0.25rem' }}>{title}</Text>
                {children && <Text size="0.875rem" color="inherit" style={{ opacity: 0.8 }}>{children}</Text>}
            </div>
        </div>
    );
};`,xS=()=>{const[l,r]=b.useState("Info"),[c,i]=b.useState("This is an informational message."),[d,p]=b.useState("info"),m=`<Alert title="${l}" variant="${d}">${c}</Alert>`;return o.jsx(ee,{title:"Alert",description:"Provides contextual feedback messages for typical user actions, with variants for different severity levels.",initialCode:m,propControls:o.jsx(hS,{title:l,setTitle:r,childrenText:c,setChildrenText:i,variant:d,setVariant:p}),documentation:fS,fullSourceCode:gS})},bS=()=>{const{addToast:l}=Ta();return o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{children:"Use the buttons below to trigger toasts with different variants. They will appear at the top-right of the screen."}),o.jsxs(D,{direction:"row",gap:"1rem",wrap:!0,children:[o.jsx(be,{onClick:()=>l({title:"Event has been created.",description:"Anyone with the link can now view it."}),children:"Show Info"}),o.jsx(be,{onClick:()=>l({title:"Success!",description:"Your profile was updated.",variant:"success"}),children:"Show Success"}),o.jsx(be,{onClick:()=>l({title:"Warning",description:"Please check your connection.",variant:"warning"}),children:"Show Warning"}),o.jsx(be,{onClick:()=>l({title:"Error",description:"Failed to save changes.",variant:"error"}),children:"Show Error"})]})]})},yS=`# Toast Notification System

A system for dispatching ephemeral, non-intrusive notifications that appear at the corner of the screen.

## Components & Hooks

*   **ToastProvider**: A context provider that manages the state and rendering of all toasts. It should wrap your entire application.
*   **useToast**: A hook that provides access to the \`addToast\` function.

## Usage

1.  **Wrap your app in \`ToastProvider\`:**
    \`\`\`tsx
    import { ToastProvider } from './src/components';
    const App = () => (
        <ToastProvider>
            {/* ... Your app ... */}
        </ToastProvider>
    );
    \`\`\`

2.  **Use the \`useToast\` hook:**
    \`\`\`tsx
    import { useToast, Button } from './src/components';
    const MyComponent = () => {
        const { addToast } = useToast();
        return <Button onClick={() => addToast({ title: 'Hello!' })}>Show</Button>;
    };
    \`\`\``,vS=`/* This file shows the Toast component. The provider and hook are also part of the system. */
import React, { useEffect } from 'react';
import { ToastData } from './useToast';

interface ToastProps {
    toast: ToastData;
    onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onDismiss }) => {
    /* ... internal logic for animations and dismissal ... */

    return (
        <div role="alert" aria-live="assertive">
            <div>
                <IconComponent />
            </div>
            <div>
                <Text weight="600">{toast.title}</Text>
                {toast.description && <Text size="14px">{toast.description}</Text>}
            </div>
        </div>
    );
};`,CS=()=>o.jsx(ee,{title:"Toast",description:"A system for dispatching ephemeral, non-intrusive notifications.",livePreview:o.jsx(T,{color:"textSecondary",children:"Use the 'Props' tab to trigger toasts."}),propControls:o.jsx(bS,{}),documentation:yS,fullSourceCode:vS}),SS=({size:l,setSize:r})=>o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Size Prop"}),o.jsx(Xe,{value:l,onChange:r,min:12,max:48,showValue:!0})]}),jS=`# Spinner

A simple, circular loading indicator that uses a spinning animation. It is an alternative to \`CircularProgress\` for when a simpler visual is needed.

## Props

*   \`size\` (number, optional, default: 24): The width and height of the spinner in pixels.
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

\`\`\`tsx
import { Spinner } from './src/components';

<Spinner size={32} />
\`\`\``,TS=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface SpinnerProps {
    size?: number;
    className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 24, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('spinner');

    const spinnerClass = createStyle({
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        border: '2px solid transparent',
        borderTopColor: theme.colors.primary,
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
        '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
        },
    });

    return <div className={\`\${spinnerClass} \${className}\`} role="status" aria-label="Loading"></div>;
};`,kS=()=>{const[l,r]=b.useState(24);return o.jsx(ee,{title:"Spinner",description:"A simple loading indicator.",livePreview:o.jsx(zl,{size:l}),propControls:o.jsx(SS,{size:l,setSize:r}),documentation:jS,fullSourceCode:TS})},wS=({value:l,setValue:r,isIndeterminate:c,setIsIndeterminate:i})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(Ke,{label:"Indeterminate",checked:c,onChange:d=>i(d.target.checked)}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Value Prop"}),o.jsx(Xe,{value:l,onChange:r,min:0,max:100,disabled:c,showValue:!0})]})]}),AS=`# Progress Indicators

Components to indicate loading or the progress of an operation.

## CircularProgress

A circular "spinner" style progress indicator.

### Props
*   \`value\` (number, optional): A value from 0 to 100 to show determinate progress. If omitted, the indicator will be indeterminate.
*   \`size\` (number, optional, default: 48): The width and height of the component in pixels.
*   \`strokeWidth\` (number, optional, default: 4): The thickness of the progress ring.

### Usage
\`\`\`tsx
import { CircularProgress } from './src/components';

// Indeterminate
<CircularProgress />

// Determinate
<CircularProgress value={75} />
\`\`\`

---

## LinearProgress

A horizontal bar style progress indicator.

### Props
*   \`value\` (number, optional): A value from 0 to 100 to show determinate progress. If omitted, the indicator will be indeterminate.
*   \`height\` (string, optional, default: '4px'): The thickness of the progress bar.

### Usage
\`\`\`tsx
import { LinearProgress } from './src/components';

// Indeterminate
<LinearProgress />

// Determinate
<LinearProgress value={50} />
\`\`\``,RS=`/* Showing CircularProgress source. LinearProgress is similar. */
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface CircularProgressProps {
    value?: number; // 0 to 100
    size?: number;
    strokeWidth?: number;
    className?: string;
    'aria-label'?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
    value,
    size = 48,
    strokeWidth = 4,
    className = '',
    'aria-label': ariaLabel = 'Loading progress'
}) => {
    const { theme } = useTheme();
    const createStyle = useStyles('circular-progress');
    const isIndeterminate = value === undefined;

    /* ... internal logic and styles ... */

    return (
        <div className={\`\${containerClass} \${className}\`} role="progressbar" /* ...aria props... */>
            <svg>
                {/* ... circle elements ... */}
            </svg>
        </div>
    );
};`,NS=()=>{const[l,r]=b.useState(60),[c,i]=b.useState(!1);return o.jsx(ee,{title:"Progress",description:"Components to indicate loading or the progress of an operation, available in circular and linear styles.",livePreview:o.jsxs(D,{gap:"1.5rem",style:{width:"100%"},children:[o.jsxs(D,{gap:"1rem",align:"center",children:[o.jsx(T,{weight:"600",children:"Linear"}),o.jsx(Pg,{value:c?void 0:l})]}),o.jsxs(D,{gap:"1rem",direction:"row",align:"center",justify:"center",children:[o.jsx(T,{weight:"600",children:"Circular"}),o.jsx(Ug,{value:c?void 0:l})]})]}),propControls:o.jsx(wS,{value:l,setValue:r,isIndeterminate:c,setIsIndeterminate:i}),documentation:AS,fullSourceCode:RS})},DS=({variant:l,setVariant:r,width:c,setWidth:i,height:d,setHeight:p})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Variant Prop"}),o.jsx(Be,{value:l,onChange:r,options:[{label:"Text",value:"text"},{label:"Rect",value:"rect"},{label:"Circle",value:"circle"}]})]}),o.jsx(re,{label:"Width Prop",value:c,onChange:m=>i(m.target.value)}),o.jsx(re,{label:"Height Prop",value:d,onChange:m=>p(m.target.value)})]}),zS=`# Skeleton

A placeholder component used to indicate that content is loading. It shows a shimmering shape that mimics the final content's structure, improving perceived performance.

## Props

*   \`width\` (string, optional, default: '100%'): The width of the skeleton shape.
*   \`height\` (string, optional, default: '1rem'): The height of the skeleton shape.
*   \`variant\` (enum: 'text' | 'rect' | 'circle', optional, default: 'text'): The shape of the skeleton placeholder.
*   All other standard \`<div>\` attributes are supported.

## Usage

\`\`\`tsx
import { Skeleton, Stack } from './src/components';

<Stack gap="0.5rem">
    <Skeleton width="80%" height="1.2rem" />
    <Skeleton variant="circle" width="40px" height="40px" />
    <Skeleton variant="rect" height="100px" />
</Stack>
\`\`\``,MS=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string;
    height?: string;
    variant?: 'text' | 'rect' | 'circle';
}

export const Skeleton: React.FC<SkeletonProps> = ({
    width = '100%',
    height = '1rem',
    variant = 'text',
    className = '',
    style,
    ...props
}) => {
    const { theme } = useTheme();
    const createStyle = useStyles('skeleton');

    const animationClass = createStyle({
        '@keyframes shimmer': {
            '0%': { backgroundPosition: '-1000px 0' },
            '100%': { backgroundPosition: '1000px 0' },
        },
        animation: 'shimmer 2s infinite linear',
        backgroundImage: \`linear-gradient(90deg, \${theme.colors.border} 25%, rgba(255,255,255,0.1) 50%, \${theme.colors.border} 75%)\`,
        backgroundSize: '2000px 100%',
    });

    const baseClass = createStyle({
        backgroundColor: theme.colors.border,
        width,
        height,
        borderRadius: variant === 'circle' ? '50%' : (variant === 'text' ? '4px' : '8px'),
    });

    return (
        <div
            className={\`\${baseClass} \${animationClass} \${className}\`}
            style={style}
            {...props}
        />
    );
};`,ES=()=>{const[l,r]=b.useState("text"),[c,i]=b.useState("80%"),[d,p]=b.useState("1rem");return o.jsx(ee,{title:"Skeleton",description:"A placeholder component to indicate that content is loading, improving perceived performance.",livePreview:o.jsx(zu,{variant:l,width:c,height:d}),propControls:o.jsx(DS,{variant:l,setVariant:r,width:c,setWidth:i,height:d,setHeight:p}),documentation:zS,fullSourceCode:MS})},LS=({title:l,setTitle:r,setIsOpen:c})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Title Prop",value:l,onChange:i=>r(i.target.value)}),o.jsx(be,{onClick:()=>c(!0),children:"Open Modal"})]}),BS=`# Modal

A dialog window that appears on top of the main content, disabling page interaction until it is dismissed. It renders in a portal attached to the document body.

## Props

*   \`isOpen\` (boolean, required): Controls the visibility of the modal.
*   \`onClose\` (function, required): A callback function to close the modal. This is triggered by clicking the close button or the backdrop.
*   \`children\` (React.ReactNode, required): The content to be displayed inside the modal.
*   \`title\` (string, optional): A title to display in the modal's header.
*   \`className\` (string, optional): Additional CSS classes for the modal's content panel.

## Usage

\`\`\`tsx
import { Modal, Button, Text } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<>
    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Basic Modal"
    >
      <Text>This is the content of the modal.</Text>
    </Modal>
</>
\`\`\``,$S=`import React, { useRef, useEffect } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useFade } from '../../core/hooks/useAnimation';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    className?: string;
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    title,
    className = ''
}) => {
    const { theme } = useTheme();
    const createStyle = useStyles('modal');
    const { isRendered, style: fadeStyle } = useFade(isOpen, 200);

    const modalRef = useRef<HTMLDivElement>(null);
    /* ... more internal logic for focus trapping and accessibility ... */

    if (!isRendered) return null;

    const containerClass = createStyle({ /* ... styles ... */ });
    const modalClass = createStyle({ /* ... styles ... */ });
    
    return (
        <div className={containerClass} style={fadeStyle} onClick={handleContainerClick}>
            <div
                ref={modalRef}
                className={\`\${modalClass} \${className}\`}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? titleId : undefined}
                tabIndex={-1}
            >
                {title && <h2 id={titleId}>{title}</h2>}
                <button onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>
    );
}`,IS=()=>{const[l,r]=b.useState(!1),[c,i]=b.useState("Basic Modal");return o.jsxs(o.Fragment,{children:[o.jsx(ee,{title:"Modal",description:"A modal dialog that appears on top of the main content, disabling page interaction until dismissed.",livePreview:o.jsx(T,{color:"textSecondary",children:"Use the 'Props' tab to configure and open the modal."}),propControls:o.jsx(LS,{title:c,setTitle:i,setIsOpen:r}),documentation:BS,fullSourceCode:$S}),o.jsx(ju,{isOpen:l,onClose:()=>r(!1),title:c,children:o.jsx(T,{children:"This is the content of the modal. You can put any React components here."})})]})},OS=({title:l,setTitle:r,showActions:c,setShowActions:i,isOpen:d,setIsOpen:p})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Title Prop",value:l,onChange:m=>r(m.target.value)}),o.jsx(Ke,{label:"Show Actions Prop",checked:c,onChange:m=>i(m.target.checked)}),o.jsx(be,{onClick:()=>p(!0),children:"Open Dialog"})]}),HS=`# Dialog

A modal window that interrupts the user with important information or a request for a decision. It's built on top of the \`Modal\` component.

## Props

*   \`isOpen\` (boolean, required): Controls the visibility of the dialog.
*   \`onClose\` (function, required): A callback function to close the dialog.
*   \`title\` (string, required): The title displayed at the top of the dialog.
*   \`children\` (React.ReactNode, required): The main content of the dialog.
*   \`actions\` (array of objects, optional): An array of actions to render as buttons in the footer. Each object is passed as props to a \`Button\` component, with an added \`label\` property for the button text.
*   \`className\` (string, optional): Additional CSS classes for the modal container.

## Usage

\`\`\`tsx
import { Dialog, Button } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

const dialogActions = [
    { label: 'Cancel', onClick: () => setIsOpen(false), variant: 'secondary' },
    { label: 'Confirm', onClick: () => { alert('Confirmed!'); setIsOpen(false); } }
];

<>
    <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
    <Dialog
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Confirm Action"
      actions={dialogActions}
    >
      Are you sure you want to proceed with this action?
    </Dialog>
</>
\`\`\``,US=`import React from 'react';
import { Modal } from '../Modal/Modal';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';
import { Button, ButtonProps } from '../Button';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface DialogAction extends ButtonProps {
    label: string;
}

export interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    actions?: DialogAction[];
    className?: string;
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children, actions, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('dialog');

    const contentClass = createStyle({
        display: 'grid',
        gap: theme.spacing.md,
    });
    
    const footerClass = createStyle({
        borderTop: \`1px solid \${theme.colors.border}\`,
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title} className={className}>
            <div className={contentClass}>
                <div>{children}</div>
                {actions && actions.length > 0 && (
                     <Stack direction="row" className={footerClass} justify="end" gap={theme.spacing.sm}>
                        {actions.map(({ label, ...props }, index) => (
                            <Button key={index} {...props}>{label}</Button>
                        ))}
                    </Stack>
                )}
            </div>
        </Modal>
    );
};

export default Dialog;`,PS=()=>{const[l,r]=b.useState(!1),[c,i]=b.useState("Delete Item"),[d,p]=b.useState(!0),m=d?[{label:"Cancel",onClick:()=>r(!1),variant:"secondary"},{label:"Delete",onClick:()=>{alert("Deleted!"),r(!1)},variant:"primary"}]:void 0;return o.jsxs(o.Fragment,{children:[o.jsx(ee,{title:"Dialog",description:"A modal window that prompts for a decision, built on top of the Modal component.",livePreview:o.jsx(T,{color:"textSecondary",children:"Use the 'Props' tab to configure and open the dialog."}),propControls:o.jsx(OS,{isOpen:l,setIsOpen:r,title:c,setTitle:i,showActions:d,setShowActions:p}),documentation:HS,fullSourceCode:US}),o.jsx(Tu,{isOpen:l,onClose:()=>r(!1),title:c,actions:m,children:o.jsx(T,{children:"Are you sure you want to delete this item? This action cannot be undone."})})]})},_S=({title:l,setTitle:r,position:c,setPosition:i,setIsOpen:d})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsx(re,{label:"Title Prop",value:l,onChange:p=>r(p.target.value)}),o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Position Prop"}),o.jsx(Be,{value:c,onChange:i,options:[{label:"Left",value:"left"},{label:"Right",value:"right"}]})]}),o.jsx(be,{onClick:()=>d(!0),children:"Open Drawer"})]}),GS=`# Drawer

A panel that slides in from the edge of the screen, typically used for navigation or settings. It renders in a portal attached to the document body.

## Props

*   \`isOpen\` (boolean, required): Controls the visibility of the drawer.
*   \`onClose\` (function, required): A callback function to close the drawer.
*   \`children\` (React.ReactNode, required): The main content of the drawer.
*   \`title\` (string, optional): The title displayed in the drawer's header.
*   \`position\` (enum: 'left' | 'right', optional, default: 'right'): The edge from which the drawer slides in.
*   \`className\` (string, optional): Additional CSS classes for the drawer panel.

## Usage

\`\`\`tsx
import { Drawer, Button } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<>
    <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
    <Drawer
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Settings"
      position="left"
    >
      <p>Drawer content goes here.</p>
    </Drawer>
</>
\`\`\``,VS=`import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useSlide } from '../../core/hooks/useAnimation';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Backdrop } from '../Backdrop/Backdrop';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    position?: 'left' | 'right';
    className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children, title, position = 'right', className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('drawer');
    const { isRendered, style: slideStyle } = useSlide(isOpen, { direction: position });
    const drawerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLElement | null>(null);
    const titleId = useRef(\`drawer-title-\${Math.random().toString(36).substring(2, 9)}\`).current;

    useEffect(() => {
        if (isOpen) {
            const originalBodyOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            triggerRef.current = document.activeElement as HTMLElement;

            const focusTimeout = setTimeout(() => {
                drawerRef.current?.focus();
            }, 100);

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onClose();
                }

                if (e.key === 'Tab') {
                    const focusableElements = drawerRef.current?.querySelectorAll<HTMLElement>(
                        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                    );
                    if (!focusableElements || focusableElements.length === 0) {
                        e.preventDefault();
                        return;
                    };

                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            };
            
            document.addEventListener('keydown', handleKeyDown);

            return () => {
                document.body.style.overflow = originalBodyOverflow;
                clearTimeout(focusTimeout);
                document.removeEventListener('keydown', handleKeyDown);
                triggerRef.current?.focus();
            };
        }
    }, [isOpen, onClose]);
    
    if (!isRendered) return null;

    const drawerClass = createStyle({
        position: 'fixed',
        top: 0,
        bottom: 0,
        [position]: 0,
        width: '320px',
        maxWidth: '90vw',
        backgroundColor: theme.colors.backgroundSecondary,
        borderLeft: position === 'right' ? \`1px solid \${theme.colors.border}\` : 'none',
        borderRight: position === 'left' ? \`1px solid \${theme.colors.border}\` : 'none',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column',
         '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
        '&:focus': {
            outline: 'none',
        }
    });
    
    const headerClass = createStyle({
        padding: theme.spacing.md,
        borderBottom: \`1px solid \${theme.colors.border}\`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0,
    });
    
    const contentClass = createStyle({
        padding: theme.spacing.md,
        overflowY: 'auto',
        flex: 1,
    });

    const closeButtonClass = createStyle({
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        color: theme.colors.textSecondary,
        padding: '4px',
        '&:hover': { color: theme.colors.text }
    });

    return createPortal(
        <>
            <Backdrop isOpen={isOpen} onClick={onClose} />
            <div 
                ref={drawerRef}
                className={\`\${drawerClass} \${className}\`} 
                style={slideStyle}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? titleId : undefined}
                tabIndex={-1}
            >
                <div className={headerClass}>
                    {title && <h2 id={titleId} style={{ fontSize: '1.125rem', fontWeight: 600, color: theme.colors.text }}>{title}</h2>}
                    <button className={closeButtonClass} onClick={onClose} aria-label="Close drawer">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                 <div className={contentClass}>
                    {children}
                 </div>
            </div>
        </>,
        document.body
    );
};`,qS=()=>{const[l,r]=b.useState(!1),[c,i]=b.useState("Settings"),[d,p]=b.useState("right");return o.jsxs(o.Fragment,{children:[o.jsx(ee,{title:"Drawer",description:"A panel that slides in from the edge of the screen.",livePreview:o.jsx(T,{color:"textSecondary",children:"Use the 'Props' tab to configure and open the drawer."}),propControls:o.jsx(_S,{title:c,setTitle:i,position:d,setPosition:p,setIsOpen:r}),documentation:GS,fullSourceCode:VS}),o.jsx(pg,{isOpen:l,onClose:()=>r(!1),title:c,position:d,children:o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{children:"This is the content of the drawer."}),o.jsx(T,{children:"You can place forms, navigation, or any other content here."}),o.jsx(be,{onClick:()=>r(!1),children:"Close"})]})})]})},YS=`# Popover

A floating panel that appears in relation to a trigger element. It's a styled implementation of the \`Popper\` utility.

## Components

*   **Popover**: The main wrapper component.
*   **PopoverTrigger**: The element that, when clicked, toggles the popover's visibility. It must wrap a single child.
*   **PopoverContent**: The styled container for the popover's content.

## Usage

\`\`\`tsx
import { Popover, PopoverTrigger, PopoverContent, Button, Text } from './src/components';

<Popover>
    <PopoverTrigger>
        <Button>Show Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
         <Text style={{ padding: '8px' }}>
            This is the content of the popover.
         </Text>
    </PopoverContent>
</Popover>
\`\`\``,FS=`import React from 'react';
import { Popper, PopperTrigger as PopperTriggerInternal, PopperContent as PopperContentInternal } from '../Popper/Popper';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Popover: React.FC<{ children: React.ReactNode }> = ({ children }) => <Popper>{children}</Popper>;

export const PopoverTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => <PopperTriggerInternal>{children}</PopperTriggerInternal>;

export const PopoverContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('popover-content');
    /* ... styles ... */

    return <PopperContentInternal className={\`\${contentClass} \${className}\`}>{children}</PopperContentInternal>;
};`,XS=()=>o.jsx(ee,{title:"Popover",description:"A floating panel that appears in relation to a trigger element. Built using the Popper utility.",livePreview:o.jsxs(Nu,{children:[o.jsx(Du,{children:o.jsx(be,{children:"Show Popover"})}),o.jsx(kr,{children:o.jsxs(Dl,{children:[o.jsx(eo,{children:o.jsx(jo,{primary:"Account Settings"})}),o.jsx(eo,{children:o.jsx(jo,{primary:"Support"})})]})})]}),propControls:o.jsx(T,{color:"textSecondary",children:"This is a standard implementation of the Popover component. No props are available to configure in this demo."}),documentation:YS,fullSourceCode:FS}),KS=`# Hover Card

A popover that appears when a user hovers their mouse over a trigger element.

## Components

*   **HoverCard**: The main wrapper that manages the hover state.
*   **HoverCardTrigger**: The element that triggers the popover on hover.
*   **HoverCardContent**: The content that appears in the popover.

## Usage

\`\`\`tsx
import { HoverCard, HoverCardTrigger, HoverCardContent, Link, Text } from './src/components';

<p>
    Hover over the <HoverCard>
        <HoverCardTrigger>
            <Link href="#">@username</Link>
        </HoverCardTrigger>
        <HoverCardContent>
            <Text>User profile information goes here.</Text>
        </HoverCardContent>
    </HoverCard> profile link.
</p>
\`\`\``,QS=`import React, { useState, useRef } from 'react';
import { Popper, PopperContent, PopperTrigger } from '../Popper/Popper';
import { PopoverContent as StyledContent } from '../Popover/Popover';

interface HoverCardContextType {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HoverCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const handleOpen = () => {
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleClose = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 100); // Small delay to allow moving mouse into card
    };
    
    const contextValue = { isOpen, setIsOpen, handleOpen, handleClose };

    return (
        <Popper isOpen={isOpen} setIsOpen={setIsOpen}>
            <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                {children}
            </div>
        </Popper>
    );
};

export const HoverCardTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <PopperTrigger>{children}</PopperTrigger>;
};

export const HoverCardContent: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return <StyledContent className={className}>{children}</StyledContent>;
};`,ZS=()=>o.jsx(ee,{title:"Hover Card",description:"A popover that appears when a user hovers over a trigger element.",livePreview:o.jsxs(T,{children:["Hover over the"," ",o.jsxs(wg,{children:[o.jsx(Ag,{children:o.jsx(Sa,{href:"#",onClick:l=>l.preventDefault(),children:"@zwhe"})}),o.jsx(Rg,{children:o.jsxs(D,{direction:"row",gap:"1rem",align:"center",children:[o.jsx(Tn,{fallback:"ZW",src:"https://i.pravatar.cc/150?u=a042581f4e29026704d"}),o.jsxs(D,{gap:"0.25rem",children:[o.jsx(T,{weight:"600",children:"Zwhe UI"}),o.jsx(T,{size:"14px",color:"textSecondary",children:"The component library you're looking at."})]})]})})]})," ","profile link."]}),propControls:o.jsx(T,{color:"textSecondary",children:"This is an interactive demo. No props are available to configure."}),documentation:KS,fullSourceCode:QS}),WS=({isOpen:l,setIsOpen:r})=>o.jsxs(D,{gap:"1rem",align:"start",children:[o.jsx(T,{children:"The `isOpen` prop controls the visibility of the Backdrop. Use the button to toggle it."}),o.jsxs(be,{onClick:()=>r(!l),children:[l?"Hide":"Show"," Backdrop"]})]}),JS=`# Backdrop

A semi-transparent, blurred overlay used to disable interaction with the main page. It's typically used in conjunction with components like \`Modal\` or \`Drawer\`.

## Props

*   \`isOpen\` (boolean, required): Controls the visibility of the backdrop.
*   \`onClick\` (function, optional): A callback function to execute when the backdrop is clicked.
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

\`\`\`tsx
import { Backdrop, Button } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<>
    <Button onClick={() => setIsOpen(true)}>Show Backdrop</Button>
    <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
</>
\`\`\``,ej=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useFade } from '../../core/hooks/useAnimation';

interface BackdropProps {
    isOpen: boolean;
    onClick?: () => void;
    className?: string;
}

export const Backdrop: React.FC<BackdropProps> = ({ isOpen, onClick, className = '' }) => {
    const createStyle = useStyles('backdrop');
    const { isRendered, style: fadeStyle } = useFade(isOpen, 200);

    if (!isRendered) return null;

    const backdropClass = createStyle({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(16px)',
        zIndex: 40, // Should be below modals
    });

    return (
        <div 
            className={\`\${backdropClass} \${className}\`} 
            style={fadeStyle}
            onClick={onClick}
        />
    );
};

export default Backdrop;`,tj=()=>{const[l,r]=b.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(ee,{title:"Backdrop",description:"A semi-transparent overlay to disable interaction with the main page, often used with Modals or Drawers.",livePreview:o.jsx(T,{children:"The backdrop will cover the entire screen. Use the controls in the 'Props' tab to show it."}),propControls:o.jsx(WS,{isOpen:l,setIsOpen:r}),documentation:JS,fullSourceCode:ej}),o.jsx(Cu,{isOpen:l,onClick:()=>r(!1)})]})},nj=()=>{const{addSnackbar:l}=Fg();return o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{children:"Use the buttons below to trigger snackbars with different configurations. They will appear at the bottom of the screen."}),o.jsxs(D,{direction:"row",gap:"1rem",wrap:!0,children:[o.jsx(be,{onClick:()=>l({message:"This is a simple snackbar."}),children:"Show Snackbar"}),o.jsx(be,{variant:"secondary",onClick:()=>{l({message:"An action was performed.",action:{label:"Undo",onClick:()=>alert("Undo action clicked!")}})},children:"Show with Action"})]})]})},oj=`# Snackbar Notification System

A system for dispatching brief, temporary notifications that appear at the bottom of the screen. Snackbars can also include an optional action.

## Components & Hooks

*   **SnackbarProvider**: A context provider that manages the state and rendering of all snackbars. It should wrap your entire application.
*   **useSnackbar**: A hook that provides access to the \`addSnackbar\` function.

## Usage

1.  **Wrap your app in \`SnackbarProvider\`:**
    \`\`\`tsx
    import { SnackbarProvider } from './src/components';
    const App = () => (
        <SnackbarProvider>
            {/* ... Your app ... */}
        </SnackbarProvider>
    );
    \`\`\`

2.  **Use the \`useSnackbar\` hook:**
    \`\`\`tsx
    import { useSnackbar, Button } from './src/components';
    const MyComponent = () => {
        const { addSnackbar } = useSnackbar();
        return <Button onClick={() => addSnackbar({ message: 'Hello!' })}>Show</Button>;
    };
    \`\`\`

## \`addSnackbar\` Options
*   \`message\` (string, required): The text to display.
*   \`action\` (object, optional): An action button with \`label\` and \`onClick\` properties.
*   \`duration\` (number, optional, default: 5000): Time in milliseconds before auto-dismiss.
`,aj=`/* This file shows the Snackbar component. The provider and hook are also part of the system. */
import React, { useEffect } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useFade } from '../../core/hooks/useAnimation';
import { SnackbarData } from './useSnackbar';
import { Text } from '../Text/Text';
import { Button } from '../Button';

interface SnackbarProps {
    snackbar: SnackbarData;
    onDismiss: (id: string) => void;
}

export const Snackbar: React.FC<SnackbarProps> = ({ snackbar, onDismiss }) => {
    /* ... internal logic for animations and dismissal ... */

    const containerClass = createStyle({ /* ... styles ... */ });

    return (
        <div 
            className={containerClass} 
            style={{ 
                opacity: isVisible ? 1 : 0, 
                transition: 'opacity 0.2s, transform 0.2s',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
            role="alert"
        >
            <Text size="14px" color="inherit">{snackbar.message}</Text>
            {snackbar.action && (
                <Button onClick={handleActionClick}>
                    {snackbar.action.label}
                </Button>
            )}
        </div>
    );
};`,lj=()=>o.jsx(ee,{title:"Snackbar",description:"A component for brief, temporary notifications displayed at the bottom of the screen.",livePreview:o.jsx(T,{color:"textSecondary",children:"Use the 'Props' tab to trigger snackbars."}),propControls:o.jsx(nj,{}),documentation:oj,fullSourceCode:aj}),sj=({useContainer:l,setUseContainer:r})=>o.jsx(Ke,{label:"Use Container Prop",checked:l,onChange:c=>r(c.target.checked)}),rj=`# Nav

A flexible navigation component for building horizontal navigation bars.

## Components

*   **Nav**: The main \`<nav>\` wrapper.
*   **Nav.List**: A container for a list of navigation items.
*   **Nav.Item**: A single, clickable navigation link.

## Props

### Nav
*   \`container\` (boolean, optional, default: false): If true, the navigation content will be wrapped in a \`Container\` component to center it and constrain its width.

### Nav.Item
*   \`to\` (string, optional): The path for client-side navigation (uses \`react-router-dom\`).
*   \`href\` (string, optional): The URL for a standard link.
*   \`isActive\` (boolean, optional): Applies an active style to the item.
*   All other standard \`<a>\` attributes are supported.

## Usage

\`\`\`tsx
import { Nav } from './src/components';

<Nav container={true}>
  <Nav.List>
    <Nav.Item href="#">Home</Nav.Item>
    <Nav.Item href="#" isActive>About</Nav.Item>
  </Nav.List>
</Nav>
\`\`\``,ij=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Link } from '../Link/Link';
import { Container } from '../Container/Container';

interface NavProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    height?: string;
}

const NavList: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => { /* ... */ };
const NavItem: React.FC<NavItemProps> = ({ children, className, isActive, ...props }) => { /* ... */ };

export const Nav: React.FC<NavProps> & {
    List: typeof NavList;
    Item: typeof NavItem;
} = ({ children, className, container = false, height, ...props }) => {
    const createStyle = useStyles('nav');
    const navClass = createStyle({ /* ... */ });

    const content = container ? <Container>{children}</Container> : children;

    return (
        <nav className={\`\${navClass} \${className}\`} {...props}>
            {content}
        </nav>
    );
};

Nav.List = NavList;
Nav.Item = NavItem;`,cj=()=>{const[l,r]=b.useState("home"),[c,i]=b.useState(!1),{theme:d}=_(),p=(m,f)=>{m.preventDefault(),r(f)};return o.jsx(ee,{title:"Nav",description:"A horizontal navigation component for links.",livePreview:o.jsx("div",{style:{backgroundColor:d.colors.background,border:`1px solid ${d.colors.border}`,borderRadius:"8px",width:"100%"},children:o.jsx(Jn,{container:c,children:o.jsxs(Jn.List,{children:[o.jsx(Jn.Item,{href:"#",isActive:l==="home",onClick:m=>p(m,"home"),children:"Home"}),o.jsx(Jn.Item,{href:"#",isActive:l==="about",onClick:m=>p(m,"about"),children:"About"}),o.jsx(Jn.Item,{href:"#",isActive:l==="contact",onClick:m=>p(m,"contact"),children:"Contact"})]})})}),propControls:o.jsx(sj,{useContainer:c,setUseContainer:i}),documentation:rj,fullSourceCode:ij})},rf=[{label:"Home",to:"/"},{label:"Components",to:"#"},{label:"Breadcrumbs"}],uj=({itemsString:l,setItemsString:r,separator:c,setSeparator:i,error:d})=>o.jsxs(D,{gap:"1.5rem",children:[o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Items Prop (JSON Array)"}),o.jsx(Ml,{value:l,onChange:p=>r(p.target.value),rows:6,style:{fontFamily:"monospace"}}),d&&o.jsx(jr,{children:d})]}),o.jsx(re,{label:"Separator Prop",value:c,onChange:p=>i(p.target.value)})]}),dj=`# Breadcrumbs

A navigational aid that shows the user's current location within the application's hierarchy.

## Props

*   \`items\` (array of objects, required): An array of breadcrumb items. Each object should have:
    *   \`label\` (string, required): The text to display.
    *   \`href\` (string, optional): The URL for the link. If omitted, the item will be rendered as plain text.
*   \`separator\` (React.ReactNode, optional, default: '/'): The character or component to display between items.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { Breadcrumbs } from './src/components';

const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumbs' },
];

<Breadcrumbs items={breadcrumbItems} />
\`\`\``,pj=`import React from 'react';
import { Link } from '../Link/Link';
import { Text } from '../Text/Text';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useStyles } from '../../core/hooks/useStyles';

interface BreadcrumbItem {
    label: string;
    href?: string;
    to?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, separator = '/', className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('breadcrumbs');

    const navClass = createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.sm,
    });
    
    const separatorClass = createStyle({
        color: theme.colors.textSecondary,
    });

    return (
        <nav aria-label="breadcrumb" className={\`\${navClass} \${className}\`}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {item.href || item.to ? (
                        <Link href={item.href} to={item.to}>{item.label}</Link>
                    ) : (
                        <Text as="span" color={theme.colors.textSecondary}>{item.label}</Text>
                    )}
                    {index < items.length - 1 && (
                        <span className={separatorClass} aria-hidden="true">{separator}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};`,mj=()=>{const[l,r]=b.useState(JSON.stringify(rf,null,2)),[c,i]=b.useState(">"),[d,p]=b.useState("");let m=rf;try{const f=JSON.parse(l);Array.isArray(f)?(m=f,d&&p("")):d||p("Items must be a valid JSON array.")}catch{d||p("Invalid JSON format.")}return o.jsx(ee,{title:"Breadcrumbs",description:"A navigational aid that shows the user's location within the app. Supports react-router `to` prop.",livePreview:o.jsx(Xf,{items:m,separator:c}),propControls:o.jsx(uj,{itemsString:l,setItemsString:r,separator:c,setSeparator:i,error:d}),documentation:dj,fullSourceCode:pj})},hj=({count:l,setCount:r})=>o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Count Prop (Total Pages)"}),o.jsx(Xe,{value:l,onChange:r,min:1,max:50,showValue:!0})]}),fj=`# Pagination

A component to control navigation between a set of pages, often used with tables or lists of data.

## Props

*   \`count\` (number, required): The total number of pages.
*   \`page\` (number, required): The current active page (1-based index).
*   \`onChange\` (function, required): A callback function triggered when the page is changed. It receives the new page number.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { Pagination } from './src/components';
import { useState } from 'react';

const [currentPage, setCurrentPage] = useState(5);

<Pagination count={20} page={currentPage} onChange={setCurrentPage} />
\`\`\``,gj=`import React from 'react';
import { Button } from '../Button';
import { Text } from '../Text/Text';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useStyles } from '../../core/hooks/useStyles';

interface PaginationProps {
    count: number;
    page: number;
    onChange: (page: number) => void;
    className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({ count, page, onChange, className = '' }) => {
    /* ... internal logic for rendering page numbers and ellipsis ... */

    return (
        <nav className={\`\${containerClass} \${className}\`} aria-label="Pagination">
            <Button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>&lt;</Button>
            {renderPageNumbers()}
            <Button onClick={() => handlePageChange(page + 1)} disabled={page >= count}>&gt;</Button>
        </nav>
    );
};`,xj=()=>{const[l,r]=b.useState(20),[c,i]=b.useState(5);return o.jsx(ee,{title:"Pagination",description:"A component to control navigation between a set of pages.",livePreview:o.jsx(Mu,{count:l,page:c,onChange:i}),propControls:o.jsx(hj,{count:l,setCount:r}),documentation:fj,fullSourceCode:gj})},bj=`# Tabs

A component for organizing and navigating between different views of content.

## Components

*   **Tabs**: The main wrapper that manages the active tab state.
*   **TabList**: The container for the tab buttons.
*   **Tab**: A single, clickable tab button.
*   **TabPanels**: The container for all tab content panels.
*   **TabPanel**: The content for a single tab, which is only visible when its corresponding \`Tab\` is active.

## Props

### Tabs
*   \`defaultValue\` (string, required): The \`value\` of the \`Tab\` that should be active by default.
*   \`children\` (React.ReactNode): Should contain a \`TabList\` and \`TabPanels\`.

### Tab & TabPanel
*   \`value\` (string, required): A unique identifier that links a \`Tab\` to its \`TabPanel\`.

## Usage

\`\`\`tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './src/components';

<Tabs defaultValue="account">
    <TabList>
        <Tab value="account">Account</Tab>
        <Tab value="password">Password</Tab>
    </TabList>
    <TabPanels>
        <TabPanel value="account">
            <p>Account settings content goes here.</p>
        </TabPanel>
        <TabPanel value="password">
            <p>Password settings content goes here.</p>
        </TabPanel>
    </TabPanels>
</Tabs>
\`\`\``,yj=`import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

// --- Context Setup ---
interface TabsContextType {
    activeTab: string;
    setActiveTab: (value: string) => void;
    baseId: string;
}

const TabsContext = createContext<TabsContextType | null>(null);

const useTabs = () => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('Tab components must be used within a <Tabs> component.');
    }
    return context;
};


// --- Main Tabs Wrapper ---
export const Tabs: React.FC<{ defaultValue: string; children: React.ReactNode; className?: string }> = ({ defaultValue, children, className }) => {
    const [activeTab, setActiveTab] = useState(defaultValue);
    const baseId = useRef(\`tabs-\${Math.random().toString(36).substring(2, 9)}\`).current;
    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab, baseId }}>
            <div className={className}>{children}</div>
        </TabsContext.Provider>
    );
};


// --- TabList: Container for the tab buttons ---
export const TabList: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('tabs-list');
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        tabRefs.current = tabRefs.current.slice(0, React.Children.count(children));
    }, [children]);

    const containerClass = createStyle({
        backgroundColor: 'rgba(28, 28, 28, 0.5)',
        borderRadius: '8px',
        padding: '4px',
        display: 'inline-flex',
        gap: '4px',
        border: \`1px solid \${theme.colors.border}\`,
        marginBottom: theme.spacing.lg,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(12px)',
        },
    });
    
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            const focusedIndex = tabRefs.current.findIndex(tab => tab === document.activeElement);
            if (focusedIndex === -1) return;

            const direction = event.key === 'ArrowRight' ? 1 : -1;
            const nextIndex = (focusedIndex + direction + tabRefs.current.length) % tabRefs.current.length;
            
            tabRefs.current[nextIndex]?.focus();
        }
    };

    return (
        <div role="tablist" aria-orientation="horizontal" className={\`\${containerClass} \${className}\`} onKeyDown={handleKeyDown}>
            {React.Children.map(children, (child, index) => 
                React.isValidElement(child) 
                ? React.cloneElement(child as React.ReactElement<any>, { ref: (el: HTMLButtonElement) => tabRefs.current[index] = el }) 
                : child
            )}
        </div>
    );
};


// --- Tab: A single tab button ---
export const Tab = React.forwardRef<HTMLButtonElement, { value: string; children: React.ReactNode; className?: string }>(({ value, children, className }, ref) => {
    const { activeTab, setActiveTab, baseId } = useTabs();
    const { theme } = useTheme();
    const createStyle = useStyles('tab');
    const isActive = activeTab === value;
    
    const tabClass = createStyle({
        padding: '6px 16px',
        borderRadius: '6px',
        background: 'none',
        border: 'none',
        color: theme.colors.textSecondary,
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'color 0.3s, background-color 0.3s',
        '&[data-active="true"]': {
            color: theme.colors.text,
            backgroundColor: theme.colors.backgroundSecondary,
        },
        '&:hover:not([data-active="true"])': {
            color: theme.colors.text,
        },
        '&:focus-visible': {
             outline: \`2px solid \${theme.colors.primary}\`,
             outlineOffset: '2px',
        }
    });

    return (
        <button
            ref={ref}
            id={\`\${baseId}-tab-\${value}\`}
            onClick={() => setActiveTab(value)}
            className={\`\${tabClass} \${className}\`}
            role="tab"
            aria-selected={isActive}
            aria-controls={\`\${baseId}-panel-\${value}\`}
            data-active={isActive}
            tabIndex={isActive ? 0 : -1}
        >
            {children}
        </button>
    );
});


// --- TabPanels: Wrapper for the content panels ---
export const TabPanels: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};


// --- TabPanel: A single content panel, conditionally rendered ---
export const TabPanel: React.FC<{ value: string; children: React.ReactNode; className?: string }> = ({ value, children, className }) => {
    const { activeTab, baseId } = useTabs();
    return activeTab === value ? (
        <div 
            id={\`\${baseId}-panel-\${value}\`}
            role="tabpanel" 
            aria-labelledby={\`\${baseId}-tab-\${value}\`}
            className={className}
        >
            {children}
        </div>
    ) : null;
};`,vj=()=>{const[l,r]=b.useState("account");return o.jsx(ee,{title:"Tabs",description:"A component for organizing content into switchable views.",livePreview:o.jsxs(ex,{defaultValue:l,children:[o.jsxs(tx,{children:[o.jsx(tu,{value:"account",children:"Account"}),o.jsx(tu,{value:"password",children:"Password"})]}),o.jsxs(nx,{children:[o.jsx(nu,{value:"account",children:o.jsxs(D,{gap:"1rem",style:{padding:"1rem 0"},children:[o.jsx(T,{weight:"600",children:"Account Settings"}),o.jsx(T,{size:"14px",children:"Make changes to your account here. Click save when you're done."}),o.jsx(re,{label:"Name",defaultValue:"Zwhe UI"})]})}),o.jsx(nu,{value:"password",children:o.jsxs(D,{gap:"1rem",style:{padding:"1rem 0"},children:[o.jsx(T,{weight:"600",children:"Password Settings"}),o.jsx(T,{size:"14px",children:"Change your password here. After saving, you'll be logged out."}),o.jsx(re,{label:"Current Password",type:"password"}),o.jsx(re,{label:"New Password",type:"password"})]})})]})]},l),propControls:o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"DefaultValue Prop"}),o.jsx(T,{size:"sm",children:"This control remounts the component with a new default value."}),o.jsx(Be,{value:l,onChange:r,options:[{label:"Account",value:"account"},{label:"Password",value:"password"}]})]}),documentation:bj,fullSourceCode:yj})},lu=[{label:"Shipping"},{label:"Payment"},{label:"Review"}],Cj=({activeStep:l,setActiveStep:r})=>o.jsxs(D,{direction:"row",justify:"center",gap:"1rem",children:[o.jsx(be,{onClick:()=>r(c=>Math.max(0,c-1)),disabled:l===0,children:"Back"}),o.jsx(be,{onClick:()=>r(c=>Math.min(lu.length-1,c+1)),disabled:l===lu.length-1,children:"Next"})]}),Sj=`# Stepper

A component that displays progress through a sequence of logical, numbered steps. It is ideal for guiding users through a multi-step process like a checkout or setup wizard.

## Props

*   \`activeStep\` (number, required): The index of the current active step (0-based).
*   \`steps\` (array of objects, required): An array describing the steps. Each object should have:
    *   \`label\` (string, required): The title of the step.
    *   \`description\` (string, optional): A short description of the step.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { Stepper, Button } from './src/components';
import { useState } from 'react';

const steps = [
    { label: 'Shipping' },
    { label: 'Payment' },
    { label: 'Review' },
];

const [activeStep, setActiveStep] = useState(1);

<>
    <Stepper steps={steps} activeStep={activeStep} />
    <Button onClick={() => setActiveStep(p => p + 1)}>Next</Button>
</>
\`\`\``,jj=`import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Text } from '../Text/Text';

interface StepperProps {
    activeStep: number;
    steps: { label: string; description?: string }[];
    className?: string;
}

export const Stepper: React.FC<StepperProps> = ({ activeStep, steps, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('stepper');

    const containerClass = createStyle({ /* ...styles... */ });
    
    return (
        <div className={\`\${containerClass} \${className}\`}>
            {steps.map((step, index) => (
                <div key={index} className={stepClass}>
                    <div className={stepContentClass}>
                        <div className={circleClass(index)}>{index + 1}</div>
                        <Text size="14px" weight={index === activeStep ? 600 : 400}>
                            {step.label}
                        </Text>
                    </div>
                    <div className={connectorClass(index)} />
                </div>
            ))}
        </div>
    );
};`,Tj=()=>{const[l,r]=b.useState(1);return o.jsx(ee,{title:"Stepper",description:"A component that displays progress through a sequence of logical and numbered steps.",livePreview:o.jsx(Qg,{steps:lu,activeStep:l}),propControls:o.jsx(Cj,{activeStep:l,setActiveStep:r}),documentation:Sj,fullSourceCode:jj})},kj=`# Menu & StyledMenu

Components for creating dropdown menus. \`Menu\` provides the core logic and structure, while \`StyledMenu\` is a pre-styled, opinionated implementation for common use cases.

## StyledMenu

A quick and easy way to create a styled dropdown menu with icons, shortcuts, groups, and dividers.

### Props
*   \`label\` (string, required): The text for the trigger button.
*   \`items\` (array of \`MenuItemData\` or \`MenuGroupData\`, required): The list of menu items.

### Data Structure
\`\`\`ts
// A clickable menu item
interface MenuAction {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
    shortcut?: string;
    disabled?: boolean;
}

// A visual separator
interface MenuDivider {
    type: 'divider';
}

type MenuItemData = MenuAction | MenuDivider;

// A group of menu items
interface MenuGroupData {
    title?: string;
    items: MenuItemData[];
    divider?: 'after'; // Adds a divider after this group
}
\`\`\``,wj=`/* This file contains the implementation for the high-level StyledMenu. */
import React from 'react'
import { Menu, MenuButton, MenuItems, MenuItem } from './Menu'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'

interface MenuAction { label: string; onClick: () => void; icon?: React.ReactNode; shortcut?: string; disabled?: boolean; }
interface MenuDivider { type: 'divider'; }
type MenuItemData = MenuAction | MenuDivider;
interface MenuGroupData { title?: string; items: MenuItemData[]; divider?: 'after'; }

export interface StyledMenuProps {
    label: string;
    items: Array<MenuItemData | MenuGroupData>;
    className?: string;
}

function isAction(item: MenuItemData): item is MenuAction { return 'label' in item; }

export const StyledMenu: React.FC<StyledMenuProps> = ({ label, items, className = '' }) => {
    const { theme } = useTheme();
    // ... styles ...

    const isGrouped = items.length > 0 && 'items' in items[0] && Array.isArray((items[0] as any).items);
    const normalizedItems: MenuGroupData[] = isGrouped 
        ? items as MenuGroupData[] 
        : [{ items: items as MenuItemData[] }];

    return (
        <Menu className={\`\${menuClass} \${className}\`}>
            <MenuButton className={buttonClass}>{label}</MenuButton>
            <MenuItems className={itemsClass}>
                {normalizedItems.map((group, groupIndex) => (
                    <React.Fragment key={groupIndex}>
                        {group.title && <div className={groupTitleClass}>{group.title}</div>}
                        {group.items.map((item, itemIndex) => {
                            if (isAction(item)) {
                                return (
                                    <MenuItem key={\`\${groupIndex}-\${itemIndex}\`} className={itemClass} onClick={item.onClick} disabled={item.disabled}>
                                        {item.icon}
                                        <span>{item.label}</span>
                                        {item.shortcut && <span className={shortcutClass}>{item.shortcut}</span>}
                                    </MenuItem>
                                );
                            } else {
                                return <hr key={\`\${groupIndex}-\${itemIndex}\`} className={dividerClass} />;
                            }
                        })}
                        {group.divider === 'after' && groupIndex < normalizedItems.length - 1 && (<hr className={dividerClass} />)}
                    </React.Fragment>
                ))}
            </MenuItems>
        </Menu>
    )
}`,Aj=`<StyledMenu 
    label="Actions" 
    items={[
        {
            items: [
                { label: 'Edit', icon: '<PencilIcon/>', shortcut: '⌘E' },
                { type: 'divider' },
                { label: 'Archive', icon: '<ArchiveIcon/>', disabled: true },
            ],
            divider: 'after'
        },
        {
            title: 'Destructive',
            items: [
                { label: 'Delete', icon: '<TrashIcon/>', shortcut: '⌘⌫' },
            ]
        }
    ]}
/>`,Rj=()=>{const l=[{divider:"after",items:[{label:"Edit",onClick:()=>alert("Edit"),shortcut:"⌘E",icon:o.jsx(Le,{as:Af,size:16})},{label:"Duplicate",onClick:()=>alert("Duplicate"),shortcut:"⌘D",icon:o.jsx(Le,{as:pu,size:16})},{type:"divider"},{label:"Archive",onClick:()=>alert("Archive"),icon:o.jsx(Le,{as:Rf,size:16}),disabled:!0}]},{title:"Destructive Actions",items:[{label:"Delete",onClick:()=>alert("Delete"),shortcut:"⌘⌫",icon:o.jsx(Le,{as:mu,size:16})}]}];return o.jsx(ee,{title:"Menu",description:o.jsxs("span",{children:["A styled dropdown menu. Dividers can be added within a group using ",o.jsx(cr,{children:"{ type: 'divider' }"})," or between groups using the `divider: 'after'` prop."]}),livePreview:o.jsx(Bg,{label:"Actions",items:l}),initialCode:Aj,propControls:o.jsx(T,{color:"textSecondary",children:"This is a standard implementation of the StyledMenu component. The `items` prop is a complex object not suitable for simple controls."}),documentation:kj,fullSourceCode:wj})},Nj=`# Dropdown

A flexible, general-purpose dropdown menu component built on top of the \`Popper\` utility.

## Components

*   **Dropdown**: The main wrapper component.
*   **DropdownTrigger**: The element that, when clicked, toggles the dropdown's visibility. It must wrap a single child.
*   **DropdownContent**: The container for the dropdown menu items that appears when open.
*   **DropdownItem**: A clickable button element within the \`DropdownContent\`.

## Usage

\`\`\`tsx
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem, Button } from './src/components';

<Dropdown>
    <DropdownTrigger>
        <Button>User Actions</Button>
    </DropdownTrigger>
    <DropdownContent>
         <DropdownItem onClick={() => alert('Profile clicked')}>Profile</DropdownItem>
         <DropdownItem onClick={() => alert('Settings clicked')}>Settings</DropdownItem>
         <DropdownItem onClick={() => alert('Logout clicked')} style={{color: '#f87171'}}>
            Logout
         </DropdownItem>
    </DropdownContent>
</Dropdown>
\`\`\``,Dj=`import React from 'react';
import { Popper, PopperTrigger, PopperContent, usePopperContext } from '../Popper/Popper';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Dropdown: React.FC<{ children: React.ReactNode }> = ({ children }) => <Popper>{children}</Popper>;

export const DropdownTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => <PopperTrigger>{children}</PopperTrigger>;

export const DropdownContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('dropdown-content');

    const contentClass = createStyle({
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '6px',
        border: \`1px solid \${theme.colors.border}\`,
        boxShadow: \`0 4px 12px rgba(0,0,0,0.5)\`,
        zIndex: 50,
        overflow: 'hidden',
        padding: '4px',
        minWidth: '180px',
         '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });

    return <PopperContent className={\`\${contentClass} \${className}\`} >{children}</PopperContent>;
};

export const DropdownItem: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('dropdown-item');
    const { setIsOpen } = usePopperContext();

    const itemClass = createStyle({
        width: '100%',
        padding: '8px 12px',
        border: 'none',
        backgroundColor: 'transparent',
        textAlign: 'left',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
        gap: theme.spacing.sm,
        color: theme.colors.textSecondary,
        transition: 'all 0.2s ease',
        borderRadius: '4px',
        fontSize: '14px',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: theme.colors.text,
        }
    });
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.onClick?.(e);
        setIsOpen(false);
    };

    return <button className={\`\${itemClass} \${className}\`} {...props} onClick={handleClick}>{children}</button>;
};`,zj=()=>o.jsx(ee,{title:"Dropdown",description:"A flexible dropdown menu built on Popper, an alternative to StyledMenu.",livePreview:o.jsxs(mg,{children:[o.jsx(hg,{children:o.jsx(be,{children:"User Actions"})}),o.jsxs(fg,{children:[o.jsx(Zs,{onClick:()=>alert("Profile clicked"),children:"Profile"}),o.jsx(Zs,{onClick:()=>alert("Settings clicked"),children:"Settings"}),o.jsx(Zs,{onClick:()=>alert("Logout clicked"),style:{color:"#f87171"},children:"Logout"})]})]}),propControls:o.jsx(T,{color:"textSecondary",children:"This is a standard implementation of the Dropdown component. No props are available to configure in this demo."}),documentation:Nj,fullSourceCode:Dj}),Mj=({size:l,setSize:r})=>o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"label",size:"sm",weight:"medium",color:"textSecondary",children:"Size Prop"}),o.jsx(Be,{value:l,onChange:r,options:[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}]})]}),Ej="# Floating Action Button (FAB)\n\nA circular button that appears in front of all screen content, typically used for a primary or common action.\n\n## Props\n\n*   `icon` (React.ElementType, required): The icon component to display inside the button.\n*   `label` (string, required): An accessible label for the button, as it has no visible text.\n*   `position` (object, optional): An object with `top`, `bottom`, `left`, `right` properties to position the FAB. Defaults to `{ bottom: '2rem', right: '2rem' }`.\n*   `size` (enum: 'small' | 'medium' | 'large', optional, default: 'medium'): The size of the button.\n*   All other props are passed down to the underlying `Button` component (e.g., `onClick`).\n\n## Usage\n\n```tsx\nimport { FloatingActionButton } from './src/components';\nimport { PlusIcon } from './src/icons';\n\n<FloatingActionButton\n  icon={PlusIcon}\n  label=\"Add new item\"\n  onClick={() => alert('FAB clicked!')}\n/>\n```",Lj=`import React from 'react';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon/Icon';
import { useStyles } from '../../core';

interface FloatingActionButtonProps extends Omit<ButtonProps, 'variant'> {
    icon: React.ElementType;
    label: string; // for accessibility
    position?: { bottom?: string; right?: string; top?: string; left?: string };
    size?: 'small' | 'medium' | 'large';
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
    icon,
    label,
    position = { bottom: '2rem', right: '2rem' },
    size = 'medium',
    className = '',
    ...props
}) => {
    const createStyle = useStyles('fab');

    const sizes = {
        small: { wrapper: '40px', icon: 18 },
        medium: { wrapper: '56px', icon: 24 },
        large: { wrapper: '72px', icon: 32 },
    };

    const fabClass = createStyle({
        position: 'fixed',
        ...position,
        width: sizes[size].wrapper,
        height: sizes[size].wrapper,
        borderRadius: '50%',
        padding: 0,
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 40,
    });

    return (
        <Button
            variant="primary"
            className={\`\${fabClass} \${className}\`}
            aria-label={label}
            {...props}
        >
            <Icon as={icon} size={sizes[size].icon} />
        </Button>
    );
};`,Bj=()=>{const[l,r]=b.useState("medium");return o.jsxs(o.Fragment,{children:[o.jsx(ee,{title:"Floating Action Button",description:'A circular button for a primary action that "floats" above the UI. The button is fixed to the viewport, not this container.',livePreview:o.jsx(T,{color:"textSecondary",children:"The FAB is positioned at the bottom right of the screen. Change its props below."}),propControls:o.jsx(Mj,{size:l,setSize:r}),documentation:Ej,fullSourceCode:Lj}),o.jsx(rr,{icon:du,label:"Add new item",onClick:()=>alert("FAB clicked!"),size:l},l)]})},$j=[{icon:pu,label:"Copy",onClick:()=>alert("Copy clicked")},{icon:nr,label:"Share",onClick:()=>alert("Share clicked")},{icon:zf,label:"Print",onClick:()=>alert("Print clicked")}],Ij="# Speed Dial\n\nA component that displays a floating action button (FAB) which, upon being clicked, animates to reveal a set of related, secondary actions.\n\n## Props\n\n*   `actions` (array of objects, required): An array of action objects to display. Each object must have:\n    *   `icon` (React.ElementType): The icon for the action's button.\n    *   `label` (string): The text label for the action (appears next to the button).\n    *   `onClick` (function): The callback function to execute when the action is clicked.\n*   `position` (object, optional): An object with `top`, `bottom`, `left`, `right` properties to position the Speed Dial. Defaults to `{ bottom: '2rem', right: '2rem' }`.\n\n## Usage\n\n```tsx\nimport { SpeedDial } from './src/components';\nimport { ShareIcon, PrintIcon, CopyIcon } from './src/icons';\n\nconst actions = [\n  { icon: CopyIcon, label: 'Copy', onClick: () => alert('Copy') },\n  { icon: ShareIcon, label: 'Share', onClick: () => alert('Share') },\n  { icon: PrintIcon, label: 'Print', onClick: () => alert('Print') },\n];\n\n<SpeedDial actions={actions} />\n```",Oj=`import React, { useState } from 'react';
import { FloatingActionButton } from '../FloatingActionButton/FloatingActionButton';
import { PlusIcon, TimesIcon } from '../../icons';
import { useStyles, useTheme } from '../../core';
import { useClickOutside } from '../../core/hooks/useInteractions';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

interface SpeedDialAction {
    icon: React.ElementType;
    label: string;
    onClick: () => void;
}

interface SpeedDialProps {
    actions: SpeedDialAction[];
    position?: { bottom?: string; right?: string; top?: string; left?: string };
}

export const SpeedDial: React.FC<SpeedDialProps> = ({ actions, position = { bottom: '2rem', right: '2rem' } }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const createStyle = useStyles('speed-dial');
    const containerRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

    const containerClass = createStyle({
        position: 'fixed',
        ...position,
        zIndex: 45,
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        gap: '1rem',
    });

    const actionClass = (index: number) => createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        transition: \`all 0.3s ease \${index * 0.05}s\`,
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
    });

    const labelClass = createStyle({
        backgroundColor: theme.colors.backgroundSecondary,
        color: theme.colors.text,
        padding: '0.25rem 0.75rem',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        whiteSpace: 'nowrap',
    });

    return (
        <div ref={containerRef} className={containerClass}>
            <FloatingActionButton
                icon={isOpen ? TimesIcon : PlusIcon}
                label={isOpen ? "Close actions" : "Open actions"}
                onClick={() => setIsOpen(!isOpen)}
            />
            <Stack direction="column-reverse" align="end" gap="1.5rem">
                {actions.map((action, index) => (
                    <div key={action.label} className={actionClass(index)}>
                        <div className={labelClass}>
                            <Text size={theme.typography.fontSizes.sm}>{action.label}</Text>
                        </div>
                        <FloatingActionButton
                            icon={action.icon}
                            label={action.label}
                            onClick={() => {
                                action.onClick();
                                setIsOpen(false);
                            }}
                            size="small"
                            position={{}}
                            style={{ position: 'relative' }}
                        />
                    </div>
                ))}
            </Stack>
        </div>
    );
};`,Hj=()=>o.jsxs(o.Fragment,{children:[o.jsx(ee,{title:"Speed Dial",description:"A FAB that displays a list of related actions when clicked. The button is fixed to the viewport, not this container.",livePreview:o.jsx(T,{color:"textSecondary",children:"The Speed Dial is positioned at the bottom right of the screen. Click it to see the actions."}),propControls:o.jsx(T,{color:"textSecondary",children:"The `actions` prop is a complex object not suitable for simple controls. The `position` prop is also demonstrated with a fixed value."}),documentation:Ij,fullSourceCode:Oj}),o.jsx(Kg,{actions:$j})]}),Uj=[{id:"item-1",label:"React"},{id:"item-2",label:"Vue"},{id:"item-3",label:"Angular"},{id:"item-4",label:"Svelte"}],Pj=`# Transfer List

A component that allows users to move items between two lists. It's useful for scenarios like selecting a subset of options from a larger pool.

## Props

*   \`initialLeft\` (array of objects, required): The initial set of items for the left list. Each object must have \`id\` and \`label\` properties.
*   \`initialRight\` (array of objects, required): The initial set of items for the right list.
*   \`leftTitle\` (string, optional, default: 'Choices'): The title for the left list.
*   \`rightTitle\` (string, optional, default: 'Chosen'): The title for the right list.

## Usage

\`\`\`tsx
import { TransferList } from './src/components';

const items = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
];

<TransferList initialLeft={items} initialRight={[]} />
\`\`\``,_j=`import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import { List, ListItem } from '../List/List';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button';
import { Stack } from '../Stack/Stack';
import { useTheme } from '../../core';

interface Item { id: string; label: string; }

interface TransferListProps {
    initialLeft: Item[];
    initialRight: Item[];
    leftTitle?: string;
    rightTitle?: string;
}

export const TransferList: React.FC<TransferListProps> = (props) => {
    /* ... internal logic for state and moving items ... */
    
    const CustomList = ({ title, items }: { title: string, items: Item[] }) => (
        <Card title={title} style={{ height: '300px', display: 'flex', flexDirection: 'column' }}>
            <List style={{ flex: 1, overflowY: 'auto' }}>
                {items.map(item => (
                    <ListItem key={item.id} onClick={() => handleToggle(item)}>
                        <Checkbox checked={checked.has(item.id)} label={item.label} readOnly />
                    </ListItem>
                ))}
            </List>
        </Card>
    );

    return (
        <Stack direction="row" align="center" gap="1rem">
            <div style={{ flex: 1 }}>
                <CustomList title={leftTitle} items={left} />
            </div>
            <Stack direction="column" gap="0.5rem">
                <Button onClick={moveRight} disabled={leftChecked.length === 0}>&gt;</Button>
                <Button onClick={moveLeft} disabled={rightChecked.length === 0}>&lt;</Button>
            </Stack>
            <div style={{ flex: 1 }}>
                <CustomList title={rightTitle} items={right} />
            </div>
        </Stack>
    );
};`,Gj=()=>o.jsx(ee,{title:"Transfer List",description:"A component for moving items between two lists.",livePreview:o.jsx(ix,{initialLeft:Uj,initialRight:[],leftTitle:"Available Frameworks",rightTitle:"Selected Frameworks"}),propControls:o.jsx(T,{color:"textSecondary",children:"The main props for this component (`initialLeft`, `initialRight`) are complex arrays. The preview demonstrates the component's functionality."}),documentation:Pj,fullSourceCode:_j}),Vj=`# Animated Block

An interactive demonstration of the \`useCurveAnimation\` hook. It allows you to visually test different animation timing functions like ease, bounce, and elastic.

## Props

*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

This component is primarily for demonstration purposes and is self-contained.

\`\`\`tsx
import { AnimatedBlock } from './src/components';

<AnimatedBlock />
\`\`\``,qj=`
import React, { useState } from 'react'
import { useCurveAnimation } from '../../core/hooks/useCurveAnimation'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'
import { CurveType } from '../../core/animation/CurveContextAnimation'

interface AnimatedBlockProps {
    className?: string
}

export const AnimatedBlock: React.FC<AnimatedBlockProps> = ({ className = '' }) => {
    const { theme } = useTheme()
    const createStyle = useStyles('animated-block')
    const [curveType, setCurveType] = useState<CurveType>('easeInOut')

    const animation = useCurveAnimation({
        duration: 1000,
        type: curveType,
        bounceStrength: 3,
        elasticity: 0.3
    })

    const blockClass = createStyle({
        width: '100px',
        height: '100px',
        backgroundColor: theme.colors.primary,
        borderRadius: '8px',
        transition: 'background-color 0.3s'
    })

    const containerClass = createStyle({
        padding: theme.spacing.lg,
        display: 'grid',
        gap: theme.spacing.md
    })

    const controlsClass = createStyle({
        display: 'grid',
        gap: theme.spacing.sm,
        gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))'
    })

    const buttonClass = createStyle({
        padding: \`\${theme.spacing.sm} \${theme.spacing.md}\`,
        backgroundColor: theme.colors.secondary,
        color: theme.colors.background,
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.9
        }
    })

    const curveTypes: CurveType[] = ['linear', 'easeIn', 'easeOut', 'easeInOut', 'bounce', 'elastic']

    return (
        <div className={\`\${containerClass} \${className}\`}>
            <div style={{ position: 'relative', height: '100px', overflow: 'hidden' }}>
                <div 
                className={blockClass}
                style={{ 
                    transform: \`translateX(\${animation.value}px)\`,
                    position: 'absolute'
                }}
                />
            </div>

            <div className={controlsClass}>
                {curveTypes.map(type => (
                <button
                    key={type}
                    className={buttonClass}
                    onClick={() => {
                        setCurveType(type)
                        animation.animate(animation.value === 0 ? 200 : 0)
                    }}
                >
                    {type}
                </button>
                ))}
            </div>

            <div>Progress: {Math.round(animation.progress * 100)}%</div>
        </div>
    )
}

export default AnimatedBlock`,Yj=()=>o.jsx(ee,{title:"Animated Block",description:"An interactive demonstration of the `useCurveAnimation` hook. The buttons in the preview control the animation. The 'Props' tab is empty as this is a self-contained demo component.",livePreview:o.jsx(yf,{}),initialCode:"<AnimatedBlock />",propControls:o.jsx(T,{color:"textSecondary",children:"This is a self-contained demo. Use the controls in the 'Live Preview' panel to test different animation curves."}),documentation:Vj,fullSourceCode:qj}),Fj=null,Xj=()=>{const[l,r]=b.useState(Fj),[c,i]=b.useState("audio/mpeg"),d=p=>{p?(l&&l.startsWith("blob:")&&URL.revokeObjectURL(l),r(URL.createObjectURL(p)),i(p.type)):(l&&l.startsWith("blob:")&&URL.revokeObjectURL(l),r(null))};return b.useEffect(()=>()=>{l&&l.startsWith("blob:")&&URL.revokeObjectURL(l)},[l]),o.jsx(ht,{children:o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Audio Player with Effects"}),o.jsx(T,{children:"A composable audio player with Web Audio API effects like EQ and a real-time FFT visualizer. Upload your own audio file to try it out."}),o.jsx(Tr,{onFileSelect:d}),!l&&o.jsx(T,{size:"sm",color:"textSecondary",style:{textAlign:"center",padding:"1rem"},children:"No audio file loaded. Upload one to use the player."}),l&&o.jsxs(gu,{children:[o.jsx(yu,{crossOrigin:"anonymous",children:o.jsx(bu,{src:l,type:c})},l),o.jsx(vu,{}),o.jsx(xu,{}),o.jsx(Yf,{})]})]})})},Kj=()=>o.jsx(ht,{children:o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Video Player"}),o.jsx(T,{children:"A composable video player. This example shows custom controls built from sub-components."}),o.jsxs(_u,{children:[o.jsx(Gu,{poster:"https://images.pexels.com/videos/3209828/free-video-3209828.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",children:o.jsx(gx,{src:"https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_25fps.mp4",type:"video/mp4"})}),o.jsx(fx,{}),o.jsx(xx,{style:{padding:"0 1rem 0.5rem"}})]})]})}),Qj=Array.from({length:50},(l,r)=>({x:r,y1:Math.sin(r/5)*50+50,y2:Math.cos(r/5)*25+30})),cf=[{x:1,y:50},{x:2,y:90},{x:3,y:30},{x:4,y:70},{x:5,y:45}],Zj={data:[[10,50,20],[80,10,90],[40,70,30]],rowLabels:["Alpha","Beta","Gamma"],colLabels:["X","Y","Z"]},Wj=[{series:"Product A",color:"#60a5fa",values:[{axis:"Usability",value:8},{axis:"Performance",value:9},{axis:"Features",value:6},{axis:"Support",value:7},{axis:"Price",value:5}]},{series:"Product B",color:"#f59e0b",values:[{axis:"Usability",value:6},{axis:"Performance",value:7},{axis:"Features",value:9},{axis:"Support",value:8},{axis:"Price",value:8}]}],Jj=[{value:45,color:"#60a5fa",label:"Desktop"},{value:35,color:"#f59e0b",label:"Mobile"},{value:20,color:"#4b5563",label:"Tablet"}],eT=()=>{const{theme:l}=_();return o.jsx(ht,{children:o.jsxs(D,{gap:"2rem",children:[o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Line & Area Chart"}),o.jsxs(Wc,{dataset:Qj,xAxis:[{dataKey:"x"}],series:[{type:"area",dataKey:"y2",color:l.colors.accent},{type:"line",dataKey:"y2",color:l.colors.accent},{type:"area",dataKey:"y1"},{type:"line",dataKey:"y1"}],className:"h-[300px]",style:{height:"300px"},children:[o.jsx(Sl,{dimension:"x"}),o.jsx(Sl,{dimension:"y"}),o.jsx(ag,{series:[{key:"y1",label:"Series 1",color:l.colors.primary,accessor:r=>r.y1},{key:"y2",label:"Series 2",color:l.colors.accent,accessor:r=>r.y2}]})]}),o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Bar Chart"}),o.jsxs(Wc,{dataset:cf,xAxis:[{dataKey:"x"}],series:[{type:"bar",dataKey:"y"}],className:"h-[300px]",style:{height:"300px"},children:[o.jsx(Sl,{dimension:"x",numberOfTicks:cf.length}),o.jsx(Sl,{dimension:"y"})]}),o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Specialty Charts"}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 items-center",children:[o.jsxs("div",{children:[o.jsx(T,{className:"text-center mb-4",children:"Radar Chart"}),o.jsx(tg,{data:Wj,size:250})]}),o.jsxs("div",{children:[o.jsx(T,{className:"text-center mb-4",children:"Radial Chart"}),o.jsx(ng,{data:Jj,size:250})]}),o.jsxs("div",{children:[o.jsx(T,{className:"text-center mb-4",children:"Heatmap"}),o.jsx(eg,{...Zj})]})]})]})})},tT=Array.from({length:20},(l,r)=>({x:r,y:Math.random()*30+10})),nT=Array.from({length:20},(l,r)=>({x:r,y:40-Math.random()*20})),oT=Array.from({length:20},(l,r)=>({x:r,y:25})),aT=`# ChartSparkline

A small, lightweight, standalone chart. It's typically used inline to show a trend at a glance, without axes or coordinates.

## Props

*   \`data\` (array, required): The dataset to be visualized.
*   \`xAccessor\` (function, required): A function to access the x-value from a data point.
*   \`yAccessor\` (function, required): A function to access the y-value from a data point.
*   \`width\` (number | string, optional): The width of the SVG element.
*   \`height\` (number | string, optional): The height of the SVG element.
*   \`color\` (string, optional): The color of the line and area fill. Defaults to the theme's primary color.

## Usage

\`\`\`tsx
import { ChartSparkline } from './src/components';

const data = Array.from({ length: 20 }, (_, i) => ({ x: i, y: Math.random() * 30 }));

<ChartSparkline
  data={data}
  xAccessor={d => d.x}
  yAccessor={d => d.y}
  height={40}
/>
\`\`\``,lT=`import React from 'react';
import { useTheme } from '../../core/theme/ThemeProvider';
import { createLinearScale } from '../../core/utils/scale';
import { hexToRgba } from '../../core/color/utils';

interface ChartSparklineProps { /*...*/ }

export const ChartSparkline: React.FC<ChartSparklineProps> = (props) => {
    /* ... internal logic for calculating path and scales ... */

    return (
        <svg 
            width={width} 
            height={height} 
            viewBox={\`0 0 \${viewBoxWidth} \${viewBoxHeight}\`} 
            preserveAspectRatio="none"
        >
            <path d={areaPath} fill={hexToRgba(lineColor, 0.1)} />
            <path d={linePath} fill="none" stroke={lineColor} />
            <circle cx={lastPoint.x} cy={lastPoint.y} r={strokeWidth * 1.2} fill={lineColor} />
        </svg>
    );
};`,sT=()=>{const{theme:l}=_();return o.jsx(ee,{title:"Sparkline",description:"A small, lightweight chart, typically used inline to show a trend at a glance.",livePreview:o.jsxs(nn,{minItemWidth:"150px",gap:"1rem",children:[o.jsx(gt,{children:o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{size:"0.875rem",color:l.colors.textSecondary,children:"Revenue"}),o.jsx(T,{size:"1.25rem",weight:"600",children:"$1,420"}),o.jsx(Qs,{data:tT,xAccessor:r=>r.x,yAccessor:r=>r.y,height:40})]})}),o.jsx(gt,{children:o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{size:"0.875rem",color:l.colors.textSecondary,children:"Subscriptions"}),o.jsx(T,{size:"1.25rem",weight:"600",children:"2,312"}),o.jsx(Qs,{data:nT,xAccessor:r=>r.x,yAccessor:r=>r.y,height:40,color:l.colors.accent})]})}),o.jsx(gt,{children:o.jsxs(D,{gap:"0.5rem",children:[o.jsx(T,{size:"0.875rem",color:l.colors.textSecondary,children:"Latency"}),o.jsx(T,{size:"1.25rem",weight:"600",children:"25ms"}),o.jsx(Qs,{data:oT,xAccessor:r=>r.x,yAccessor:r=>r.y,height:40,color:l.colors.secondary})]})})]}),propControls:o.jsx(T,{color:"textSecondary",children:"This is a presentational component. Its props are demonstrated in the preview."}),documentation:aT,fullSourceCode:lT})},rT=`<Stack gap="1rem">
  <Card title="From XML">
    <Text>This is a Card inside a Stack.</Text>
  </Card>
  <Layer z="10">
    <Card variant="glass">
      <Text>This Card is in a Layer component rendered from XML.</Text>
    </Card>
  </Layer>
</Stack>
`,iT="# XML Renderer\n\nA component that parses an XML-like string and renders it into corresponding React components from the library. It's a powerful tool for dynamic layout generation.\n\n## Props\n\n*   `xml` (string, required): The XML string to be parsed and rendered.\n*   `components` (object, optional): A map of tag names to React components.\n\n## Default Mapped Components\n*   `layer` -> `Layer`\n*   `layout` -> `Stack`\n*   `div`, `span`, `p` -> standard HTML tags",cT=`import React from 'react'
import { Layer } from '../Layer/Layer'
import { Stack } from '../Stack/Stack'

export type ComponentMap = { [tag: string]: React.ElementType; };
export interface XmlRendererProps { xml: string; components?: ComponentMap; }

const defaultMap: ComponentMap = { /* ... */ };
function parseAttributes(node: Element) { /* ... */ }
function nodeToElement(node: Node, map: ComponentMap): React.ReactNode { /* ... */ }

export const XmlRenderer: React.FC<XmlRendererProps> = ({ xml, components = {} }) => {
    const map = { ...defaultMap, ...components };
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, 'text/xml');
        const result = Array.from(doc.childNodes).map(/*...*/);
        return <>{result}</>;
    } catch (err) {
        return <div>{xml}</div>;
    }
};`,uT=()=>{const[l,r]=b.useState(rT);return o.jsx(ee,{title:"XML Renderer",description:"A component that parses an XML-like string and renders it into corresponding React components.",initialCode:l,propControls:o.jsx(T,{color:"textSecondary",children:"The XML for this component is directly editable in the 'Editable Code' panel."}),documentation:iT,fullSourceCode:cT})},dT=({data:l,onUpdateData:r})=>{const c=l.data?.value??0;return o.jsx("div",{style:{padding:"0 8px"},children:o.jsx(re,{type:"number",label:"Value",value:c,onChange:i=>r({value:parseFloat(i.target.value)||0})})})},pT=({data:l,onUpdateData:r})=>{const c=l.data?.value??50;return o.jsx("div",{style:{padding:"8px"},children:o.jsx(Xe,{min:0,max:100,value:c,onChange:i=>r({value:i}),showValue:!0})})},mT=({inputs:l})=>{const r=l.value,c=typeof r=="object"?JSON.stringify(r,null,2):r?.toString()??"N/A";return o.jsx("div",{style:{padding:"8px",minWidth:"100px",background:"rgba(0,0,0,0.2)",borderRadius:"4px"},children:o.jsx(T,{as:"pre",size:"12px",style:{whiteSpace:"pre-wrap",margin:0},children:c})})},Sx={label:"Number Input",inputs:[],outputs:[{id:"value",label:"Value",type:"number",color:"#60a5fa"}],component:dT,process:(l,r)=>({value:r?.value??0}),data:{value:10}},jx={label:"Slider Input",inputs:[],outputs:[{id:"value",label:"Value",type:"number",color:"#f59e0b"}],component:pT,process:(l,r)=>({value:r?.value??50}),data:{value:50}},Tx={label:"Add",inputs:[{id:"a",label:"A",type:"number",value:0},{id:"b",label:"B",type:"number",value:0}],outputs:[{id:"result",label:"Result",type:"number",color:"#10b981"}],process:l=>({result:(l.a??0)+(l.b??0)})},kx={label:"Subtract",inputs:[{id:"a",label:"A",type:"number",value:0},{id:"b",label:"B",type:"number",value:0}],outputs:[{id:"result",label:"Result",type:"number",color:"#ef4444"}],process:l=>({result:(l.a??0)-(l.b??0)})},su={label:"Display",inputs:[{id:"value",label:"Value",type:"any"}],outputs:[],component:mT},hT={"Number Input":Sx,"Slider Input":jx,Add:Tx,Subtract:kx,Display:su},wx=()=>{const{editorRef:l,zoom:r,setZoom:c,pan:i,setPan:d}=wn();return b.useEffect(()=>{const p=l.current;if(!p)return;const m=f=>{f.preventDefault();const x=p.getBoundingClientRect(),g=f.clientX-x.left,v=f.clientY-x.top,C=1.1,A=f.deltaY<0?r*C:r/C,j=(g-i.x)/r,k=(v-i.y)/r,z=g-j*A,B=v-k*A;c(A),d({x:z,y:B})};return p.addEventListener("wheel",m),()=>{p.removeEventListener("wheel",m)}},[l,r,c,i,d]),null},Ax=()=>{const{editorRef:l,createNode:r,pan:c,zoom:i,creatableNodeTypes:d}=wn(),[p,m]=b.useState({isOpen:!1,position:{x:0,y:0}}),f=b.useCallback(v=>{const C=d&&Object.keys(d).length>0,A=l.current,j=v.target;!A||!C||A.contains(j)&&(j.closest("[data-node-id]")||(v.preventDefault(),m({isOpen:!0,position:{x:v.clientX,y:v.clientY}})))},[l,d]);b.useEffect(()=>{const v=l.current;if(v)return v.addEventListener("contextmenu",f),()=>{v.removeEventListener("contextmenu",f)}},[l,f]);const x=v=>{const C=l.current;if(!C)return;const A=C.getBoundingClientRect(),j=(p.position.x-A.left-c.x)/i,k=(p.position.y-A.top-c.y)/i;r({...v,position:{x:j,y:k}}),m({isOpen:!1,position:{x:0,y:0}})},g=d?Object.entries(d).map(([v,C])=>({label:`Add ${v}`,onClick:()=>x(C)})):[];return g.length===0?null:o.jsx(sr,{isOpen:p.isOpen,onClose:()=>m({...p,isOpen:!1}),position:p.position,items:g})},fT=[{...Sx,id:"num1",position:{x:50,y:50},data:{value:100}},{...jx,id:"slider1",position:{x:50,y:200},data:{value:50}},{...Tx,id:"add1",position:{x:350,y:80}},{...kx,id:"sub1",position:{x:350,y:220}},{...su,id:"display1",position:{x:650,y:80}},{...su,id:"display2",position:{x:650,y:220}}],gT=[{id:"conn-1",sourceNodeId:"num1",sourceSocketId:"value",targetNodeId:"add1",targetSocketId:"a"},{id:"conn-2",sourceNodeId:"slider1",sourceSocketId:"value",targetNodeId:"add1",targetSocketId:"b"},{id:"conn-3",sourceNodeId:"num1",sourceSocketId:"value",targetNodeId:"sub1",targetSocketId:"a"},{id:"conn-4",sourceNodeId:"slider1",sourceSocketId:"value",targetNodeId:"sub1",targetSocketId:"b"},{id:"conn-5",sourceNodeId:"add1",sourceSocketId:"result",targetNodeId:"display1",targetSocketId:"value"},{id:"conn-6",sourceNodeId:"sub1",sourceSocketId:"result",targetNodeId:"display2",targetSocketId:"value"}],xT=()=>{const{processGraph:l}=wn();return o.jsxs(D,{gap:"1rem",children:[o.jsxs(D,{direction:"row",justify:"space-between",align:"center",children:[o.jsx(T,{children:"A visual editor for creating and connecting nodes. Use the scroll wheel to zoom and drag the background to pan. Right-click the background to add new nodes."}),o.jsx(be,{onClick:l,children:"Process Graph"})]}),o.jsx("div",{style:{height:"600px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:o.jsx(Ru,{plugins:[wx,Ax]})})]})},bT=()=>o.jsx(ht,{children:o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Graphics Node Editor"}),o.jsx(Au,{initialNodes:fT,initialConnections:gT,creatableNodeTypes:hT,children:o.jsx(xT,{})})]})}),Ar=(l,r)=>{const c=document.createElement("canvas");return c.width=l,c.height=r,c.getContext("2d").createImageData(l,r)},yT=({onUpdateData:l})=>{const r=c=>{if(!c){l({imageData:null});return}const i=new FileReader;i.onload=d=>{const p=new Image;p.onload=()=>{const m=document.createElement("canvas");m.width=p.width,m.height=p.height;const f=m.getContext("2d");if(f){f.drawImage(p,0,0);const x=f.getImageData(0,0,p.width,p.height);l({imageData:x})}},p.src=d.target?.result},i.readAsDataURL(c)};return o.jsx("div",{style:{padding:"8px",minWidth:"250px"},children:o.jsx(Tr,{onFileSelect:r})})},vT=({inputs:l})=>{const r=b.useRef(null),c=l.value;return b.useEffect(()=>{const i=r.current;i&&c&&(i.width=c.width,i.height=c.height,i.getContext("2d")?.putImageData(c,0,0))},[c]),o.jsx("div",{style:{padding:"8px",background:"rgba(0,0,0,0.3)",minHeight:"100px",minWidth:"100px"},children:c?o.jsx("canvas",{ref:r,style:{width:"100%",display:"block",borderRadius:"4px"}}):o.jsx(T,{size:"12px",color:"textSecondary",children:"Connect an image source"})})},CT=({data:l,onUpdateData:r})=>{const c=l.data?.brightness??0,i=l.data?.contrast??0;return o.jsx("div",{style:{padding:"8px",width:"200px"},children:o.jsxs(D,{children:[o.jsxs(T,{size:"12px",as:"span",children:["Brightness (",c,")"]}),o.jsx(Xe,{min:-100,max:100,value:c,onChange:d=>r({brightness:d})}),o.jsxs(T,{size:"12px",as:"span",children:["Contrast (",i,")"]}),o.jsx(Xe,{min:-100,max:100,value:i,onChange:d=>r({contrast:d})})]})})},Rx={label:"Load Image",inputs:[],outputs:[{id:"image",label:"Image",type:"image",color:"#9333ea"}],component:yT,process:(l,r)=>({image:r?.imageData??null}),data:{imageData:null}},Nx={label:"Display Image",inputs:[{id:"value",label:"Image",type:"image"}],outputs:[],component:vT},Dx={label:"Grayscale",inputs:[{id:"image",label:"Image",type:"image"}],outputs:[{id:"image",label:"Image",type:"image",color:"#9333ea"}],process:l=>{const r=l.image;if(!r)return{image:null};const c=Ar(r.width,r.height),i=r.data,d=c.data;for(let p=0;p<i.length;p+=4){const m=(i[p]+i[p+1]+i[p+2])/3;d[p]=m,d[p+1]=m,d[p+2]=m,d[p+3]=i[p+3]}return{image:c}}},ST={label:"Invert Colors",inputs:[{id:"image",label:"Image",type:"image"}],outputs:[{id:"image",label:"Image",type:"image",color:"#9333ea"}],process:l=>{const r=l.image;if(!r)return{image:null};const c=Ar(r.width,r.height),i=r.data,d=c.data;for(let p=0;p<i.length;p+=4)d[p]=255-i[p],d[p+1]=255-i[p+1],d[p+2]=255-i[p+2],d[p+3]=i[p+3];return{image:c}}},jT={label:"Sepia",inputs:[{id:"image",label:"Image",type:"image"}],outputs:[{id:"image",label:"Image",type:"image",color:"#9333ea"}],process:l=>{const r=l.image;if(!r)return{image:null};const c=Ar(r.width,r.height),i=r.data,d=c.data;for(let p=0;p<i.length;p+=4){const m=i[p],f=i[p+1],x=i[p+2];d[p]=Math.min(255,m*.393+f*.769+x*.189),d[p+1]=Math.min(255,m*.349+f*.686+x*.168),d[p+2]=Math.min(255,m*.272+f*.534+x*.131),d[p+3]=i[p+3]}return{image:c}}},TT={label:"Brightness / Contrast",inputs:[{id:"image",label:"Image",type:"image"}],outputs:[{id:"image",label:"Image",type:"image",color:"#9333ea"}],component:CT,data:{brightness:0,contrast:0},process:(l,r)=>{const c=l.image,{brightness:i=0,contrast:d=0}=r||{};if(!c)return{image:null};const p=Ar(c.width,c.height),m=c.data,f=p.data,x=259*(d+255)/(255*(259-d));for(let g=0;g<m.length;g+=4){let v=m[g]+i,C=m[g+1]+i,A=m[g+2]+i;v=x*(v-128)+128,C=x*(C-128)+128,A=x*(A-128)+128,f[g]=Math.max(0,Math.min(255,v)),f[g+1]=Math.max(0,Math.min(255,C)),f[g+2]=Math.max(0,Math.min(255,A)),f[g+3]=m[g+3]}return{image:p}}},kT={"Load Image":Rx,"Display Image":Nx,Grayscale:Dx,"Invert Colors":ST,Sepia:jT,"Brightness / Contrast":TT},wT=[{...Rx,id:"load1",position:{x:50,y:150}},{...Dx,id:"grayscale1",position:{x:400,y:150}},{...Nx,id:"display1",position:{x:750,y:150}}],AT=[{id:"conn-1",sourceNodeId:"load1",sourceSocketId:"image",targetNodeId:"grayscale1",targetSocketId:"image"},{id:"conn-2",sourceNodeId:"grayscale1",sourceSocketId:"image",targetNodeId:"display1",targetSocketId:"value"}],RT=()=>{const{processGraph:l}=wn();return o.jsxs(D,{gap:"1rem",children:[o.jsxs(D,{direction:"row",justify:"space-between",align:"center",children:[o.jsx(T,{children:'Upload an image, connect nodes to apply effects, and click "Process Graph" to see the result.'}),o.jsx(be,{onClick:l,children:"Process Graph"})]}),o.jsx("div",{style:{height:"600px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:o.jsx(Ru,{plugins:[wx,Ax]})})]})},zx=()=>o.jsx(ht,{children:o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Example: Photo Editor"}),o.jsx(Au,{initialNodes:wT,initialConnections:AT,creatableNodeTypes:kT,children:o.jsx(RT,{})})]})}),NT=()=>o.jsx(zx,{}),DT=()=>o.jsx(ht,{children:o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Example: Audio Player"}),o.jsx(T,{children:"A demonstration of a styled, composable audio player with custom controls and a real-time visualizer."}),o.jsxs(gu,{children:[o.jsx(yu,{crossOrigin:"anonymous",children:o.jsx(bu,{src:"https://cdn.pixabay.com/audio/2022/08/03/audio_51f6922b13.mp3",type:"audio/mpeg"})}),o.jsx(vu,{}),o.jsx(xu,{})]})]})}),zT=()=>o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#f59e0b",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),MT=()=>o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),o.jsx("polyline",{points:"13 2 13 9 20 9"})]}),uf=[{type:"folder",name:"Documents",modified:"Yesterday"},{type:"folder",name:"Photos",modified:"June 5, 2024"},{type:"file",name:"project-brief.pdf",modified:"June 3, 2024"},{type:"file",name:"logo-final.svg",modified:"May 28, 2024"}],ET=()=>o.jsx(ht,{children:o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Example: File Browser"}),o.jsx(T,{children:"A showcase of how components like Card, List, and Stack can be combined to build a common UI pattern."}),o.jsx(gt,{title:"My Files",children:o.jsx(Dl,{children:uf.map((l,r)=>o.jsxs(He.Fragment,{children:[o.jsx(eo,{children:o.jsxs(D,{direction:"row",gap:"1rem",align:"center",children:[l.type==="folder"?o.jsx(zT,{}):o.jsx(MT,{}),o.jsx(jo,{primary:l.name,secondary:l.modified})]})}),r<uf.length-1&&o.jsx(to,{})]},l.name))})})]})}),LT=()=>o.jsx(ht,{children:o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Example: Video Player"}),o.jsx(T,{children:"A simple demonstration of the styled video player component using the browser's native controls."}),o.jsx(_u,{children:o.jsx(Gu,{src:"https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_25fps.mp4",poster:"https://images.pexels.com/videos/3209828/free-video-3209828.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",controls:!0})})]})}),Zc=[{id:"google",name:"Google",type:"oauth"},{id:"github",name:"GitHub",type:"oauth"},{id:"credentials",name:"Email",type:"credentials",credentials:{email:{label:"Email Address",type:"email",placeholder:"you@example.com"},password:{label:"Password",type:"password",placeholder:"••••••••••"}}},{id:"magiclink",name:"Magic Link",type:"magiclink"}],BT=async(l,r)=>(console.log("Attempting sign in with:",l,r),await new Promise(c=>setTimeout(c,1e3)),l==="credentials"&&r?.password!=="password123"?{error:'Invalid password. Hint: the password is "password123".'}:l==="magiclink"?{success:`Check your email at ${r?.email} for a magic link!`}:Promise.resolve()),$T=()=>{const{addToast:l}=Ta(),[r,c]=b.useState("all"),i={all:Zc,credentials:Zc.filter(p=>p.type==="oauth"||p.type==="credentials"),magiclink:Zc.filter(p=>p.type==="oauth"||p.type==="magiclink")}[r],d=async(p,m)=>{const f=await BT(p,m);if(f)return f;l({title:"Sign In Successful!",description:`You are now signed in with ${p}.`,variant:"success"})};return o.jsx(ht,{children:o.jsxs(D,{gap:"1rem",children:[o.jsx(T,{as:"h2",size:"1.5rem",weight:"600",children:"Example: Advanced Sign-In Page"}),o.jsx(T,{children:"A showcase of the new, extensible authentication UI. Use the controls to switch between different provider configurations."}),o.jsx(Be,{value:r,onChange:p=>c(p),options:[{label:"All Providers",value:"all"},{label:"Credentials",value:"credentials"},{label:"Magic Link",value:"magiclink"}]}),o.jsx(nv,{providers:i,signIn:d,title:"Welcome Back",subtitle:"Sign in to continue to ZwheUI"},r)]})})},jn={general:[{id:"button",label:"Button",component:o.jsx(Uv,{})},{id:"icon",label:"Icon",component:o.jsx(Vv,{})},{id:"text",label:"Text",component:o.jsx(Xv,{})},{id:"link",label:"Link",component:o.jsx(Wv,{})},{id:"kbd",label:"Kbd",component:o.jsx(n1,{})},{id:"badge",label:"Badge",component:o.jsx(s1,{})},{id:"tag",label:"Tag",component:o.jsx(u1,{})},{id:"code",label:"Code",component:o.jsx(h1,{})}],layout:[{id:"box",label:"Box",component:o.jsx(q1,{})},{id:"flex",label:"Flex",component:o.jsx(K1,{})},{id:"center",label:"Center",component:o.jsx(J1,{})},{id:"stack",label:"Stack",component:o.jsx(b1,{})},{id:"grid",label:"Grid",component:o.jsx(S1,{})},{id:"container",label:"Container",component:o.jsx(w1,{})},{id:"aspect-ratio",label:"AspectRatio",component:o.jsx(o2,{})},{id:"divider",label:"Divider",component:o.jsx(r2,{})},{id:"sofa",label:"Sofa",component:o.jsx(D1,{})},{id:"header",label:"Header",component:o.jsx(L1,{})},{id:"footer",label:"Footer",component:o.jsx(I1,{})},{id:"sidebar",label:"Sidebar",component:o.jsx(P1,{})}],forms:[{id:"form-control",label:"FormControl",component:o.jsx(kC,{})},{id:"input",label:"Input",component:o.jsx(d2,{})},{id:"text-input",label:"TextInput",component:o.jsx(f2,{})},{id:"textarea",label:"Textarea",component:o.jsx(y2,{})},{id:"checkbox",label:"Checkbox",component:o.jsx(j2,{})},{id:"radio-group",label:"RadioGroup",component:o.jsx(A2,{})},{id:"switch",label:"Switch",component:o.jsx(z2,{})},{id:"select",label:"Select",component:o.jsx(B2,{})},{id:"combobox",label:"Combobox",component:o.jsx(U2,{})},{id:"slider",label:"Slider",component:o.jsx(V2,{})},{id:"number-input",label:"NumberInput",component:o.jsx(X2,{})},{id:"pin-input",label:"PinInput",component:o.jsx(NC,{})},{id:"editable",label:"Editable",component:o.jsx(EC,{})},{id:"file-upload",label:"FileUpload",component:o.jsx(Z2,{})},{id:"color-picker",label:"ColorPicker",component:o.jsx(tC,{})},{id:"date-picker",label:"DatePicker",component:o.jsx(nC,{})},{id:"search",label:"Search",component:o.jsx(sC,{})},{id:"rating",label:"Rating",component:o.jsx(uC,{})},{id:"toggle-button",label:"ToggleButton",component:o.jsx(mC,{})},{id:"icon-button",label:"IconButton",component:o.jsx(xC,{})},{id:"button-group",label:"ButtonGroup",component:o.jsx(CC,{})}],dataDisplay:[{id:"list",label:"List",component:o.jsx($C,{})},{id:"table",label:"Table",component:o.jsx(UC,{})},{id:"data-table",label:"DataTable",component:o.jsx(_C,{})},{id:"avatar",label:"Avatar",component:o.jsx(YC,{})},{id:"card",label:"Card",component:o.jsx(QC,{})},{id:"accordion",label:"Accordion",component:o.jsx(eS,{})},{id:"tree-view",label:"TreeView",component:o.jsx(nS,{})},{id:"x-node-tree",label:"XNodeTree",component:o.jsx(sS,{})},{id:"timeline",label:"Timeline",component:o.jsx(cS,{})},{id:"image",label:"Image",component:o.jsx(mS,{})}],feedback:[{id:"alert",label:"Alert",component:o.jsx(xS,{})},{id:"toast",label:"Toast",component:o.jsx(CS,{})},{id:"snackbar",label:"Snackbar",component:o.jsx(lj,{})},{id:"spinner",label:"Spinner",component:o.jsx(kS,{})},{id:"progress",label:"Progress",component:o.jsx(NS,{})},{id:"skeleton",label:"Skeleton",component:o.jsx(ES,{})},{id:"modal",label:"Modal",component:o.jsx(IS,{})},{id:"dialog",label:"Dialog",component:o.jsx(PS,{})},{id:"drawer",label:"Drawer",component:o.jsx(qS,{})},{id:"popover",label:"Popover",component:o.jsx(XS,{})},{id:"hover-card",label:"HoverCard",component:o.jsx(ZS,{})},{id:"backdrop",label:"Backdrop",component:o.jsx(tj,{})}],navigation:[{id:"nav",label:"Nav",component:o.jsx(cj,{})},{id:"breadcrumbs",label:"Breadcrumbs",component:o.jsx(mj,{})},{id:"pagination",label:"Pagination",component:o.jsx(xj,{})},{id:"tabs",label:"Tabs",component:o.jsx(vj,{})},{id:"stepper",label:"Stepper",component:o.jsx(Tj,{})},{id:"menu",label:"Menu",component:o.jsx(Rj,{})},{id:"dropdown",label:"Dropdown",component:o.jsx(zj,{})},{id:"fab",label:"FloatingActionButton",component:o.jsx(Bj,{})},{id:"speed-dial",label:"SpeedDial",component:o.jsx(Hj,{})},{id:"transfer-list",label:"TransferList",component:o.jsx(Gj,{})}],advanced:[{id:"animated-block",label:"AnimatedBlock",component:o.jsx(Yj,{})},{id:"audio",label:"Audio",component:o.jsx(Xj,{})},{id:"video",label:"Video",component:o.jsx(Kj,{})},{id:"charts",label:"Charts",component:o.jsx(eT,{})},{id:"sparkline",label:"Sparkline",component:o.jsx(sT,{})},{id:"xml-renderer",label:"XmlRenderer",component:o.jsx(uT,{})},{id:"graphics-node-editor",label:"GraphicsNodeEditor",component:o.jsx(bT,{})},{id:"photo-editor",label:"PhotoEditor",component:o.jsx(NT,{})}],examples:[{id:"signin-page",label:"Sign-In Page",component:o.jsx($T,{})},{id:"file-browser",label:"File Browser",component:o.jsx(ET,{})},{id:"video-player",label:"Video Player",component:o.jsx(LT,{})},{id:"audio-player",label:"Audio Player",component:o.jsx(DT,{})},{id:"photo-editor-example",label:"Photo Editor",component:o.jsx(zx,{})}]},df=Object.values(jn).flat(),IT=()=>{const[l,r]=b.useState("welcome"),{theme:c}=_(),i=b.useMemo(()=>l==="welcome"?o.jsx(Bv,{onNavigate:r}):df.find(p=>p.id===l)?.component||null,[l]),d=(p,m)=>{p.preventDefault(),r(m)};return o.jsxs("div",{style:{display:"flex",height:"100vh",width:"100vw",backgroundColor:c.colors.background},children:[o.jsx(Lu,{width:"280px",height:"auto",children:o.jsx(D,{justify:"space-between",style:{height:"100%"},children:o.jsxs(D,{gap:"2rem",style:{flex:1,minHeight:0,display:"flex",flexDirection:"column"},children:[o.jsxs("div",{onClick:p=>d(p,"welcome"),style:{cursor:"pointer",padding:"0 1rem"},children:[o.jsx(T,{as:"h1",size:"1.5rem",weight:"700",children:"ZwheUI"}),o.jsx(T,{size:"0.875rem",color:"textSecondary",children:"Component Showcase"})]}),o.jsx("div",{style:{flex:"1 1 0",minHeight:0,overflowY:"auto",paddingRight:"0.5rem"},children:o.jsxs(D,{gap:"1.5rem",children:[o.jsx(tn,{title:"Examples",children:o.jsx(Wn,{items:jn.examples,activeId:l,onClick:d})}),o.jsx(tn,{title:"General",children:o.jsx(Wn,{items:jn.general,activeId:l,onClick:d})}),o.jsx(tn,{title:"Layout",children:o.jsx(Wn,{items:jn.layout,activeId:l,onClick:d})}),o.jsx(tn,{title:"Forms & Input",children:o.jsx(Wn,{items:jn.forms,activeId:l,onClick:d})}),o.jsx(tn,{title:"Data Display",children:o.jsx(Wn,{items:jn.dataDisplay,activeId:l,onClick:d})}),o.jsx(tn,{title:"Feedback & Overlays",children:o.jsx(Wn,{items:jn.feedback,activeId:l,onClick:d})}),o.jsx(tn,{title:"Navigation",children:o.jsx(Wn,{items:jn.navigation,activeId:l,onClick:d})}),o.jsx(tn,{title:"Advanced",children:o.jsx(Wn,{items:jn.advanced,activeId:l,onClick:d})})]})})]})})}),o.jsxs("main",{style:{flex:1,display:"flex",flexDirection:"column",height:"100vh",minWidth:0},children:[o.jsxs(kn,{height:"60px",children:[o.jsx(kn.Left,{children:o.jsx(T,{weight:"600",size:"1.125rem",children:df.find(p=>p.id===l)?.label||"Welcome"})}),o.jsx(kn.Right,{children:o.jsx(o.Fragment,{})})]}),o.jsx("div",{style:{flex:1,overflowY:"auto",padding:"2rem"},children:o.jsx(nn,{minItemWidth:"600px",gap:"2rem",children:i})})]})]})},Wn=({items:l,activeId:r,onClick:c})=>o.jsx(o.Fragment,{children:l.map(i=>o.jsx(ur,{href:"#",isActive:r===i.id,onClick:d=>c(d,i.id),children:i.label},i.id))}),OT=()=>o.jsx(ff,{children:o.jsx(IT,{})}),HT=()=>o.jsx(ff,{children:o.jsx(lx,{children:o.jsx(Xg,{children:o.jsx(OT,{})})})}),Mx=document.getElementById("root");if(!Mx)throw new Error("Could not find root element to mount to");const UT=uy.createRoot(Mx);UT.render(o.jsx(He.StrictMode,{children:o.jsx(HT,{})}));
