const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BI1Biiay.js","assets/index-Cs7sjTYM.js","assets/_commonjsHelpers-BosuxZz1.js"])))=>i.map(i=>d[i]);
import{_ as m}from"./iframe-D9LxZaQA.js";import{R as t,r as p}from"./index-Cs7sjTYM.js";import{r as u,u as h}from"./react-18-B8QpLNLP.js";import{ag as l,ah as d,ai as E,aj as x}from"./index-B2IZv04_.js";var D={code:l,a:d,...E},_=class extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:t.createElement(t.Fragment,null,e)}},w=class{constructor(){this.render=async(r,e,n)=>{let s={...D,...e==null?void 0:e.components},a=x;return new Promise((c,i)=>{m(async()=>{const{MDXProvider:o}=await import("./index-BI1Biiay.js");return{MDXProvider:o}},__vite__mapDeps([0,1,2])).then(({MDXProvider:o})=>u(t.createElement(_,{showException:i,key:Math.random()},t.createElement(o,{components:s},t.createElement(a,{context:r,docsParameter:e}))),n)).then(()=>c())})},this.unmount=r=>{h(r)}}};export{w as D,D as d};