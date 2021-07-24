(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76514d68"],{2355:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o={class:"pt-7 flex-fill"};function r(e,t,c,r,s,n){var l=Object(a["resolveComponent"])("checkCart"),i=Object(a["resolveComponent"])("confirmCart"),d=Object(a["resolveComponent"])("finishCart"),u=Object(a["resolveComponent"])("alert");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",o,[s.checkCartPageShow?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0,ref:"checkCart",customer:s.customerDetail,"cart-info":s.cart,onEmitChangeTktNum:n.changeTktNum,onEmitDeleteProduct:n.deleteProduct,onEmitDeleteAllProducts:n.deleteAllProducts,onEmitAddPax:n.addPax,onEmitDeletePax:n.deletePax,onEmitNextPage:n.saveCustomerDetail},null,8,["customer","cart-info","onEmitChangeTktNum","onEmitDeleteProduct","onEmitDeleteAllProducts","onEmitAddPax","onEmitDeletePax","onEmitNextPage"])):Object(a["createCommentVNode"])("",!0),s.confirmCartPageShow?(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:1,ref:"confirmCart",customer:s.customerDetail,"cart-info":s.cart,payment:s.paymentDetail,onEmitCheckCoupon:n.checkCoupon,onEmitPrePage:n.backToFirstPage,onEmitAddOrder:n.addOrder},null,8,["customer","cart-info","payment","onEmitCheckCoupon","onEmitPrePage","onEmitAddOrder"])):Object(a["createCommentVNode"])("",!0),s.finishCartPageShow?(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:2,"order-detail":s.orderDetail},null,8,["order-detail"])):Object(a["createCommentVNode"])("",!0)]),s.showAlert?(Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:0,"alert-msg":s.alertMsg},null,8,["alert-msg"])):Object(a["createCommentVNode"])("",!0)],64)}var s=c("2909"),n=c("5530"),l=(c("99af"),c("159b"),c("d81d"),c("a434"),c("caad"),c("2532"),c("b64b"),c("a02d")),i=(c("b0c0"),{class:"container py-8"}),d={class:"bg-light rounded-3 p-7"},u={key:0},m={class:"d-flex justify-content-between mb-6"},b=Object(a["createVNode"])("h2",{class:"h3 text-primary"},"訂單內容",-1),p=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-light d-none me-1",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),j=Object(a["createVNode"])("p",null,"清空購物車",-1),O={class:"row mb-7"},h={class:"px-3 py-4 mb-2 border border-primary rounded-1 position-relative"},f={class:"d-flex justify-content-between pb-3 mb-2\n                border-bottom border-gray"},N={class:"mb-2"},V={class:"w-50 d-flex flex-column justify-content-between"},g={class:"h3-sm"},v={class:"h4-sm h5 mb-3"},k={class:"text-end"},y={class:"d-flex justify-content-evenly"},C={key:0,class:"d-flex align-items-center h4-sm h5"},x=Object(a["createVNode"])("i",{class:"bi bi-dash-lg"},null,-1),w=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark d-none",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),D=Object(a["createVNode"])("i",{class:"bi bi-plus-lg"},null,-1),B={key:0},P={key:1},A={key:2},L={key:1,class:"d-flex align-items-center h4-sm h5"},S=Object(a["createVNode"])("i",{class:"bi bi-dash-lg"},null,-1),T=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark d-none",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),I=Object(a["createVNode"])("i",{class:"bi bi-plus-lg"},null,-1),$=Object(a["createTextVNode"])(" 小 "),U=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark d-none",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),E={class:"d-flex justify-content-between mb-lg-4 mb-2"},M=Object(a["createVNode"])("h2",{class:"h3 text-primary"},"客戶資料",-1),q={class:"d-flex justify-content-between mb-4"},_={class:"col-md-3 col-6 mb-3"},F={class:"col-md-3 col-6 mb-3"},G=Object(a["createVNode"])("option",{disabled:"",value:""},"請選擇稱謂",-1),J=Object(a["createVNode"])("option",{selected:"",value:"先生"},"先生",-1),R=Object(a["createVNode"])("option",{value:"女士"},"女士",-1),z={class:"col-md-3 col-6 mb-3"},H={class:"col-md-3 col-6 mb-3"},Z={class:"col-lg-3 col-sm-4 mb-3"},K={class:"col-lg-3 col-sm-8 mb-3"},Q={class:"col-lg-6 mb-3"},W={key:0,class:"mb-7"},X=Object(a["createVNode"])("label",{for:"bookMessageCart",class:"form-label"},"備註（選填）",-1),Y={class:"d-flex flex-column align-items-end"},ee={class:"h3 mb-3"},te=Object(a["createTextVNode"])(" 總金額 "),ce={class:"h2 text-primary"},ae=Object(a["createVNode"])("p",{class:"h3"},"下一步",-1),oe={key:1,class:"text-center"},re=Object(a["createVNode"])("p",{class:"mb-4"},[Object(a["createTextVNode"])(" 購物車目前還沒有商品耶 "),Object(a["createVNode"])("i",{class:"bi bi-eraser"})],-1),se={class:"mb-2"},ne=Object(a["createTextVNode"])(" 客倌要不要 "),le=Object(a["createTextVNode"])(" 來這裡挑挑看、選選看 "),ie=Object(a["createTextVNode"])(" 呢？ "),de=Object(a["createTextVNode"])(" 也可以 "),ue=Object(a["createTextVNode"])(" 來這裡尋找玩樂靈感 "),me=Object(a["createTextVNode"])(" 唷！ ");function be(e,t,c,o,r,s){var n=Object(a["resolveComponent"])("Field"),l=Object(a["resolveComponent"])("ErrorMessage"),be=Object(a["resolveComponent"])("Form"),pe=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("div",i,[Object(a["createVNode"])("div",d,[r.cart.total>0?(Object(a["openBlock"])(),Object(a["createBlock"])("div",u,[Object(a["createVNode"])("div",m,[b,Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary d-flex justify-content-center align-items-center px-5",onClick:t[1]||(t[1]=function(t){return e.$emit("emit-delete-all-products")}),ref:"deleteOrderBtn",disabled:0==Object.keys(r.cart).length||0==r.cart.total},[p,j],8,["disabled"])]),Object(a["createVNode"])("div",O,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.cart.carts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:t.id},[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(t.options,(function(c,o){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{key:o,class:"col-md-6"},[Object(a["createVNode"])("div",h,[Object(a["createVNode"])("div",f,[Object(a["createVNode"])("div",null,[Object(a["createVNode"])("p",N,Object(a["toDisplayString"])(c.start_date),1),Object(a["createVNode"])("img",{src:t.product.imageUrl,alt:t.title,class:"cart-img"},null,8,["src","alt"])]),Object(a["createVNode"])("div",V,[Object(a["createVNode"])("div",null,[Object(a["createVNode"])("p",g,Object(a["toDisplayString"])(t.product.title),1),Object(a["createVNode"])("p",v,Object(a["toDisplayString"])(c.optionName),1)]),Object(a["createVNode"])("p",k," NT "+Object(a["toDisplayString"])(s.addComma(c.optionPrice*(c.qtyDetail.adult+c.qtyDetail.child))),1)])]),Object(a["createVNode"])("div",y,[c.qtyDetail?(Object(a["openBlock"])(),Object(a["createBlock"])("div",C,[Object(a["createVNode"])("button",{type:"button",class:"border-0 bg-transparent p-2",onClick:function(a){return e.$emit("emit-change-tkt-num","adult","minus",c,o,t.id)}},[x],8,["onClick"]),Object(a["createVNode"])("div",{class:"p-1",ref:"adultStatus".concat(c.optionName)},[w,Object(a["createVNode"])("p",null,Object(a["toDisplayString"])(c.qtyDetail.adult),1)],512),Object(a["createVNode"])("button",{type:"button",class:"border-0 bg-transparent p-2",onClick:function(a){return e.$emit("emit-change-tkt-num","adult","plus",c,o,t.id)}},[D],8,["onClick"]),"每人"===t.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",B,"大")):"包車服務"!==t.product.category&&"每人"!==t.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",P,"組")):"包車服務"===t.product.category&&"每人"!==t.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",A,"台")):Object(a["createCommentVNode"])("",!0)])):Object(a["createCommentVNode"])("",!0),c.qtyDetail&&"每人"===t.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("div",L,[Object(a["createVNode"])("button",{type:"button",class:"border-0 bg-transparent p-2",onClick:function(a){return e.$emit("emit-change-tkt-num","child","minus",c,o,t.id)}},[S],8,["onClick"]),Object(a["createVNode"])("div",{class:"p-1",ref:"childStatus".concat(c.optionName)},[T,Object(a["createVNode"])("p",null,Object(a["toDisplayString"])(c.qtyDetail.child),1)],512),Object(a["createVNode"])("button",{type:"button",class:"border-0 bg-transparent p-2",onClick:function(a){return e.$emit("emit-change-tkt-num","child","plus",c,o,t.id)}},[I],8,["onClick"]),$])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("a",{type:"button",class:"delete-cart-icon",ref:"deleteCartProduct".concat(c.optionName)},[U,Object(a["createVNode"])("i",{class:"bi bi-trash-fill",onClick:function(a){return e.$emit("emit-delete-product",c,o,t.id)}},null,8,["onClick"])],512)])])])})),128))],64)})),128))]),Object(a["createVNode"])("div",E,[M,Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary d-block px-5",onClick:t[2]||(t[2]=function(t){return e.$emit("emit-add-pax")})}," 新增旅客 ")]),Object(a["createVNode"])(be,{onSubmit:s.toNextPage},{default:Object(a["withCtx"])((function(c){var o=c.errors;return[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.customerDetail.users,(function(t,c){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:c},[Object(a["createVNode"])("div",q,[Object(a["createVNode"])("p",null,Object(a["toDisplayString"])("第 ".concat(c+1," 位旅客")),1),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary d-block px-5",onClick:function(t){return e.$emit("emit-delete-pax",c)}}," 刪除旅客 ",8,["onClick"])]),Object(a["createVNode"])("div",{class:["row",{"mb-6":c!==r.customerDetail.users.length-1}]},[Object(a["createVNode"])("div",_,[Object(a["createVNode"])("label",{for:"bookNameCartInput-".concat(c),class:"form-label"},"姓名",8,["for"]),Object(a["createVNode"])(n,{type:"text",id:"bookNameCartInput-".concat(c),name:"第 ".concat(c+1," 位姓名"),class:["form-control",{"is-invalid":o["第 ".concat(c+1," 位姓名")]}],rules:"required",modelValue:r.customerDetail.users[c].name,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].name=e}},null,8,["id","name","class","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(l,{name:"第 ".concat(c+1," 位姓名"),class:"invalid-feedback"},null,8,["name"])]),Object(a["createVNode"])("div",F,[Object(a["createVNode"])("label",{for:"bookGenderCartInput-".concat(c),class:"form-label"},"稱謂",8,["for"]),Object(a["createVNode"])(n,{name:"第 ".concat(c+1," 位稱謂"),class:["form-select",{"is-invalid":o["第 ".concat(c+1," 位稱謂")]}],id:"bookGenderCartInput-".concat(c),rules:"required",modelValue:r.customerDetail.users[c].gender,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].gender=e},as:"select"},{default:Object(a["withCtx"])((function(){return[G,J,R]})),_:2},1032,["name","id","class","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(l,{name:"第 ".concat(c+1," 位稱謂"),class:"invalid-feedback"},null,8,["name"])]),Object(a["createVNode"])("div",z,[Object(a["createVNode"])("label",{for:"bookIdNumCartInput-".concat(c),class:"form-label"},"身分證字號",8,["for"]),Object(a["createVNode"])(n,{type:"text",name:"第 ".concat(c+1," 位身分證"),class:["form-control",{"is-invalid":o["第 ".concat(c+1," 位身分證")]}],id:"bookIdNumCartInput-".concat(c),rules:s.isIdNum,modelValue:r.customerDetail.users[c].idNum,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].idNum=e}},null,8,["name","id","class","rules","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(l,{name:"第 ".concat(c+1," 位身分證"),class:"invalid-feedback"},null,8,["name"])]),Object(a["createVNode"])("div",H,[Object(a["createVNode"])("label",{for:"bookPassportNumCartInput-".concat(c),class:"form-label"}," 護照號碼 ",8,["for"]),Object(a["createVNode"])(n,{type:"text",name:"第 ".concat(c+1," 位護照號碼"),class:["form-control",{"is-invalid":o["第 ".concat(c+1," 位護照號碼")]}],id:"bookPassportNumCartInput-".concat(c),rules:"length:9|numeric",modelValue:r.customerDetail.users[c].passportNum,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].passportNum=e}},null,8,["name","id","class","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(l,{name:"第 ".concat(c+1," 位護照號碼"),class:"invalid-feedback"},null,8,["name"])]),Object(a["createVNode"])("div",Z,[Object(a["createVNode"])("label",{for:"bookTelCartInput-".concat(c),class:"form-label"},"聯繫電話",8,["for"]),Object(a["createVNode"])(n,{type:"tel",name:"第 ".concat(c+1," 位電話"),class:["form-control",{"is-invalid":o["第 ".concat(c+1," 位電話")]}],id:"bookTelCartInput-".concat(c),rules:"required|numeric|max:10",modelValue:r.customerDetail.users[c].tel,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].tel=e}},null,8,["name","id","class","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(l,{name:"第 ".concat(c+1," 位電話"),class:"invalid-feedback"},null,8,["name"])]),Object(a["createVNode"])("div",K,[Object(a["createVNode"])("label",{for:"bookEmailCartInput-".concat(c),class:"form-label"}," 電子信箱 ",8,["for"]),Object(a["createVNode"])(n,{type:"email",name:"第 ".concat(c+1," 位 email"),class:["form-control",{"is-invalid":o["第 ".concat(c+1," 位 email")]}],id:"bookEmailCartInput-".concat(c),placeholder:"customer@example.com",rules:"email|required",modelValue:r.customerDetail.users[c].email,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].email=e}},null,8,["name","id","class","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(l,{name:"第 ".concat(c+1," 位 email"),class:"invalid-feedback"},null,8,["name"])]),Object(a["createVNode"])("div",Q,[Object(a["createVNode"])("label",{for:"bookAddrCartInput-".concat(c),class:"form-label"},"地址",8,["for"]),Object(a["createVNode"])(n,{type:"text",name:"第 ".concat(c+1," 位地址"),class:["form-control",{"is-invalid":o["第 ".concat(c+1," 位地址")]}],id:"bookAddrCartInput-".concat(c),rules:"required",modelValue:r.customerDetail.users[c].address,"onUpdate:modelValue":function(e){return r.customerDetail.users[c].address=e}},null,8,["name","id","class","modelValue","onUpdate:modelValue"]),Object(a["createVNode"])(l,{name:"第 ".concat(c+1," 位地址"),class:"invalid-feedback"},null,8,["name"])])],2)],64)})),128)),0!==r.customerDetail.users.length?(Object(a["openBlock"])(),Object(a["createBlock"])("div",W,[X,Object(a["withDirectives"])(Object(a["createVNode"])("textarea",{class:"form-control",id:"bookMessageCart",rows:"2","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.customerDetail.message=e})},null,512),[[a["vModelText"],r.customerDetail.message]])])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("div",Y,[Object(a["createVNode"])("h5",ee,[te,Object(a["createVNode"])("span",ce,"NT "+Object(a["toDisplayString"])(s.addComma(Math.floor(r.cart.final_total))),1)]),Object(a["createVNode"])("button",{type:"submit",class:"btn btn-primary d-block px-5 py-2",disabled:0==Object.keys(r.cart).length||0==r.cart.total||0===r.customerDetail.users.length},[ae],8,["disabled"])])]})),_:1},8,["onSubmit"])])):(Object(a["openBlock"])(),Object(a["createBlock"])("div",oe,[re,Object(a["createVNode"])("p",se,[ne,Object(a["createVNode"])(pe,{to:"/product_list",title:"前往產品頁",class:"text-secondary h3"},{default:Object(a["withCtx"])((function(){return[le]})),_:1}),ie]),Object(a["createVNode"])("p",null,[de,Object(a["createVNode"])(pe,{to:"/article_list",title:"前往文章頁",class:"text-secondary h3"},{default:Object(a["withCtx"])((function(){return[ue]})),_:1}),me])]))])])}c("ac1f"),c("1276"),c("d3b7"),c("25f0"),c("5319"),c("a15b");var pe={props:["cartInfo","customer"],data:function(){return{cart:Object(n["a"])({},this.cartInfo),customerDetail:{users:[],message:""}}},methods:{isIdNum:function(e){var t=/^[A-Z][0-9]{9}$/;return!!t.test(e)||"請輸入正確的身分證字號"},toNextPage:function(){this.$emit("emit-next-page",this.customerDetail)}},watch:{cartInfo:{handler:function(){this.cart=Object(n["a"])({},this.cartInfo),this.cart.final_total=this.cartInfo.final_total},deep:!0},customer:function(){this.customerDetail=Object(n["a"])({},this.customer)}},computed:{addComma:function(){return function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),"".concat(t.join(","))}}},created:function(){this.cart=Object(n["a"])({},this.cartInfo),this.customerDetail=Object(n["a"])({},this.customer)}};pe.render=be;var je=pe,Oe={class:"container py-8"},he={class:"bg-light rounded-3 p-7"},fe=Object(a["createVNode"])("h2",{class:"h3 text-primary mb-6"},"訂單內容",-1),Ne={class:"row mb-7 rounded-1"},Ve={class:"px-3 py-4 mb-2 border border-primary rounded-1 position-relative"},ge={class:"d-flex justify-content-between pb-2 mb-2\n                border-bottom border-gray"},ve={class:"mb-2"},ke={class:"w-50"},ye={class:"h3"},Ce={class:"h4 mb-3"},xe={class:"text-end"},we={class:"d-flex justify-content-evenly"},De={class:"d-flex align-items-center"},Be={key:0},Pe={key:1},Ae={key:2},Le={key:0,class:"d-flex align-items-center"},Se=Object(a["createVNode"])("h2",{class:"h3 text-primary mb-6"},"客戶資料",-1),Te={class:"row mb-7"},Ie={class:"d-flex justify-content-between"},$e={class:"w-50 d-flex flex-column justify-content-between"},Ue={class:"h3 mb-5"},Ee={class:"h4 ms-1"},Me={class:"pax-num d-sm-inline d-none"},qe={class:"w-50"},_e={class:"mb-2"},Fe={class:"mb-4"},Ge={class:"mb-2 d-sm-block d-none"},Je={class:"mb-2 d-sm-block d-none"},Re={class:"mb-2 d-sm-block d-none"},ze={class:"mb-2 h5 d-sm-none"},He={class:"mb-2 h5 d-sm-none"},Ze={class:"mb-2 h5 d-sm-none"},Ke=Object(a["createVNode"])("h2",{class:"h3 text-primary mb-6"},"付款資料",-1),Qe={class:"row mb-7"},We={class:"col-lg-4 col-md-6 mb-lg-0 mb-3"},Xe=Object(a["createVNode"])("label",{for:"paymentMethodInput",class:"form-label"},"付款方式",-1),Ye=Object(a["createVNode"])("option",{disabled:"",value:""},"請選擇付款方式",-1),et=Object(a["createVNode"])("option",{selected:"",value:"線上刷卡"},"線上刷卡",-1),tt=Object(a["createVNode"])("option",{value:"匯款"},"匯款",-1),ct={class:"col-lg-4 col-md-6 mb-md-0 mb-3"},at=Object(a["createVNode"])("label",{for:"taxIdInput",class:"form-label"},"統一編號（選填）",-1),ot={class:"col-lg-4 col-md-6"},rt=Object(a["createVNode"])("label",{for:"couponInput",class:"form-label"},"優惠券（選填）",-1),st={class:"input-group"},nt=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-light d-none me-1",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),lt=Object(a["createTextVNode"])(" 套用優惠碼 "),it={class:"d-flex flex-column align-items-end"},dt={class:"h3 mb-3"},ut=Object(a["createTextVNode"])(" 總金額 "),mt={class:"h2 text-primary"},bt={class:"d-flex"},pt=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-light d-none me-1",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),jt=Object(a["createVNode"])("p",{class:"h3"},"結帳",-1);function Ot(e,t,c,o,r,s){var n=Object(a["resolveComponent"])("Field"),l=Object(a["resolveComponent"])("ErrorMessage"),i=Object(a["resolveComponent"])("Form");return Object(a["openBlock"])(),Object(a["createBlock"])("div",Oe,[Object(a["createVNode"])("div",he,[fe,Object(a["createVNode"])("div",Ne,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.cart.carts,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:e.id},[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.options,(function(t,c){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{key:c,class:"col-md-6"},[Object(a["createVNode"])("div",Ve,[Object(a["createVNode"])("div",ge,[Object(a["createVNode"])("div",null,[Object(a["createVNode"])("p",ve,Object(a["toDisplayString"])(t.start_date),1),Object(a["createVNode"])("img",{src:e.product.imageUrl,alt:e.title,class:"cart-img"},null,8,["src","alt"])]),Object(a["createVNode"])("div",ke,[Object(a["createVNode"])("p",ye,Object(a["toDisplayString"])(e.product.title),1),Object(a["createVNode"])("p",Ce,Object(a["toDisplayString"])(t.optionName),1),Object(a["createVNode"])("p",xe," NT "+Object(a["toDisplayString"])(s.addComma(t.optionPrice*(t.qtyDetail.adult+t.qtyDetail.child))),1)])]),Object(a["createVNode"])("div",we,[Object(a["createVNode"])("div",De,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.qtyDetail.adult)+" ",1),"每人"===e.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",Be," 大")):"包車服務"!==e.product.category&&"每人"!==e.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",Pe," 組")):"包車服務"===e.product.category&&"每人"!==e.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",Ae," 台")):Object(a["createCommentVNode"])("",!0)]),"每人"===e.product.lowestPriceUnit?(Object(a["openBlock"])(),Object(a["createBlock"])("div",Le,Object(a["toDisplayString"])(t.qtyDetail.child)+" 小 ",1)):Object(a["createCommentVNode"])("",!0)])])])})),128))],64)})),128))]),Se,Object(a["createVNode"])("div",Te,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.customer.users,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"col-lg-6 position-relative p-md-6 p-3 bg-white",key:t},[Object(a["createVNode"])("div",Ie,[Object(a["createVNode"])("div",$e,[Object(a["createVNode"])("p",Ue,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.name)+" ",1),Object(a["createVNode"])("span",Ee,Object(a["toDisplayString"])(e.gender),1)]),Object(a["createVNode"])("p",Me,Object(a["toDisplayString"])("第".concat(t+1,"位旅客")),1),Object(a["createVNode"])("img",{src:"https://github.com/vvvvvvii/tasteof/blob/main/public/img/num.png?raw=true",alt:"第".concat(t+1,"位旅客"),class:"pax-num-img d-sm-block d-none"},null,8,["alt"])]),Object(a["createVNode"])("div",qe,[Object(a["createVNode"])("p",_e,"身分證字號： "+Object(a["toDisplayString"])(e.idNum),1),Object(a["createVNode"])("p",Fe,"護照號碼： "+Object(a["toDisplayString"])(e.passportNum),1),Object(a["createVNode"])("p",Ge,Object(a["toDisplayString"])(e.tel),1),Object(a["createVNode"])("p",Je,Object(a["toDisplayString"])(e.email),1),Object(a["createVNode"])("p",Re,Object(a["toDisplayString"])(e.address),1)])]),Object(a["createVNode"])("p",ze,Object(a["toDisplayString"])(e.tel),1),Object(a["createVNode"])("p",He,Object(a["toDisplayString"])(e.email),1),Object(a["createVNode"])("p",Ze,Object(a["toDisplayString"])(e.address),1)])})),128))]),Ke,Object(a["createVNode"])(i,{onSubmit:s.addOrder},{default:Object(a["withCtx"])((function(c){var o=c.errors;return[Object(a["createVNode"])("div",Qe,[Object(a["createVNode"])("div",We,[Xe,Object(a["createVNode"])(n,{name:"付款方式",class:["form-select",{"is-invalid":o["付款方式"]}],id:"paymentMethodInput",rules:"required",modelValue:r.paymentDetail.method,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.paymentDetail.method=e}),as:"select"},{default:Object(a["withCtx"])((function(){return[Ye,et,tt]})),_:2},1032,["class","modelValue"]),Object(a["createVNode"])(l,{name:"付款方式",class:"invalid-feedback"})]),Object(a["createVNode"])("div",ct,[at,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",id:"taxIdInput",name:"統一編號",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.paymentDetail.taxIdNum=e})},null,512),[[a["vModelText"],r.paymentDetail.taxIdNum]])]),Object(a["createVNode"])("div",ot,[rt,Object(a["createVNode"])("div",st,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",id:"couponInput",name:"優惠券",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.paymentDetail.coupon=e})},null,512),[[a["vModelText"],r.paymentDetail.coupon]]),Object(a["createVNode"])("div",{ref:"checkCouponBtn",class:"input-group-text btn btn-primary",onClick:t[4]||(t[4]=function(t){return e.$emit("emit-check-coupon",r.paymentDetail.coupon)})},[nt,lt],512)])])]),Object(a["createVNode"])("div",it,[Object(a["createVNode"])("h5",dt,[ut,Object(a["createVNode"])("span",mt,"NT "+Object(a["toDisplayString"])(s.addComma(Math.floor(r.cart.final_total))),1)]),Object(a["createVNode"])("div",bt,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary px-5 py-2 h3",onClick:t[5]||(t[5]=function(t){return e.$emit("emit-pre-page")})}," 上一頁 "),Object(a["createVNode"])("button",{type:"submit",class:"btn btn-primary px-5 py-2 ms-2\n              d-flex justify-content-center align-items-center",ref:"addOrderBtn",disabled:0==Object.keys(r.cart).length||0==r.cart.total},[pt,jt],8,["disabled"])])])]})),_:1},8,["onSubmit"])])])}var ht={props:["cartInfo","customer","payment"],data:function(){return{cart:Object(n["a"])({},this.cartInfo),customerDetail:Object(n["a"])({},this.customer),paymentDetail:Object(n["a"])({},this.payment)}},methods:{addOrder:function(){this.$emit("emit-add-order",this.paymentDetail)}},watch:{cartInfo:{handler:function(){this.cart=Object(n["a"])({},this.cartInfo),this.cart.final_total=this.cartInfo.final_total},deep:!0},customer:function(){this.customerDetail=Object(n["a"])({},this.customer)},payment:function(){this.paymentDetail=Object(n["a"])({},this.payment)}},computed:{addComma:function(){return function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),"".concat(t.join(","))}}},created:function(){this.cart=Object(n["a"])({},this.cartInfo),this.customerDetail=Object(n["a"])({},this.customer),this.paymentDetail=Object(n["a"])({},this.payment)}};ht.render=Ot;var ft=ht,Nt={class:"container py-8"},Vt={class:"d-flex flex-md-row flex-column align-items-center"},gt=Object(a["createVNode"])("img",{src:"https://github.com/vvvvvvii/tasteof/blob/main/public/img/finish%20cart.png?raw=true",alt:"恭喜您完成付款",class:"w-50"},null,-1),vt={class:"text-primary"},kt={class:"h1 mb-lg-7 mb-3 text-md-start text-center"},yt=Object(a["createTextVNode"])(" 完成付款！ "),Ct={class:"h2 ms-lg-3 d-lg-inline d-none"},xt={class:"h2 text-md-end text-center d-lg-none mb-6"},wt=Object(a["createVNode"])("p",{class:"mb-3 text-md-start text-center"},[Object(a["createVNode"])("a",{class:"h3-md text-primary"},"查看訂單細節")],-1),Dt={class:"h2 text-md-start text-center"},Bt={class:"bg-wave pt-6 pb-8",id:"moreActivitiesSection"},Pt={class:"container"},At=Object(a["createVNode"])("h3",{class:"text-primary mb-5"},"更多活動？",-1),Lt={class:"row"},St={class:"card-img-outer"},Tt={class:"card-body"},It={class:"card-title ellipsis ellipsis-one-line"},$t={class:"h3-md h5 text-end"};function Ut(e,t,c,o,r,s){var n=Object(a["resolveComponent"])("router-link"),l=Object(a["resolveComponent"])("alert");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",Nt,[Object(a["createVNode"])("div",Vt,[gt,Object(a["createVNode"])("div",vt,[Object(a["createVNode"])("h2",kt,[yt,Object(a["createVNode"])("span",Ct,"NT "+Object(a["toDisplayString"])(s.addComma(Math.floor(c.orderDetail.total))),1)]),Object(a["createVNode"])("p",xt," NT "+Object(a["toDisplayString"])(s.addComma(Math.floor(c.orderDetail.total))),1),wt,Object(a["createVNode"])("p",Dt,Object(a["toDisplayString"])(c.orderDetail.orderId),1)])])]),Object(a["createVNode"])("div",Bt,[Object(a["createVNode"])("div",Pt,[At,Object(a["createVNode"])("div",Lt,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.randomProducts,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"col-4",key:t},[Object(a["createVNode"])(n,{to:"/product/".concat(e.id),title:"查看更多",class:"card overflow-hidden"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("div",St,[Object(a["createVNode"])("img",{src:e.imageUrl,alt:e.title,class:"card-img"},null,8,["src","alt"])]),Object(a["createVNode"])("div",Tt,[Object(a["createVNode"])("h4",It,Object(a["toDisplayString"])(e.title),1),Object(a["createVNode"])("p",$t,"NT "+Object(a["toDisplayString"])(e.lowestPrice)+" 起",1)])]})),_:2},1032,["to"])])})),128))])])]),r.showAlert?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0,"alert-msg":r.alertMsg},null,8,["alert-msg"])):Object(a["createCommentVNode"])("",!0)],64)}var Et=c("3835"),Mt=(c("4e82"),c("6062"),c("3ca3"),c("ddb0"),{props:["orderDetail"],data:function(){return{totalProducts:[],randomProducts:[],showAlert:!1,alertMsg:""}},components:{alert:l["a"]},methods:{getTotalProducts:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/products/all")).then((function(t){t.data.success?(e.totalProducts=t.data.products,e.totalProducts.forEach((function(t,c){var a=t.packageOptions.map((function(e){return e.price}));a=a.sort((function(e,t){return e-t}));var o=a,r=Object(Et["a"])(o,1),s=r[0];e.totalProducts[c].lowestPrice=s,t.packageOptions.forEach((function(t){t.price===s&&(e.totalProducts[c].lowestPriceUnit=t.unit)}))})),e.getRandomProducts()):(e.customAlert(t.data.message),window.setTimeout(e.closeCustomAlert,5e3))})).catch((function(t){e.customAlert(t.response),window.setTimeout(e.closeCustomAlert,5e3)}))},getRandomProducts:function(){for(var e=this,t=new Set([]),c=this.totalProducts.length<3?this.totalProducts.length:3,a=0;t.size<c;a+1){var o=this.totalProducts.length,r=Math.floor(Math.random(o)*o);t.add(r)}t.forEach((function(t){e.randomProducts.push(e.totalProducts[t])}))},customAlert:function(e){this.alertMsg=e,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1}},computed:{addComma:function(){return function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),"".concat(t.join("."))}}},created:function(){this.getTotalProducts()}});Mt.render=Ut;var qt=Mt,_t=c("e689"),Ft={data:function(){return{customerDetail:{users:[],message:""},cart:{},paymentDetail:{method:"",taxIdNum:"",coupons:""},orderDetail:{total:0,orderId:""},showAlert:!1,alertMsg:"",checkCartPageShow:!0,confirmCartPageShow:!1,finishCartPageShow:!1}},components:{alert:l["a"],checkCart:je,confirmCart:ft,finishCart:qt},methods:{getCartInfo:function(e){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/cart")).then((function(c){c.data.success?(t.cart=c.data.data,e&&(e.children[0].classList.add("d-none"),e.children[1].classList.remove("d-none"))):(t.customAlert(c.data.message),window.setTimeout(t.closeCustomAlert,5e3),e&&(e.children[0].classList.add("d-none"),e.children[1].classList.remove("d-none")))})).catch((function(c){t.customAlert(c.response),window.setTimeout(t.closeCustomAlert,5e3),e&&(e.children[0].classList.add("d-none"),e.children[1].classList.remove("d-none"))}))},customAlert:function(e){this.alertMsg=e,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1},changeTktNum:function(e,t,c,a,o){var r=this,l=this.$refs.checkCart.$refs["adultStatus".concat(c.optionName)],i=this.$refs.checkCart.$refs["childStatus".concat(c.optionName)],d=Object(n["a"])({},c.qtyDetail);"adult"===e?(l.children[0].classList.remove("d-none"),l.children[1].classList.add("d-none"),"plus"===t?d.adult+=1:"minus"===t&&d.adult>=2&&(d.adult-=1)):(i.children[0].classList.remove("d-none"),i.children[1].classList.add("d-none"),"plus"===t?d.child+=1:"minus"===t&&d.child>=1&&(d.child-=1));var u=0,m=[];this.cart.carts.forEach((function(e){e.id===o&&(u=e.qty,m=Object(s["a"])(e.options))}));var b={data:{product_id:o,qty:u+d.adult+d.child,options:m}};b.data.options[a].qtyDetail=d,this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/cart/").concat(o),b).then((function(t){t.data.success?"adult"===e?r.getCartInfo(l):r.getCartInfo(i):(r.customAlert(t.data.message),window.setTimeout(r.closeCustomAlert,5e3),"adult"===e?(l.children[0].classList.add("d-none"),l.children[1].classList.remove("d-none")):(i.children[0].classList.add("d-none"),i.children[1].classList.remove("d-none")))})).catch((function(t){r.customAlert(t.response),window.setTimeout(r.closeCustomAlert,5e3),"adult"===e?(l.children[0].classList.add("d-none"),l.children[1].classList.remove("d-none")):(i.children[0].classList.add("d-none"),i.children[1].classList.remove("d-none"))}))},deleteProduct:function(e,t,c){var a=this,o=this.$refs.checkCart.$refs["deleteCartProduct".concat(e.optionName)],r=this.cart.carts.map((function(e){return e.id})),s=r.indexOf(c);if(this.cart.carts[s].options.splice(t,1),0!==this.cart.carts[s].options.length){var l={data:Object(n["a"])({},this.cart.carts[s])},i=l.data.options.map((function(e){return e.qtyDetail.adult})),d=l.data.options.map((function(e){return e.qtyDetail.child}));l.data.qty=i.reduce((function(e,t){return e+t}))+d.reduce((function(e,t){return e+t})),this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/cart/").concat(c),l).then((function(e){e.data.success&&"更新購物車有誤"!==e.data.message?(a.customAlert("已清除商品"),window.setTimeout(a.closeCustomAlert,5e3),a.getCartInfo()):(a.customAlert(e.data.message),window.setTimeout(a.closeCustomAlert,5e3))})).catch((function(e){a.customAlert(e.response),window.setTimeout(a.closeCustomAlert,5e3)}))}else this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/cart/").concat(c)).then((function(e){e.data.success?(o.children[0].classList.remove("d-none"),o.children[1].classList.add("d-none"),a.customAlert("已清除商品"),a.getCartInfo(),window.setTimeout(a.closeCustomAlert,5e3),_t["a"].emit("update-cart")):(a.customAlert(e.data.message),window.setTimeout(a.closeCustomAlert,5e3),_t["a"].emit("update-cart"))})).catch((function(e){a.customAlert(e.response),window.setTimeout(a.closeCustomAlert,5e3)}))},deleteAllProducts:function(){var e=this,t=this.$refs.checkCart.$refs.deleteOrderBtn;t.classList.add("disabled"),t.children[0].classList.remove("d-none"),this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/carts")).then((function(c){c.data.success?(e.customAlert("已清除購物車"),e.getCartInfo(),t.classList.remove("disabled"),t.children[0].classList.add("d-none"),window.setTimeout(e.closeCustomAlert,3500),window.setTimeout(e.backToHomePage,4e3),_t["a"].emit("update-cart")):(e.customAlert(c.data.message),window.setTimeout(e.closeCustomAlert,5e3),t.classList.remove("disabled"),t.children[0].classList.add("d-none"),_t["a"].emit("update-cart"))})).catch((function(c){e.customAlert(c.response),window.setTimeout(e.closeCustomAlert,5e3),t.classList.remove("disabled"),t.children[0].classList.add("d-none")}))},addPax:function(){!1===Object.keys(this.customerDetail).includes("users")?(this.customerDetail.users=[],this.customerDetail.users[0]={}):this.customerDetail.users[this.customerDetail.users.length]={}},deletePax:function(e){this.customerDetail.users.splice(e,1)},saveCustomerDetail:function(e){this.customerDetail=e,this.checkCartPageShow=!1,this.confirmCartPageShow=!0},backToFirstPage:function(){this.checkCartPageShow=!0,this.confirmCartPageShow=!1},checkCoupon:function(e){var t=this,c=this.$refs.confirmCart.$refs.checkCouponBtn;c.classList.add("disabled"),c.children[0].classList.remove("d-none");var a={data:{code:e}};this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/coupon"),a).then((function(e){if(e.data.success){var a=e.data;t.customAlert(a.message),window.setTimeout(t.closeCustomAlert,5e3),t.cart.final_total=Math.floor(a.data.final_total),c.classList.remove("disabled"),c.children[0].classList.add("d-none")}else t.customAlert(e.data.message),window.setTimeout(t.closeCustomAlert,5e3),c.classList.remove("disabled"),c.children[0].classList.add("d-none")})).catch((function(e){t.customAlert(e.response),window.setTimeout(t.closeCustomAlert,5e3),c.classList.remove("disabled"),c.children[0].classList.add("d-none")}))},addOrder:function(){var e=this,t=this.$refs.confirmCart.$refs.addOrderBtn;t.classList.add("disabled"),t.children[0].classList.remove("d-none"),this.customerDetail.user=Object(n["a"])({},this.customerDetail.users[0]);var c={data:this.customerDetail};this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/order"),c).then((function(c){c.data.success?(e.orderDetail.total=c.data.total,e.orderDetail.orderId=c.data.orderId,e.getCartInfo(),t.classList.remove("disabled"),t.children[0].classList.add("d-none"),e.confirmCartPageShow=!1,e.finishCartPageShow=!0,_t["a"].emit("update-cart")):(e.customAlert(c.data.message),window.setTimeout(e.closeCustomAlert,5e3),t.classList.remove("disabled"),t.children[0].classList.add("d-none"),_t["a"].emit("update-cart"))})).catch((function(c){e.customAlert(c.response),window.setTimeout(e.closeCustomAlert,5e3),t.classList.remove("disabled"),t.children[0].classList.add("d-none")}))}},created:function(){this.getCartInfo()}};Ft.render=r;t["default"]=Ft},a02d:function(e,t,c){"use strict";var a=c("7a23"),o={class:"alert alert-primary alert-dismissible fade show",role:"alert"};function r(e,t,c,r,s,n){return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,Object(a["toDisplayString"])(c.alertMsg),1)}var s={props:["alertMsg"]};s.render=r;t["a"]=s},e689:function(e,t,c){"use strict";var a=function(e){return{all:e=e||new Map,on:function(t,c){var a=e.get(t);a?a.push(c):e.set(t,[c])},off:function(t,c){var a=e.get(t);a&&(c?a.splice(a.indexOf(c)>>>0,1):e.set(t,[]))},emit:function(t,c){var a=e.get(t);a&&a.slice().map((function(e){e(c)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,c)}))}}},o=a();t["a"]=o}}]);
//# sourceMappingURL=chunk-76514d68.b5411ebd.js.map