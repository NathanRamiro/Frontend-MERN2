(this.webpackJsonpfrontendweb=this.webpackJsonpfrontendweb||[]).push([[0],{57:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(27),s=n.n(r),j=(n(48),n(42)),o=n(7),i=n(19),l=n(17),u=n(25),b=n(39),h=n(9),d=n(1),O=function(){return Object(d.jsxs)(b.a,{bg:"primary",variant:"dark",children:[Object(d.jsxs)(b.a.Brand,{href:"#home",children:[Object(d.jsx)(h.a,{})," BD Alunos "]}),Object(d.jsxs)(u.a,{className:"me-auto",children:[Object(d.jsxs)(u.a.Link,{href:"#alunos",children:[Object(d.jsx)(h.j,{})," Alunos"]}),Object(d.jsxs)(u.a.Link,{href:"#add",children:[Object(d.jsx)(h.b,{})," Adicionar"]}),Object(d.jsxs)(u.a.Link,{href:"#edit",children:[Object(d.jsx)(h.g,{})," Editar"]}),Object(d.jsxs)(u.a.Link,{href:"#delete",children:[Object(d.jsx)(h.f,{})," Deletar"]}),Object(d.jsxs)(u.a.Link,{children:[Object(d.jsx)(h.h,{})," Ajuda "]})]})]})},x=function(){return Object(c.useEffect)((function(){document.title="Home"}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{fluid:!0,className:"p-0",children:[Object(d.jsx)(O,{}),Object(d.jsxs)(l.a,{children:[Object(d.jsx)("h1",{children:"Bem Vindo"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"Este banco de dados contem as informa\xe7\xf5es dos alunos cadastrados"}),Object(d.jsx)("p",{children:"Use os bot\xf5es acima para navegar entre as paginas"})]})]})})},p=n(13),f=n.n(p),m=n(21),g=n(11),v=n(12),k=n(8),C=n(41),y=n(20),S="https://backend-trabalho2.herokuapp.com/alunos",w=n(26),E=function(e){var t=e.data,n=t.nome,c=t.cpf,a=t.dataMatricula,r=t.curso,s=new Date(a);return Object(d.jsxs)(w.a,{children:[Object(d.jsx)(w.a.Header,{children:n}),Object(d.jsxs)(w.a.Body,{children:[Object(d.jsxs)(w.a.Title,{children:["CPF: ",c]}),Object(d.jsxs)(w.a.Text,{children:["Data de Matricula: ",s.toLocaleDateString()]}),Object(d.jsxs)(w.a.Text,{children:["Curso: ",r]})]})]})},A=function(){var e=Object(c.useState)([{}]),t=Object(g.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(g.a)(r,2),j=s[0],o=s[1];function u(){return b.apply(this,arguments)}function b(){return(b=Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,fetch("https://backend-trabalho2.herokuapp.com/alunos").then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){console.log(e.message)}));case 3:o(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){document.title="Alunos",u()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{fluid:!0,className:"p-0",children:[Object(d.jsx)(O,{}),Object(d.jsx)(l.a,{children:Object(d.jsx)(v.a,{children:j?Object(d.jsx)(k.a,{style:{justifyContent:"center",flex:1,display:"flex"},children:Object(d.jsx)(C.a,{animation:"border",variant:"primary"})}):Object(d.jsxs)(k.a,{xs:12,lg:12,children:[Object(d.jsxs)(y.a,{style:{marginBottom:16},onClick:function(){return u()},variant:"primary",size:"lg",block:!0,children:[Object(d.jsx)(h.i,{})," Recarregar"]}),0===n.length&&Object(d.jsx)(i.a,{className:"m-0",children:Object(d.jsx)("p",{children:"N\xe3o existem dados"})}),!j&&n.map((function(e){return Object(d.jsx)(i.a,{children:Object(d.jsx)(E,{data:e})})}))]})})})]})})},L=n(6);var D=function(e){if(!e.match(/\d{3,3}\.\d{3,3}\.\d{3,3}-\d{2,2}/))return!1;var t=e.replace(/[\.-]/g,""),n=t.split("",t.length-2),c=0;n.forEach((function(e,t){c+=e*(t+1)})),c=c%11>=10?0:c%11,n.push(c);var a=0;n.forEach((function(e,t){a+=e*t})),a=a%11>=10?0:a%11,n.push(a);var r=n.toString();return(r=r.replace(/,/g,""))===e.replace(/[\.-]/g,"")},N=function(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(g.a)(r,2),j=s[0],o=s[1],u=Object(c.useState)("ADS"),b=Object(g.a)(u,2),x=b[0],p=b[1],C=Object(c.useState)(!0),w=Object(g.a)(C,2),E=w[0],A=w[1];function N(){return(N=Object(m.a)(f.a.mark((function e(){var t,c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new Date,0!==n.trim().length){e.next=5;break}return alert("O nome do aluno \xe9 obrigatorio"),a(""),e.abrupt("return");case 5:if(D(j)){e.next=9;break}return alert("CPF invalido"),o(""),e.abrupt("return");case 9:return c={curso:x,status:E,nome:n,dataMatricula:t,cpf:j},r="".concat(S,"/").concat(j),e.next=13,fetch(r).then((function(e){return e.json()})).then((function(e){if(e.cpf===j)return alert("Esse(a) aluno(a) ja foi cadastrado(a)"),a(""),void o("")})).catch((function(e){console.log(e)}));case 13:return e.next=15,fetch(S,{method:"POST",body:JSON.stringify(c),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.cpf===j&&(alert("Aluno cadastrado com sucesso"),a(""),o(""))})).catch((function(e){console.log(e)}));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(l.a,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(v.a,{children:Object(d.jsx)(k.a,{children:Object(d.jsx)(L.a,{children:Object(d.jsxs)(L.a.Group,{children:[Object(d.jsx)(L.a.Label,{children:"Nome"}),Object(d.jsx)(L.a.Control,{as:"input",value:n,onChange:function(e){a(e.target.value)}})]})})})}),Object(d.jsxs)(v.a,{children:[Object(d.jsx)(k.a,{xs:12,lg:6,children:Object(d.jsx)(L.a,{children:Object(d.jsxs)(L.a.Group,{children:[Object(d.jsx)(L.a.Label,{children:"CPF"}),Object(d.jsx)(L.a.Control,{as:"input",value:j,onChange:function(e){o(e.target.value)}})]})})}),Object(d.jsx)(k.a,{xs:12,lg:6,children:Object(d.jsxs)(L.a.Group,{children:[Object(d.jsx)(L.a.Label,{children:"Curso"}),Object(d.jsxs)(L.a.Control,{as:"select",value:x,onChange:function(e){p(e.target.value)},children:[Object(d.jsx)("option",{children:"ADS"}),Object(d.jsx)("option",{children:"Mecatronica"}),Object(d.jsx)("option",{children:"Eventos"}),Object(d.jsx)("option",{children:"Adm"}),Object(d.jsx)("option",{children:"Economia"})]})]})})]}),Object(d.jsx)(v.a,{children:Object(d.jsx)(k.a,{children:Object(d.jsx)(L.a,{children:Object(d.jsx)(L.a.Check,{checked:E,type:"checkbox",value:E,label:E?"Ativo":"N\xe3o ativo",onChange:function(){return A(!E)}})})})}),Object(d.jsx)(v.a,{style:{marginTop:32},children:Object(d.jsx)(k.a,{children:Object(d.jsxs)(y.a,{variant:"primary",block:!0,onClick:function(){return function(){return N.apply(this,arguments)}()},children:[Object(d.jsx)(h.c,{})," Cadastrar"]})})})]})})]})},F=function(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(g.a)(r,2),j=s[0],o=s[1],u=Object(c.useState)(""),b=Object(g.a)(u,2),x=b[0],p=b[1],C=Object(c.useState)(!0),w=Object(g.a)(C,2),E=w[0],A=w[1],D=Object(c.useState)(""),N=Object(g.a)(D,2),F=N[0],M=N[1],T=Object(c.useState)(!1),B=Object(g.a)(T,2),G=B[0],P=B[1];function J(){return(J=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(S,"/").concat(j),e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){if(e.cpf===j)return a(e.nome),p(e.curso),A(e.status),M(e.dataMatricula),void P(!0);alert("Esse(a) aluno(a) n\xe3o existe")})).catch((function(e){console.log(e.message)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.trim().length){e.next=4;break}return alert("O nome do aluno \xe9 obrigatorio"),a(""),e.abrupt("return");case 4:return t={curso:x,status:E,nome:n,dataMatricula:F,cpf:j},e.next=7,fetch(S,{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){void 0===e.errors?(alert("Dados alterados com sucesso"),a(""),o(""),P(!1)):alert("ocorreu um erro")})).catch((function(e){alert(e.message)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(l.a,{children:Object(d.jsxs)(v.a,{children:[Object(d.jsx)(k.a,{xs:12,lg:6,children:Object(d.jsx)(L.a,{children:Object(d.jsxs)(L.a.Group,{children:[Object(d.jsx)(L.a.Label,{children:"CPF"}),Object(d.jsx)(L.a.Control,{disabled:G,as:"input",value:j,onChange:function(e){o(e.target.value)}})]})})}),Object(d.jsx)(k.a,{xs:12,lg:6,children:Object(d.jsxs)(y.a,{variant:"primary",block:!0,onClick:function(){return function(){return J.apply(this,arguments)}()},children:[Object(d.jsx)(h.k,{})," Buscar"]})})]})}),G&&Object(d.jsx)(l.a,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(v.a,{children:Object(d.jsx)(k.a,{children:Object(d.jsx)(L.a,{children:Object(d.jsxs)(L.a.Group,{children:[Object(d.jsx)(L.a.Label,{children:"Nome"}),Object(d.jsx)(L.a.Control,{as:"input",value:n,onChange:function(e){a(e.target.value)}})]})})})}),Object(d.jsx)(v.a,{children:Object(d.jsx)(k.a,{xs:12,lg:6,children:Object(d.jsxs)(L.a.Group,{children:[Object(d.jsx)(L.a.Label,{children:"Curso"}),Object(d.jsxs)(L.a.Control,{as:"select",value:x,onChange:function(e){p(e.target.value)},children:[Object(d.jsx)("option",{children:"ADS"}),Object(d.jsx)("option",{children:"Mecatronica"}),Object(d.jsx)("option",{children:"Eventos"}),Object(d.jsx)("option",{children:"Adm"}),Object(d.jsx)("option",{children:"Economia"})]})]})})}),Object(d.jsx)(v.a,{children:Object(d.jsx)(k.a,{children:Object(d.jsx)(L.a,{children:Object(d.jsx)(L.a.Check,{checked:E,type:"checkbox",value:E,label:E?"Ativo":"N\xe3o ativo",onChange:function(){return A(!E)}})})})}),Object(d.jsx)(v.a,{style:{marginTop:32},children:Object(d.jsxs)(k.a,{children:[Object(d.jsxs)(y.a,{variant:"primary",block:!0,onClick:function(){return function(){return H.apply(this,arguments)}()},children:[Object(d.jsx)(h.e,{})," Alterar"]}),Object(d.jsxs)(y.a,{variant:"danger",block:!0,onClick:function(){return P(!1)},children:[Object(d.jsx)(h.d,{})," Cancelar"]})]})})]})})]})},M=function(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),n=t[0],a=t[1];function r(){return(r=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(S,"/").concat(n),e.next=3,fetch(t,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){var t=e.message;if(!t)throw new Error;alert(t)})).catch((function(e){alert("O aluno n\xe3o foi encontrado")}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(l.a,{children:Object(d.jsxs)(v.a,{children:[Object(d.jsx)(k.a,{xs:12,lg:6,children:Object(d.jsx)(L.a,{children:Object(d.jsxs)(L.a.Group,{children:[Object(d.jsx)(L.a.Label,{children:"CPF"}),Object(d.jsx)(L.a.Control,{as:"input",value:n,onChange:function(e){a(e.target.value)}})]})})}),Object(d.jsx)(k.a,{xs:12,lg:6,children:Object(d.jsxs)(y.a,{variant:"danger",block:!0,onClick:function(){return function(){return r.apply(this,arguments)}()},children:[Object(d.jsx)(h.f,{})," Remover"]})})]})})]})};function T(){return Object(d.jsx)(j.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:x}),Object(d.jsx)(o.a,{exact:!0,path:"/home",component:x}),Object(d.jsx)(o.a,{exact:!0,path:"/alunos",component:A}),Object(d.jsx)(o.a,{exact:!0,path:"/add",component:N}),Object(d.jsx)(o.a,{exact:!0,path:"/edit",component:F}),Object(d.jsx)(o.a,{exact:!0,path:"/delete",component:M})]})})}var B=function(){return Object(d.jsx)(T,{})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.68a89d10.chunk.js.map