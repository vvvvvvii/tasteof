(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e67eff1"],{1799:function(e,t,c){"use strict";var a=c("7a23"),r={"aria-label":"Page navigation"},o={class:"pagination justify-content-center"},l={class:"page-link",href:"#"};function d(e,t,c,d,n,s){return Object(a["openBlock"])(),Object(a["createBlock"])("nav",r,[Object(a["createVNode"])("ul",o,[Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_pre}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return s.changePage(c.page.current_page-1)}),["prevent"]))},"Previous")],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.page.total_pages,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",{active:c.page.current_page===e}],key:e,onClick:Object(a["withModifiers"])((function(t){return s.changePage(e)}),["prevent"])},[Object(a["createVNode"])("a",l,Object(a["toDisplayString"])(e),1)],10,["onClick"])})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_next}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return s.changePage(c.page.current_page+1)}),["prevent"]))},"Next")],2)])])}var n={props:["page"],methods:{changePage:function(e){console.log(e),this.$emit("emit-pagination",e)}}};n.render=d;t["a"]=n},"5b64":function(e,t,c){"use strict";c.r(t);c("ac1f"),c("5319");var a=c("7a23"),r={class:"bg-light"},o={class:"container p-4"},l={class:"d-flex justify-content-between"},d=Object(a["createVNode"])("label",{for:"searchOrder"},[Object(a["createVNode"])("i",{class:"bi bi-search"})],-1),n={class:"mb-4"},s={key:0},i={key:0},b={key:1},p={key:1},O={key:0},u={key:1},m={class:"container py-4"},j={class:"table mb-6"},h=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{width:"150"},"建立日期"),Object(a["createVNode"])("th",null,"訂單編號"),Object(a["createVNode"])("th",{width:"120"},"金額"),Object(a["createVNode"])("th",{width:"120"},"付款狀態"),Object(a["createVNode"])("th",{width:"120"})])],-1),g={width:"150"},N={class:"pe-4"},f={width:"120"},V={width:"120"},k={width:"120"},y={class:"ms-2"},v=Object(a["createVNode"])("small",null,"訂單內容：",-1);function B(e,t,c,B,w,D){var M=Object(a["resolveComponent"])("alert"),x=Object(a["resolveComponent"])("order-edit-modal"),S=Object(a["resolveComponent"])("order-delete-modal"),A=Object(a["resolveComponent"])("pagination");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",o,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",null,[d,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"search",id:"searchOrder",class:"ms-2 rounded-3 px-3",placeholder:"搜尋訂單編號","onUpdate:modelValue":t[1]||(t[1]=function(e){return w.searchOrder=e})},null,512),[[a["vModelText"],w.searchOrder]])]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary d-inline-flex me-2",onClick:t[2]||(t[2]=function(){return D.deleteAll&&D.deleteAll.apply(D,arguments)})}," 刪除所有訂單 ")]),Object(a["createVNode"])("div",n,[""===w.searchOrder?(Object(a["openBlock"])(),Object(a["createBlock"])("small",s,[0==w.orders.length?(Object(a["openBlock"])(),Object(a["createBlock"])("p",i,"目前尚無訂單")):(Object(a["openBlock"])(),Object(a["createBlock"])("p",b,"此分頁有 "+Object(a["toDisplayString"])(w.orders.length)+" 筆訂單",1))])):(Object(a["openBlock"])(),Object(a["createBlock"])("small",p,[0==D.filterOrder.length?(Object(a["openBlock"])(),Object(a["createBlock"])("p",O,"查找不到相關訂單")):(Object(a["openBlock"])(),Object(a["createBlock"])("p",u,"此分頁為您查到 "+Object(a["toDisplayString"])(D.filterOrder.length)+" 筆訂單",1))]))])])]),Object(a["createVNode"])("div",m,[Object(a["createVNode"])("table",j,[h,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(D.filterOrder,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:e.id},[Object(a["createVNode"])("tr",{"data-bs-toggle":"collapse",href:"#collapseOrder-"+t,"aria-expanded":"false","aria-controls":"collapseOrder-"+t,class:"light-primary-hover",title:"點擊看詳細內容"},[Object(a["createVNode"])("td",g,Object(a["toDisplayString"])(e.create_at),1),Object(a["createVNode"])("td",N,Object(a["toDisplayString"])(e.id),1),Object(a["createVNode"])("td",f,Object(a["toDisplayString"])(e.total),1),Object(a["createVNode"])("td",V,[Object(a["createVNode"])("span",{class:["material-icons",{"text-success":e.is_paid,"text-gray":!e.is_paid}]},Object(a["toDisplayString"])(e.is_paid?"credit_score":"credit_card_off"),3)]),Object(a["createVNode"])("td",k,[Object(a["createVNode"])("a",null,[Object(a["createVNode"])("span",{class:"material-icons",onClick:function(t){return D.openModal(e,"editOrder")}}," mode_edit ",8,["onClick"])]),Object(a["createVNode"])("a",y,[Object(a["createVNode"])("span",{class:"material-icons",onClick:function(t){return D.openModal(e,"deleteOrder")},"data-bs-toggle":"modal","data-bs-target":"#deleteModal"}," delete ",8,["onClick"])])])],8,["href","aria-controls"]),Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("td",{colspan:"5",class:"collapse border-bottom-0",id:"collapseOrder-"+t},[v,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("ul",{key:"product-"+t},[Object(a["createVNode"])("li",null,[Object(a["createVNode"])("small",null,Object(a["toDisplayString"])(e.start_date.replace(/-/g," / "))+" "+Object(a["toDisplayString"])(e.product.title)+" * "+Object(a["toDisplayString"])(e.qty),1)])])})),128))],8,["id"])])],64)})),128))])]),w.showAlert?(Object(a["openBlock"])(),Object(a["createBlock"])(M,{key:0,"alert-msg":w.alertMsg},null,8,["alert-msg"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(x,{"modal-title":e.modalTitle,temp:w.temp,onEmitOrderModal:D.editOrder,ref:"orderModal"},null,8,["modal-title","temp","onEmitOrderModal"]),Object(a["createVNode"])(S,{temp:w.temp,onEmitDeleteModal:D.deleteOrder},null,8,["temp","onEmitDeleteModal"]),w.pagination.total_pages>1?(Object(a["openBlock"])(),Object(a["createBlock"])(A,{key:1,page:w.pagination,onEmitPagination:D.getData},null,8,["page","onEmitPagination"])):Object(a["createCommentVNode"])("",!0)])],64)}var w=c("5530"),D=(c("99af"),c("159b"),c("1276"),c("4de4"),c("466d"),c("98ab")),M=c("1799"),x=c("7b17"),S=(c("b0c0"),{id:"orderModal",ref:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"}),A={class:"modal-dialog modal-xl"},C={class:"modal-content product-modal-bg"},_={class:"modal-body"},L=Object(a["createVNode"])("div",{class:"text-end"},[Object(a["createVNode"])("button",{type:"button",class:"bg-transparent border-0 p-2 text-secondary h3","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createVNode"])("i",{class:"bi bi-x-lg"})])],-1),I={class:"container-fluid"},P={class:"mb-4"},T=Object(a["createVNode"])("h2",null,"訂單內容",-1),E={class:"mb-2"},$=Object(a["createTextVNode"])(" 訂單編號： "),F=Object(a["createTextVNode"])(" 購買細項： "),q=Object(a["createTextVNode"])(" 客戶訂單備註： "),J={class:"form-check mb-2"},U=Object(a["createVNode"])("label",{class:"form-check-label",for:"paymentStatus"},"付款狀態",-1),z=Object(a["createVNode"])("h2",null,"客戶資料",-1),G={class:"d-flex justify-content-center"},H=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark d-none",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),K={class:"ms-1"},Q=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-dark w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function R(e,t,c,r,o,l){return Object(a["openBlock"])(),Object(a["createBlock"])("div",S,[Object(a["createVNode"])("div",A,[Object(a["createVNode"])("div",C,[Object(a["createVNode"])("div",_,[L,Object(a["createVNode"])("div",I,[Object(a["createVNode"])("div",P,[T,Object(a["createVNode"])("div",E,[Object(a["createVNode"])("ul",null,[Object(a["createVNode"])("li",null,[Object(a["createVNode"])("h3",null,[$,Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(o.tempOrder.id),1)])]),Object(a["createVNode"])("li",null,[Object(a["createVNode"])("h3",null,[F,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(o.tempOrder.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("ul",{key:t},[Object(a["createVNode"])("li",null,[Object(a["createVNode"])("p",null,Object(a["toDisplayString"])(e.product.category)+" / "+Object(a["toDisplayString"])(e.product.title)+" * "+Object(a["toDisplayString"])(e.qty),1),Object(a["createVNode"])("p",null,"NT."+Object(a["toDisplayString"])(e.final_total),1)])])})),128))])]),Object(a["createVNode"])("li",null,[Object(a["createVNode"])("h3",null,[q,Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(o.tempOrder.message),1)])])])]),Object(a["createVNode"])("div",J,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"checkbox",class:"form-check-input",id:"paymentStatus","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.tempOrder.is_paid=e})},null,512),[[a["vModelCheckbox"],o.tempOrder.is_paid]]),U]),z,Object(a["createVNode"])("ul",null,[Object(a["createVNode"])("li",null,Object(a["toDisplayString"])(o.tempOrder.user.name)+" "+Object(a["toDisplayString"])("male"==o.tempOrder.user.gender?"先生":"女士"),1),Object(a["createVNode"])("li",null,"身分證字號："+Object(a["toDisplayString"])(o.tempOrder.user.idNum),1),Object(a["createVNode"])("li",null,"護照號碼："+Object(a["toDisplayString"])(o.tempOrder.user.passportNum),1),Object(a["createVNode"])("li",null,"聯繫電話："+Object(a["toDisplayString"])(o.tempOrder.user.tel),1),Object(a["createVNode"])("li",null,"聯繫信箱："+Object(a["toDisplayString"])(o.tempOrder.user.email),1),Object(a["createVNode"])("li",null,"住址："+Object(a["toDisplayString"])(o.tempOrder.user.address),1)])]),Object(a["createVNode"])("div",G,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary w-25 d-flex justify-content-center align-items-center",ref:"orderAdminBtn",onClick:t[2]||(t[2]=function(t){return e.$emit("emit-order-modal",o.tempOrder)})},[H,Object(a["createVNode"])("p",K,Object(a["toDisplayString"])(c.modalTitle),1)],512),Q])])])])])],512)}var W={props:["modalTitle","temp"],data:function(){return{tempOrder:{create_at:"",id:"",is_paid:!1,message:"",num:0,products:{},total:0,user:{address:"",email:"",gender:"",idNum:"",name:"",passportNum:"",tel:""}}}},watch:{temp:function(){this.tempOrder=Object(w["a"])({},this.temp)}}};W.render=R;var X=W,Y=c("ec05"),Z={data:function(){return{orders:[],temp:{},pagination:{},orderModal:{},deleteModal:{},searchOrder:"",showAlert:!1,alertMsg:""}},components:{alert:D["a"],pagination:M["a"],orderEditModal:X,orderDeleteModal:Y["a"]},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/orders/?page=").concat(t)).then((function(t){if(t.data.success){var c=t.data;e.orders=c.orders,e.orders.forEach((function(t,c){if("number"===typeof t.create_at){var a=new Date(1e3*t.create_at).toISOString().split("T")[0].replace(/-/g," / ");e.orders[c].create_at=a}})),e.pagination=t.data.pagination}else e.customAlert(t.data.message)})).catch((function(t){e.customAlert(t.response)}))},customAlert:function(e){this.alertMsg=e,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1},openModal:function(e,t){switch(t){case"editOrder":this.modalTitle="完成編輯",this.temp=Object(w["a"])({},e),this.orderModal.show();break;case"deleteOrder":this.temp=Object(w["a"])({},e);break;default:break}},clearModal:function(){this.temp={}},editOrder:function(e){var t=this,c=this.$refs.orderModal.$refs.orderAdminBtn;c.classList.add("disabled"),c.children[0].classList.remove("d-none");var a={};a.data=Object(w["a"])({},e);var r=e.id;this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/order/").concat(r),a).then((function(e){e.data.success?(t.orderModal.hide(),t.customAlert("編輯成功"),t.getData(),c.classList.remove("disabled"),c.children[0].classList.add("d-none"),window.setTimeout(t.closeCustomAlert,5e3)):(c.classList.remove("disabled"),c.children[0].classList.add("d-none"),t.customAlert(e.data.message))})).catch((function(e){c.classList.remove("disabled"),c.children[0].classList.add("d-none"),t.customAlert(e.response)}))},deleteOrder:function(){var e=this,t=this.temp.id;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/order/").concat(t)).then((function(t){t.data.success?(e.customAlert("刪除成功"),e.getData(),e.clearModal(),e.deleteModal.hide(),window.setTimeout(e.closeCustomAlert,5e3)):e.customAlert(t.data.message)})).catch((function(t){e.customAlert(t.response)}))},deleteAll:function(){var e=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/orders/all")).then((function(t){t.data.success?(e.customAlert("刪除成功"),e.getData(),window.setTimeout(e.closeCustomAlert,5e3)):e.customAlert(t.data.message)})).catch((function(t){e.customAlert(t.response)}))}},computed:{filterOrder:function(){var e=this;return""!==this.searchOrder?this.orders.filter((function(t){return t.id.match(e.searchOrder)})):this.orders}},created:function(){this.getData()},mounted:function(){this.orderModal=new x["a"](document.getElementById("orderModal"),{keyboard:!1}),this.deleteModal=new x["a"](document.getElementById("deleteModal"),{keyboard:!1})}};Z.render=B;t["default"]=Z},"98ab":function(e,t,c){"use strict";var a=c("7a23"),r={class:"alert alert-primary alert-dismissible fade show",role:"alert"};function o(e,t,c,o,l,d){return Object(a["openBlock"])(),Object(a["createBlock"])("div",r,Object(a["toDisplayString"])(c.alertMsg),1)}var l={props:["alertMsg"]};l.render=o;t["a"]=l},ec05:function(e,t,c){"use strict";var a=c("7a23"),r={id:"deleteModal",ref:"deleteModal",class:"modal fade",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},o={class:"modal-dialog"},l={class:"modal-content delete-modal-bg"},d={class:"modal-body"},n=Object(a["createVNode"])("div",{class:"text-end"},[Object(a["createVNode"])("button",{type:"button",class:"bg-transparent border-0 p-2 text-secondary h3","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createVNode"])("i",{class:"bi bi-x-lg"})])],-1),s={class:"delete-modal-inner-bg mb-4"},i={key:0,class:"text-center"},b={class:"h3 mb-2"},p=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),O={key:1,class:"text-center"},u={class:"h3 mb-2"},m=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),j={key:2,class:"text-center"},h={class:"h3 mb-2"},g=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),N={key:3,class:"text-center"},f={class:"h3 mb-2"},V=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),k={class:"d-flex justify-content-center"},y=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function v(e,t,c,v,B,w){return Object(a["openBlock"])(),Object(a["createBlock"])("div",r,[Object(a["createVNode"])("div",o,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",d,[n,Object(a["createVNode"])("div",s,[B.tempItem.hasOwnProperty("is_mainProduct")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",i,[Object(a["createVNode"])("p",b,Object(a["toDisplayString"])(B.tempItem.title),1),p])):B.tempItem.hasOwnProperty("code")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",O,[Object(a["createVNode"])("p",u,"優惠券代碼："+Object(a["toDisplayString"])(B.tempItem.code),1),m])):B.tempItem.hasOwnProperty("user")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",j,[Object(a["createVNode"])("p",h,"訂單編號："+Object(a["toDisplayString"])(B.tempItem.id),1),g])):B.tempItem.hasOwnProperty("author")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",N,[Object(a["createVNode"])("p",f,Object(a["toDisplayString"])(B.tempItem.title),1),V])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("div",k,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary w-25 d-block",onClick:t[1]||(t[1]=function(t){return e.$emit("emit-delete-modal")})}," 確認刪除 "),y])])])])],512)}var B=c("5530"),w={props:["temp"],data:function(){return{tempItem:Object(B["a"])({},this.temp)}},watch:{temp:function(){this.tempItem=Object(B["a"])({},this.temp)}},created:function(){this.tempItem=Object(B["a"])({},this.temp)}};w.render=v;t["a"]=w}}]);
//# sourceMappingURL=chunk-0e67eff1.daeb3a20.js.map