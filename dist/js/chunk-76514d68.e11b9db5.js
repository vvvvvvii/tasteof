(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76514d68"],{2355:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o={class:"pt-7 flex-fill"};function r(e,t,c,r,s,l){var n=Object(a["resolveComponent"])("checkCart"),i=Object(a["resolveComponent"])("confirmCart"),d=Object(a["resolveComponent"])("finishCart"),u=Object(a["resolveComponent"])("alert");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",o,[s.checkCartPageShow?(Object(a["openBlock"])(),Object(a["createBlock"])(n,{key:0,ref:"checkCart",customer:s.customerDetail,"cart-info":s.cart,onEmitChangeTktNum:l.changeTktNum,onEmitDeleteProduct:l.deleteProduct,onEmitDeleteAllProducts:l.deleteAllProducts,onEmitAddPax:l.addPax,onEmitDeletePax:l.deletePax,onEmitNextPage:l.saveCustomerDetail},null,8,["customer","cart-info","onEmitChangeTktNum","onEmitDeleteProduct","onEmitDeleteAllProducts","onEmitAddPax","onEmitDeletePax","onEmitNextPage"])):Object(a["createCommentVNode"])("",!0),s.confirmCartPageShow?(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:1,ref:"confirmCart",customer:s.customerDetail,"cart-info":s.cart,payment:s.paymentDetail,onEmitCheckCoupon:l.checkCoupon,onEmitPrePage:l.backToFirstPage,onEmitAddOrder:l.addOrder},null,8,["customer","cart-info","payment","onEmitCheckCoupon","onEmitPrePage","onEmitAddOrder"])):Object(a["createCommentVNode"])("",!0),s.finishCartPageShow?(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:2,"order-detail":s.orderDetail},null,8,["order-detail"])):Object(a["createCommentVNode"])("",!0)]),s.showAlert?(Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:0,"alert-msg":s.alertMsg},null,8,["alert-msg"])):Object(a["createCommentVNode"])("",!0)],64)}var s=c("5530"),l=(c("99af"),c("caad"),c("2532"),c("b64b"),c("a434"),c("a02d")),n=(c("b0c0"),{class:"container py-8"}),i={class:"bg-light rounded-3 p-7"},d={key:0},u={class:"d-flex justify-content-between mb-6"},m=Object(a["createVNode"])("h2",{class:"h3 text-primary"},"訂單內容",-1),b=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-light d-none me-1",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),p=Object(a["createVNode"])("p",null,"清空購物車",-1),j={class:"row mb-7"},O={class:"px-3 py-4 mb-2 border border-primary rounded-1 position-relative"},h={class:"d-flex justify-content-between pb-3 mb-2\n                border-bottom border-gray"},f={class:"mb-2"},N={class:"w-50 d-flex flex-column justify-content-between"},V={class:"h3-sm"},v={class:"h4-sm h5 mb-3"},g={class:"text-end"},y={class:"d-flex justify-content-evenly"},k={key:0,class:"d-flex align-items-center h4-sm h5"},C=Object(a["createVNode"])("i",{class:"bi bi-dash-lg"},null,-1),x=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark d-none",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),D=Object(a["createVNode"])("i",{class:"bi bi-plus-lg"},null,-1),w=Object(a["createTextVNode"])(" 大 "),P={key:1,class:"d-flex align-items-center h4-sm h5"},B=Object(a["createVNode"])("i",{class:"bi bi-dash-lg"},null,-1),A=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark d-none",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),S=Object(a["createVNode"])("i",{class:"bi bi-plus-lg"},null,-1),L=Object(a["createTextVNode"])(" 小 "),T=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark d-none",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),I={class:"d-flex justify-content-between mb-lg-4 mb-2"},$=Object(a["createVNode"])("h2",{class:"h3 text-primary"},"客戶資料",-1),E={class:"d-flex justify-content-between mb-4"},M={class:"col-md-3 col-6 mb-3"},U={class:"col-md-3 col-6 mb-3"},_=Object(a["createVNode"])("option",{disabled:"",value:""},"請選擇稱謂",-1),q=Object(a["createVNode"])("option",{selected:"",value:"先生"},"先生",-1),F=Object(a["createVNode"])("option",{value:"女士"},"女士",-1),G={class:"col-md-3 col-6 mb-3"},J={class:"col-md-3 col-6 mb-3"},R={class:"col-lg-3 col-sm-4 mb-3"},z={class:"col-lg-3 col-sm-8 mb-3"},H={class:"col-lg-6 mb-3"},Z={key:0,class:"mb-7"},K={class:"d-flex flex-column align-items-end"},Q={class:"h3 mb-3"},W=Object(a["createTextVNode"])(" 總金額 "),X={class:"h2 text-primary"},Y=Object(a["createVNode"])("p",{class:"h3"},"下一步",-1),ee={key:1,class:"text-center"},te=Object(a["createVNode"])("p",{class:"mb-4"},[Object(a["createTextVNode"])(" 購物車目前還沒有商品耶 "),Object(a["createVNode"])("i",{class:"bi bi-eraser"})],-1),ce={class:"mb-2"},ae=Object(a["createTextVNode"])(" 客倌要不要 "),oe=Object(a["createTextVNode"])(" 來這裡挑挑看、選選看 "),re=Object(a["createTextVNode"])(" 呢？ "),se=Object(a["createTextVNode"])(" 也可以 "),le=Object(a["createTextVNode"])(" 來這裡尋找玩樂靈感 "),ne=Object(a["createTextVNode"])(" 唷！ ");function ie(e,t,c,o,r,s){var l=Object(a["resolveComponent"])("Field"),ie=Object(a["resolveComponent"])("ErrorMessage"),de=Object(a["resolveComponent"])("Form"),ue=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("div",n,[Object(a["createVNode"])("div",i,[r.cart.total>0?(Object(a["openBlock"])(),Object(a["createBlock"])("div",d,[Object(a["createVNode"])("div",u,[m,Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary d-flex justify-content-center align-items-center px-5",onClick:t[1]||(t[1]=function(t){return e.$emit("emit-delete-all-products")}),ref:"deleteOrderBtn",disabled:0==Object.keys(r.cart).length||0==r.cart.total},[b,p],8,["disabled"])]),Object(a["createVNode"])("div",j,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.cart.carts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{key:t.id,class:"col-xl-4 col-md-6"},[Object(a["createVNode"])("div",O,[Object(a["createVNode"])("div",h,[Object(a["createVNode"])("div",null,[Object(a["createVNode"])("p",f,Object(a["toDisplayString"])(t.start_date),1),Object(a["createVNode"])("img",{src:t.product.imageUrl,alt:t.title,class:"cart-img"},null,8,["src","alt"])]),Object(a["createVNode"])("div",N,[Object(a["createVNode"])("div",null,[Object(a["createVNode"])("p",V,Object(a["toDisplayString"])(t.product.title),1),Object(a["createVNode"])("p",v,Object(a["toDisplayString"])(t.optionName),1)]),Object(a["createVNode"])("p",g,"NT "+Object(a["toDisplayString"])(s.addComma(t.total)),1)])]),Object(a["createVNode"])("div",y,[t.qtyDetail?(Object(a["openBlock"])(),Object(a["createBlock"])("div",k,[Object(a["createVNode"])("button",{type:"button",class:"border-0 bg-transparent p-2",onClick:function(c){return e.$emit("emit-change-tkt-num","adult","minus",t.qtyDetail,t.id)}},[C],8,["onClick"]),Object(a["createVNode"])("div",{class:"p-1",ref:"adultStatus".concat(t.id)},[x,Object(a["createVNode"])("p",null,Object(a["toDisplayString"])(t.qtyDetail.adult),1)],512),Object(a["createVNode"])("button",{type:"button",class:"border-0 bg-transparent p-2",onClick:function(c){return e.$emit("emit-change-tkt-num","adult","plus",t.qtyDetail,t.id)}},[D],8,["onClick"]),w])):Object(a["createCommentVNode"])("",!0),t.qtyDetail?(Object(a["openBlock"])(),Object(a["createBlock"])("div",P,[Object(a["createVNode"])("button",{type:"button",class:"border-0 bg-transparent p-2",onClick:function(c){return e.$emit("emit-change-tkt-num","child","minus",t.qtyDetail,t.id)}},[B],8,["onClick"]),Object(a["createVNode"])("div",{class:"p-1",ref:"childStatus".concat(t.id)},[A,Object(a["createVNode"])("p",null,Object(a["toDisplayString"])(t.qtyDetail.child),1)],512),Object(a["createVNode"])("button",{type:"button",class:"border-0 bg-transparent p-2",onClick:function(c){return e.$emit("emit-change-tkt-num","child","plus",t.qtyDetail,t.id)}},[S],8,["onClick"]),L])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("a",{type:"button",class:"delete-cart-icon",ref:"deleteCartProduct".concat(t.id)},[T,Object(a["createVNode"])("i",{class:"bi bi-trash-fill",onClick:function(c){return e.$emit("emit-delete-product",t.id)}},null,8,["onClick"])],512)])])])})),128))]),Object(a["createVNode"])("div",I,[$,Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary d-block px-5",onClick:t[2]||(t[2]=function(t){return e.$emit("emit-add-pax")})}," 新增旅客 ")]),Object(a["createVNode"])(de,{onSubmit:s.toNextPage},{default:Object(a["withCtx"])((function(c){var o=c.errors;return[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.customerDetail.users,(function(t,c){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:c},[Object(a["createVNode"])("div",E,[Object(a["createVNode"])("p",null,Object(a["toDisplayString"])("第 ".concat(c+1," 位旅客")),1),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary d-block px-5",onClick:function(t){return e.$emit("emit-delete-pax",c)}}," 刪除旅客 ",8,["onClick"])]),Object(a["createVNode"])("div",{class:["row",{"mb-6":c!==r.customerDetail.users.length-1}]},[Object(a["createVNode"])("div",M,[Object(a["createVNode"])("label",{for:"bookNameCartInput-".concat(c),class:"form-label"},"姓名",8,["for"]),Object(a["createVNode"])(l,{type:"text",id:"bookNameCartInput-".concat(c),name:"第 ".concat(c+1," 位姓名"),class:["form-control",{"is-invalid":o["第 ".concat(c+1," 位姓名")]}],rules:"required",modelValue:r.customerDetail.users[c].name,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].name=e}},null,8,["id","name","class","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(ie,{name:"第 ".concat(c+1," 位姓名"),class:"invalid-feedback"},null,8,["name"])]),Object(a["createVNode"])("div",U,[Object(a["createVNode"])("label",{for:"bookGenderCartInput-".concat(c),class:"form-label"},"稱謂",8,["for"]),Object(a["createVNode"])(l,{name:"第 ".concat(c+1," 位稱謂"),class:["form-select",{"is-invalid":o["第 ".concat(c+1," 位稱謂")]}],id:"bookGenderCartInput-".concat(c),rules:"required",modelValue:r.customerDetail.users[c].gender,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].gender=e},as:"select"},{default:Object(a["withCtx"])((function(){return[_,q,F]})),_:2},1032,["name","id","class","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(ie,{name:"第 ".concat(c+1," 位稱謂"),class:"invalid-feedback"},null,8,["name"])]),Object(a["createVNode"])("div",G,[Object(a["createVNode"])("label",{for:"bookIdNumCartInput-".concat(c),class:"form-label"},"身分證字號",8,["for"]),Object(a["createVNode"])(l,{type:"text",name:"第 ".concat(c+1," 位身分證"),class:["form-control",{"is-invalid":o["第 ".concat(c+1," 位身分證")]}],id:"bookIdNumCartInput-".concat(c),rules:s.isIdNum,modelValue:r.customerDetail.users[c].idNum,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].idNum=e}},null,8,["name","id","class","rules","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(ie,{name:"第 ".concat(c+1," 位身分證"),class:"invalid-feedback"},null,8,["name"])]),Object(a["createVNode"])("div",J,[Object(a["createVNode"])("label",{for:"bookPassportNumCartInput-".concat(c),class:"form-label"}," 護照號碼 ",8,["for"]),Object(a["createVNode"])(l,{type:"text",name:"第 ".concat(c+1," 位護照號碼"),class:["form-control",{"is-invalid":o["第 ".concat(c+1," 位護照號碼")]}],id:"bookPassportNumCartInput-".concat(c),rules:"length:9|numeric",modelValue:r.customerDetail.users[c].passportNum,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].passportNum=e}},null,8,["name","id","class","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(ie,{name:"第 ".concat(c+1," 位護照號碼"),class:"invalid-feedback"},null,8,["name"])]),Object(a["createVNode"])("div",R,[Object(a["createVNode"])("label",{for:"bookTelCartInput-".concat(c),class:"form-label"},"聯繫電話",8,["for"]),Object(a["createVNode"])(l,{type:"tel",name:"第 ".concat(c+1," 位電話"),class:["form-control",{"is-invalid":o["第 ".concat(c+1," 位電話")]}],id:"bookTelCartInput-".concat(c),rules:"required|numeric|max:10",modelValue:r.customerDetail.users[c].tel,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].tel=e}},null,8,["name","id","class","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(ie,{name:"第 ".concat(c+1," 位電話"),class:"invalid-feedback"},null,8,["name"])]),Object(a["createVNode"])("div",z,[Object(a["createVNode"])("label",{for:"bookEmailCartInput-".concat(c),class:"form-label"}," 電子信箱 ",8,["for"]),Object(a["createVNode"])(l,{type:"email",name:"第 ".concat(c+1," 位 email"),class:["form-control",{"is-invalid":o["第 ".concat(c+1," 位 email")]}],id:"bookEmailCartInput-".concat(c),placeholder:"customer@example.com",rules:"email|required",modelValue:r.customerDetail.users[c].email,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].email=e}},null,8,["name","id","class","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(ie,{name:"第 ".concat(c+1," 位 email"),class:"invalid-feedback"},null,8,["name"])]),Object(a["createVNode"])("div",H,[Object(a["createVNode"])("label",{for:"bookAddrCartInput-".concat(c),class:"form-label"},"地址",8,["for"]),Object(a["createVNode"])(l,{type:"text",name:"第 ".concat(c+1," 位地址"),class:["form-control",{"is-invalid":o["第 ".concat(c+1," 位地址")]}],id:"bookAddrCartInput-".concat(c),rules:"required",modelValue:r.customerDetail.users[c].address,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].address=e}},null,8,["name","id","class","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(ie,{name:"第 ".concat(c+1," 位地址"),class:"invalid-feedback"},null,8,["name"])])],2)],64)})),128)),0!==r.customerDetail.users.length?(Object(a["openBlock"])(),Object(a["createBlock"])("div",Z,[Object(a["createVNode"])("label",{for:e.bookMessageCart,class:"form-label"},"備註（選填）",8,["for"]),Object(a["withDirectives"])(Object(a["createVNode"])("textarea",{class:"form-control",id:e.bookMessageCart,rows:"2","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.customerDetail.message=e})},null,8,["id"]),[[a["vModelText"],r.customerDetail.message]])])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("div",K,[Object(a["createVNode"])("h5",Q,[W,Object(a["createVNode"])("span",X,"NT "+Object(a["toDisplayString"])(s.addComma(Math.floor(r.cart.final_total))),1)]),Object(a["createVNode"])("button",{type:"submit",class:"btn btn-primary d-block px-5 py-2",disabled:0==Object.keys(r.cart).length||0==r.cart.total||0===r.customerDetail.users.length},[Y],8,["disabled"])])]})),_:1},8,["onSubmit"])])):(Object(a["openBlock"])(),Object(a["createBlock"])("div",ee,[te,Object(a["createVNode"])("p",ce,[ae,Object(a["createVNode"])(ue,{to:"/product_list",title:"前往產品頁",class:"text-secondary h3"},{default:Object(a["withCtx"])((function(){return[oe]})),_:1}),re]),Object(a["createVNode"])("p",null,[se,Object(a["createVNode"])(ue,{to:"/article_list",title:"前往文章頁",class:"text-secondary h3"},{default:Object(a["withCtx"])((function(){return[le]})),_:1}),ne])]))])])}c("ac1f"),c("1276"),c("d3b7"),c("25f0"),c("5319"),c("a15b");var de={props:["cartInfo","customer"],data:function(){return{cart:Object(s["a"])({},this.cartInfo),customerDetail:{users:[],message:""}}},methods:{isIdNum:function(e){var t=/^[A-Z][0-9]{9}$/;return!!t.test(e)||"請輸入正確的身分證字號"},toNextPage:function(){this.$emit("emit-next-page",this.customerDetail)}},watch:{cartInfo:{handler:function(){this.cart=Object(s["a"])({},this.cartInfo),this.cart.final_total=this.cartInfo.final_total},deep:!0},customer:function(){this.customerDetail=Object(s["a"])({},this.customer)}},computed:{addComma:function(){return function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),"".concat(t.join(","))}}},created:function(){this.cart=Object(s["a"])({},this.cartInfo),this.customerDetail=Object(s["a"])({},this.customer)}};de.render=ie;var ue=de,me={class:"container py-8"},be={class:"bg-light rounded-3 p-7"},pe=Object(a["createVNode"])("h2",{class:"h3 text-primary mb-6"},"訂單內容",-1),je={class:"row mb-7 rounded-1"},Oe={class:"px-3 py-4 mb-2 border border-primary rounded-1 position-relative"},he={class:"d-flex justify-content-between pb-2 mb-2\n           border-bottom border-gray"},fe={class:"mb-2"},Ne={class:"w-50"},Ve={class:"h3"},ve={class:"h4 mb-3"},ge={class:"text-end"},ye={class:"d-flex justify-content-evenly"},ke={class:"d-flex align-items-center"},Ce={class:"d-flex align-items-center"},xe=Object(a["createVNode"])("h2",{class:"h3 text-primary mb-6"},"客戶資料",-1),De={class:"row mb-7"},we={class:"d-flex justify-content-between"},Pe={class:"w-50 d-flex flex-column justify-content-between"},Be={class:"h3 mb-5"},Ae={class:"h4 ms-1"},Se={class:"pax-num d-sm-inline d-none"},Le={class:"w-50"},Te={class:"mb-2"},Ie={class:"mb-4"},$e={class:"mb-2 d-sm-block d-none"},Ee={class:"mb-2 d-sm-block d-none"},Me={class:"mb-2 d-sm-block d-none"},Ue={class:"mb-2 h5 d-sm-none"},_e={class:"mb-2 h5 d-sm-none"},qe={class:"mb-2 h5 d-sm-none"},Fe=Object(a["createVNode"])("h2",{class:"h3 text-primary mb-6"},"付款資料",-1),Ge={class:"row mb-7"},Je={class:"col-lg-4 col-md-6 mb-lg-0 mb-3"},Re=Object(a["createVNode"])("label",{for:"paymentMethodInput",class:"form-label"},"付款方式",-1),ze=Object(a["createVNode"])("option",{disabled:"",value:""},"請選擇付款方式",-1),He=Object(a["createVNode"])("option",{selected:"",value:"線上刷卡"},"線上刷卡",-1),Ze=Object(a["createVNode"])("option",{value:"匯款"},"匯款",-1),Ke={class:"col-lg-4 col-md-6 mb-md-0 mb-3"},Qe=Object(a["createVNode"])("label",{for:"taxIdInput",class:"form-label"},"統一編號（選填）",-1),We={class:"col-lg-4 col-md-6"},Xe=Object(a["createVNode"])("label",{for:"couponInput",class:"form-label"},"優惠券（選填）",-1),Ye={class:"input-group"},et=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-light d-none me-1",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),tt=Object(a["createTextVNode"])(" 套用優惠碼 "),ct={class:"d-flex flex-column align-items-end"},at={class:"h3 mb-3"},ot=Object(a["createTextVNode"])(" 總金額 "),rt={class:"h2 text-primary"},st={class:"d-flex"},lt=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-light d-none me-1",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),nt=Object(a["createVNode"])("p",{class:"h3"},"結帳",-1);function it(e,t,c,o,r,s){var l=Object(a["resolveComponent"])("Field"),n=Object(a["resolveComponent"])("ErrorMessage"),i=Object(a["resolveComponent"])("Form");return Object(a["openBlock"])(),Object(a["createBlock"])("div",me,[Object(a["createVNode"])("div",be,[pe,Object(a["createVNode"])("div",je,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.cart.carts,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{key:e.id,class:"col-xl-4 col-md-6"},[Object(a["createVNode"])("div",Oe,[Object(a["createVNode"])("div",he,[Object(a["createVNode"])("div",null,[Object(a["createVNode"])("p",fe,Object(a["toDisplayString"])(e.start_date),1),Object(a["createVNode"])("img",{src:e.product.imageUrl,alt:e.title,class:"cart-img"},null,8,["src","alt"])]),Object(a["createVNode"])("div",Ne,[Object(a["createVNode"])("p",Ve,Object(a["toDisplayString"])(e.product.title),1),Object(a["createVNode"])("p",ve,Object(a["toDisplayString"])(e.optionName),1),Object(a["createVNode"])("p",ge,"NT "+Object(a["toDisplayString"])(s.addComma(e.total)),1)])]),Object(a["createVNode"])("div",ye,[Object(a["createVNode"])("div",ke,Object(a["toDisplayString"])(e.qtyDetail.adult)+" 大",1),Object(a["createVNode"])("div",Ce,Object(a["toDisplayString"])(e.qtyDetail.child)+" 小",1)])])])})),128))]),xe,Object(a["createVNode"])("div",De,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.customer.users,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"col-lg-6 position-relative p-md-6 p-3 bg-white",key:t},[Object(a["createVNode"])("div",we,[Object(a["createVNode"])("div",Pe,[Object(a["createVNode"])("p",Be,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.name)+" ",1),Object(a["createVNode"])("span",Ae,Object(a["toDisplayString"])(e.gender),1)]),Object(a["createVNode"])("p",Se,Object(a["toDisplayString"])("第".concat(t+1,"位旅客")),1),Object(a["createVNode"])("img",{src:"https://github.com/vvvvvvii/tasteof/blob/main/public/img/num.png?raw=true",alt:"第".concat(t+1,"位旅客"),class:"pax-num-img d-sm-block d-none"},null,8,["alt"])]),Object(a["createVNode"])("div",Le,[Object(a["createVNode"])("p",Te,"身分證字號： "+Object(a["toDisplayString"])(e.idNum),1),Object(a["createVNode"])("p",Ie,"護照號碼： "+Object(a["toDisplayString"])(e.passportNum),1),Object(a["createVNode"])("p",$e,Object(a["toDisplayString"])(e.tel),1),Object(a["createVNode"])("p",Ee,Object(a["toDisplayString"])(e.email),1),Object(a["createVNode"])("p",Me,Object(a["toDisplayString"])(e.address),1)])]),Object(a["createVNode"])("p",Ue,Object(a["toDisplayString"])(e.tel),1),Object(a["createVNode"])("p",_e,Object(a["toDisplayString"])(e.email),1),Object(a["createVNode"])("p",qe,Object(a["toDisplayString"])(e.address),1)])})),128))]),Fe,Object(a["createVNode"])(i,{onSubmit:s.addOrder},{default:Object(a["withCtx"])((function(c){var o=c.errors;return[Object(a["createVNode"])("div",Ge,[Object(a["createVNode"])("div",Je,[Re,Object(a["createVNode"])(l,{name:"付款方式",class:["form-select",{"is-invalid":o["付款方式"]}],id:"paymentMethodInput",rules:"required",modelValue:r.paymentDetail.method,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.paymentDetail.method=e}),as:"select"},{default:Object(a["withCtx"])((function(){return[ze,He,Ze]})),_:2},1032,["class","modelValue"]),Object(a["createVNode"])(n,{name:"付款方式",class:"invalid-feedback"})]),Object(a["createVNode"])("div",Ke,[Qe,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",id:"taxIdInput",name:"統一編號",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.paymentDetail.taxIdNum=e})},null,512),[[a["vModelText"],r.paymentDetail.taxIdNum]])]),Object(a["createVNode"])("div",We,[Xe,Object(a["createVNode"])("div",Ye,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",id:"couponInput",name:"優惠券",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.paymentDetail.coupon=e})},null,512),[[a["vModelText"],r.paymentDetail.coupon]]),Object(a["createVNode"])("div",{ref:"checkCouponBtn",class:"input-group-text btn btn-primary",onClick:t[4]||(t[4]=function(t){return e.$emit("emit-check-coupon",r.paymentDetail.coupon)})},[et,tt],512)])])]),Object(a["createVNode"])("div",ct,[Object(a["createVNode"])("h5",at,[ot,Object(a["createVNode"])("span",rt,"NT "+Object(a["toDisplayString"])(s.addComma(Math.floor(r.cart.final_total))),1)]),Object(a["createVNode"])("div",st,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary px-5 py-2 h3",onClick:t[5]||(t[5]=function(t){return e.$emit("emit-pre-page")})}," 上一頁 "),Object(a["createVNode"])("button",{type:"submit",class:"btn btn-primary px-5 py-2 ms-2\n              d-flex justify-content-center align-items-center",ref:"addOrderBtn",disabled:0==Object.keys(r.cart).length||0==r.cart.total},[lt,nt],8,["disabled"])])])]})),_:1},8,["onSubmit"])])])}var dt={props:["cartInfo","customer","payment"],data:function(){return{cart:Object(s["a"])({},this.cartInfo),customerDetail:Object(s["a"])({},this.customer),paymentDetail:Object(s["a"])({},this.payment)}},methods:{addOrder:function(){this.$emit("emit-add-order",this.paymentDetail)}},watch:{cartInfo:{handler:function(){this.cart=Object(s["a"])({},this.cartInfo),this.cart.final_total=this.cartInfo.final_total},deep:!0},customer:function(){this.customerDetail=Object(s["a"])({},this.customer)},payment:function(){this.paymentDetail=Object(s["a"])({},this.payment)}},computed:{addComma:function(){return function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),"".concat(t.join(","))}}},created:function(){this.cart=Object(s["a"])({},this.cartInfo),this.customerDetail=Object(s["a"])({},this.customer),this.paymentDetail=Object(s["a"])({},this.payment)}};dt.render=it;var ut=dt,mt={class:"container py-8"},bt={class:"d-flex flex-md-row flex-column align-items-center"},pt=Object(a["createVNode"])("img",{src:"https://github.com/vvvvvvii/tasteof/blob/main/public/img/cart.png?raw=true",alt:"恭喜您完成付款",class:"w-50"},null,-1),jt={class:"text-primary"},Ot={class:"h1 mb-lg-7 mb-3 text-md-start text-center"},ht=Object(a["createTextVNode"])(" 完成付款！ "),ft={class:"h2 ms-lg-3 d-lg-inline d-none"},Nt={class:"h2 text-md-end text-center d-lg-none mb-6"},Vt=Object(a["createVNode"])("p",{class:"mb-3 text-md-start text-center"},[Object(a["createVNode"])("a",{class:"h3-md text-primary"},"查看訂單細節")],-1),vt={class:"h2 text-md-start text-center"},gt={class:"bg-wave pt-6 pb-8",id:"moreActivitiesSection"},yt={class:"container"},kt=Object(a["createVNode"])("h3",{class:"text-primary mb-5"},"更多活動？",-1),Ct={class:"row"},xt={class:"card-img-outer"},Dt={class:"card-body"},wt={class:"card-title ellipsis ellipsis-one-line"},Pt={class:"h3-md h5 text-end"};function Bt(e,t,c,o,r,s){var l=Object(a["resolveComponent"])("router-link"),n=Object(a["resolveComponent"])("alert");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",mt,[Object(a["createVNode"])("div",bt,[pt,Object(a["createVNode"])("div",jt,[Object(a["createVNode"])("h2",Ot,[ht,Object(a["createVNode"])("span",ft,"NT "+Object(a["toDisplayString"])(s.addComma(Math.floor(c.orderDetail.total))),1)]),Object(a["createVNode"])("p",Nt," NT "+Object(a["toDisplayString"])(s.addComma(Math.floor(c.orderDetail.total))),1),Vt,Object(a["createVNode"])("p",vt,Object(a["toDisplayString"])(c.orderDetail.orderId),1)])])]),Object(a["createVNode"])("div",gt,[Object(a["createVNode"])("div",yt,[kt,Object(a["createVNode"])("div",Ct,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.randomProducts,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"col-4",key:t},[Object(a["createVNode"])(l,{to:"/product/".concat(e.id),title:"查看更多",class:"card overflow-hidden"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("div",xt,[Object(a["createVNode"])("img",{src:e.imageUrl,alt:e.title,class:"card-img"},null,8,["src","alt"])]),Object(a["createVNode"])("div",Dt,[Object(a["createVNode"])("h4",wt,Object(a["toDisplayString"])(e.title),1),Object(a["createVNode"])("p",Pt,"NT "+Object(a["toDisplayString"])(e.lowestPrice)+" 起",1)])]})),_:2},1032,["to"])])})),128))])])]),r.showAlert?(Object(a["openBlock"])(),Object(a["createBlock"])(n,{key:0,"alert-msg":r.alertMsg},null,8,["alert-msg"])):Object(a["createCommentVNode"])("",!0)],64)}var At=c("3835"),St=(c("159b"),c("d81d"),c("4e82"),c("6062"),c("3ca3"),c("ddb0"),{props:["orderDetail"],data:function(){return{totalProducts:[],randomProducts:[],showAlert:!1,alertMsg:""}},components:{alert:l["a"]},methods:{getTotalProducts:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/products/all")).then((function(t){t.data.success?(e.totalProducts=t.data.products,e.totalProducts.forEach((function(t,c){var a=t.packageOptions.map((function(e){return e.price}));a=a.sort((function(e,t){return e-t}));var o=a,r=Object(At["a"])(o,1),s=r[0];e.totalProducts[c].lowestPrice=s,t.packageOptions.forEach((function(t){t.price===s&&(e.totalProducts[c].lowestPriceUnit=t.unit)}))})),e.getRandomProducts()):(e.customAlert(t.data.message),window.setTimeout(e.closeCustomAlert,5e3))})).catch((function(t){e.customAlert(t.response),window.setTimeout(e.closeCustomAlert,5e3)}))},getRandomProducts:function(){for(var e=this,t=new Set([]),c=this.totalProducts.length<3?this.totalProducts.length:3,a=0;t.size<c;a+1){var o=this.totalProducts.length,r=Math.floor(Math.random(o)*o);t.add(r)}t.forEach((function(t){e.randomProducts.push(e.totalProducts[t])}))},customAlert:function(e){this.alertMsg=e,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1}},computed:{addComma:function(){return function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),"".concat(t.join("."))}}},created:function(){this.getTotalProducts()}});St.render=Bt;var Lt=St,Tt=c("e689"),It={data:function(){return{customerDetail:{users:[],message:""},cart:{},paymentDetail:{method:"",taxIdNum:"",coupons:""},orderDetail:{total:0,orderId:""},showAlert:!1,alertMsg:"",checkCartPageShow:!0,confirmCartPageShow:!1,finishCartPageShow:!1}},components:{alert:l["a"],checkCart:ue,confirmCart:ut,finishCart:Lt},methods:{getCartInfo:function(e){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/cart")).then((function(c){c.data.success?(t.cart=c.data.data,e&&(e.children[0].classList.add("d-none"),e.children[1].classList.remove("d-none"))):(t.customAlert(c.data.message),window.setTimeout(t.closeCustomAlert,5e3),e&&(e.children[0].classList.add("d-none"),e.children[1].classList.remove("d-none")))})).catch((function(c){t.customAlert(c.response),window.setTimeout(t.closeCustomAlert,5e3),e&&(e.children[0].classList.add("d-none"),e.children[1].classList.remove("d-none"))}))},customAlert:function(e){this.alertMsg=e,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1},changeTktNum:function(e,t,c,a){var o=this,r=this.$refs.checkCart.$refs["adultStatus".concat(a)],l=this.$refs.checkCart.$refs["childStatus".concat(a)],n=Object(s["a"])({},c);"adult"===e?(r.children[0].classList.remove("d-none"),r.children[1].classList.add("d-none"),"plus"===t?n.adult+=1:"minus"===t&&n.adult>=2&&(n.adult-=1)):(l.children[0].classList.remove("d-none"),l.children[1].classList.add("d-none"),"plus"===t?n.child+=1:"minus"===t&&n.child>=1&&(n.child-=1));var i={data:{product_id:a,qty:n.adult+n.child,qtyDetail:n}};this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/cart/").concat(a),i).then((function(t){t.data.success?"adult"===e?o.getCartInfo(r):o.getCartInfo(l):(o.customAlert(t.data.message),window.setTimeout(o.closeCustomAlert,5e3),"adult"===e?(r.children[0].classList.add("d-none"),r.children[1].classList.remove("d-none")):(l.children[0].classList.add("d-none"),l.children[1].classList.remove("d-none")))})).catch((function(t){o.customAlert(t.response),window.setTimeout(o.closeCustomAlert,5e3),"adult"===e?(r.children[0].classList.add("d-none"),r.children[1].classList.remove("d-none")):(l.children[0].classList.add("d-none"),l.children[1].classList.remove("d-none"))}))},deleteProduct:function(e){var t=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/cart/").concat(e)).then((function(c){if(c.data.success){var a=t.$refs.checkCart.$refs["deleteCartProduct".concat(e)];a.children[0].classList.remove("d-none"),a.children[1].classList.add("d-none"),t.customAlert("已清除商品"),t.getCartInfo(),window.setTimeout(t.closeCustomAlert,5e3),Tt["a"].emit("update-cart")}else t.customAlert(c.data.message),window.setTimeout(t.closeCustomAlert,5e3),Tt["a"].emit("update-cart")})).catch((function(e){t.customAlert(e.response),window.setTimeout(t.closeCustomAlert,5e3)}))},deleteAllProducts:function(){var e=this,t=this.$refs.checkCart.$refs.deleteOrderBtn;t.classList.add("disabled"),t.children[0].classList.remove("d-none"),this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/carts")).then((function(c){c.data.success?(e.customAlert("已清除購物車"),e.getCartInfo(),t.classList.remove("disabled"),t.children[0].classList.add("d-none"),window.setTimeout(e.closeCustomAlert,3500),window.setTimeout(e.backToHomePage,4e3),Tt["a"].emit("update-cart")):(e.customAlert(c.data.message),window.setTimeout(e.closeCustomAlert,5e3),t.classList.remove("disabled"),t.children[0].classList.add("d-none"),Tt["a"].emit("update-cart"))})).catch((function(c){e.customAlert(c.response),window.setTimeout(e.closeCustomAlert,5e3),t.classList.remove("disabled"),t.children[0].classList.add("d-none")}))},addPax:function(){!1===Object.keys(this.customerDetail).includes("users")?(this.customerDetail.users=[],this.customerDetail.users[0]={}):this.customerDetail.users[this.customerDetail.users.length]={}},deletePax:function(e){this.customerDetail.users.splice(e,1)},saveCustomerDetail:function(e){this.customerDetail=e,this.checkCartPageShow=!1,this.confirmCartPageShow=!0},backToFirstPage:function(){this.checkCartPageShow=!0,this.confirmCartPageShow=!1},checkCoupon:function(e){var t=this,c=this.$refs.confirmCart.$refs.checkCouponBtn;c.classList.add("disabled"),c.children[0].classList.remove("d-none");var a={data:{code:e}};this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/coupon"),a).then((function(e){if(e.data.success){var a=e.data;t.customAlert(a.message),window.setTimeout(t.closeCustomAlert,5e3),a.data.final_total=Math.floor(t.cart.final_total),c.classList.remove("disabled"),c.children[0].classList.add("d-none")}else t.customAlert(e.data.message),window.setTimeout(t.closeCustomAlert,5e3),c.classList.remove("disabled"),c.children[0].classList.add("d-none")})).catch((function(e){t.customAlert(e.response),window.setTimeout(t.closeCustomAlert,5e3),c.classList.remove("disabled"),c.children[0].classList.add("d-none")}))},addOrder:function(){var e=this,t=this.$refs.confirmCart.$refs.addOrderBtn;t.classList.add("disabled"),t.children[0].classList.remove("d-none"),this.customerDetail.user=Object(s["a"])({},this.customerDetail.users[0]);var c={data:this.customerDetail};this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/order"),c).then((function(c){c.data.success?(e.orderDetail.total=c.data.total,e.orderDetail.orderId=c.data.orderId,e.getCartInfo(),t.classList.remove("disabled"),t.children[0].classList.add("d-none"),e.confirmCartPageShow=!1,e.finishCartPageShow=!0,Tt["a"].emit("update-cart")):(e.customAlert(c.data.message),window.setTimeout(e.closeCustomAlert,5e3),t.classList.remove("disabled"),t.children[0].classList.add("d-none"),Tt["a"].emit("update-cart"))})).catch((function(c){e.customAlert(c.response),window.setTimeout(e.closeCustomAlert,5e3),t.classList.remove("disabled"),t.children[0].classList.add("d-none")}))}},created:function(){this.getCartInfo()}};It.render=r;t["default"]=It},a02d:function(e,t,c){"use strict";var a=c("7a23"),o={class:"alert alert-primary alert-dismissible fade show",role:"alert"};function r(e,t,c,r,s,l){return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,Object(a["toDisplayString"])(c.alertMsg),1)}var s={props:["alertMsg"]};s.render=r;t["a"]=s},e689:function(e,t,c){"use strict";var a=function(e){return{all:e=e||new Map,on:function(t,c){var a=e.get(t);a?a.push(c):e.set(t,[c])},off:function(t,c){var a=e.get(t);a&&(c?a.splice(a.indexOf(c)>>>0,1):e.set(t,[]))},emit:function(t,c){var a=e.get(t);a&&a.slice().map((function(e){e(c)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,c)}))}}},o=a();t["a"]=o}}]);
//# sourceMappingURL=chunk-76514d68.e11b9db5.js.map