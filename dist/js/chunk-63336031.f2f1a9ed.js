(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63336031"],{"0cb2":function(e,t,r){var a=r("7b0b"),c=Math.floor,o="".replace,l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,n=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,i,d,s){var u=r+e.length,b=i.length,p=n;return void 0!==d&&(d=a(d),p=l),o.call(s,p,(function(a,o){var l;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(u);case"<":l=d[o.slice(1,-1)];break;default:var n=+o;if(0===n)return a;if(n>b){var s=c(n/10);return 0===s?a:s<=b?void 0===i[s-1]?o.charAt(1):i[s-1]+o.charAt(1):a}l=i[n-1]}return void 0===l?"":l}))}},1276:function(e,t,r){"use strict";var a=r("d784"),c=r("44e7"),o=r("825a"),l=r("1d80"),n=r("4840"),i=r("8aa5"),d=r("50c4"),s=r("14c3"),u=r("9263"),b=r("9f7f"),p=b.UNSUPPORTED_Y,O=[].push,m=Math.min,h=4294967295;a("split",2,(function(e,t,r){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var a=String(l(this)),o=void 0===r?h:r>>>0;if(0===o)return[];if(void 0===e)return[a];if(!c(e))return t.call(a,e,o);var n,i,d,s=[],b=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=new RegExp(e.source,b+"g");while(n=u.call(m,a)){if(i=m.lastIndex,i>p&&(s.push(a.slice(p,n.index)),n.length>1&&n.index<a.length&&O.apply(s,n.slice(1)),d=n[0].length,p=i,s.length>=o))break;m.lastIndex===n.index&&m.lastIndex++}return p===a.length?!d&&m.test("")||s.push(""):s.push(a.slice(p)),s.length>o?s.slice(0,o):s}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var c=l(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,c,r):a.call(String(c),t,r)},function(e,c){var l=r(a,e,this,c,a!==t);if(l.done)return l.value;var u=o(e),b=String(this),O=n(u,RegExp),j=u.unicode,g=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(p?"g":"y"),f=new O(p?"^(?:"+u.source+")":u,g),v=void 0===c?h:c>>>0;if(0===v)return[];if(0===b.length)return null===s(f,b)?[b]:[];var N=0,V=0,y=[];while(V<b.length){f.lastIndex=p?0:V;var k,S=s(f,p?b.slice(V):b);if(null===S||(k=m(d(f.lastIndex+(p?V:0)),b.length))===N)V=i(b,V,j);else{if(y.push(b.slice(N,V)),y.length===v)return y;for(var w=1;w<=S.length-1;w++)if(y.push(S[w]),y.length===v)return y;V=N=k}}return y.push(b.slice(N)),y}]}),p)},"44e7":function(e,t,r){var a=r("861d"),c=r("c6b6"),o=r("b622"),l=o("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[l])?!!t:"RegExp"==c(e))}},"466d":function(e,t,r){"use strict";var a=r("d784"),c=r("825a"),o=r("50c4"),l=r("1d80"),n=r("8aa5"),i=r("14c3");a("match",1,(function(e,t,r){return[function(t){var r=l(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,r):new RegExp(t)[e](String(r))},function(e){var a=r(t,e,this);if(a.done)return a.value;var l=c(e),d=String(this);if(!l.global)return i(l,d);var s=l.unicode;l.lastIndex=0;var u,b=[],p=0;while(null!==(u=i(l,d))){var O=String(u[0]);b[p]=O,""===O&&(l.lastIndex=n(d,o(l.lastIndex),s)),p++}return 0===p?null:b}]}))},5319:function(e,t,r){"use strict";var a=r("d784"),c=r("825a"),o=r("50c4"),l=r("a691"),n=r("1d80"),i=r("8aa5"),d=r("0cb2"),s=r("14c3"),u=Math.max,b=Math.min,p=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var O=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=a.REPLACE_KEEPS_$0,h=O?"$":"$0";return[function(r,a){var c=n(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,c,a):t.call(String(c),r,a)},function(e,a){if(!O&&m||"string"===typeof a&&-1===a.indexOf(h)){var n=r(t,e,this,a);if(n.done)return n.value}var j=c(e),g=String(this),f="function"===typeof a;f||(a=String(a));var v=j.global;if(v){var N=j.unicode;j.lastIndex=0}var V=[];while(1){var y=s(j,g);if(null===y)break;if(V.push(y),!v)break;var k=String(y[0]);""===k&&(j.lastIndex=i(g,o(j.lastIndex),N))}for(var S="",w=0,x=0;x<V.length;x++){y=V[x];for(var D=String(y[0]),M=u(b(l(y.index),g.length),0),A=[],E=1;E<y.length;E++)A.push(p(y[E]));var B=y.groups;if(f){var _=[D].concat(A,M,g);void 0!==B&&_.push(B);var C=String(a.apply(void 0,_))}else C=d(D,g,M,A,B,a);M>=w&&(S+=g.slice(w,M)+C,w=M+D.length)}return S+g.slice(w)}]}))},"5b64":function(e,t,r){"use strict";r.r(t);r("ac1f"),r("5319");var a=r("7a23"),c={class:"bg-light-primary"},o={class:"container p-4"},l={class:"d-flex justify-content-between"},n=Object(a["createVNode"])("label",{for:"searchOrder",class:"search-icon"},[Object(a["createVNode"])("span",{class:"material-icons"}," search ")],-1),i={key:0,class:"ms-6 text-dark-primary"},d=Object(a["createVNode"])("p",null,"查找不到相關訂單",-1),s={class:"container py-4"},u={class:"table mb-6"},b=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{width:"150"},"建立日期"),Object(a["createVNode"])("th",null,"訂單編號"),Object(a["createVNode"])("th",{width:"120"},"金額"),Object(a["createVNode"])("th",{width:"120"},"付款狀態"),Object(a["createVNode"])("th",{width:"120"})])],-1),p={width:"150"},O={class:"pe-4"},m={width:"120"},h={width:"120"},j={width:"120"},g={class:"ms-2"},f=Object(a["createVNode"])("small",null,"訂單內容：",-1);function v(e,t,r,v,N,V){var y=Object(a["resolveComponent"])("alert"),k=Object(a["resolveComponent"])("order-edit-modal"),S=Object(a["resolveComponent"])("order-delete-modal"),w=Object(a["resolveComponent"])("pagination");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",c,[Object(a["createVNode"])("div",o,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",null,[n,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"search",id:"searchOrder",class:"search-bar",placeholder:"搜尋訂單編號","onUpdate:modelValue":t[1]||(t[1]=function(e){return N.searchOrder=e})},null,512),[[a["vModelText"],N.searchOrder]])]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-dark d-inline-flex me-2",onClick:t[2]||(t[2]=function(){return V.deleteAll&&V.deleteAll.apply(V,arguments)})}," 刪除所有訂單 ")]),0==V.filterOrder.length?(Object(a["openBlock"])(),Object(a["createBlock"])("small",i,[d])):Object(a["createCommentVNode"])("",!0)])]),Object(a["createVNode"])("div",s,[Object(a["createVNode"])("table",u,[b,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(V.filterOrder,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:e.id},[Object(a["createVNode"])("tr",{"data-bs-toggle":"collapse",href:"#collapseOrder-"+t,"aria-expanded":"false","aria-controls":"collapseOrder-"+t,class:"light-primary-hover",title:"點擊看詳細內容"},[Object(a["createVNode"])("td",p,Object(a["toDisplayString"])(e.create_at),1),Object(a["createVNode"])("td",O,Object(a["toDisplayString"])(e.id),1),Object(a["createVNode"])("td",m,Object(a["toDisplayString"])(e.total),1),Object(a["createVNode"])("td",h,[Object(a["createVNode"])("span",{class:["material-icons",{"text-success":e.is_paid,"text-secondary":!e.is_paid}]},Object(a["toDisplayString"])(e.is_paid?"credit_score":"credit_card_off"),3)]),Object(a["createVNode"])("td",j,[Object(a["createVNode"])("a",null,[Object(a["createVNode"])("span",{class:"material-icons",onClick:function(t){return V.openModal(e,"editOrder")}}," mode_edit ",8,["onClick"])]),Object(a["createVNode"])("a",g,[Object(a["createVNode"])("span",{class:"material-icons",onClick:function(t){return V.openModal(e,"deleteOrder")},"data-bs-toggle":"modal","data-bs-target":"#deleteModal"}," delete ",8,["onClick"])])])],8,["href","aria-controls"]),Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("td",{colspan:"5",class:"collapse border-bottom-0",id:"collapseOrder-"+t},[f,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("ul",{key:"product-"+t},[Object(a["createVNode"])("li",null,[Object(a["createVNode"])("small",null,Object(a["toDisplayString"])(e.start_date.replace(/-/g," / "))+" "+Object(a["toDisplayString"])(e.product.title)+" * "+Object(a["toDisplayString"])(e.qty),1)])])})),128))],8,["id"])])],64)})),128))])]),N.showAlert?(Object(a["openBlock"])(),Object(a["createBlock"])(y,{key:0,"alert-msg":N.alertMsg},null,8,["alert-msg"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(k,{"modal-title":e.modalTitle,temp:N.temp,onEmitOrderModal:V.editOrder},null,8,["modal-title","temp","onEmitOrderModal"]),Object(a["createVNode"])(S,{temp:N.temp,onEmitDeleteModal:V.deleteOrder},null,8,["temp","onEmitDeleteModal"]),N.pagination.total_pages>1?(Object(a["openBlock"])(),Object(a["createBlock"])(w,{key:1,page:N.pagination,onEmitPagination:V.getData},null,8,["page","onEmitPagination"])):Object(a["createCommentVNode"])("",!0)])],64)}var N=r("5530"),V=(r("99af"),r("159b"),r("1276"),r("4de4"),r("466d"),r("98ab")),y=r("1799"),k=r("7b17"),S=(r("b0c0"),{id:"orderModal",ref:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"}),w={class:"modal-dialog modal-xl"},x={class:"modal-content product-modal-bg"},D={class:"modal-body"},M=Object(a["createVNode"])("button",{type:"button",class:"close-modal-btn close-modal-lg-btn bg-light-primary","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createVNode"])("span",{class:"material-icons"}," clear ")],-1),A={class:"container-fluid"},E={class:"mb-4"},B=Object(a["createVNode"])("h2",null,"訂單內容",-1),_={class:"mb-2"},C=Object(a["createTextVNode"])(" 訂單編號： "),T=Object(a["createTextVNode"])(" 購買細項： "),I=Object(a["createTextVNode"])(" 客戶訂單備註： "),$={class:"form-check mb-2"},P=Object(a["createVNode"])("label",{class:"form-check-label",for:"paymentStatus"},"付款狀態",-1),R=Object(a["createVNode"])("h2",null,"客戶資料",-1),U={class:"d-flex justify-content-center"},F=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-dark w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function L(e,t,r,c,o,l){return Object(a["openBlock"])(),Object(a["createBlock"])("div",S,[Object(a["createVNode"])("div",w,[Object(a["createVNode"])("div",x,[Object(a["createVNode"])("div",D,[M,Object(a["createVNode"])("div",A,[Object(a["createVNode"])("div",E,[B,Object(a["createVNode"])("div",_,[Object(a["createVNode"])("ul",null,[Object(a["createVNode"])("li",null,[Object(a["createVNode"])("h3",null,[C,Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(o.tempOrder.id),1)])]),Object(a["createVNode"])("li",null,[Object(a["createVNode"])("h3",null,[T,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(o.tempOrder.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("ul",{key:t},[Object(a["createVNode"])("li",null,[Object(a["createVNode"])("p",null,Object(a["toDisplayString"])(e.product.category)+" / "+Object(a["toDisplayString"])(e.product.title)+" * "+Object(a["toDisplayString"])(e.qty),1),Object(a["createVNode"])("p",null,"NT."+Object(a["toDisplayString"])(e.final_total),1)])])})),128))])]),Object(a["createVNode"])("li",null,[Object(a["createVNode"])("h3",null,[I,Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(o.tempOrder.message),1)])])])]),Object(a["createVNode"])("div",$,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"checkbox",class:"form-check-input",id:"paymentStatus","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.tempOrder.is_paid=e})},null,512),[[a["vModelCheckbox"],o.tempOrder.is_paid]]),P]),R,Object(a["createVNode"])("ul",null,[Object(a["createVNode"])("li",null,Object(a["toDisplayString"])(o.tempOrder.user.name)+" "+Object(a["toDisplayString"])("male"==o.tempOrder.user.gender?"先生":"女士"),1),Object(a["createVNode"])("li",null,"身分證字號："+Object(a["toDisplayString"])(o.tempOrder.user.idNum),1),Object(a["createVNode"])("li",null,"護照號碼："+Object(a["toDisplayString"])(o.tempOrder.user.passportNum),1),Object(a["createVNode"])("li",null,"聯繫電話："+Object(a["toDisplayString"])(o.tempOrder.user.tel),1),Object(a["createVNode"])("li",null,"聯繫信箱："+Object(a["toDisplayString"])(o.tempOrder.user.email),1),Object(a["createVNode"])("li",null,"住址："+Object(a["toDisplayString"])(o.tempOrder.user.address),1)])]),Object(a["createVNode"])("div",U,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary w-25 d-block",onClick:t[2]||(t[2]=function(t){return e.$emit("emit-order-modal",o.tempOrder)})},Object(a["toDisplayString"])(r.modalTitle),1),F])])])])])],512)}var q={props:["modalTitle","temp"],data:function(){return{tempOrder:{create_at:"",id:"",is_paid:!1,message:"",num:0,products:{},total:0,user:{address:"",email:"",gender:"",idNum:"",name:"",passportNum:"",tel:""}}}},watch:{temp:function(){this.tempOrder=Object(N["a"])({},this.temp)}}};q.render=L;var J=q,G=r("ec05"),K={data:function(){return{orders:[],temp:{},pagination:{},orderModal:{},deleteModal:{},searchOrder:"",showAlert:!1,alertMsg:""}},components:{alert:V["a"],pagination:y["a"],orderEditModal:J,orderDeleteModal:G["a"]},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/orders/?page=").concat(t)).then((function(t){if(t.data.success){var r=t.data;e.orders=r.orders,e.orders.forEach((function(t,r){if("number"===typeof t.create_at){var a=new Date(1e3*t.create_at).toISOString().split("T")[0].replace(/-/g," / ");e.orders[r].create_at=a}})),e.pagination=t.data.pagination}else e.customAlert(t.data.message)})).catch((function(t){e.customAlert(t.response)}))},customAlert:function(e){this.alertMsg=e,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1},openModal:function(e,t){switch(t){case"editOrder":this.modalTitle="完成編輯",this.temp=Object(N["a"])({},e),this.orderModal.show();break;case"deleteOrder":this.temp=Object(N["a"])({},e);break;default:break}},clearModal:function(){this.temp={}},editOrder:function(e){var t=this,r={};r.data=Object(N["a"])({},e);var a=e.id;this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/order/").concat(a),r).then((function(e){e.data.success?(t.orderModal.hide(),t.customAlert("編輯成功"),t.getData(),window.setTimeout(t.closeCustomAlert,5e3)):t.customAlert(e.data.message)})).catch((function(e){t.customAlert(e.response)}))},deleteOrder:function(){var e=this,t=this.temp.id;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/order/").concat(t)).then((function(t){t.data.success?(e.customAlert("刪除成功"),e.getData(),e.clearModal(),e.deleteModal.hide(),window.setTimeout(e.closeCustomAlert,5e3)):e.customAlert(t.data.message)})).catch((function(t){e.customAlert(t.response)}))},deleteAll:function(){var e=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/orders/all")).then((function(t){t.data.success?(e.customAlert("刪除成功"),e.getData(),window.setTimeout(e.closeCustomAlert,5e3)):e.customAlert(t.data.message)})).catch((function(t){e.customAlert(t.response)}))}},computed:{filterOrder:function(){var e=this;return""!==this.searchOrder?this.orders.filter((function(t){return t.id.match(e.searchOrder)})):this.orders}},created:function(){this.getData()},mounted:function(){this.orderModal=new k["a"](document.getElementById("orderModal"),{keyboard:!1}),this.deleteModal=new k["a"](document.getElementById("deleteModal"),{keyboard:!1})}};K.render=v;t["default"]=K},b0c0:function(e,t,r){var a=r("83ab"),c=r("9bf2").f,o=Function.prototype,l=o.toString,n=/^\s*function ([^ (]*)/,i="name";a&&!(i in o)&&c(o,i,{configurable:!0,get:function(){try{return l.call(this).match(n)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-63336031.f2f1a9ed.js.map