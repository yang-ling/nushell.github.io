import{_ as n,o as t,c as o,a,t as e,d as r,e as p}from"./app.17282d37.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; headers </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns headers from table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;a b c|1 2 3&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&quot;|&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; &quot;</span> <span class="token operator">|</span> headers
</code></pre></div><p>Don&#39;t panic on rows with different headers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;a b c|1 2 3|1 2 3 4&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&quot;|&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; &quot;</span> <span class="token operator">|</span> headers
</code></pre></div>`,7);function f(s,g){return t(),o("div",null,[a("h1",l,[i,d,a("code",null,e(s.$frontmatter.title),1)]),a("div",h,e(s.$frontmatter.usage),1),u])}var _=n(c,[["render",f],["__file","headers.html.vue"]]);export{_ as default};
