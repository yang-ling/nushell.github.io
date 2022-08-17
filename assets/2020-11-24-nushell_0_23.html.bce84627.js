import{_ as s,o as a,c as r,a as e,b as n,d as t,e as i,r as l}from"./app.17282d37.js";var h="/assets/0_23_website.ae1f211c.png";const d={},c=e("h1",{id:"nushell-0-23",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-23","aria-hidden":"true"},"#"),t(" Nushell 0.23")],-1),u=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),_=e("p",null,"Today, we're releasing 0.23 of Nu. In this version, we continue improving the commands, release a new website, and talk about some of the experiments that will be making their way into Nu in future versions.",-1),p=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),f=t("Nu 0.23 is available as "),m={href:"https://github.com/nushell/nushell/releases/tag/0.23.0",target:"_blank",rel:"noopener noreferrer"},b=t("pre-built binaries"),w=t(" or from "),g={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},v=t("crates.io"),k=t(". If you have Rust installed you can install it using "),y=e("code",null,"cargo install nu",-1),N=t("."),x=i('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="new-website-ibraheemdev" tabindex="-1"><a class="header-anchor" href="#new-website-ibraheemdev" aria-hidden="true">#</a> New website (ibraheemdev)</h2><p><img src="'+h+'" alt="picture of the new Nushell website"></p><p><em>The new website</em></p>',6),j=t("We've just put up the first version of a new website that combines the front site with the books and docs all in one place. We're still continuing to polish this, so if you'd like to help out, come by the "),I={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},T=t("discord"),B=t(" and say hello!"),W=e("h2",{id:"breaking-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),t(" Breaking changes")],-1),A=e("p",null,[t("The "),e("code",null,"from json"),t(" command used to preserve the order of fields. Unfortunately, unsafe behaviors in one of the dependencies we used for this were recently found and we've had to (perhaps temporarily) remove the order preservation. We'd happily accept PRs that re-enabled this functionality.")],-1),L=e("h2",{id:"improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#improvements","aria-hidden":"true"},"#"),t(" Improvements")],-1),S=e("li",null,"Better table alignments (fdncred)",-1),V=e("li",null,[e("code",null,"seq"),t(" now can do date ranges as well (fdncred)")],-1),E=e("li",null,"More refactoring towards script support (jonathandturner)",-1),C=e("li",null,"Some doc naming has been cleaned up (LhKipp)",-1),G=t("Lots of "),R={href:"https://github.com/nushell/nushell/pull/2742",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"path",-1),K=t(" fixes and improvements"),M=t(" have now landed (kubouch)"),P=t("Build artifacts are "),U={href:"https://github.com/nushell/nushell/pull/2747",target:"_blank",rel:"noopener noreferrer"},z=t("now smaller"),D=t(" (fdncred)"),F=e("li",null,"Some broken docs links have been fixed (naufraghi)",-1),H=e("li",null,[t("A new "),e("code",null,"random decimal"),t(" command (smaydew)")],-1),J=e("li",null,[t("Some "),e("code",null,"str substring"),t(" fixes (andrasio)")],-1),O=e("h1",{id:"looking-forward",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),t(" Looking forward")],-1),Q=t("We've been splitting our efforts between the website, Nushell, and two new side projects that will feed into Nushell in the future: "),X={href:"https://github.com/jonathandturner/nunu/",target:"_blank",rel:"noopener noreferrer"},Y=t("nunu"),Z=t(" and "),$={href:"https://github.com/jonathandturner/nunu2",target:"_blank",rel:"noopener noreferrer"},ee=t("nunu2"),te=t(". The first is investigating some parser improvements we could do in Nushell to better support scripts and more in the future. The second experiments with variables, blocks, and evaluation. Combined, they should some signs of what we hope will be available in Nu in the weeks to come."),oe=t("As always, if you see somewhere you'd like to help or just want to chat, come by the "),ne={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},se=t("discord"),ae=t(" and say hi!");function re(ie,le){const o=l("ExternalLinkIcon");return a(),r("div",null,[c,u,_,p,e("p",null,[f,e("a",m,[b,n(o)]),w,e("a",g,[v,n(o)]),k,y,N]),x,e("p",null,[j,e("a",I,[T,n(o)]),B]),W,A,L,e("ul",null,[S,V,E,C,e("li",null,[G,e("a",R,[q,K,n(o)]),M]),e("li",null,[P,e("a",U,[z,n(o)]),D]),F,H,J]),O,e("p",null,[Q,e("a",X,[Y,n(o)]),Z,e("a",$,[ee,n(o)]),te]),e("p",null,[oe,e("a",ne,[se,n(o)]),ae])])}var de=s(d,[["render",re],["__file","2020-11-24-nushell_0_23.html.vue"]]);export{de as default};
