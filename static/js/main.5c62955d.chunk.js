(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),c=(a(25),a(5)),s=a(6),i=a(8),d=a(7),m=a(9),p=(a(26),function(e){return console.log(e.percentage),r.a.createElement("div",{className:"filler",style:{width:"".concat(e.percentage,"%")}})}),g=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"progressbar"},r.a.createElement(p,{percentage:this.props.percentage})),r.a.createElement("p",null,this.props.percentage,"% till completion date"))}}]),t}(n.Component),u=a(11),h=a.n(u),f=a(12),y=a.n(f),S=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).completed=function(){var e=JSON.parse(localStorage.getItem("cards"));a.state.completed?(a.setState({completed:!1}),localStorage.setItem("completed"+a.props.id,a.state.completed),e[a.props.id].completed=!1):(a.setState({completed:!0}),localStorage.setItem("completed"+a.props.id,a.state.completed),e[a.props.id].completed=!0),localStorage.setItem("cards",JSON.stringify(e)),console.log(e[a.props.id].completed)},a.percentage=function(){var e=JSON.parse(localStorage.getItem("cards")),t=y()(e[a.props.id].startday,"YYYY-MM-DD"),n=y()(e[a.props.id].endday,"YYYY-MM-DD").diff(t,"days"),r=new Date,l=(r.getMonth()+1).toString().padStart(2,"0"),o=r.getDate().toString().padStart(0,"0"),c=y()("".concat(r.getFullYear(),"-").concat(l,"-").concat(o),"YYYY-MM-DD"),s=n-y()(e[a.props.id].endday,"YYYY-MM-DD").diff(c,"days");a.setState({percentage:Math.round(s/n*100)})},a.delete=function(){var e=JSON.parse(localStorage.getItem("cards"));e.splice(a.props.id,1),localStorage.setItem("cards",JSON.stringify(e)),0===e.length&&localStorage.removeItem("cards"),window.location.reload()};var n=JSON.parse(localStorage.getItem("cards"));return a.state={completed:n[a.props.id].completed,percentage:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.percentage()}},{key:"render",value:function(){return console.log(this.state.completed),r.a.createElement("div",{className:"card"},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("h1",{style:{color:"black"}},this.props.goal),r.a.createElement(h.a,{name:"trash-alt",className:"trash",onClick:this.delete})),this.state.completed?r.a.createElement("div",{style:{display:"flex"},className:"markascomplete",onClick:this.completed},r.a.createElement(h.a,{name:"check",style:{display:"flex",justifyContent:"center",alignItems:"center"}}),r.a.createElement("p",{style:{margin:0,marginLeft:10}},"Completed. Good Job!")):r.a.createElement("div",null,r.a.createElement(g,{percentage:this.state.percentage}),r.a.createElement("div",{style:{display:"flex"},className:"markascomplete",onClick:this.completed},r.a.createElement(h.a,{name:"check",style:{display:"flex",justifyContent:"center",alignItems:"center"}}),r.a.createElement("p",{style:{margin:0,marginLeft:10}},"Mark as completed"))))}}]),t}(n.Component),E=a(33),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).rendercards=function(){if(null===localStorage.getItem("cards")||void 0===localStorage.getItem("cards"))return r.a.createElement("div",{style:{color:"white",textAlign:"center"}},r.a.createElement("p",null,"You do not have any goals set yet."),r.a.createElement("br",null),r.a.createElement("p",null,"To add one click the + button in the right corner."));var e=JSON.parse(localStorage.getItem("cards"));return r.a.createElement("div",{className:"cardouter"},e.map(function(e,t){return[r.a.createElement(S,{key:t,id:t,goal:e.goal})]}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{fontFamily:"Montserrat",fontWeight:"bold"},className:"MainPage"},r.a.createElement("h1",{style:{textAlign:"center",fontWeight:800,color:"white",paddingBottom:2}},"Goals"),r.a.createElement("div",null,this.rendercards()),r.a.createElement(E.a,{to:"/new"},r.a.createElement(h.a,{name:"plus",className:"addnew",size:"2x"})))}}]),t}(n.Component),b=a(34),O=a(37),j=a(36),w=a(18),N=a(35),I=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).onChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.appendToStorage=function(e,t){var a=localStorage.getItem(e);if(null===a&&(a=""),void 0===localStorage.getItem(e)||null===localStorage.getItem(e))localStorage.setItem(e,"["+a+t+"]");else if("string"===typeof localStorage.getItem(e)){var n=JSON.parse(a);n.push(JSON.parse(t)),localStorage.setItem("cards",JSON.stringify(n)),console.log(JSON.stringify(n))}},a.onSubmit=function(e){e.preventDefault();var t={completed:a.state.completed,startday:a.state.startday,endday:a.state.endday,goal:a.state.goal};a.appendToStorage("cards",JSON.stringify(t)),a.setState({redirect:!0}),console.log(JSON.parse(localStorage.getItem("cards")))};var n=new Date,r=(n.getMonth()+1).toString().padStart(2,"0"),l=n.getDate().toString().padStart(0,"0");return a.state={completed:!1,startday:"".concat(n.getFullYear(),"-").concat(r,"-").concat(l),endday:"",goal:"",redirect:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"AddNewPage"},r.a.createElement("h1",{style:{textAlign:"center",fontWeight:800,color:"white",margin:0}},"Add New Goal"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",name:"goal",placeholder:"Goal",onChange:this.onChange}),r.a.createElement("p",null,"Start date:"),r.a.createElement("input",{type:"date",name:"startday",value:this.state.startday,onChange:this.onChange}),r.a.createElement("br",null),r.a.createElement("p",null,"End Date:"),r.a.createElement("input",{type:"date",name:"endday",placeholder:"End Date",onChange:this.onChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Done"})),!!this.state.redirect&&r.a.createElement(N.a,{to:"/"}))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(O.a,null,r.a.createElement(j.a,{exact:!0,path:"/",component:v}),r.a.createElement(j.a,{path:"/new",component:I}),r.a.createElement(j.a,{component:v})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.5c62955d.chunk.js.map