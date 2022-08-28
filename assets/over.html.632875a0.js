import{_ as t,o as n,c as o,a,t as s,d as r,e as c}from"../app.84cb432e.mjs";const p={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; over ...partition-by</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...partition-by</code>: columns to partition the window function</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Adds a partition to a function expression</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fn avg col_a <span class="token operator">|</span> over col_b <span class="token operator">|</span> into nu
</code></pre></div><p>orders query by a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_a
    <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token punctuation">(</span>fn lead col_a <span class="token operator">|</span> over col_b<span class="token punctuation">)</span>
    <span class="token operator">|</span> describe
</code></pre></div>`,9);function _(e,f){return n(),o("div",null,[a("h1",i,[l,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}const b=t(p,[["render",_],["__file","over.html.vue"]]);export{b as default};
