(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c8e822e"],{"212e":function(e,t,o){"use strict";var a=o("7a23"),c={id:"deleteModal",ref:"deleteModal",class:"modal fade",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},n={class:"modal-dialog"},l={class:"modal-content delete-modal-bg"},d={class:"modal-body"},s=Object(a["createVNode"])("div",{class:"text-end"},[Object(a["createVNode"])("button",{type:"button",class:"bg-transparent border-0 p-2 text-secondary h3","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createVNode"])("i",{class:"bi bi-x-lg"})])],-1),i={class:"delete-modal-inner-bg mb-4"},r={key:0,class:"text-center"},u={class:"h3 mb-2"},p=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),b={key:1,class:"text-center"},m={class:"h3 mb-2"},j=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),O={key:2,class:"text-center"},h={class:"h3 mb-2"},f=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),g={key:3,class:"text-center"},V={class:"h3 mb-2"},v=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),N={class:"d-flex justify-content-center"},k=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function C(e,t,o,C,w,y){return Object(a["openBlock"])(),Object(a["createBlock"])("div",c,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",d,[s,Object(a["createVNode"])("div",i,[w.tempItem.hasOwnProperty("is_mainProduct")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",r,[Object(a["createVNode"])("p",u,Object(a["toDisplayString"])(w.tempItem.title),1),p])):w.tempItem.hasOwnProperty("code")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",b,[Object(a["createVNode"])("p",m,"優惠券代碼："+Object(a["toDisplayString"])(w.tempItem.code),1),j])):w.tempItem.hasOwnProperty("user")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",O,[Object(a["createVNode"])("p",h,"訂單編號："+Object(a["toDisplayString"])(w.tempItem.id),1),f])):w.tempItem.hasOwnProperty("author")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",g,[Object(a["createVNode"])("p",V,Object(a["toDisplayString"])(w.tempItem.title),1),v])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("div",N,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary w-25 d-block",onClick:t[1]||(t[1]=function(t){return e.$emit("emit-delete-modal")})}," 確認刪除 "),k])])])])],512)}var w=o("5530"),y={props:["temp"],emits:["emit-delete-modal"],data:function(){return{tempItem:{}}},watch:{temp:function(){this.tempItem=Object(w["a"])({},this.temp)}},created:function(){this.tempItem=Object(w["a"])({},this.temp)}};y.render=C;t["a"]=y},3183:function(e,t,o){"use strict";var a=o("7a23"),c={"aria-label":"Page navigation"},n={class:"pagination justify-content-center"},l={class:"page-link",href:"#"};function d(e,t,o,d,s,i){return Object(a["openBlock"])(),Object(a["createBlock"])("nav",c,[Object(a["createVNode"])("ul",n,[Object(a["createVNode"])("li",{class:["page-item",{disabled:!o.page.has_pre}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return i.changePage(o.page.current_page-1)}),["prevent"]))},"上一頁")],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(o.page.total_pages,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",{active:o.page.current_page===e}],key:e,onClick:Object(a["withModifiers"])((function(t){return i.changePage(e)}),["prevent"])},[Object(a["createVNode"])("a",l,Object(a["toDisplayString"])(e),1)],10,["onClick"])})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:!o.page.has_next}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return i.changePage(o.page.current_page+1)}),["prevent"]))},"下一頁")],2)])])}var s=o("5530"),i={props:["page"],emits:["emit-pagination"],data:function(){return{pagination:Object(s["a"])({},this.page)}},methods:{changePage:function(e){this.$emit("emit-pagination",e)}}};i.render=d;t["a"]=i},"9af8":function(e,t,o){"use strict";o.r(t);var a=o("7a23"),c={class:"bg-light"},n={class:"container p-4"},l={class:"text-end"},d={class:"container p-4"},s={class:"table mb-6"},i=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{width:"150"},"優惠名稱"),Object(a["createVNode"])("th",{width:"150"},"優惠碼"),Object(a["createVNode"])("th",{width:"120"},"折扣幅度"),Object(a["createVNode"])("th",{width:"120"},"優惠到期日"),Object(a["createVNode"])("th",{width:"80"})])],-1),r={width:"150"},u={width:"150"},p={width:"120"},b={width:"120"},m={width:"80"};function j(e,t,o,j,O,h){var f=Object(a["resolveComponent"])("Alert"),g=Object(a["resolveComponent"])("Pagination"),V=Object(a["resolveComponent"])("Coupon-edit-modal"),v=Object(a["resolveComponent"])("Coupon-delete-modal");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",c,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary d-inline-flex",onClick:t[1]||(t[1]=function(e){return h.openModal(e,"addCoupon")})}," 新增優惠券 ")])])]),Object(a["createVNode"])("div",d,[Object(a["createVNode"])("table",s,[i,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(O.coupons,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e.id},[Object(a["createVNode"])("td",r,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.title)+" ",1),Object(a["createVNode"])("i",{class:["bi bi-check-circle-fill me-1 align-bottom d-inline",{"text-success":e.is_enabled,"text-gray":!e.is_enabled}]},null,2)]),Object(a["createVNode"])("td",u,Object(a["toDisplayString"])(e.code),1),Object(a["createVNode"])("td",p,Object(a["toDisplayString"])(e.percent)+"%",1),Object(a["createVNode"])("td",b,Object(a["toDisplayString"])(e.due_date),1),Object(a["createVNode"])("td",m,[Object(a["createVNode"])("i",{class:"bi bi-pencil-square",onClick:function(t){return h.openModal(e,"editCoupon")}},null,8,["onClick"]),Object(a["createVNode"])("i",{class:"bi bi-trash-fill ms-2",onClick:function(t){return h.openModal(e,"deleteCoupon")},"data-bs-toggle":"modal","data-bs-target":"#deleteModal"},null,8,["onClick"])])])})),128))])]),O.showAlert?(Object(a["openBlock"])(),Object(a["createBlock"])(f,{key:0,"alert-msg":O.alertMsg},null,8,["alert-msg"])):Object(a["createCommentVNode"])("",!0),O.pagination.total_pages>1?(Object(a["openBlock"])(),Object(a["createBlock"])(g,{key:1,page:O.pagination,onEmitPagination:h.getData},null,8,["page","onEmitPagination"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(V,{"modal-title":O.modalTitle,temp:O.temp,onEmitCouponModal:h.addNewCoupon,ref:"couponModal"},null,8,["modal-title","temp","onEmitCouponModal"])]),Object(a["createVNode"])(v,{temp:O.temp,onEmitDeleteModal:h.deleteCoupon},null,8,["temp","onEmitDeleteModal"])],64)}var O=o("5530"),h=(o("99af"),o("b64b"),o("159b"),o("ac1f"),o("5319"),o("1276"),o("a02d")),f=o("3183"),g=o("7b17"),V={id:"couponModal",ref:"couponModal",class:"modal fade",tabindex:"-1","aria-labelledby":"couponModalLabel","aria-hidden":"true"},v={class:"modal-dialog modal-xl"},N={class:"modal-content coupon-modal-bg"},k={class:"modal-body"},C=Object(a["createVNode"])("div",{class:"text-end"},[Object(a["createVNode"])("button",{type:"button",class:"bg-transparent border-0 p-2 text-secondary h3","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createVNode"])("i",{class:"bi bi-x-lg"})])],-1),w={class:"container-fluid"},y={class:"row"},M={class:"col-6 mb-2"},_=Object(a["createVNode"])("label",{for:"couponTitle",class:"form-label"},"優惠名稱",-1),B={class:"col-6 mb-2"},x=Object(a["createVNode"])("label",{for:"couponCode",class:"form-label"},"優惠碼",-1),D={class:"col-6 mb-2"},A=Object(a["createVNode"])("label",{for:"couponPercent",class:"form-label"},"折扣幅度",-1),T={class:"col-6 mb-2"},L=Object(a["createVNode"])("label",{for:"couponDueDate",class:"form-label"},"優惠到期日",-1),P={class:"form-check"},I=Object(a["createVNode"])("label",{class:"form-check-label",for:"couponEnabled"},"優惠是否啟用",-1),S={class:"d-flex justify-content-center"},E=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark d-none",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),$={class:"ms-1"},F=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function U(e,t,o,c,n,l){var d=Object(a["resolveComponent"])("Field"),s=Object(a["resolveComponent"])("ErrorMessage"),i=Object(a["resolveComponent"])("flat-pickr"),r=Object(a["resolveComponent"])("Form");return Object(a["openBlock"])(),Object(a["createBlock"])("div",V,[Object(a["createVNode"])("div",v,[Object(a["createVNode"])("div",N,[Object(a["createVNode"])("div",k,[C,Object(a["createVNode"])("div",w,[Object(a["createVNode"])(r,{onSubmit:l.emitData,class:"mb-4"},{default:Object(a["withCtx"])((function(e){var o=e.errors;return[Object(a["createVNode"])("div",y,[Object(a["createVNode"])("div",M,[_,Object(a["createVNode"])(d,{type:"text",id:"couponTitle",name:"名稱",class:["form-control",{"is-invalid":o["名稱"]}],disabled:n.tempCoupon.over_due,rules:"required",modelValue:n.tempCoupon.title,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.tempCoupon.title=e})},null,8,["class","disabled","modelValue"]),Object(a["createVNode"])(s,{name:"名稱",class:"invalid-feedback"})]),Object(a["createVNode"])("div",B,[x,Object(a["createVNode"])(d,{type:"text",id:"couponCode",name:"優惠碼",class:["form-control",{"is-invalid":o["優惠碼"]}],disabled:n.tempCoupon.over_due,rules:"required",modelValue:n.tempCoupon.code,"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.tempCoupon.code=e})},null,8,["class","disabled","modelValue"]),Object(a["createVNode"])(s,{name:"優惠碼",class:"invalid-feedback"})]),Object(a["createVNode"])("div",D,[A,Object(a["createVNode"])(d,{type:"number",id:"couponPercent",name:"折扣幅度",class:["form-control",{"is-invalid":o["折扣幅度"]}],placeholder:"原價將乘以此百分比，成為折扣後的新價錢",disabled:n.tempCoupon.over_due,rules:"required",modelValue:n.tempCoupon.percent,"onUpdate:modelValue":t[3]||(t[3]=function(e){return n.tempCoupon.percent=e}),modelModifiers:{number:!0}},null,8,["class","disabled","modelValue"]),Object(a["createVNode"])(s,{name:"折扣幅度",class:"invalid-feedback"})]),Object(a["createVNode"])("div",T,[L,n.tempCoupon.over_due?(Object(a["openBlock"])(),Object(a["createBlock"])("input",{key:0,type:"text",class:"form-control",disabled:n.tempCoupon.over_due,placeholder:n.tempCoupon.due_date},null,8,["disabled","placeholder"])):(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:1,id:"couponDueDate",ref:"couponDueDate",class:"form-control",config:n.config,modelValue:n.tempCoupon.due_date,"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.tempCoupon.due_date=e})},null,8,["config","modelValue"]))])]),Object(a["createVNode"])("div",P,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"checkbox",class:"form-check-input",id:"couponEnabled",disabled:n.tempCoupon.over_due,"onUpdate:modelValue":t[5]||(t[5]=function(e){return n.tempCoupon.is_enabled=e})},null,8,["disabled"]),[[a["vModelCheckbox"],n.tempCoupon.is_enabled]]),I])]})),_:1},8,["onSubmit"]),Object(a["createVNode"])("div",S,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary w-25 d-flex justify-content-center align-items-center",ref:"couponAdminBtn",onClick:t[6]||(t[6]=function(){return l.emitData&&l.emitData.apply(l,arguments)}),disabled:n.tempCoupon.over_due},[E,Object(a["createVNode"])("p",$,Object(a["toDisplayString"])(o.modalTitle),1)],8,["disabled"]),F])])])])])],512)}o("a15b");var q=o("c38f"),J=o.n(q),Y=(o("0952"),{props:["modalTitle","temp"],emits:["emit-coupon-modal"],data:function(){return{tempCoupon:{},config:{altFormat:"F j, Y",dateFormat:"Y-m-d",minDate:"today"}}},components:{flatPickr:J.a},methods:{emitData:function(){this.tempCoupon.due_date=Math.floor(new Date(this.tempCoupon.due_date)/1e3),this.$emit("emit-coupon-modal",this.modalTitle,this.tempCoupon)}},watch:{temp:function(){this.tempCoupon=Object(O["a"])({},this.temp),0!==Object.keys(this.tempCoupon).length&&(this.tempCoupon.due_date=this.temp.due_date.split(" / ").join("-"))}},created:function(){this.tempCoupon=Object(O["a"])({},this.temp)}});Y.render=U;var z=Y,G=o("212e"),H={data:function(){return{temp:{},coupons:[],pagination:{},modalTitle:"",couponModal:{},deleteModal:{},showAlert:!1,alertMsg:""}},components:{Alert:h["a"],Pagination:f["a"],CouponEditModal:z,CouponDeleteModal:G["a"]},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/coupons/?page=").concat(t)).then((function(t){if(t.data.success){var o=t.data;e.coupons=o.coupons,0!==Object.keys(e.coupons).length&&e.coupons.forEach((function(t,o){Math.floor(new Date/1e3)>t.due_date?(e.coupons[o].is_enabled=0,e.coupons[o].over_due=!0):e.coupons[o].over_due=!1;var a=new Date(1e3*t.due_date).toISOString().split("T")[0].replace(/-/g," / ");e.coupons[o].due_date=a})),e.pagination=t.data.pagination}else e.customAlert(t.data.message),window.setTimeout(e.closeCustomAlert,5e3)})).catch((function(t){e.customAlert(t.response),window.setTimeout(e.closeCustomAlert,5e3)}))},customAlert:function(e){this.alertMsg=e,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1},openModal:function(e,t){switch(t){case"addCoupon":this.clearModal(),this.modalTitle="新增",this.couponModal.show();break;case"editCoupon":this.modalTitle="完成編輯",this.temp=Object(O["a"])({},e),this.temp.is_enabled=1===this.temp.is_enabled,this.couponModal.show();break;case"deleteCoupon":this.temp=Object(O["a"])({},e);break;default:break}},clearModal:function(){this.temp={}},addNewCoupon:function(e,t){var o=this,a=this.$refs.couponModal.$refs.couponAdminBtn;a.classList.add("disabled"),a.children[0].classList.remove("d-none");var c={};if(c.data=Object(O["a"])({},t),c.data.is_enabled=c.data.is_enabled?1:0,"新增"===e)this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/coupon"),c).then((function(e){e.data.success?(o.couponModal.hide(),o.customAlert("新增完成"),o.getData(),a.classList.remove("disabled"),a.children[0].classList.add("d-none"),window.setTimeout(o.closeCustomAlert,5e3)):(a.classList.remove("disabled"),a.children[0].classList.add("d-none"),o.customAlert(e.data.message),window.setTimeout(o.closeCustomAlert,5e3))})).catch((function(e){a.classList.remove("disabled"),a.children[0].classList.add("d-none"),o.customAlert(e.response),window.setTimeout(o.closeCustomAlert,5e3)}));else if("完成編輯"===e){var n=t.id;this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/coupon/").concat(n),c).then((function(e){e.data.success?(o.couponModal.hide(),o.customAlert("編輯成功"),o.getData(),a.classList.remove("disabled"),a.children[0].classList.add("d-none"),window.setTimeout(o.closeCustomAlert,5e3)):(a.classList.remove("disabled"),a.children[0].classList.add("d-none"),o.customAlert(e.data.message),window.setTimeout(o.closeCustomAlert,5e3))})).catch((function(e){a.classList.remove("disabled"),a.children[0].classList.add("d-none"),o.customAlert(e.response),window.setTimeout(o.closeCustomAlert,5e3)}))}},deleteCoupon:function(){var e=this,t=this.temp.id;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/coupon/").concat(t)).then((function(t){t.data.success?(e.customAlert("刪除成功"),e.getData(),e.clearModal(),e.deleteModal.hide(),window.setTimeout(e.closeCustomAlert,5e3)):(e.customAlert(t.data.message),window.setTimeout(e.closeCustomAlert,5e3))})).catch((function(t){e.customAlert(t.response),window.setTimeout(e.closeCustomAlert,5e3)}))}},created:function(){this.getData()},mounted:function(){this.couponModal=new g["a"](document.getElementById("couponModal"),{keyboard:!1}),this.deleteModal=new g["a"](document.getElementById("deleteModal"),{keyboard:!1})}};H.render=j;t["default"]=H}}]);
//# sourceMappingURL=chunk-3c8e822e.fc82bb0e.js.map