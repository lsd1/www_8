(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1123:function(_,e,t){"use strict";var a=t(1124).CopyToClipboard;a.CopyToClipboard=a,_.exports=a},1124:function(_,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CopyToClipboard=void 0;var a=Object.assign||function(_){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(_[a]=t[a])}return _},r=function(){function _(_,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(_,a.key,a)}}return function(e,t,a){return t&&_(e.prototype,t),a&&_(e,a),e}}(),l=n(t(2)),E=n(t(1125));function n(_){return _&&_.__esModule?_:{default:_}}function i(_,e){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?_:e}(e.CopyToClipboard=function(_){function e(){var _,t,a;!function(_,e){if(!(_ instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,n=Array(r),s=0;s<r;s++)n[s]=arguments[s];return t=a=i(this,(_=e.__proto__||Object.getPrototypeOf(e)).call.apply(_,[this].concat(n))),a.onClick=function(_){var e=a.props,t=e.text,r=e.onCopy,n=e.children,i=e.options,s=l.default.Children.only(n),u=(0,E.default)(t,i);r&&r(t,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(_)},i(a,t)}return function(_,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);_.prototype=Object.create(e&&e.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(_,e):_.__proto__=e)}(e,l.default.PureComponent),r(e,[{key:"render",value:function(){var _=this.props,e=(_.text,_.onCopy,_.options,_.children),t=function(_,e){var t={};for(var a in _)e.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(_,a)&&(t[a]=_[a]);return t}(_,["text","onCopy","options","children"]),r=l.default.Children.only(e);return l.default.cloneElement(r,a({},t,{onClick:this.onClick}))}}]),e}()).defaultProps={onCopy:void 0,options:void 0}},1125:function(_,e,t){"use strict";var a=t(1126),r="Copy to clipboard: #{key}, Enter";_.exports=function(_,e){var t,l,E,n,i,s,u=!1;e||(e={}),t=e.debug||!1;try{if(E=a(),n=document.createRange(),i=document.getSelection(),(s=document.createElement("span")).textContent=_,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",document.body.appendChild(s),n.selectNode(s),i.addRange(n),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(a){t&&console.error("unable to copy using execCommand: ",a),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",_),u=!0}catch(a){t&&console.error("unable to copy using clipboardData: ",a),t&&console.error("falling back to prompt"),l=function(_){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return _.replace(/#{\s*key\s*}/g,e)}("message"in e?e.message:r),window.prompt(l,_)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(n):i.removeAllRanges()),s&&document.body.removeChild(s),E()}return u}},1126:function(_,e){_.exports=function(){var _=document.getSelection();if(!_.rangeCount)return function(){};for(var e=document.activeElement,t=[],a=0;a<_.rangeCount;a++)t.push(_.getRangeAt(a));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return _.removeAllRanges(),function(){"Caret"===_.type&&_.removeAllRanges(),_.rangeCount||t.forEach(function(e){_.addRange(e)}),e&&e.focus()}}},1436:function(_,e,t){},1437:function(_,e,t){_.exports=t.p+"images/Invite.png"},860:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(916),antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__),antd_lib_table__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(917),antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__),antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(79),antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2__),antd_lib_message__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14),antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13),_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(114),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(115),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(116),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(117),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(118),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(43),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(44),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__),react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__),dva__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(91),dva__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_13__),dva_router__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(33),dva_router__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_14__),react_intl_universal__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(17),react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(react_intl_universal__WEBPACK_IMPORTED_MODULE_15__),react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(1123),react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_16__),_layouts___WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(884),_component_Aside__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(944),_component_Box__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(945),classnames__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(22),classnames__WEBPACK_IMPORTED_MODULE_20___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_20__),_UserInfo_less__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(946),_UserInfo_less__WEBPACK_IMPORTED_MODULE_21___default=__webpack_require__.n(_UserInfo_less__WEBPACK_IMPORTED_MODULE_21__),_Invite_less__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(1436),_Invite_less__WEBPACK_IMPORTED_MODULE_22___default=__webpack_require__.n(_Invite_less__WEBPACK_IMPORTED_MODULE_22__),_dec,_class,enterModule;enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var fromData={pageNo:1,pageSize:5},Invite=(_dec=Object(dva__WEBPACK_IMPORTED_MODULE_13__.connect)(function(_){return{user:_.user,global:_.global,loading:_.loading}}),_dec(_class=function(_PureComponent){function Invite(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this,Invite),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Invite).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(e)),"switchHanlde",function(_){e.setState({active:_}),e.handleStandardTableChange(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({},fromData,{current:1}),_)}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(e)),"showModal",function(_){e.setState({visible:!0})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(e)),"handleCancel",function(_){e.setState({visible:!1})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(e)),"handleStandardTableChange",function(_,t){var a=e.props.dispatch,r=_.current,l=_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({},e.state.searchList,{pageNo:r});e.setState({searchList:l}),a({type:"user/".concat(1===t?"fetchGetUserRecord":"fetchGetUserReward"),payload:_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({},l)})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(e)),"copyHanlde",function(_,e){e&&(antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.destroy(),antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.success("复制成功"))}),e.state={active:1,searchList:_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({},fromData),visible:!1},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Invite,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Invite,[{key:"componentDidMount",value:function(){var _=this.state.searchList,e=this.props.dispatch;Promise.all([e({type:"user/fetchGetUserRecord",payload:_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({},_)}),e({type:"user/fetchGetInvite"})])}},{key:"render",value:function(){var _=this,e=this.state,t=e.searchList,a=e.active,r=this.props,l=r.user,E=l.userInfo,n=l.peopleData,i=l.RecordData,s=l.RewardData,u=l.loading,c=r.global.lang,o=[{title:react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_INVITEES_NO"),dataIndex:"username",key:"username",render:function(_){return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a",{href:"javascript:;"},_)}},{title:react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("EXCHANGE_TIME"),dataIndex:"createTime",key:"createTime"},{title:react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("EXCHANGE_STATUS"),dataIndex:"level",key:"level",render:function(_){return[react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_level_1"),react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_level_2"),react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_level_3")][_]}}],O=[{title:react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("EXCHANGE_CURRENCY"),dataIndex:"symbol",key:"symbol",render:function(_){return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a",{href:"javascript:;"},_)}},{title:react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_MONEY"),dataIndex:"amount",key:"amount"},{title:react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_HAIR_TIME"),dataIndex:"createTime",key:"createTime"},{title:react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("PROPERTY_REMARK"),dataIndex:"remark",key:"remark"}];return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_layouts___WEBPACK_IMPORTED_MODULE_17__.a,{white:!0,className:"user invite container"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("article",{className:"article flex-box flex-between"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_component_Aside__WEBPACK_IMPORTED_MODULE_18__.a,null),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("section",{className:"content"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img",{className:"invite-adv",src:__webpack_require__(1437),alt:""}),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_component_Box__WEBPACK_IMPORTED_MODULE_19__.a,{className:"mt-lg",title:react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_MY_WAY")},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"user-box "},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("dl",{className:"invite-mode"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("dd",{className:"flex-box flex-between flex-alignItem"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p",{className:"yard opacity-5"},react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_PRIVATE_CODE")),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p",{className:"exclusive-link opacity-5"},react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_PRIVATE_LINK"))),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("dd",{className:"flex-box flex-between flex-alignItem mt-sm"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"yard  item-box border-1 flex-box flex-alignItem"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"flex-item pl-md"},E.promotionCode),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_16__.CopyToClipboard,{text:E.promotionCode,onCopy:this.copyHanlde},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p",{className:"yellow pointer copy tc"},react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_COPY_CODE")))),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"exclusive-link item-box border-1 flex-box flex-alignItem"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"flex-item pl-md ellipsis"},"".concat(location.host,"/").concat(c,"/register/").concat(E.promotionCode)),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_16__.CopyToClipboard,{text:"".concat(location.host,"/").concat(c,"/register/").concat(E.promotionCode),onCopy:this.copyHanlde},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p",{className:"yellow pointer copy tc"},react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_COPY_CODE")))))))),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_component_Box__WEBPACK_IMPORTED_MODULE_19__.a,{className:"mt-lg"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"invite-people flex-box"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"left"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p",{className:"fz-xs"},react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_INVITEES")),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p",{className:"mt-sm"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("em",{className:"opacity-8 mr-md"},react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_TOTAL_INVITEES")),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("em",{className:"num"},i.totalElements))),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"right"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p",{className:"fz-xs"},react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_REBATE")),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"mt-sm"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span",{className:"opacity-5"},"EXB"),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("em",{className:"num ml-md"},n.amount))))),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_component_Box__WEBPACK_IMPORTED_MODULE_19__.a,{className:"mt-lg",title:react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("ul",{className:"user-tab flex-box"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li",{onClick:function(){return _.switchHanlde(1)},className:classnames__WEBPACK_IMPORTED_MODULE_20___default()("user-tab-item",{active:1===a})},react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_INVITATION")),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li",{onClick:function(){return _.switchHanlde(2)},className:classnames__WEBPACK_IMPORTED_MODULE_20___default()("user-tab-item",{active:2===a})},react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("USERINFO_REBATE_RECORD")))},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"user-box pt-md pb-lg"},1===a?react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a,{columns:o,dataSource:i.content,loading:u,rowKey:function(_){return _.createTime},onChange:function(e){return _.handleStandardTableChange(e,a)},locale:{emptyText:react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("GLOBAL_NO_DATA")},pagination:{hideOnSinglePage:!0,style:{marginBottom:0},pageSize:5,current:t.pageNo,total:i.totalElements}}):react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a,{columns:O,dataSource:s.content,loading:u,rowKey:function(_,e){return e},onChange:function(e){return _.handleStandardTableChange(e,a)},locale:{emptyText:react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.get("GLOBAL_NO_DATA")},pagination:{hideOnSinglePage:!0,style:{marginBottom:0},pageSize:5,current:t.pageNo,total:s.totalElements}}))),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_component_Box__WEBPACK_IMPORTED_MODULE_19__.a,{className:"mt-lg",title:"活动规则"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"user-box pt-md pb-lg opacity-5 invite-bg-f2"},react_intl_universal__WEBPACK_IMPORTED_MODULE_15___default.a.getHTML("USERINFO_DESC_1"))))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Invite}(react__WEBPACK_IMPORTED_MODULE_12__.PureComponent))||_class),_default=Invite,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(fromData,"fromData","D:\\www\\bbtoken02\\src\\pages\\UserInfo\\Invite\\Invite.js"),reactHotLoader.register(Invite,"Invite","D:\\www\\bbtoken02\\src\\pages\\UserInfo\\Invite\\Invite.js"),reactHotLoader.register(_default,"default","D:\\www\\bbtoken02\\src\\pages\\UserInfo\\Invite\\Invite.js"),leaveModule(module))}.call(this,__webpack_require__(19)(module))},884:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(114),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(115),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(116),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(117),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(118),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(44),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),dva_router__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(33),dva_router__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_7__),dva__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(91),dva__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_8__),react_document_title__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(885),react_document_title__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_document_title__WEBPACK_IMPORTED_MODULE_9__),prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),_dec,_class,_class2,_temp,enterModule;enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var Index=(_dec=Object(dva__WEBPACK_IMPORTED_MODULE_8__.connect)(function(_){return{global:_.global}}),Object(dva_router__WEBPACK_IMPORTED_MODULE_7__.withRouter)(_class=_dec((_temp=_class2=function(_PureComponent){function Index(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Index),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Index).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Index,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Index,[{key:"componentDidMount",value:function(){var _=this.props;(0,_.dispatch)({type:"global/add",payload:{config:{content:_.content,black:_.black,white:_.white,footMarginTop:_.footMarginTop}}})}},{key:"componentWillUnmount",value:function(){var _=this.props;(0,_.dispatch)({type:"global/add",payload:{url:_.match.url}})}},{key:"render",value:function(){var _=this.props,e=_.children,t=_.className,a=_.title;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_document_title__WEBPACK_IMPORTED_MODULE_9___default.a,{title:a||"BDAEX"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:t},e))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Index}(react__WEBPACK_IMPORTED_MODULE_6__.PureComponent),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_class2,"propTypes",{content:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,black:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,white:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,footMarginTop:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_class2,"defaultProps",{content:!1,black:!1,white:!1}),_class=_temp))||_class)||_class),_default=Index,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(Index,"Index","D:\\www\\bbtoken02\\src\\layouts\\index.js"),reactHotLoader.register(_default,"default","D:\\www\\bbtoken02\\src\\layouts\\index.js"),leaveModule(module))}).call(this,__webpack_require__(19)(module))},944:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(418),antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__),antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52),antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(114),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(115),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(116),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(117),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(118),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(43),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(44),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),dva__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(91),dva__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_10__),dva_router__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(33),dva_router__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_11__),react_intl_universal__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(17),react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react_intl_universal__WEBPACK_IMPORTED_MODULE_12__),_dec,_class,enterModule;enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var Aside=(_dec=Object(dva__WEBPACK_IMPORTED_MODULE_10__.connect)(function(_){var e=_.user;return{global:_.global,user:e}}),Object(dva_router__WEBPACK_IMPORTED_MODULE_11__.withRouter)(_class=_dec(_class=function(_PureComponent){function Aside(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,Aside),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Aside).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(e)),"clickHandle",function(_,t){var a=e.props.dispatch;6===t&&(_.preventDefault(),a({type:"user/loginOut",callback:function(){window.location.reload()}}))}),e.state={list:[{key:1,name:react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default.a.get("USERINFO_MY_CODE"),url:"/user/invite",icon:"invite",iconSize:18},{key:2,name:react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default.a.get("USERINFO_SECURITY"),url:"/user/safety",icon:"safety",iconSize:18},{key:3,name:react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default.a.get("USERINFO_AUTHENTICATION"),url:"/user/identity",icon:"Identity",iconSize:20},{key:4,name:react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default.a.get("USERINFO_SETTINGS"),url:"/user/setting",icon:"user-setting",iconSize:20},{key:5,name:react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default.a.get("USERINFO_PASSWORD"),url:"/user/editPwd",icon:"editpwd",iconSize:20},{key:6,name:react_intl_universal__WEBPACK_IMPORTED_MODULE_12___default.a.get("USERINFO_EXIT_LOGIN"),url:"",icon:"exits",iconSize:20}]},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Aside,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Aside,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"user/fetchGetUserSetting"})}},{key:"render",value:function(){var _=this,e=this.state.list,t=this.props,a=t.user.userInfo,r=t.global.lang;return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("aside",{className:"aside"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"top flex-box"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"avatar"},"H"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"ml-sm flex-item"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{className:"fz-xs lin-1"},a.username),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{className:"mt-sm lin-1"},"UID: ",a.promotionCode))),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul",{className:"list"},e.map(function(e){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li",{className:"item",key:e.name},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_11__.NavLink,{exact:!0,className:" flex-box flex-alignItem",to:"/".concat(r).concat(e.url),onClick:function(t){return _.clickHandle(t,e.key)}},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a,{style:{fontSize:e.iconSize},className:"mr-sm weight",type:e.icon}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span",{className:"item-name"},e.name)))})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Aside}(react__WEBPACK_IMPORTED_MODULE_9__.PureComponent))||_class)||_class),_default=Aside,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(Aside,"Aside","D:\\www\\bbtoken02\\src\\pages\\UserInfo\\component\\Aside.js"),reactHotLoader.register(_default,"default","D:\\www\\bbtoken02\\src\\pages\\UserInfo\\component\\Aside.js"),leaveModule(module))}).call(this,__webpack_require__(19)(module))},945:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(114),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(115),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(116),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(117),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(118),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(44),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),classnames__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(22),classnames__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__),enterModule;enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var Box=function(_PureComponent){function Box(_){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Box),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Box).call(this,_))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Box,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Box,[{key:"render",value:function(){var _=this.props,e=_.className,t=_.title,a=_.suffix,r=_.children;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_8___default()("box",e)},t&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"box-title flex-box flex-alignItem flex-between"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5",{className:"fz-xs"},t),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,a&&a)),r)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Box}(react__WEBPACK_IMPORTED_MODULE_6__.PureComponent);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Box,"propTypes",{name:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),suffix:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element])});var _default=Box,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(Box,"Box","D:\\www\\bbtoken02\\src\\pages\\UserInfo\\component\\Box.js"),reactHotLoader.register(_default,"default","D:\\www\\bbtoken02\\src\\pages\\UserInfo\\component\\Box.js"),leaveModule(module))}).call(this,__webpack_require__(19)(module))},946:function(_,e,t){}}]);