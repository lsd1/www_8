global.webpackJsonp([3],{"5vTQ":function(t,o,e){"use strict";var a=e("UCfo");o.a={data:function(){return{motto:"Hello World"}},components:{card:a.a},methods:{gotoGame:function(t){this.reLaunchPageTo(this.router+t)}}}},LbwD:function(t,o){},MhDc:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("5nAL"),n=e.n(a),s=e("Qt9A");new n.a(s.a).$mount()},Qt9A:function(t,o,e){"use strict";var a=e("5vTQ"),n=e("pBzR");var s=function(t){e("LbwD")},r=e("ybqe")(a.a,n.a,s,"data-v-161afc18",null);o.a=r.exports},pBzR:function(t,o,e){"use strict";var a={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("img",{staticClass:"girl",attrs:{src:t.imgSrc+"static/img/girl.png",alt:""}}),t._v(" "),e("img",{staticClass:"logo",attrs:{src:"../../assets/logo.png",alt:""}}),t._v(" "),e("card",{attrs:{text:t.motto,mpcomid:"0"}}),t._v(" "),e("form",{staticClass:"form-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.motto,expression:"motto"}],staticClass:"form-control",attrs:{type:"text",placeholder:"v-model",eventid:"0"},domProps:{value:t.motto},on:{input:function(o){o.target.composing||(t.motto=o.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.motto,expression:"motto",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"v-model.lazy",eventid:"1"},domProps:{value:t.motto},on:{change:function(o){t.motto=o.target.value}}})]),t._v(" "),e("a",{staticClass:"counter",attrs:{eventid:"2"},on:{click:function(o){t.gotoGame("pages/counter/main")}}},[t._v("去往Vuex示例页面")]),t._v(" "),e("a",{staticClass:"counter",attrs:{eventid:"3"},on:{click:function(o){t.gotoGame("pages/logs/main")}}},[t._v("去往logs页面")])],1)},staticRenderFns:[]};o.a=a}},["MhDc"]);