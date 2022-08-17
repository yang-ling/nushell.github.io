import{_ as t,o as d,c as e,e as r}from"./app.17282d37.js";const a={},o=r('<h1 id="mapa-de-operadores-en-nushell" tabindex="-1"><a class="header-anchor" href="#mapa-de-operadores-en-nushell" aria-hidden="true">#</a> Mapa de operadores en Nushell</h1><p>La idea detr\xE1s de esta tabla is ayudarte a entender como los operadores en Nu se relacionan con operadores de otros lenguajes. Hemos intentado producir un mapa de los operadores y sus equivalentes en otros lenguajes. Contribuciones son bienvenidas.</p><p>Nota: esta tabla asume Nu 0.14.1 o posterior.</p><table><thead><tr><th>Nushell</th><th>SQL</th><th>Python</th><th>.Net LINQ (C#)</th><th>PowerShell</th><th>Bash</th></tr></thead><tbody><tr><td>=</td><td>=</td><td>==</td><td>==</td><td>-eq, -is</td><td>-eq</td></tr><tr><td>!=</td><td>!=, &lt;&gt;</td><td>!=</td><td>!=</td><td>-ne, -isnot</td><td>-ne</td></tr><tr><td>&lt;</td><td>&lt;</td><td>&lt;</td><td>&lt;</td><td>-lt</td><td>-lt</td></tr><tr><td>&lt;=</td><td>&lt;=</td><td>&lt;=</td><td>&lt;=</td><td>-le</td><td>-le</td></tr><tr><td>&gt;</td><td>&gt;</td><td>&gt;</td><td>&gt;</td><td>-gt</td><td>-gt</td></tr><tr><td>&gt;=</td><td>&gt;=</td><td>&gt;=</td><td>&gt;=</td><td>-ge</td><td>-ge</td></tr><tr><td>=~</td><td>like</td><td>re, in, startswith</td><td>Contains, StartsWith</td><td>-like, -contains</td><td>=~</td></tr><tr><td>!~</td><td>not like</td><td>not in</td><td>Except</td><td>-notlike, -notcontains</td><td>! &quot;str1&quot; =~ &quot;str2&quot;</td></tr><tr><td>+</td><td>+</td><td>+</td><td>+</td><td>+</td><td>+</td></tr><tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>*</td><td>*</td><td>*</td><td>*</td><td>*</td><td>*</td></tr><tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td></tr><tr><td>in</td><td>in</td><td>re, in, startswith</td><td>Contains, StartsWith</td><td>-In</td><td>case in</td></tr><tr><td>not-in</td><td>not in</td><td>not in</td><td>Except</td><td>-NotIn</td><td></td></tr><tr><td>&amp;&amp;</td><td>and</td><td>and</td><td>&amp;&amp;</td><td>-And</td><td>-a, &amp;&amp;</td></tr><tr><td>||</td><td>or</td><td>or</td><td>||</td><td>-Or</td><td>-o, ||</td></tr></tbody></table>',4),n=[o];function s(l,i){return d(),e("div",null,n)}var p=t(a,[["render",s],["__file","mapa_operador_nushell.html.vue"]]);export{p as default};
