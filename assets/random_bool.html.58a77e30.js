import{_ as o,o as r,c as s,a as e,t,d as n,e as d}from"./app.17282d37.js";const i={},l={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=n(),p={style:{"white-space":"pre-wrap"}},u=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; random bool --bias</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--bias {number}</code>: Adjusts the probability of a &quot;true&quot; outcome</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Generate a random boolean value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random bool
</code></pre></div><p>Generate a random boolean value with a 75% chance of &quot;true&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random bool --bias <span class="token number">0.75</span>
</code></pre></div>`,9);function m(a,b){return r(),s("div",null,[e("h1",l,[c,h,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),u])}var f=o(i,[["render",m],["__file","random_bool.html.vue"]]);export{f as default};
