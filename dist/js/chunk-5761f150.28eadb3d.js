(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5761f150"],{"5b64":function(e,t,c){"use strict";c.r(t);c("ac1f"),c("5319");var a=c("7a23"),o={class:"bg-light"},r={class:"container p-4"},l={class:"d-flex justify-content-between"},s=Object(a["createVNode"])("label",{for:"searchOrder"},[Object(a["createVNode"])("i",{class:"bi bi-search"})],-1),d={class:"mb-4"},n={key:0},i={key:0},b={key:1},p={key:1},O={key:0},m={key:1},u={class:"container py-4"},j={class:"table mb-6"},h=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{width:"150"},"建立日期"),Object(a["createVNode"])("th",null,"訂單編號"),Object(a["createVNode"])("th",{width:"120"},"金額"),Object(a["createVNode"])("th",{width:"120"},"付款狀態"),Object(a["createVNode"])("th",{width:"120"})])],-1),g={width:"150"},N={class:"pe-4"},V={width:"120"},f={width:"120"},k={width:"120"},y=Object(a["createVNode"])("i",{class:"bi bi-pencil-square"},null,-1),v=Object(a["createVNode"])("i",{class:"bi bi-trash-fill ms-2"},null,-1),w=Object(a["createVNode"])("small",null,"訂單內容：",-1),B={key:0},D={key:0};function x(e,t,c,x,M,C){var S=Object(a["resolveComponent"])("alert"),A=Object(a["resolveComponent"])("order-edit-modal"),T=Object(a["resolveComponent"])("order-delete-modal"),_=Object(a["resolveComponent"])("pagination");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",o,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",null,[s,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"search",id:"searchOrder",class:"ms-2 rounded-3 px-3",placeholder:"搜尋訂單編號","onUpdate:modelValue":t[1]||(t[1]=function(e){return M.searchOrder=e})},null,512),[[a["vModelText"],M.searchOrder]])]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary d-inline-flex me-2",onClick:t[2]||(t[2]=function(){return C.deleteAll&&C.deleteAll.apply(C,arguments)})}," 刪除所有訂單 ")]),Object(a["createVNode"])("div",d,[""===M.searchOrder?(Object(a["openBlock"])(),Object(a["createBlock"])("small",n,[0==M.orders.length?(Object(a["openBlock"])(),Object(a["createBlock"])("p",i,"目前尚無訂單")):(Object(a["openBlock"])(),Object(a["createBlock"])("p",b,"此分頁有 "+Object(a["toDisplayString"])(M.orders.length)+" 筆訂單",1))])):(Object(a["openBlock"])(),Object(a["createBlock"])("small",p,[0==C.filterOrder.length?(Object(a["openBlock"])(),Object(a["createBlock"])("p",O,"查找不到相關訂單")):(Object(a["openBlock"])(),Object(a["createBlock"])("p",m,"此分頁為您查到 "+Object(a["toDisplayString"])(C.filterOrder.length)+" 筆訂單",1))]))])])]),Object(a["createVNode"])("div",u,[Object(a["createVNode"])("table",j,[h,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(C.filterOrder,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:e.id},[Object(a["createVNode"])("tr",{"data-bs-toggle":"collapse",href:"#collapseOrder-"+t,"aria-expanded":"false","aria-controls":"collapseOrder-"+t,class:"light-primary-hover",title:"點擊看詳細內容"},[Object(a["createVNode"])("td",g,Object(a["toDisplayString"])(e.create_at),1),Object(a["createVNode"])("td",N,Object(a["toDisplayString"])(e.id),1),Object(a["createVNode"])("td",V,Object(a["toDisplayString"])(e.total),1),Object(a["createVNode"])("td",f,[Object(a["createVNode"])("i",{class:["bi bi-credit-card-2-back-fill",{"text-success":e.is_paid,"text-gray":!e.is_paid}]},null,2)]),Object(a["createVNode"])("td",k,[Object(a["createVNode"])("a",{onClick:function(t){return C.openModal(e,"editOrder")}},[y],8,["onClick"]),Object(a["createVNode"])("a",{onClick:function(t){return C.openModal(e,"deleteOrder")},"data-bs-toggle":"modal","data-bs-target":"#deleteModal"},[v],8,["onClick"])])],8,["href","aria-controls"]),Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("td",{colspan:"5",class:"collapse border-bottom-0",id:"collapseOrder-"+t},[w,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("ul",{key:"product-"+t},[Object(a["createVNode"])("li",null,[Object(a["createVNode"])("small",null,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.start_date.replace(/-/g," / "))+" "+Object(a["toDisplayString"])(e.product.title)+" * ",1),e.qtyDetail?(Object(a["openBlock"])(),Object(a["createBlock"])("span",B,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.qtyDetail.adult)+" 大 ",1),e.qtyDetail.child>0?(Object(a["openBlock"])(),Object(a["createBlock"])("span",D,Object(a["toDisplayString"])(e.qtyDetail.child)+" 小 ",1)):Object(a["createCommentVNode"])("",!0)])):Object(a["createCommentVNode"])("",!0)])])])})),128))],8,["id"])])],64)})),128))])]),M.showAlert?(Object(a["openBlock"])(),Object(a["createBlock"])(S,{key:0,"alert-msg":M.alertMsg},null,8,["alert-msg"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(A,{"modal-title":e.modalTitle,temp:M.temp,onEmitOrderModal:C.editOrder,ref:"orderModal"},null,8,["modal-title","temp","onEmitOrderModal"]),Object(a["createVNode"])(T,{temp:M.temp,onEmitDeleteModal:C.deleteOrder},null,8,["temp","onEmitDeleteModal"]),M.pagination.total_pages>1?(Object(a["openBlock"])(),Object(a["createBlock"])(_,{key:1,page:M.pagination,onEmitPagination:C.getData},null,8,["page","onEmitPagination"])):Object(a["createCommentVNode"])("",!0)])],64)}var M=c("5530"),C=(c("99af"),c("159b"),c("1276"),c("4de4"),c("466d"),c("4d63"),c("25f0"),c("98ab")),S=c("96ac"),A=c("7b17"),T=(c("b0c0"),{id:"orderModal",ref:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"}),_={class:"modal-dialog modal-xl"},L={class:"modal-content product-modal-bg"},I={class:"modal-body"},P=Object(a["createVNode"])("div",{class:"text-end"},[Object(a["createVNode"])("button",{type:"button",class:"bg-transparent border-0 p-2 text-secondary h3","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createVNode"])("i",{class:"bi bi-x-lg"})])],-1),E={class:"container"},q={class:"row mb-8"},$={class:"col-6"},F={class:"h3 pb-3 mb-3 border-bottom border-gray"},J=Object(a["createTextVNode"])(" 訂單內容 "),U={class:"ms-3"},R={class:"mb-3"},z={class:"h4"},G=Object(a["createVNode"])("span",{class:"fw-bold"},"購買細項：",-1),H={class:"pt-2"},K={class:"mb-2 ms-3"},Q=Object(a["createVNode"])("i",{class:"bi bi-check2"},null,-1),W={key:0},X={key:0},Y={class:"mb-3"},Z={class:"h4"},ee=Object(a["createVNode"])("span",{class:"fw-bold"},"訂單金額：",-1),te={class:"mb-3"},ce={class:"h4"},ae=Object(a["createVNode"])("span",{class:"fw-bold"},"客戶訂單備註：",-1),oe={class:"pt-2 ms-3"},re={class:"form-check mb-2"},le=Object(a["createVNode"])("label",{class:"form-check-label",for:"paymentStatus"},"付款狀態",-1),se={class:"col-6"},de=Object(a["createVNode"])("h2",{class:"h3 pb-3 mb-3 border-bottom border-gray"},"客戶資料",-1),ne={class:"d-flex justify-content-center"},ie=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark d-none",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),be={class:"ms-1"},pe=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function Oe(e,t,c,o,r,l){return Object(a["openBlock"])(),Object(a["createBlock"])("div",T,[Object(a["createVNode"])("div",_,[Object(a["createVNode"])("div",L,[Object(a["createVNode"])("div",I,[P,Object(a["createVNode"])("div",E,[Object(a["createVNode"])("div",q,[Object(a["createVNode"])("div",$,[Object(a["createVNode"])("h2",F,[J,Object(a["createVNode"])("span",U,Object(a["toDisplayString"])(r.tempOrder.id),1)]),Object(a["createVNode"])("ul",null,[Object(a["createVNode"])("li",R,[Object(a["createVNode"])("h3",z,[G,Object(a["createVNode"])("ul",H,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.tempOrder.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:t},[Object(a["createVNode"])("p",K,[Q,Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(e.product.category)+" / "+Object(a["toDisplayString"])(e.product.title)+" * ",1),e.qtyDetail?(Object(a["openBlock"])(),Object(a["createBlock"])("span",W,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.qtyDetail.adult)+" 大 ",1),e.qtyDetail.child>0?(Object(a["openBlock"])(),Object(a["createBlock"])("span",X,Object(a["toDisplayString"])(e.qtyDetail.child)+" 小 ",1)):Object(a["createCommentVNode"])("",!0)])):Object(a["createCommentVNode"])("",!0)])])})),128))])])]),Object(a["createVNode"])("li",Y,[Object(a["createVNode"])("h3",Z,[ee,Object(a["createVNode"])("span",null,"NT "+Object(a["toDisplayString"])(r.tempOrder.total),1)])]),Object(a["createVNode"])("li",te,[Object(a["createVNode"])("h3",ce,[ae,Object(a["createVNode"])("p",oe,Object(a["toDisplayString"])(r.tempOrder.message),1)])])]),Object(a["createVNode"])("div",re,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"checkbox",class:"form-check-input",id:"paymentStatus","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.tempOrder.is_paid=e})},null,512),[[a["vModelCheckbox"],r.tempOrder.is_paid]]),le])]),Object(a["createVNode"])("div",se,[de,Object(a["createVNode"])("ul",null,[Object(a["createVNode"])("li",null,Object(a["toDisplayString"])(r.tempOrder.user.name)+" "+Object(a["toDisplayString"])(r.tempOrder.user.gender),1),Object(a["createVNode"])("li",null,"身分證字號："+Object(a["toDisplayString"])(r.tempOrder.user.idNum),1),Object(a["createVNode"])("li",null,"護照號碼："+Object(a["toDisplayString"])(r.tempOrder.user.passportNum),1),Object(a["createVNode"])("li",null,"聯繫電話："+Object(a["toDisplayString"])(r.tempOrder.user.tel),1),Object(a["createVNode"])("li",null,"聯繫信箱："+Object(a["toDisplayString"])(r.tempOrder.user.email),1),Object(a["createVNode"])("li",null,"住址："+Object(a["toDisplayString"])(r.tempOrder.user.address),1)])])]),Object(a["createVNode"])("div",ne,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary w-25 d-flex justify-content-center align-items-center",ref:"orderAdminBtn",onClick:t[2]||(t[2]=function(t){return e.$emit("emit-order-modal",r.tempOrder)})},[ie,Object(a["createVNode"])("p",be,Object(a["toDisplayString"])(c.modalTitle),1)],512),pe])])])])])],512)}var me={props:["modalTitle","temp"],emits:["emit-order-modal"],data:function(){return{tempOrder:{create_at:"",id:"",is_paid:!1,message:"",num:0,products:{},total:0,user:{address:"",email:"",gender:"",idNum:"",name:"",passportNum:"",tel:""}}}},watch:{temp:function(){this.tempOrder=Object(M["a"])({},this.temp)}}};me.render=Oe;var ue=me,je=c("ec05"),he={data:function(){return{orders:[],temp:{},pagination:{},orderModal:{},deleteModal:{},searchOrder:"",showAlert:!1,alertMsg:""}},components:{alert:C["a"],pagination:S["a"],orderEditModal:ue,orderDeleteModal:je["a"]},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/orders/?page=").concat(t)).then((function(t){if(t.data.success){var c=t.data;e.orders=c.orders,e.orders.forEach((function(t,c){if("number"===typeof t.create_at){var a=new Date(1e3*t.create_at).toISOString().split("T")[0].replace(/-/g," / ");e.orders[c].create_at=a}})),e.pagination=t.data.pagination}else e.customAlert(t.data.message),window.setTimeout(e.closeCustomAlert,5e3)})).catch((function(t){e.customAlert(t.response),window.setTimeout(e.closeCustomAlert,5e3)}))},customAlert:function(e){this.alertMsg=e,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1},openModal:function(e,t){switch(t){case"editOrder":this.modalTitle="完成編輯",this.temp=Object(M["a"])({},e),this.orderModal.show();break;case"deleteOrder":this.temp=Object(M["a"])({},e),console.log(this.temp),console.log(e);break;default:break}},clearModal:function(){this.temp={}},editOrder:function(e){var t=this,c=this.$refs.orderModal.$refs.orderAdminBtn;c.classList.add("disabled"),c.children[0].classList.remove("d-none");var a={};a.data=Object(M["a"])({},e);var o=e.id;this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/order/").concat(o),a).then((function(e){e.data.success?(t.orderModal.hide(),t.customAlert("編輯成功"),t.getData(),c.classList.remove("disabled"),c.children[0].classList.add("d-none"),window.setTimeout(t.closeCustomAlert,5e3)):(c.classList.remove("disabled"),c.children[0].classList.add("d-none"),t.customAlert(e.data.message),window.setTimeout(t.closeCustomAlert,5e3))})).catch((function(e){c.classList.remove("disabled"),c.children[0].classList.add("d-none"),t.customAlert(e.response),window.setTimeout(t.closeCustomAlert,5e3)}))},deleteOrder:function(){var e=this,t=this.temp.id;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/order/").concat(t)).then((function(t){t.data.success?(e.customAlert("刪除成功"),e.getData(),e.clearModal(),e.deleteModal.hide(),window.setTimeout(e.closeCustomAlert,5e3)):(e.customAlert(t.data.message),window.setTimeout(e.closeCustomAlert,5e3))})).catch((function(t){e.customAlert(t.response),window.setTimeout(e.closeCustomAlert,5e3)}))},deleteAll:function(){var e=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/orders/all")).then((function(t){t.data.success?(e.customAlert("刪除成功"),e.getData(),window.setTimeout(e.closeCustomAlert,5e3)):(e.customAlert(t.data.message),window.setTimeout(e.closeCustomAlert,5e3))})).catch((function(t){e.customAlert(t.response),window.setTimeout(e.closeCustomAlert,5e3)}))}},computed:{filterOrder:function(){var e=this;return""!==this.searchOrder?this.orders.filter((function(t){return t.id.match(new RegExp(e.searchOrder,"gi"))})):this.orders}},created:function(){this.getData()},mounted:function(){this.orderModal=new A["a"](document.getElementById("orderModal"),{keyboard:!1}),this.deleteModal=new A["a"](document.getElementById("deleteModal"),{keyboard:!1})}};he.render=x;t["default"]=he},"96ac":function(e,t,c){"use strict";var a=c("7a23"),o={"aria-label":"Page navigation"},r={class:"pagination justify-content-center"},l={class:"page-link",href:"#"};function s(e,t,c,s,d,n){return Object(a["openBlock"])(),Object(a["createBlock"])("nav",o,[Object(a["createVNode"])("ul",r,[Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_pre}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return n.changePage(c.page.current_page-1)}),["prevent"]))},"Previous")],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.page.total_pages,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",{active:c.page.current_page===e}],key:e,onClick:Object(a["withModifiers"])((function(t){return n.changePage(e)}),["prevent"])},[Object(a["createVNode"])("a",l,Object(a["toDisplayString"])(e),1)],10,["onClick"])})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_next}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return n.changePage(c.page.current_page+1)}),["prevent"]))},"Next")],2)])])}var d=c("5530"),n={props:["page"],data:function(){return{pagination:Object(d["a"])({},this.page)}},methods:{changePage:function(e){console.log(e),this.$emit("emit-pagination",e)}}};n.render=s;t["a"]=n},"98ab":function(e,t,c){"use strict";var a=c("7a23"),o={class:"alert alert-primary alert-dismissible fade show",role:"alert"};function r(e,t,c,r,l,s){return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,Object(a["toDisplayString"])(c.alertMsg),1)}var l={props:["alertMsg"]};l.render=r;t["a"]=l},ec05:function(e,t,c){"use strict";var a=c("7a23"),o={id:"deleteModal",ref:"deleteModal",class:"modal fade",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},r={class:"modal-dialog"},l={class:"modal-content delete-modal-bg"},s={class:"modal-body"},d=Object(a["createVNode"])("div",{class:"text-end"},[Object(a["createVNode"])("button",{type:"button",class:"bg-transparent border-0 p-2 text-secondary h3","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createVNode"])("i",{class:"bi bi-x-lg"})])],-1),n={class:"delete-modal-inner-bg mb-4"},i={key:0,class:"text-center"},b={class:"h3 mb-2"},p=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),O={key:1,class:"text-center"},m={class:"h3 mb-2"},u=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),j={key:2,class:"text-center"},h={class:"h3 mb-2"},g=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),N={key:3,class:"text-center"},V={class:"h3 mb-2"},f=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),k={class:"d-flex justify-content-center"},y=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function v(e,t,c,v,w,B){return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",s,[d,Object(a["createVNode"])("div",n,[w.tempItem.hasOwnProperty("is_mainProduct")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",i,[Object(a["createVNode"])("p",b,Object(a["toDisplayString"])(w.tempItem.title),1),p])):w.tempItem.hasOwnProperty("code")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",O,[Object(a["createVNode"])("p",m,"優惠券代碼："+Object(a["toDisplayString"])(w.tempItem.code),1),u])):w.tempItem.hasOwnProperty("user")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",j,[Object(a["createVNode"])("p",h,"訂單編號："+Object(a["toDisplayString"])(w.tempItem.id),1),g])):w.tempItem.hasOwnProperty("author")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",N,[Object(a["createVNode"])("p",V,Object(a["toDisplayString"])(w.tempItem.title),1),f])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("div",k,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary w-25 d-block",onClick:t[1]||(t[1]=function(t){return e.$emit("emit-delete-modal")})}," 確認刪除 "),y])])])])],512)}var w=c("5530"),B={props:["temp"],data:function(){return{tempItem:Object(w["a"])({},this.temp)}},watch:{temp:function(){this.tempItem=Object(w["a"])({},this.temp)}},created:function(){this.tempItem=Object(w["a"])({},this.temp)}};B.render=v;t["a"]=B}}]);
//# sourceMappingURL=chunk-5761f150.28eadb3d.js.map