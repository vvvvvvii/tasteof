(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b4508be"],{a02d:function(t,e,c){"use strict";var o=c("7a23"),r={class:"alert alert-primary alert-dismissible fade show",role:"alert"};function n(t,e,c,n,a,i){return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,Object(o["toDisplayString"])(c.alertMsg),1)}var a={props:["alertMsg"]};a.render=n;e["a"]=a},f19d:function(t,e,c){"use strict";c.r(e);var o=c("7a23"),r={class:"container"},n={class:"col-lg-8"},a={class:"d-flex justify-content-between mb-lg-6 mb-md-4 mb-2"},i={class:"mb-2"},s={class:"text-gray-dark"},l={class:"mb-4"},d={class:"mb-8"},u={class:"bg-light pt-6 pb-8",id:"moreActivitiesSection"},b={class:"container"},p=Object(o["createVNode"])("h3",{class:"text-primary mb-5"},"更多相似活動",-1),m={class:"row"},h={class:"card-img-outer"},O={class:"card-body"},j={class:"card-title ellipsis"},f={class:"h3-md h5 text-end"},g=Object(o["createVNode"])("div",{class:"to-top-btn-text"},[Object(o["createVNode"])("p",null,"回到"),Object(o["createVNode"])("p",null,"上方")],-1);function w(t,e,c,w,v,k){var V=Object(o["resolveComponent"])("SwiperSlide"),N=Object(o["resolveComponent"])("Swiper"),B=Object(o["resolveComponent"])("router-link"),S=Object(o["resolveComponent"])("alert");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",{class:["row justify-content-center pt-8",{"pb-8":0!==v.randomProducts.length}]},[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("div",null,[Object(o["createVNode"])("h2",i,Object(o["toDisplayString"])(v.article.title),1),Object(o["createVNode"])("p",s,"文："+Object(o["toDisplayString"])(v.article.author),1)]),Object(o["createVNode"])("p",null,Object(o["toDisplayString"])(v.article.create_at),1)]),Object(o["createVNode"])("div",l,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(v.article.tagCheck,(function(t,e){return Object(o["openBlock"])(),Object(o["createBlock"])("span",{key:e,class:["text-secondary",{"ms-2":0!==e}]},"#"+Object(o["toDisplayString"])(t),3)})),128))]),Object(o["createVNode"])("div",d,[Object(o["createVNode"])(N,{autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,centeredSlides:!0,navigation:!0,thumbs:{swiper:t.thumbsSwiper},class:"gallery-top"},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(v.article.imagesUrl,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])(V,{key:t.id},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])("img",{src:t,class:"swiper-img"},null,8,["src"])]})),_:2},1024)})),128))]})),_:1},8,["thumbs"]),Object(o["createVNode"])(N,{onSwiper:k.setThumbsSwiper,loop:!0,slidesPerView:4,spaceBetween:10,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,class:"gallery-thumbs"},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(v.article.imagesUrl,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])(V,{key:t.id},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])("img",{src:t,class:"swiper-img"},null,8,["src"])]})),_:2},1024)})),128))]})),_:1},8,["onSwiper"])]),Object(o["createVNode"])("div",{innerHTML:v.article.content,class:"ckeditor-content"},null,8,["innerHTML"])])],2)]),Object(o["createVNode"])("div",u,[Object(o["createVNode"])("div",b,[p,Object(o["createVNode"])("div",m,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(v.randomProducts,(function(t,e){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"col-4",key:e},[Object(o["createVNode"])(B,{to:"/product/".concat(t.id),title:"查看更多",class:"card overflow-hidden"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])("div",h,[Object(o["createVNode"])("img",{src:t.imageUrl,alt:t.title,class:"card-img"},null,8,["src","alt"])]),Object(o["createVNode"])("div",O,[Object(o["createVNode"])("h4",j,Object(o["toDisplayString"])(t.title),1),Object(o["createVNode"])("p",f,"NT "+Object(o["toDisplayString"])(k.addComma(t.lowestPrice))+" 起",1)])]})),_:2},1032,["to"])])})),128))])])]),v.btnShow?(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:0,class:"to-top-btn",onClick:e[1]||(e[1]=function(){return k.scrollToTop&&k.scrollToTop.apply(k,arguments)}),ref:"toTopBtn"},[g],512)):Object(o["createCommentVNode"])("",!0),v.showAlert?(Object(o["openBlock"])(),Object(o["createBlock"])(S,{key:1,"alert-msg":v.alertMsg},null,8,["alert-msg"])):Object(o["createCommentVNode"])("",!0)])}var v=c("3835"),k=(c("99af"),c("ac1f"),c("5319"),c("1276"),c("159b"),c("d81d"),c("4e82"),c("7db0"),c("d3b7"),c("6062"),c("3ca3"),c("ddb0"),c("25f0"),c("a15b"),c("a02d")),V={data:function(){return{article:[],content:[],totalProducts:[],randomProducts:[],showAlert:!1,alertMsg:"",btnShow:!0}},props:["id"],components:{alert:k["a"]},methods:{getArticleData:function(){var t=this,e=this.id;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/article/").concat(e)).then((function(e){e.data.success?(t.article=e.data.article,t.article.create_at=new Date(1e3*t.article.create_at).toISOString().split("T")[0].replace(/-/g," / "),t.getTotalProducts()):(t.customAlert(e.data.message),window.setTimeout(t.closeCustomAlert,5e3))})).catch((function(e){t.customAlert(e.response),window.setTimeout(t.closeCustomAlert,5e3)}))},getTotalProducts:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("fm0fm0","/products/all")).then((function(e){e.data.success?(t.totalProducts=e.data.products,t.totalProducts.forEach((function(e,c){var o=e.packageOptions.map((function(t){return t.price}));o=o.sort((function(t,e){return t-e}));var r=o,n=Object(v["a"])(r,1),a=n[0];t.totalProducts[c].lowestPrice=a,e.packageOptions.forEach((function(e){e.price===a&&(t.totalProducts[c].lowestPriceUnit=e.unit)}))})),t.getRandomProducts()):(t.customAlert(e.data.message),window.setTimeout(t.closeCustomAlert,5e3))})).catch((function(e){t.customAlert(e.response),window.setTimeout(t.closeCustomAlert,5e3)}))},getRandomProducts:function(){var t,e=this,c=this.article.tagCheck;c.find((function(t){return"基隆"===t||"台北"===t||"新北"===t||"桃園"===t||"新竹"===t||"苗栗"===t}))?t="雙北":c.find((function(t){return"台中"===t||"彰化"===t||"南投"===t||"雲林"===t}))?t="中彰投":c.find((function(t){return"嘉義"===t||"台南"===t}))?t="嘉南":c.find((function(t){return"高雄"===t||"屏東"===t}))?t="高屏":c.find((function(t){return"宜蘭"===t||"花蓮"===t||"台東"===t||"離島"===t}))&&(t="花東");var o=[];this.totalProducts.forEach((function(e){e.tagCheck.forEach((function(c){c===t&&o.push(e)}))}));for(var r=new Set([]),n=o.length<3?o.length:3,a=0;r.size<n;a+1){var i=o.length,s=Math.floor(Math.random(i)*i);r.add(s)}r.forEach((function(t){e.randomProducts.push(o[t])}))},setThumbsSwiper:function(t){this.thumbsSwiper=t},customAlert:function(t){this.alertMsg=t,this.showAlert=!0},closeCustomAlert:function(){this.showAlert=!1},scrollToTop:function(){window.scrollTo(0,0)}},computed:{addComma:function(){return function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),"".concat(e.join(","))}}},mounted:function(){var t=this;this.getArticleData(),this.listener=function(){t.btnShow=window.scrollY>0},window.addEventListener("scroll",this.listener)},unmounted:function(){window.removeEventListener("scroll",this.listener)},watch:{"$route.params.id":{handler:function(){this.$router.go()}}}};V.render=w;e["default"]=V}}]);
//# sourceMappingURL=chunk-4b4508be.6ac995fb.js.map