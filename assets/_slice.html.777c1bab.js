import{_ as n,o as t,c as o,a,t as s,d as c,e as r}from"../app.84cb432e.mjs";const p={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),u={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; slice (offset) (size)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>offset</code>: start of slice</li><li><code>size</code>: size of slice</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create new dataframe from a slice of the rows</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> slice <span class="token number">0</span> <span class="token number">1</span>
</code></pre></div>`,7);function f(e,m){return t(),o("div",null,[a("h1",i,[l,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",u,s(e.$frontmatter.usage),1),h])}const k=n(p,[["render",f],["__file","_slice.html.vue"]]);export{k as default};
