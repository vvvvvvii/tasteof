(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64810db8"],{"0cb2":function(e,t,c){var a=c("7b0b"),n=Math.floor,r="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,c,s,l,u){var d=c+e.length,b=s.length,f=i;return void 0!==l&&(l=a(l),f=o),r.call(u,f,(function(a,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,c);case"'":return t.slice(d);case"<":o=l[r.slice(1,-1)];break;default:var i=+r;if(0===i)return a;if(i>b){var u=n(i/10);return 0===u?a:u<=b?void 0===s[u-1]?r.charAt(1):s[u-1]+r.charAt(1):a}o=s[i-1]}return void 0===o?"":o}))}},"14c3":function(e,t,c){var a=c("c6b6"),n=c("9263");e.exports=function(e,t){var c=e.exec;if("function"===typeof c){var r=c.call(e,t);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"1dde":function(e,t,c){var a=c("d039"),n=c("b622"),r=c("2d00"),o=n("species");e.exports=function(e){return r>=51||!a((function(){var t=[],c=t.constructor={};return c[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},3530:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n={class:"navbar navbar-expand-lg navbar-dark bg-primary"},r={class:"container-fluid align-items-center"},o=Object(a["createTextVNode"])(" 旅味 "),i={class:"collapse navbar-collapse justify-content-between",id:"navbarSupportedContent"},s={class:"navbar-nav"},l={class:"nav-item"},u=Object(a["createTextVNode"])(" 管理產品 "),d={class:"nav-item"},b=Object(a["createTextVNode"])(" 管理訂單 "),f={class:"nav-item"},h=Object(a["createTextVNode"])(" 管理優惠券 "),p={class:"nav-item"},v=Object(a["createTextVNode"])(" 管理文章 "),x={class:"navbar-nav"},g={class:"nav-item"},m=Object(a["createVNode"])("span",{class:"material-icons"}," account_circle ",-1),O=Object(a["createVNode"])("li",{class:"nav-item"},[Object(a["createVNode"])("a",{class:"nav-link"},[Object(a["createVNode"])("span",{class:"material-icons"}," settings ")])],-1),j={class:"modal fade",ref:"accountModal",tabindex:"-1","aria-labelledby":"accountModalLabel","aria-hidden":"true"},N={class:"modal-dialog modal-sm"},k={class:"modal-content logout-bg"},V={class:"modal-body px-3"},E={class:"container-fluid"},y={class:"row justify-content-center"},T={class:"col-11"},w=Object(a["createVNode"])("button",{type:"button",class:"close-modal-btn close-modal-sm-btn bg-light-primary","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createVNode"])("span",{class:"material-icons"}," clear ")],-1),$={class:"text-center"},S=Object(a["createVNode"])("span",{class:"logout-icon material-icons text-danger mb-2"}," account_circle ",-1),C={class:"mb-6 text-danger"},A={class:"text-start d-inline-block text-dark"},_={class:"mb-2"},R=Object(a["createTextVNode"])(" 登入時間："),D=Object(a["createVNode"])("br",null,null,-1),B={class:"mb-6"},I=Object(a["createTextVNode"])(" 有效期限："),M=Object(a["createVNode"])("br",null,null,-1),L=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark d-none",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),P=Object(a["createVNode"])("p",{class:"ms-1"},"登出",-1);function U(e,t,c,U,K,F){var G=this,J=Object(a["resolveComponent"])("router-link"),X=Object(a["resolveComponent"])("router-view"),Y=Object(a["resolveComponent"])("alert");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("nav",n,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("h1",null,[Object(a["createVNode"])(J,{href:"#",to:"/",class:"logo"},{default:Object(a["withCtx"])((function(){return[o]})),_:1})]),Object(a["createVNode"])("div",i,[Object(a["createVNode"])("ul",s,[Object(a["createVNode"])("li",l,[Object(a["createVNode"])(J,{to:"/admin/product",class:"nav-link","aria-current":"true","active-class":"active"},{default:Object(a["withCtx"])((function(){return[u]})),_:1})]),Object(a["createVNode"])("li",d,[Object(a["createVNode"])(J,{to:"/admin/order",class:"nav-link","active-class":"active"},{default:Object(a["withCtx"])((function(){return[b]})),_:1})]),Object(a["createVNode"])("li",f,[Object(a["createVNode"])(J,{to:"/admin/coupon",class:"nav-link","active-class":"active"},{default:Object(a["withCtx"])((function(){return[h]})),_:1})]),Object(a["createVNode"])("li",p,[Object(a["createVNode"])(J,{to:"/admin/article",class:"nav-link","active-class":"active"},{default:Object(a["withCtx"])((function(){return[v]})),_:1})])]),Object(a["createVNode"])("ul",x,[Object(a["createVNode"])("li",g,[Object(a["createVNode"])("a",{class:"nav-link",onClick:t[1]||(t[1]=function(e){return F.openModal(G.accountBsModal)})},[m])]),O])])])]),Object(a["createVNode"])("div",j,[Object(a["createVNode"])("div",N,[Object(a["createVNode"])("div",k,[Object(a["createVNode"])("div",V,[Object(a["createVNode"])("div",E,[Object(a["createVNode"])("div",y,[Object(a["createVNode"])("div",T,[w,Object(a["createVNode"])("div",$,[S,Object(a["createVNode"])("h2",C,Object(a["toDisplayString"])(this.accountData.hexLoginName),1),Object(a["createVNode"])("ul",A,[Object(a["createVNode"])("li",_,[R,D,Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(this.accountData.hexTokenStart),1)]),Object(a["createVNode"])("li",B,[I,M,Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(this.accountData.hexTokenExpired),1)])]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary w-50 mx-auto\n                    d-flex justify-content-center align-items-center",ref:"logoutBtn",onClick:t[2]||(t[2]=function(){return F.logout&&F.logout.apply(F,arguments)})},[L,P],512)])])])])])])])],512),K.checkSuccess?(Object(a["openBlock"])(),Object(a["createBlock"])(X,{key:0})):Object(a["createCommentVNode"])("",!0),K.showAlert?(Object(a["openBlock"])(),Object(a["createBlock"])(Y,{key:1,"alert-msg":K.alertMsg},null,8,["alert-msg"])):Object(a["createCommentVNode"])("",!0)],64)}c("ac1f"),c("5319"),c("159b"),c("b64b"),c("99af");var K=c("98ab"),F=c("7b17"),G={data:function(){return{checkSuccess:!1,accountBsModal:"",accountData:{hexLoginName:"",hexToken:"",hexTokenStart:"",hexTokenExpired:""},showAlert:!1,alertMsg:""}},components:{alert:K["a"]},methods:{checkLogin:function(){var e=this,t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),c=document.cookie.replace(/(?:(?:^|.*;\s*)hexLoginName\s*=\s*([^;]*).*$)|^.*$/,"$1"),a=document.cookie.replace(/(?:(?:^|.*;\s*)hexTokenStart\s*=\s*([^;]*).*$)|^.*$/,"$1"),n=document.cookie.replace(/(?:(?:^|.*;\s*)hexTokenExpired\s*=\s*([^;]*).*$)|^.*$/,"$1");if(this.accountData.hexLoginName=c,this.accountData.hexToken=t,this.accountData.hexTokenStart=a,this.accountData.hexTokenExpired=n,t){this.$http.defaults.headers.common.Authorization="".concat(t);var r={api_token:this.token};this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/user/check"),r).then((function(t){t.data.success?e.checkSuccess=!0:(e.customAlert("您尚未登入"),window.setTimeout(e.closeCustomAlert,5e3),e.$router.push("/login"))}))}else this.customAlert("您尚未登入"),window.setTimeout(this.closeCustomAlert,5e3),this.$router.push("/login")},customAlert:function(e){this.alertMsg=e,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1},openModal:function(e){e.show()},logout:function(){var e=this,t=this.$refs.logoutBtn;t.classList.add("disabled"),t.children[0].classList.remove("d-none"),Object.keys(this.accountData).forEach((function(t){document.cookie="".concat(t,"=").concat(e.accountData.item,";expires=Thu, 01-Jan-70 00:00:01 GMT;path=/")})),t.classList.remove("disabled"),t.children[0].classList.add("d-none"),this.customAlert("已成功登出"),window.setTimeout(this.closeCustomAlert,5e3),this.accountBsModal.hide(),this.$router.push("/")}},mounted:function(){this.accountBsModal=new F["a"](this.$refs.accountModal),this.checkLogin()}};G.render=U;t["default"]=G},5319:function(e,t,c){"use strict";var a=c("d784"),n=c("825a"),r=c("50c4"),o=c("a691"),i=c("1d80"),s=c("8aa5"),l=c("0cb2"),u=c("14c3"),d=Math.max,b=Math.min,f=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,c,a){var h=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=a.REPLACE_KEEPS_$0,v=h?"$":"$0";return[function(c,a){var n=i(this),r=void 0==c?void 0:c[e];return void 0!==r?r.call(c,n,a):t.call(String(n),c,a)},function(e,a){if(!h&&p||"string"===typeof a&&-1===a.indexOf(v)){var i=c(t,e,this,a);if(i.done)return i.value}var x=n(e),g=String(this),m="function"===typeof a;m||(a=String(a));var O=x.global;if(O){var j=x.unicode;x.lastIndex=0}var N=[];while(1){var k=u(x,g);if(null===k)break;if(N.push(k),!O)break;var V=String(k[0]);""===V&&(x.lastIndex=s(g,r(x.lastIndex),j))}for(var E="",y=0,T=0;T<N.length;T++){k=N[T];for(var w=String(k[0]),$=d(b(o(k.index),g.length),0),S=[],C=1;C<k.length;C++)S.push(f(k[C]));var A=k.groups;if(m){var _=[w].concat(S,$,g);void 0!==A&&_.push(A);var R=String(a.apply(void 0,_))}else R=l(w,g,$,S,A,a);$>=y&&(E+=g.slice(y,$)+R,y=$+w.length)}return E+g.slice(y)}]}))},8418:function(e,t,c){"use strict";var a=c("c04e"),n=c("9bf2"),r=c("5c6c");e.exports=function(e,t,c){var o=a(t);o in e?n.f(e,o,r(0,c)):e[o]=c}},"8aa5":function(e,t,c){"use strict";var a=c("6547").charAt;e.exports=function(e,t,c){return t+(c?a(e,t).length:1)}},9263:function(e,t,c){"use strict";var a=c("ad6d"),n=c("9f7f"),r=c("5692"),o=RegExp.prototype.exec,i=r("native-string-replace",String.prototype.replace),s=o,l=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=n.UNSUPPORTED_Y||n.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],b=l||d||u;b&&(s=function(e){var t,c,n,r,s=this,b=u&&s.sticky,f=a.call(s),h=s.source,p=0,v=e;return b&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),v=String(e).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==e[s.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,p++),c=new RegExp("^(?:"+h+")",f)),d&&(c=new RegExp("^"+h+"$(?!\\s)",f)),l&&(t=s.lastIndex),n=o.call(b?c:s,v),b?n?(n.input=n.input.slice(p),n[0]=n[0].slice(p),n.index=s.lastIndex,s.lastIndex+=n[0].length):s.lastIndex=0:l&&n&&(s.lastIndex=s.global?n.index+n[0].length:t),d&&n&&n.length>1&&i.call(n[0],c,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(n[r]=void 0)})),n}),e.exports=s},"98ab":function(e,t,c){"use strict";var a=c("7a23"),n={class:"alert alert-primary alert-dismissible fade show",role:"alert"};function r(e,t,c,r,o,i){return Object(a["openBlock"])(),Object(a["createBlock"])("div",n,Object(a["toDisplayString"])(c.alertMsg),1)}var o={props:["alertMsg"]};o.render=r;t["a"]=o},"99af":function(e,t,c){"use strict";var a=c("23e7"),n=c("d039"),r=c("e8b5"),o=c("861d"),i=c("7b0b"),s=c("50c4"),l=c("8418"),u=c("65f0"),d=c("1dde"),b=c("b622"),f=c("2d00"),h=b("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",x=f>=51||!n((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),g=d("concat"),m=function(e){if(!o(e))return!1;var t=e[h];return void 0!==t?!!t:r(e)},O=!x||!g;a({target:"Array",proto:!0,forced:O},{concat:function(e){var t,c,a,n,r,o=i(this),d=u(o,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(r=-1===t?o:arguments[t],m(r)){if(n=s(r.length),b+n>p)throw TypeError(v);for(c=0;c<n;c++,b++)c in r&&l(d,b,r[c])}else{if(b>=p)throw TypeError(v);l(d,b++,r)}return d.length=b,d}})},"9f7f":function(e,t,c){"use strict";var a=c("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,c){"use strict";var a=c("23e7"),n=c("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,c){"use strict";var a=c("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,c){"use strict";c("ac1f");var a=c("6eeb"),n=c("9263"),r=c("d039"),o=c("b622"),i=c("9112"),s=o("species"),l=RegExp.prototype,u=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),b=o("replace"),f=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),h=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var c="ab".split(e);return 2!==c.length||"a"!==c[0]||"b"!==c[1]}));e.exports=function(e,t,c,b){var p=o(e),v=!r((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),x=v&&!r((function(){var t=!1,c=/a/;return"split"===e&&(c={},c.constructor={},c.constructor[s]=function(){return c},c.flags="",c[p]=/./[p]),c.exec=function(){return t=!0,null},c[p](""),!t}));if(!v||!x||"replace"===e&&(!u||!d||f)||"split"===e&&!h){var g=/./[p],m=c(p,""[e],(function(e,t,c,a,r){var o=t.exec;return o===n||o===l.exec?v&&!r?{done:!0,value:g.call(t,c,a)}:{done:!0,value:e.call(c,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),O=m[0],j=m[1];a(String.prototype,e,O),a(l,p,2==t?function(e,t){return j.call(e,this,t)}:function(e){return j.call(e,this)})}b&&i(l[p],"sham",!0)}}}]);
//# sourceMappingURL=chunk-64810db8.339364b5.js.map