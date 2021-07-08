(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-021bdb9a"],{1799:function(e,t,o){"use strict";var a=o("7a23"),c={"aria-label":"Page navigation"},n={class:"pagination justify-content-center"},l={class:"page-link",href:"#"};function d(e,t,o,d,s,i){return Object(a["openBlock"])(),Object(a["createBlock"])("nav",c,[Object(a["createVNode"])("ul",n,[Object(a["createVNode"])("li",{class:["page-item",{disabled:!o.page.has_pre}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return i.changePage(o.page.current_page-1)}),["prevent"]))},"Previous")],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(o.page.total_pages,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",{active:o.page.current_page===e}],key:e,onClick:Object(a["withModifiers"])((function(t){return i.changePage(e)}),["prevent"])},[Object(a["createVNode"])("a",l,Object(a["toDisplayString"])(e),1)],10,["onClick"])})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:!o.page.has_next}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return i.changePage(o.page.current_page+1)}),["prevent"]))},"Next")],2)])])}var s={props:["page"],methods:{changePage:function(e){console.log(e),this.$emit("emit-pagination",e)}}};s.render=d;t["a"]=s},"9b31":function(e,t,o){"use strict";o.r(t);var a=o("7a23"),c={class:"bg-light"},n={class:"container p-4"},l={class:"text-end"},d={class:"container p-4"},s={class:"table mb-6"},i=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{width:"150"},"優惠名稱"),Object(a["createVNode"])("th",{width:"150"},"優惠碼"),Object(a["createVNode"])("th",{width:"120"},"折扣幅度"),Object(a["createVNode"])("th",{width:"120"},"優惠到期日"),Object(a["createVNode"])("th",{width:"80"})])],-1),r={width:"150"},p={width:"150"},b={width:"120"},u={width:"120"},m={width:"80"},j={class:"ms-2"};function O(e,t,o,O,h,f){var g=Object(a["resolveComponent"])("alert"),V=Object(a["resolveComponent"])("pagination"),v=Object(a["resolveComponent"])("coupon-edit-modal"),N=Object(a["resolveComponent"])("coupon-delete-modal");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",c,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary d-inline-flex",onClick:t[1]||(t[1]=function(e){return f.openModal(e,"addCoupon")})}," 新增優惠券 ")])])]),Object(a["createVNode"])("div",d,[Object(a["createVNode"])("table",s,[i,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(h.coupons,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e.id},[Object(a["createVNode"])("td",r,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.title)+" ",1),Object(a["createVNode"])("span",{class:["material-icons me-1 align-bottom d-inline",{"text-success":e.is_enabled,"text-gray":!e.is_enabled}]},Object(a["toDisplayString"])(1===e.is_enabled?"check_circle":"do_disturb"),3)]),Object(a["createVNode"])("td",p,Object(a["toDisplayString"])(e.code),1),Object(a["createVNode"])("td",b,Object(a["toDisplayString"])(e.percent)+"%",1),Object(a["createVNode"])("td",u,Object(a["toDisplayString"])(e.due_date),1),Object(a["createVNode"])("td",m,[Object(a["createVNode"])("a",null,[Object(a["createVNode"])("span",{class:"material-icons",onClick:function(t){return f.openModal(e,"editCoupon")}}," mode_edit ",8,["onClick"])]),Object(a["createVNode"])("a",j,[Object(a["createVNode"])("span",{class:"material-icons",onClick:function(t){return f.openModal(e,"deleteCoupon")},"data-bs-toggle":"modal","data-bs-target":"#deleteModal"}," delete ",8,["onClick"])])])])})),128))])]),h.showAlert?(Object(a["openBlock"])(),Object(a["createBlock"])(g,{key:0,"alert-msg":h.alertMsg},null,8,["alert-msg"])):Object(a["createCommentVNode"])("",!0),h.pagination.total_pages>1?(Object(a["openBlock"])(),Object(a["createBlock"])(V,{key:1,page:h.pagination,onEmitPagination:f.getData},null,8,["page","onEmitPagination"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(v,{"modal-title":h.modalTitle,temp:h.temp,onEmitCouponModal:f.addNewCoupon,ref:"couponModal"},null,8,["modal-title","temp","onEmitCouponModal"])]),Object(a["createVNode"])(N,{temp:h.temp,onEmitDeleteModal:f.deleteCoupon},null,8,["temp","onEmitDeleteModal"])],64)}var h=o("5530"),f=(o("99af"),o("b64b"),o("159b"),o("ac1f"),o("5319"),o("1276"),o("98ab")),g=o("1799"),V=o("7b17"),v={id:"couponModal",ref:"couponModal",class:"modal fade",tabindex:"-1","aria-labelledby":"couponModalLabel","aria-hidden":"true"},N={class:"modal-dialog modal-xl"},k={class:"modal-content coupon-modal-bg"},C={class:"modal-body"},y=Object(a["createVNode"])("div",{class:"text-end"},[Object(a["createVNode"])("button",{type:"button",class:"bg-transparent border-0 p-2 text-secondary h3","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createVNode"])("i",{class:"bi bi-x-lg"})])],-1),w={class:"container-fluid"},M={class:"mb-4"},_={class:"row"},x={class:"col-6 mb-2"},D=Object(a["createVNode"])("label",{for:"couponTitle",class:"form-label"},"優惠名稱",-1),B={class:"col-6 mb-2"},A=Object(a["createVNode"])("label",{for:"couponCode",class:"form-label"},"優惠碼",-1),L={class:"col-6 mb-2"},T=Object(a["createVNode"])("label",{for:"couponPercent",class:"form-label"},"折扣幅度",-1),P={class:"col-6 mb-2"},I=Object(a["createVNode"])("label",{for:"couponDueDate",class:"form-label"},"優惠到期日",-1),S={class:"form-check"},E=Object(a["createVNode"])("label",{class:"form-check-label",for:"couponEnabled"},"優惠是否啟用",-1),$={class:"d-flex justify-content-center"},F=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark d-none",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),U={class:"ms-1"},J=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-dark w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function Y(e,t,o,c,n,l){var d=Object(a["resolveComponent"])("flat-pickr");return Object(a["openBlock"])(),Object(a["createBlock"])("div",v,[Object(a["createVNode"])("div",N,[Object(a["createVNode"])("div",k,[Object(a["createVNode"])("div",C,[y,Object(a["createVNode"])("div",w,[Object(a["createVNode"])("form",M,[Object(a["createVNode"])("div",_,[Object(a["createVNode"])("div",x,[D,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",id:"couponTitle",class:"form-control",disabled:n.tempCoupon.over_due,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.tempCoupon.title=e})},null,8,["disabled"]),[[a["vModelText"],n.tempCoupon.title]])]),Object(a["createVNode"])("div",B,[A,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",id:"couponCode",class:"form-control",disabled:n.tempCoupon.over_due,"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.tempCoupon.code=e})},null,8,["disabled"]),[[a["vModelText"],n.tempCoupon.code]])]),Object(a["createVNode"])("div",L,[T,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"number",id:"couponPercent",class:"form-control",min:"1",max:"99",placeholder:"原價將乘以此百分比，成為折扣後的新價錢",disabled:n.tempCoupon.over_due,"onUpdate:modelValue":t[3]||(t[3]=function(e){return n.tempCoupon.percent=e})},null,8,["disabled"]),[[a["vModelText"],n.tempCoupon.percent,void 0,{number:!0}]])]),Object(a["createVNode"])("div",P,[I,n.tempCoupon.over_due?(Object(a["openBlock"])(),Object(a["createBlock"])("input",{key:0,type:"text",class:"form-control",disabled:n.tempCoupon.over_due,placeholder:n.tempCoupon.due_date},null,8,["disabled","placeholder"])):(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:1,id:"couponDueDate",ref:"couponDueDate",class:"form-control",config:n.config,modelValue:n.tempCoupon.due_date,"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.tempCoupon.due_date=e})},null,8,["config","modelValue"]))])]),Object(a["createVNode"])("div",S,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"checkbox",class:"form-check-input",id:"couponEnabled",disabled:n.tempCoupon.over_due,"onUpdate:modelValue":t[5]||(t[5]=function(e){return n.tempCoupon.is_enabled=e})},null,8,["disabled"]),[[a["vModelCheckbox"],n.tempCoupon.is_enabled]]),E])]),Object(a["createVNode"])("div",$,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary w-25 d-flex justify-content-center align-items-center",ref:"couponAdminBtn",onClick:t[6]||(t[6]=function(){return l.emitData&&l.emitData.apply(l,arguments)}),disabled:n.tempCoupon.over_due},[F,Object(a["createVNode"])("p",U,Object(a["toDisplayString"])(o.modalTitle),1)],8,["disabled"]),J])])])])])],512)}o("a15b");var q=o("c38f"),z=o.n(q),G=(o("0952"),{props:["modalTitle","temp"],data:function(){return{tempCoupon:{},config:{altFormat:"F j, Y",dateFormat:"Y-m-d",minDate:"today"}}},components:{flatPickr:z.a},methods:{emitData:function(){this.tempCoupon.due_date=Math.floor(new Date(this.tempCoupon.due_date)/1e3),this.$emit("emit-coupon-modal",this.modalTitle,this.tempCoupon)}},watch:{temp:function(){this.tempCoupon=Object(h["a"])({},this.temp),0!==Object.keys(this.tempCoupon).length&&(this.tempCoupon.due_date=this.temp.due_date.split(" / ").join("-"))}},created:function(){this.tempCoupon=Object(h["a"])({},this.temp)}});G.render=Y;var H=G,K=o("ec05"),Q={data:function(){return{temp:{},coupons:[],pagination:{},modalTitle:"",couponModal:{},deleteModal:{},showAlert:!1,alertMsg:""}},components:{alert:f["a"],pagination:g["a"],couponEditModal:H,couponDeleteModal:K["a"]},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/coupons/?page=").concat(t)).then((function(t){if(t.data.success){var o=t.data;e.coupons=o.coupons,0!==Object.keys(e.coupons).length&&e.coupons.forEach((function(t,o){Math.floor(new Date/1e3)>t.due_date?(e.coupons[o].is_enabled=0,e.coupons[o].over_due=!0):e.coupons[o].over_due=!1;var a=new Date(1e3*t.due_date).toISOString().split("T")[0].replace(/-/g," / ");e.coupons[o].due_date=a})),e.pagination=t.data.pagination}else e.customAlert(t.data.message)})).catch((function(t){e.customAlert(t.response)}))},customAlert:function(e){this.alertMsg=e,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1},openModal:function(e,t){switch(t){case"addCoupon":this.clearModal(),this.modalTitle="新增",this.couponModal.show();break;case"editCoupon":this.modalTitle="完成編輯",this.temp=Object(h["a"])({},e),this.temp.is_enabled=1===this.temp.is_enabled,this.couponModal.show();break;case"deleteCoupon":this.temp=Object(h["a"])({},e);break;default:break}},clearModal:function(){this.temp={}},addNewCoupon:function(e,t){var o=this,a=this.$refs.couponModal.$refs.couponAdminBtn;a.classList.add("disabled"),a.children[0].classList.remove("d-none");var c={};if(c.data=Object(h["a"])({},t),c.data.is_enabled=c.data.is_enabled?1:0,"新增"===e)this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/coupon"),c).then((function(e){e.data.success?(o.couponModal.hide(),o.customAlert("新增完成"),o.getData(),a.classList.remove("disabled"),a.children[0].classList.add("d-none"),window.setTimeout(o.closeCustomAlert,5e3)):(a.classList.remove("disabled"),a.children[0].classList.add("d-none"),o.customAlert(e.data.message))})).catch((function(e){a.classList.remove("disabled"),a.children[0].classList.add("d-none"),o.customAlert(e.response)}));else if("完成編輯"===e){var n=t.id;this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/coupon/").concat(n),c).then((function(e){e.data.success?(o.couponModal.hide(),o.customAlert("編輯成功"),o.getData(),a.classList.remove("disabled"),a.children[0].classList.add("d-none"),window.setTimeout(o.closeCustomAlert,5e3)):(a.classList.remove("disabled"),a.children[0].classList.add("d-none"),o.customAlert(e.data.message))})).catch((function(e){a.classList.remove("disabled"),a.children[0].classList.add("d-none"),o.customAlert(e.response)}))}},deleteCoupon:function(){var e=this,t=this.temp.id;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/coupon/").concat(t)).then((function(t){t.data.success?(e.customAlert("刪除成功"),e.getData(),e.clearModal(),e.deleteModal.hide(),window.setTimeout(e.closeCustomAlert,5e3)):e.customAlert(t.data.message)})).catch((function(t){e.customAlert(t.response)}))}},created:function(){this.getData()},mounted:function(){this.couponModal=new V["a"](document.getElementById("couponModal"),{keyboard:!1}),this.deleteModal=new V["a"](document.getElementById("deleteModal"),{keyboard:!1})}};Q.render=O;t["default"]=Q},ec05:function(e,t,o){"use strict";var a=o("7a23"),c={id:"deleteModal",ref:"deleteModal",class:"modal fade",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},n={class:"modal-dialog"},l={class:"modal-content delete-modal-bg"},d={class:"modal-body"},s=Object(a["createVNode"])("div",{class:"text-end"},[Object(a["createVNode"])("button",{type:"button",class:"bg-transparent border-0 p-2 text-secondary h3","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createVNode"])("i",{class:"bi bi-x-lg"})])],-1),i={class:"delete-modal-inner-bg mb-4"},r={key:0,class:"text-center"},p={class:"h3 mb-2"},b=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),u={key:1,class:"text-center"},m={class:"h3 mb-2"},j=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),O={key:2,class:"text-center"},h={class:"h3 mb-2"},f=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),g={key:3,class:"text-center"},V={class:"h3 mb-2"},v=Object(a["createVNode"])("p",null,"一經刪除及無法復原，是否確認刪除？",-1),N={class:"d-flex justify-content-center"},k=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function C(e,t,o,C,y,w){return Object(a["openBlock"])(),Object(a["createBlock"])("div",c,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",d,[s,Object(a["createVNode"])("div",i,[y.tempItem.hasOwnProperty("is_mainProduct")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",r,[Object(a["createVNode"])("p",p,Object(a["toDisplayString"])(y.tempItem.title),1),b])):y.tempItem.hasOwnProperty("code")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",u,[Object(a["createVNode"])("p",m,"優惠券代碼："+Object(a["toDisplayString"])(y.tempItem.code),1),j])):y.tempItem.hasOwnProperty("user")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",O,[Object(a["createVNode"])("p",h,"訂單編號："+Object(a["toDisplayString"])(y.tempItem.id),1),f])):y.tempItem.hasOwnProperty("author")?(Object(a["openBlock"])(),Object(a["createBlock"])("div",g,[Object(a["createVNode"])("p",V,Object(a["toDisplayString"])(y.tempItem.title),1),v])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("div",N,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary w-25 d-block",onClick:t[1]||(t[1]=function(t){return e.$emit("emit-delete-modal")})}," 確認刪除 "),k])])])])],512)}var y=o("5530"),w={props:["temp"],data:function(){return{tempItem:Object(y["a"])({},this.temp)}},watch:{temp:function(){this.tempItem=Object(y["a"])({},this.temp)}},created:function(){this.tempItem=Object(y["a"])({},this.temp)}};w.render=C;t["a"]=w}}]);
//# sourceMappingURL=chunk-021bdb9a.b8e2db5d.js.map