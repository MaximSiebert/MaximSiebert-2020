(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{3:function(e,t,r){"undefined"!=typeof self&&self,e.exports=function(e){function t(s){if(r[s])return r[s].exports;var n=r[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,s){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,r,s){return r&&e(t.prototype,r),s&&e(t,s),t}}(),c=function(){function e(t){var r=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach((function(e){r[e]=r[e].bind(r)})),this.init()}return n(e,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}},{key:"buildSliderFrame",value:function(){var e=this.selectorWidth/this.perPage,t=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=e*t+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var r=document.createDocumentFragment();if(this.config.loop)for(var s=this.innerElements.length-this.perPage;s<this.innerElements.length;s++){var n=this.buildSliderFrameItem(this.innerElements[s].cloneNode(!0));r.appendChild(n)}for(var c=0;c<this.innerElements.length;c++){var i=this.buildSliderFrameItem(this.innerElements[c]);r.appendChild(i)}if(this.config.loop)for(var l=0;l<this.perPage;l++){var o=this.buildSliderFrameItem(this.innerElements[l].cloneNode(!0));r.appendChild(o)}this.sliderFrame.appendChild(r),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"buildSliderFrameItem",value:function(e){var t=document.createElement("div");return t.style.cssFloat=this.config.rtl?"right":"left",t.style.float=this.config.rtl?"right":"left",t.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",t.appendChild(e),t}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===s(this.config.perPage))for(var e in this.perPage=1,this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var r=this.currentSlide;if(this.config.loop)if(this.currentSlide-e<0){this.disableTransition();var s=this.currentSlide+this.innerElements.length,n=this.perPage,c=s+n,i=(this.config.rtl?1:-1)*c*(this.selectorWidth/this.perPage),l=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(i+l)+"px, 0, 0)",this.currentSlide=s-e}else this.currentSlide=this.currentSlide-e;else this.currentSlide=Math.max(this.currentSlide-e,0);r!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var r=this.currentSlide;if(this.config.loop)if(this.currentSlide+e>this.innerElements.length-this.perPage){this.disableTransition();var s=this.currentSlide-this.innerElements.length,n=this.perPage,c=s+n,i=(this.config.rtl?1:-1)*c*(this.selectorWidth/this.perPage),l=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(i+l)+"px, 0, 0)",this.currentSlide=s+e}else this.currentSlide=this.currentSlide+e;else this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage);r!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"disableTransition",value:function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing}},{key:"enableTransition",value:function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var r=this.currentSlide;this.currentSlide=this.config.loop?e%this.innerElements.length:Math.min(Math.max(e,0),this.innerElements.length-this.perPage),r!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(e){var t=this,r=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,s=(this.config.rtl?1:-1)*r*(this.selectorWidth/this.perPage);e?requestAnimationFrame((function(){requestAnimationFrame((function(){t.enableTransition(),t.sliderFrame.style[t.transformProperty]="translate3d("+s+"px, 0, 0)"}))})):this.sliderFrame.style[this.transformProperty]="translate3d("+s+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),t=Math.abs(e),r=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1,s=e>0&&this.currentSlide-r<0,n=e<0&&this.currentSlide+r>this.innerElements.length-this.perPage;e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(r):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(r),this.slideToCurrent(s||n)}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){if(e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,s=this.config.rtl?t+r:t-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*s+"px, 0, 0)"}}},{key:"mousedownHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){if(e.preventDefault(),this.pointerDown){"A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,s=this.config.rtl?t+r:t-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*s+"px, 0, 0)"}}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");var r=e<this.currentSlide,s=this.currentSlide+this.perPage-1===e;(r||s)&&this.currentSlide--,this.innerElements.splice(e,1),this.buildSliderFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,r){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");var s=t<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=s?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.buildSliderFrame(),r&&r.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(this.detachEvents(),this.selector.style.cursor="auto",e){for(var r=document.createDocumentFragment(),s=0;s<this.innerElements.length;s++)r.appendChild(this.innerElements[s]);this.selector.innerHTML="",this.selector.appendChild(r),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},r=e;for(var s in r)t[s]=r[s];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),e}();t.default=c,e.exports=t.default}])},7:function(e,t,r){"use strict";r.r(t),r.d(t,"preload",(function(){return N}));var s=r(0),n=r(1),c=r(3),i=r.n(c);function l(e,t,r){const s=e.slice();return s[31]=t[r],s[33]=r,s}const o=e=>({}),a=e=>({}),h=e=>({}),b=e=>({});function u(e){let t,r,n,c,i,l;const u=e[23]["left-control"],j=Object(s.o)(u,e,e[22],b),d=e[23]["right-control"],O=Object(s.o)(d,e,e[22],a);return{c(){t=Object(s.s)("button"),j&&j.c(),r=Object(s.L)(),n=Object(s.s)("button"),O&&O.c(),this.h()},l(e){t=Object(s.j)(e,"BUTTON",{class:!0,"aria-label":!0});var c=Object(s.h)(t);j&&j.l(c),c.forEach(s.r),r=Object(s.k)(e),n=Object(s.j)(e,"BUTTON",{class:!0,"aria-label":!0});var i=Object(s.h)(n);O&&O.l(i),i.forEach(s.r),this.h()},h(){Object(s.e)(t,"class","left svelte-1ppqxio"),Object(s.e)(t,"aria-label","left"),Object(s.e)(n,"class","right svelte-1ppqxio"),Object(s.e)(n,"aria-label","right")},m(o,a){Object(s.z)(o,t,a),j&&j.m(t,null),Object(s.z)(o,r,a),Object(s.z)(o,n,a),O&&O.m(n,null),c=!0,i||(l=[Object(s.B)(t,"click",e[3]),Object(s.B)(n,"click",e[4])],i=!0)},p(e,t){j&&j.p&&4194304&t[0]&&Object(s.Q)(j,u,e,e[22],t,h,b),O&&O.p&&4194304&t[0]&&Object(s.Q)(O,d,e,e[22],t,o,a)},i(e){c||(Object(s.O)(j,e),Object(s.O)(O,e),c=!0)},o(e){Object(s.P)(j,e),Object(s.P)(O,e),c=!1},d(e){e&&Object(s.r)(t),j&&j.d(e),e&&Object(s.r)(r),e&&Object(s.r)(n),O&&O.d(e),i=!1,Object(s.H)(l)}}}function j(e){let t,r={length:e[9]},n=[];for(let t=0;t<r.length;t+=1)n[t]=d(l(e,r,t));return{c(){t=Object(s.s)("ul");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=Object(s.j)(e,"UL",{class:!0});var r=Object(s.h)(t);for(let e=0;e<n.length;e+=1)n[e].l(r);r.forEach(s.r),this.h()},h(){Object(s.e)(t,"class","svelte-1ppqxio")},m(e,r){Object(s.z)(e,t,r);for(let e=0;e<n.length;e+=1)n[e].m(t,null)},p(e,s){if(868&s[0]){let c;for(r={length:e[9]},c=0;c<r.length;c+=1){const i=l(e,r,c);n[c]?n[c].p(i,s):(n[c]=d(i),n[c].c(),n[c].m(t,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=r.length}},d(e){e&&Object(s.r)(t),Object(s.q)(n,e)}}}function d(e){let t,r,n,c;function i(...t){return e[25](e[33],...t)}return{c(){t=Object(s.s)("li"),this.h()},l(e){t=Object(s.j)(e,"LI",{class:!0}),Object(s.h)(t).forEach(s.r),this.h()},h(){Object(s.e)(t,"class",r=Object(s.E)(e[2](e[6],e[33])?"active":"")+" svelte-1ppqxio")},m(e,r){Object(s.z)(e,t,r),n||(c=Object(s.B)(t,"click",i),n=!0)},p(n,c){e=n,64&c[0]&&r!==(r=Object(s.E)(e[2](e[6],e[33])?"active":"")+" svelte-1ppqxio")&&Object(s.e)(t,"class",r)},d(e){e&&Object(s.r)(t),n=!1,c()}}}function O(e){let t,r,n,c,i;const l=e[23].default,o=Object(s.o)(l,e,e[22],null);let a=e[1]&&u(e),h=e[0]&&j(e);return{c(){t=Object(s.s)("div"),r=Object(s.s)("div"),o&&o.c(),n=Object(s.L)(),a&&a.c(),c=Object(s.L)(),h&&h.c(),this.h()},l(e){t=Object(s.j)(e,"DIV",{class:!0});var i=Object(s.h)(t);r=Object(s.j)(i,"DIV",{class:!0});var l=Object(s.h)(r);o&&o.l(l),l.forEach(s.r),n=Object(s.k)(i),a&&a.l(i),c=Object(s.k)(i),h&&h.l(i),i.forEach(s.r),this.h()},h(){Object(s.e)(r,"class","slides"),Object(s.e)(t,"class","carousel svelte-1ppqxio")},m(l,b){Object(s.z)(l,t,b),Object(s.c)(t,r),o&&o.m(r,null),e[24](r),Object(s.c)(t,n),a&&a.m(t,null),Object(s.c)(t,c),h&&h.m(t,null),i=!0},p(e,r){o&&o.p&&4194304&r[0]&&Object(s.Q)(o,l,e,e[22],r,null,null),e[1]?a?(a.p(e,r),2&r[0]&&Object(s.O)(a,1)):(a=u(e),a.c(),Object(s.O)(a,1),a.m(t,c)):a&&(Object(s.x)(),Object(s.P)(a,1,1,()=>{a=null}),Object(s.g)()),e[0]?h?h.p(e,r):(h=j(e),h.c(),h.m(t,null)):h&&(h.d(1),h=null)},i(e){i||(Object(s.O)(o,e),Object(s.O)(a),i=!0)},o(e){Object(s.P)(o,e),Object(s.P)(a),i=!1},d(r){r&&Object(s.r)(t),o&&o.d(r),e[24](null),a&&a.d(),h&&h.d()}}}function g(e,t,r){let c,l,o,{$$slots:a={},$$scope:h}=t,{perPage:b=3}=t,{loop:u=!0}=t,{autoplay:j=0}=t,{duration:d=200}=t,{easing:O="ease-out"}=t,{startIndex:g=0}=t,{draggable:f=!0}=t,{multipleDrag:p=!0}=t,{dots:m=!0}=t,{controls:v=!0}=t,{threshold:y=20}=t,{rtl:x=!1}=t,w=g;const E=Object(n.b)();function k(){l.next()}function $(e){l.goTo(e)}function P(e){r(6,w=l.currentSlide),E("change",{currentSlide:l.currentSlide,slideCount:l.innerElements.length})}Object(n.d)(()=>(r(26,l=new i.a({selector:c,perPage:"object"==typeof b?b:Number(b),loop:u,duration:d,easing:O,startIndex:g,draggable:f,multipleDrag:p,threshold:y,rtl:x,onChange:P})),j&&(o=setInterval(k,j)),()=>{j&&clearInterval(o),l.destroy()}));let C,S,D;return e.$$set=e=>{"perPage"in e&&r(10,b=e.perPage),"loop"in e&&r(11,u=e.loop),"autoplay"in e&&r(12,j=e.autoplay),"duration"in e&&r(13,d=e.duration),"easing"in e&&r(14,O=e.easing),"startIndex"in e&&r(15,g=e.startIndex),"draggable"in e&&r(16,f=e.draggable),"multipleDrag"in e&&r(17,p=e.multipleDrag),"dots"in e&&r(0,m=e.dots),"controls"in e&&r(1,v=e.controls),"threshold"in e&&r(18,y=e.threshold),"rtl"in e&&r(19,x=e.rtl),"$$scope"in e&&r(22,h=e.$$scope)},e.$$.update=()=>{67108864&e.$$.dirty[0]&&(C=l?l.innerElements:[]),67109888&e.$$.dirty[0]&&r(8,S=l?l.perPage:b),67109120&e.$$.dirty[0]&&r(9,D=l?Math.ceil(l.innerElements.length/S):[])},[m,v,function(e,t){return e<0&&(e=C.length+e),e>=t*S&&e<t*S+S},function(){l.prev()},k,$,w,c,S,D,b,u,j,d,O,g,f,p,y,x,function(){clearInterval(o)},function(){j&&(o=setInterval(k,j))},h,a,function(e){s.f[e?"unshift":"push"](()=>{c=e,r(7,c)})},e=>$(e*S)]}class f extends s.a{constructor(e){var t;super(),document.getElementById("svelte-1ppqxio-style")||((t=Object(s.s)("style")).id="svelte-1ppqxio-style",t.textContent=".carousel.svelte-1ppqxio.svelte-1ppqxio{position:relative;width:100%;justify-content:center;align-items:center}button.svelte-1ppqxio.svelte-1ppqxio{position:absolute;width:40px;height:40px;top:50%;z-index:50;margin-top:-20px;border:none;background-color:transparent}button.svelte-1ppqxio.svelte-1ppqxio:focus{outline:none}.left.svelte-1ppqxio.svelte-1ppqxio{left:2vw}.right.svelte-1ppqxio.svelte-1ppqxio{right:2vw}ul.svelte-1ppqxio.svelte-1ppqxio{list-style-type:none;position:absolute;display:flex;justify-content:center;width:100%;margin-top:-30px;padding:0}ul.svelte-1ppqxio li.svelte-1ppqxio{margin:6px;border-radius:100%;background-color:rgba(255,255,255,0.5);height:8px;width:8px}ul.svelte-1ppqxio li.svelte-1ppqxio:hover{background-color:rgba(255,255,255,0.85)}ul.svelte-1ppqxio li.active.svelte-1ppqxio{background-color:rgba(255,255,255,1)}",Object(s.c)(document.head,t)),Object(s.y)(this,e,g,O,s.I,{perPage:10,loop:11,autoplay:12,duration:13,easing:14,startIndex:15,draggable:16,multipleDrag:17,dots:0,controls:1,threshold:18,rtl:19,isDotActive:2,left:3,right:4,go:5,pause:20,resume:21},[-1,-1])}get isDotActive(){return this.$$.ctx[2]}get left(){return this.$$.ctx[3]}get right(){return this.$$.ctx[4]}get go(){return this.$$.ctx[5]}get pause(){return this.$$.ctx[20]}get resume(){return this.$$.ctx[21]}}var p=f;function m(e){let t,r,n,c,i,l,o,a,h,b;return{c(){t=Object(s.s)("a"),r=Object(s.s)("div"),n=Object(s.s)("span"),c=Object(s.N)(e[0]),i=Object(s.L)(),l=Object(s.s)("span"),o=Object(s.N)(e[1]),a=Object(s.L)(),h=Object(s.s)("span"),b=Object(s.N)(e[2]),this.h()},l(u){t=Object(s.j)(u,"A",{href:!0,class:!0,target:!0,rel:!0});var j=Object(s.h)(t);r=Object(s.j)(j,"DIV",{class:!0});var d=Object(s.h)(r);n=Object(s.j)(d,"SPAN",{class:!0});var O=Object(s.h)(n);c=Object(s.l)(O,e[0]),O.forEach(s.r),i=Object(s.k)(d),l=Object(s.j)(d,"SPAN",{class:!0});var g=Object(s.h)(l);o=Object(s.l)(g,e[1]),g.forEach(s.r),a=Object(s.k)(d),h=Object(s.j)(d,"SPAN",{class:!0});var f=Object(s.h)(h);b=Object(s.l)(f,e[2]),f.forEach(s.r),d.forEach(s.r),j.forEach(s.r),this.h()},h(){Object(s.e)(n,"class","block md:w-4/12 w-1/2"),Object(s.e)(l,"class","text-gray-600 group-hover:text-black md:block hidden w-4/12"),Object(s.e)(h,"class","text-gray-600 group-hover:text-black block md:w-4/12 w-1/2 lg:text-left text-right"),Object(s.e)(r,"class","lg:w-10/12 w-full ml-auto flex items-center"),Object(s.e)(t,"href",e[3]),Object(s.e)(t,"class","group flex sm:text-xl tracking-tight  py-2 hover:bg-gray-100 px-4"),Object(s.e)(t,"target","_blank"),Object(s.e)(t,"rel","noopener noreferrer")},m(e,u){Object(s.z)(e,t,u),Object(s.c)(t,r),Object(s.c)(r,n),Object(s.c)(n,c),Object(s.c)(r,i),Object(s.c)(r,l),Object(s.c)(l,o),Object(s.c)(r,a),Object(s.c)(r,h),Object(s.c)(h,b)},p(e,[r]){1&r&&Object(s.K)(c,e[0]),2&r&&Object(s.K)(o,e[1]),4&r&&Object(s.K)(b,e[2]),8&r&&Object(s.e)(t,"href",e[3])},i:s.D,o:s.D,d(e){e&&Object(s.r)(t)}}}function v(e,t,r){let{firstColumn:s=""}=t,{secondColumn:n=""}=t,{thirdColumn:c=""}=t,{url:i=""}=t;return e.$$set=e=>{"firstColumn"in e&&r(0,s=e.firstColumn),"secondColumn"in e&&r(1,n=e.secondColumn),"thirdColumn"in e&&r(2,c=e.thirdColumn),"url"in e&&r(3,i=e.url)},[s,n,c,i]}class y extends s.a{constructor(e){super(),Object(s.y)(this,e,v,m,s.I,{firstColumn:0,secondColumn:1,thirdColumn:2,url:3})}}var x=y;function w(e){let t,r,n,c,i,l,o,a,h,b,u,j,d,O,g,f,p;return{c(){t=Object(s.s)("div"),r=Object(s.s)("div"),n=Object(s.N)(e[0]),c=Object(s.L)(),i=Object(s.s)("span"),l=Object(s.N)(e[1]),o=Object(s.L)(),a=Object(s.s)("div"),h=Object(s.s)("span"),b=Object(s.N)(e[2]),u=Object(s.L)(),j=Object(s.s)("span"),d=Object(s.N)(e[3]),O=Object(s.L)(),g=Object(s.s)("span"),f=Object(s.N)(e[4]),this.h()},l(p){t=Object(s.j)(p,"DIV",{class:!0});var m=Object(s.h)(t);r=Object(s.j)(m,"DIV",{class:!0});var v=Object(s.h)(r);n=Object(s.l)(v,e[0]),c=Object(s.k)(v),i=Object(s.j)(v,"SPAN",{class:!0});var y=Object(s.h)(i);l=Object(s.l)(y,e[1]),y.forEach(s.r),v.forEach(s.r),o=Object(s.k)(m),a=Object(s.j)(m,"DIV",{class:!0});var x=Object(s.h)(a);h=Object(s.j)(x,"SPAN",{class:!0});var w=Object(s.h)(h);b=Object(s.l)(w,e[2]),w.forEach(s.r),u=Object(s.k)(x),j=Object(s.j)(x,"SPAN",{class:!0});var E=Object(s.h)(j);d=Object(s.l)(E,e[3]),E.forEach(s.r),O=Object(s.k)(x),g=Object(s.j)(x,"SPAN",{class:!0});var k=Object(s.h)(g);f=Object(s.l)(k,e[4]),k.forEach(s.r),x.forEach(s.r),m.forEach(s.r),this.h()},h(){Object(s.e)(i,"class","numerator"),Object(s.e)(r,"class","lg:w-2/12"),Object(s.e)(h,"class","lg:block hidden w-4/12"),Object(s.e)(j,"class","lg:block hidden w-4/12"),Object(s.e)(g,"class","block lg:w-4/12 w-full lg:text-left text-right"),Object(s.e)(a,"class","flex lg:w-10/12 w-1/2 ml-auto text-gray-500"),Object(s.e)(t,"class",p="px-4 py-3 flex flex-wrap uppercase text-xs tracking-wider font-medium "+(e[5]&&"border-t border-gray-200"))},m(e,p){Object(s.z)(e,t,p),Object(s.c)(t,r),Object(s.c)(r,n),Object(s.c)(r,c),Object(s.c)(r,i),Object(s.c)(i,l),Object(s.c)(t,o),Object(s.c)(t,a),Object(s.c)(a,h),Object(s.c)(h,b),Object(s.c)(a,u),Object(s.c)(a,j),Object(s.c)(j,d),Object(s.c)(a,O),Object(s.c)(a,g),Object(s.c)(g,f)},p(e,[r]){1&r&&Object(s.K)(n,e[0]),2&r&&Object(s.K)(l,e[1]),4&r&&Object(s.K)(b,e[2]),8&r&&Object(s.K)(d,e[3]),16&r&&Object(s.K)(f,e[4]),32&r&&p!==(p="px-4 py-3 flex flex-wrap uppercase text-xs tracking-wider font-medium "+(e[5]&&"border-t border-gray-200"))&&Object(s.e)(t,"class",p)},i:s.D,o:s.D,d(e){e&&Object(s.r)(t)}}}function E(e,t,r){let{sectionTitle:s=""}=t,{sectionCount:n=""}=t,{firstColumn:c=""}=t,{secondColumn:i=""}=t,{thirdColumn:l=""}=t,{border:o=!1}=t;return e.$$set=e=>{"sectionTitle"in e&&r(0,s=e.sectionTitle),"sectionCount"in e&&r(1,n=e.sectionCount),"firstColumn"in e&&r(2,c=e.firstColumn),"secondColumn"in e&&r(3,i=e.secondColumn),"thirdColumn"in e&&r(4,l=e.thirdColumn),"border"in e&&r(5,o=e.border)},[s,n,c,i,l,o]}class k extends s.a{constructor(e){super(),Object(s.y)(this,e,E,w,s.I,{sectionTitle:0,sectionCount:1,firstColumn:2,secondColumn:3,thirdColumn:4,border:5})}}var $=k;function P(e,t,r){const s=e.slice();return s[3]=t[r],s}function C(e,t,r){const s=e.slice();return s[6]=t[r],s}function S(e,t,r){const s=e.slice();return s[9]=t[r],s}function D(e){let t,r,n,c,i,l,o,a,h,b,u,j,d,O;return{c(){t=Object(s.s)("img"),n=Object(s.L)(),c=Object(s.s)("img"),l=Object(s.L)(),o=Object(s.s)("img"),h=Object(s.L)(),b=Object(s.s)("img"),j=Object(s.L)(),d=Object(s.s)("img"),this.h()},l(e){t=Object(s.j)(e,"IMG",{class:!0,src:!0,alt:!0}),n=Object(s.k)(e),c=Object(s.j)(e,"IMG",{class:!0,src:!0,alt:!0}),l=Object(s.k)(e),o=Object(s.j)(e,"IMG",{class:!0,src:!0,alt:!0}),h=Object(s.k)(e),b=Object(s.j)(e,"IMG",{class:!0,src:!0,alt:!0}),j=Object(s.k)(e),d=Object(s.j)(e,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){Object(s.e)(t,"class","w-full h-auto"),t.src!==(r="https://cdn.dribbble.com/users/203186/screenshots/2653568/disrupt.gif")&&Object(s.e)(t,"src","https://cdn.dribbble.com/users/203186/screenshots/2653568/disrupt.gif"),Object(s.e)(t,"alt","Disrupt"),Object(s.e)(c,"class","w-full h-auto"),c.src!==(i="https://cdn.dribbble.com/users/203186/screenshots/2539744/beautiful-stores.gif")&&Object(s.e)(c,"src","https://cdn.dribbble.com/users/203186/screenshots/2539744/beautiful-stores.gif"),Object(s.e)(c,"alt","Beautiful Stores"),Object(s.e)(o,"class","w-full h-auto"),o.src!==(a="https://cdn.dribbble.com/users/203186/screenshots/3389462/backy.png")&&Object(s.e)(o,"src","https://cdn.dribbble.com/users/203186/screenshots/3389462/backy.png"),Object(s.e)(o,"alt","Bac Ky Website"),Object(s.e)(b,"class","w-full h-auto"),b.src!==(u="https://cdn.dribbble.com/users/203186/screenshots/4236525/five-2.gif")&&Object(s.e)(b,"src","https://cdn.dribbble.com/users/203186/screenshots/4236525/five-2.gif"),Object(s.e)(b,"alt","Viewport Design #5"),Object(s.e)(d,"class","w-full h-auto"),d.src!==(O="https://cdn.dribbble.com/users/203186/screenshots/3654797/curate-2.jpg")&&Object(s.e)(d,"src","https://cdn.dribbble.com/users/203186/screenshots/3654797/curate-2.jpg"),Object(s.e)(d,"alt","Curate")},m(e,r){Object(s.z)(e,t,r),Object(s.z)(e,n,r),Object(s.z)(e,c,r),Object(s.z)(e,l,r),Object(s.z)(e,o,r),Object(s.z)(e,h,r),Object(s.z)(e,b,r),Object(s.z)(e,j,r),Object(s.z)(e,d,r)},d(e){e&&Object(s.r)(t),e&&Object(s.r)(n),e&&Object(s.r)(c),e&&Object(s.r)(l),e&&Object(s.r)(o),e&&Object(s.r)(h),e&&Object(s.r)(b),e&&Object(s.r)(j),e&&Object(s.r)(d)}}}function I(e){let t,r;return t=new x({props:{firstColumn:e[9].title,secondColumn:e[9].role,thirdColumn:e[9].year,url:e[9].url}}),{c(){Object(s.n)(t.$$.fragment)},l(e){Object(s.i)(t.$$.fragment,e)},m(e,n){Object(s.C)(t,e,n),r=!0},p(e,r){const s={};1&r&&(s.firstColumn=e[9].title),1&r&&(s.secondColumn=e[9].role),1&r&&(s.thirdColumn=e[9].year),1&r&&(s.url=e[9].url),t.$set(s)},i(e){r||(Object(s.O)(t.$$.fragment,e),r=!0)},o(e){Object(s.P)(t.$$.fragment,e),r=!1},d(e){Object(s.p)(t,e)}}}function T(e){let t,r;return t=new x({props:{firstColumn:e[6].title,secondColumn:e[6].role,thirdColumn:e[6].date,url:e[6].url}}),{c(){Object(s.n)(t.$$.fragment)},l(e){Object(s.i)(t.$$.fragment,e)},m(e,n){Object(s.C)(t,e,n),r=!0},p(e,r){const s={};2&r&&(s.firstColumn=e[6].title),2&r&&(s.secondColumn=e[6].role),2&r&&(s.thirdColumn=e[6].date),2&r&&(s.url=e[6].url),t.$set(s)},i(e){r||(Object(s.O)(t.$$.fragment,e),r=!0)},o(e){Object(s.P)(t.$$.fragment,e),r=!1},d(e){Object(s.p)(t,e)}}}function L(e){let t,r,n,c,i,l=e[3].title+"";return{c(){t=Object(s.s)("div"),r=Object(s.s)("a"),n=Object(s.N)(l),i=Object(s.L)(),this.h()},l(e){t=Object(s.j)(e,"DIV",{class:!0});var c=Object(s.h)(t);r=Object(s.j)(c,"A",{href:!0,class:!0});var o=Object(s.h)(r);n=Object(s.l)(o,l),o.forEach(s.r),i=Object(s.k)(c),c.forEach(s.r),this.h()},h(){Object(s.e)(r,"href",c=e[3].url),Object(s.e)(r,"class","text-gray-600 hover:text-black"),Object(s.e)(t,"class","lg:w-4/12 w-1/2 py-2 sm:text-xl lg:even:text-left even:text-right")},m(e,c){Object(s.z)(e,t,c),Object(s.c)(t,r),Object(s.c)(r,n),Object(s.c)(t,i)},p(e,t){4&t&&l!==(l=e[3].title+"")&&Object(s.K)(n,l),4&t&&c!==(c=e[3].url)&&Object(s.e)(r,"href",c)},d(e){e&&Object(s.r)(t)}}}function H(e){let t,r,n,c,i,l,o,a,h,b,u,j,d,O,g,f,m,v,y,x,w,E,k,H,N,z,q,F,X,A,M,V,W,B,G,K,_,Y;H=new p({props:{perPage:{1e3:4,768:2,500:2,100:2},dots:!1,loop:!0,threshold:1,$$slots:{default:[D]},$$scope:{ctx:e}}}),z=new $({props:{sectionTitle:"Projects",sectionCount:e[0].length,firstColumn:"Title",secondColumn:"Role",thirdColumn:"Year"}});let U=e[0],R=[];for(let t=0;t<U.length;t+=1)R[t]=I(S(e,U,t));const Q=e=>Object(s.P)(R[e],1,1,()=>{R[e]=null});A=new $({props:{sectionTitle:"Experience",firstColumn:"Name",secondColumn:"Title",thirdColumn:"Duration",border:!0}});let J=e[1],Z=[];for(let t=0;t<J.length;t+=1)Z[t]=T(C(e,J,t));const ee=e=>Object(s.P)(Z[e],1,1,()=>{Z[e]=null});B=new $({props:{sectionTitle:"Collaborators",border:!0}});let te=e[2],re=[];for(let t=0;t<te.length;t+=1)re[t]=L(P(e,te,t));return{c(){t=Object(s.L)(),r=Object(s.s)("div"),n=Object(s.s)("div"),c=Object(s.s)("h2"),i=Object(s.N)("Maxim is a French Canadian Designer & Developer."),l=Object(s.L)(),o=Object(s.s)("div"),a=Object(s.s)("p"),h=Object(s.N)("He designs and develops modular, accessible, and performant systems which he uses to build well-crafted sites and applications. He does research, tries new things, and has honest conversations in order to find the best solutions."),b=Object(s.L)(),u=Object(s.s)("p"),j=Object(s.N)("He currently leads design at "),d=Object(s.s)("a"),O=Object(s.N)("Planetary"),g=Object(s.N)(" and runs a studio called  "),f=Object(s.s)("a"),m=Object(s.N)("Blunt"),v=Object(s.N)(". This site lists most of the work he's done over the years, if you'd like to collaborate with Maxim please fill up this "),y=Object(s.s)("a"),x=Object(s.N)("form"),w=Object(s.N)("."),E=Object(s.L)(),k=Object(s.s)("div"),Object(s.n)(H.$$.fragment),N=Object(s.L)(),Object(s.n)(z.$$.fragment),q=Object(s.L)(),F=Object(s.s)("div");for(let e=0;e<R.length;e+=1)R[e].c();X=Object(s.L)(),Object(s.n)(A.$$.fragment),M=Object(s.L)(),V=Object(s.s)("div");for(let e=0;e<Z.length;e+=1)Z[e].c();W=Object(s.L)(),Object(s.n)(B.$$.fragment),G=Object(s.L)(),K=Object(s.s)("div"),_=Object(s.s)("div");for(let e=0;e<re.length;e+=1)re[e].c();this.h()},l(e){Object(s.G)('[data-svelte="svelte-7gwmg8"]',document.head).forEach(s.r),t=Object(s.k)(e),r=Object(s.j)(e,"DIV",{class:!0});var p=Object(s.h)(r);n=Object(s.j)(p,"DIV",{class:!0});var $=Object(s.h)(n);c=Object(s.j)($,"H2",{class:!0});var P=Object(s.h)(c);i=Object(s.l)(P,"Maxim is a French Canadian Designer & Developer."),P.forEach(s.r),l=Object(s.k)($),o=Object(s.j)($,"DIV",{class:!0});var C=Object(s.h)(o);a=Object(s.j)(C,"P",{class:!0});var S=Object(s.h)(a);h=Object(s.l)(S,"He designs and develops modular, accessible, and performant systems which he uses to build well-crafted sites and applications. He does research, tries new things, and has honest conversations in order to find the best solutions."),S.forEach(s.r),b=Object(s.k)(C),u=Object(s.j)(C,"P",{class:!0});var D=Object(s.h)(u);j=Object(s.l)(D,"He currently leads design at "),d=Object(s.j)(D,"A",{class:!0,href:!0,target:!0,rel:!0});var I=Object(s.h)(d);O=Object(s.l)(I,"Planetary"),I.forEach(s.r),g=Object(s.l)(D," and runs a studio called  "),f=Object(s.j)(D,"A",{class:!0,href:!0,target:!0,rel:!0});var T=Object(s.h)(f);m=Object(s.l)(T,"Blunt"),T.forEach(s.r),v=Object(s.l)(D,". This site lists most of the work he's done over the years, if you'd like to collaborate with Maxim please fill up this "),y=Object(s.j)(D,"A",{class:!0,href:!0,target:!0,rel:!0});var L=Object(s.h)(y);x=Object(s.l)(L,"form"),L.forEach(s.r),w=Object(s.l)(D,"."),D.forEach(s.r),C.forEach(s.r),$.forEach(s.r),p.forEach(s.r),E=Object(s.k)(e),k=Object(s.j)(e,"DIV",{class:!0});var Y=Object(s.h)(k);Object(s.i)(H.$$.fragment,Y),Y.forEach(s.r),N=Object(s.k)(e),Object(s.i)(z.$$.fragment,e),q=Object(s.k)(e),F=Object(s.j)(e,"DIV",{class:!0});var U=Object(s.h)(F);for(let e=0;e<R.length;e+=1)R[e].l(U);U.forEach(s.r),X=Object(s.k)(e),Object(s.i)(A.$$.fragment,e),M=Object(s.k)(e),V=Object(s.j)(e,"DIV",{class:!0});var Q=Object(s.h)(V);for(let e=0;e<Z.length;e+=1)Z[e].l(Q);Q.forEach(s.r),W=Object(s.k)(e),Object(s.i)(B.$$.fragment,e),G=Object(s.k)(e),K=Object(s.j)(e,"DIV",{class:!0});var J=Object(s.h)(K);_=Object(s.j)(J,"DIV",{class:!0});var ee=Object(s.h)(_);for(let e=0;e<re.length;e+=1)re[e].l(ee);ee.forEach(s.r),J.forEach(s.r),this.h()},h(){document.title="Maxim Siebert",Object(s.e)(c,"class","max-w-4xl md:text-6xl text-4xl md:mb-12 mb-6 leading-none font-medium tracking-tight"),Object(s.e)(a,"class","lg:w-4/12 sm:w-1/2 sm:mb-0 mb-3 w-full lg:pr-16 sm:pr-8"),Object(s.e)(d,"class","text-black underline hover:no-underline"),Object(s.e)(d,"href","https://planetary.co/"),Object(s.e)(d,"target","_blank"),Object(s.e)(d,"rel","noopener noreferrer"),Object(s.e)(f,"class","text-black underline hover:no-underline"),Object(s.e)(f,"href","https://blunt.af/"),Object(s.e)(f,"target","_blank"),Object(s.e)(f,"rel","noopener noreferrer"),Object(s.e)(y,"class","text-black underline hover:no-underline"),Object(s.e)(y,"href","https://form.typeform.com/to/mTEtzf"),Object(s.e)(y,"target","_blank"),Object(s.e)(y,"rel","noopener noreferrer"),Object(s.e)(u,"class","lg:w-4/12 sm:w-1/2 w-full lg:pr-16 sm:pr-8"),Object(s.e)(o,"class","flex flex-wrap text-gray-600 text-sm"),Object(s.e)(n,"class","lg:w-10/12 ml-auto"),Object(s.e)(r,"class","px-4 lg:pt-48 md:pt-32 pt-20 md:pb-24 pb-12"),Object(s.e)(k,"class","mb-3 bg-gray-100"),Object(s.e)(F,"class","w-full md:mb-20 sm:mb-12 mb-8"),Object(s.e)(V,"class","w-full md:mb-20 sm:mb-12 mb-8"),Object(s.e)(_,"class","ml-auto lg:w-10/12 w-full flex flex-wrap md:mb-20 sm:mb-12 mb-8"),Object(s.e)(K,"class","px-4")},m(e,p){Object(s.z)(e,t,p),Object(s.z)(e,r,p),Object(s.c)(r,n),Object(s.c)(n,c),Object(s.c)(c,i),Object(s.c)(n,l),Object(s.c)(n,o),Object(s.c)(o,a),Object(s.c)(a,h),Object(s.c)(o,b),Object(s.c)(o,u),Object(s.c)(u,j),Object(s.c)(u,d),Object(s.c)(d,O),Object(s.c)(u,g),Object(s.c)(u,f),Object(s.c)(f,m),Object(s.c)(u,v),Object(s.c)(u,y),Object(s.c)(y,x),Object(s.c)(u,w),Object(s.z)(e,E,p),Object(s.z)(e,k,p),Object(s.C)(H,k,null),Object(s.z)(e,N,p),Object(s.C)(z,e,p),Object(s.z)(e,q,p),Object(s.z)(e,F,p);for(let e=0;e<R.length;e+=1)R[e].m(F,null);Object(s.z)(e,X,p),Object(s.C)(A,e,p),Object(s.z)(e,M,p),Object(s.z)(e,V,p);for(let e=0;e<Z.length;e+=1)Z[e].m(V,null);Object(s.z)(e,W,p),Object(s.C)(B,e,p),Object(s.z)(e,G,p),Object(s.z)(e,K,p),Object(s.c)(K,_);for(let e=0;e<re.length;e+=1)re[e].m(_,null);Y=!0},p(e,[t]){const r={};4096&t&&(r.$$scope={dirty:t,ctx:e}),H.$set(r);const n={};if(1&t&&(n.sectionCount=e[0].length),z.$set(n),1&t){let r;for(U=e[0],r=0;r<U.length;r+=1){const n=S(e,U,r);R[r]?(R[r].p(n,t),Object(s.O)(R[r],1)):(R[r]=I(n),R[r].c(),Object(s.O)(R[r],1),R[r].m(F,null))}for(Object(s.x)(),r=U.length;r<R.length;r+=1)Q(r);Object(s.g)()}if(2&t){let r;for(J=e[1],r=0;r<J.length;r+=1){const n=C(e,J,r);Z[r]?(Z[r].p(n,t),Object(s.O)(Z[r],1)):(Z[r]=T(n),Z[r].c(),Object(s.O)(Z[r],1),Z[r].m(V,null))}for(Object(s.x)(),r=J.length;r<Z.length;r+=1)ee(r);Object(s.g)()}if(4&t){let r;for(te=e[2],r=0;r<te.length;r+=1){const s=P(e,te,r);re[r]?re[r].p(s,t):(re[r]=L(s),re[r].c(),re[r].m(_,null))}for(;r<re.length;r+=1)re[r].d(1);re.length=te.length}},i(e){if(!Y){Object(s.O)(H.$$.fragment,e),Object(s.O)(z.$$.fragment,e);for(let e=0;e<U.length;e+=1)Object(s.O)(R[e]);Object(s.O)(A.$$.fragment,e);for(let e=0;e<J.length;e+=1)Object(s.O)(Z[e]);Object(s.O)(B.$$.fragment,e),Y=!0}},o(e){Object(s.P)(H.$$.fragment,e),Object(s.P)(z.$$.fragment,e),R=R.filter(Boolean);for(let e=0;e<R.length;e+=1)Object(s.P)(R[e]);Object(s.P)(A.$$.fragment,e),Z=Z.filter(Boolean);for(let e=0;e<Z.length;e+=1)Object(s.P)(Z[e]);Object(s.P)(B.$$.fragment,e),Y=!1},d(e){e&&Object(s.r)(t),e&&Object(s.r)(r),e&&Object(s.r)(E),e&&Object(s.r)(k),Object(s.p)(H),e&&Object(s.r)(N),Object(s.p)(z,e),e&&Object(s.r)(q),e&&Object(s.r)(F),Object(s.q)(R,e),e&&Object(s.r)(X),Object(s.p)(A,e),e&&Object(s.r)(M),e&&Object(s.r)(V),Object(s.q)(Z,e),e&&Object(s.r)(W),Object(s.p)(B,e),e&&Object(s.r)(G),e&&Object(s.r)(K),Object(s.q)(re,e)}}}async function N({params:e,query:t}){const r=await this.fetch("content/projects.json"),s=await r.json(),n=await this.fetch("content/experiences.json"),c=await n.json(),i=await this.fetch("content/collaborators.json");return{projects:s,experiences:c,collaborators:await i.json()}}function z(e,t,r){let{projects:s}=t,{experiences:n}=t,{collaborators:c}=t;return e.$$set=e=>{"projects"in e&&r(0,s=e.projects),"experiences"in e&&r(1,n=e.experiences),"collaborators"in e&&r(2,c=e.collaborators)},[s,n,c]}class q extends s.a{constructor(e){super(),Object(s.y)(this,e,z,H,s.I,{projects:0,experiences:1,collaborators:2})}}t.default=q}}]);