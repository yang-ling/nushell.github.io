import{_ as s,o as r,c as o,a as e,t,d as n,e as c}from"./app.17282d37.js";const l={},d={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),m=n(),p={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from eml --preview-body</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--preview-body {int}</code>: How many bytes of the body to preview</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert eml structured data into table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;From: test@email.com
Subject: Welcome
To: someone@somewhere.com

Test&#39;</span> <span class="token operator">|</span> from eml
</code></pre></div><p>Convert eml structured data into table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;From: test@email.com
Subject: Welcome
To: someone@somewhere.com

Test&#39;</span> <span class="token operator">|</span> from eml -b <span class="token number">1</span>
</code></pre></div>`,9);function u(a,_){return r(),o("div",null,[e("h1",d,[i,m,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),h])}var b=s(l,[["render",u],["__file","from_eml.html.vue"]]);export{b as default};
