"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[772],{6108:(s,e,n)=>{n.d(e,{A:()=>o});var a=n(9379),i=n(2483);function o(s){if("object"!==typeof s||null===s)throw new Error("The useFormHook only accepts the initialData value as an object.");const[e,n]=(0,i.useState)(s);return[e,function(s){const{name:e,type:i,value:o}=s.target,r="checkbox"===i&&s.target instanceof HTMLInputElement?s.target.checked:void 0;n((s=>(0,a.A)((0,a.A)({},s),{},{[e]:"checkbox"===i?r:o})))}]}},1772:(s,e,n)=>{n.r(e),n.d(e,{default:()=>g});n(2483);var a=n(4666),i=n(9634),o=n(796),r=n(2617),l=n(6723);const c=s=>(0,l.jsxs)("div",{className:"signin-header",children:[(0,l.jsx)(o.vg,{size:60}),(0,l.jsx)("h3",{className:"form-label",children:"Sign in"}),(0,l.jsx)("p",{className:"-form-discription",children:"sign in with existing creadintials"}),(0,l.jsxs)(a.N_,{to:"../",className:"link back-link",children:[(0,l.jsx)("span",{className:"icon",children:(0,l.jsx)(r.N,{icon:"arrowBack"})}),(0,l.jsx)("span",{className:"label",children:"Back"})]})]}),t=s=>(0,l.jsx)(a.N_,{to:"/forgot-password",className:"forgot-password-link",children:"forgot password"}),d=s=>(0,l.jsxs)(a.N_,{to:"/signup",className:"link signup-action-link",children:[(0,l.jsx)("span",{className:"icon",children:(0,l.jsx)(r.N,{icon:"signup"})}),(0,l.jsx)("span",{className:"label",children:"Sign up"})]});var m=n(2947),p=n(1965),h=n(6108);const x=s=>{const e=(0,p.wA)(),{status:n,message:i,errors:r}=m.A.useSigninSelector(),[c,x]=(0,h.A)({email:"",password:""});if("succeeded"===n)return(0,l.jsx)(a.C5,{to:"/home"});return(0,l.jsxs)("form",{className:"signin-form",onSubmit:s=>{s.preventDefault(),e(m.A.signinThunk(c))},children:[(0,l.jsx)(o.pd,{name:"email",type:"text",value:c.email,onChange:x,isDisabled:"loading"===n,errorMessage:void 0===r.email?void 0:r.email}),(0,l.jsx)(o.pd,{name:"password",type:"password",value:c.password,onChange:x,isDisabled:"loading"===n,errorMessage:void 0===r.password?void 0:r.password}),void 0!==r.non_field_errors&&(0,l.jsx)(o.Ii,{message:r.non_field_errors}),(0,l.jsxs)("div",{className:"actions",children:[(0,l.jsx)("span",{}),(0,l.jsx)(t,{})]}),(0,l.jsxs)("div",{className:"actions",children:[(0,l.jsx)(d,{}),(0,l.jsx)(o.rA,{icon:"signin",isLoaderOn:"loading"===n,children:"Sign in"})]})]})},g=s=>(0,i.w)()?(0,l.jsx)(a.C5,{to:"/home"}):(0,l.jsxs)("div",{className:"signin-page",children:[(0,l.jsx)(c,{}),(0,l.jsx)(x,{})]})}}]);
//# sourceMappingURL=772.0ba437d2.chunk.js.map