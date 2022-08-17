import{_ as n,o as t,c as o,a,t as s,d as r,e as l}from"./app.17282d37.js";const p={},c={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=r(),h={style:{"white-space":"pre-wrap"}},u=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; overlay add (name) (as) --prefix</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: Module name to create overlay for</li><li><code>as</code>: as keyword followed by a new name</li><li><code>--prefix</code>: Prepend module name to the imported commands and aliases</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nushell.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create an overlay from a module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    overlay <span class="token function">add</span> spam
    foo
</code></pre></div><p>Create an overlay with a prefix</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;export def foo { &quot;foo&quot; }&#39;</span>
    overlay <span class="token function">add</span> --prefix spam
    spam foo
</code></pre></div><p>Create an overlay from a file</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;export env FOO { &quot;foo&quot; }&#39;</span> <span class="token operator">|</span> save spam.nu
    overlay <span class="token function">add</span> spam.nu
    <span class="token variable">$env</span>.FOO
</code></pre></div>`,13);function m(e,f){return t(),o("div",null,[a("h1",c,[d,i,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}var k=n(p,[["render",m],["__file","overlay_add.html.vue"]]);export{k as default};
