(function(e){function t(t){for(var c,r,s=t[0],b=t[1],j=t[2],o=0,f=[];o<s.length;o++)r=s[o],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,j||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],c=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(c=!1)}c&&(u.splice(t--,1),e=b(b.s=n[0]))}return e}var c={},r={app:0},a={app:0},u=[];function s(e){return b.p+"js/"+({}[e]||e)+"."+{"chunk-2a489d5e":"fb2b14c2","chunk-2d0b59a6":"b090f917","chunk-2d0e2713":"29283bcc","chunk-2d208bfb":"2c9f4d51","chunk-391478b9":"8d26b650"}[e]+".js"}function b(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,b),n.l=!0,n.exports}b.e=function(e){var t=[],n={"chunk-2a489d5e":1,"chunk-391478b9":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-2a489d5e":"2e0e1a1b","chunk-2d0b59a6":"31d6cfe0","chunk-2d0e2713":"31d6cfe0","chunk-2d208bfb":"31d6cfe0","chunk-391478b9":"2e0e1a1b"}[e]+".css",a=b.p+c,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var j=u[s],o=j.getAttribute("data-href")||j.getAttribute("href");if("stylesheet"===j.rel&&(o===c||o===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){j=f[s],o=j.getAttribute("data-href");if(o===c||o===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var c=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],d.parentNode.removeChild(d),n(u)},d.href=a;var l=document.getElementsByTagName("head")[0];l.appendChild(d)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var u=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=u);var j,o=document.createElement("script");o.charset="utf-8",o.timeout=120,b.nc&&o.setAttribute("nonce",b.nc),o.src=s(e);var f=new Error;j=function(t){o.onerror=o.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){j({type:"timeout",target:o})}),12e4);o.onerror=o.onload=j,document.head.appendChild(o)}return Promise.all(t)},b.m=e,b.c=c,b.d=function(e,t,n){b.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},b.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.t=function(e,t){if(1&t&&(e=b(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(b.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)b.d(n,c,function(t){return e[t]}.bind(null,c));return n},b.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return b.d(t,"a",t),t},b.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},b.p="",b.oe=function(e){throw console.error(e),e};var j=window["webpackJsonp"]=window["webpackJsonp"]||[],o=j.push.bind(j);j.push=t,j=j.slice();for(var f=0;f<j.length;f++)t(j[f]);var d=o;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=a,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=n("f23d"),a={id:"app"};function u(e,t,n,r,u,s){return Object(c["E"])(),Object(c["k"])("div",a,[(Object(c["E"])(),Object(c["j"])(Object(c["K"])(s.layout)))])}var s=Object(c["l"])("div",{class:"logo"},null,-1),b=Object(c["l"])("h1",{class:"name"},"Novogene网站逻辑图",-1),j=Object(c["m"])(" 服务 "),o=Object(c["m"])("研究服务"),f=Object(c["m"])("临床诊断"),d=Object(c["m"])("生物制药"),l=Object(c["m"])("服务支持"),i=Object(c["m"])(" 技术 "),O=Object(c["m"])("概述"),m=Object(c["m"])("平台"),h=Object(c["m"])("认证"),p=Object(c["m"])("智能配送平台"),y=Object(c["m"])(" 资源 "),k=Object(c["m"])("出版物"),g=Object(c["m"])("下载"),v=Object(c["m"])("小册子"),T=Object(c["m"])("网络研讨会"),_=Object(c["m"])("博客"),w=Object(c["m"])(" 关于 "),z=Object(c["m"])("关于我们"),K=Object(c["m"])("诺金全球"),x=Object(c["m"])("新闻与事件"),E=Object(c["m"])("职业生涯"),J=Object(c["m"])("合伙人"),P=Object(c["m"])(" 联系我们 ");function S(e,t,n,r,a,u){var S=Object(c["J"])("a-menu"),L=Object(c["J"])("a-layout-header"),N=Object(c["J"])("user-outlined"),C=Object(c["J"])("router-link"),A=Object(c["J"])("a-menu-item"),U=Object(c["J"])("a-sub-menu"),H=Object(c["J"])("laptop-outlined"),D=Object(c["J"])("notification-outlined"),M=Object(c["J"])("a-layout-sider"),q=Object(c["J"])("router-view"),F=Object(c["J"])("a-layout");return Object(c["E"])(),Object(c["j"])(F,null,{default:Object(c["T"])((function(){return[Object(c["n"])(L,{class:"header"},{default:Object(c["T"])((function(){return[s,Object(c["n"])(S,{selectedKeys:e.selectedKeys1,"onUpdate:selectedKeys":t[0]||(t[0]=function(t){return e.selectedKeys1=t}),theme:"dark",mode:"horizontal",style:{lineHeight:"64px"}},{default:Object(c["T"])((function(){return[b]})),_:1},8,["selectedKeys"])]})),_:1}),Object(c["n"])(F,null,{default:Object(c["T"])((function(){return[Object(c["n"])(M,{width:"200",style:{background:"#fff"}},{default:Object(c["T"])((function(){return[Object(c["n"])(S,{selectedKeys:e.selectedKeys2,"onUpdate:selectedKeys":t[1]||(t[1]=function(t){return e.selectedKeys2=t}),openKeys:e.openKeys,"onUpdate:openKeys":t[2]||(t[2]=function(t){return e.openKeys=t}),mode:"inline",style:{height:"100%",borderRight:0}},{default:Object(c["T"])((function(){return[Object(c["n"])(U,{key:"sub1"},{title:Object(c["T"])((function(){return[Object(c["l"])("span",null,[Object(c["n"])(N),j])]})),default:Object(c["T"])((function(){return[Object(c["n"])(A,{key:"1"},{default:Object(c["T"])((function(){return[Object(c["n"])(C,{to:"/biaoguan"},{default:Object(c["T"])((function(){return[o]})),_:1})]})),_:1}),Object(c["n"])(A,{key:"2"},{default:Object(c["T"])((function(){return[Object(c["n"])(C,{to:"/linchuang"},{default:Object(c["T"])((function(){return[f]})),_:1})]})),_:1}),Object(c["n"])(A,{key:"3"},{default:Object(c["T"])((function(){return[d]})),_:1}),Object(c["n"])(A,{key:"4"},{default:Object(c["T"])((function(){return[l]})),_:1})]})),_:1}),Object(c["n"])(U,{key:"sub2"},{title:Object(c["T"])((function(){return[Object(c["l"])("span",null,[Object(c["n"])(H),i])]})),default:Object(c["T"])((function(){return[Object(c["n"])(A,{key:"5"},{default:Object(c["T"])((function(){return[Object(c["n"])(C,{to:"/index"},{default:Object(c["T"])((function(){return[O]})),_:1})]})),_:1}),Object(c["n"])(A,{key:"6"},{default:Object(c["T"])((function(){return[m]})),_:1}),Object(c["n"])(A,{key:"7"},{default:Object(c["T"])((function(){return[h]})),_:1}),Object(c["n"])(A,{key:"8"},{default:Object(c["T"])((function(){return[p]})),_:1})]})),_:1}),Object(c["n"])(U,{key:"sub3"},{title:Object(c["T"])((function(){return[Object(c["l"])("span",null,[Object(c["n"])(D),y])]})),default:Object(c["T"])((function(){return[Object(c["n"])(A,{key:"9"},{default:Object(c["T"])((function(){return[k]})),_:1}),Object(c["n"])(A,{key:"10"},{default:Object(c["T"])((function(){return[g]})),_:1}),Object(c["n"])(A,{key:"11"},{default:Object(c["T"])((function(){return[v]})),_:1}),Object(c["n"])(A,{key:"12"},{default:Object(c["T"])((function(){return[T]})),_:1}),Object(c["n"])(A,{key:"13"},{default:Object(c["T"])((function(){return[_]})),_:1})]})),_:1}),Object(c["n"])(U,{key:"sub4"},{title:Object(c["T"])((function(){return[Object(c["l"])("span",null,[Object(c["n"])(D),w])]})),default:Object(c["T"])((function(){return[Object(c["n"])(A,{key:"14"},{default:Object(c["T"])((function(){return[z]})),_:1}),Object(c["n"])(A,{key:"15"},{default:Object(c["T"])((function(){return[K]})),_:1}),Object(c["n"])(A,{key:"16"},{default:Object(c["T"])((function(){return[x]})),_:1}),Object(c["n"])(A,{key:"17"},{default:Object(c["T"])((function(){return[E]})),_:1}),Object(c["n"])(A,{key:"18"},{default:Object(c["T"])((function(){return[J]})),_:1})]})),_:1}),Object(c["n"])(U,{key:"sub5"},{title:Object(c["T"])((function(){return[Object(c["l"])("span",null,[Object(c["n"])(D),P])]})),_:1})]})),_:1},8,["selectedKeys","openKeys"])]})),_:1}),Object(c["n"])(F,{style:{padding:"0 24px 24px"}},{default:Object(c["T"])((function(){return[Object(c["n"])(q)]})),_:1})]})),_:1})]})),_:1})}var L=n("edc4"),N=n("8eaa"),C=n("9892"),A=Object(c["o"])({components:{UserOutlined:L["a"],LaptopOutlined:N["a"],NotificationOutlined:C["a"]},setup:function(){return{selectedKeys1:Object(c["H"])(["2"]),selectedKeys2:Object(c["H"])(["1"]),collapsed:Object(c["H"])(!1),openKeys:Object(c["H"])(["sub1"])}}}),U=(n("abc7"),n("6b0d")),H=n.n(U);const D=H()(A,[["render",S]]);var M=D,q={class:"app-container"};function F(e,t,n,r,a,u){return Object(c["E"])(),Object(c["k"])("div",q)}var B={name:"FullScreenLayout"};const $=H()(B,[["render",F]]);var I=$,R={name:"App",components:{DefaultLayout:M,FullScreenLayout:I},computed:{layout:function(){return"".concat(this.$route.meta.layout||"default","-layout")}}};const G=H()(R,[["render",u]]);var Q=G,V=(n("202f"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),W=[{path:"/",name:"home",component:function(){return n.e("chunk-2d0b59a6").then(n.bind(null,"1a33"))}},{path:"/index",name:"index",component:function(){return n.e("chunk-2d0e2713").then(n.bind(null,"7f5c"))}},{path:"/list",name:"list",component:function(){return n.e("chunk-2d208bfb").then(n.bind(null,"a5b3"))}},{path:"/biaoguan",name:"biaoguan",component:function(){return n.e("chunk-391478b9").then(n.bind(null,"e817"))}},{path:"/linchuang",name:"linchuang",component:function(){return n.e("chunk-2a489d5e").then(n.bind(null,"3b78"))}}],X=Object(V["a"])({history:Object(V["b"])(),routes:W}),Y=X,Z=n("bc3a"),ee=n.n(Z),te=Object(c["i"])(Q);te.use(r["a"]),te.use(Y),te.mount("#app"),te.config.globalProperties.$http=ee.a},"66e6":function(e,t,n){},abc7:function(e,t,n){"use strict";n("66e6")}});
//# sourceMappingURL=app.2723f0b1.js.map