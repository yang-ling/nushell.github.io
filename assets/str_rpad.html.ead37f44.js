import{_ as t,o as n,c as r,a,t as e,d as o,e as p}from"./app.17282d37.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),h={style:{"white-space":"pre-wrap"}},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str rpad ...rest --length --character</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally check if string contains pattern by column paths</li><li><code>--length {int}</code>: length to pad to</li><li><code>--character {string}</code>: character to pad with</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Right-pad a string with asterisks until it&#39;s 10 characters wide</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;nushell&#39;</span> <span class="token operator">|</span> str rpad -l <span class="token number">10</span> -c <span class="token string">&#39;*&#39;</span>
</code></pre></div><p>Right-pad a string with zeroes until it&#39;s 10 characters wide</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;123&#39;</span> <span class="token operator">|</span> str rpad -l <span class="token number">10</span> -c <span class="token string">&#39;0&#39;</span>
</code></pre></div><p>Use rpad to truncate a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;123456789&#39;</span> <span class="token operator">|</span> str rpad -l <span class="token number">3</span> -c <span class="token string">&#39;0&#39;</span>
</code></pre></div><p>Use rpad to pad Unicode</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;\u2589&#39;</span> <span class="token operator">|</span> str rpad -l <span class="token number">10</span> -c <span class="token string">&#39;\u2589&#39;</span>
</code></pre></div>`,13);function u(s,k){return n(),r("div",null,[a("h1",i,[l,d,a("code",null,e(s.$frontmatter.title),1)]),a("div",h,e(s.$frontmatter.usage),1),g])}var m=t(c,[["render",u],["__file","str_rpad.html.vue"]]);export{m as default};
