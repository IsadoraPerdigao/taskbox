import{r as E}from"./index-f1f749bf.js";import{p as o}from"./index-4d501b15.js";var p={},N={get exports(){return p},set exports(e){p=e}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=E,O=Symbol.for("react.element"),D=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,j=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function A(e,s,a){var t,n={},d=null,k=null;a!==void 0&&(d=""+a),s.key!==void 0&&(d=""+s.key),s.ref!==void 0&&(k=s.ref);for(t in s)I.call(s,t)&&!P.hasOwnProperty(t)&&(n[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps,s)n[t]===void 0&&(n[t]=s[t]);return{$$typeof:O,type:e,key:d,ref:k,props:n,_owner:j.current}}u.Fragment=D;u.jsx=A;u.jsxs=A;(function(e){e.exports=u})(N);const c=p.jsx,_=p.jsxs;function m({task:{id:e,title:s,state:a},onArchiveTask:t,onPinTask:n}){return _("div",{className:`list-item ${a}`,children:[_("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[c("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:a==="TASK_ARCHIVED"}),c("span",{className:"checkbox-custom",onClick:()=>t(e)})]}),c("label",{htmlFor:"title","aria-label":s,className:"title",children:c("input",{type:"text",value:s,readOnly:!0,name:"title",placeholder:"Input title"})}),a!=="TASK_ARCHIVED"&&c("button",{className:"pin-button",onClick:()=>n(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:c("span",{className:"icon-star"})},`pinTask-${e}`)]})}m.PropTypes={task:o.shape({id:o.string.isRequired,title:o.string.isRequired,state:o.string.isRequired}),onArchiveTask:o.func,onPinTask:o.func};m.__docgenInfo={description:"",methods:[],displayName:"Task"};const $={component:m,title:"Task",tags:["autodocs"]},r={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},i={args:{task:{...r.args.task,state:"TASK_PINNED"}}},l={args:{task:{...r.args.task,state:"TASK_ARCHIVED"}}};var T,f,h;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,x,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,S,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(v=(S=l.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const C=["Default","Pinned","Archived"],w=Object.freeze(Object.defineProperty({__proto__:null,Archived:l,Default:r,Pinned:i,__namedExportsOrder:C,default:$},Symbol.toStringTag,{value:"Module"}));export{r as D,m as T,_ as a,w as b,c as j};
//# sourceMappingURL=Task.stories-f69827df.js.map
