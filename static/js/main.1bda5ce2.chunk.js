(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{119:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),r=n(35),a=n.n(r),c=n(18),o=n(23),u=n(24),l=n(28),j=n(27),d=(n(119),n(30)),b=n.n(d),p=n(1),h=function(){return Object(p.jsxs)("nav",{className:b.a.nav,children:[Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(c.b,{to:"/profile",className:function(e){return e.isActive?b.a.active:""},children:"Profile"})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(c.b,{to:"/dialogs",className:function(e){return e.isActive?b.a.active:""},children:"Messages"})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(c.b,{to:"/users",className:function(e){return e.isActive?b.a.active:""},children:"Users"})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(c.b,{to:"/news",className:function(e){return e.isActive?b.a.active:""},children:"News"})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(c.b,{to:"/music",className:function(e){return e.isActive?b.a.active:""},children:"Music"})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(c.b,{to:"/settings",className:function(e){return e.isActive?b.a.active:""},children:"Settings"})})]})},O=n(15),f=function(){return Object(p.jsx)("div",{children:"News"})},g=function(){return Object(p.jsx)("div",{children:"Music"})},m=function(){return Object(p.jsx)("div",{children:"Settings"})},x=n(64),v=n.n(x),C=n(72),w=n.n(C),P=function(e){return Object(p.jsx)("div",{className:w.a.dialog+" "+w.a.active,children:Object(p.jsx)(c.b,{to:"/dialogs"+e.id,children:e.name})})},_=n(92),T=n.n(_),y=function(e){return Object(p.jsx)("div",{className:T.a.message,children:e.message})},S=n(47),M=function(e){var t=Object(S.a)({initialValues:{newMessage:""},onSubmit:function(n){e.sendMessage(n.newMessage),t.resetForm()}});return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)("textarea",{placeholder:"Enter text",name:"newMessage",onChange:t.handleChange,value:t.values.newMessage})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",children:"Add Message"})})]})},A=n(17),I=n(16),N=n(8),k="SEND_MESSAGE",F={dialogs:[{id:1,name:"Oleg"},{id:2,name:"Dimas"},{id:3,name:"Any"},{id:4,name:"Ilia"}],messages:[{id:1,message:"How are you"},{id:2,message:"How are you"},{id:3,message:"How are you"}]},E=function(e){return{type:k,newMessage:e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:var n=t.newMessage;return Object(N.a)(Object(N.a)({},e),{},{messages:[].concat(Object(I.a)(e.messages),[{id:4,message:n}]),newMessage:""});default:return e}},D=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(M,{sendMessage:this.props.sendMessage})})}}]),n}(i.a.Component),L=Object(A.b)((function(e){return{}}),{sendMessage:E})(D),z=n(102),R=function(e){return{isAuth:e.authMe.isAuth}};function B(e){return Object(A.b)(R)((function(t){t.isAuth;var n=Object(z.a)(t,["isAuth"]);return t.isAuth?Object(p.jsx)(e,Object(N.a)({},n)):Object(p.jsx)(O.a,{to:"/login"})}))}var H=Object(A.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessage:E})(B((function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(p.jsx)(P,{name:e.name,id:e.id},e.id)})),s=t.messages.map((function(e){return Object(p.jsx)(y,{message:e.message},e.id)}));return Object(p.jsxs)("div",{className:v.a.dialogs,children:[Object(p.jsx)("div",{className:v.a.dialogItems,children:n}),Object(p.jsxs)("div",{className:v.a.messages,children:[Object(p.jsx)("div",{children:s}),Object(p.jsx)("div",{children:Object(p.jsx)(L,{})})]})]})}))),G=n(95),Z=n.n(G).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"5883697e-1933-44d6-978d-c735fd6eee7a"}}),V=function(e,t){return Z.get("users?page=".concat(e," &count").concat(t))},q=function(e){return Z.post("follow/".concat(e))},W=function(e){return Z.get("profile/".concat(e))},J=function(e){return Z.get("profile/status/".concat(e))},K=function(e){return Z.put("profile/status",{status:e})},Q=function(){return Z.get("auth/me")},X=function(e){return Z.post("/auth/login",e)},Y=function(){return Z.delete("/auth/login")},$="FOLLOW",ee="UNFOLLOW",te="SET_USERS",ne="SET_USERS_COUNT",se="SET_TOTAL_COUNT",ie="TOGGLE_IS_FETCHING",re="TOGGLE_FOLLOW_IS_PROGRESS",ae={users:[],totalCount:0,pageSize:5,currentPage:1,error:"",isFetching:!1,followingInProgress:[]},ce=function(e){return{type:$,userId:e}},oe=function(e){return{type:ee,userId:e}},ue=function(e){return{type:te,users:e}},le=function(e){return{type:ne,currentPage:e}},je=function(e){return{type:se,totalCount:e}},de=function(e){return{type:ie,isFetching:e}},be=function(e,t){return{type:re,isFetching:e,userId:t}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(N.a)(Object(N.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(N.a)(Object(N.a)({},e),{},{followed:!0}):e}))});case ee:return Object(N.a)(Object(N.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(N.a)(Object(N.a)({},e),{},{followed:!1}):e}))});case te:return Object(N.a)(Object(N.a)({},e),{},{users:t.users});case ne:return Object(N.a)(Object(N.a)({},e),{},{currentPage:t.currentPage});case se:return Object(N.a)(Object(N.a)({},e),{},{totalCount:t.totalCount});case ie:return Object(N.a)(Object(N.a)({},e),{},{isFetching:t.isFetching});case re:return Object(N.a)(Object(N.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(I.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},he=n.p+"static/media/young-user-icon_5f450e6354e9e.4ce1ce10.png",Oe=n(73),fe=n.n(Oe),ge=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:n.map((function(t){return Object(p.jsx)("span",{className:e.currentPage===t?fe.a.selectedPage:"",onClick:function(){e.onPageChange(t)},children:t+"..."})}))}),e.users.map((function(t){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsxs)(c.b,{to:"/profile/"+t.id,children:[" ",Object(p.jsx)("img",{src:null!==t.photos.small?t.photos.small:he,alt:"image",className:fe.a.usersPhoto},t.id)]})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollowTC(t.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followTC(t.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:"u.location.city"}),Object(p.jsx)("div",{children:"u.location.country"})]})]})]},t.id)}))]})},me=n.p+"static/media/preloader.c7d9f081.gif",xe=function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:me,alt:""})})},ve=n(103),Ce=Object(ve.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),we=function(e){return e.usersPage.totalCount},Pe=function(e){return e.usersPage.pageSize},_e=function(e){return e.usersPage.currentPage},Te=function(e){return e.usersPage.isFetching},ye=function(e){return e.usersPage.followingInProgress},Se=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).onPageChange=function(t){e.props.getUsersTC(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersTC(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:this.props.isFetching?Object(p.jsx)(xe,{}):null}),Object(p.jsx)(ge,{onPageChange:this.onPageChange,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalCount:this.props.totalCount,unfollow:this.props.unfollow,follow:this.props.follow,users:this.props.users,setToggleFollowingProgress:this.props.setToggleFollowingProgress,followingInProgress:this.props.followingInProgress,isFetching:this.props.isFetching,followTC:this.props.followTC,unfollowTC:this.props.unfollowTC})]})}}]),n}(i.a.Component),Me=Object(A.b)((function(e){return{users:Ce(e),totalCount:we(e),pageSize:Pe(e),currentPage:_e(e),isFetching:Te(e),followingInProgress:ye(e)}}),{follow:ce,unfollow:oe,setUsers:ue,setCurrentPage:le,setTotalUsersCount:je,toggleIsFetching:de,setToggleFollowingProgress:be,getUsersTC:function(e,t){return function(n){n(de(!0)),V(e,t).then((function(t){n(de(!1)),n(le(e)),n(ue(t.data.items)),n(je(t.data.totalCount))}))}},followTC:function(e){return function(t){t(be(!0,e)),q(e).then((function(n){0===n.data.resultCode&&ce(e),t(be(!1,e))}))}},unfollowTC:function(e){return function(t){t(be(!0,e)),q(e).then((function(n){0===n.data.resultCode&&oe(e),t(be(!1,e))}))}}})(B(Se)),Ae=n(96),Ie=n.n(Ae),Ne=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deActivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatusTC(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){e.status!==this.props.status&&this.setState({status:this.props.status}),console.log("componentDidUpdate")}},{key:"render",value:function(){return console.log("render"),Object(p.jsx)("div",{children:this.state.editMode?Object(p.jsx)("div",{children:Object(p.jsx)("input",{autoFocus:!0,onBlur:this.deActivateEditMode,onChange:this.onStatusChange,value:this.state.status})}):Object(p.jsx)("div",{children:Object(p.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"----"})})})}}]),n}(i.a.Component),ke=function(e){return e.profile?Object(p.jsx)("div",{children:Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:Ie.a.description,children:[Object(p.jsx)(c.b,{to:"/profile",children:Object(p.jsx)("img",{src:e.profile.photos.large,alt:"profile photo"})}),Object(p.jsx)("div",{children:Object(p.jsx)(Ne,{status:e.status,updateStatusTC:e.updateStatusTC})})]})})}):Object(p.jsx)(xe,{})},Fe=n(74),Ee=n.n(Fe),Ue=n(97),De=n.n(Ue),Le=function(e){return Object(p.jsxs)("div",{className:De.a.item,children:[Object(p.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb5fMw2UHXHnnNcW6t2Dpa7A_Ubc-9sTvEA&usqp=CAU",alt:"photo"}),e.messages,Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"like"})," ",e.likesCounts]})]})},ze="ADD_POST",Re="SET_USERS_PROFILE",Be="SET_STATUS",He={newPostText:"",posts:[{id:1,message:"Hi my friend",likesCounts:20},{id:2,message:"How are you",likesCounts:15}],profile:null,status:""},Ge=function(e){return{type:ze,newPostText:e}},Ze=function(e){return{type:Re,profile:e}},Ve=function(e){return{type:Be,status:e}},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ze:return Object(N.a)(Object(N.a)({},e),{},{posts:[].concat(Object(I.a)(e.posts),[{id:5,message:t.newPostText,likesCounts:12}]),newPostText:""});case Re:return Object(N.a)(Object(N.a)({},e),{},{profile:t.profile});case Be:return Object(N.a)(Object(N.a)({},e),{},{status:t.status});default:return e}},We=function(e){var t=Object(S.a)({initialValues:{newPostText:""},onSubmit:function(n){e.addPost(n.newPostText),t.resetForm()}});return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)("textarea",{placeholder:"Enter post",name:"newPostText",onChange:t.handleChange,value:t.values.newPostText})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",children:"Add Post"})})]})},Je=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(We,{addPost:this.props.addPost})})}}]),n}(i.a.Component),Ke=Object(A.b)((function(e){return{}}),{addPost:Ge})(Je),Qe=Object(A.b)((function(e){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Ge(t))}}}))((function(e){var t=e.posts.map((function(e){return Object(p.jsx)(Le,{messages:e.message,likesCounts:e.likesCounts},e.id)}));return Object(p.jsxs)("div",{className:Ee.a.postsBlock,children:[Object(p.jsx)("h3",{children:"My posts"}),Object(p.jsx)(Ke,{}),Object(p.jsx)("div",{className:Ee.a.posts,children:t})]})})),Xe=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(ke,{profile:e.profile,status:e.status,updateStatusTC:e.updateStatusTC}),Object(p.jsx)(Qe,{})]})};var Ye,$e=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.userId;e||(e="20829"),this.props.getUsersProfileTC(e),this.props.getStatusTC(e)}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(Xe,Object(N.a)(Object(N.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatusTC:this.props.updateStatusTC}))})}}]),n}(i.a.Component),et=Object(A.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{setUserProfile:Ze,toggleIsFetching:de,setStatus:Ve,getUsersProfileTC:function(e){return function(t){W(e).then((function(e){t(Ze(e.data))}))}},getStatusTC:function(e){return function(t){J(e).then((function(e){t(Ve(e.data))}))}},updateStatusTC:function(e){return function(t){K(e).then((function(n){0===n.data.resultCode&&t(Ve(e))}))}}})((Ye=$e,function(e){var t=Object(O.h)().userId;return Object(p.jsx)(Ye,Object(N.a)({userId:t},e))})),tt=n(75),nt=n.n(tt),st=function(e){return Object(p.jsxs)("header",{className:nt.a.header,children:[Object(p.jsx)(c.b,{to:"/profile",children:Object(p.jsx)("img",{src:"https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg",alt:"image"})}),Object(p.jsx)("div",{className:nt.a.loginBlock,children:e.isAuth?Object(p.jsx)("div",{style:{color:"azure"},children:e.login})&&Object(p.jsx)("button",{onClick:function(){e.logoutTC()},children:"Logout"}):Object(p.jsx)(c.b,{to:"/login",children:" Login"})})]})},it=n(76),rt=n.n(it),at=n(98),ct="SET_USER_DATA",ot="SET_IS_AUTH",ut={id:1,email:"",login:"",isAuth:!1},lt=function(e,t,n){return{type:ct,data:{id:e,login:t,email:n}}},jt=function(e){return{type:ot,value:e}},dt=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(p.jsx)(st,Object(N.a)(Object(N.a)({},this.props),{},{logoutTC:this.props.logoutTC}))}}]),n}(i.a.Component),bt=Object(A.b)((function(e){return{login:e.authMe.login,isAuth:e.authMe.isAuth}}),{logoutTC:function(){return function(e){Y().then((function(t){0===t.data.resultCode&&e(jt(!1))}))}}})(dt),pt=n(191),ht=n(187),Ot=n(188),ft=n(189),gt=n(193),mt=n(182),xt=n(185),vt=n(192),Ct=Object(A.b)((function(e){return{isAuth:e.authMe.isAuth}}),{loginTC:function(e){return function(t){X(e).then((function(e){0===e.data.resultCode&&t(jt(!0))}))}}})((function(e){Object(A.c)();var t=Object(S.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<=8&&(t.password="Must be 8 characters or less"):t.password="Required",t},onSubmit:function(n){e.loginTC(n),t.resetForm()}});return e.isAuth?Object(p.jsx)(O.a,{to:"/profile"}):Object(p.jsx)(pt.a,{container:!0,justifyContent:"center",children:Object(p.jsx)(pt.a,{item:!0,justifyContent:"center",children:Object(p.jsxs)(Ot.a,{children:[Object(p.jsxs)(mt.a,{children:[Object(p.jsxs)("p",{children:["To log in get registered",Object(p.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(p.jsx)("h1",{children:" Login "})]}),Object(p.jsx)("form",{onSubmit:t.handleSubmit,children:Object(p.jsxs)(gt.a,{children:[Object(p.jsx)(xt.a,Object(N.a)({label:"Email",margin:"normal"},t.getFieldProps("email"))),t.touched.email&&t.errors.email&&Object(p.jsx)("div",{style:{color:"red"},children:t.errors.email}),Object(p.jsx)(xt.a,Object(N.a)({type:"password",label:"Password",margin:"normal"},t.getFieldProps("password"))),t.touched.password&&t.errors.password&&Object(p.jsx)("div",{style:{color:"red"},children:t.errors.password}),Object(p.jsx)(ft.a,{label:"Remember me",control:Object(p.jsx)(ht.a,{checked:t.values.rememberMe,name:"rememberMe",onChange:t.handleChange})}),Object(p.jsx)(vt.a,{type:"submit",variant:"contained",color:"secondary",children:"Login"})]})})]})})})})),wt="INITIALIZED_SUCCESS",Pt={initialized:!1},_t=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppTC()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(bt,{}),Object(p.jsx)(h,{}),Object(p.jsx)("div",{className:"app-wrapper-content",children:Object(p.jsxs)(O.d,{children:[Object(p.jsx)(O.b,{path:"/profile/:userId",element:Object(p.jsx)(et,{})}),Object(p.jsx)(O.b,{path:"/profile/",element:Object(p.jsx)(et,{})}),Object(p.jsx)(O.b,{path:"/dialogs",element:Object(p.jsx)(H,{})}),Object(p.jsx)(O.b,{path:"/users",element:Object(p.jsx)(Me,{})}),Object(p.jsx)(O.b,{path:"/news",element:Object(p.jsx)(f,{})}),Object(p.jsx)(O.b,{path:"/music",element:Object(p.jsx)(g,{})}),Object(p.jsx)(O.b,{path:"/settings",element:Object(p.jsx)(m,{})}),Object(p.jsx)(O.b,{path:"/login",element:Object(p.jsx)(Ct,{})}),Object(p.jsx)(O.b,{path:"/404",element:Object(p.jsx)("h1",{children:"404. Page not Found "})})]})})]}):Object(p.jsx)(xe,{})}}]),n}(i.a.Component),Tt=Object(A.b)((function(e){return{initialized:e.app.initialized}}),{initializeAppTC:function(){return function(e){e(function(){var e=Object(at.a)(rt.a.mark((function e(t){var n,s,i,r,a;return rt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q();case 3:0===(n=e.sent).data.resultCode&&(s=n.data.data,i=s.id,r=s.login,a=s.email,t(lt(i,r,a))),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()).then((function(){return e({type:wt})}))}}})(_t),yt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),i(e),r(e),a(e)}))},St=n(66),Mt=n(100),At=Object(St.b)({profilePage:qe,dialogsPage:U,usersPage:pe,authMe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ct:return Object(N.a)(Object(N.a)(Object(N.a)({},e),t.data),{},{isAuth:!0});case ot:return Object(N.a)(Object(N.a)({},e),{},{isAuth:t.value});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case wt:return Object(N.a)(Object(N.a)({},e),{},{initialized:!0});default:return e}}}),It=Object(St.c)(At,Object(St.a)(Mt.a));window.store=It;var Nt=It;a.a.render(Object(p.jsx)(c.a,{children:Object(p.jsx)(A.a,{store:Nt,children:Object(p.jsx)(Tt,{})})}),document.getElementById("root")),yt()},30:function(e,t,n){e.exports={nav:"Navbar_nav__2889A",item:"Navbar_item__1RaQz",active:"Navbar_active__cOjJ_"}},64:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3uPon"}},72:function(e,t,n){e.exports={dialogItems:"DialogItem_dialogItems__1VDM_",active:"DialogItem_active__kB7lO"}},73:function(e,t,n){e.exports={usersPhoto:"Users_usersPhoto__2yZ-K",selectedPage:"Users_selectedPage__1gIoe"}},74:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__QZ2Kl",posts:"MyPosts_posts__1dU_s"}},75:function(e,t,n){e.exports={header:"Header_header__4QSu4",loginBlock:"Header_loginBlock__3UM-4"}},92:function(e,t,n){e.exports={messages:"Message_messages__27M7S",message:"Message_message__21cpV"}},96:function(e,t,n){e.exports={description:"ProfileInfo_description__2IISE"}},97:function(e,t,n){e.exports={item:"Post_item__2BVjZ"}}},[[146,1,2]]]);
//# sourceMappingURL=main.1bda5ce2.chunk.js.map