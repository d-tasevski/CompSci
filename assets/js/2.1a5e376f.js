(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{310:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"i",(function(){return c})),n.d(e,"f",(function(){return h})),n.d(e,"g",(function(){return f})),n.d(e,"h",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"e",(function(){return g})),n.d(e,"k",(function(){return v})),n.d(e,"c",(function(){return m})),n.d(e,"l",(function(){return b})),n.d(e,"j",(function(){return k}));n(169),n(22),n(94),n(170),n(97),n(175),n(66),n(43),n(311),n(67),n(313),n(96),n(44),n(340),n(176),n(341),n(179),n(95);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s=/#.*$/,o=/\.(md|html)$/,u=/\/$/,c=/^[a-z]+:/i;function l(t){return decodeURI(t).replace(s,"").replace(o,"")}function h(t){return c.test(t)}function f(t){return/^mailto:/.test(t)}function p(t){return/^tel:/.test(t)}function d(t){if(h(t))return t;var e=t.match(s),n=e?e[0]:"",i=l(t);return u.test(i)?t:"".concat(i,".html").concat(n)}function g(t,e){var n=decodeURIComponent(t.hash),i=function(t){var e=t.match(s);return e?e[0]:""}(e);return(!i||n===i)&&l(t.path)===l(e)}function v(t,e,n){if(h(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var o=a[s];".."===o?r.pop():"."!==o&&r.push(o)}return""!==r[0]&&r.unshift(""),r.join("/")}(e,n));for(var i=l(e),r=0;r<t.length;r++)if(l(t[r].regularPath)===i)return a(a({},t[r]),{},{type:"page",path:d(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function m(t){var e;return(t=t.map((function(t){return a({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function b(t,e,n,i){var r=n.pages,a=n.themeConfig,s=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return function(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:"".concat(t.path,"#").concat(e.slug),children:e.children||[]}}))}]}(t);var o=s.sidebar||a.sidebar;if(!o)return[];var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:"".concat(i,"/")).indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),c=u.base,l=u.config;return l?l.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return v(n,e,i);if(Array.isArray(e))return Object.assign(v(n,e[0],i),{title:e[1]});r>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var a=e.children||[];return 0===a.length&&e.path?Object.assign(v(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,c)})):[]}function k(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},311:function(t,e,n){"use strict";var i=n(172),r=n(5),a=n(13),s=n(23),o=n(173),u=n(174);i("match",1,(function(t,e,n){return[function(e){var n=s(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var s=r(t),c=String(this);if(!s.global)return u(s,c);var l=s.unicode;s.lastIndex=0;for(var h,f=[],p=0;null!==(h=u(s,c));){var d=String(h[0]);f[p]=d,""===d&&(s.lastIndex=o(c,a(s.lastIndex),l)),p++}return 0===p?null:f}]}))},312:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},313:function(t,e,n){"use strict";var i=n(172),r=n(171),a=n(5),s=n(23),o=n(102),u=n(173),c=n(13),l=n(174),h=n(69),f=n(1),p=[].push,d=Math.min,g=!f((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(s(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,a);for(var o,u,c,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=new RegExp(t.source,f+"g");(o=h.call(g,i))&&!((u=g.lastIndex)>d&&(l.push(i.slice(d,o.index)),o.length>1&&o.index<i.length&&p.apply(l,o.slice(1)),c=o[0].length,d=u,l.length>=a));)g.lastIndex===o.index&&g.lastIndex++;return d===i.length?!c&&g.test("")||l.push(""):l.push(i.slice(d)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=s(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,r,n):i.call(String(r),e,n)},function(t,r){var s=n(i,t,this,r,i!==e);if(s.done)return s.value;var h=a(t),f=String(this),p=o(h,RegExp),v=h.unicode,m=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"y":"g"),b=new p(g?h:"^(?:"+h.source+")",m),k=void 0===r?4294967295:r>>>0;if(0===k)return[];if(0===f.length)return null===l(b,f)?[f]:[];for(var _=0,x=0,y=[];x<f.length;){b.lastIndex=g?x:0;var C,$=l(b,g?f:f.slice(x));if(null===$||(C=d(c(b.lastIndex+(g?0:x)),f.length))===_)x=u(f,x,v);else{if(y.push(f.slice(_,x)),y.length===k)return y;for(var w=1;w<=$.length-1;w++)if(y.push($[w]),y.length===k)return y;x=_=C}}return y.push(f.slice(_)),y}]}),!g)},314:function(t,e,n){},315:function(t,e,n){var i=n(23),r="["+n(312)+"]",a=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},316:function(t,e,n){"use strict";var i=n(0),r=n(315).trim;i({target:"String",proto:!0,forced:n(345)("trim")},{trim:function(){return r(this)}})},317:function(t,e,n){var i=n(6),r=n(3),a=n(100),s=n(346),o=n(8).f,u=n(68).f,c=n(171),l=n(106),h=n(182),f=n(10),p=n(1),d=n(28).set,g=n(178),v=n(2)("match"),m=r.RegExp,b=m.prototype,k=/a/g,_=/a/g,x=new m(k)!==k,y=h.UNSUPPORTED_Y;if(i&&a("RegExp",!x||y||p((function(){return _[v]=!1,m(k)!=k||m(_)==_||"/a/i"!=m(k,"i")})))){for(var C=function(t,e){var n,i=this instanceof C,r=c(t),a=void 0===e;if(!i&&r&&t.constructor===C&&a)return t;x?r&&!a&&(t=t.source):t instanceof C&&(a&&(e=l.call(t)),t=t.source),y&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=s(x?new m(t,e):m(t,e),i?this:b,C);return y&&n&&d(o,{sticky:n}),o},$=function(t){t in C||o(C,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},w=u(m),L=0;w.length>L;)$(w[L++]);b.constructor=C,C.prototype=b,f(r,"RegExp",C)}g("RegExp")},318:function(t,e,n){},319:function(t,e,n){},320:function(t,e,n){},321:function(t,e,n){},322:function(t,e,n){},323:function(t,e,n){},324:function(t,e){t.exports=function(t){return null==t}},325:function(t,e,n){},326:function(t,e,n){},327:function(t,e,n){},328:function(t,e,n){},329:function(t,e,n){},330:function(t,e,n){},335:function(t,e,n){"use strict";n.r(e);n(168);var i=n(336),r=n(310),a={name:"SidebarGroup",components:{DropdownTransition:i.a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(335).default},methods:{isActive:r.e}},s=(n(358),n(42)),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(169),n(359),n(66);function u(t,e,n,i,r){var a={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(a.style={"padding-left":"".concat(r,"rem")}),t("RouterLink",a,n)}function c(t,e,n,i,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var o=Object(r.e)(i,"".concat(n,"#").concat(e.slug));return t("li",{class:"sidebar-sub-header"},[u(t,"".concat(n,"#").concat(e.slug),e.title,o,e.level-1),c(t,e.children,n,i,a,s+1)])})))}var l={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,a=(n.$site,n.$route),s=n.$themeConfig,o=n.$themeLocaleConfig,l=e.props,h=l.item,f=l.sidebarDepth,p=Object(r.e)(a,h.path),d="auto"===h.type?p||h.children.some((function(t){return Object(r.e)(a,"".concat(h.basePath,"#").concat(t.slug))})):p,g="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):u(t,h.path,h.title||h.path,d),v=[i.frontmatter.sidebarDepth,f,o.sidebarDepth,s.sidebarDepth,1].find((function(t){return void 0!==t})),m=o.displayAllHeaders||s.displayAllHeaders;return"auto"===h.type?[g,c(t,h.children,h.basePath,a,v)]:(d||m)&&h.headers&&!r.d.test(h.path)?[g,c(t,Object(r.c)(h.headers),h.path,a,v)]:g}};n(360);function h(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?h(t,e):"page"===e.type&&Object(r.e)(t,e.path)}))}var f={name:"SidebarLinks",components:{SidebarGroup:o,SidebarLink:Object(s.a)(l,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){if(h(t,e[n]))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},p=Object(s.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},336:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height="".concat(t.scrollHeight,"px")},unsetHeight:function(t){t.style.height=""}}},r=(n(350),n(42)),a=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},337:function(t,e,n){"use strict";var i=n(0),r=n(338);i({target:"String",proto:!0,forced:n(339)("link")},{link:function(t){return r(this,"a","href",t)}})},338:function(t,e,n){var i=n(23),r=/"/g;t.exports=function(t,e,n,a){var s=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(a).replace(r,"&quot;")+'"'),o+">"+s+"</"+e+">"}},339:function(t,e,n){var i=n(1);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},340:function(t,e,n){var i=n(0),r=n(6);i({target:"Object",stat:!0,forced:!r,sham:!r},{defineProperties:n(177)})},341:function(t,e,n){var i=n(0),r=n(1),a=n(14),s=n(24).f,o=n(6),u=r((function(){s(1)}));i({target:"Object",stat:!0,forced:!o||u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return s(a(t),e)}})},342:function(t,e,n){"use strict";n(314)},343:function(t,e,n){var i=n(0),r=n(344);i({global:!0,forced:parseInt!=r},{parseInt:r})},344:function(t,e,n){var i=n(3),r=n(315).trim,a=n(312),s=i.parseInt,o=/^[+-]?0[Xx]/,u=8!==s(a+"08")||22!==s(a+"0x16");t.exports=u?function(t,e){var n=r(String(t));return s(n,e>>>0||(o.test(n)?16:10))}:s},345:function(t,e,n){var i=n(1),r=n(312);t.exports=function(t){return i((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},346:function(t,e,n){var i=n(4),r=n(101);t.exports=function(t,e,n){var a,s;return r&&"function"==typeof(a=e.constructor)&&a!==n&&i(s=a.prototype)&&s!==n.prototype&&r(t,s),t}},347:function(t,e,n){"use strict";var i,r=n(0),a=n(24).f,s=n(13),o=n(104),u=n(23),c=n(105),l=n(19),h="".endsWith,f=Math.min,p=c("endsWith");r({target:"String",proto:!0,forced:!!(l||p||(i=a(String.prototype,"endsWith"),!i||i.writable))&&!p},{endsWith:function(t){var e=String(u(this));o(t);var n=arguments.length>1?arguments[1]:void 0,i=s(e.length),r=void 0===n?i:f(s(n),i),a=String(t);return h?h.call(e,a,r):e.slice(r-a.length,r)===a}})},348:function(t,e,n){"use strict";n(318)},349:function(t,e,n){"use strict";n(319)},350:function(t,e,n){"use strict";n(320)},351:function(t,e,n){"use strict";n(321)},352:function(t,e,n){"use strict";n(322)},353:function(t,e,n){"use strict";n(323)},354:function(t,e,n){"use strict";n(325)},355:function(t,e,n){var i=n(31),r=n(15),a=n(25);t.exports=function(t){return"string"==typeof t||!r(t)&&a(t)&&"[object String]"==i(t)}},356:function(t,e,n){"use strict";n(326)},357:function(t,e,n){"use strict";n(327)},358:function(t,e,n){"use strict";n(328)},359:function(t,e,n){"use strict";var i=n(0),r=n(29).find,a=n(99),s=n(17),o=!0,u=s("find");"find"in[]&&Array(1).find((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!u},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("find")},360:function(t,e,n){"use strict";n(329)},361:function(t,e,n){"use strict";n(330)},427:function(t,e,n){"use strict";n.r(e);n(168),n(95),n(337);var i=n(310),r={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},a=n(42),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v(t._s(t.item.text))]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n\t"+t._s(t.item.text)+"\n\t"),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,o={name:"Home",components:{NavLink:s},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},u=(n(342),Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v(t._s(t.data.tagline||t.$description||"Welcome to your VuePress site"))]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-solarized-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v(t._s(t.data.footer))]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(343),n(22),n(181),n(170),n(97),n(43),n(183),n(311),n(316),n(175),n(66),n(317),n(98),n(347),n(67),n(313),n(184)),l=n.n(c),h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=l()(e,"title","");return l()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),f(t,i)},f=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var a=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||a?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},p={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[],a=0;a<e.length&&!(r.length>=n);a++){var s=e[a];if(this.getPageLocalePath(s)===i&&this.isSearchable(s))if(h(t,s))r.push(s);else if(s.headers)for(var o=0;o<s.headers.length&&!(r.length>=n);o++){var u=s.headers[o];u.title&&h(t,s,u.title)&&r.push(Object.assign({},s,{path:s.path+"#"+u.slug,header:u}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},d=(n(348),Object(a.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),g=(n(349),Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),v=(n(169),n(40)),m=n(336),b=n(185),k=n.n(b),_={name:"DropdownLink",components:{NavLink:s,DropdownTransition:m.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return k()(e)===t}}},x=(n(351),Object(a.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports),y=(n(103),n(63)),C=["light","dark"],$={name:"ThemeSwitcher",data:function(){return{theme:""}},computed:{nextTheme:function(){var t=(C.indexOf(this.theme)+1)%C.length;return C[t]}},methods:{switchTheme:function(){var t=(C.indexOf(this.theme)+1)%C.length;window.__setPreferredTheme(C[t]),this.theme=C[t]}},mounted:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0!==window.__theme&&(t.theme=window.__theme);case 1:case"end":return e.stop()}}),e)})))()}},w={name:"NavLinks",components:{NavLink:s,DropdownLink:x,ThemeSwitcher:Object(a.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"nav-link",attrs:{role:"button","aria-label":"Switch to "+t.nextTheme+" mode"},on:{click:function(e){return e.preventDefault(),t.switchTheme()}}},["dark"===t.theme?n("span",{key:"dark"},[t._v("Switch to light mode")]):"light"===t.theme?n("span",{key:"light"},[t._v("Switch to dark mode")]):n("span",{key:"light"},[t._v("Switch theme")])])}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(a){var s,o=e[a],u=r[a]&&r[a].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,a),i.some((function(t){return t.path===s}))||(s=a)),{text:u,link:s}}))};return[].concat(Object(v.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(!this.repoLink)return"";if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}},L=(n(352),Object(a.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),n("div",{staticClass:"nav-item"},[n("ThemeSwitcher")],1),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n\t\t"+t._s(t.repoLabel)+"\n\t\t"),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function O(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var S={name:"Navbar",components:{SidebarButton:g,NavLinks:L,SearchBox:d,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(O(this.$el,"paddingLeft"),10)+parseInt(O(this.$el,"paddingRight"),10),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},j=(n(353),Object(a.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),I=n(324),E=n.n(I),P={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=E()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,r=void 0===i?"":i,a=e.docsBranch,s=void 0===a?"master":a,o=e.docsRepo,u=void 0===o?n:o;return t&&u&&this.$page.relativePath?this.createEditLink(n,u,r,s,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,a){if(/bitbucket.org/.test(t)){var s=i.i.test(e)?e:t;return"".concat(s.replace(i.a,""),"/src")+"/".concat(r,"/").concat(n?"".concat(n.replace(i.a,""),"/"):"").concat(a,"?mode=edit&spa=0&at=").concat(r,"&fileviewer=file-view-default")}var o=i.i.test(e)?e:"https://github.com/".concat(e);return"".concat(o.replace(i.a,""),"/edit")+"/".concat(r,"/").concat(n?"".concat(n.replace(i.a,""),"/"):"").concat(a)}}},T=(n(354),Object(a.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),N=n(355),R=n.n(N);function D(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var a=i[r];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[r+n]}}var A={NEXT:{resolveLink:function(t,e){return D(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return D(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function U(t,e){var n=e.$themeConfig,r=e.$page,a=e.$route,s=e.$site,o=e.sidebarItems,u=t.resolveLink,c=t.getThemeLinkConfig,l=t.getPageLinkConfig,h=c(n),f=l(r),p=E()(f)?h:f;return!1===p?"":R()(p)?Object(i.k)(s.pages,p,a.path):u(r,o)}var H={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return U(A.PREV,this)},next:function(){return U(A.NEXT,this)}}},W=(n(356),{components:{PageEdit:T,PageNav:Object(a.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n\t\t\t⟵\n\t\t\t"),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n\t\t\t\t"+t._s(t.prev.title||t.prev.path)+"\n\t\t\t\t"),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n\t\t\t\t"+t._s(t.next.title||t.next.path)+"\n\t\t\t\t"),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]),t._v("⟶\n\t\t")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),B=(n(357),Object(a.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-solarized-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),G={name:"Sidebar",components:{SidebarLinks:n(335).default,NavLinks:L},props:["items"]},M=(n(361),{name:"Layout",components:{Home:u,Page:B,Sidebar:Object(a.a)(G,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:j},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),q=Object(a.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=q.exports}}]);