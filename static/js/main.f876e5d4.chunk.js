(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),s=(a(13),a(2)),r=(a(14),a(7)),i=function(e){var t=e.inputText,a=e.setInputText,o=e.todos,c=e.setTodos,l=e.setStatus;return n.a.createElement("form",null,n.a.createElement("input",{value:t,onChange:function(e){console.log(e.target.value),a(e.target.value)},type:"text",className:"todo-input"}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),c([].concat(Object(r.a)(o),[{text:t,completed:!1,id:1e3*Math.random()}])),a("")},className:"todo-button",type:"submit"},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{onChange:function(e){l(e.target.value)},name:"todos",className:"filter-todo"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},u=a(4),m=function(e){var t=e.text,a=e.todo,o=e.todos,c=e.setTodos;return n.a.createElement("div",{className:"todo"},n.a.createElement("li",{className:"todo-item ".concat(a.completed?"completed":"")},t),n.a.createElement("button",{onClick:function(){c(o.map((function(e){return e.id===a.id?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn"},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{onClick:function(){c(o.filter((function(e){return e.id!==a.id})))},className:"trash-btn"},n.a.createElement("i",{className:"fas fa-trash"})))},d=function(e){var t=e.todos,a=e.setTodos,o=e.filteredTodos;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},o.map((function(e){return n.a.createElement(m,{setTodos:a,todos:t,text:e.text,todo:e,key:e.id})}))))};var f=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)([]),r=Object(s.a)(l,2),u=r[0],m=r[1],f=Object(o.useState)("all"),p=Object(s.a)(f,2),E=p[0],b=p[1],v=Object(o.useState)([]),g=Object(s.a)(v,2),h=g[0],N=g[1];Object(o.useEffect)((function(){j()}),[]),Object(o.useEffect)((function(){O(),S()}),[u,E]);var O=function(){switch(E){case"completed":N(u.filter((function(e){return!0===e.completed})));break;case"uncompleted":N(u.filter((function(e){return!1===e.completed})));break;default:N(u)}},S=function(){localStorage.setItem("todos",JSON.stringify(u))},j=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));m(e)}};return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"To Do List")),n.a.createElement(i,{todos:u,setTodos:m,inputText:a,setInputText:c,setStatus:b}),n.a.createElement(d,{todos:u,setTodos:m,filteredTodos:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f876e5d4.chunk.js.map