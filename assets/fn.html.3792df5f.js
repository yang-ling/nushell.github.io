import{_ as t,o as n,c as o,a as e,t as s,d as r,e as c}from"./app.17282d37.js";const i={},d={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; fn (name) ...arguments --distinct</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: function name</li><li><code>...arguments</code>: function arguments</li><li><code>--distinct</code>: distict values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates a function expression</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fn count name_1 <span class="token operator">|</span> into nu
</code></pre></div><p>orders query by a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_a
    <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token punctuation">(</span>fn lead col_a<span class="token punctuation">)</span>
    <span class="token operator">|</span> describe
</code></pre></div>`,9);function f(a,m){return n(),o("div",null,[e("h1",d,[l,p,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),u])}var g=t(i,[["render",f],["__file","fn.html.vue"]]);export{g as default};
