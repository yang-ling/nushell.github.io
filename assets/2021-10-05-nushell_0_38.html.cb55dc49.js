import{_ as s,o as l,c as r,a as t,b as n,d as e,e as h,r as i}from"../app.84cb432e.mjs";const a={},_=t("h1",{id:"nushell-0-38",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-38","aria-hidden":"true"},"#"),e(" Nushell 0.38")],-1),d=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),c=t("p",null,"Today, we're releasing 0.38 of Nu. This release includes polish to the user interface, improvements to how columns are passed, lots of bug fixes, and updates on the upcoming engine.",-1),u=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),p=e("Nu 0.38 is available as "),g={href:"https://github.com/nushell/nushell/releases/tag/0.38.0",target:"_blank",rel:"noopener noreferrer"},m=e("pre-built binaries"),f=e(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=e("crates.io"),k=e(". If you have Rust installed you can install it using "),y=t("code",null,"cargo install nu",-1),x=e("."),v=h('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="quickly-jump-to-a-shell-tw4452852" tabindex="-1"><a class="header-anchor" href="#quickly-jump-to-a-shell-tw4452852" aria-hidden="true">#</a> Quickly jump to a shell (tw4452852)</h2><p>If you&#39;ve used shells, you&#39;ve no doubt used the <code>n</code> and <code>p</code> commands to quickly jump between them. This can be a big time saver when you&#39;re working in multiple directories.</p><p>In this release, we&#39;ve added a <code>g</code> command that helps you quickly jump to a particular shell. This helps in the cases where you end up with more than two shells open and you already know what shell you want to jump to.</p><h2 id="additional-improvements" tabindex="-1"><a class="header-anchor" href="#additional-improvements" aria-hidden="true">#</a> Additional improvements</h2>',7),N=e("Improvements in "),q={href:"https://github.com/nushell/nushell/pull/4027",target:"_blank",rel:"noopener noreferrer"},I=e("updated table cell values"),j=e(" (andrasio)"),T=t("code",null,"update cells",-1),F=e(" command now "),W={href:"https://github.com/nushell/nushell/pull/4039",target:"_blank",rel:"noopener noreferrer"},E=e("can take a list of columns"),A=e(" (ArtoLord)"),C=e("You can now also "),L={href:"https://github.com/nushell/nushell/pull/4062",target:"_blank",rel:"noopener noreferrer"},V=e("pass a list of columns to "),B=t("code",null,"select",-1),M=e(" (JoshCheek)"),R=e("Improvements in "),U={href:"https://github.com/nushell/nushell/pull/4036",target:"_blank",rel:"noopener noreferrer"},S=e("how html table scraping works"),Y=e(" and "),z={href:"https://github.com/nushell/nushell/pull/4043",target:"_blank",rel:"noopener noreferrer"},D=e("also"),J=e(" (luccasmmg)"),K=e("Fix to "),O={href:"https://github.com/nushell/nushell/pull/4037",target:"_blank",rel:"noopener noreferrer"},P=e("compiling on nightly"),Q=e(" (gilescope)"),G=e("Removed "),H={href:"https://github.com/nushell/nushell/pull/4038",target:"_blank",rel:"noopener noreferrer"},X=e("unused deps"),Z=e(" (gilescope)"),$=e("Completions now "),ee={href:"https://github.com/nushell/nushell/pull/4023",target:"_blank",rel:"noopener noreferrer"},te=e("can complete inside of an argument"),oe=e(" (tw4452852)"),ne=e("We now "),se={href:"https://github.com/nushell/nushell/pull/4052",target:"_blank",rel:"noopener noreferrer"},le=e("expand tilde when reading plugin directories"),re=e(" (hedonihilist)"),he=e("We also "),ie={href:"https://github.com/nushell/nushell/pull/4058",target:"_blank",rel:"noopener noreferrer"},ae=e("turn off ansi colors when not in a TTY"),_e=e("Fixed some of the "),de={href:"https://github.com/nushell/nushell/pull/4061",target:"_blank",rel:"noopener noreferrer"},ce=e("wasm deps"),ue=e(" (jt)"),pe=e("Fixed a "),ge={href:"https://github.com/nushell/nushell/pull/4022",target:"_blank",rel:"noopener noreferrer"},me=e("leak of a "),fe=t("code",null,"let",-1),be=e("-binding"),we=e(" (Pantonshire)"),ke=e("Use "),ye={href:"https://github.com/nushell/nushell/pull/4021",target:"_blank",rel:"noopener noreferrer"},xe=e("SIMD-enabled compiler flags"),ve=e(" (aminya)"),Ne=e("Updated polars "),qe={href:"https://github.com/nushell/nushell/pull/4013",target:"_blank",rel:"noopener noreferrer"},Ie=e("dependency to 0.16"),je=e(" (elferherrera)"),Te=e("Updates to how "),Fe={href:"https://github.com/nushell/nushell/pull/4008",target:"_blank",rel:"noopener noreferrer"},We=t("code",null,"path join",-1),Ee=e(" works"),Ae=e(" (kubouch)"),Ce=e("Moved "),Le=t("code",null,"nu-path",-1),Ve=e(" tests into "),Be={href:"https://github.com/nushell/nushell/pull/4015",target:"_blank",rel:"noopener noreferrer"},Me=e("integration tests"),Re=e(" (kubouch)"),Ue=e("New support for "),Se={href:"https://github.com/nushell/nushell/pull/4048",target:"_blank",rel:"noopener noreferrer"},Ye=e("converting to column paths"),ze=e(" (fdncred)"),De=e("Cleanup "),Je={href:"https://github.com/nushell/nushell/pull/4029",target:"_blank",rel:"noopener noreferrer"},Ke=e("fixes to make tests more resilient"),Oe=e(" (kubouch)"),Pe=e("Internal improvement "),Qe={href:"https://github.com/nushell/nushell/pull/4031",target:"_blank",rel:"noopener noreferrer"},Ge=e("to make working with spans easier"),He=e(" (elferherrera)"),Xe=e("Fix to "),Ze={href:"https://github.com/nushell/nushell/pull/4033",target:"_blank",rel:"noopener noreferrer"},$e=e("gitpod"),et=e(" (Merith-TK)"),tt=e("Fix to "),ot={href:"https://github.com/nushell/nushell/pull/4034",target:"_blank",rel:"noopener noreferrer"},nt=e("big int handling in "),st=t("code",null,"to",-1),lt=e(" (pjmore)"),rt=e("Fixed a "),ht={href:"https://github.com/nushell/nushell/pull/4040",target:"_blank",rel:"noopener noreferrer"},it=e("typo"),at=e(" (lildata)"),_t=e("Fixed "),dt={href:"https://github.com/nushell/nushell/pull/4051",target:"_blank",rel:"noopener noreferrer"},ct=e("some typos in the tutor"),ut=e(" (hojjatabdollahi)"),pt=e("Removed "),gt={href:"https://github.com/nushell/nushell/pull/4063",target:"_blank",rel:"noopener noreferrer"},mt=e("the experimental scrolling support as it had broken"),ft=t("h2",{id:"engine-q",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#engine-q","aria-hidden":"true"},"#"),e(" Engine-q")],-1),bt=t("p",null,[e("Engine-q continues to grow to become the upcoming engine for Nushell. Over the last three weeks, it gained basic filesystem support, improved completions, lots of new internal commands including "),t("code",null,"select"),e(", "),t("code",null,"ps"),e(", "),t("code",null,"sys"),e(", and more.")],-1),wt=e("We've also added a full module system, a new error reporter using "),kt={href:"https://github.com/zkat/miette",target:"_blank",rel:"noopener noreferrer"},yt=e("miette"),xt=e(", and support for externals."),vt=t("p",null,"It's grown to the stage that some of us are starting to dogfood using engine-q as our shell.",-1),Nt=t("h1",{id:"looking-ahead",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),e(" Looking ahead")],-1),qt=t("p",null,"For the next few months, as engine-q matures, we'll be contributing to both Nushell and engine-q. This will help Nushell continue to grow and help support users of Nushell. We'll also use the knowledge we get from support Nushell in how we design these last pieces of engine-q.",-1),It=t("p",null,"As it grows, we'll make a way to help us test engine-q until we're confident it's ready to be moved into place.",-1);function jt(Tt,Ft){const o=i("ExternalLinkIcon");return l(),r("div",null,[_,d,c,u,t("p",null,[p,t("a",g,[m,n(o)]),f,t("a",b,[w,n(o)]),k,y,x]),v,t("ul",null,[t("li",null,[N,t("a",q,[I,n(o)]),j]),t("li",null,[T,F,t("a",W,[E,n(o)]),A]),t("li",null,[C,t("a",L,[V,B,n(o)]),M]),t("li",null,[R,t("a",U,[S,n(o)]),Y,t("a",z,[D,n(o)]),J]),t("li",null,[K,t("a",O,[P,n(o)]),Q]),t("li",null,[G,t("a",H,[X,n(o)]),Z]),t("li",null,[$,t("a",ee,[te,n(o)]),oe]),t("li",null,[ne,t("a",se,[le,n(o)]),re]),t("li",null,[he,t("a",ie,[ae,n(o)])]),t("li",null,[_e,t("a",de,[ce,n(o)]),ue]),t("li",null,[pe,t("a",ge,[me,fe,be,n(o)]),we]),t("li",null,[ke,t("a",ye,[xe,n(o)]),ve]),t("li",null,[Ne,t("a",qe,[Ie,n(o)]),je]),t("li",null,[Te,t("a",Fe,[We,Ee,n(o)]),Ae]),t("li",null,[Ce,Le,Ve,t("a",Be,[Me,n(o)]),Re]),t("li",null,[Ue,t("a",Se,[Ye,n(o)]),ze]),t("li",null,[De,t("a",Je,[Ke,n(o)]),Oe]),t("li",null,[Pe,t("a",Qe,[Ge,n(o)]),He]),t("li",null,[Xe,t("a",Ze,[$e,n(o)]),et]),t("li",null,[tt,t("a",ot,[nt,st,n(o)]),lt]),t("li",null,[rt,t("a",ht,[it,n(o)]),at]),t("li",null,[_t,t("a",dt,[ct,n(o)]),ut]),t("li",null,[pt,t("a",gt,[mt,n(o)])])]),ft,bt,t("p",null,[wt,t("a",kt,[yt,n(o)]),xt]),vt,Nt,qt,It])}const Et=s(a,[["render",jt],["__file","2021-10-05-nushell_0_38.html.vue"]]);export{Et as default};
