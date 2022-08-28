import{_ as t,o as n,c as p,a,t as s,d as o,e as r}from"../app.84cb432e.mjs";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),h={style:{"white-space":"pre-wrap"}},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path split --columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--columns {table}</code>: Optionally operate by column path</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split a path into parts</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/viking/spam.txt&#39;</span> <span class="token operator">|</span> path <span class="token function">split</span>
</code></pre></div><p>Split all paths under the &#39;name&#39; column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span> <span class="token operator">|</span> path <span class="token function">expand</span><span class="token punctuation">)</span> <span class="token operator">|</span> path <span class="token function">split</span> <span class="token parameter variable">-c</span> <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div>`,9);function m(e,_){return n(),p("div",null,[a("h1",l,[i,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}const g=t(c,[["render",m],["__file","path_split.html.vue"]]);export{g as default};
