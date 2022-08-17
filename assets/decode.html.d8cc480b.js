import{_ as n,o as t,c as o,a as e,t as s,d as r,e as c}from"./app.17282d37.js";const d={},i={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; decode (encoding)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>encoding</code>: the text encoding to use</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Multiple encodings are supported, here is an example of a few:
big5, euc-jp, euc-kr, gbk, iso-8859-1, utf-16, cp1252, latin5

For a more complete list of encodings please refer to the encoding_rs
documentation link at https://docs.rs/encoding_rs/0.8.28/encoding_rs/#statics
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Decode the output of an external command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ^cat myfile.q <span class="token operator">|</span> decode utf-8
</code></pre></div><p>Decode an UTF-16 string into nushell UTF-8 string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>00 <span class="token number">53</span> 00 6F 00 6D 00 <span class="token number">65</span> 00 <span class="token number">20</span> 00 <span class="token number">44</span> 00 <span class="token number">61</span> 00 <span class="token number">74</span> 00 <span class="token number">61</span><span class="token punctuation">]</span> <span class="token operator">|</span> decode utf-16be
</code></pre></div>`,11);function g(a,m){return t(),o("div",null,[e("h1",i,[p,l,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),u])}var _=n(d,[["render",g],["__file","decode.html.vue"]]);export{_ as default};
