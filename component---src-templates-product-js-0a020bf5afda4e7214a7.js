(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Opla:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),r=n.n(a);function o(e){var t=e.productId,n=Object(a.useState)("loading..."),o=n[0],c=n[1],i=Object(a.useState)(!0),l=i[0],s=i[1];return Object(a.useEffect)((function(){var e=btoa({}.GATSBY_WOO_CONSUMER_KEY+":"+{}.GATSBY_WOO_CONSUMER_SECRET);fetch("https://shop.twinstrippin.com/wp-json/wc/v3/products/"+t,{method:"GET",headers:{Authorization:"Basic "+e}}).then((function(e){return e.json()})).then((function(e){c(e.stock_quantity),s(!1)}))}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,l?"fetching stock quantity...":o+" in stock"))}},giMl:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),c=n("Opla");function i(e){var t=e.data.product;return r.a.createElement("div",{style:{overflow:"hidden"}},r.a.createElement(o.a,{to:"/"},r.a.createElement("p",null,"Home")),r.a.createElement("h1",{style:{position:"relative",display:"inline-block"}},t.name,t.on_sale&&r.a.createElement("span",{style:{fontSize:14,borderRadius:"100%",background:"rebeccapurple",color:"#fff",padding:10,position:"absolute",right:-50,top:-20,transform:"rotate(20deg)"}},"SALE!")),r.a.createElement("div",null,r.a.createElement(c.a,{productId:t.wooCommerceId})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.price_html}}),t.images&&t.images.map((function(e,t){return r.a.createElement("img",{key:t,src:e.src,alt:e.name,style:{display:"block",width:"100%",marginBottom:"1rem"}})})))}}}]);
//# sourceMappingURL=component---src-templates-product-js-0a020bf5afda4e7214a7.js.map