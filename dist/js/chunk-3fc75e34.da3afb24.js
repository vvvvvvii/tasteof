(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fc75e34"],{"212e":function(e,t,c){"use strict";var a=c("7a23"),o={id:"deleteModal",ref:"deleteModal",class:"modal fade",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},r={class:"modal-dialog"},l={class:"modal-content delete-modal-bg"},s={class:"modal-body"},d=Object(a["createVNode"])("div",{class:"text-end"},[Object(a["createVNode"])("button",{type:"button",class:"bg-transparent border-0 p-2 text-secondary h3","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createVNode"])("i",{class:"bi bi-x-lg"})])],-1),n={class:"delete-modal-inner-bg mb-4"},i={key:0,class:"text-center"},b={class:"h3 mb-2"},p=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),O={key:1,class:"text-center"},m={class:"h3 mb-2"},u=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),j={key:2,class:"text-center"},h={class:"h3 mb-2"},g=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),k={key:3,class:"text-center"},N={class:"h3 mb-2"},y=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),V={class:"d-flex justify-content-center"},f=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function B(e,t,c,B,v,w){return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",s,[d,Object(a["createVNode"])("div",n,[v.tempItem.hasOwnProperty("is_mainProduct")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",i,[Object(a["createVNode"])("p",b,Object(a["toDisplayString"])(v.tempItem.title),1),p])):v.tempItem.hasOwnProperty("code")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",O,[Object(a["createVNode"])("p",m,"優惠券代碼："+Object(a["toDisplayString"])(v.tempItem.code),1),u])):v.tempItem.hasOwnProperty("user")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",j,[Object(a["createVNode"])("p",h,"訂單編號："+Object(a["toDisplayString"])(v.tempItem.id),1),g])):v.tempItem.hasOwnProperty("author")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",k,[Object(a["createVNode"])("p",N,Object(a["toDisplayString"])(v.tempItem.title),1),y])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("div",V,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary w-25 d-block",onClick:t[1]||(t[1]=function(t){return e.$emit("emit-delete-modal")})}," 確認刪除 "),f])])])])],512)}var v=c("5530"),w={props:["temp"],data:function(){return{tempItem:Object(v["a"])({},this.temp)}},watch:{temp:function(){this.tempItem=Object(v["a"])({},this.temp)}},created:function(){this.tempItem=Object(v["a"])({},this.temp)}};w.render=B;t["a"]=w},3183:function(e,t,c){"use strict";var a=c("7a23"),o={"aria-label":"Page navigation"},r={class:"pagination justify-content-center"},l={class:"page-link",href:"#"};function s(e,t,c,s,d,n){return Object(a["openBlock"])(),Object(a["createBlock"])("nav",o,[Object(a["createVNode"])("ul",r,[Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_pre}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return n.changePage(c.page.current_page-1)}),["prevent"]))},"上一頁")],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.page.total_pages,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",{active:c.page.current_page===e}],key:e,onClick:Object(a["withModifiers"])((function(t){return n.changePage(e)}),["prevent"])},[Object(a["createVNode"])("a",l,Object(a["toDisplayString"])(e),1)],10,["onClick"])})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_next}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return n.changePage(c.page.current_page+1)}),["prevent"]))},"下一頁")],2)])])}var d=c("5530"),n={props:["page"],data:function(){return{pagination:Object(d["a"])({},this.page)}},methods:{changePage:function(e){this.$emit("emit-pagination",e)}}};n.render=s;t["a"]=n},a02d:function(e,t,c){"use strict";var a=c("7a23"),o={class:"alert alert-primary alert-dismissible fade show",role:"alert"};function r(e,t,c,r,l,s){return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,Object(a["toDisplayString"])(c.alertMsg),1)}var l={props:["alertMsg"]};l.render=r;t["a"]=l},a2a5:function(e,t,c){"use strict";c.r(t);c("ac1f"),c("5319");var a=c("7a23"),o={class:"bg-light"},r={class:"container p-4"},l={class:"d-flex justify-content-between"},s=Object(a["createVNode"])("label",{for:"searchOrder"},[Object(a["createVNode"])("i",{class:"bi bi-search"})],-1),d={class:"mb-4"},n={key:0},i={key:0},b={key:1},p={key:1},O={key:0},m={key:1},u={class:"container py-4"},j={class:"table mb-6"},h=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{width:"150"},"建立日期"),Object(a["createVNode"])("th",null,"訂單編號"),Object(a["createVNode"])("th",{width:"120"},"金額"),Object(a["createVNode"])("th",{width:"120"},"付款狀態"),Object(a["createVNode"])("th",{width:"120"})])],-1),g={width:"150"},k={class:"pe-4"},N={width:"120"},y={width:"120"},V={width:"120"},f=Object(a["createVNode"])("i",{class:"bi bi-pencil-square"},null,-1),B=Object(a["createVNode"])("i",{class:"bi bi-trash-fill ms-2"},null,-1),v=Object(a["createVNode"])("small",null,"訂單內容：",-1),w={class:"ms-2"},D={key:0,class:"ms-2"},C={key:0},M={key:1},x={key:2},S={key:3};function A(e,t,c,A,T,_){var P=Object(a["resolveComponent"])("alert"),L=Object(a["resolveComponent"])("order-edit-modal"),I=Object(a["resolveComponent"])("order-delete-modal"),E=Object(a["resolveComponent"])("pagination");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",o,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",null,[s,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"search",id:"searchOrder",class:"ms-2 rounded-3 px-3 border border-primary",placeholder:"搜尋訂單編號","onUpdate:modelValue":t[1]||(t[1]=function(e){return T.searchOrder=e})},null,512),[[a["vModelText"],T.searchOrder]])]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary d-inline-flex me-2",onClick:t[2]||(t[2]=function(){return _.deleteAll&&_.deleteAll.apply(_,arguments)})}," 刪除所有訂單 ")]),Object(a["createVNode"])("div",d,[""===T.searchOrder?(Object(a["openBlock"])(),Object(a["createBlock"])("small",n,[0==T.orders.length?(Object(a["openBlock"])(),Object(a["createBlock"])("p",i,"目前尚無訂單")):(Object(a["openBlock"])(),Object(a["createBlock"])("p",b,"此分頁有 "+Object(a["toDisplayString"])(T.orders.length)+" 筆訂單",1))])):(Object(a["openBlock"])(),Object(a["createBlock"])("small",p,[0==_.filterOrder.length?(Object(a["openBlock"])(),Object(a["createBlock"])("p",O,"查找不到相關訂單")):(Object(a["openBlock"])(),Object(a["createBlock"])("p",m,"此分頁為您查到 "+Object(a["toDisplayString"])(_.filterOrder.length)+" 筆訂單",1))]))])])]),Object(a["createVNode"])("div",u,[Object(a["createVNode"])("table",j,[h,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(_.filterOrder,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:e.id},[Object(a["createVNode"])("tr",{"data-bs-toggle":"collapse",href:"#collapseOrder-"+t,"aria-expanded":"false","aria-controls":"collapseOrder-"+t,class:"light-primary-hover",title:"點擊看詳細內容"},[Object(a["createVNode"])("td",g,Object(a["toDisplayString"])(e.create_at),1),Object(a["createVNode"])("td",k,Object(a["toDisplayString"])(e.id),1),Object(a["createVNode"])("td",N,"NT "+Object(a["toDisplayString"])(e.total),1),Object(a["createVNode"])("td",y,[Object(a["createVNode"])("i",{class:["bi bi-credit-card-2-back-fill",{"text-success":e.is_paid,"text-gray":!e.is_paid}]},null,2)]),Object(a["createVNode"])("td",V,[Object(a["createVNode"])("a",{onClick:function(t){return _.openModal(e,"editOrder")}},[f],8,["onClick"]),Object(a["createVNode"])("a",{onClick:function(t){return _.openModal(e,"deleteOrder")},"data-bs-toggle":"modal","data-bs-target":"#deleteModal"},[B],8,["onClick"])])],8,["href","aria-controls"]),Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("td",{colspan:"5",class:"collapse border-bottom-0",id:"collapseOrder-"+t},[v,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("ul",{key:"product-"+t},[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.options,(function(t,c){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:c},[Object(a["createVNode"])("small",null,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.start_date.replace(/-/g," / "))+" ",1),Object(a["createVNode"])("span",w,Object(a["toDisplayString"])(e.product.title)+" - "+Object(a["toDisplayString"])(t.optionName),1),t.qtyDetail?(Object(a["openBlock"])(),Object(a["createBlock"])("span",D,[Object(a["createTextVNode"])(" * "+Object(a["toDisplayString"])(t.qtyDetail.adult)+" ",1),"每人"===e.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",C," 大 ")):"包車服務"!==e.product.category&&"每人"!==e.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",M," 組 ")):"包車服務"===e.product.category&&"每人"!==e.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",x," 台 ")):Object(a["createCommentVNode"])("",!0),t.qtyDetail.child>0?(Object(a["openBlock"])(),Object(a["createBlock"])("span",S,Object(a["toDisplayString"])(t.qtyDetail.child)+" 小 ",1)):Object(a["createCommentVNode"])("",!0)])):Object(a["createCommentVNode"])("",!0)])])})),128))])})),128))],8,["id"])])],64)})),128))])]),T.showAlert?(Object(a["openBlock"])(),Object(a["createBlock"])(P,{key:0,"alert-msg":T.alertMsg},null,8,["alert-msg"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(L,{"modal-title":T.modalTitle,temp:T.temp,onEmitOrderModal:_.editOrder,ref:"orderModal"},null,8,["modal-title","temp","onEmitOrderModal"]),Object(a["createVNode"])(I,{temp:T.temp,onEmitDeleteModal:_.deleteOrder},null,8,["temp","onEmitDeleteModal"]),T.pagination.total_pages>1&&_.filterOrder.length>10?(Object(a["openBlock"])(),Object(a["createBlock"])(E,{key:1,page:T.pagination,onEmitPagination:_.getData},null,8,["page","onEmitPagination"])):Object(a["createCommentVNode"])("",!0)])],64)}var T=c("5530"),_=(c("99af"),c("159b"),c("1276"),c("4de4"),c("466d"),c("4d63"),c("25f0"),c("a02d")),P=c("3183"),L=c("7b17"),I=(c("b0c0"),{id:"orderModal",ref:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"}),E={class:"modal-dialog modal-xl"},q={class:"modal-content product-modal-bg"},$={class:"modal-body"},F=Object(a["createVNode"])("div",{class:"text-end"},[Object(a["createVNode"])("button",{type:"button",class:"bg-transparent border-0 p-2 text-secondary h3","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createVNode"])("i",{class:"bi bi-x-lg"})])],-1),U={class:"container"},J={class:"row mb-8"},R={class:"col-6"},z={class:"h3 pb-3 mb-3 border-bottom border-gray"},G=Object(a["createTextVNode"])(" 訂單內容 "),H={class:"ms-3"},K={class:"mb-3"},Q={class:"h4"},W=Object(a["createVNode"])("span",{class:"fw-bold"},"購買細項：",-1),X={class:"pt-3"},Y={class:"ms-3"},Z={class:"mb-1 fw-bold"},ee={class:"mb-1 text-gray"},te={key:0},ce={key:0},ae={key:1},oe={key:2},re={key:3},le={class:"mb-3"},se={class:"h4"},de=Object(a["createVNode"])("span",{class:"fw-bold"},"訂單金額：",-1),ne={key:0,class:"mb-3"},ie={class:"h4"},be=Object(a["createVNode"])("span",{class:"fw-bold"},"客戶訂單備註：",-1),pe={class:"pt-2 ms-3"},Oe={class:"form-check mb-2"},me=Object(a["createVNode"])("label",{class:"form-check-label",for:"paymentStatus"},"付款狀態",-1),ue={class:"col-6"},je=Object(a["createVNode"])("h2",{class:"h3 pb-3 mb-3 border-bottom border-gray"},"客戶資料",-1),he={class:"mb-3"},ge={class:"mb-3"},ke={class:"d-flex justify-content-center"},Ne=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark d-none",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),ye={class:"ms-1"},Ve=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function fe(e,t,c,o,r,l){return Object(a["openBlock"])(),Object(a["createBlock"])("div",I,[Object(a["createVNode"])("div",E,[Object(a["createVNode"])("div",q,[Object(a["createVNode"])("div",$,[F,Object(a["createVNode"])("div",U,[Object(a["createVNode"])("div",J,[Object(a["createVNode"])("div",R,[Object(a["createVNode"])("h2",z,[G,Object(a["createVNode"])("span",H,Object(a["toDisplayString"])(r.tempOrder.id),1)]),Object(a["createVNode"])("ul",null,[Object(a["createVNode"])("li",K,[Object(a["createVNode"])("h3",Q,[W,Object(a["createVNode"])("ul",X,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.tempOrder.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:t},[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.options,(function(t,c){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{key:c,class:"d-flex mb-3"},[Object(a["createVNode"])("p",{class:["badge rounded-pill h-50",{"bg-danger":"城市導覽"===e.product.category,"bg-warning":"體驗票券"===e.product.category,"bg-success":"包車服務"===e.product.category}]},Object(a["toDisplayString"])(e.product.category),3),Object(a["createVNode"])("div",Y,[Object(a["createVNode"])("p",Z,Object(a["toDisplayString"])(e.product.title),1),Object(a["createVNode"])("p",ee,Object(a["toDisplayString"])(t.optionName),1),t.qtyDetail?(Object(a["openBlock"])(),Object(a["createBlock"])("p",te,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.qtyDetail.adult)+" ",1),"每人"===e.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",ce," 大 ")):"包車服務"!==e.product.category&&"每人"!==e.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",ae," 組 ")):"包車服務"===e.product.category&&"每人"!==e.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",oe," 台 ")):Object(a["createCommentVNode"])("",!0),t.qtyDetail.child>0?(Object(a["openBlock"])(),Object(a["createBlock"])("span",re,Object(a["toDisplayString"])(t.qtyDetail.child)+" 小 ",1)):Object(a["createCommentVNode"])("",!0)])):Object(a["createCommentVNode"])("",!0)])])})),128))])})),128))])])]),Object(a["createVNode"])("li",le,[Object(a["createVNode"])("h3",se,[de,Object(a["createVNode"])("span",null,"NT "+Object(a["toDisplayString"])(r.tempOrder.total),1)])]),r.tempOrder.message?(Object(a["openBlock"])(),Object(a["createBlock"])("li",ne,[Object(a["createVNode"])("h3",ie,[be,Object(a["createVNode"])("p",pe,Object(a["toDisplayString"])(r.tempOrder.message),1)])])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("div",Oe,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"checkbox",class:"form-check-input",id:"paymentStatus","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.tempOrder.is_paid=e})},null,512),[[a["vModelCheckbox"],r.tempOrder.is_paid]]),me])]),Object(a["createVNode"])("div",ue,[je,Object(a["createVNode"])("ul",null,[Object(a["createVNode"])("li",he,Object(a["toDisplayString"])(r.tempOrder.user.name)+" "+Object(a["toDisplayString"])(r.tempOrder.user.gender),1),Object(a["createVNode"])("li",null,"身分證字號："+Object(a["toDisplayString"])(r.tempOrder.user.idNum),1),Object(a["createVNode"])("li",ge,"護照號碼："+Object(a["toDisplayString"])(r.tempOrder.user.passportNum),1),Object(a["createVNode"])("li",null,"聯繫電話："+Object(a["toDisplayString"])(r.tempOrder.user.tel),1),Object(a["createVNode"])("li",null,"聯繫信箱："+Object(a["toDisplayString"])(r.tempOrder.user.email),1),Object(a["createVNode"])("li",null,"住址："+Object(a["toDisplayString"])(r.tempOrder.user.address),1)])])]),Object(a["createVNode"])("div",ke,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary w-25 d-flex justify-content-center align-items-center",ref:"orderAdminBtn",onClick:t[2]||(t[2]=function(t){return e.$emit("emit-order-modal",r.tempOrder)})},[Ne,Object(a["createVNode"])("p",ye,Object(a["toDisplayString"])(c.modalTitle),1)],512),Ve])])])])])],512)}var Be={props:["modalTitle","temp"],emits:["emit-order-modal"],data:function(){return{tempOrder:{create_at:"",id:"",is_paid:!1,message:"",num:0,products:{},total:0,user:{address:"",email:"",gender:"",idNum:"",name:"",passportNum:"",tel:""}}}},watch:{temp:function(){this.tempOrder=Object(T["a"])({},this.temp)}}};Be.render=fe;var ve=Be,we=c("212e"),De={data:function(){return{orders:[],temp:{},pagination:{},modalTitle:"",orderModal:{},deleteModal:{},searchOrder:"",showAlert:!1,alertMsg:""}},components:{alert:_["a"],pagination:P["a"],orderEditModal:ve,orderDeleteModal:we["a"]},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/orders/?page=").concat(t)).then((function(t){if(t.data.success){var c=t.data;e.orders=c.orders,e.orders.forEach((function(t,c){if("number"===typeof t.create_at){var a=new Date(1e3*t.create_at).toISOString().split("T")[0].replace(/-/g," / ");e.orders[c].create_at=a}e.orders[c].total=Math.floor(e.orders[c].total)})),e.pagination=t.data.pagination}else e.customAlert(t.data.message),window.setTimeout(e.closeCustomAlert,5e3)})).catch((function(t){e.customAlert(t.response),window.setTimeout(e.closeCustomAlert,5e3)}))},customAlert:function(e){this.alertMsg=e,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1},openModal:function(e,t){switch(t){case"editOrder":this.modalTitle="完成編輯",this.temp=Object(T["a"])({},e),this.orderModal.show();break;case"deleteOrder":this.temp=Object(T["a"])({},e);break;default:break}},clearModal:function(){this.temp={}},editOrder:function(e){var t=this,c=this.$refs.orderModal.$refs.orderAdminBtn;c.classList.add("disabled"),c.children[0].classList.remove("d-none");var a={};a.data=Object(T["a"])({},e);var o=e.id;this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/order/").concat(o),a).then((function(e){e.data.success?(t.orderModal.hide(),t.customAlert("編輯成功"),t.getData(),c.classList.remove("disabled"),c.children[0].classList.add("d-none"),window.setTimeout(t.closeCustomAlert,5e3)):(c.classList.remove("disabled"),c.children[0].classList.add("d-none"),t.customAlert(e.data.message),window.setTimeout(t.closeCustomAlert,5e3))})).catch((function(e){c.classList.remove("disabled"),c.children[0].classList.add("d-none"),t.customAlert(e.response),window.setTimeout(t.closeCustomAlert,5e3)}))},deleteOrder:function(){var e=this,t=this.temp.id;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/order/").concat(t)).then((function(t){t.data.success?(e.customAlert("刪除成功"),e.getData(),e.clearModal(),e.deleteModal.hide(),window.setTimeout(e.closeCustomAlert,5e3)):(e.customAlert(t.data.message),window.setTimeout(e.closeCustomAlert,5e3))})).catch((function(t){e.customAlert(t.response),window.setTimeout(e.closeCustomAlert,5e3)}))},deleteAll:function(){var e=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/orders/all")).then((function(t){t.data.success?(e.customAlert("刪除成功"),e.getData(),window.setTimeout(e.closeCustomAlert,5e3)):(e.customAlert(t.data.message),window.setTimeout(e.closeCustomAlert,5e3))})).catch((function(t){e.customAlert(t.response),window.setTimeout(e.closeCustomAlert,5e3)}))}},computed:{filterOrder:function(){var e=this;return""!==this.searchOrder?this.orders.filter((function(t){return t.id.match(new RegExp(e.searchOrder,"gi"))})):this.orders}},created:function(){this.getData()},mounted:function(){this.orderModal=new L["a"](document.getElementById("orderModal"),{keyboard:!1}),this.deleteModal=new L["a"](document.getElementById("deleteModal"),{keyboard:!1})}};De.render=A;t["default"]=De}}]);
//# sourceMappingURL=chunk-3fc75e34.da3afb24.js.map