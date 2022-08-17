import{_ as s,o as r,c as l,a as t,b as n,d as e,e as h,r as a}from"./app.17282d37.js";const i={},d=t("h1",{id:"nushell-0-26",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-26","aria-hidden":"true"},"#"),e(" Nushell 0.26")],-1),c=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),_=t("p",null,"Today, we're releasing 0.26 of Nu. It's a polish release with lots of improvements.",-1),u=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),p=e("Nu 0.26 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.26.0",target:"_blank",rel:"noopener noreferrer"},m=e("pre-built binaries"),g=e(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},k=e("crates.io"),w=e(". If you have Rust installed you can install it using "),v=t("code",null,"cargo install nu",-1),y=e("."),x=h(`<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="rest-support-in-custom-commands-lhkipp-jonathandturner" tabindex="-1"><a class="header-anchor" href="#rest-support-in-custom-commands-lhkipp-jonathandturner" aria-hidden="true">#</a> Rest support in custom commands (LhKipp, jonathandturner)</h2><p>You can now refer to a rest argument in your custom command:</p><div class="language-text ext-text"><pre class="language-text"><code>def my-cmd[...rest:int] {
    echo $rest | math sum
}
</code></pre></div><p>Elements of the rest are referred to with positions, like <code>$rest.1</code> for the 2nd position.</p><h2 id="short-flags-in-custom-commands-lhkipp" tabindex="-1"><a class="header-anchor" href="#short-flags-in-custom-commands-lhkipp" aria-hidden="true">#</a> Short flags in custom commands (LhKipp)</h2><p>You can now also added an optional shorthand flag to longhand flags:</p><div class="language-text ext-text"><pre class="language-text"><code>def foo [--bar(-b): int] {
    echo $bar
}

