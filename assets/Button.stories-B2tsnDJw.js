import{j as d}from"./jsx-runtime-BlAj40OV.js";import{I as R,r as _,c as A}from"./index-CT4_wojG.js";import{R as e,r as z}from"./index-Cs7sjTYM.js";var n=new Map;n.set("bold",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});n.set("duotone",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});n.set("fill",function(){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});n.set("light",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});n.set("thin",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});n.set("regular",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var C=function(c,B){return _(c,B,n)},F=z.forwardRef(function(r,c){return e.createElement(R,Object.assign({ref:c},r,{renderPath:C}))});F.displayName="ArrowRight";const T={title:"Form/Button",component:A,args:{children:"Send",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},size:{options:["sm","md"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},onClick:{action:"clicked"}}},t={},o={args:{variant:"secondary",children:"Create new"}},a={args:{variant:"tertiary",children:"Cancel"}},s={args:{size:"sm"}},i={args:{children:d.jsxs(d.Fragment,{children:["Próximo passo",d.jsx(F,{weight:"bold"})]})}},l={args:{disabled:!0}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var k,g,y;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,f,E;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}`,...(E=(f=a.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var L,x,j;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var S,W,b;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
  }
}`,...(b=(W=i.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var v,P,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(w=(P=l.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const I=["Primary","Secondary","Tertiary","Small","WithIcon","Disabled"],V=Object.freeze(Object.defineProperty({__proto__:null,Disabled:l,Primary:t,Secondary:o,Small:s,Tertiary:a,WithIcon:i,__namedExportsOrder:I,default:T},Symbol.toStringTag,{value:"Module"}));export{V as B,l as D,t as P,o as S,a as T,i as W,s as a};
