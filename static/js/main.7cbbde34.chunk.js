(this.webpackJsonpemployee=this.webpackJsonpemployee||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),m=t.n(n),r=t(2),o=t.n(r),s=t(3),i=t(4),l=t(6),c=t(5);t(12);var p=function(e){return m.a.createElement("div",{className:"jumbotron jumbotron-fluid"},m.a.createElement("div",{className:"container text-center"},m.a.createElement("h1",{className:"display-4"},"Employee Directory")))};var N=function(e){return m.a.createElement("thead",{className:"tableHead thead-dark"},m.a.createElement("tr",null,m.a.createElement("th",{scope:"col-sm-2"},"ID#"),m.a.createElement("th",{scope:"col-sm-2"},"Profile Picture"),m.a.createElement("th",{scope:"col-sm-2"},"First Name",m.a.createElement("button",{type:"button",className:"btn btn-dark",id:"nameBtn",onClick:function(){return e.firstNameClicked()}},m.a.createElement("i",{className:"material-icons"},"swap_vert"))),m.a.createElement("th",{scope:"col-sm-2"},"Last Name",m.a.createElement("button",{type:"button",className:"btn btn-dark",id:"nameBtn",onClick:function(){return e.lastNameClicked()}},m.a.createElement("i",{className:"material-icons"},"swap_vert"))),m.a.createElement("th",{scope:"col-sm-2"},"Email"),m.a.createElement("th",{scope:"col-sm-2"},"Phone")))};t(13);var u=function(e){return m.a.createElement("table",{className:"table table-bordered"},e.children)};t(14);var f=function(e){return m.a.createElement("tbody",{className:"tableBody"},m.a.createElement("tr",null,m.a.createElement("td",null,e.id),m.a.createElement("img",{alt:e.name,src:e.image,id:e.id,className:"profilePictures img-container"}),m.a.createElement("td",null,e.firstName),m.a.createElement("td",null,e.lastName),m.a.createElement("td",null,e.email),m.a.createElement("td",null,e.phone)))},d=[{id:1,firstName:"Aaron",lastName:"Smith",image:"https://randomuser.me/api/portraits/men/25.jpg",email:"Aaron_Smith3241@gmail.com",phone:"(218)-316-2655"},{id:2,firstName:"Alyssa",lastName:"Chiang",image:"https://randomuser.me/api/portraits/women/70.jpg",email:"AlyChiang77@yahoo.com",phone:"(478-488-3724)"},{id:3,firstName:"Jane",lastName:"Wills",image:"https://randomuser.me/api/portraits/women/81.jpg",email:"JaneWillWin@me.com",phone:"(775)-338-0991"},{id:4,firstName:"Lenny",lastName:"Stafford",image:"https://randomuser.me/api/portraits/men/71.jpg",email:"L_Stafford77@yahoo.com",phone:"(212)-572-0559"},{id:5,firstName:"Ethan",lastName:"Chen",image:"https://randomuser.me/api/portraits/men/67.jpg",email:"Chen[Ethan]@gmail.com",phone:"(620) 454-1799"},{id:6,firstName:"Claire",lastName:"Robbins",image:"https://randomuser.me/api/portraits/women/75.jpg",email:"CLRobbins@gmail.com",phone:"(995) 565-4039"},{id:7,firstName:"Mai",lastName:"Liu",image:"https://randomuser.me/api/portraits/women/17.jpg",email:"MaiQLiu21@yahoo.com",phone:"(519) 978-4733"},{id:8,firstName:"Vivienne",lastName:"Keeling",image:"https://randomuser.me/api/portraits/women/28.jpg",email:"VmK89@me.com",phone:"(966) 291-5045"},{id:9,firstName:"Gregor",lastName:"Compton",image:"https://randomuser.me/api/portraits/men/19.jpg",email:"Greg_C@gmail.com",phone:"(514) 531-8471"},{id:10,firstName:"Luc",lastName:"Bryant",image:"https://randomuser.me/api/portraits/men/18.jpg",email:"Luc1Bryant@gmail.com",phone:"(266) 855-0710"},{id:11,firstName:"Annabelle",lastName:"Moon",image:"https://randomuser.me/api/portraits/women/33.jpg",email:"SailorMoon91@yahoo.com",phone:"(675) 844-7400"},{id:12,firstName:"Darnell",lastName:"Hawkins",image:"https://randomuser.me/api/portraits/men/7.jpg",email:"dHawkins86@gmail.com",phone:"(711) 265-9193"}],h=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,m=new Array(n),r=0;r<n;r++)m[r]=arguments[r];return(e=a.call.apply(a,[this].concat(m))).state={employees:d,firstNameCheck:!0,lastNameCheck:!1},e.firstNameClicked=function(){if(console.log("firstNameClicked!"),!0===e.state.firstNameCheck){var a=e.sortFirstName(d);d.forEach((function(e){console.log("".concat(e.id," ").concat(e.firstName," ").concat(e.lastName))})),e.setState({employee:a,firstNameCheck:!1})}else{var t=e.sortFirstNameBackwards(d);d.forEach((function(e){console.log("".concat(e.id," ").concat(e.firstName," ").concat(e.lastName))})),e.setState({employee:t,firstNameCheck:!0})}},e.sortFirstName=function(e){e.sort((function(e,a){var t=e.firstName.toLowerCase(),n=a.firstName.toLowerCase();return t<n?-1:t>n?1:0})),d.forEach((function(e){console.log("".concat(e.id," ").concat(e.firstName," ").concat(e.lastName))}))},e.sortFirstNameBackwards=function(e){e.sort((function(e,a){var t=e.firstName.toLowerCase(),n=a.firstName.toLowerCase();return n<t?-1:n>t?1:0})),d.forEach((function(e){console.log("".concat(e.id," ").concat(e.firstName," ").concat(e.lastName))}))},e.lastNameClicked=function(){if(console.log("lastNameClicked!"),!0===e.state.lastNameCheck){var a=e.sortLastName(d);e.setState({employee:a,lastNameCheck:!1})}else{var t=e.sortLastNameBackwards(d);e.setState({employee:t,lastNameCheck:!0})}},e.sortLastName=function(e){e.sort((function(e,a){var t=e.lastName.toLowerCase(),n=a.lastName.toLowerCase();return t<n?-1:t>n?1:0})),d.forEach((function(e){console.log("".concat(e.id," ").concat(e.firstName," ").concat(e.lastName))}))},e.sortLastNameBackwards=function(e){e.sort((function(e,a){var t=e.lastName.toLowerCase(),n=a.lastName.toLowerCase();return n<t?-1:n>t?1:0})),d.forEach((function(e){console.log("".concat(e.id," ").concat(e.firstName," ").concat(e.lastName))}))},e}return Object(i.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(p,null),m.a.createElement(u,null,m.a.createElement(N,{firstNameCheck:this.state.firstNameCheck,lastNameCheck:this.state.lastNameCheck,firstNameClicked:this.firstNameClicked,lastNameClicked:this.lastNameClicked}),this.state.employees.map((function(e){return m.a.createElement(f,{firstName:e.firstName,lastName:e.lastName,image:e.image,id:e.id,email:e.email,phone:e.phone})}))))}}]),t}(n.Component);o.a.render(m.a.createElement(h,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.7cbbde34.chunk.js.map