foo -b 10
foo --bar 10
</code></pre></div><h2 id="improved-build-times-jonathandturner-stormasm" tabindex="-1"><a class="header-anchor" href="#improved-build-times-jonathandturner-stormasm" aria-hidden="true">#</a> Improved build times (jonathandturner, stormasm)</h2><p>When building from scratch, you may now notice that Nushell builds slightly faster. This comes from refactoring large crates into smaller crates and replacing some of our support crates with similar crates that compile faster.</p><h2 id="improvements" tabindex="-1"><a class="header-anchor" href="#improvements" aria-hidden="true">#</a> Improvements</h2><p>I hope you like improvements. We got a <em>lot</em> of them this release.</p>`,14),N=e("fdcnred added support for using "),I={href:"https://github.com/nushell/nushell/pull/2973",target:"_blank",rel:"noopener noreferrer"},j=e("multi-byte chars as padding"),L=e(", improved "),T={href:"https://github.com/nushell/nushell/pull/2955",target:"_blank",rel:"noopener noreferrer"},W=e("ansi and char support"),P=e(", improved the output of "),B={href:"https://github.com/nushell/nushell/pull/2959",target:"_blank",rel:"noopener noreferrer"},E=t("code",null,"sys",-1),G=e(", optimized some "),V={href:"https://github.com/nushell/nushell/pull/2937",target:"_blank",rel:"noopener noreferrer"},K=e("regex usage"),$=e(", removed "),A={href:"https://github.com/nushell/nushell/pull/2924",target:"_blank",rel:"noopener noreferrer"},C=t("code",null,"set",-1),R=e(" from Windows built-ins"),S=e(", added support for "),Y={href:"https://github.com/nushell/nushell/pull/2906",target:"_blank",rel:"noopener noreferrer"},z=e("comparing a string and a filepath"),D=e("JosephTLyons removed "),F={href:"https://github.com/nushell/nushell/pull/2970",target:"_blank",rel:"noopener noreferrer"},J=e("unnecessary clones"),q=e(" and "),H={href:"https://github.com/nushell/nushell/pull/2969",target:"_blank",rel:"noopener noreferrer"},M=e("fixed some test macros"),O=e("andrasio added "),Q={href:"https://github.com/nushell/nushell/pull/2965",target:"_blank",rel:"noopener noreferrer"},U=e("column path support to many "),X=t("code",null,"str",-1),Z=e(" commands"),ee=e("jonathandturner added "),te={href:"https://github.com/nushell/nushell/pull/2964",target:"_blank",rel:"noopener noreferrer"},oe=e("error checking for bad rows in column paths"),ne=e(", added "),se={href:"https://github.com/nushell/nushell/pull/2952",target:"_blank",rel:"noopener noreferrer"},re=e("proper flushing of stdout"),le=e(", split "),he={href:"https://github.com/nushell/nushell/pull/2898",target:"_blank",rel:"noopener noreferrer"},ae=e("nu-cli and nu-engine"),ie=e(", treat "),de={href:"https://github.com/nushell/nushell/pull/2890",target:"_blank",rel:"noopener noreferrer"},ce=e("the startup commands a single script"),_e=e(" which improves startup times, fixed "),ue={href:"https://github.com/nushell/nushell/pull/2893",target:"_blank",rel:"noopener noreferrer"},pe=e("reading/writing of bigint/bigdecimal"),fe=e("baoyachi updated "),me={href:"https://github.com/nushell/nushell/pull/2963",target:"_blank",rel:"noopener noreferrer"},ge=e("shadow-rs support"),be=e(", removed some of the "),ke={href:"https://github.com/nushell/nushell/pull/2935",target:"_blank",rel:"noopener noreferrer"},we=e("git support that was no longer needed"),ve=e("kubouch added the "),ye={href:"https://github.com/nushell/nushell/pull/2953",target:"_blank",rel:"noopener noreferrer"},xe=e("--skip flag to "),Ne=t("code",null,"nth",-1),Ie=e("ahkrr fixed "),je={href:"https://github.com/nushell/nushell/pull/2951",target:"_blank",rel:"noopener noreferrer"},Le=e("variable scopes for "),Te=t("code",null,"def",-1),We=e(" parameters"),Pe=e("brightly-salty "),Be={href:"https://github.com/nushell/nushell/pull/2949",target:"_blank",rel:"noopener noreferrer"},Ee=e("replaces the dirs/directories supporting crates"),Ge=e("jankeronmes fixed "),Ve={href:"https://github.com/nushell/nushell/pull/2948",target:"_blank",rel:"noopener noreferrer"},Ke=e("Gitpod tests"),$e=e("LhKipp fixed a "),Ae={href:"https://github.com/nushell/nushell/pull/2945",target:"_blank",rel:"noopener noreferrer"},Ce=e("parser bug that prevented invocations and ranges from being parsed correctly"),Re=e(", added "),Se={href:"https://github.com/nushell/nushell/pull/2939",target:"_blank",rel:"noopener noreferrer"},Ye=t("code",null,"def",-1),ze=e(" documentation"),De=e(", updated "),Fe={href:"https://github.com/nushell/nushell/pull/2925",target:"_blank",rel:"noopener noreferrer"},Je=t("code",null,"alias",-1),qe=e(" docs"),He=e("DivineGod moved "),Me={href:"https://github.com/nushell/nushell/pull/2927",target:"_blank",rel:"noopener noreferrer"},Oe=e("keybinding_path to nu-data"),Qe=e("Gymea fixed the "),Ue={href:"https://github.com/nushell/nushell/pull/2924",target:"_blank",rel:"noopener noreferrer"},Xe=e("dirs dependency in nu-engine"),Ze=e(", improved the "),et={href:"https://github.com/nushell/nushell/pull/2915",target:"_blank",rel:"noopener noreferrer"},tt=t("code",null,"help",-1),ot=e(" logic when the command does not have a description"),nt=e(", fixed "),st={href:"https://github.com/nushell/nushell/pull/2894",target:"_blank",rel:"noopener noreferrer"},rt=t("code",null,"which",-1),lt=e(" output for aliases"),ht=e("gillespiecd added the support for "),at={href:"https://github.com/nushell/nushell/pull/2913",target:"_blank",rel:"noopener noreferrer"},it=e("reverse ranges"),dt=e("stormasm refactored "),ct={href:"https://github.com/nushell/nushell/pull/2910",target:"_blank",rel:"noopener noreferrer"},_t=e("nu-cli and split off commands into nu-command"),ut=e("TrevorAC99 fixed a "),pt={href:"https://github.com/nushell/nushell/pull/2880",target:"_blank",rel:"noopener noreferrer"},ft=e("rust-embed build breakage"),mt=t("h2",{id:"breaking-changes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),e(" Breaking changes")],-1),gt=t("code",null,"ps",-1),bt=e(" and "),kt=t("code",null,"sys",-1),wt=e(" are now served using a "),vt={href:"https://github.com/nushell/nushell/pull/2954",target:"_blank",rel:"noopener noreferrer"},yt=e("different supporting crate"),xt=e(". The functionality difference between the old crate and the new crate may mean a lack of fields that existed before, or different values than before (as it may be calculated differently)."),Nt=e("We removed "),It={href:"https://github.com/nushell/nushell/pull/2940",target:"_blank",rel:"noopener noreferrer"},jt=t("code",null,"str set",-1),Lt=e(". This command was one of the first of its style and has since been replaced by more general commands like "),Tt=t("code",null,"update",-1),Wt=e("."),Pt=e("Internal architecture: the Primitive case for "),Bt={href:"https://github.com/nushell/nushell/pull/2887",target:"_blank",rel:"noopener noreferrer"},Et=e("lines has been removed"),Gt=e(". Instead, use strings."),Vt=e("Internal architecture: the Path and Pattern primitives are now called "),Kt={href:"https://github.com/nushell/nushell/pull/2889",target:"_blank",rel:"noopener noreferrer"},$t=e("FilePath and GlobPattern"),At=e(" respectively."),Ct=t("h1",{id:"looking-forward",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),e(" Looking forward")],-1),Rt=t("p",null,"We've been humbled by the feedback we got on the 0.25 release and appreciate the support. Looking forward, we'll be continuing to polish the features that landed in 0.25 as we prepare for using these features in larger scripts and in custom completion logic.",-1);function St(Yt,zt){const o=a("ExternalLinkIcon");return r(),l("div",null,[d,c,_,u,t("p",null,[p,t("a",f,[m,n(o)]),g,t("a",b,[k,n(o)]),w,v,y]),x,t("ul",null,[t("li",null,[N,t("a",I,[j,n(o)]),L,t("a",T,[W,n(o)]),P,t("a",B,[E,n(o)]),G,t("a",V,[K,n(o)]),$,t("a",A,[C,R,n(o)]),S,t("a",Y,[z,n(o)])]),t("li",null,[D,t("a",F,[J,n(o)]),q,t("a",H,[M,n(o)])]),t("li",null,[O,t("a",Q,[U,X,Z,n(o)])]),t("li",null,[ee,t("a",te,[oe,n(o)]),ne,t("a",se,[re,n(o)]),le,t("a",he,[ae,n(o)]),ie,t("a",de,[ce,n(o)]),_e,t("a",ue,[pe,n(o)])]),t("li",null,[fe,t("a",me,[ge,n(o)]),be,t("a",ke,[we,n(o)])]),t("li",null,[ve,t("a",ye,[xe,Ne,n(o)])]),t("li",null,[Ie,t("a",je,[Le,Te,We,n(o)])]),t("li",null,[Pe,t("a",Be,[Ee,n(o)])]),t("li",null,[Ge,t("a",Ve,[Ke,n(o)])]),t("li",null,[$e,t("a",Ae,[Ce,n(o)]),Re,t("a",Se,[Ye,ze,n(o)]),De,t("a",Fe,[Je,qe,n(o)])]),t("li",null,[He,t("a",Me,[Oe,n(o)])]),t("li",null,[Qe,t("a",Ue,[Xe,n(o)]),Ze,t("a",et,[tt,ot,n(o)]),nt,t("a",st,[rt,lt,n(o)])]),t("li",null,[ht,t("a",at,[it,n(o)])]),t("li",null,[dt,t("a",ct,[_t,n(o)])]),t("li",null,[ut,t("a",pt,[ft,n(o)])])]),mt,t("ul",null,[t("li",null,[gt,bt,kt,wt,t("a",vt,[yt,n(o)]),xt]),t("li",null,[Nt,t("a",It,[jt,n(o)]),Lt,Tt,Wt]),t("li",null,[Pt,t("a",Bt,[Et,n(o)]),Gt]),t("li",null,[Vt,t("a",Kt,[$t,n(o)]),At])]),Ct,Rt])}var Ft=s(i,[["render",St],["__file","2021-01-26-nushell_0_26.html.vue"]]);export{Ft as default};
