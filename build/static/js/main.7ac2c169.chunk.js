(this["webpackJsonpreact-login-gamma"]=this["webpackJsonpreact-login-gamma"]||[]).push([[0],{78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(11),o=a.n(c),i=(a(78),a(79),a(9)),s=a(22),l=a(20),u=a(126),d=a(130),j=a(131),b=a(136),h=a(135),m=a(64),f=a.n(m),O=(a(80),a(134)),g=(a(81),a(3)),p=Object(u.a)((function(e){return{root:{marginTop:10},authInput:{marginTop:5}}}));var x=function(e){var t=e.handleChange,a=e.id,r=e.label,n=e.type,c=p();return Object(g.jsx)("div",{className:c.root,children:Object(g.jsx)(O.a,{id:a,type:n,variant:"outlined",fullWidth:!0,color:"secondary",label:r,hiddenLabel:!0,className:c.authInput,onChange:t})})},v=a(23),S=a(65),y=a.n(S),N=Object(u.a)((function(e){return{root:{flexGrow:1,display:"flex",margin:0},authInput:{marginTop:15},checkFormControlLabel:{marginTop:15,width:"fit-content",display:"block",marginRight:0,marginLeft:0},checkbox:{paddingLeft:0},authButtonBG:{marginTop:10,width:"-webkit-fill-available",textTransform:"none",borderRadius:12},heading:{marginTop:5,color:e.palette.primary,marginBottom:10},error:{color:"#ff4747"},errorIcon:{verticalAlign:"middle"},inputWrapper:{marginTop:25},containerForm:{maxWidth:"30vw",padding:"3em",margin:"10vw auto",background:"#fff",textAlign:"center",borderRadius:20}}}));var w=function(){var e=N(),t=Object(i.f)(),a=Object(r.useState)(""),n=Object(l.a)(a,2),c=n[0],o=n[1],u=Object(r.useState)(""),m=Object(l.a)(u,2),O=m[0],p=m[1],S=Object(r.useState)(""),w=Object(l.a)(S,2),k=w[0],I=w[1],T=Object(r.useState)(!1),C=Object(l.a)(T,2),J=C[0],B=C[1],P=Object(r.useState)(!0),U=Object(l.a)(P,2),L=U[0],E=U[1],D=Object(r.useState)(null),A=Object(l.a)(D,2),F=A[0],W=A[1];document.title="SJoshuadarth's Template | Signup";var R=function(e){return O===e.email},G=function(){try{return JSON.parse(localStorage.getItem("darthUsers")).filter(R).length>0?(W("This email is already being used by another member.\nPlease signup with another email!"),!1):(W(null),!0)}catch(F){return W(null),!0}};return Object(r.useEffect)((function(){W(null),E(""===c||""===O||""===k||!J)}),[c,O,k,J]),Object(r.useEffect)((function(){G()}),[O]),Object(r.useEffect)((function(){E(!!F)}),[F]),Object(g.jsx)("div",{className:e.root,children:Object(g.jsxs)(d.a,{className:e.containerForm,center:!0,children:[Object(g.jsx)("h1",{className:e.heading,children:"Create Account"}),Object(g.jsxs)("span",{children:["Already have an account? ",Object(g.jsx)(v.b,{to:"/login",children:"Sign in"})]}),Object(g.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),G()){var a={name:c,email:O,password:k},r=[];try{(r=JSON.parse(localStorage.getItem("darthUsers"))).push(a)}catch(F){r=[a],console.log(F)}localStorage.setItem("darthUsers",JSON.stringify(r)),localStorage.setItem("currentDarthUser",JSON.stringify(a)),t.push("/")}else W("This email is already being used by another member.\nPlease signup with another email!")},children:[Object(g.jsxs)("div",{className:e.inputWrapper,children:[Object(g.jsx)(x,Object(s.a)(Object(s.a)({},{id:"name-input",label:"Name",type:"name"}),{},{handleChange:function(e){return o(e.target.value)}})),Object(g.jsx)(x,Object(s.a)(Object(s.a)({},{id:"email-input",label:"Email",type:"email"}),{},{handleChange:function(e){return p(e.target.value)}})),Object(g.jsx)(x,Object(s.a)(Object(s.a)({},{id:"password-input",label:"Password",type:"password"}),{},{handleChange:function(e){return I(e.target.value)}}))]}),F&&Object(g.jsxs)("p",{className:e.error,children:[Object(g.jsx)(f.a,{className:e.errorIcon})," ",F]}),Object(g.jsx)(j.a,{fullWidth:!0,id:"signup-button",variant:"contained",size:"large",color:"primary",className:e.authButtonBG,type:"submit",endIcon:Object(g.jsx)(y.a,{}),style:{color:"#fff"},disabled:L,children:"Sign Up"}),Object(g.jsx)(b.a,{control:Object(g.jsx)(h.a,{name:"checkedB",color:"secondary",className:e.checkbox,onClick:function(e){return e.target.checked?B(!0):B(!1)}}),label:Object(g.jsxs)("span",{children:["I have read and agreed to the ",Object(g.jsx)(v.b,{children:"Terms of Service"})]}),className:e.checkFormControlLabel})]})]})})};var k=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(w,{})})},I=a(132),T=Object(u.a)((function(e){return{root:{flexGrow:1,display:"flex"},formInputContentHolder:{marginTop:25,marginBottom:10},authInput:{marginTop:15},loginSubOptions:{marginTop:25},checkbox:{paddingLeft:0},authButton:{width:"-webkit-fill-available",textTransform:"none",borderRadius:12},heading:{marginTop:5,color:e.palette.primary},forgotPassword:{textAlign:"end",color:"#989898"},checkboxLabel:{color:"#989898"},error:{marginRight:"5em",color:"#ff4747"},containerForm:{maxWidth:"30vw",padding:"3em",margin:"10vw auto",background:"#fff",textAlign:"center",borderRadius:20},addonGrid:{textAlign:"start",paddingLeft:10}}}));var C=function(){var e=T(),t=Object(i.f)(),a=Object(r.useState)(""),n=Object(l.a)(a,2),c=n[0],o=n[1],u=Object(r.useState)(""),m=Object(l.a)(u,2),f=m[0],O=m[1],p=Object(r.useState)(!0),S=Object(l.a)(p,2),y=S[0],N=S[1],w=Object(r.useState)(null),k=Object(l.a)(w,2),C=k[0],J=k[1];document.title="SJoshuadarth's Template | Login";var B=function(e){return c===e.email};return Object(r.useEffect)((function(){N(!!C)}),[C]),Object(r.useEffect)((function(){J(null),N(""===c||""===f)}),[c,f]),Object(g.jsx)("div",{className:e.root,children:Object(g.jsxs)(d.a,{className:e.containerForm,center:!0,children:[Object(g.jsx)("h1",{className:e.heading,children:"Welcome Back"}),Object(g.jsxs)("span",{children:["Don't have an account? ",Object(g.jsx)(v.b,{to:"/signup",children:"Sign up"})]}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=[];try{a=JSON.parse(localStorage.getItem("darthUsers")).filter(B),t.push("/")}catch(C){console.log(C)}a.length>0?a[0].password===f?(localStorage.setItem("currentDarthUser",JSON.stringify(a[0])),t.push("/")):J("Password is incorrect. Please try again!"):J("No such user found. Please signup!")},children:[Object(g.jsxs)("div",{className:e.formInputContentHolder,children:[Object(g.jsx)(x,Object(s.a)(Object(s.a)({},{id:"email-input",label:"Email",type:"email"}),{},{handleChange:function(e){return o(e.target.value)}})),Object(g.jsx)(x,Object(s.a)(Object(s.a)({},{id:"password-input",label:"Password",type:"password"}),{},{handleChange:function(e){return O(e.target.value)}})),Object(g.jsxs)(I.a,{container:!0,alignItems:"center",className:e.addonGrid,children:[Object(g.jsx)(I.a,{item:!0,xs:6,children:Object(g.jsx)(b.a,{control:Object(g.jsx)(h.a,{name:"checkedB",color:"secondary",className:e.checkbox}),label:"Keep me logged in",className:e.checkboxLabel})}),Object(g.jsx)(I.a,{item:!0,xs:6,className:e.forgotPassword,children:Object(g.jsx)("span",{children:"Forgot Password?"})})]})]}),C&&Object(g.jsx)("p",{className:e.error,children:C}),Object(g.jsx)(j.a,{id:"signin-button",variant:"contained",size:"large",color:"primary",className:e.authButton,type:"submit",disabled:y,children:"Sign In"})]})]})})};var J=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(C,{})})};a(93);var B=function(){var e=Object(i.f)();document.title="SJoshuadarth's Template | Home";var t=JSON.parse(localStorage.getItem("currentDarthUser")).name;return Object(g.jsxs)("div",{className:"homeHolder",children:[Object(g.jsxs)("h1",{style:{color:"#010013"},children:["Welcome, ",t,"!"]}),Object(g.jsx)(j.a,{variant:"outlined",color:"secondary",onClick:function(){try{localStorage.removeItem("currentDarthUser")}catch(t){console.log(t)}e.push("/login")},children:"Logout"}),Object(g.jsxs)("div",{className:"homeFooter",children:["UI designed by ",Object(g.jsx)("a",{href:"https://dribbble.com/shots/14019613-Sign-up-form",target:"_blank",rel:"noreferrer",children:"Pieter-Pleun Korevaar"}),". React Template by ",Object(g.jsx)("a",{href:"https://github.com/cardiffinc",target:"_blank",rel:"noreferrer",children:"sjoshuadarth"}),"."]})]})};var P=function(){return Object(g.jsx)(B,{})},U=a(66),L=a(133),E=function(e){var t=JSON.parse(localStorage.getItem("currentDarthUser")),a=Object(i.f)();return Object(r.useEffect)((function(){t||a.push("/login")}),[t]),t},D=function(e){var t=JSON.parse(localStorage.getItem("currentDarthUser")),a=Object(i.f)();return Object(r.useEffect)((function(){t&&a.push("/")}),[t]),null===t?{}:t},A=function(e){return E(e)&&e.children},F=function(e){return D(e)&&e.children},W=Object(U.a)({palette:{primary:{light:"#4796ff",main:"#4796ff",dark:"#4796ffc7",contrastText:"#fff"},secondary:{light:"#5da4fa",main:"#5da4fa",dark:"#ba000d",contrastText:"#000"}}});var R=function(){return Object(g.jsx)(L.a,{theme:W,children:Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(i.c,{children:[Object(g.jsx)(i.a,{exact:!0,path:"/",render:function(){return Object(g.jsx)(A,{children:Object(g.jsx)(P,{})})}}),Object(g.jsx)(i.a,{exact:!0,path:"/login",render:function(){return Object(g.jsx)(F,{children:Object(g.jsx)(J,{})})}}),Object(g.jsx)(i.a,{exact:!0,path:"/signup",render:function(){return Object(g.jsx)(F,{children:Object(g.jsx)(k,{})})}})]})})})};o.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(v.a,{children:Object(g.jsx)(R,{})})}),document.getElementById("root"))}},[[94,1,2]]]);