(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{6:function(t,e,n){"use strict";n.r(e),n.d(e,"preload",(function(){return o}));var c=n(0);function s(t){let e,n,s,o,r,a,l=t[0].title+"",i=t[0].html+"";return document.title=e=t[0].title,{c(){n=Object(c.L)(),s=Object(c.s)("h1"),o=Object(c.N)(l),r=Object(c.L)(),a=Object(c.s)("div"),this.h()},l(t){Object(c.G)('[data-svelte="svelte-1uty71u"]',document.head).forEach(c.r),n=Object(c.k)(t),s=Object(c.j)(t,"H1",{});var e=Object(c.h)(s);o=Object(c.l)(e,l),e.forEach(c.r),r=Object(c.k)(t),a=Object(c.j)(t,"DIV",{class:!0}),Object(c.h)(a).forEach(c.r),this.h()},h(){Object(c.e)(a,"class","content svelte-gnxal1")},m(t,e){Object(c.z)(t,n,e),Object(c.z)(t,s,e),Object(c.c)(s,o),Object(c.z)(t,r,e),Object(c.z)(t,a,e),a.innerHTML=i},p(t,[n]){1&n&&e!==(e=t[0].title)&&(document.title=e),1&n&&l!==(l=t[0].title+"")&&Object(c.K)(o,l),1&n&&i!==(i=t[0].html+"")&&(a.innerHTML=i)},i:c.D,o:c.D,d(t){t&&Object(c.r)(n),t&&Object(c.r)(s),t&&Object(c.r)(r),t&&Object(c.r)(a)}}}async function o({params:t,query:e}){const n=await this.fetch(`blog/${t.slug}.json`),c=await n.json();if(200===n.status)return{post:c};this.error(n.status,c.message)}function r(t,e,n){let{post:c}=e;return t.$$set=t=>{"post"in t&&n(0,c=t.post)},[c]}class a extends c.a{constructor(t){var e;super(),document.getElementById("svelte-gnxal1-style")||((e=Object(c.s)("style")).id="svelte-gnxal1-style",e.textContent=".content.svelte-gnxal1 h2{font-size:1.4em;font-weight:500}.content.svelte-gnxal1 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-gnxal1 pre code{background-color:transparent;padding:0}.content.svelte-gnxal1 ul{line-height:1.5}.content.svelte-gnxal1 li{margin:0 0 0.5em 0}",Object(c.c)(document.head,e)),Object(c.y)(this,t,r,s,c.I,{post:0})}}e.default=a}}]);