"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[346],{6108:(s,e,n)=>{n.d(e,{M:()=>o});var a=n(9379),i=n(2483);function o(s){if("object"!==typeof s||null===s)throw new Error("The useFormHook only accepts the initialData value as an object.");const[e,n]=(0,i.useState)(s);return[e,function(s){const{name:e,type:i,value:o}=s.target,c="checkbox"===i&&s.target instanceof HTMLInputElement?s.target.checked:void 0;n((s=>(0,a.A)((0,a.A)({},s),{},{[e]:"checkbox"===i?c:o})))}]}},7346:(s,e,n)=>{n.r(e),n.d(e,{default:()=>u});var a=n(2483),i=n(4666),o=n(4273),c=n(494),r=n(8183),t=n(6723);const l=s=>(0,t.jsxs)("div",{className:"signin-header",children:[(0,t.jsx)(c.vg,{size:60}),(0,t.jsx)("h3",{className:"form-label",children:"Sign in"}),(0,t.jsx)("p",{className:"-form-discription",children:"sign in with existing creadintials"}),(0,t.jsxs)(i.N_,{to:"../",className:"link back-link",children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)(r.Q,{iconName:"arrowBack"})}),(0,t.jsx)("span",{className:"label",children:"Back"})]})]});var d=n(1965),m=n(6108),p=n(8454);const h=()=>{const s=(0,d.wA)(),{status:e,message:n,errors:r}=(0,o.lr)(),[l,h]=(0,m.M)({email:"",password:""});if((0,a.useEffect)((()=>{s((0,o.a_)()),"succeeded"===e?(0,p.aT)(s,"success",n):"failed"===e&&(0,p.aT)(s,"error",n)}),[s,n,e]),"succeeded"===e)return(0,t.jsx)(i.C5,{to:"/home"});return(0,t.jsxs)("form",{className:"signin-form",onSubmit:e=>{e.preventDefault(),s((0,o.pg)(l))},children:[(0,t.jsx)(c.pd,{name:"email",type:"text",value:l.email,onChange:h,isDisabled:"loading"===e}),(0,t.jsx)(c.pd,{name:"password",type:"password",value:l.password,onChange:h,isDisabled:"loading"===e}),(0,t.jsx)(c.q_,{field:"none",errors:r}),(0,t.jsxs)("div",{className:"actions",children:[(0,t.jsx)("span",{}),(0,t.jsx)(i.N_,{to:"/forgot-password",className:"forgot-password-link",children:"forgot password"})]}),(0,t.jsxs)("div",{className:"actions",children:[(0,t.jsx)(c.MX,{to:"/sign-up",type:"link",iconName:"signin",className:"sign-link",children:"sign up"}),(0,t.jsx)(c.$n,{type:"submit",iconName:"signin",className:"signin-button",isLoaderOn:"loading"===e,children:"sign in"})]})]})},u=s=>(0,o.wR)()?(0,t.jsx)(i.C5,{to:"/home"}):(0,t.jsxs)("div",{className:"signin-page",children:[(0,t.jsx)(l,{}),(0,t.jsx)(h,{})]})}}]);
//# sourceMappingURL=346.77645183.chunk.js.map