(function(e){function n(n){for(var c,r,a=n[0],d=n[1],i=n[2],f=0,l=[];f<a.length;f++)r=a[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);h&&h(n);while(l.length)l.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var a=t[r];0!==o[a]&&(c=!1)}c&&(u.splice(n--,1),e=d(d.s=t[0]))}return e}var c={},r={app:0},o={app:0},u=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-0a012613":"68a6704b","chunk-1830dc1e":"07d07ef5","chunk-1d761cea":"01cb8f16","chunk-2d21a3d2":"8d777903","chunk-2d21e30b":"c612d36c","chunk-31d0fd01":"5336151c","chunk-4053fc30":"a4d2d14a","chunk-d17c8740":"c892e3e7","chunk-baa0722c":"08f82eaa","chunk-63336031":"a8653df9","chunk-ece1776a":"89434fcd","chunk-e81e517a":"1ee91224"}[e]+".js"}function d(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-31d0fd01":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-0a012613":"31d6cfe0","chunk-1830dc1e":"31d6cfe0","chunk-1d761cea":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d21e30b":"31d6cfe0","chunk-31d0fd01":"1fead564","chunk-4053fc30":"31d6cfe0","chunk-d17c8740":"31d6cfe0","chunk-baa0722c":"31d6cfe0","chunk-63336031":"31d6cfe0","chunk-ece1776a":"31d6cfe0","chunk-e81e517a":"31d6cfe0"}[e]+".css",o=d.p+c,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var i=u[a],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===c||f===o))return n()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){i=l[a],f=i.getAttribute("data-href");if(f===c||f===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var c=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],h.parentNode.removeChild(h),t(u)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){r[e]=0})));var c=o[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=o[e]=[n,t]}));n.push(c[2]=u);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.src=a(e);var l=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",l.name="ChunkLoadError",l.type=c,l.request=r,t[1](l)}o[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},d.m=e,d.c=c,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)d.d(t,c,function(n){return e[n]}.bind(null,c));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/tasteof/dist/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var h=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var c=t("7a23"),r=t("bc3a"),o=t.n(r),u=t("2106"),a=t.n(u),d=t("7bb1"),i=t("3aa8"),f=t("cbdf"),l=t("9457"),h=t("7b17"),p=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),s=[{path:"/",name:"首頁",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))},children:[{path:"",name:"首頁",component:function(){return t.e("chunk-2d21e30b").then(t.bind(null,"d504"))}},{path:"product_list",name:"前台產品頁",component:function(){return t.e("chunk-1d761cea").then(t.bind(null,"96fc"))}},{path:"product/:id",name:"前台產品細節頁",component:function(){return Promise.all([t.e("chunk-31d0fd01"),t.e("chunk-4053fc30")]).then(t.bind(null,"d2f1"))},props:function(e){return{id:e.params.id}}},{path:"cart",name:"前台購物車頁",component:function(){return t.e("chunk-1830dc1e").then(t.bind(null,"b789"))}}]},{path:"/login",name:"登入頁",component:function(){return t.e("chunk-0a012613").then(t.bind(null,"676a"))}},{path:"/admin",component:function(){return t.e("chunk-e81e517a").then(t.bind(null,"3530"))},children:[{path:"product",name:"後台產品頁",component:function(){return Promise.all([t.e("chunk-d17c8740"),t.e("chunk-ece1776a")]).then(t.bind(null,"4bec"))}},{path:"order",name:"後台訂單頁",component:function(){return Promise.all([t.e("chunk-d17c8740"),t.e("chunk-63336031")]).then(t.bind(null,"5b64"))}},{path:"coupon",name:"後台優惠券頁",component:function(){return Promise.all([t.e("chunk-d17c8740"),t.e("chunk-31d0fd01"),t.e("chunk-baa0722c")]).then(t.bind(null,"9b31"))}}]}],b=Object(p["a"])({history:Object(p["b"])(),routes:s}),m=b;function k(e,n){var t=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(t)}t("9acd");const v={};v.render=k;var g=v;Object.keys(i["a"]).forEach((function(e){Object(d["e"])(e,i["a"][e])})),Object(d["d"])({generateMessage:Object(f["a"])({zh_TW:l}),validateOnInput:!0}),Object(f["b"])("zh_TW"),Object(c["createApp"])(g).use(m).use(a.a,o.a).use(h["default"]).component("Form",d["c"]).component("Field",d["b"]).component("ErrorMessage",d["a"]).mount("#app")},"9acd":function(e,n,t){"use strict";t("d91c")},d91c:function(e,n,t){}});
//# sourceMappingURL=app.b2120536.js.map