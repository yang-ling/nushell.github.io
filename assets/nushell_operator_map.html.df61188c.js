import{_ as t,o as d,c as e,e as r}from"../app.84cb432e.mjs";const a={},o=r('<h1 id="nushell-operator-map" tabindex="-1"><a class="header-anchor" href="#nushell-operator-map" aria-hidden="true">#</a> Nushell operator map</h1><p>The idea behind this table is to help you understand how Nu operators relate to other language operators. We&#39;ve tried to produce a map of all the nushell operators and what their equivalents are in other languages. Contributions are welcome.</p><p>Note: this table assumes Nu 0.14.1 or later.</p><table><thead><tr><th>Nushell</th><th>SQL</th><th>Python</th><th>.NET LINQ (C#)</th><th>PowerShell</th><th>Bash</th></tr></thead><tbody><tr><td>==</td><td>=</td><td>==</td><td>==</td><td>-eq, -is</td><td>-eq</td></tr><tr><td>!=</td><td>!=, &lt;&gt;</td><td>!=</td><td>!=</td><td>-ne, -isnot</td><td>-ne</td></tr><tr><td>&lt;</td><td>&lt;</td><td>&lt;</td><td>&lt;</td><td>-lt</td><td>-lt</td></tr><tr><td>&lt;=</td><td>&lt;=</td><td>&lt;=</td><td>&lt;=</td><td>-le</td><td>-le</td></tr><tr><td>&gt;</td><td>&gt;</td><td>&gt;</td><td>&gt;</td><td>-gt</td><td>-gt</td></tr><tr><td>&gt;=</td><td>&gt;=</td><td>&gt;=</td><td>&gt;=</td><td>-ge</td><td>-ge</td></tr><tr><td>=~</td><td>like</td><td>re, in, startswith</td><td>Contains, StartsWith</td><td>-like, -contains</td><td>=~</td></tr><tr><td>!~</td><td>not like</td><td>not in</td><td>Except</td><td>-notlike, -notcontains</td><td>! &quot;str1&quot; =~ &quot;str2&quot;</td></tr><tr><td>+</td><td>+</td><td>+</td><td>+</td><td>+</td><td>+</td></tr><tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>*</td><td>*</td><td>*</td><td>*</td><td>*</td><td>*</td></tr><tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td></tr><tr><td>**</td><td>pow</td><td>**</td><td>Power</td><td>Pow</td><td>**</td></tr><tr><td>in</td><td>in</td><td>re, in, startswith</td><td>Contains, StartsWith</td><td>-In</td><td>case in</td></tr><tr><td>not-in</td><td>not in</td><td>not in</td><td>Except</td><td>-NotIn</td><td></td></tr><tr><td>&amp;&amp;</td><td>and</td><td>and</td><td>&amp;&amp;</td><td>-And, &amp;&amp;</td><td>-a, &amp;&amp;</td></tr><tr><td>||</td><td>or</td><td>or</td><td>||</td><td>-Or, ||</td><td>-o, ||</td></tr></tbody></table>',4),n=[o];function l(s,h){return d(),e("div",null,n)}const p=t(a,[["render",l],["__file","nushell_operator_map.html.vue"]]);export{p as default};
