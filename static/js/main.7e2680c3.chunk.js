(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e,s,t){e.exports={nav:"Navbar_nav__eqcMv",item:"Navbar_item__3b-uv",active:"Navbar_active__1GiTZ"}},,,function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__3To99"}},,function(e,s,t){e.exports={postsBlock:"MyPosts_postsBlock__1Rtas",posts:"MyPosts_posts__2LUjk"}},function(e,s,t){e.exports={dialogItems:"DialogItem_dialogItems__uLUZp",active:"DialogItem_active__HIfQ3"}},,function(e,s,t){e.exports={header:"Header_header__2-4SC"}},function(e,s,t){e.exports={item:"Post_item__1PIDu"}},function(e,s,t){e.exports={description:"ProfileInfo_description__2330y"}},function(e,s,t){e.exports={messages:"Message_messages__GkSED",message:"Message_message__1iHMI"}},,,,,function(e,s,t){},,function(e,s,t){"use strict";t.r(s),t.d(s,"rerenderEntireTree",(function(){return X}));t(1);var i=t(12),a=t.n(i),c=t(3),n=(t(21),t(13)),r=t.n(n),o=t(0),l=function(){return Object(o.jsx)("header",{className:r.a.header,children:Object(o.jsx)(c.b,{to:"/profile",children:Object(o.jsx)("img",{src:"https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg",alt:"image"})})})},d=t(5),j=t.n(d),b=function(){return Object(o.jsxs)("nav",{className:j.a.nav,children:[Object(o.jsx)("div",{className:j.a.item,children:Object(o.jsx)(c.b,{to:"/profile",className:function(e){return e.isActive?j.a.active:""},children:"Profile"})}),Object(o.jsx)("div",{className:j.a.item,children:Object(o.jsx)(c.b,{to:"/dialogs",className:function(e){return e.isActive?j.a.active:""},children:"Messages"})}),Object(o.jsx)("div",{className:j.a.item,children:Object(o.jsx)(c.b,{to:"/users",className:function(e){return e.isActive?j.a.active:""},children:"Users"})}),Object(o.jsx)("div",{className:j.a.item,children:Object(o.jsx)(c.b,{to:"/news",className:function(e){return e.isActive?j.a.active:""},children:"News"})}),Object(o.jsx)("div",{className:j.a.item,children:Object(o.jsx)(c.b,{to:"/music",className:function(e){return e.isActive?j.a.active:""},children:"Music"})}),Object(o.jsx)("div",{className:j.a.item,children:Object(o.jsx)(c.b,{to:"/settings",className:function(e){return e.isActive?j.a.active:""},children:"Settings"})})]})},u=t(2),h=t(10),p=t.n(h),m=t(14),x=t.n(m),g=function(e){return Object(o.jsxs)("div",{className:x.a.item,children:[Object(o.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb5fMw2UHXHnnNcW6t2Dpa7A_Ubc-9sTvEA&usqp=CAU",alt:"photo"}),e.messages,Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"like"})," ",e.likesCounts]})]})},O="UPDATE_NEW_POST_ TEXT",v="ADD_POST",_="SEND_MESSAGE",f="UPDATE_NEW_MESSAGE_TEXT",N={_state:{profilePage:{posts:[{id:1,message:"Hi my friend",likesCounts:20},{id:2,message:"How are you",likesCounts:15}],newPostText:""},dialogPage:{dialogs:[{id:1,name:"Oleg"},{id:2,name:"Dimas"},{id:3,name:"Any"},{id:4,name:"Ilia"}],messages:[{id:1,message:"How are you"},{id:2,message:"How are you"},{id:3,message:"How are you"}],newMessage:""}},_callSubscriber:function(e){console.log("d")},getState:function(){return this._state},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){if(e.type===v){var s={id:5,message:this._state.profilePage.newPostText,likesCounts:12};this._state.profilePage.posts.push(s),this._state.profilePage.newPostText="",this._callSubscriber(this._state)}else if(e.type===O)this._state.profilePage.newPostText=e.newText,this._callSubscriber(this._state);else if(e.type===f)this._state.dialogPage.newMessage=e.body,this._callSubscriber(this._state);else if(e.type===_){var t=this._state.dialogPage.newMessage;this._state.dialogPage.messages.push({id:4,message:t}),this._callSubscriber(this._state)}}},P=function(e){var s=e.posts.map((function(e){return Object(o.jsx)(g,{messages:e.message,likesCounts:e.likesCounts})}));return Object(o.jsxs)("div",{className:p.a.postsBlock,children:[Object(o.jsx)("h3",{children:"My posts"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{value:e.newPostText,onChange:function(s){var t=s.currentTarget.value;e.dispatch({type:O,newText:t})}})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){e.dispatch({type:v})},children:" Add post"})})]}),Object(o.jsx)("div",{className:p.a.posts,children:s})]})},w=t(15),T=t.n(w),y=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",alt:"images"}),Object(o.jsx)("div",{className:T.a.description,children:"ava + description"})]})})},S=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(y,{}),Object(o.jsx)(P,{posts:e.posts,newPostText:e.newPostText,dispatch:e.dispatch})]})},A=t(8),M=t.n(A),k=t(11),E=t.n(k),C=function(e){return Object(o.jsx)("div",{className:E.a.dialog+" "+E.a.active,children:Object(o.jsx)(c.b,{to:"/dialogs"+e.id,children:e.name})})},D=t(16),I=t.n(D),H=function(e){return Object(o.jsx)("div",{className:I.a.message,children:e.message})},U=function(e){var s=e.store._state,t=s.dialogPage.dialogs.map((function(e){return Object(o.jsx)(C,{name:e.name,id:e.id})})),i=s.dialogPage.messages.map((function(e){return Object(o.jsx)(H,{message:e.message})})),a=s.dialogPage.newMessage;return Object(o.jsxs)("div",{className:M.a.dialogs,children:[Object(o.jsx)("div",{className:M.a.dialogItems,children:t}),Object(o.jsxs)("div",{className:M.a.messages,children:[Object(o.jsx)("div",{children:i}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{placeholder:"Enter text",value:a,onChange:function(s){a=s.currentTarget.value,e.store.dispatch({type:f,body:a})},children:" "})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){e.store.dispatch({type:_})},children:"Send"})})]})]})]})},B=function(){return Object(o.jsx)("div",{children:"News"})},F=function(){return Object(o.jsx)("div",{children:"Music"})},G=function(){return Object(o.jsx)("div",{children:"Settings"})},L=function(){return Object(o.jsx)("div",{children:"Users"})},q=function(e){return Object(o.jsxs)("div",{className:"app-wrapper",children:[Object(o.jsx)(l,{}),Object(o.jsx)(b,{}),Object(o.jsx)("div",{className:"app-wrapper-content",children:Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{path:"/profile",element:Object(o.jsx)(S,{posts:e.state.profilePage.posts,dispatch:e.dispatch,newPostText:e.state.profilePage.newPostText})}),Object(o.jsx)(u.a,{path:"/dialogs",element:Object(o.jsx)(U,{store:e.store})}),Object(o.jsx)(u.a,{path:"/users/",element:Object(o.jsx)(L,{})}),Object(o.jsx)(u.a,{path:"/news/",element:Object(o.jsx)(B,{})}),Object(o.jsx)(u.a,{path:"/music/",element:Object(o.jsx)(F,{})}),Object(o.jsx)(u.a,{path:"/settings/",element:Object(o.jsx)(G,{})})]})})]})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(s){var t=s.getCLS,i=s.getFID,a=s.getFCP,c=s.getLCP,n=s.getTTFB;t(e),i(e),a(e),c(e),n(e)}))},X=function(e){a.a.render(Object(o.jsx)(c.a,{children:Object(o.jsx)(q,{state:e,dispatch:N.dispatch.bind(N),store:N})}),document.getElementById("root"))};X(N.getState()),N.subscribe(X),W()}],[[23,1,2]]]);
//# sourceMappingURL=main.7e2680c3.chunk.js.map