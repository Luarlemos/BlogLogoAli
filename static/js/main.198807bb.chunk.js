(this["webpackJsonpblog-logo-ali"]=this["webpackJsonpblog-logo-ali"]||[]).push([[0],[,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"imagem":"https://cdn-0.maladeaventuras.com/wp-content/uploads/2019/09/viagem-para-paris-750x400.jpg","titulo":"Viagem para Paris","descricao":"Amo muito!","autor":"Beyonce"},{"id":2,"imagem":"https://st3.idealista.pt/news/arquivos/2020-02/roma02-fontana-di-trevi.jpg?sv=FOZuyzDZ","titulo":"Viagem para Roma","descricao":"Tbt desse lugar maravilhoso","autor":"Mario de Andrade"},{"id":3,"imagem":"https://catracalivre.com.br/wp-content/uploads/2019/08/istock-931933966-910x607.jpg","titulo":"Viagem para NY","descricao":"Est\xe1tua da Liberdade","autor":"Mar\xedlia Mendon\xe7a"},{"id":4,"imagem":"https://cdn2.civitatis.com/estados-unidos/nueva-york/guia/times-square.jpg","titulo":"Times Square","descricao":"Before Quarentine","autor":"Maria Juliana"},{"id":5,"imagem":"https://embed.widencdn.net/img/visitorlando/gu3qmshybv/1920x747px/wheel-no-icon-park.jpeg?keep=c&crop=yes&q=70&u=ha4btd&use=3rso9","titulo":"Viagem para Orlando","descricao":"#AllPurple","autor":"Cec\xedlia Maria"},{"id":6,"imagem":"https://revistacapitaleconomico.com.br/wp-content/uploads/2019/11/melhor-lugar-para-se-morar-no-rio-de-janeiro.jpg","titulo":"Rio de Janeiro","descricao":"O Rio de Janeiro continua lindo!","autor":"Rayssa Ferreira"},{"id":7,"imagem":"https://i0.wp.com/www.destinosimperdiveis.com.br/wp-content/uploads/2018/07/di_lencoismaranhenses03.jpg?resize=1194%2C896","titulo":"Len\xe7ois Maranhenses","descricao":"Conhe\xe7a o para\xedso das dunas maranhenses","autor":"Rihanna"},{"id":8,"imagem":"https://i.pinimg.com/originals/57/58/10/575810e3cee377ad106baf39dec8893e.jpg","titulo":"Viagem para Praia de Iracema","descricao":"Fortaleza Bela","autor":"Julio"}]')},,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.e4ef4d58.png"},,function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(17),i=t.n(o),c=(t(25),t(7)),l=t(1),s=t(10),m=(t(26),t(18)),u=t.n(m),d=(t(27),function(e){var a=e.filterData,t=Object(n.useState)(""),o=Object(s.a)(t,2),i=o[0],c=o[1];return r.a.createElement("section",{className:"container-pesquisa"},r.a.createElement("input",{className:"Pesquisa",type:"text",value:i,onChange:function(e){return c(e.target.value)},placeholder:"Pesquisa"}),r.a.createElement("button",{className:"btn",onClick:function(){return a(i)}},"Buscar"))});var p=function(e){var a=e.filterData;return r.a.createElement("nav",{className:"Menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{className:"logo",src:u.a})),r.a.createElement(d,{filterData:a}),r.a.createElement("div",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement(c.b,{className:"Link-css",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(c.b,{className:"Link-css",to:"/"},"Destinos")),r.a.createElement("li",null,r.a.createElement(c.b,{className:"Link-css",to:"/"},"Quem somos")),r.a.createElement("li",null,r.a.createElement(c.b,{className:"Link-css",to:"/"},"Contato")))))},E=(t(33),t(6));var g=function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("p",null,"Siga a gente nas redes sociais:"),r.a.createElement("div",{className:"footer_social"},r.a.createElement("a",{href:"https://www.facebook.com"},r.a.createElement(E.a,{size:"40",color:"#3b5998"})),r.a.createElement("a",{href:"https://www.twitter.com"},r.a.createElement(E.c,{size:"40",color:"#1da1f2"})),r.a.createElement("a",{href:"https://www.youtube.com"},r.a.createElement(E.d,{size:"40",color:"#f00f"})),r.a.createElement("a",{href:"https://www.instagram.com"},r.a.createElement(E.b,{size:"40",color:"#000"}))),r.a.createElement("p",null,"Digital House / Santander - Todos os direitos reservados - Logo Ali 2020"))},f=t(11),h=(t(34),function(e){var a=e.data;return r.a.createElement("nav",{className:"sidebar"},r.a.createElement("h2",null,"POSTAGENS"),r.a.createElement("ul",{className:"posts-list"},r.a.createElement("ul",{className:"month-list"},r.a.createElement("div",{className:"mes"},r.a.createElement("p",null,"Outubro")),a.map((function(e){return r.a.createElement("li",null,e.titulo)})))))}),v=(t(35),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{id:"imagem",src:e.imagem,alt:e.titulo}),r.a.createElement("span",{id:"titulo"},r.a.createElement("b",null,e.titulo)),r.a.createElement("span",{id:"descricao"},e.descricao),r.a.createElement("span",{id:"autor"},"Autor(a): ",r.a.createElement("i",null,e.autor)))});t(36);var w=function(){var e=Object(n.useState)(f),a=Object(s.a)(e,2),t=a[0],o=a[1];return r.a.createElement("main",{className:"Home"},r.a.createElement(p,{filterData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=f.filter((function(a){return a.titulo.toLowerCase().includes(e.toLowerCase())}));o(a)}}),r.a.createElement("section",{className:"cards-container"},0!==t.length?t.map((function(e){return r.a.createElement(v,{key:e.id,imagem:e.imagem,titulo:e.titulo,descricao:e.descricao,autor:e.autor})})):r.a.createElement("b",null,"Nenhum post encontrado!")),r.a.createElement(h,{data:f}),r.a.createElement(g,null))};var b=function(){return r.a.createElement(c.a,{basename:"/BlogLogoAli"},r.a.createElement(l.a,{path:"/",exact:!0,component:w}))};var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.198807bb.chunk.js.map