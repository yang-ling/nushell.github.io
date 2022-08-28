import{_ as s,o as n,c as o,a,t,d as r,e as p}from"../app.84cb432e.mjs";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=r(),d={style:{"white-space":"pre-wrap"}},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path type --columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--columns {table}</code>: Optionally operate by column path</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Show type of a filepath</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">|</span> path <span class="token builtin class-name">type</span>
</code></pre></div><p>Show type of a filepath in a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> path <span class="token builtin class-name">type</span> <span class="token parameter variable">-c</span> <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div>`,9);function m(e,_){return n(),o("div",null,[a("h1",l,[i,h,a("code",null,t(e.$frontmatter.title),1)]),a("div",d,t(e.$frontmatter.usage),1),u])}const g=s(c,[["render",m],["__file","path_type.html.vue"]]);export{g as default};
