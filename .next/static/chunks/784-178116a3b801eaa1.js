(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[784],{375:function(e,s,n){"use strict";n.d(s,{Z:function(){return R}});var l=n(5893),r=n(9008),i=n.n(r),t=n(7294),a=function(e){var s=(0,t.useRef)();return(0,t.useEffect)(function(){var n=function(n){s.current.contains(n.target)||e()};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),s},c=function(e){var s=e.close,n=e.src,r=a(function(){s(!1)});return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)("div",{className:"mfp-bg mfp-ready",onClick:function(){return s(!1)}}),(0,l.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,l.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",children:[(0,l.jsx)("div",{className:"mfp-content",ref:r,children:(0,l.jsx)("div",{className:"mfp-iframe-scaler",children:(0,l.jsx)("img",{className:"mfp-img",src:n})})}),(0,l.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},o=function(){var e=(0,t.useState)(!1),s=e[0],n=e[1],r=(0,t.useState)(null),i=r[0],a=r[1];return(0,t.useEffect)(function(){setTimeout(function(){document.querySelectorAll("a").forEach(function(e){e.href.includes("img/")&&null===e.getAttribute("download")&&e.addEventListener("click",function(s){s.preventDefault(),a(e.href),n(!0)})})},1500)},[]),(0,l.jsx)(t.Fragment,{children:s&&(0,l.jsx)(c,{close:function(){return n(!1)},src:i})})},d=function(e){var s=e.close,n=e.videoID,r=a(function(){s(!1)});return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)("div",{className:"mfp-bg mfp-ready",onClick:function(){return s(!1)}}),(0,l.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,l.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-iframe-holder",children:[(0,l.jsx)("div",{className:"mfp-content",ref:r,children:(0,l.jsxs)("div",{className:"mfp-iframe-scaler",children:[(0,l.jsx)("button",{title:"Close (Esc)",type:"button",className:"mfp-close",onClick:function(){return s()},children:"\xd7"}),(0,l.jsx)("iframe",{src:n,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})}),(0,l.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},h=function(){var e=(0,t.useState)(!1),s=e[0],n=e[1],r=(0,t.useState)(null),i=r[0],a=r[1];return(0,t.useEffect)(function(){setTimeout(function(){document.querySelectorAll("a").forEach(function(e){(e.href.includes("www.youtube.com")||e.href.includes("vimeo.com")||e.href.includes("soundcloud.com"))&&e.addEventListener("click",function(s){s.preventDefault(),a(e.href),n(!0)})})},1500)},[]),(0,l.jsx)(t.Fragment,{children:s&&(0,l.jsx)(d,{close:function(){return n(!1)},videoID:i})})},u=n(1917),x=n(1664),m=n.n(x),f=function(){return(0,l.jsx)("footer",{id:"footer",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"footer",children:[(0,l.jsx)("div",{className:"left_part",children:(0,l.jsxs)("p",{children:["Copyright 2022 — Designed & Developed by"," ",(0,l.jsx)("a",{href:"https://themeforest.net/user/frenify/portfolio",target:"_blank",rel:"noreferrer",children:"Frenify"})]})}),(0,l.jsx)("div",{className:"right_part",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/policy",children:(0,l.jsx)("a",{className:"creative_link",children:"Privacy Policy"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/cookies",children:(0,l.jsx)("a",{className:"creative_link",children:"Cookies"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/terms-conditions",children:(0,l.jsx)("a",{className:"creative_link",children:"Terms & Conditions"})})})]})})]})})})},j=n(7568),v=n(7582),g=n(6064),p=n(2506),N=function(e){return function(s){s({type:p.k2,payload:e})}},_=function(e){return function(s){s({type:p.Ag,payload:e})}},y=function(e){return function(s){s({type:p.mo,payload:e})}},k="0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0",w=[{inputs:[{internalType:"uint8",name:"_maxWhitelistedAddresses",type:"uint8"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"addAddressToWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"maxWhitelistedAddresses",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"numAddressesWhitelisted",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"whitelistedAddresses",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],b=n(7114),C=n(6076),T=function(e){var s,n=e.walletToggle,r=e.navigationToggle,i=(0,t.useState)(null),a=(i[0],i[1]),c=(0,t.useState)(null),o=(c[0],c[1]),d=(0,t.useState)(null),h=(d[0],d[1]),x=(0,t.useState)("CONNECT TO WALLET"),f=x[0],g=x[1],p=(s=(0,j.Z)(function(){var e,s,n,l,r;return(0,v.__generator)(this,function(s){switch(s.label){case 0:return a(e=new b.Q(window.ethereum)),console.log(e.getCode(k)),[4,e.send("eth_requestAccounts",[])];case 1:return g((n=s.sent()[0]).slice(0,6)+"..."+n.slice(-4)),e.on("accountsChanged",function(e){g((n=e[0]).slice(0,6)+"..."+n.slice(-4)),console.log(address),location.reload()}),o(l=e.getSigner()),r=new C.CH(k,w,l),h(r),console.log({provider:e,signer:l,contract:r}),[2]}})}),function(){return s.apply(this,arguments)});return(0,t.useEffect)(function(){(0,u.h4)(),p()},[]),(0,l.jsx)("header",{id:"header",children:(0,l.jsx)("div",{className:"header",children:(0,l.jsxs)("div",{className:"header_in",children:[(0,l.jsxs)("div",{className:"trigger_logo",children:[(0,l.jsx)("div",{className:"trigger",onClick:function(){return r(!0)},children:(0,l.jsx)("span",{})}),(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)(m(),{href:"/",children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{src:"/img/logo.png",alt:""})})})})]}),(0,l.jsx)("div",{className:"nav",style:{opacity:1},children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/ktmf-pass",children:(0,l.jsx)("a",{className:"creative_link",children:"NFTs"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/#home2",children:(0,l.jsx)("a",{className:"creative_link",children:"Home"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/#about",children:(0,l.jsx)("a",{className:"creative_link",children:"About"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/#collection",children:(0,l.jsx)("a",{className:"creative_link",children:"Collection"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/#news",children:(0,l.jsx)("a",{className:"creative_link",children:"News"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/#faq",children:(0,l.jsx)("a",{className:"creative_link",children:"FAQ"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/#contact",children:(0,l.jsx)("a",{className:"creative_link",children:"Contact"})})})]})}),(0,l.jsx)("div",{className:"wallet",children:(0,l.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),n(!0)},className:"metaportal_fn_button wallet_opener",children:(0,l.jsx)("span",{children:f})})})]})})})},S=function(e){return{}},E=(0,g.$j)(S,{walletToggle:_,navigationToggle:N})(T),L=function(e){var s=e.walletToggle,n=e.navigationToggle,r=(0,t.useState)(!1),i=r[0],a=r[1];return(0,l.jsx)(t.Fragment,{children:(0,l.jsxs)("div",{className:"metaportal_fn_mobnav",children:[(0,l.jsxs)("div",{className:"mob_top",children:[(0,l.jsxs)("div",{className:"social_trigger",children:[(0,l.jsx)("div",{className:"trigger",onClick:function(){return n(!0)},children:(0,l.jsx)("span",{})}),(0,l.jsx)("div",{className:"social",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:"Fb."})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noreferrer",children:"Tw."})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:"In."})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.linkedin.com/",target:"_blank",rel:"noreferrer",children:"Ln."})})]})})]}),(0,l.jsx)("div",{className:"wallet",children:(0,l.jsx)("a",{href:"#",className:"metaportal_fn_button wallet_opener",onClick:function(){return s(!0)},children:(0,l.jsx)("span",{children:"Wallet"})})})]}),(0,l.jsxs)("div",{className:"mob_mid",children:[(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)(m(),{href:"/",children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{src:"/img/logo.png",alt:""})})})}),(0,l.jsx)("div",{className:"trigger ".concat(i?"active":""),onClick:function(){return a(!i)},children:(0,l.jsx)("span",{})})]}),(0,l.jsx)("div",{className:"mob_bot",style:{display:i?"block":"none"},children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"creative_link",href:"#home",children:"Home"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"creative_link",href:"#about",children:"About"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"creative_link",href:"#collection",children:"Collection"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"creative_link",href:"#news",children:"Blog"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"creative_link",href:"#contact",children:"Contact"})})]})})]})})},A=function(e){return{navigation:e.site.navigation}},F=(0,g.$j)(A,{walletToggle:_,navigationToggle:N})(L),B=function(e){var s=e.navigation,n=e.navigationToggle,r=(0,t.useState)(null),i=r[0],a=r[1];return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)("div",{onClick:function(){return n(!1)},className:"metaportal_fn_leftnav_closer ".concat(s?"active":"")}),(0,l.jsxs)("div",{className:"metaportal_fn_leftnav ".concat(s?"active":""),children:[(0,l.jsx)("a",{href:"#",className:"fn__closer",onClick:function(){return n(!1)},children:(0,l.jsx)("span",{})}),(0,l.jsxs)("div",{className:"navbox",children:[(0,l.jsx)("div",{className:"list_holder",children:(0,l.jsxs)("ul",{className:"metaportal_fn_items",children:[(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"item",children:[(0,l.jsx)("a",{href:"https://opensea.io/",target:"_blank",rel:"noreferrer"}),(0,l.jsx)("span",{className:"icon",children:(0,l.jsx)("img",{src:"/img/market/opensea.png",alt:""})}),(0,l.jsx)("span",{className:"text",children:"Opensea"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"item",children:[(0,l.jsx)("a",{href:"https://discord.com/",target:"_blank",rel:"noreferrer"}),(0,l.jsx)("span",{className:"icon",children:(0,l.jsx)("img",{src:"/img/market/discord.png",alt:""})}),(0,l.jsx)("span",{className:"text",children:"Discord"})]})})]})}),(0,l.jsxs)("div",{className:"nav_holder",children:[(0,l.jsx)("span",{className:"icon",children:(0,l.jsx)("img",{src:"/svg/down.svg",alt:"",className:"fn__svg"})}),(0,l.jsxs)("ul",{style:{transform:"translateX(".concat(null!==i?"-100":"0","%)")},children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),a("home")},className:"".concat("home"==i?"active":""),children:(0,l.jsxs)("span",{className:"creative_link",children:["Home",(0,l.jsx)("img",{src:"/svg/down.svg",alt:"",className:"fn__svg"})]})}),(0,l.jsxs)("ul",{className:"sub-menu",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",className:"prev",onClick:function(){return a(null)},children:(0,l.jsxs)("span",{className:"creative_link",children:[(0,l.jsx)("img",{src:"/svg/down.svg",alt:"",className:"fn__svg"}),"Home"]})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"#1 3D Carousel"})})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/index-2",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"#2 Bended Carousel"})})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/index-3",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"#3 Video Background"})})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/index-4",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"#4 Water Effect"})})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/index-5",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"#5 Simple Carousel"})})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/index-6",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"#6 Fullscreen Slider"})})})})]})]}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/nft/1",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"Mint Page"})})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/collection",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"Collection"})})})}),(0,l.jsxs)("li",{children:[(0,l.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),a("pages")},className:"".concat("pages"==i?"active":""),children:(0,l.jsxs)("span",{className:"creative_link",children:["Pages",(0,l.jsx)("img",{src:"/svg/down.svg",alt:"",className:"fn__svg"})]})}),(0,l.jsxs)("ul",{className:"sub-menu",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",className:"prev",onClick:function(){return a(null)},children:(0,l.jsxs)("span",{className:"creative_link",children:[(0,l.jsx)("img",{src:"/svg/down.svg",alt:"",className:"fn__svg"}),"Pages"]})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/coming-soon",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"Coming Soon"})})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/404",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"404 Page"})})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/protected",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"Protected Page"})})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/no-results",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"Search No Results"})})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/cookies",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"Cookies"})})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/policy",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"Privacy Policy"})})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/terms-conditions",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"Terms & Conditions"})})})})]})]}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/blog",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"Blog"})})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:"/blog-single",children:(0,l.jsx)("a",{onClick:function(){return n(!1)},children:(0,l.jsx)("span",{className:"creative_link",children:"Blog Single"})})})})]})]}),(0,l.jsxs)("div",{className:"info_holder",children:[(0,l.jsx)("div",{className:"copyright",children:(0,l.jsxs)("p",{children:["Copyright 2022 - Designed & Developed by"," ",(0,l.jsx)("a",{href:"https://themeforest.net/user/codeefly/portfolio",target:"_blank",rel:"noreferrer",children:"CodeeFly"})]})}),(0,l.jsx)("div",{className:"social_icons",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("img",{src:"/svg/social/twitter-1.svg",alt:"",className:"fn__svg"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("img",{src:"/svg/social/facebook-1.svg",alt:"",className:"fn__svg"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("img",{src:"/svg/social/instagram-1.svg",alt:"",className:"fn__svg"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("img",{src:"/svg/social/pinterest-1.svg",alt:"",className:"fn__svg"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("img",{src:"/svg/social/behance-1.svg",alt:"",className:"fn__svg"})})})]})})]})]})]})]})},D=function(e){return{navigation:e.site.navigation}},W=(0,g.$j)(D,{navigationToggle:N})(B),q=function(){return(0,l.jsx)("div",{className:"metaportal_fn_preloader",children:(0,l.jsx)("div",{className:"loading-container",children:(0,l.jsxs)("div",{className:"loading",children:[(0,l.jsx)("div",{className:"l1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"l2",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"l3",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"l4",children:(0,l.jsx)("div",{})})]})})})},P=function(){return(0,t.useEffect)(function(){(0,u.SM)()},[]),(0,l.jsx)("a",{href:"#",className:"metaportal_fn_totop",style:{height:"183px"},children:(0,l.jsxs)("span",{className:"totop_inner",children:[(0,l.jsx)("span",{className:"icon",children:(0,l.jsx)("img",{src:"/svg/down.svg",alt:"",className:"fn__svg"})}),(0,l.jsx)("span",{className:"text",children:"Scroll To Top"})]})})},I=function(e){var s=e.searchToggle,n=e.search;return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)("div",{className:"metaportal_fn_search_closer ".concat(n?"active":""),onClick:function(){return s(!1)}}),(0,l.jsx)("div",{className:"metaportal_fn_searchbox ".concat(n?"active":""),children:(0,l.jsx)("div",{className:"container small",children:(0,l.jsxs)("div",{className:"searchbox",children:[(0,l.jsx)("input",{type:"text",placeholder:"Search here..."}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("img",{src:"/svg/loupe.svg",alt:"",className:"fn__svg"})})]})})})]})},M=function(e){return{search:e.site.search}},Z=(0,g.$j)(M,{searchToggle:y})(I),$=function(e){var s=e.searchToggle;return(0,l.jsx)("a",{href:"#",className:"metaportal_fn_search hold",onClick:function(e){e.preventDefault(),s(!0)},children:(0,l.jsx)("span",{className:"icon",children:(0,l.jsx)("img",{src:"/svg/loupe.svg",alt:"",className:"fn__svg"})})})},H=(0,g.$j)(null,{searchToggle:y})($),O=function(){return(0,l.jsx)("div",{id:"social",className:"hold",children:(0,l.jsxs)("div",{className:"social",children:[(0,l.jsx)("h4",{className:"title",children:"Follow Us:"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:"Fb."})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noreferrer",children:"Tw."})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:"In."})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.linkedin.com/",target:"_blank",rel:"noreferrer",children:"Ln."})})]})]})})},Y=function(e){var s=e.walletToggle,n=e.wallet,r=(0,t.useState)("You are not connected to a wallet");r[0],r[1];var i=(0,t.useState)("Join the Whitelist");i[0],i[1];var a=(0,t.useState)(null);a[0],a[1];var c,o=(0,t.useState)("Connect Wallet"),d=(o[0],o[1]),h=(0,t.useState)(null),u=(h[0],h[1]),x=(0,t.useState)(null),m=(x[0],x[1]),f=(0,t.useState)(null),g=(f[0],f[1]),p=(0,t.useState)(null),N=(p[0],p[1]),_=(c=(0,j.Z)(function(){var e,s,n;return(0,v.__generator)(this,function(l){return m(e=new b.Q(window.ethereum)),console.log(e.getCode(k)),g(s=e.getSigner()),n=new C.CH(k,w,s),N(n),console.log({provider:e,signer:s,contract:n}),location.reload(),[2]})}),function(){return c.apply(this,arguments)}),y=function(){ethereum?window.ethereum.request({method:"eth_requestAccounts"}).then(function(e){u(e[0]),d("Wallet Connected!"),_()}):u("Please Install Metamask Extension!")};return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)("div",{className:"metaportal_fn_wallet_closer ".concat(n?"active":""),onClick:function(){return s(!1)}}),(0,l.jsxs)("div",{className:"metaportal_fn_walletbox ".concat(n?"active":""),children:[(0,l.jsx)("a",{className:"fn__closer",onClick:function(){return s(!1)},children:(0,l.jsx)("span",{})}),(0,l.jsxs)("div",{className:"walletbox",children:[(0,l.jsxs)("div",{className:"title_holder",children:[(0,l.jsx)("h3",{children:"Connect Wallet"}),(0,l.jsx)("p",{children:"Connect with one of our available wallet providers or create a new one."})]}),(0,l.jsx)("div",{className:"list_holder",children:(0,l.jsxs)("ul",{className:"metaportal_fn_items",children:[(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"item",children:[(0,l.jsx)("a",{href:"#",onClick:function(){return y()}}),(0,l.jsx)("span",{className:"icon",children:(0,l.jsx)("img",{src:"/img/wallet/metamask.png",alt:""})}),(0,l.jsx)("span",{className:"text",children:"Metamask"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"item",children:[(0,l.jsx)("a",{href:"#"}),(0,l.jsx)("span",{className:"icon",children:(0,l.jsx)("img",{src:"/img/wallet/coinbase.png",alt:""})}),(0,l.jsx)("span",{className:"text",children:"Coinbase"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"item",children:[(0,l.jsx)("a",{href:"#"}),(0,l.jsx)("span",{className:"icon",children:(0,l.jsx)("img",{src:"/img/wallet/walletconnect.png",alt:""})}),(0,l.jsx)("span",{className:"text",children:"WalletConnect"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"item",children:[(0,l.jsx)("a",{href:"#"}),(0,l.jsx)("span",{className:"icon",children:(0,l.jsx)("img",{src:"/img/wallet/venly.png",alt:""})}),(0,l.jsx)("span",{className:"text",children:"Venly"})]})})]})})]})]})]})},Q=function(e){return{wallet:e.site.wallet}},z=(0,g.$j)(Q,{walletToggle:_})(Y),R=function(e){var s=e.children,n=e.pageTitle;return(0,t.useEffect)(function(){(0,u.Is)(),(0,u.zW)(),(0,u.sO)()},[]),(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(i(),{children:(0,l.jsxs)("title",{children:["MetaPortal | ",n]})}),(0,l.jsx)(o,{}),(0,l.jsx)(h,{}),(0,l.jsx)(q,{}),(0,l.jsx)(W,{}),(0,l.jsx)(Z,{}),(0,l.jsx)(z,{}),(0,l.jsxs)("div",{className:"metaportal_fn_main",children:[(0,l.jsx)(F,{}),(0,l.jsx)(E,{}),(0,l.jsxs)("div",{className:"metaportal_fn_content",children:[s,(0,l.jsx)(f,{})]}),(0,l.jsx)(O,{}),(0,l.jsx)(P,{}),(0,l.jsx)(H,{})]})]})}},1917:function(e,s,n){"use strict";n.d(s,{$g:function(){return c},Is:function(){return t},SM:function(){return a},h4:function(){return i},sO:function(){return r},zW:function(){return l}});var l=function(){document.querySelectorAll("img.fn__svg").forEach(function(e){var s=e.getAttribute("id"),n=e.getAttribute("class");fetch(e.getAttribute("src")).then(function(e){return e.text()}).then(function(l){var r=new DOMParser().parseFromString(l,"text/html").querySelector("svg");setTimeout(function(){null!==r&&(void 0!==s&&r.setAttribute("id",s),void 0!==n&&r.setAttribute("class",n+" replaced-svg"),r.removeAttribute("xmlns:a"),e.parentNode&&e.parentNode.replaceChild(r,e))},500)})})},r=function(){for(var e=document.querySelectorAll("[data-bg-img]"),s=0;s<e.length;s++){var n=e[s];n.style.backgroundImage="url(".concat(n.getAttribute("data-bg-img"),")")}},i=function(){var e=document.querySelector(".header");window.addEventListener("scroll",function(){window.scrollY>10?e.classList.add("active"):e.classList.remove("active")})},t=function(){var e=document.querySelector("#social"),s=document.querySelector(".metaportal_fn_search");window.addEventListener("scroll",function(){window.scrollY<2e3?(s.classList.add("hold"),e.classList.add("hold")):(e.classList.remove("hold"),s.classList.remove("hold"))})},a=function(){var e=document.querySelector("body");window.addEventListener("scroll",function(){window.scrollY>300?e.classList.add("totop-active"):e.classList.remove("totop-active")})},c=function(){var e=function(e){var s=e.clientWidth,n=e.getAttribute("data-initial-width"),l=e.getAttribute("data-ratio"),r=20,i=(s-(r*=2))/2>n?n:(s-r)/2,t=i*l+r,a=e.getElementsByTagName("ul")[0],c=a.getElementsByTagName("li");a.style.height="".concat(t,"px");for(var o=0;o<c.length;o++){var d=c[o],h=d.getElementsByTagName("img")[0];h.style.width="".concat(i,"px"),h.style.height="".concat(t,"px"),d.style.left="50%",d.style.transform="scale(0)"}var u=s/2-i/2,x=u+i/2.5,m=u-i/2.5,f=a.getElementsByClassName("current")[0],j=a.getElementsByClassName("next1")[0],v=a.getElementsByClassName("next2")[0],g=a.getElementsByClassName("prev1")[0],p=a.getElementsByClassName("prev2")[0];f.style.left=u+"px",f.style.top=0,f.style.transform="scale(1) translateZ(0) rotate(0)",j.style.left=x+"px",j.style.top="90px",j.style.transform="scale(1) translateZ(0) rotate(15deg)",v.style.left=x+i/2.5+"px",v.style.top="240px",v.style.transform="scale(1) translateZ(0) rotate(30deg)",g.style.left=m+"px",g.style.top="30px",g.style.transform="scale(1) translateZ(0) rotate(-15deg)",p.style.left=m-i/2.5+"px",p.style.top="240px",p.style.transform="scale(1) translateZ(0) rotate(-30deg)"},s=function(e){var s=e.getElementsByTagName("li").length,l=0,r=setInterval(function(){n(l=l===s?0:l+1,e)},5e3);return function(){return clearInterval(r)}},n=function(e,s){var n=s.getElementsByTagName("ul")[0].getElementsByTagName("li"),i=n.length,t=n[r(e=(e+i)%i,i)];if(!t.classList.contains("current")){for(var a=0;a<n.length;a++)n[a].classList.remove("current","next1","next2","prev1","prev2","next3","prev3");t.classList.add("current");var c=(e+1)%i,o=(e+2)%i,d=(e+3)%i,h=(e-1+i)%i,u=(e-2+i)%i,x=(e-3+i)%i;n[r(c,i)].classList.add("next1"),n[r(o,i)].classList.add("next2"),n[r(h,i)].classList.add("prev1"),n[r(u,i)].classList.add("prev2"),i>6&&(n[r(d,i)].classList.add("next3"),n[r(x,i)].classList.add("prev3")),l(s)}},l=function(s){void 0===s?document.getElementByClassName("frenify_cards_gallery").each(function(){s=this,e(s)}):e(s)},r=function(e,s){return 0==e?s-1:e-1};document.querySelectorAll(".frenify_cards_gallery").forEach(function(e,l){n(l,e),s(e)})}},6601:function(){}}]);