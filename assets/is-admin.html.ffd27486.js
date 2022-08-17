import{_ as t,o as n,c as o,a,t as s,d as i,e as r}from"./app.17282d37.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=i(),h={style:{"white-space":"pre-wrap"}},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; is-admin </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Echo &#39;iamroot&#39; if nushell is running with admin/root privileges, and &#39;iamnotroot&#39; if not.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">if</span> is-admin <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;iamroot&quot;</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;iamnotroot&quot;</span> <span class="token punctuation">}</span>
</code></pre></div>`,5);function m(e,_){return n(),o("div",null,[a("h1",l,[p,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}var g=t(c,[["render",m],["__file","is-admin.html.vue"]]);export{g as default};
