import{_ as l,p as d,o as a,c as s,a as e,F as i,f as m,d as _,t as o}from"../app.84cb432e.mjs";const u={computed:{commands(){return d.filter(t=>t.path.indexOf("/book/commands/")>=0).sort((t,r)=>t.title>r.title?1:r.title>t.title?-1:0)}}},h=e("h1",{id:"command-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#command-reference","aria-hidden":"true"},"#"),_(" Command Reference")],-1),f=e("tr",null,[e("th",null,"Command"),e("th",null,"Beschreibung")],-1),p=["href"],x={style:{"white-space":"pre-wrap"}};function g(t,r,B,b,k,c){return a(),s("div",null,[h,e("table",null,[f,(a(!0),s(i,null,m(c.commands,n=>(a(),s("tr",null,[e("td",null,[e("a",{href:n.path},[e("code",null,o(n.title),1)],8,p)]),e("td",x,o(n.frontmatter.usage),1)]))),256))])])}const v=l(u,[["render",g],["__file","command_reference.html.vue"]]);export{v as default};
