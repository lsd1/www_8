(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1365:function(_,e,t){},838:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(113),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(114),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(115),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(116),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(117),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),dva__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(91),dva__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_6__),dva_router__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(31),dva_router__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_7__),react_intl_universal__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(16),react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_intl_universal__WEBPACK_IMPORTED_MODULE_8__),_layouts___WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(863),_component_Aside__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(910),_component_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(911),_UserInfo_less__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(912),_UserInfo_less__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_UserInfo_less__WEBPACK_IMPORTED_MODULE_12__),_Index_less__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1365),_Index_less__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_Index_less__WEBPACK_IMPORTED_MODULE_13__),_dec,_class,enterModule;enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var Index=(_dec=Object(dva__WEBPACK_IMPORTED_MODULE_6__.connect)(function(_){var e=_.user,t=_.global;_.loading;return{user:e,global:t}}),_dec(_class=function(_PureComponent){function Index(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Index),(e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Index).call(this,_))).state={},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Index,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Index,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var _=this.props,e=_.user,t=e.userSetting,a=e.userInfo,r=_.global.lang;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layouts___WEBPACK_IMPORTED_MODULE_9__.a,{white:!0,className:"user userInfo container"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("article",{className:"article flex-box flex-between"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_Aside__WEBPACK_IMPORTED_MODULE_10__.a,null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section",{className:"content"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_Box__WEBPACK_IMPORTED_MODULE_11__.a,{title:react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USERINFO_SAFETY"),className:"mt-sm"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dl",{className:"userInfo-safety"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dd",{className:" flex-box flex-between"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item"},react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USER_MAILBOX")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item mid"},t.email?react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USERINFO_THEN_BIND"):react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USERINFO_NO_BIND")," "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item tr ellipsis"},t.email?t.email:react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_7__.Link,{className:"yellow",to:"/".concat(r,"/user/safety")},react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USERINFO_GO_BIND")))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dd",{className:" flex-box flex-between"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item"},react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("GLOBAL_PHONE")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item  mid"},t.mobilePhone?react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USERINFO_THEN_BIND"):react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USERINFO_NO_BIND")," "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item tr"},t.mobilePhone?t.mobilePhone:react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_7__.Link,{className:"yellow",to:"/".concat(r,"/user/safety")},react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USERINFO_GO_BIND"))," ")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dd",{className:" flex-box flex-between"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item"},react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USER_LOGIN_PAD")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item  mid"},"******"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item tr"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_7__.Link,{className:"yellow",to:"/".concat(r,"/user/editPwd")},react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USERADV_EDIT")))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dd",{className:" flex-box flex-between"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item"},react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USER_LOGIN"),"IP"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item  mid"},t.ip),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item tr"})))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_Box__WEBPACK_IMPORTED_MODULE_11__.a,{title:react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USERINFO_IDENTITY_AUTHENTICATION"),className:"mt-lg"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dl",{className:"userInfo-safety"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dd",{className:" flex-box flex-between"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item"},react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("TRADE_REAL")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item mid"},t.idCard?"".concat(t.realName,"，").concat(t.idCard):null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item tr"},t.idCard?a.username:react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_7__.Link,{className:"yellow",to:"/".concat(r,"/user/safety")},react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USERINFO_THEN_APPROVE"))," ")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dd",{className:" flex-box flex-between"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item"},react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USERINFO_BUSI_AUTHENTICATION")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item  mid"}," ",2===t.level?react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USERINFO_THEN_BIND"):""),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"flex-item tr"}," ",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_7__.Link,{className:"yellow",to:"/".concat(r,"/ads/release")},2===t.level?react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("TOP_RELEASE"):react_intl_universal__WEBPACK_IMPORTED_MODULE_8___default.a.get("USERINFO_THEN_APPROVE")))))))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Index}(react__WEBPACK_IMPORTED_MODULE_5__.PureComponent))||_class),_default=Index,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(Index,"Index","D:\\www_8\\bbtoken02\\src\\pages\\UserInfo\\Index\\Index.js"),reactHotLoader.register(_default,"default","D:\\www_8\\bbtoken02\\src\\pages\\UserInfo\\Index\\Index.js"),leaveModule(module))}.call(this,__webpack_require__(18)(module))},863:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(113),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(114),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(115),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(116),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(117),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(43),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),dva_router__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(31),dva_router__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_7__),dva__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(91),dva__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_8__),react_document_title__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(864),react_document_title__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_document_title__WEBPACK_IMPORTED_MODULE_9__),prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),_dec,_class,_class2,_temp,enterModule;enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var Index=(_dec=Object(dva__WEBPACK_IMPORTED_MODULE_8__.connect)(function(_){return{global:_.global}}),Object(dva_router__WEBPACK_IMPORTED_MODULE_7__.withRouter)(_class=_dec((_temp=_class2=function(_PureComponent){function Index(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Index),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Index).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Index,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Index,[{key:"componentDidMount",value:function(){var _=this.props;(0,_.dispatch)({type:"global/add",payload:{config:{content:_.content,black:_.black,white:_.white,footMarginTop:_.footMarginTop}}})}},{key:"componentWillUnmount",value:function(){var _=this.props;(0,_.dispatch)({type:"global/add",payload:{url:_.match.url}})}},{key:"render",value:function(){var _=this.props,e=_.children,t=_.className,a=_.title;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_document_title__WEBPACK_IMPORTED_MODULE_9___default.a,{title:a||"BDAEX"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:t},e))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Index}(react__WEBPACK_IMPORTED_MODULE_6__.PureComponent),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_class2,"propTypes",{content:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,black:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,white:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,footMarginTop:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_class2,"defaultProps",{content:!1,black:!1,white:!1}),_class=_temp))||_class)||_class),_default=Index,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(Index,"Index","D:\\www_8\\bbtoken02\\src\\layouts\\index.js"),reactHotLoader.register(_default,"default","D:\\www_8\\bbtoken02\\src\\layouts\\index.js"),leaveModule(module))}).call(this,__webpack_require__(18)(module))},864:function(_,e,t){"use strict";var a=t(2),r=t(0),l=t(872);function E(){}E.prototype=Object.create(a.Component.prototype),E.displayName="DocumentTitle",E.propTypes={title:r.string.isRequired},E.prototype.render=function(){return this.props.children?a.Children.only(this.props.children):null},_.exports=l(function(_){var e=_[_.length-1];if(e)return e.title},function(_){var e=_||"";e!==document.title&&(document.title=e)})(E)},872:function(_,e,t){"use strict";function a(_){return _&&"object"==typeof _&&"default"in _?_.default:_}var r=t(2),l=a(r),E=a(t(873)),n=a(t(411));_.exports=function(_,e,t){if("function"!=typeof _)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==t&&"function"!=typeof t)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var u=[],i=void 0;function c(){i=_(u.map(function(_){return _.props})),s.canUseDOM?e(i):t&&(i=t(i))}var s=function(_){function e(){return function(_,e){if(!(_ instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(_,e){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?_:e}(this,_.apply(this,arguments))}return function(_,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);_.prototype=Object.create(e&&e.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(_,e):_.__proto__=e)}(e,_),e.peek=function(){return i},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var _=i;return i=void 0,u=[],_},e.prototype.shouldComponentUpdate=function(_){return!n(_,this.props)},e.prototype.componentWillMount=function(){u.push(this),c()},e.prototype.componentDidUpdate=function(){c()},e.prototype.componentWillUnmount=function(){var _=u.indexOf(this);u.splice(_,1),c()},e.prototype.render=function(){return l.createElement(a,this.props)},e}(r.Component);return s.displayName="SideEffect("+function(_){return _.displayName||_.name||"Component"}(a)+")",s.canUseDOM=E.canUseDOM,s}}},873:function(_,e,t){var a;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),l={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(a=function(){return l}.call(e,t,e,_))||(_.exports=a)}()},910:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(412),antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__),antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(70),antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(113),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(114),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(115),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(116),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(117),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(42),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(43),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),dva__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(91),dva__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_10__),dva_router__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(31),dva_router__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_11__),react_intl_universal__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(16),react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react_intl_universal__WEBPACK_IMPORTED_MODULE_12__),_dec,_class,_temp,enterModule;enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var Aside=(_dec=Object(dva__WEBPACK_IMPORTED_MODULE_10__.connect)(function(_){var e=_.user;return{global:_.global,user:e}}),Object(dva_router__WEBPACK_IMPORTED_MODULE_11__.withRouter)(_class=_dec((_temp=function(_PureComponent){function Aside(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,Aside),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Aside).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(e)),"clickHandle",function(_,t){var a=e.props.dispatch;6===t&&(_.preventDefault(),a({type:"user/loginOut",callback:function(){window.location.reload()}}))}),e.state={list:[{key:1,name:react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default.a.get("USERINFO_MY_CODE"),url:"/user/invite",icon:"invite",iconSize:18},{key:2,name:react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default.a.get("USERINFO_SECURITY"),url:"/user/safety",icon:"safety",iconSize:18},{key:3,name:react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default.a.get("USERINFO_AUTHENTICATION"),url:"/user/identity",icon:"Identity",iconSize:20},{key:4,name:react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default.a.get("USERINFO_SETTINGS"),url:"/user/setting",icon:"user-setting",iconSize:20},{key:5,name:react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default.a.get("USERINFO_PASSWORD"),url:"/user/editPwd",icon:"editpwd",iconSize:20},{key:6,name:react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default.a.get("USERINFO_EXIT_LOGIN"),url:"",icon:"exits",iconSize:20}]},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Aside,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Aside,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"user/fetchGetUserSetting"})}},{key:"render",value:function(){var _=this,e=this.state.list,t=this.props,a=t.user.userInfo,r=t.global.lang;return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("aside",{className:"aside"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"top flex-box"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"avatar"},"H"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"ml-sm flex-item"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{className:"fz-xs lin-1"},a.username),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{className:"mt-sm lin-1"},"UID: ",a.promotionCode))),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul",{className:"list"},e.map(function(e){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li",{className:"item",key:e.name},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_11__.NavLink,{exact:!0,className:" flex-box flex-alignItem",to:"/".concat(r).concat(e.url),onClick:function(t){return _.clickHandle(t,e.key)}},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a,{style:{fontSize:e.iconSize},className:"mr-sm weight",type:e.icon}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span",{className:"item-name"},e.name)))})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Aside}(react__WEBPACK_IMPORTED_MODULE_9__.PureComponent),_class=_temp))||_class)||_class),_default=Aside,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(Aside,"Aside","D:\\www_8\\bbtoken02\\src\\pages\\UserInfo\\component\\Aside.js"),reactHotLoader.register(_default,"default","D:\\www_8\\bbtoken02\\src\\pages\\UserInfo\\component\\Aside.js"),leaveModule(module))}).call(this,__webpack_require__(18)(module))},911:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(113),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(114),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(115),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(116),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(117),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(43),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),classnames__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(20),classnames__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__),enterModule;enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var Box=function(_PureComponent){function Box(_){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Box),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Box).call(this,_))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Box,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Box,[{key:"render",value:function(){var _=this.props,e=_.className,t=_.title,a=_.suffix,r=_.children;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_8___default()("box",e)},t&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"box-title flex-box flex-alignItem flex-between"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5",{className:"fz-xs"},t),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,a&&a)),r)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Box}(react__WEBPACK_IMPORTED_MODULE_6__.PureComponent);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Box,"propTypes",{name:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),suffix:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element])});var _default=Box,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(Box,"Box","D:\\www_8\\bbtoken02\\src\\pages\\UserInfo\\component\\Box.js"),reactHotLoader.register(_default,"default","D:\\www_8\\bbtoken02\\src\\pages\\UserInfo\\component\\Box.js"),leaveModule(module))}).call(this,__webpack_require__(18)(module))},912:function(_,e,t){}}]);