(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-298fd22c"],{"07ac":function(e,t,c){var o=c("23e7"),a=c("6f53").values;o({target:"Object",stat:!0},{values:function(e){return a(e)}})},2532:function(e,t,c){"use strict";var o=c("23e7"),a=c("5a34"),r=c("1d80"),n=c("ab13");o({target:"String",proto:!0,forced:!n("includes")},{includes:function(e){return!!~String(r(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,c){var o=c("861d"),a=c("c6b6"),r=c("b622"),n=r("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==a(e))}},"466d":function(e,t,c){"use strict";var o=c("d784"),a=c("825a"),r=c("50c4"),n=c("1d80"),l=c("8aa5"),i=c("14c3");o("match",1,(function(e,t,c){return[function(t){var c=n(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,c):new RegExp(t)[e](String(c))},function(e){var o=c(t,e,this);if(o.done)return o.value;var n=a(e),d=String(this);if(!n.global)return i(n,d);var s=n.unicode;n.lastIndex=0;var u,b=[],p=0;while(null!==(u=i(n,d))){var m=String(u[0]);b[p]=m,""===m&&(n.lastIndex=l(d,r(n.lastIndex),s)),p++}return 0===p?null:b}]}))},"4bec":function(e,t,c){"use strict";c.r(t);c("a4d3"),c("e01a");var o=c("7a23"),a={class:"bg-light"},r={class:"container p-4"},n={class:"d-flex justify-content-between"},l=Object(o["createVNode"])("label",{for:"searchProduct",class:"search-icon"},[Object(o["createVNode"])("span",{class:"material-icons"}," search ")],-1),i={class:"mb-4"},d={key:0},s={key:0,class:"ms-6 text-dark-primary"},u={key:1},b={key:1},p={key:0,class:"ms-6 text-dark-primary"},m={key:1},O={class:"row g-0 align-items-center"},j=Object(o["createVNode"])("div",{class:"col-1"},[Object(o["createVNode"])("p",{class:"fw-bold"},"主力商品：")],-1),h={class:"col-11"},f={key:0},g={class:"d-flex flex-wrap"},v={type:"button",class:"tag-sm tag-warning"},V=Object(o["createVNode"])("i",{class:"bi bi-x"},null,-1),k={class:"container py-4"},N={class:"table mb-6"},y=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{width:"100"}),Object(o["createVNode"])("th",null,"產品名稱"),Object(o["createVNode"])("th",{width:"150"},"原價"),Object(o["createVNode"])("th",{width:"150"},"售價"),Object(o["createVNode"])("th",{width:"120"})])],-1),P={width:"100"},w={class:"pe-4"},x={width:"150"},B={width:"150"},C={width:"120"},M={class:"ms-2"};function D(e,t,c,D,A,U){var T=Object(o["resolveComponent"])("alert"),I=Object(o["resolveComponent"])("pagination"),S=Object(o["resolveComponent"])("product-edit-modal"),_=Object(o["resolveComponent"])("product-delete-modal");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",null,[l,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"search",id:"searchProduct",class:"search-bar",placeholder:"搜尋產品","onUpdate:modelValue":t[1]||(t[1]=function(e){return A.searchProduct=e})},null,512),[[o["vModelText"],A.searchProduct]])]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-primary d-inline-flex me-2",onClick:t[2]||(t[2]=function(e){return U.openModal(e,"addProduct")})}," 新增產品 ")]),Object(o["createVNode"])("div",i,[""===A.searchProduct?(Object(o["openBlock"])(),Object(o["createBlock"])("small",d,[0==A.totalProducts.length?(Object(o["openBlock"])(),Object(o["createBlock"])("p",s,"目前尚無產品")):(Object(o["openBlock"])(),Object(o["createBlock"])("p",u,"目前有 "+Object(o["toDisplayString"])(A.totalProducts.length)+" 項產品",1))])):(Object(o["openBlock"])(),Object(o["createBlock"])("small",b,[0==U.filterProduct.length?(Object(o["openBlock"])(),Object(o["createBlock"])("p",p,"目前尚無產品")):(Object(o["openBlock"])(),Object(o["createBlock"])("p",m,"目前有 "+Object(o["toDisplayString"])(U.filterProduct.length)+" 項產品",1))]))]),Object(o["createVNode"])("div",O,[j,Object(o["createVNode"])("div",h,[0==A.mainProduct.length?(Object(o["openBlock"])(),Object(o["createBlock"])("p",f,"請新增主力商品")):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("ul",g,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(A.mainProduct,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{key:t,class:"ms-1 mb-1",title:"刪除此項主力商品",onClick:function(t){return U.deleteMainProduct(e)}},[Object(o["createVNode"])("button",v,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title)+" ",1),V])],8,["onClick"])})),128))])])])])]),Object(o["createVNode"])("div",k,[Object(o["createVNode"])("table",N,[y,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(U.filterProduct,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:e.id,"data-bs-toggle":"collapse",href:"#collapseProduct-"+t,"aria-expanded":"false","aria-controls":"collapseProduct-"+t,class:"light-primary-hover",title:"點擊看詳細內容"},[Object(o["createVNode"])("td",P,[Object(o["createVNode"])("span",{class:["badge rounded-pill",{"bg-danger":"城市導覽"===e.category,"bg-warning":"體驗票券"===e.category,"bg-success":"包車服務"===e.category}]},Object(o["toDisplayString"])(e.category),3)]),Object(o["createVNode"])("td",w,[Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title)+" ",1),Object(o["createVNode"])("i",{class:["bi align-bottom d-inline",{"text-success":e.is_enabled,"bi-check-circle-fill":e.is_enabled,"text-gray":!e.is_enabled,"bi-dash-circle":!e.is_enabled}]},null,2),Object(o["createVNode"])("i",{class:["bi align-bottom d-inline ms-1",{"text-warning":e.is_mainProduct,"bi-star-fill":e.is_mainProduct}]},null,2)]),Object(o["createVNode"])("small",{class:"collapse",id:"collapseProduct-"+t},Object(o["toDisplayString"])(e.description),9,["id"])]),Object(o["createVNode"])("td",x,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.origin_price)+" / ",1),Object(o["createVNode"])("small",null,Object(o["toDisplayString"])(e.unit),1)]),Object(o["createVNode"])("td",B,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.price)+" / ",1),Object(o["createVNode"])("small",null,Object(o["toDisplayString"])(e.unit),1)]),Object(o["createVNode"])("td",C,[Object(o["createVNode"])("a",null,[Object(o["createVNode"])("span",{class:"material-icons",onClick:function(t){return U.openModal(e,"editProduct")}}," mode_edit ",8,["onClick"])]),Object(o["createVNode"])("a",M,[Object(o["createVNode"])("span",{class:"material-icons",onClick:function(t){return U.openModal(e,"deleteProduct")},"data-bs-toggle":"modal","data-bs-target":"#deleteModal"}," delete ",8,["onClick"])])])],8,["href","aria-controls"])})),128))])]),A.showAlert?(Object(o["openBlock"])(),Object(o["createBlock"])(T,{key:0,"alert-msg":A.alertMsg},null,8,["alert-msg"])):Object(o["createCommentVNode"])("",!0),A.pagination.total_pages>1?(Object(o["openBlock"])(),Object(o["createBlock"])(I,{key:1,page:A.pagination,onEmitPagination:U.getData},null,8,["page","onEmitPagination"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(S,{"modal-title":A.modalTitle,temp:A.temp,"tag-category":A.tagCategory,onEmitProductModal:U.addNewProduct,ref:"productModal"},null,8,["modal-title","temp","tag-category","onEmitProductModal"]),Object(o["createVNode"])(_,{temp:A.temp,onEmitDeleteModal:U.deleteProduct},null,8,["temp","onEmitDeleteModal"])])],64)}var A=c("5530"),U=(c("99af"),c("07ac"),c("159b"),c("4de4"),c("a434"),c("ac1f"),c("466d"),c("98ab")),T=c("1799"),I=c("7b17"),S={id:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},_={class:"modal-dialog modal-xl"},L={class:"modal-content product-modal-bg"},E={class:"modal-body"},$=Object(o["createVNode"])("button",{type:"button",class:"close-modal-btn close-modal-lg-btn bg-light-primary","data-bs-dismiss":"modal","aria-label":"Close"},[Object(o["createVNode"])("span",{class:"material-icons"}," clear ")],-1),F={class:"container-fluid"},J={class:"row"},R={class:"col-4"},H={class:"bg-light p-3 rounded-2"},q={class:"mb-2"},z=Object(o["createVNode"])("label",{for:"imgUrl",class:"form-label"},"產品封面圖片",-1),G=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-primary mb-2","data-bs-toggle":"collapse",href:"#collapseAddImgs","aria-expanded":"false","aria-controls":"collapseAddImgs"}," 新增其他圖片 ",-1),K={class:"collapse",id:"collapseAddImgs"},Q={class:"d-flex mb-2"},W=Object(o["createVNode"])("span",{class:"material-icons"}," add_task ",-1),X={class:"row g-1 mb-4"},Y={class:"col-4 mb-2"},Z=Object(o["createVNode"])("span",{class:"modal-delete-btn material-icons"}," delete ",-1),ee={key:1,class:"modal-img-default"},te=Object(o["createVNode"])("span",{class:"modal-delete-btn material-icons"}," delete ",-1),ce={key:1,class:"modal-img-default"},oe=Object(o["createVNode"])("h5",{class:"h4 mb-2"},"選擇標籤",-1),ae={class:"row"},re={class:"col-8"},ne={class:"mb-4"},le={class:"mb-2"},ie=Object(o["createVNode"])("label",{for:"productTitle",class:"form-label"},"標題",-1),de={class:"row"},se={class:"col-6 mb-2"},ue=Object(o["createVNode"])("label",{for:"productCategory",class:"form-label"},"分類",-1),be=Object(o["createVNode"])("option",{selected:"",disabled:""},"請選擇產品分類",-1),pe=Object(o["createVNode"])("option",null,"城市導覽",-1),me=Object(o["createVNode"])("option",null,"體驗票券",-1),Oe=Object(o["createVNode"])("option",null,"包車服務",-1),je=Object(o["createVNode"])("option",null,"推薦住宿",-1),he={class:"col-6 mb-2"},fe=Object(o["createVNode"])("label",{for:"productDurationDay",class:"form-label"},"行程長度",-1),ge={class:"d-flex"},ve=Object(o["createTextVNode"])("天 "),Ve=Object(o["createTextVNode"])("小時 "),ke=Object(o["createTextVNode"])("分 "),Ne={class:"mb-4"},ye=Object(o["createVNode"])("label",{for:"productDescription",class:"form-label"},"產品描述",-1),Pe={class:"mb-2"},we={class:"d-flex justify-content-between mb-4"},xe=Object(o["createVNode"])("label",{class:"form-label"},"行程所含地點",-1),Be={class:"row"},Ce={class:"input-group"},Me=Object(o["createVNode"])("i",{class:"bi bi-trash-fill"},null,-1),De={class:"mb-2"},Ae=Object(o["createVNode"])("label",{for:"productAgeDestriction",class:"form-label"},"年齡限制",-1),Ue={class:"mb-6"},Te=Object(o["createVNode"])("label",{for:"productPolicy",class:"form-label"},"適用規定",-1),Ie={class:"mb-2"},Se={class:"row"},_e={class:"col-4 mb-2"},Le={class:"col-4 mb-2"},Ee={class:"col-4 mb-2"},$e={class:"col-6 mb-2"},Fe={class:"col-6 mb-4"},Je={class:"mb-6"},Re={class:"d-flex justify-content-between mb-4"},He=Object(o["createVNode"])("label",{class:"form-label"},"方案內含",-1),qe={class:"row"},ze={class:"input-group"},Ge=Object(o["createVNode"])("i",{class:"bi bi-trash-fill"},null,-1),Ke={class:"form-check"},Qe=Object(o["createVNode"])("label",{class:"form-check-label",for:"productEnabled"},"產品是否啟用",-1),We={class:"form-check"},Xe=Object(o["createVNode"])("label",{class:"form-check-label",for:"mainProduct"},"是否為主打商品",-1),Ye={class:"d-flex justify-content-center"},Ze=Object(o["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark d-none",role:"status"},[Object(o["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),et={class:"ms-1"},tt=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-dark w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function ct(e,t,c,a,r,n){var l=Object(o["resolveComponent"])("alert");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",S,[Object(o["createVNode"])("div",_,[Object(o["createVNode"])("div",L,[Object(o["createVNode"])("div",E,[$,Object(o["createVNode"])("div",F,[Object(o["createVNode"])("div",J,[Object(o["createVNode"])("div",R,[Object(o["createVNode"])("div",H,[Object(o["createVNode"])("div",q,[z,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",id:"imgUrl",class:"form-control",placeholder:"請輸入圖片網址","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.tempProduct.imageUrl=e})},null,512),[[o["vModelText"],r.tempProduct.imageUrl]])]),G,Object(o["createVNode"])("div",K,[Object(o["createVNode"])("div",Q,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",placeholder:"請輸入圖片網址","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.tempProduct.otherImageUrl=e})},null,512),[[o["vModelText"],r.tempProduct.otherImageUrl]]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-dark-primary rounded-pill ms-2",onClick:t[3]||(t[3]=function(){return n.addImgs&&n.addImgs.apply(n,arguments)})},[W])])]),Object(o["createVNode"])("ul",X,[Object(o["createVNode"])("li",Y,[r.tempProduct.imageUrl?(Object(o["openBlock"])(),Object(o["createBlock"])("button",{key:0,class:"modal-img-outer",type:"button",onClick:t[4]||(t[4]=function(e){return n.deleteImgs(e,"mainImg")})},[Object(o["createVNode"])("img",{src:r.tempProduct.imageUrl,alt:"主圖片",class:"modal-img"},null,8,["src"]),Z])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",ee))]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.tempProduct.imagesUrl,(function(e,c){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:"col-4 mb-2",key:e},[e?(Object(o["openBlock"])(),Object(o["createBlock"])("button",{key:0,class:"modal-img-outer",type:"button",onClick:t[5]||(t[5]=function(e){return n.deleteImgs(e,"subImg")}),"data-img":c},[Object(o["createVNode"])("img",{src:e,alt:"副圖片",class:"modal-img"},null,8,["src"]),te],8,["data-img"])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",ce))])})),128))]),oe,Object(o["createVNode"])("div",ae,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.tagCategory,(function(e,c){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:c,class:"col-4"},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"checkbox",id:"tagCheck-".concat(c),"onUpdate:modelValue":t[6]||(t[6]=function(e){return r.tempProduct.tagCheck=e}),value:e},null,8,["id","value"]),[[o["vModelCheckbox"],r.tempProduct.tagCheck]]),Object(o["createVNode"])("label",{for:"tagCheck-".concat(c),class:"ms-1"},Object(o["toDisplayString"])(e),9,["for"])])})),128))])])]),Object(o["createVNode"])("div",re,[Object(o["createVNode"])("form",ne,[Object(o["createVNode"])("div",le,[ie,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",id:"productTitle",class:"form-control","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.tempProduct.title=e})},null,512),[[o["vModelText"],r.tempProduct.title]])]),Object(o["createVNode"])("div",de,[Object(o["createVNode"])("div",se,[ue,Object(o["withDirectives"])(Object(o["createVNode"])("select",{id:"productCategory",class:"form-select","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.tempProduct.category=e})},[be,pe,me,Oe,je],512),[[o["vModelSelect"],r.tempProduct.category]])]),Object(o["createVNode"])("div",he,[fe,Object(o["createVNode"])("div",ge,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",id:"productDurationDay",class:"form-control",min:"0",max:"","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.tempProduct.duration.day=e})},null,512),[[o["vModelText"],r.tempProduct.duration.day,void 0,{number:!0}]]),ve,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",id:"productDurationHours",class:"form-control",min:"0",max:"23","onUpdate:modelValue":t[10]||(t[10]=function(e){return r.tempProduct.duration.hours=e})},null,512),[[o["vModelText"],r.tempProduct.duration.hours,void 0,{number:!0}]]),Ve,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",id:"productDurationMin",class:"form-control",min:"0",max:"59","onUpdate:modelValue":t[11]||(t[11]=function(e){return r.tempProduct.duration.min=e})},null,512),[[o["vModelText"],r.tempProduct.duration.min,void 0,{number:!0}]]),ke])])]),Object(o["createVNode"])("div",Ne,[ye,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{name:"productDescription",id:"productDescription",class:"form-control",cols:"30",rows:"3","onUpdate:modelValue":t[12]||(t[12]=function(e){return r.tempProduct.description=e})},null,512),[[o["vModelText"],r.tempProduct.description]])]),Object(o["createVNode"])("div",Pe,[Object(o["createVNode"])("div",we,[xe,Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-primary d-block w-25",onClick:t[13]||(t[13]=function(){return n.addNewAttraction&&n.addNewAttraction.apply(n,arguments)})}," 加新地點 ")]),Object(o["createVNode"])("div",Be,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.tempProduct.attractionArr,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:t,class:"col-3 mb-2"},[Object(o["createVNode"])("div",Ce,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(e){return r.tempProduct.attractionArr[t]=e}},null,8,["onUpdate:modelValue"]),[[o["vModelText"],r.tempProduct.attractionArr[t],void 0,{trim:!0}]]),Object(o["createVNode"])("button",{class:"btn btn-outline-primary",type:"button",onClick:function(e){return n.deleteAttraction(t)}},[Me],8,["onClick"])])])})),128))])]),Object(o["createVNode"])("div",De,[Ae,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",id:"productAgeDestriction",class:"form-control","onUpdate:modelValue":t[14]||(t[14]=function(e){return r.tempProduct.ageDestriction=e})},null,512),[[o["vModelText"],r.tempProduct.ageDestriction,void 0,{trim:!0}]])]),Object(o["createVNode"])("div",Ue,[Te,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{name:"productPolicy",id:"productPolicy",class:"form-control",cols:"50",rows:"3","onUpdate:modelValue":t[15]||(t[15]=function(e){return r.tempProduct.policy=e})},null,512),[[o["vModelText"],r.tempProduct.policy]])]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary d-block w-50 mb-6 mx-auto",onClick:t[16]||(t[16]=function(){return n.addPackageOption&&n.addPackageOption.apply(n,arguments)})}," 新增方案 "),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.tempProduct.packageOptions,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:t},[Object(o["createVNode"])("div",Ie,[Object(o["createVNode"])("label",{for:"productPackageOptions-".concat(t),class:"form-label"},Object(o["toDisplayString"])("方案 ".concat(t+1," 名稱")),9,["for"]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",id:"productPackageOptions-".concat(t),class:"form-control","onUpdate:modelValue":function(t){return e.optionName=t}},null,8,["id","onUpdate:modelValue"]),[[o["vModelText"],e.optionName,void 0,{trim:!0}]])]),Object(o["createVNode"])("div",Se,[Object(o["createVNode"])("div",_e,[Object(o["createVNode"])("label",{for:"productOriginalPrice-".concat(t),class:"form-label"},"原價",8,["for"]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",id:"productOriginalPrice-".concat(t),class:"form-control",min:"0","onUpdate:modelValue":function(t){return e.origin_price=t}},null,8,["id","onUpdate:modelValue"]),[[o["vModelText"],e.origin_price,void 0,{number:!0}]])]),Object(o["createVNode"])("div",Le,[Object(o["createVNode"])("label",{for:"productPrice-".concat(t),class:"form-label"},"售價",8,["for"]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",id:"productPrice-".concat(t),class:"form-control",min:"0","onUpdate:modelValue":function(t){return e.price=t}},null,8,["id","onUpdate:modelValue"]),[[o["vModelText"],e.price,void 0,{number:!0}]])]),Object(o["createVNode"])("div",Ee,[Object(o["createVNode"])("label",{for:"productUnit-".concat(t),class:"form-label"},"計費單位",8,["for"]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",id:"productUnit-".concat(t),class:"form-control","onUpdate:modelValue":function(t){return e.unit=t},placeholder:"每人"},null,8,["id","onUpdate:modelValue"]),[[o["vModelText"],e.unit]])]),Object(o["createVNode"])("div",$e,[Object(o["createVNode"])("label",{for:"productMeetingPoint-".concat(t),class:"form-label"},"集合地點",8,["for"]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",id:"productMeetingPoint-".concat(t),class:"form-control","onUpdate:modelValue":function(t){return e.meetingPoint=t}},null,8,["id","onUpdate:modelValue"]),[[o["vModelText"],e.meetingPoint,void 0,{trim:!0}]])]),Object(o["createVNode"])("div",Fe,[Object(o["createVNode"])("label",{for:"productMeetingTime-".concat(t),class:"form-label"},"集合時間",8,["for"]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",id:"productMeetingTime-".concat(t),class:"form-control","onUpdate:modelValue":function(t){return e.meetingTime=t}},null,8,["id","onUpdate:modelValue"]),[[o["vModelText"],e.meetingTime,void 0,{trim:!0}]])])]),Object(o["createVNode"])("div",Je,[Object(o["createVNode"])("div",Re,[He,Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-primary d-block w-25",onClick:function(e){return n.addNewContent(t)}}," 加新內容 ",8,["onClick"])]),Object(o["createVNode"])("div",qe,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.contentArr,(function(c,a){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:a,class:"col-6 mb-2"},[Object(o["createVNode"])("div",ze,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(t){return e.contentArr[a]=t}},null,8,["onUpdate:modelValue"]),[[o["vModelText"],e.contentArr[a]]]),Object(o["createVNode"])("button",{class:"btn btn-outline-primary",type:"button",onClick:function(e){return n.deleteContent(t,a)}},[Ge],8,["onClick"])])])})),128))])])])})),128)),Object(o["createVNode"])("div",Ke,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"checkbox",class:"form-check-input",id:"productEnabled","onUpdate:modelValue":t[17]||(t[17]=function(e){return r.tempProduct.is_enabled=e})},null,512),[[o["vModelCheckbox"],r.tempProduct.is_enabled]]),Qe]),Object(o["createVNode"])("div",We,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"checkbox",class:"form-check-input",id:"mainProduct","onUpdate:modelValue":t[18]||(t[18]=function(e){return r.tempProduct.is_mainProduct=e})},null,512),[[o["vModelCheckbox"],r.tempProduct.is_mainProduct]]),Xe])]),Object(o["createVNode"])("div",Ye,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary w-25 d-flex justify-content-center align-items-center",ref:"productAdminBtn",onClick:t[19]||(t[19]=function(t){return e.$emit("emit-product-modal",c.modalTitle,r.tempProduct)})},[Ze,Object(o["createVNode"])("p",et,Object(o["toDisplayString"])(c.modalTitle),1)],512),tt])])])])])])])]),r.showAlert?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,"alert-msg":r.alertMsg},null,8,["alert-msg"])):Object(o["createCommentVNode"])("",!0)],64)}c("caad"),c("2532"),c("b64b");var ot={props:["modalTitle","temp","tagCategory"],data:function(){return{tempProduct:Object(A["a"])(Object(A["a"])({},this.temp),{},{tagCheck:[]}),showAlert:!1,alertMsg:""}},components:{alert:U["a"]},methods:{customAlert:function(e){this.alertMsg=e,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1},addImgs:function(){this.tempProduct.imagesUrl.length<5?(this.tempProduct.imagesUrl.push(this.tempProduct.otherImageUrl),this.tempProduct.otherImageUrl=""):this.customAlert("最多只可上傳六張照片")},deleteImgs:function(e,t){if("mainImg"===t)this.tempProduct.imageUrl="";else if("subImg"===t){var c=e.currentTarget.dataset.img;this.tempProduct.imagesUrl.splice(c,1)}},addNewAttraction:function(){!1===Object.keys(this.tempProduct).includes("attractionArr")?(this.tempProduct.attractionArr=[],this.tempProduct.attractionArr[0]={}):this.tempProduct.attractionArr[this.tempProduct.attractionArr.length]={}},deleteAttraction:function(e){this.tempProduct.attractionArr.splice(e,1)},addNewContent:function(e){!1===Object.keys(this.tempProduct.packageOptions[e]).includes("contentArr")?(this.tempProduct.packageOptions[e].contentArr=[],this.tempProduct.packageOptions[e].contentArr[0]=""):this.tempProduct.packageOptions[e].contentArr[this.tempProduct.packageOptions[e].contentArr.length]=""},deleteContent:function(e,t){this.tempProduct.packageOptions[e].contentArr.splice(t,1)},addPackageOption:function(){!1===Object.keys(this.tempProduct).includes("packageOptions")?(this.tempProduct.packageOptions=[],this.tempProduct.packageOptions[0]={}):this.tempProduct.packageOptions[this.tempProduct.packageOptions.length]={}}},watch:{temp:function(){this.tempProduct=Object(A["a"])({},this.temp),!1===Object.keys(this.tempProduct).includes("tagCheck")&&(this.tempProduct.tagCheck=[]),!1===Object.keys(this.tempProduct).includes("duration")&&(this.tempProduct.duration={day:0,hours:0,min:0})}},created:function(){this.tempProduct=Object(A["a"])(Object(A["a"])({},this.temp),{},{tagCheck:[]})}};ot.render=ct;var at=ot,rt=c("ec05"),nt={data:function(){return{temp:{title:"",category:"",origin_price:0,price:0,unit:"",description:"",content:"",duration:{},is_enabled:!0,is_mainProduct:!1,imageUrl:"",otherImageUrl:"",imagesUrl:[],packageOptions:[],tagCheck:[]},tagCategory:["雙北","中彰投","嘉南","高屏","花東","親子","浪漫","冒險","自然","烹飪","美食","知性文化","水上活動","獨家代理"],products:[],totalProducts:[],mainProduct:[],pagination:{},modalTitle:"",productModal:{},deleteModal:{},searchProduct:"",showAlert:!1,alertMsg:""}},components:{alert:U["a"],pagination:T["a"],productEditModal:at,productDeleteModal:rt["a"]},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/products/?page=").concat(t)).then((function(t){if(t.data.success){var c=t.data;e.products=c.products,e.pagination=t.data.pagination}else e.customAlert(t.data.message)})).catch((function(t){e.customAlert(t.response)})),this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/products/all")).then((function(t){t.data.success?(e.totalProducts=Object.values(t.data.products),e.totalProducts.forEach((function(t){t.is_mainProduct&&e.mainProduct.push(t)}))):e.customAlert(t.data.message)})).catch((function(t){e.customAlert(t.response)}))},customAlert:function(e){this.alertMsg=e,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1},openModal:function(e,t){switch(t){case"addProduct":this.clearModal(),this.modalTitle="新增",this.productModal.show();break;case"editProduct":this.modalTitle="完成編輯",this.temp=Object(A["a"])({},e),this.temp.is_enabled=1===this.temp.is_enabled,!1===Object.prototype.hasOwnProperty.call(this.temp,"imagesUrl")?this.temp.imagesUrl=[]:this.temp.imagesUrl=this.temp.imagesUrl.filter((function(e){return""!==e})),this.productModal.show();break;case"deleteProduct":this.temp=Object(A["a"])({},e);break;default:break}},clearModal:function(){this.temp={title:"",category:"",origin_price:0,price:0,unit:"",description:"",content:"",is_enabled:!0,imageUrl:"",otherImageUrl:"",imagesUrl:[]}},addNewProduct:function(e,t){var c=this,o=this.$refs.productModal.$refs.productAdminBtn;o.classList.add("disabled"),o.children[0].classList.remove("d-none");var a={};if(a.data=Object(A["a"])({},t),a.data.is_enabled=a.data.is_enabled?1:0,console.log(a.data.tagCheck),a.data.tagCheck.indexOf("體驗票券")>-1?a.data.tagCheck.splice(a.data.tagCheck.indexOf("體驗票券"),1):a.data.tagCheck.indexOf("城市導覽")>-1?a.data.tagCheck.splice(a.data.tagCheck.indexOf("城市導覽"),1):a.data.tagCheck.indexOf("包車服務")>-1&&a.data.tagCheck.splice(a.data.tagCheck.indexOf("包車服務"),1),console.log(a.data.tagCheck),a.data.tagCheck.push(a.data.category),delete a.data.otherImageUrl,"新增"===e)this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/product"),a).then((function(e){e.data.success?(c.customAlert("新增完成"),c.getData(),o.classList.remove("disabled"),o.children[0].classList.add("d-none"),c.productModal.hide(),window.setTimeout(c.closeCustomAlert,5e3)):(c.customAlert(e.data.message),o.classList.remove("disabled"),o.children[0].classList.add("d-none"))})).catch((function(e){c.customAlert(e.response),o.classList.remove("disabled"),o.children[0].classList.add("d-none")}));else if("完成編輯"===e){var r=t.id;this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/product/").concat(r),a).then((function(e){e.data.success?(c.customAlert("編輯成功"),c.getData(),o.classList.remove("disabled"),o.children[0].classList.add("d-none"),c.productModal.hide(),window.setTimeout(c.closeCustomAlert,5e3)):(c.customAlert(e.data.message),o.classList.remove("disabled"),o.children[0].classList.add("d-none"))})).catch((function(e){c.customAlert(e.response),o.classList.remove("disabled"),o.children[0].classList.add("d-none")}))}},deleteProduct:function(){var e=this,t=this.temp.id;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/product/").concat(t)).then((function(t){t.data.success?(e.customAlert("刪除成功"),e.getData(),e.clearModal(),e.deleteModal.hide(),window.setTimeout(e.closeCustomAlert,5e3)):e.customAlert(t.data.message)})).catch((function(t){e.customAlert(t.response)}))},deleteMainProduct:function(e){var t=this,c={};c.data=Object(A["a"])({},e),c.data.is_mainProduct=!1;var o=c.data.id;this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/product/").concat(o),c).then((function(e){e.data.success?t.customAlert("刪除成功"):t.customAlert(e.data.message)})).catch((function(e){t.customAlert(e.response)}))}},computed:{filterProduct:function(){var e=this;return""!==this.searchProduct?this.totalProducts.filter((function(t){return t.title.match(e.searchProduct)})):this.products}},created:function(){this.getData()},mounted:function(){this.productModal=new I["a"](document.getElementById("productModal"),{keyboard:!1}),this.deleteModal=new I["a"](document.getElementById("deleteModal"),{keyboard:!1})}};nt.render=D;t["default"]=nt},5530:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));c("b64b"),c("a4d3"),c("4de4"),c("e439"),c("159b"),c("dbb4");function o(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function a(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,o)}return c}function r(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?a(Object(c),!0).forEach((function(t){o(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):a(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}},"5a34":function(e,t,c){var o=c("44e7");e.exports=function(e){if(o(e))throw TypeError("The method doesn't accept regular expressions");return e}},"6f53":function(e,t,c){var o=c("83ab"),a=c("df75"),r=c("fc6a"),n=c("d1e7").f,l=function(e){return function(t){var c,l=r(t),i=a(l),d=i.length,s=0,u=[];while(d>s)c=i[s++],o&&!n.call(l,c)||u.push(e?[c,l[c]]:l[c]);return u}};e.exports={entries:l(!0),values:l(!1)}},a434:function(e,t,c){"use strict";var o=c("23e7"),a=c("23cb"),r=c("a691"),n=c("50c4"),l=c("7b0b"),i=c("65f0"),d=c("8418"),s=c("1dde"),u=s("splice"),b=Math.max,p=Math.min,m=9007199254740991,O="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,o,s,u,j,h,f=l(this),g=n(f.length),v=a(e,g),V=arguments.length;if(0===V?c=o=0:1===V?(c=0,o=g-v):(c=V-2,o=p(b(r(t),0),g-v)),g+c-o>m)throw TypeError(O);for(s=i(f,o),u=0;u<o;u++)j=v+u,j in f&&d(s,u,f[j]);if(s.length=o,c<o){for(u=v;u<g-o;u++)j=u+o,h=u+c,j in f?f[h]=f[j]:delete f[h];for(u=g;u>g-o+c;u--)delete f[u-1]}else if(c>o)for(u=g-o;u>v;u--)j=u+o-1,h=u+c-1,j in f?f[h]=f[j]:delete f[h];for(u=0;u<c;u++)f[u+v]=arguments[u+2];return f.length=g-o+c,s}})},ab13:function(e,t,c){var o=c("b622"),a=o("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[a]=!1,"/./"[e](t)}catch(o){}}return!1}},caad:function(e,t,c){"use strict";var o=c("23e7"),a=c("4d64").includes,r=c("44d2");o({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},dbb4:function(e,t,c){var o=c("23e7"),a=c("83ab"),r=c("56ef"),n=c("fc6a"),l=c("06cf"),i=c("8418");o({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,c,o=n(e),a=l.f,d=r(o),s={},u=0;while(d.length>u)c=a(o,t=d[u++]),void 0!==c&&i(s,t,c);return s}})},e01a:function(e,t,c){"use strict";var o=c("23e7"),a=c("83ab"),r=c("da84"),n=c("5135"),l=c("861d"),i=c("9bf2").f,d=c("e893"),s=r.Symbol;if(a&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},b=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof b?new s(e):void 0===e?s():s(e);return""===e&&(u[t]=!0),t};d(b,s);var p=b.prototype=s.prototype;p.constructor=b;var m=p.toString,O="Symbol(test)"==String(s("test")),j=/^Symbol\((.*)\)[^)]+$/;i(p,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=m.call(e);if(n(u,e))return"";var c=O?t.slice(7,-1):t.replace(j,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:b})}},e439:function(e,t,c){var o=c("23e7"),a=c("d039"),r=c("fc6a"),n=c("06cf").f,l=c("83ab"),i=a((function(){n(1)})),d=!l||i;o({target:"Object",stat:!0,forced:d,sham:!l},{getOwnPropertyDescriptor:function(e,t){return n(r(e),t)}})},ec05:function(e,t,c){"use strict";var o=c("7a23"),a={id:"deleteModal",ref:"deleteModal",class:"modal fade",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},r={class:"modal-dialog"},n={class:"modal-content delete-modal-bg"},l={class:"modal-body"},i=Object(o["createVNode"])("button",{type:"button",class:"close-modal-btn close-modal-m-btn bg-danger","data-bs-dismiss":"modal","aria-label":"Close"},[Object(o["createVNode"])("span",{class:"material-icons"}," clear ")],-1),d={class:"delete-modal-inner-bg mb-4"},s={key:0},u={class:"h5"},b=Object(o["createVNode"])("p",null,"商品一經刪除及無法復原，是否確認刪除？",-1),p={key:1},m={class:"h5"},O=Object(o["createVNode"])("p",null,"優惠券一經刪除及無法復原，是否確認刪除？",-1),j={key:2},h={class:"h5"},f=Object(o["createVNode"])("p",null,"訂單一經刪除及無法復原，是否確認刪除？",-1),g={class:"d-flex justify-content-center"},v=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-light w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function V(e,t,c,V,k,N){return Object(o["openBlock"])(),Object(o["createBlock"])("div",a,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",l,[i,Object(o["createVNode"])("div",d,[k.tempItem.hasOwnProperty("content")?(Object(o["openBlock"])(),Object(o["createBlock"])("div",s,[Object(o["createVNode"])("p",u,Object(o["toDisplayString"])(k.tempItem.title),1),b])):k.tempItem.hasOwnProperty("code")?(Object(o["openBlock"])(),Object(o["createBlock"])("div",p,[Object(o["createVNode"])("p",m,Object(o["toDisplayString"])(k.tempItem.title)+"："+Object(o["toDisplayString"])(k.tempItem.code),1),O])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",j,[Object(o["createVNode"])("p",h,"訂單編號："+Object(o["toDisplayString"])(k.tempItem.id),1),f]))]),Object(o["createVNode"])("div",g,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-dark w-25 d-block",onClick:t[1]||(t[1]=function(t){return e.$emit("emit-delete-modal")})}," 確認刪除 "),v])])])])],512)}var k=c("5530"),N={props:["temp"],data:function(){return{tempItem:Object(k["a"])({},this.temp)}},watch:{temp:function(){this.tempItem=Object(k["a"])({},this.temp)}},created:function(){this.tempItem=Object(k["a"])({},this.temp)}};N.render=V;t["a"]=N}}]);
//# sourceMappingURL=chunk-298fd22c.31c674fe.js.map