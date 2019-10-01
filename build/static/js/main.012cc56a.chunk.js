(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){},20:function(e,t,a){},37:function(e,t,a){e.exports=a.p+"static/media/logo.21297307.gif"},38:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=(a(20),a(11)),s=a.n(l),o=a(16),i=a(5),m=a(6),u=a(8),d=a(7),p=a(9),h=(a(15),a(34)),b=a(3),v=a(14);function f(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark navCol"},r.a.createElement(b.b,{className:"navbar-brand",to:"/"},"Sudoku"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(b.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link",to:"#"},"More")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link",to:"#"},"About")))))}var E=a(37),g=a.n(E),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selected:"easy"},a.handleChange=function(e){var t=e.target.value;a.setState({selected:t})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement(f,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"})),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"button"},r.a.createElement("div",{class:"input-group"},r.a.createElement("select",{class:"custom-select",onClick:this.handleChange},r.a.createElement("option",{selected:!0,value:"easy"},"Easy"),r.a.createElement("option",{value:"intermediate"},"Intermediate"),r.a.createElement("option",{value:"hard"},"Hard"),r.a.createElement("option",{value:"expert"},"Expert")),r.a.createElement("div",{class:"input-group-append"},r.a.createElement(b.b,{id:"startBtn",to:"/new-game/".concat(this.state.selected)},r.a.createElement("button",{class:"btn btn-warning btm-md"},"Start Game"))))))))}}]),t}(r.a.Component),y=a(17),w=a.n(y),k={isAuthenticated:!1,token:"",check:function(){var e=Object(o.a)(s.a.mark((function e(){var t,a,n,r,c,l,o,i,m=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t={token:""},a=document.cookie.split(";"),n=!0,r=!1,c=void 0,e.prev=5,l=a[Symbol.iterator]();!(n=(o=l.next()).done);n=!0)(i=o.value).startsWith(" su")&&(i=i.split("="),t.token=i[1]);e.next=13;break;case 9:e.prev=9,e.t0=e.catch(5),r=!0,c=e.t0;case 13:e.prev=13,e.prev=14,n||null==l.return||l.return();case 16:if(e.prev=16,!r){e.next=19;break}throw c;case 19:return e.finish(16);case 20:return e.finish(13);case 21:if(""===t){e.next=24;break}return e.next=24,w.a.post("/verify",t).then((function(e){m.isAuthenticated=e.data.response,m.token=t.token}));case 24:case"end":return e.stop()}}),e,null,[[5,9,13,21],[14,,16,20]])})));return function(){return e.apply(this,arguments)}}(),getToken:function(){return this.token},getAuth:function(){return this.isAuthenticated}},j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).makeTable=function(){for(var e=[],t=a.state.grid,n=0;n<t.length;n++){for(var c=[],l=0;l<t.length;l++)0!==t[n][l]&&"string"!==typeof t[n][l]?c.push(r.a.createElement("td",{className:"exists"},r.a.createElement("input",{name:[n,l],class:"input",value:t[n][l],onChange:a.handleChange,disabled:!0}))):c.push(r.a.createElement("td",null,r.a.createElement("input",{name:[n,l],class:"input",type:"number",pattern:"\\d*",maxlength:"1",min:"1",max:"9",onChange:a.handleChange,required:!0})));e.push(r.a.createElement("tr",null,c))}return e},a.handleChange=function(e){var t=a.state.grid,n=Number(e.target.name[0]),r=Number(e.target.name[2]);t[n][r]=e.target.value,a.setState({grid:t})},a.handleSubmit=function(e){e.preventDefault(),document.querySelector("#exampleModal").classList.add("show"),document.querySelector("#exampleModal").style.display="block";var t=a.state.grid;w.a.post("/check",{grid:t}).then((function(e){a.setState({response:e.data.data})}))},a.closeModal=function(){document.querySelector("#exampleModal").classList.remove("show"),document.querySelector("#exampleModal").style.display="none"},a.state={grid:[],level:e.level,response:"",popup:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"bearer:".concat(k.getToken())}},a=this.state.level;w.a.get("/api/new-game/".concat(a),t).then((function(t){var a=t.data.data;e.setState({grid:a})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},this.state.response[0]),r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:this.closeModal},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement(b.b,{to:this.state.response[2]},r.a.createElement("button",{type:"button",className:"btn btn-warning btn-md button"},this.state.response[1])))))),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("table",null,this.makeTable()),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("button",{id:"checkBtn",className:"btn btn-warning btn-md button",type:"submit"},"Check"))))}}]),t}(r.a.Component),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={level:a.props.match.params.handle},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement(f,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(j,{level:this.state.level}))))}}]),t}(r.a.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",auth:k.getAuth()},a.handleSubmit=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={inputUsername:a.state.username,inputPassword:a.state.password},e.next=4,w.a.post("/login",n).then((function(e){document.cookie="sudo=".concat(e.data.token)})).catch((function(e){console.log(e)}));case 4:return e.next=6,a.checkAuthorization();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){"inputUsername"===e.target.name?a.setState({username:e.target.value}):a.setState({password:e.target.value})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"checkAuthorization",value:function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.check();case 2:this.setState({auth:k.getAuth()});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.auth?r.a.createElement(v.a,{to:"/"}):r.a.createElement("div",{className:"bg form-place"},r.a.createElement("form",{className:"form-signin",onSubmit:this.handleSubmit},r.a.createElement("img",{className:"mb-4",src:"/docs/4.3/assets/brand/bootstrap-solid.svg",alt:"",width:"72",height:"72"}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement("label",{for:"inputUsername",className:"sr-only"},"Username"),r.a.createElement("input",{name:"inputUsername",onChange:this.handleChange,type:"text",id:"inputUsername",className:"form-control",placeholder:"Username",required:"",autofocus:""}),r.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{name:"inputPassword",onChange:this.handleChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:""}),r.a.createElement("div",{className:"checkbox mb-3"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"remember-me"})," Remember me"),r.a.createElement("p",null,"Dont have an account?",r.a.createElement(b.b,{to:"/signup"},"Create account"))),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign in")))}}]),t}(r.a.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg form-place"},r.a.createElement("form",{className:"form-signin",method:"POST",action:"/signup"},r.a.createElement("img",{className:"mb-4",src:"/docs/4.3/assets/brand/bootstrap-solid.svg",alt:"",width:"72",height:"72"}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Signup"),r.a.createElement("label",{for:"inputName",className:"sr-only"},"Name"),r.a.createElement("input",{name:"inputName",type:"text",id:"inputName",className:"form-control",placeholder:"Enter Name",required:"",autofocus:""}),r.a.createElement("label",{for:"inputUsername",className:"sr-only"},"Username"),r.a.createElement("input",{name:"inputUsername",type:"text",id:"inputUsername",className:"form-control",placeholder:"Username",required:"",autofocus:""}),r.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{name:"inputPassword",type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:""}),r.a.createElement("label",{for:"confirmPassword",className:"sr-only"},"Confirm Password"),r.a.createElement("input",{name:"confirmPassword",type:"password",id:"inputPassword",className:"form-control",placeholder:"Confirm Password",required:""}),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign up")))}}]),t}(r.a.Component),S=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return r.a.createElement(v.b,Object.assign({},a,{render:function(e){return k.getAuth()?r.a.createElement(t,e):r.a.createElement(v.a,{to:{pathname:"/login"}})}}))},P=function(e){return r.a.createElement(b.a,null,r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/signup",component:C}),r.a.createElement(v.b,{exact:!0,path:"/login",component:O}),r.a.createElement(S,{exact:!0,path:"/",component:N}),r.a.createElement(S,{path:"/new-game/:handle",component:x})))},A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={auth:!1,loading:!0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,k.check();case 3:e.t1=e.sent,e.t2={auth:e.t1,loading:!1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))):r.a.createElement("div",{className:"App"},r.a.createElement(P,null))}}]),t}(n.Component);Object(c.render)(r.a.createElement(A,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.012cc56a.chunk.js.map