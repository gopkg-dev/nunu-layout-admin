import{C}from"./index-sUMRYBhU.js";import{d as r,aC as Y,a9 as M,aa as N,K as V,T as S,ab as $}from"./antd-vtmm7CAy.js";import{_ as j}from"./index-C-JhWVfG.js";import{f,s as A,o as z,j as H,a2 as k,a9 as q,aa as l,a4 as a,k as o,u as K,a3 as F,F as B,aj as T,af as I,ad as u}from"./vue-Dl1fzmsf.js";import"./vec2-4Cx-bOHg.js";const O={class:"salesCard"},U={class:"salesExtraWrap"},W={class:"salesBar"},G={class:"salesRank"},J={class:"rankingList"},Q=["title"],X={class:"rankingItemValue"},Z={class:"salesBar"},ee={class:"salesRank"},ae={class:"rankingList"},te=["title"],se={class:"rankingItemValue"},ne={__name:"sales-card",props:{loading:{type:Boolean,default:!1}},setup(L){const y=[];for(let t=0;t<7;t+=1)y.push({title:`工专路 ${t} 号店`,total:323234});const d=f();function p(t){const e=new Date;let n,s;switch(t){case"day":d.value=[r(new Date(e.getFullYear(),e.getMonth(),e.getDate())),r(new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999))];break;case"week":n=new Date(e.setDate(e.getDate()-e.getDay())),s=new Date(e.setDate(e.getDate()+6)),d.value=[r(n),r(s)];break;case"month":n=new Date(e.getFullYear(),e.getMonth(),1),s=new Date(e.getFullYear(),e.getMonth()+1,0),d.value=[r(n),r(s)];break;case"year":n=new Date(e.getFullYear(),0,1),s=new Date(e.getFullYear(),11,31),d.value=[r(n),r(s)];break;default:return null}}p("day");function _(t){var e,n,s;(n=(e=t.target)==null?void 0:e.parentElement)==null||n.querySelectorAll("a").forEach(m=>{m.classList.remove("currentDate")}),(s=t.target)==null||s.classList.add("currentDate"),p(t.target.__vnode.key)}function x(t){return t.toLocaleString()}const h=[{x:"1月",y:809},{x:"2月",y:766},{x:"3月",y:585},{x:"4月",y:763},{x:"5月",y:853},{x:"6月",y:898},{x:"7月",y:1096},{x:"8月",y:452},{x:"9月",y:244},{x:"10月",y:838},{x:"11月",y:673},{x:"12月",y:431}],v=f(),D=f();let b=!1;function R(t){t==="views"&&!b&&setTimeout(()=>{new C(D.value,{data:h,xField:"x",yField:"y",height:300,xAxis:{label:{autoHide:!0,autoRotate:!1}},meta:{y:{alias:"销售量"}}}).render(),b=!0})}const g=A();return z(()=>{var t;g.value=new C(v.value,{data:h,xField:"x",yField:"y",height:300,xAxis:{label:{autoHide:!0,autoRotate:!1}},meta:{y:{alias:"销售量"}}}),(t=g.value)==null||t.render()}),H(()=>{var t;(t=g.value)==null||t.destroy(),g.value=void 0}),(t,e)=>{const n=Y,s=M,m=N,w=V,E=S,P=$;return k(),q(P,{loading:L.loading,bordered:!1,"body-style":{padding:0}},{default:l(()=>[a("div",O,[o(E,{size:"large","tab-bar-style":{marginBottom:"24px"},onChange:R},{rightExtra:l(()=>[a("div",U,[a("div",{class:"salesExtra"},[a("a",{key:"day",class:"currentDate",onClick:_},"今日"),a("a",{key:"week",onClick:_},"本周"),a("a",{key:"month",onClick:_},"本月"),a("a",{key:"year",onClick:_},"本年")]),o(n,{value:K(d),style:{width:"256px"}},null,8,["value"])])]),default:l(()=>[o(w,{key:"sales",tab:"销售额"},{default:l(()=>[o(m,null,{default:l(()=>[o(s,{xl:16,lg:12,md:12,sm:24,xs:24},{default:l(()=>[a("div",W,[a("div",{ref_key:"columnPlotContainer1",ref:v},null,512)])]),_:1}),o(s,{xl:8,lg:12,md:12,sm:24,xs:24},{default:l(()=>[a("div",G,[e[0]||(e[0]=a("h4",{class:"rankingTitle"}," 门店销售额排名 ",-1)),a("ul",J,[(k(),F(B,null,T(y,(i,c)=>a("li",{key:c},[a("span",{class:I(`rankingItemNumber ${c<3?"active":""}`)},u(c+1),3),a("span",{class:"rankingItemTitle",title:i.title},u(i.title),9,Q),a("span",X,u(x(i.total)),1)])),64))])])]),_:1})]),_:1})]),_:1}),o(w,{key:"views",tab:"访问量"},{default:l(()=>[o(m,null,{default:l(()=>[o(s,{xl:16,lg:12,md:12,sm:24,xs:24},{default:l(()=>[a("div",Z,[a("div",{ref_key:"columnPlotContainer2",ref:D},null,512)])]),_:1}),o(s,{xl:8,lg:12,md:12,sm:24,xs:24},{default:l(()=>[a("div",ee,[e[1]||(e[1]=a("h4",{class:"rankingTitle"}," 门店访问量排名 ",-1)),a("ul",ae,[(k(),F(B,null,T(y,(i,c)=>a("li",{key:c},[a("span",{class:I(`rankingItemNumber ${c<3?"active":""}`)},u(c+1),3),a("span",{class:"rankingItemTitle",title:i.title},u(i.title),9,te),a("span",se,u(x(i.total)),1)])),64))])])]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["loading"])}}},ue=j(ne,[["__scopeId","data-v-88fc954a"]]);export{ue as default};
