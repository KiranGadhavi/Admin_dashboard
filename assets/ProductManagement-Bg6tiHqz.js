import{r as s,j as e}from"./index-BhW3_DRV.js";import{A as P}from"./AdminSidebar-BxuIAy0o.js";import{s as k}from"./shoes-Di_4jei0.js";const q=()=>{const[i,m]=s.useState(""),[l,x]=s.useState(2e3),[r,j]=s.useState(10),[n,g]=s.useState(k),[c,b]=s.useState(i),[o,v]=s.useState(l),[d,S]=s.useState(r),[u,f]=s.useState(n),N=t=>{var p;const h=(p=t.target.files)==null?void 0:p[0],a=new FileReader;h&&(a.readAsDataURL(h),a.onloadend=()=>{typeof a.result=="string"&&f(a.result)})},U=t=>{t.preventDefault(),m(c),x(o),j(d),g(u)};return e.jsxs("div",{className:"adminContainer",children:[e.jsx(P,{}),e.jsxs("main",{className:"product-management",children:[e.jsxs("section",{children:[e.jsx("strong",{children:"ID - "}),e.jsx("img",{src:n,alt:"Product"}),e.jsx("p",{children:i}),r>0?e.jsxs("span",{className:"green",children:[r,"Available"]}):e.jsx("span",{className:"red",children:"Not Available"}),e.jsx("h2",{children:"Nike"}),e.jsxs("h3",{children:["$",l]})]}),e.jsx("article",{children:e.jsxs("form",{onSubmit:U,children:[e.jsx("h2",{children:"Manage"}),e.jsxs("div",{children:[e.jsx("label",{children:"Name"}),e.jsx("input",{type:"text",required:!0,placeholder:"Name",value:c,onChange:t=>b(t.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Price"}),e.jsx("input",{type:"number",required:!0,placeholder:"Price",value:o,onChange:t=>v(Number(t.target.value))})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Stock"}),e.jsx("input",{type:"number",required:!0,placeholder:"Stock",value:d,onChange:t=>S(Number(t.target.value))})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Photo"}),e.jsx("input",{type:"file",required:!0,onChange:N})]}),n&&e.jsx("img",{src:u,alt:"new-img"}),e.jsx("button",{type:"submit",children:"Update"})]})})]})]})};export{q as default};
