(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"42f4":function(e,t,s){"use strict";s("f68c")},c3f3:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"bg-grey-3 column"},[s("div",{staticClass:"row q-pa-sm bg-accent"},[s("q-input",{staticClass:"col",attrs:{square:"",filled:"","bg-color":"white",placeholder:"Add task",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTask(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:e.addTask}})]},proxy:!0}]),model:{value:e.newTask,callback:function(t){e.newTask=t},expression:"newTask"}})],1),s("q-list",{staticClass:"bg-white",attrs:{separator:"",bordered:""}},e._l(e.tasks,(function(t,n){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.title,class:{"done bg-blue-1":t.done},attrs:{clickable:""},on:{click:function(e){t.done=!t.done}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-checkbox",{staticClass:"no-pointer-events",attrs:{color:"accent"},model:{value:t.done,callback:function(s){e.$set(t,"done",s)},expression:"task.done"}})],1),s("q-item-section",[s("q-item-label",[e._v(e._s(t.title))])],1),t.done?s("q-item-section",{attrs:{side:""}},[s("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"delete"},on:{click:function(t){return t.stopPropagation(),e.deleteTask(n)}}})],1):e._e()],1)})),1),e.tasks.length?e._e():s("div",{staticClass:"no-tasks absolute-center"},[s("q-icon",{attrs:{name:"check",size:"100px",color:"accent"}}),s("div",{staticClass:"text-h5 text-accent text-center"},[e._v("\n      No tasks\n    ")])],1)],1)},a=[],c=(s("a434"),{data(){return{newTask:"",tasks:[]}},methods:{deleteTask(e){this.$q.dialog({title:"Confirm",message:"Really delete?",cancel:!0,persistent:!0}).onOk((()=>{const t=this.tasks[e].title;this.tasks.splice(e,1),this.$q.notify("Task: '"+t+"' Deleted")})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))},addTask(){this.tasks.push({title:this.newTask,done:!1}),this.newTask=""}}}),i=c,o=(s("42f4"),s("2877")),l=s("9989"),r=s("27f9"),d=s("9c40"),k=s("1c1c"),u=s("66e5"),p=s("4074"),f=s("8f8e"),m=s("0170"),b=s("0016"),h=s("714f"),q=s("eebe"),w=s.n(q),v=Object(o["a"])(i,n,a,!1,null,null,null);t["default"]=v.exports;w()(v,"components",{QPage:l["a"],QInput:r["a"],QBtn:d["a"],QList:k["a"],QItem:u["a"],QItemSection:p["a"],QCheckbox:f["a"],QItemLabel:m["a"],QIcon:b["a"]}),w()(v,"directives",{Ripple:h["a"]})},f68c:function(e,t,s){}}]);