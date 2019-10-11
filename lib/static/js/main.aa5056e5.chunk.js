(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){},20:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/logo.21297307.gif"},40:function(e,t,a){e.exports=a(68)},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(34),c=(a(20),a(1)),o=a.n(c),l=a(8),i=a(2),u=a(3),m=a(5),d=a(4),p=a(6),h=(a(16),a(35)),b=a(11),f=a(18),v=a(10),g=a.n(v),E={isAuthenticated:!1,isUsername:"",token:"",check:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t={token:""}).token=localStorage.getItem("sudo"),""===t){e.next=5;break}return e.next=5,g.a.post("/verify",t).then((function(e){a.isAuthenticated=e.data.response,a.isUsername=e.data.client_id,a.token=t.token}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getToken:function(){return this.token},getAuth:function(){return this.isAuthenticated},getUserName:function(){return this.isUsername},signOutUser:function(){return localStorage.removeItem("sudo"),!1}},w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={username:E.getUserName(),redirect:!1},a.signout=function(){E.signOutUser(),a.setState({redirect:!0})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(T,null):r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark navCol"},r.a.createElement(b.b,{className:"navbar-brand",to:"/"},"Sudoku"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(b.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link",to:"/highscore"},"HighScores")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link",to:"/about"},"About"))),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",className:"btn btn-warning dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Welcome, ",this.state.username),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right"},r.a.createElement(b.b,{to:"/edit-user"},r.a.createElement("button",{className:"dropdown-item",type:"button"},"Edit Profile")),r.a.createElement("button",{className:"dropdown-item",type:"button",onClick:this.signout},"Sign Out")))))}}]),t}(r.a.Component),y=a(38),N=a.n(y),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={selectedLvl:"",redirect:!1,popupMsg:""},a.handleChange=function(e){var t=e.target.value;a.setState({selectedLvl:t})},a.startGame=function(){if(""!==a.state.selectedLvl)a.setState({popupMsg:""}),a.setState({redirect:!0});else{var e=[r.a.createElement("div",{class:"alert alert-warning",role:"alert"},"Please select a level")];a.setState({popupMsg:e[0]})}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(f.a,{to:"/new-game/".concat(this.state.selectedLvl)}):r.a.createElement("div",{className:"bg"},r.a.createElement(w,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("img",{src:N.a,className:"App-logo",alt:"logo"})),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"button"},r.a.createElement("div",{class:"input-group"},r.a.createElement("select",{class:"custom-select",onChange:this.handleChange},r.a.createElement("option",{selected:!0},"Choose Level"),r.a.createElement("option",{value:"easy"},"Easy"),r.a.createElement("option",{value:"intermediate"},"Intermediate"),r.a.createElement("option",{value:"hard"},"Hard"),r.a.createElement("option",{value:"expert"},"Expert")),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("button",{class:"btn btn-warning btm-md",onClick:this.startGame},"Start Game"))))),r.a.createElement("div",{className:"row justify-content-center"},this.state.popupMsg)))}}]),t}(r.a.Component),j=a(39),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).setActiveBlock=function(e){var t=Number(e.target.name[0]),n=Number(e.target.name[2]);a.props.setActiveBlock([t,n])},a.BuildGame=function(){for(var e=[],t=a.props,n=t.grid,s=t.answer,c=a.props.activeBlock,o=0;o<n.length;o++){for(var l=[],i=0;i<n.length;i++)o===c[0]&&i===c[1]&&"number"!==typeof n[o][i]?l.push(r.a.createElement("td",{className:"exists"},r.a.createElement("input",{name:[o,i],className:"active-block",value:n[o][i],onChange:a.setActiveBlock,disabled:!0}))):Number(n[o][i])===s[o][i]||0===n[o][i]||""===n[o][i]?0!==n[o][i]&&"string"!==typeof n[o][i]?o===c[0]&&i===c[1]?l.push(r.a.createElement("td",{className:"exists"},r.a.createElement("input",{name:[o,i],className:"active-nofill",value:n[o][i],disabled:!0}))):l.push(r.a.createElement("td",{className:"exists"},r.a.createElement("input",{name:[o,i],className:"game-input",value:n[o][i],disabled:!0}))):(0===n[o][i]&&(n[o][i]=""),""===n[o][i]?l.push(r.a.createElement("td",null,r.a.createElement("input",{name:[o,i],className:"game-input",value:n[o][i],type:"number",pattern:"\\d*",maxlength:"1",min:"1",max:"9",onFocus:a.setActiveBlock,onChange:a.setActiveBlock,required:!0,readOnly:!0}))):l.push(r.a.createElement("td",null,r.a.createElement("input",{name:[o,i],className:"correct-input",value:n[o][i],type:"number",pattern:"\\d*",maxlength:"1",min:"1",max:"9",onFocus:a.setActiveBlock,onChange:a.setActiveBlock,required:!0,readOnly:!0})))):l.push(r.a.createElement("td",null,r.a.createElement("input",{name:[o,i],className:"wrong-input",value:n[o][i],type:"number",pattern:"\\d*",maxlength:"1",min:"1",max:"9",onFocus:a.setActiveBlock,onChange:a.setActiveBlock,required:!0,readOnly:!0})));e.push(r.a.createElement("tr",null,l))}return e},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.BuildGame())}}]),t}(r.a.Component),S={open:function(){document.querySelector("#exampleModal").classList.add("show"),document.querySelector("#exampleModal").style.display="block"},close:function(){document.querySelector("#exampleModal").classList.remove("show"),document.querySelector("#exampleModal").style.display="none"}},C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).dynamicBuildBtns=function(){for(var e=[],t=1;t<=9;t++)e.push(r.a.createElement("button",{className:"btn btn-info btn-md gameBtn",value:t,type:"button",onClick:a.onScreenbuttonTrigger},t));a.setState({onScreenKeyboard:e})},a.onScreenbuttonTrigger=function(e){var t=a.state.grid,n=e.target.value,r=a.state.activeBlock,s=r[0],c=r[1];""!==r&&"string"===typeof t[s][c]&&(t[s][c]=n,a.setState({grid:t,activeBlock:["",""]}),a.forceUpdate())},a.setActiveBlock=function(e){a.setState({activeBlock:e})},a.handleSubmit=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.grid,s=n.level,c={headers:{Authorization:"bearer:".concat(E.getToken())}},e.next=5,g.a.post("/api/check",{grid:r,level:s},c).then((function(e){a.setState({response:e.data.data})}));case 5:"You won, well done!"===a.state.response[0]?(a.setState({checkBtnDisable:!0}),a.setState({modalBtnAction:[!1,a.Redirect]})):a.setState({modalBtnAction:[!1,S.close]}),S.open();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.Redirect=function(){a.setState({modalBtnAction:[!0]})},a.newGameBtn=function(){a.setState({response:["Are you sure you want to start a new game?","Yes"]}),a.setState({modalBtnAction:[!1,a.Redirect]}),S.open()},a.state={grid:[],answer:[],level:e.level,lives:0,response:"",checkBtnDisable:!1,onScreenKeyboard:"",activeBlock:["",""],modalBtnAction:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:"bearer:".concat(E.getToken())}},a=this.state.level,e.next=4,g.a.get("/api/new-game/".concat(a),t).then((function(e){var t=e.data,a=t.grid,r=t.answer,s=t.lives,c=t.level;n.setState({level:c,grid:a,answer:r,lives:s})}));case 4:this.dynamicBuildBtns();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onKeyDown",value:function(e){var t=this.state.activeBlock;"string"===typeof t[0]&&(t=[4,4]),"up"===e?t[0]-=1:"down"===e?t[0]+=1:"left"===e?t[1]-=1:t[1]+=1,9===t[0]&&(t[0]=0),9===t[1]&&(t[1]=0),-1===t[0]&&(t[0]=8),-1===t[1]&&(t[1]=8),this.setState({activeBlock:t})}},{key:"render",value:function(){return this.state.modalBtnAction[0]?r.a.createElement(f.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(j.a,{keyName:"up,down,left,right",onKeyDown:this.onKeyDown.bind(this)}),r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},this.state.response[0]),r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:S.close},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-warning btn-md button",onClick:this.state.modalBtnAction[1]},this.state.response[1]))))),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("table",null,r.a.createElement(O,{grid:this.state.grid,answer:this.state.answer,activeBlock:this.state.activeBlock,setActiveBlock:this.setActiveBlock})),r.a.createElement("div",{className:"center-item"},this.state.onScreenKeyboard),r.a.createElement("div",{className:"center-item"},r.a.createElement("button",{id:"checkBtn",className:"btn btn-warning btn-md button",type:"submit",disabled:this.state.checkBtnDisable},"Check"),r.a.createElement("button",{type:"button",className:"btn btn-warning btn-md button",onClick:this.newGameBtn},"New Game"))))}}]),t}(r.a.Component),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={level:a.props.match.params.handle},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement(w,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(C,{level:this.state.level}))))}}]),t}(r.a.Component),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:"",auth:E.getAuth(),alert:""},a.handleSubmit=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={inputUsername:a.state.username,inputPassword:a.state.password},e.next=4,g.a.post("/login",n).then((function(e){var t=[r.a.createElement("div",{class:"alert alert-warning",role:"alert"},e.data.data)];a.setState({alert:t[0]}),localStorage.setItem("sudo",e.data.token)})).catch((function(e){console.log(e)}));case 4:return e.next=6,a.checkAuthorization();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){"inputUsername"===e.target.name?a.setState({username:e.target.value}):a.setState({password:e.target.value})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"checkAuthorization",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.check();case 2:this.setState({auth:E.getAuth()});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.auth?r.a.createElement(f.a,{to:"/"}):r.a.createElement("div",{className:"bg form-place"},r.a.createElement("form",{className:"form-signin",onSubmit:this.handleSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Sign in to play"),r.a.createElement("label",{for:"inputUsername",className:"sr-only"},"Username"),r.a.createElement("input",{name:"inputUsername",onChange:this.handleChange,type:"text",id:"inputUsername",className:"form-control",placeholder:"Username",required:!0,autofocus:""}),r.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{name:"inputPassword",onChange:this.handleChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),r.a.createElement("div",{className:"checkbox mb-3"},r.a.createElement("p",null,"Dont have an account?",r.a.createElement(b.b,{to:"/signup"},"Create account"))),this.state.alert,r.a.createElement("button",{className:"btn btn-lg btn-warning btn-block",type:"submit"},"Sign in")))}}]),t}(r.a.Component),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={alert:"",name:"",username:"",password:"",cPassword:"",redirect:!1},a.handleSubmit=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={inputName:a.state.name,inputUsername:a.state.username,inputPassword:a.state.password,confirmPassword:a.state.cPassword},e.next=4,g.a.post("/signup",n).then((function(e){var t=[r.a.createElement("div",{class:"alert alert-warning",role:"alert"},e.data.reason)];"User account created."===e.data.reason?a.setState({redirect:!0}):a.setState({alert:t[0]})})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){"inputName"===e.target.name?a.setState({name:e.target.value}):"inputUsername"===e.target.name?a.setState({username:e.target.value}):"inputPassword"===e.target.name?a.setState({password:e.target.value}):a.setState({cPassword:e.target.value})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(f.a,{to:"/login"}):r.a.createElement("div",{className:"bg form-place"},r.a.createElement("form",{className:"form-signin",onSubmit:this.handleSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Signup"),r.a.createElement("label",{for:"inputName",className:"sr-only"},"Name"),r.a.createElement("input",{name:"inputName",onChange:this.handleChange,type:"text",id:"inputName",className:"form-control",placeholder:"Enter Name",required:!0,autofocus:""}),r.a.createElement("label",{for:"inputUsername",className:"sr-only"},"Username"),r.a.createElement("input",{name:"inputUsername",onChange:this.handleChange,type:"text",id:"inputUsername",className:"form-control",placeholder:"Username",required:!0,autofocus:""}),r.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{name:"inputPassword",onChange:this.handleChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),r.a.createElement("label",{for:"confirmPassword",className:"sr-only"},"Confirm Password"),r.a.createElement("input",{name:"confirmPassword",onChange:this.handleChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Confirm Password",required:!0}),r.a.createElement("span",null,this.state.alert),r.a.createElement("button",{className:"btn btn-lg btn-warning btn-block",type:"submit"},"Sign up")))}}]),t}(r.a.Component),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={alert:"",name:"",username:"",password:"",cPassword:""},a.handleSubmit=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={inputName:a.state.name,inputUsername:a.state.username,inputPassword:a.state.password,confirmPassword:a.state.cPassword},s={headers:{Authorization:"bearer:".concat(E.getToken())}},e.next=5,g.a.post("/edit",n,s).then((function(e){var t=[r.a.createElement("div",{class:"alert alert-warning",role:"alert"},e.data.response)];a.setState({alert:t[0]}),console.log(a.state.alert)})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){"inputName"===e.target.name?a.setState({name:e.target.value}):"inputUsername"===e.target.name?a.setState({username:e.target.value}):"inputPassword"===e.target.name?a.setState({password:e.target.value}):a.setState({cPassword:e.target.value})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement(w,null),r.a.createElement("div",{className:"form-place editProfile"},r.a.createElement("form",{className:"form-signin",onSubmit:this.handleSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Edit User"),r.a.createElement("label",{for:"inputName",className:"sr-only"},"Name"),r.a.createElement("input",{name:"inputName",onChange:this.handleChange,type:"text",id:"inputName",className:"form-control",placeholder:"Enter Name",required:!0,autofocus:""}),r.a.createElement("label",{for:"inputUsername",className:"sr-only"},"Username"),r.a.createElement("input",{name:"inputUsername",onChange:this.handleChange,type:"text",id:"inputUsername",className:"form-control",placeholder:"Username",required:!0,autofocus:""}),r.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{name:"inputPassword",onChange:this.handleChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),r.a.createElement("label",{for:"confirmPassword",className:"sr-only"},"Confirm Password"),r.a.createElement("input",{name:"confirmPassword",onChange:this.handleChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Confirm Password",required:!0}),r.a.createElement("span",null,this.state.alert),r.a.createElement("button",{className:"btn btn-lg btn-warning btn-block",type:"submit"},"Update Account"))))}}]),t}(r.a.Component),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={level:a.props.match.params.handle},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement(w,null),r.a.createElement("div",{class:"jumbotron jumbotron-fluid"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"display-4"},"Sudoku Webapp"),r.a.createElement("p",{class:"lead"},"Sudoku is a logic-based, combinatorial number-placement puzzle. This app was built with React and nodeJS. "))))}}]),t}(r.a.Component),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={userdata:{}},a.makeTable=function(){for(var e=[],t=a.state.userdata,n=0;n<t.length;n++){var s=[];s.push(r.a.createElement("td",null,n+1)),s.push(r.a.createElement("td",null,t[n].username)),s.push(r.a.createElement("td",null,t[n].highscore)),e.push(r.a.createElement("tr",null,s))}return e},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:"bearer:".concat(E.getToken())}},e.next=3,g.a.get("/api/users/highscore",t).then((function(e){a.setState({userdata:e.data.data})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement(w,null),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table highscoreTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Username"),r.a.createElement("th",{scope:"col"},"Score"))),r.a.createElement("tbody",null,this.makeTable()))))}}]),t}(r.a.Component),D=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return r.a.createElement(f.b,Object.assign({},a,{render:function(e){return E.getAuth()?r.a.createElement(t,e):r.a.createElement(f.a,{to:{pathname:"/login"}})}}))},M=function(e){return r.a.createElement(b.a,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/signup",component:B}),r.a.createElement(f.b,{exact:!0,path:"/login",component:A}),r.a.createElement(f.b,{exact:!0,path:"/highscore",component:q}),r.a.createElement(f.b,{exact:!0,path:"/about",component:U}),r.a.createElement(D,{exact:!0,path:"/",component:k}),r.a.createElement(D,{path:"/new-game/:handle",component:x}),r.a.createElement(D,{exact:!0,path:"/edit-user",component:P})))},T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={auth:!1,loading:!0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,E.check();case 3:e.t1=e.sent,e.t2={auth:e.t1,loading:!1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{class:"jumbotron jumbotron-fluid"},r.a.createElement("div",{class:"container"},r.a.createElement("h2",{class:"display-4"},"Sudoku Webapp",r.a.createElement("p",{class:"spinner-border text-primary",role:"status"},r.a.createElement("span",{class:"sr-only"},"Loading..."))),r.a.createElement("p",null,"If loading persists, ",r.a.createElement("a",{href:"/"},"Click Me")))):r.a.createElement("div",{className:"App"},r.a.createElement(M,null))}}]),t}(n.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(s.render)(r.a.createElement(T,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");L?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}()}},[[40,1,2]]]);
//# sourceMappingURL=main.aa5056e5.chunk.js.map