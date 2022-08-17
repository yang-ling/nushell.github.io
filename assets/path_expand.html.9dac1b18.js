import{_ as n,o as t,c as o,a,t as s,d as p,e as r}from"./app.17282d37.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=p(),h={style:{"white-space":"pre-wrap"}},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path expand --strict --no-symlink --columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--strict</code>: Throw an error if the path could not be expanded</li><li><code>--no-symlink</code>: Do not resolve symbolic links</li><li><code>--columns {table}</code>: Optionally operate by column path</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Expand an absolute path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/joe/foo/../bar&#39;</span> <span class="token operator">|</span> path <span class="token function">expand</span>
</code></pre></div><p>Expand a path in a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> path <span class="token function">expand</span> -c <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div><p>Expand a relative path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;foo/../bar&#39;</span> <span class="token operator">|</span> path <span class="token function">expand</span>
</code></pre></div>`,11);function m(e,g){return t(),o("div",null,[a("h1",l,[d,i,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}var x=n(c,[["render",m],["__file","path_expand.html.vue"]]);export{x as default};
