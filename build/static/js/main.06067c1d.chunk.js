(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){},19:function(e,t,a){},37:function(e,t,a){e.exports=a.p+"static/media/logo.21297307.gif"},38:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),s=(a(19),a(1)),l=a.n(s),o=a(10),i=a(2),u=a(3),m=a(5),d=a(4),p=a(6),h=(a(15),a(34)),b=a(8),f=a(17),g=a(13),v=a.n(g),E={isAuthenticated:!1,isUsername:"",token:"",check:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t={token:""}).token=localStorage.getItem("sudo"),""===t){e.next=5;break}return e.next=5,v.a.post("/verify",t).then((function(e){a.isAuthenticated=e.data.response,a.isUsername=e.data.client_id,a.token=t.token}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getToken:function(){return this.token},getAuth:function(){return this.isAuthenticated},getUserName:function(){return this.isUsername},signOutUser:function(){return localStorage.removeItem("sudo"),!1}},w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={username:E.getUserName(),redirect:!1},a.signout=function(){E.signOutUser(),a.setState({redirect:!0})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(M,null):r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark navCol"},r.a.createElement(b.b,{className:"navbar-brand",to:"/"},"Sudoku"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(b.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link",to:"/highscore"},"HighScores")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link",to:"/about"},"About"))),r.a.createElement("div",{class:"btn-group"},r.a.createElement("button",{type:"button",class:"btn btn-warning dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Welcome, ",this.state.username),r.a.createElement("div",{class:"dropdown-menu dropdown-menu-right"},r.a.createElement("button",{class:"dropdown-item",type:"button"},"Edit Profile"),r.a.createElement("button",{class:"dropdown-item",type:"button",onClick:this.signout},"Sign Out")))))}}]),t}(r.a.Component),y=a(37),N=a.n(y),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selected:"easy"},a.handleChange=function(e){var t=e.target.value;a.setState({selected:t})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement(w,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("img",{src:N.a,className:"App-logo",alt:"logo"})),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"button"},r.a.createElement("div",{class:"input-group"},r.a.createElement("select",{class:"custom-select",onClick:this.handleChange},r.a.createElement("option",{selected:!0,value:"easy"},"Easy"),r.a.createElement("option",{value:"intermediate"},"Intermediate"),r.a.createElement("option",{value:"hard"},"Hard"),r.a.createElement("option",{value:"expert"},"Expert")),r.a.createElement("div",{class:"input-group-append"},r.a.createElement(b.b,{id:"startBtn",to:"/new-game/".concat(this.state.selected)},r.a.createElement("button",{class:"btn btn-warning btm-md"},"Start Game"))))))))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).makeTable=function(){for(var e=[],t=a.state.grid,n=0;n<t.length;n++){for(var c=[],s=0;s<t.length;s++)0!==t[n][s]&&"string"!==typeof t[n][s]?c.push(r.a.createElement("td",{className:"exists"},r.a.createElement("input",{name:[n,s],class:"input",value:t[n][s],onChange:a.handleChange,disabled:!0}))):c.push(r.a.createElement("td",null,r.a.createElement("input",{name:[n,s],class:"input",type:"number",pattern:"\\d*",maxlength:"1",min:"1",max:"9",onChange:a.handleChange,required:!0})));e.push(r.a.createElement("tr",null,c))}return e},a.handleChange=function(e){var t=a.state.grid,n=Number(e.target.name[0]),r=Number(e.target.name[2]);t[n][r]=e.target.value,a.setState({grid:t})},a.handleSubmit=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),document.querySelector("#exampleModal").classList.add("show"),document.querySelector("#exampleModal").style.display="block",n=a.state.grid,r={headers:{Authorization:"bearer:".concat(E.getToken())}},e.next=7,v.a.post("/api/check",{grid:n},r).then((function(e){a.setState({response:e.data.data})}));case 7:"You won, well done!"===a.state.response[0]&&a.setState({btnStatus:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.closeModal=function(){document.querySelector("#exampleModal").classList.remove("show"),document.querySelector("#exampleModal").style.display="none"},a.state={grid:[],level:e.level,response:"",popup:"",btnStatus:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"bearer:".concat(E.getToken())}},a=this.state.level;v.a.get("/api/new-game/".concat(a),t).then((function(t){var a=t.data.data;e.setState({grid:a})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},this.state.response[0]),r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:this.closeModal},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement(b.b,{to:this.state.response[2]},r.a.createElement("button",{type:"button",className:"btn btn-warning btn-md button"},this.state.response[1])))))),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("table",null,this.makeTable()),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("button",{id:"checkBtn",className:"btn btn-warning btn-md button",type:"submit",disabled:this.state.btnStatus},"Check"),r.a.createElement(b.b,{to:"/"},r.a.createElement("button",{type:"button",className:"btn btn-warning btn-md button"},"New Game")))))}}]),t}(r.a.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={level:a.props.match.params.handle},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement(w,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(k,{level:this.state.level}))))}}]),t}(r.a.Component),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",auth:E.getAuth()},a.handleSubmit=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={inputUsername:a.state.username,inputPassword:a.state.password},e.next=4,v.a.post("/login",n).then((function(e){localStorage.setItem("sudo",e.data.token)})).catch((function(e){console.log(e)}));case 4:return e.next=6,a.checkAuthorization();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){"inputUsername"===e.target.name?a.setState({username:e.target.value}):a.setState({password:e.target.value})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"checkAuthorization",value:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.check();case 2:this.setState({auth:E.getAuth()});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.auth?r.a.createElement(f.a,{to:"/"}):r.a.createElement("div",{className:"bg form-place"},r.a.createElement("form",{className:"form-signin",onSubmit:this.handleSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement("label",{for:"inputUsername",className:"sr-only"},"Username"),r.a.createElement("input",{name:"inputUsername",onChange:this.handleChange,type:"text",id:"inputUsername",className:"form-control",placeholder:"Username",required:!0,autofocus:""}),r.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{name:"inputPassword",onChange:this.handleChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),r.a.createElement("div",{className:"checkbox mb-3"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"remember-me"})," Remember me"),r.a.createElement("p",null,"Dont have an account?",r.a.createElement(b.b,{to:"/signup"},"Create account"))),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign in")))}}]),t}(r.a.Component),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={alert:"",name:"",username:"",password:"",cPassword:""},a.handleSubmit=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={inputName:a.state.name,inputUsername:a.state.username,inputPassword:a.state.password,confirmPassword:a.state.cPassword},e.next=4,v.a.post("/signup",n).then((function(e){var t=[r.a.createElement("div",{class:"alert alert-warning",role:"alert"},e.data.reason)];a.setState({alert:t[0]})})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){"inputName"===e.target.name?a.setState({name:e.target.value}):"inputUsername"===e.target.name?a.setState({username:e.target.value}):"inputPassword"===e.target.name?a.setState({password:e.target.value}):a.setState({cPassword:e.target.value})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg form-place"},r.a.createElement("form",{className:"form-signin",onSubmit:this.handleSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Signup"),r.a.createElement("label",{for:"inputName",className:"sr-only"},"Name"),r.a.createElement("input",{name:"inputName",onChange:this.handleChange,type:"text",id:"inputName",className:"form-control",placeholder:"Enter Name",required:!0,autofocus:""}),r.a.createElement("label",{for:"inputUsername",className:"sr-only"},"Username"),r.a.createElement("input",{name:"inputUsername",onChange:this.handleChange,type:"text",id:"inputUsername",className:"form-control",placeholder:"Username",required:!0,autofocus:""}),r.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{name:"inputPassword",onChange:this.handleChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),r.a.createElement("label",{for:"confirmPassword",className:"sr-only"},"Confirm Password"),r.a.createElement("input",{name:"confirmPassword",onChange:this.handleChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Confirm Password",required:!0}),r.a.createElement("span",null,this.state.alert),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign up")))}}]),t}(r.a.Component),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={level:a.props.match.params.handle},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement(w,null),r.a.createElement("div",{class:"jumbotron jumbotron-fluid"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"display-4"},"Sudoku Webapp"),r.a.createElement("p",{class:"lead"},"Sudoku is a logic-based, combinatorial number-placement puzzle. This app was built with React and nodeJS. "))))}}]),t}(r.a.Component),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={userdata:{}},a.makeTable=function(){for(var e=[],t=a.state.userdata,n=0;n<t.length;n++){var c=[];c.push(r.a.createElement("td",null,n+1)),c.push(r.a.createElement("td",null,t[n].username)),c.push(r.a.createElement("td",null,t[n].highscore)),e.push(r.a.createElement("tr",null,c))}return e},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:"bearer:".concat(E.getToken())}},e.next=3,v.a.get("/api/users/highscore",t).then((function(e){a.setState({userdata:e.data.data})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement(w,null),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Username"),r.a.createElement("th",{scope:"col"},"Score"))),r.a.createElement("tbody",null,this.makeTable()))))}}]),t}(r.a.Component),A=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return r.a.createElement(f.b,Object.assign({},a,{render:function(e){return E.getAuth()?r.a.createElement(t,e):r.a.createElement(f.a,{to:{pathname:"/login"}})}}))},U=function(e){return r.a.createElement(b.a,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/signup",component:x}),r.a.createElement(f.b,{exact:!0,path:"/login",component:S}),r.a.createElement(f.b,{exact:!0,path:"/highscore",component:P}),r.a.createElement(f.b,{exact:!0,path:"/about",component:C}),r.a.createElement(A,{exact:!0,path:"/",component:j}),r.a.createElement(A,{path:"/new-game/:handle",component:O})))},M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={auth:!1,loading:!0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,E.check();case 3:e.t1=e.sent,e.t2={auth:e.t1,loading:!1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{class:"jumbotron jumbotron-fluid"},r.a.createElement("div",{class:"container"},r.a.createElement("h2",{class:"display-4"},"Sudoku Webapp",r.a.createElement("p",{class:"spinner-border text-primary",role:"status"},r.a.createElement("span",{class:"sr-only"},"Loading..."))),r.a.createElement("p",null,"If loading persists, ",r.a.createElement("a",{href:"/"},"Click Me")))):r.a.createElement("div",{className:"App"},r.a.createElement(U,null))}}]),t}(n.Component);Object(c.render)(r.a.createElement(M,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.06067c1d.chunk.js.map