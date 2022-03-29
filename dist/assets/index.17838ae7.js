var G=Object.defineProperty,T=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var j=(t,r,n)=>r in t?G(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,q=(t,r)=>{for(var n in r||(r={}))U.call(r,n)&&j(t,n,r[n]);if(R)for(var n of R(r))H.call(r,n)&&j(t,n,r[n]);return t},F=(t,r)=>T(t,z(r));import{W as V,j as I,F as W,s as w,C as J,L as P,r as d,c as Z,a as D,b as K,u as B,B as _,R as Q,d as O,e as X,f as Y}from"./vendor.a7b775b4.js";const ee=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))h(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&h(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function h(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};ee();var te="/Silva-Leo/EloGroup-Desafio/assets/fundo.36865840.jpg",ae=V`


body {
  width: 100%;
  height: 100vh;
  margin: 0;
  background-image:url(${te}) ;
  background-repeat: no-repeat;
  background-size: cover;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

code {
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

button {
    cursor: pointer;
}

form{
    display: flex;
    width: 90%;
    height: 70%;
    justify-content: center;
    align-items: center;
}

section{
    display: flex;
    width: 50%;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

label{
    color: #f9f9f9;
}

input{
  width: 80%;
  background-color: rgba(204, 202, 202, 0.747) ;
  border-style: none;

}

input:hover{
  border-style: 1px solid rgba(46, 46, 46, 0.747)  ;
  background-color: rgba(156, 155, 155, 0.842) ;
  color: aliceblue;
}


table{
    width: 100%;
    height: auto;
    border-spacing: 5px;
    border-collapse: none;
    border: 0.5px solid black;
    margin-bottom: 30px;
    margin-top:20px;
    color: #f9f9f9;
}

th{
    background-color: rgba(204, 202, 202, 0.747) ;
    border: 1px solid black;
    padding: 5px;
    font-weight: 500;
    color: rgb(37, 37, 37);
}

tr{
    color: black;
    height: 3em;
    background-color: #f9f9f9 ;
  }
  // Adicione quais mais regras desejar!
`;const e=I.exports.jsx,i=I.exports.jsxs,M=I.exports.Fragment,re={colors:{blue:"#1822dc",lightGray:"#e6e6e6",gray:"#9e9e9e",darkGray:"#272727",white:"#FFF",black:"#000",backgroundGray:"#2727270"}},ne=({children:t})=>e(W,{theme:re,children:t}),oe=w.header`${({theme:t})=>J`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${t.colors.backgroundGray};
    height: 10vh;
    width: 100%;
    margin-top: 3em;
`}`,le=w.div`
  ${({theme:t})=>J`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    background-color: ${t.colors.backgroundGray};
    width: 100%;
    color: ${t.colors.white};
  `}
`,ie=w.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  padding-left: 20rem; // espaço lado trocar
`,A=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a{
    list-style-type: none;
    text-decoration: none;
    color: white;
    font-size: 1.2em;
  }                             // add hover futuramente e detalhes
`,se=()=>e(le,{children:i(ie,{children:[e(A,{children:e(P,{to:"/",children:"Registrar"})}),e(A,{children:e(P,{to:"/Painel",children:"Painel"})}),e(A,{children:e(P,{to:"/Painel/NewLead",children:"Novo Lead"})})]})}),ce=()=>e(oe,{children:e(se,{})}),$=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:70vh;
`;function de({children:t}){return i(M,{children:[e(ce,{}),e($,{children:t})]})}function ue(){const[t,r]=d.exports.useState({name:"",password:"",confirmPassword:""}),[n,h]=d.exports.useState({type:"",mensagem:""}),o=u=>r(F(q({},t),{[u.target.name]:u.target.value}));return e("div",{children:i("form",{className:"formulario",onSubmit:async u=>{if(u.preventDefault(),!await m())return;h({type:"success",mensagem:"Usu\xE1rio cadastrado com sucesso!"}),r({name:"",password:"",confirmPassword:""});async function m(){let v=Z().shape({confirmPassword:D().required("Erro: Necess\xE1rio confirmar sua senha!").min(8,"Erro: A senha deve ter no m\xEDnimo 8 caracteres!").oneOf([K("password")],"As senhas n\xE3o conferem. Por favor redigite sua senha"),password:D().required("Erro: Necess\xE1rio preencher o campo senha!").min(8,"Erro: A senha deve ter no m\xEDnimo 8 caracteres!").matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,"Erro: Necess\xE1rio pelo menos um caractere especial"),name:D().required("Erro: Necess\xE1rio preencher o campo nome!")});try{return await v.validate(t),!0}catch(b){return h({type:"error",mensagem:b.errors}),!1}}},children:[e("label",{children:"Nome: "}),e("input",{type:"text",name:"name",placeholder:"Nome completo do usu\xE1rio",onChange:o,value:t.name}),e("br",{}),e("br",{}),e("label",{children:"Senha: "}),e("input",{type:"password",name:"password",placeholder:"Senha para acessar o sistema",autoComplete:"on",onChange:o,value:t.password}),e("br",{}),e("br",{}),e("label",{children:"Confirmar-Senha: "}),e("input",{type:"password",name:"confirmPassword",placeholder:"Senha para acessar o sistema",autoComplete:"on",onChange:o,value:t.confirmPassword}),e("br",{}),e("br",{}),n.type==="success"?e("p",{style:{color:"green"},children:n.mensagem}):"",n.type==="error"?e("p",{style:{color:"#ff0000"},children:n.mensagem}):"",e("button",{className:"buttonCadastro",type:"submit",children:"Cadastrar"})]})})}function he(){return e(ue,{})}function me(t){return i("div",{className:"TabelaContainer",children:[e("section",{children:e("h2",{id:"tituloLead",children:" Painel de Leads"})}),e("button",{id:"buttonNewLead",onClick:t.handleAddLead,children:"Novo Lead (+)"}),i("table",{children:[i("tr",{children:[e("th",{children:"Cliente em Potencial"}),e("th",{children:"Dados Confirmados"}),e("th",{children:"Reuni\xE3o Agendada"})]}),t.LogicView]})]})}function pe(){let t=0;const r=B(),[n,h]=d.exports.useState([["EloGroup","",""],["","Drogasil",""],["Lollapaloza","",""]]);localStorage.setItem("lead",JSON.stringify(n)),d.exports.useEffect(()=>{let l=localStorage.getItem("copiaLead");l=JSON.parse(l),l!=null&&h(l)},[]);const[o,s]=d.exports.useState("");function u(l){return!!l}function m(l){l.preventDefault()}function v(l){let x=l.target.innerText;s(x)}function b(l){l.preventDefault();let x=o,p=localStorage.getItem("lead");p=JSON.parse(p);let S=p;function N(f){return f.map(L=>L.includes(x)).findIndex(u)}function k(f,y){let L=0;for(let E=0;E<y.length;E++)if(L++,f===y[E])return L-1}let a=n[N(S)],g=k(x,a),c=a[g+1];if(g!==2){a[g+1]=a[g],a[g]=c;let f=N(S);f>-1&&S.splice(f,1);let y=[a].concat(S);localStorage.setItem("copiaLead",JSON.stringify(y)),h(y)}else alert("Movimento Bloqueado")}function C(){r("/Painel/NewLead")}return e(me,{LogicView:n.map(l=>(t++,i("tr",{className:t%2?"white":"gray",children:[e("th",{className:"repeat",onDragStart:v,draggable:"true",children:l[0]}),e("th",{className:"repeat",onDragStart:v,onDrop:b,onDragOver:m,draggable:"true",children:l[1]}),e("th",{className:"repeat",onDrop:b,onDragOver:m,draggable:"true",children:l[2]})]}))),handleAddLead:C})}function fe(){return e(pe,{})}function ge(t){return e($,{children:i("form",{onSubmit:t.save,children:[i("section",{children:[e("h2",{id:"tituloLead",children:" Novo Lead"}),e("label",{children:"Nome"}),e("input",{className:"inputNewLead",onChange:t.onChangeName,type:"text",required:"required",value:t.name}),e("br",{}),e("br",{}),e("label",{children:"Telefone"}),e("input",{className:"inputNewLead",onChange:t.onChangePhone,value:t.phone,type:"tel",title:"O DDD precisa est\xE1 presente, al\xE9m disso, n\xE3o deve haver espa\xE7os entre os n\xFAmeros",pattern:"[0-9]{2}[9][0-9]{4}[0-9]{4}",required:"required"}),e("br",{}),e("br",{}),e("label",{children:"Email"}),e("input",{className:"inputNewLead",onChange:t.onChangeMail,value:t.mail,type:"email",required:"required"}),e("br",{}),e("br",{})]}),i("div",{id:"checkboxDiv",children:[e("p",{children:"Oportunidades"}),i("table",{className:"tableNewLead",children:[i("tr",{children:[e("th",{children:e("input",{id:"fistCheck",onChange:t.all,type:"checkbox"})}),e("th",{children:"Selecionar todos"})]}),i("tr",{children:[e("th",{children:e("input",{className:"check",onChange:t.RPA,type:"checkbox",value:"RPA"})}),e("th",{children:"RPA"})]}),i("tr",{children:[e("th",{children:e("input",{className:"check",onChange:t.product,type:"checkbox",value:"Produto Digital"})}),e("th",{children:"Produto Digital"})]}),i("tr",{children:[e("th",{children:e("input",{className:"check",onChange:t.analitycs,type:"checkbox",value:"Analytics"})}),e("th",{children:"Analytics"})]}),i("tr",{children:[e("th",{children:e("input",{className:"check",onChange:t.BPM,type:"checkbox",value:"BPM"})}),e("th",{children:"BPM"})]})]}),e("button",{id:"buttonSave",type:"submit",children:"Salvar"})]})]})})}function be(){const t=B(),[r,n]=d.exports.useState(""),[h,o]=d.exports.useState(""),[s,u]=d.exports.useState(""),[m,v]=d.exports.useState([]),[b,C]=d.exports.useState([]);d.exports.useState([]);const[l,x]=d.exports.useState([]);let[p,S]=d.exports.useState(new Set);d.exports.useEffect(()=>{let a=localStorage.getItem("noRepeat");a=JSON.parse(a),a!=null&&C(a)},[]),d.exports.useEffect(()=>{let a=localStorage.getItem("newLead");a=JSON.parse(a),a!=null&&x(a)},[]);function N(){let a=document.getElementsByClassName("check");if(document.getElementById("fistCheck").checked)for(let c=0;c<a.length;c++)a[c].checked=!0,p.add(a[c].value);else for(let c=0;c<a.length;c++)a[c].checked=!1,p=new Set}function k(a){a.preventDefault(),m.push(r),m.push(h),m.push(s);let g=[];p.forEach(y=>g.push(y)),m.push(g);let c=localStorage.getItem("copiaLead"),f=localStorage.getItem("lead");c=JSON.parse(c),f=JSON.parse(f),c=f,b.includes(r)?alert("Lead j\xE1 cadastrada"):(b.push(r),localStorage.setItem("newLead",JSON.stringify(m)),localStorage.setItem("noRepeat",JSON.stringify(b)),c.push([r]),localStorage.setItem("copiaLead",JSON.stringify(c)),l.push(m),localStorage.setItem("newLead",JSON.stringify(l)),t.push("/lead"))}return e(M,{children:e(ge,{onChangeMail:a=>{u(a.target.value)},onChangePhone:a=>{o(a.target.value)},onChangeName:a=>{n(a.target.value)},name:r,phone:h,mail:s,RPA:a=>{p.add(a.target.value)},product:a=>{p.add(a.target.value)},analitycs:a=>{p.add(a.target.value)},BPM:a=>{p.add(a.target.value)},all:N,save:k})})}function ye(){return e(M,{children:e(be,{})})}function xe(){return i(_,{children:[e(ne,{children:e(de,{children:i(Q,{children:[e(O,{path:"/",element:e(he,{})}),e(O,{path:"/Painel",element:e(fe,{})}),e(O,{path:"/Painel/NewLead",element:e(ye,{})})]})})}),e(ae,{})]})}X.render(e(Y.StrictMode,{children:e(xe,{})}),document.getElementById("root"));
