(this["webpackJsonpchat-firebase"]=this["webpackJsonpchat-firebase"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var s=a(4),c=a.n(s),n=a(10),i=a.n(n),r=(a(16),a(17),a(7)),b=a(11),h=a(9);a(19);h.a.initializeApp({apiKey:"AIzaSyC0Kj9NvzT694iRj_fUMNYbwI4-_DAKWF0",authDomain:"chat-firebase-b6bae.firebaseapp.com",databaseURL:"https://chat-firebase-b6bae-default-rtdb.europe-west1.firebasedatabase.app",projectId:"chat-firebase-b6bae",storageBucket:"chat-firebase-b6bae.appspot.com",messagingSenderId:"35517323646",appId:"1:35517323646:web:81402a93524eb21dbafb2f"});var d=function e(){var t=this;Object(b.a)(this,e),this.getMessages=function(e){t.database.ref("messages").on("value",(function(t){e(t.val())}))},this.sendMessage=function(e){var a=t.database.ref().child("messages").push().key;t.database.ref("messages/"+a).set(e)},this.fire=h.a,this.database=this.fire.database()},o=(a(23),a(2)),j=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)([]),i=Object(r.a)(n,2),b=i[0],h=i[1],j=new d;Object(s.useEffect)((function(){j.getMessages((function(e){h(e)}))}),[]);var u=function(e){""!==a&&("Enter"===e.key||e.target.classList.contains("chat__button"))&&(j.sendMessage({text:a}),c(""))};return Object(o.jsxs)("div",{className:"chat",children:[Object(o.jsx)("div",{className:"chat__header",children:Object(o.jsx)("h3",{className:"chat__title",children:"Chat-firebase"})}),Object(o.jsx)("div",{className:"chat__main",children:0===b.length?Object(o.jsx)("h3",{className:"chat__preloader",children:"Loading..."}):Object.entries(b).reverse().map((function(e){var t=Object(r.a)(e,2),a=t[0],s=t[1].text;return Object(o.jsx)("div",{className:"chat__message-container",children:Object(o.jsx)("p",{className:"chat__message-text",children:s})},a)}))}),Object(o.jsxs)("div",{className:"chat__footer",children:[Object(o.jsx)("input",{className:"chat__input",onKeyPress:u,value:a,onChange:function(e){return c(e.target.value)},type:"text",minLength:"1",maxLength:"200",placeholder:"Write message..."}),Object(o.jsx)("button",{type:"submit",onClick:u,className:"chat__button",children:"Send"})]})]})};var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(j,{})})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.1adc04c7.chunk.js.map