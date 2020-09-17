"use strict";function t(t){return t()}let e;function n(t){e=t}const l={'"':"&quot;","'":"&#39;","&":"&amp;","<":"&lt;",">":"&gt;"};function a(t){return String(t).replace(/["'&<>]/g,t=>l[t])}let s;const r={code:".prose ul > li{margin-top:0;margin-bottom:0}",map:'{"version":3,"file":"Article.svelte","sources":["Article.svelte"],"sourcesContent":["<script>\\n  export let data\\n  const { html, frontmatter } = data\\n<\/script>\\n\\n<style>:global(.prose ul > li) {\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}</style>\\n\\n<svelte:head>\\n  <title>{frontmatter.title} | swyx.io</title>\\n</svelte:head>\\n<a href=\\"/\\">&LeftArrow; Home</a>\\n\\n<article\\n  class=\\"px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16\\n    lg:px-8 xl:max-w-6xl\\">\\n    \\n    <div class=\\"flex gap-2\\">\\n      {#each frontmatter.categories as tag}\\n      <span\\n        class=\\"inline-flex items-center px-3 py-0.5 rounded-full text-sm\\n          font-medium leading-5 bg-indigo-100 text-indigo-800\\">\\n        {tag}\\n      </span>\\n    {/each}\\n    </div>\\n  <div class=\\"prose lg:prose-xl\\">\\n    <div class=\\"title\\">\\n      <h1 class=\\"text-white\\">{frontmatter.title}</h1>\\n      {#if frontmatter.author}<small>By {frontmatter.author}</small>{/if}\\n    </div>\\n\\n    {#if html}\\n      {@html html}\\n    {:else}\\n      <h1>There was a problem rendering this page - please let @swyx know!</h1>\\n    {/if}\\n  </div>\\n</article>\\n"],"names":[],"mappings":"AAKe,cAAc,AAAE,CAAC,AAC9B,UAAU,CAAE,CAAC,CACb,aAAa,CAAE,CAAC,AAClB,CAAC"}'},i=function(l){function a(t,a,r,i){const o=e;n({$$:{on_destroy:s,context:new Map(o?o.$$.context:[]),on_mount:[],before_update:[],after_update:[],callbacks:Object.create(null)}});const c=l(t,a,r,i);return n(o),c}return{render:(e={},n={})=>{s=[];const l={title:"",head:"",css:new Set},r=a(l,e,{},n);return s.forEach(t),{html:r,css:{code:Array.from(l.css).map(t=>t.code).join("\n"),map:null},head:l.title+l.head}},$$render:a}}((t,e,n,l)=>{let{data:s}=e;const{html:i,frontmatter:o}=s;return void 0===e.data&&n.data&&void 0!==s&&n.data(s),t.css.add(r),`${t.head+=""+(t.title=`<title>${a(o.title)} | swyx.io</title>`,""),""}\n<a href="/">← Home</a>\n\n<article class="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16\n    lg:px-8 xl:max-w-6xl"><div class="flex gap-2">${function(t,e){let n="";for(let l=0;l<t.length;l+=1)n+=e(t[l],l);return n}(o.categories,t=>`<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm\n          font-medium leading-5 bg-indigo-100 text-indigo-800">${a(t)}\n      </span>`)}</div>\n  <div class="prose lg:prose-xl"><div class="title"><h1 class="text-white">${a(o.title)}</h1>\n      ${o.author?`<small>By ${a(o.author)}</small>`:""}</div>\n\n    ${i?""+i:"<h1>There was a problem rendering this page - please let @swyx know!</h1>"}</div></article>`});module.exports=i;
