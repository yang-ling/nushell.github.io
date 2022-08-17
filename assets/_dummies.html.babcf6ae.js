import{_ as e,o as t,c as o,a,t as n,d as p,e as r}from"./app.17282d37.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),d={style:{"white-space":"pre-wrap"}},m=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dummies </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create new dataframe with dummy variables from a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> dummies
</code></pre></div><p>Create new dataframe with dummy variables from a series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> dummies
</code></pre></div>`,7);function h(s,k){return t(),o("div",null,[a("h1",i,[l,u,a("code",null,n(s.$frontmatter.title),1)]),a("div",d,n(s.$frontmatter.usage),1),m])}var _=e(c,[["render",h],["__file","_dummies.html.vue"]]);export{_ as default};
