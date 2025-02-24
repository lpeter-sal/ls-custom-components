import{j as v}from"./jsx-runtime-D_zvdyIk.js";const C=({label:o,size:g="normal",allCaps:h=!1,color:x,fontColor:L})=>v.jsx("span",{className:`${g} ${x}`,style:{color:L},children:h?o.toUpperCase():o});C.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Label to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Size of the label",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Whether to display the label in all caps",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Color of the label"},fontColor:{required:!1,tsType:{name:"string"},description:"Font color of the label"}}};const T={title:"UI/labels/MyLabel",component:C,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic Label"}},a={args:{label:"All Caps Label",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},l={args:{label:"Custom Color Label",fontColor:"#ff0"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    allCaps: true
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'text-secondary'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,y,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    fontColor: '#ff0'
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const q=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,q as __namedExportsOrder,T as default};
