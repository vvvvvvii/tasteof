(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ece1776a"],{"07ac":function(e,t,c){var o=c("23e7"),a=c("6f53").values;o({target:"Object",stat:!0},{values:function(e){return a(e)}})},"466d":function(e,t,c){"use strict";var o=c("d784"),a=c("825a"),r=c("50c4"),l=c("1d80"),d=c("8aa5"),i=c("14c3");o("match",1,(function(e,t,c){return[function(t){var c=l(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,c):new RegExp(t)[e](String(c))},function(e){var o=c(t,e,this);if(o.done)return o.value;var l=a(e),n=String(this);if(!l.global)return i(l,n);var s=l.unicode;l.lastIndex=0;var u,p=[],b=0;while(null!==(u=i(l,n))){var m=String(u[0]);p[b]=m,""===m&&(l.lastIndex=d(n,r(l.lastIndex),s)),b++}return 0===b?null:p}]}))},"4bec":function(e,t,c){"use strict";c.r(t);c("a4d3"),c("e01a");var o=c("7a23"),a={class:"bg-light-primary"},r={class:"container p-4"},l={class:"d-flex justify-content-between"},d=Object(o["createVNode"])("label",{for:"searchProduct",class:"search-icon"},[Object(o["createVNode"])("span",{class:"material-icons"}," search ")],-1),i=Object(o["createVNode"])("span",{class:"material-icons me-1"}," tag_faces ",-1),n=Object(o["createTextVNode"])(" 新增產品 "),s={key:0,class:"ms-6"},u={key:0,class:"ms-6 text-dark-primary"},p={key:1},b={key:1,class:"ms-6"},m={key:0,class:"ms-6 text-dark-primary"},h={key:1},O={class:"container py-4"},j={class:"table mb-6"},f=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{width:"100"}),Object(o["createVNode"])("th",null,"產品名稱"),Object(o["createVNode"])("th",{width:"150"},"原價"),Object(o["createVNode"])("th",{width:"150"},"售價"),Object(o["createVNode"])("th",{width:"120"})])],-1),g={width:"100"},V={class:"pe-4"},v={width:"150"},N={width:"150"},y={width:"120"},k={class:"ms-2"};function P(e,t,c,P,w,x){var M=Object(o["resolveComponent"])("pagination"),U=Object(o["resolveComponent"])("product-edit-modal"),B=Object(o["resolveComponent"])("product-delete-modal");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",l,[Object(o["createVNode"])("div",null,[d,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"search",id:"searchProduct",class:"search-bar",placeholder:"搜尋產品","onUpdate:modelValue":t[1]||(t[1]=function(e){return w.searchProduct=e})},null,512),[[o["vModelText"],w.searchProduct]])]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-dark d-inline-flex me-2",onClick:t[2]||(t[2]=function(e){return x.openModal(e,"addProduct")})},[i,n])]),""===w.searchProduct?(Object(o["openBlock"])(),Object(o["createBlock"])("small",s,[0==w.totalProducts.length?(Object(o["openBlock"])(),Object(o["createBlock"])("p",u,"目前尚無產品")):(Object(o["openBlock"])(),Object(o["createBlock"])("p",p,"目前有 "+Object(o["toDisplayString"])(w.totalProducts.length)+" 項產品",1))])):(Object(o["openBlock"])(),Object(o["createBlock"])("small",b,[0==x.filterProduct.length?(Object(o["openBlock"])(),Object(o["createBlock"])("p",m,"目前尚無產品")):(Object(o["openBlock"])(),Object(o["createBlock"])("p",h,"目前有 "+Object(o["toDisplayString"])(x.filterProduct.length)+" 項產品",1))]))])]),Object(o["createVNode"])("div",O,[Object(o["createVNode"])("table",j,[f,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(x.filterProduct,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:e.id,"data-bs-toggle":"collapse",href:"#collapseProduct-"+t,"aria-expanded":"false","aria-controls":"collapseProduct-"+t,class:"light-primary-hover",title:"點擊看詳細內容"},[Object(o["createVNode"])("td",g,[Object(o["createVNode"])("span",{class:["badge rounded-pill",{"bg-danger":"城市導覽"===e.category,"bg-primary":"體驗票券"===e.category,"bg-info":"包車服務"===e.category,"bg-success":"推薦住宿"===e.category}]},Object(o["toDisplayString"])(e.category),3)]),Object(o["createVNode"])("td",V,[Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title)+" ",1),Object(o["createVNode"])("span",{class:["material-icons align-bottom d-inline",{"text-success":e.is_enabled,"text-secondary":!e.is_enabled}]},Object(o["toDisplayString"])(e.is_enabled?"check_circle":"do_disturb"),3)]),Object(o["createVNode"])("small",{class:"collapse",id:"collapseProduct-"+t},Object(o["toDisplayString"])(e.description),9,["id"])]),Object(o["createVNode"])("td",v,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.origin_price)+" / ",1),Object(o["createVNode"])("small",null,Object(o["toDisplayString"])(e.unit),1)]),Object(o["createVNode"])("td",N,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.price)+" / ",1),Object(o["createVNode"])("small",null,Object(o["toDisplayString"])(e.unit),1)]),Object(o["createVNode"])("td",y,[Object(o["createVNode"])("a",null,[Object(o["createVNode"])("span",{class:"material-icons",onClick:function(t){return x.openModal(e,"editProduct")}}," mode_edit ",8,["onClick"])]),Object(o["createVNode"])("a",k,[Object(o["createVNode"])("span",{class:"material-icons",onClick:function(t){return x.openModal(e,"deleteProduct")},"data-bs-toggle":"modal","data-bs-target":"#deleteModal"}," delete ",8,["onClick"])])])],8,["href","aria-controls"])})),128))])]),Object(o["createVNode"])(M,{page:w.pagination,onEmitPagination:x.getData},null,8,["page","onEmitPagination"]),Object(o["createVNode"])(U,{"modal-title":w.modalTitle,temp:w.temp,onEmitProductModal:x.addNewProduct},null,8,["modal-title","temp","onEmitProductModal"]),Object(o["createVNode"])(B,{temp:w.temp,onEmitDeleteModal:x.deleteProduct},null,8,["temp","onEmitDeleteModal"])])],64)}var w=c("5530"),x=(c("99af"),c("07ac"),c("4de4"),c("ac1f"),c("466d"),c("1799")),M=c("7b17"),U={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},B={class:"modal-dialog modal-xl"},D={class:"modal-content product-modal-bg"},I={class:"modal-body"},T=Object(o["createVNode"])("button",{type:"button",class:"close-modal-btn close-modal-lg-btn bg-light-primary","data-bs-dismiss":"modal","aria-label":"Close"},[Object(o["createVNode"])("span",{class:"material-icons"}," clear ")],-1),S={class:"container-fluid"},_={class:"row"},C={class:"col-4"},E={class:"bg-light-primary p-3 rounded-3"},$={class:"mb-2"},A=Object(o["createVNode"])("label",{for:"imgUrl",class:"form-label"},"產品圖片",-1),F=Object(o["createVNode"])("button",{type:"button",class:"btn btn-dark-primary mb-2","data-bs-toggle":"collapse",href:"#collapseAddImgs","aria-expanded":"false","aria-controls":"collapseAddImgs"}," 新增其他圖片 ",-1),L={class:"collapse",id:"collapseAddImgs"},J={class:"d-flex mb-2"},R=Object(o["createVNode"])("span",{class:"material-icons"}," add_task ",-1),q={class:"row g-1"},z={class:"col-4 mb-2"},G=Object(o["createVNode"])("span",{class:"material-icons"}," delete ",-1),H={key:1,class:"modal-img-default"},K=Object(o["createVNode"])("span",{class:"material-icons"}," delete ",-1),Q={key:1,class:"modal-img-default"},W={class:"col-8"},X={class:"mb-4"},Y={class:"mb-2"},Z=Object(o["createVNode"])("label",{for:"productTitle",class:"form-label"},"標題",-1),ee={class:"row"},te={class:"col-6 mb-2"},ce=Object(o["createVNode"])("label",{for:"productCategory",class:"form-label"},"分類",-1),oe=Object(o["createVNode"])("option",{selected:"",disabled:""},"請選擇產品分類",-1),ae=Object(o["createVNode"])("option",null,"城市導覽",-1),re=Object(o["createVNode"])("option",null,"體驗票券",-1),le=Object(o["createVNode"])("option",null,"包車服務",-1),de=Object(o["createVNode"])("option",null,"推薦住宿",-1),ie={class:"col-6 mb-2"},ne=Object(o["createVNode"])("label",{for:"productUnit",class:"form-label"},"計費單位",-1),se={class:"col-6 mb-2"},ue=Object(o["createVNode"])("label",{for:"productOriginalPrice",class:"form-label"},"原價",-1),pe={class:"col-6 mb-2"},be=Object(o["createVNode"])("label",{for:"productPrice",class:"form-label"},"售價",-1),me={class:"mb-2"},he=Object(o["createVNode"])("label",{for:"productDescription",class:"form-label"},"產品描述",-1),Oe={class:"mb-2"},je=Object(o["createVNode"])("label",{for:"productContent",class:"form-label"},"適用規定",-1),fe={class:"form-check"},ge=Object(o["createVNode"])("label",{class:"form-check-label",for:"productEnabled"},"產品是否啟用",-1),Ve={class:"d-flex justify-content-center"},ve=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-dark w-25 d-block ms-3","data-bs-dismiss":"modal"}," 取消 ",-1);function Ne(e,t,c,a,r,l){return Object(o["openBlock"])(),Object(o["createBlock"])("div",U,[Object(o["createVNode"])("div",B,[Object(o["createVNode"])("div",D,[Object(o["createVNode"])("div",I,[T,Object(o["createVNode"])("div",S,[Object(o["createVNode"])("div",_,[Object(o["createVNode"])("div",C,[Object(o["createVNode"])("div",E,[Object(o["createVNode"])("div",$,[A,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",id:"imgUrl",class:"form-control",placeholder:"請輸入圖片網址","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.tempProduct.imageUrl=e})},null,512),[[o["vModelText"],r.tempProduct.imageUrl]])]),F,Object(o["createVNode"])("div",L,[Object(o["createVNode"])("div",J,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",placeholder:"請輸入圖片網址","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.tempProduct.otherImageUrl=e})},null,512),[[o["vModelText"],r.tempProduct.otherImageUrl]]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-dark-primary rounded-pill ms-2",onClick:t[3]||(t[3]=function(){return l.addImgs&&l.addImgs.apply(l,arguments)})},[R])])]),Object(o["createVNode"])("ul",q,[Object(o["createVNode"])("li",z,[r.tempProduct.imageUrl?(Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:0,href:"#",class:"modal-img",onClick:t[4]||(t[4]=function(e){return l.deleteImgs(e,"mainImg")})},[Object(o["createVNode"])("img",{src:r.tempProduct.imageUrl,alt:"主圖片"},null,8,["src"]),G])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",H))]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.tempProduct.imagesUrl,(function(e,c){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:"col-4 mb-2",key:e},[e?(Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:0,href:"#",class:"modal-img",onClick:t[5]||(t[5]=function(e){return l.deleteImgs(e,"subImg")}),"data-img":c},[Object(o["createVNode"])("img",{src:e,alt:"副圖片"},null,8,["src"]),K],8,["data-img"])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",Q))])})),128))])])]),Object(o["createVNode"])("div",W,[Object(o["createVNode"])("form",X,[Object(o["createVNode"])("div",Y,[Z,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",id:"productTitle",class:"form-control","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.tempProduct.title=e})},null,512),[[o["vModelText"],r.tempProduct.title]])]),Object(o["createVNode"])("div",ee,[Object(o["createVNode"])("div",te,[ce,Object(o["withDirectives"])(Object(o["createVNode"])("select",{id:"productCategory",class:"form-select","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.tempProduct.category=e})},[oe,ae,re,le,de],512),[[o["vModelSelect"],r.tempProduct.category]])]),Object(o["createVNode"])("div",ie,[ne,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",id:"productUnit",class:"form-control","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.tempProduct.unit=e}),placeholder:"每人"},null,512),[[o["vModelText"],r.tempProduct.unit]])]),Object(o["createVNode"])("div",se,[ue,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",id:"productOriginalPrice",class:"form-control",min:"0","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.tempProduct.origin_price=e})},null,512),[[o["vModelText"],r.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["createVNode"])("div",pe,[be,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",id:"productPrice",class:"form-control",min:"0","onUpdate:modelValue":t[10]||(t[10]=function(e){return r.tempProduct.price=e})},null,512),[[o["vModelText"],r.tempProduct.price,void 0,{number:!0}]])])]),Object(o["createVNode"])("div",me,[he,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{name:"productDescription",id:"productDescription",class:"form-control",cols:"30",rows:"3","onUpdate:modelValue":t[11]||(t[11]=function(e){return r.tempProduct.description=e})},null,512),[[o["vModelText"],r.tempProduct.description]])]),Object(o["createVNode"])("div",Oe,[je,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{name:"productContent",id:"productContent",class:"form-control",cols:"30",rows:"3","onUpdate:modelValue":t[12]||(t[12]=function(e){return r.tempProduct.content=e})},null,512),[[o["vModelText"],r.tempProduct.content]])]),Object(o["createVNode"])("div",fe,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"checkbox",class:"form-check-input",id:"productEnabled","onUpdate:modelValue":t[13]||(t[13]=function(e){return r.tempProduct.is_enabled=e})},null,512),[[o["vModelCheckbox"],r.tempProduct.is_enabled]]),ge])]),Object(o["createVNode"])("div",Ve,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary w-25 d-block",onClick:t[14]||(t[14]=function(t){return e.$emit("emit-product-modal",c.modalTitle,r.tempProduct)})},Object(o["toDisplayString"])(c.modalTitle),1),ve])])])])])])])],512)}c("a434");var ye={props:["modalTitle","temp"],data:function(){return{tempProduct:Object(w["a"])({},this.temp)}},methods:{addImgs:function(){this.tempProduct.imagesUrl.length<5?(this.tempProduct.imagesUrl.push(this.tempProduct.otherImageUrl),this.tempProduct.otherImageUrl=""):alert("最多只可上傳六張照片")},deleteImgs:function(e,t){if("mainImg"===t)this.tempProduct.imageUrl="";else if("subImg"===t){var c=e.currentTarget.dataset.img;this.tempProduct.imagesUrl.splice(c,1)}}},watch:{temp:function(){this.tempProduct=Object(w["a"])({},this.temp)}},created:function(){this.tempProduct=Object(w["a"])({},this.temp)}};ye.render=Ne;var ke=ye,Pe=c("ec05"),we={data:function(){return{temp:{title:"",category:"",origin_price:0,price:0,unit:"",description:"",content:"",is_enabled:!0,imageUrl:"",otherImageUrl:"",imagesUrl:[]},products:[],totalProducts:[],pagination:{},modalTitle:"",productModal:{},deleteModal:{},searchProduct:""}},components:{pagination:x["a"],productEditModal:ke,productDeleteModal:Pe["a"]},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/products/?page=").concat(t)).then((function(t){if(t.data.success){var c=t.data;e.products=c.products,e.pagination=t.data.pagination}else console.log(t.data.message)})).catch((function(e){console.log(e.response)})),this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/products/all")).then((function(t){t.data.success?e.totalProducts=Object.values(t.data.products):console.log(t.data.message)})).catch((function(e){console.log(e.response)}))},openModal:function(e,t){switch(t){case"addProduct":this.clearModal(),this.modalTitle="新增",this.productModal.show();break;case"editProduct":this.modalTitle="完成編輯",this.temp=Object(w["a"])({},e),this.temp.is_enabled=1===this.temp.is_enabled,!1===Object.prototype.hasOwnProperty.call(this.temp,"imagesUrl")?this.temp.imagesUrl=[]:this.temp.imagesUrl=this.temp.imagesUrl.filter((function(e){return""!==e})),this.productModal.show();break;case"deleteProduct":this.temp=Object(w["a"])({},e);break;default:break}},clearModal:function(){this.temp={title:"",category:"",origin_price:0,price:0,unit:"",description:"",content:"",is_enabled:!0,imageUrl:"",otherImageUrl:"",imagesUrl:[]}},addNewProduct:function(e,t){var c=this,o={};if(o.data=Object(w["a"])({},t),o.data.is_enabled=o.data.is_enabled?1:0,delete o.data.otherImageUrl,"新增"===e)this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/product"),o).then((function(e){e.data.success?(alert("新增完成"),c.getData(),c.productModal.hide()):alert(e.data.message)})).catch((function(e){console.log(e.response)}));else if("完成編輯"===e){var a=t.id;this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/product/").concat(a),o).then((function(e){alert("編輯成功"),e.data.success?(c.getData(),c.productModal.hide()):alert(e.data.message)})).catch((function(e){console.log(e.response)}))}},deleteProduct:function(){var e=this,t=this.temp.id;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/admin/product/").concat(t)).then((function(t){t.data.success?(alert("刪除成功"),e.getData(),e.clearModal(),e.deleteModal.hide()):alert(t.data.message)})).catch((function(e){console.log(e.response)}))}},computed:{filterProduct:function(){var e=this;return""!==this.searchProduct?this.totalProducts.filter((function(t){return t.title.match(e.searchProduct)})):this.products}},created:function(){this.getData()},mounted:function(){this.productModal=new M["a"](document.getElementById("productModal"),{keyboard:!1}),this.deleteModal=new M["a"](document.getElementById("deleteModal"),{keyboard:!1})}};we.render=P;t["default"]=we},"6f53":function(e,t,c){var o=c("83ab"),a=c("df75"),r=c("fc6a"),l=c("d1e7").f,d=function(e){return function(t){var c,d=r(t),i=a(d),n=i.length,s=0,u=[];while(n>s)c=i[s++],o&&!l.call(d,c)||u.push(e?[c,d[c]]:d[c]);return u}};e.exports={entries:d(!0),values:d(!1)}},a434:function(e,t,c){"use strict";var o=c("23e7"),a=c("23cb"),r=c("a691"),l=c("50c4"),d=c("7b0b"),i=c("65f0"),n=c("8418"),s=c("1dde"),u=s("splice"),p=Math.max,b=Math.min,m=9007199254740991,h="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,o,s,u,O,j,f=d(this),g=l(f.length),V=a(e,g),v=arguments.length;if(0===v?c=o=0:1===v?(c=0,o=g-V):(c=v-2,o=b(p(r(t),0),g-V)),g+c-o>m)throw TypeError(h);for(s=i(f,o),u=0;u<o;u++)O=V+u,O in f&&n(s,u,f[O]);if(s.length=o,c<o){for(u=V;u<g-o;u++)O=u+o,j=u+c,O in f?f[j]=f[O]:delete f[j];for(u=g;u>g-o+c;u--)delete f[u-1]}else if(c>o)for(u=g-o;u>V;u--)O=u+o-1,j=u+c-1,O in f?f[j]=f[O]:delete f[j];for(u=0;u<c;u++)f[u+V]=arguments[u+2];return f.length=g-o+c,s}})},e01a:function(e,t,c){"use strict";var o=c("23e7"),a=c("83ab"),r=c("da84"),l=c("5135"),d=c("861d"),i=c("9bf2").f,n=c("e893"),s=r.Symbol;if(a&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new s(e):void 0===e?s():s(e);return""===e&&(u[t]=!0),t};n(p,s);var b=p.prototype=s.prototype;b.constructor=p;var m=b.toString,h="Symbol(test)"==String(s("test")),O=/^Symbol\((.*)\)[^)]+$/;i(b,"description",{configurable:!0,get:function(){var e=d(this)?this.valueOf():this,t=m.call(e);if(l(u,e))return"";var c=h?t.slice(7,-1):t.replace(O,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-ece1776a.89434fcd.js.map