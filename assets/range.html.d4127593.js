import{_ as n,o as t,c as o,a,t as e,d as p,e as r}from"../app.84cb432e.mjs";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),d={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; range (rows)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>rows</code>: range of rows to return: Eg) 4..7 (=&gt; from 4 to 7)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the last 2 items</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> range <span class="token number">4</span><span class="token punctuation">..</span><span class="token number">5</span>
</code></pre></div><p>Get the last 2 items</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> range <span class="token punctuation">(</span>-2<span class="token punctuation">)</span><span class="token punctuation">..</span>
</code></pre></div><p>Get the next to last 2 items</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> range <span class="token punctuation">(</span>-3<span class="token punctuation">)</span><span class="token punctuation">..</span>-2
</code></pre></div>`,11);function g(s,k){return t(),o("div",null,[a("h1",l,[i,u,a("code",null,e(s.$frontmatter.title),1)]),a("div",d,e(s.$frontmatter.usage),1),h])}const _=n(c,[["render",g],["__file","range.html.vue"]]);export{_ as default};
