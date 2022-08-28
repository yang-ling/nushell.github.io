import{_ as n,o as t,c as o,a,t as e,d as p,e as c}from"../app.84cb432e.mjs";const r={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),u={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; drop-duplicates (subset) --maintain --last</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>subset</code>: subset of columns to drop duplicates</li><li><code>--maintain</code>: maintain order</li><li><code>--last</code>: keeps last duplicate value (by default keeps first)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>drop duplicates</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> drop-duplicates
</code></pre></div>`,7);function m(s,k){return t(),o("div",null,[a("h1",i,[l,d,a("code",null,e(s.$frontmatter.title),1)]),a("div",u,e(s.$frontmatter.usage),1),h])}const f=n(r,[["render",m],["__file","_drop-duplicates.html.vue"]]);export{f as default};
