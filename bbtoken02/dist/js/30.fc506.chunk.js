(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1034:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(120),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(147),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(114),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(115),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(116),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(117),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(118),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(43),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(44),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),classnames__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(22),classnames__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__),_Index_less__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1035),_Index_less__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_Index_less__WEBPACK_IMPORTED_MODULE_12__),enterModule;enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var InputDigit=function(_PureComponent){function InputDigit(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,InputDigit),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(InputDigit).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(e)),"changeHandle",function(_){var a=e.props,t=a.onChange,r=a.decimal,l=_.target.value,E=l.length,n=l.includes(".")?String(l).indexOf(".")+1:E,s=r<0?10:r,i=new RegExp("^[0-9]+(.[0-9]{0,".concat(s,"})?$"));(l&&i.test(+l)&&E-n<=s||""===l)&&t&&t(l)}),e.state={val:""},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(InputDigit,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(InputDigit,[{key:"render",value:function(){var _=this.props,e=_.label,a=_.small,t=_.defaultValue,r=_.foot,l=_.className,E=(_.onChange,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_,["label","small","defaultValue","foot","className","onChange"]));return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_11___default()("group",l)},e&&react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label",{className:"group-label"},e),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_11___default()("group-input-box",{"mt-sm":!!e})},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({className:"group-input"},E,{autoComplete:"off",type:"text",defaultValue:t,onChange:this.changeHandle})),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i",{className:"group-icon"},a)),r&&react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{className:"group-small fz-sm"},r))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),InputDigit}(react__WEBPACK_IMPORTED_MODULE_9__.PureComponent);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(InputDigit,"propTypes",{label:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,small:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,value:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number]),defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number]),foot:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.element]),decimal:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(InputDigit,"defaultProps",{decimal:2});var _default=InputDigit,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(InputDigit,"InputDigit","D:\\www\\bbtoken02\\src\\components\\InputDigit\\InputDigit.js"),reactHotLoader.register(_default,"default","D:\\www\\bbtoken02\\src\\components\\InputDigit\\InputDigit.js"),leaveModule(module))}).call(this,__webpack_require__(19)(module))},1035:function(_,e,a){},1116:function(_,e,a){"use strict";(function(_){a.d(e,"a",function(){return P});a(418);var t,r,l,E=a(52),n=a.n(E),s=a(2),i=a.n(s),u=a(17),c=a.n(u);function P(_){var e=_.name,a=_.small,t=void 0!==a&&a;return i.a.createElement(s.Fragment,null,e.includes("银联")&&i.a.createElement(s.Fragment,null,i.a.createElement(n.a,{className:"payways-icon",style:{color:"#de9308",fontSize:22},type:"yinhangqia"}),t&&i.a.createElement("span",{className:"mr-sm fz-sm gray"},c.a.get("GLOBAL_BANK"),c.a.get("GLOBAL_PAYMENT"))),e.includes("支付宝")&&i.a.createElement(s.Fragment,null,i.a.createElement(n.a,{className:"payways-icon",style:{color:"#02a9f1",fontSize:22},type:"zhifubao"}),t&&i.a.createElement("span",{className:"mr-sm fz-sm gray"},c.a.get("GLOBAL_ALIPAY"),c.a.get("GLOBAL_PAYMENT"))),e.includes("微信")&&i.a.createElement(s.Fragment,null,i.a.createElement(n.a,{className:"payways-icon",style:{color:"#24af41",fontSize:22},type:"weixin-copy"}),t&&i.a.createElement("span",{className:"mr-sm fz-sm gray"},c.a.get("GLOBAL_WECHAT"),c.a.get("GLOBAL_PAYMENT"))))}(t=a(4).enterModule)&&t(_),r=a(4).default,l=a(4).leaveModule,r&&(r.register(P,"PayIcon","D:\\www\\bbtoken02\\src\\pages\\Trade\\component\\PayIcon.js"),l(_))}).call(this,a(19)(_))},1117:function(_,e,a){"use strict";(function(_){a.d(e,"a",function(){return c});var t,r,l,E=a(2),n=a.n(E),s=a(15),i=a(17),u=a.n(i);function c(_){var e=_.item;return n.a.createElement(E.Fragment,null,n.a.createElement("div",{className:"shop-left  item business"},n.a.createElement("div",{className:"avatar "},e.memberName.charAt(0)),n.a.createElement("div",{className:"ml-md"},n.a.createElement("span",{className:"link name weight"},e.memberName),n.a.createElement("p",null,u.a.get("RELEASEADS_NUM"),"  ",Object(s.c)(Object(s.i)(e.remainAmount,4))," ",e.unit))),n.a.createElement("div",{className:"shop-midd"},n.a.createElement("p",{className:"green"},Object(s.c)(e.price)," CNY"),n.a.createElement("p",null,Object(s.c)(e.minLimit)," - ",Object(s.c)(e.maxLimit)," CNY")))}(t=a(4).enterModule)&&t(_),r=a(4).default,l=a(4).leaveModule,r&&(r.register(c,"Details","D:\\www\\bbtoken02\\src\\pages\\Trade\\component\\Details.js"),l(_))}).call(this,a(19)(_))},1118:function(_,e,a){},1416:function(_,e,a){},850:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(120),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__),antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(79),antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2__),antd_lib_message__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14),antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(114),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(115),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(116),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(117),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(118),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(43),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(44),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__),antd_lib_button_style__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(167),antd_lib_button_style__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_11__),antd_lib_button__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(146),antd_lib_button__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_12__),antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(418),antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_13__),antd_lib_icon__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(52),antd_lib_icon__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_14__),antd_lib_form_style__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(902),antd_lib_form_style__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_15__),antd_lib_form__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(903),antd_lib_form__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_16__),react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__),dva__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(91),dva__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_18__),react_intl_universal__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(17),react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default=__webpack_require__.n(react_intl_universal__WEBPACK_IMPORTED_MODULE_19__),_layouts___WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(884),classnames__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(22),classnames__WEBPACK_IMPORTED_MODULE_21___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_21__),_utils_utils__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(15),_components_InputDigit_InputDigit__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(1034),_component_PayIcon__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(1116),_component_Details__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__(1117),_Trade_less__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__(1118),_Trade_less__WEBPACK_IMPORTED_MODULE_26___default=__webpack_require__.n(_Trade_less__WEBPACK_IMPORTED_MODULE_26__),_CheckUser_less__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__(1416),_CheckUser_less__WEBPACK_IMPORTED_MODULE_27___default=__webpack_require__.n(_CheckUser_less__WEBPACK_IMPORTED_MODULE_27__),_dec,_dec2,_class,enterModule;enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var Item=antd_lib_form__WEBPACK_IMPORTED_MODULE_16___default.a.create()(function(_){var e=_.shopHandle,a=_.submitHanlde,t=_.item,r=_.preInfo,l=_.status,E=_.changeHandle,n=_.form;return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"item "},t.shop?react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"item-edit"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"shop-top flex-box flex-alignItem"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_component_Details__WEBPACK_IMPORTED_MODULE_25__.a,{item:t}),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_16___default.a,{onSubmit:function(_){return a(t,_,l,n)},layout:"inline",className:"flex-item flex-box"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"shop-input flex-box flex-alignItem"},n.getFieldDecorator("money",{initialValue:"",validateFirst:!0,validateTrigger:"",rules:[{required:!0,message:react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("GLOBAL_EMPTY")}]})(react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_components_InputDigit_InputDigit__WEBPACK_IMPORTED_MODULE_23__.a,{small:"CNY",className:"inputMoney",maxLength:"14",onChange:function(_){return E(0,_,n)}})),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_14___default.a,{className:"shop-input-icon",type:"swap"}),n.getFieldDecorator("amount",{initialValue:"",validateFirst:!0,validateTrigger:"",rules:[{required:!0,message:react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("GLOBAL_EMPTY")}]})(react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_components_InputDigit_InputDigit__WEBPACK_IMPORTED_MODULE_23__.a,{small:t.unit,className:"inputMoney",maxLength:"20",decimal:8,onChange:function(_){return E(1,_,n)}}))),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"shop-btn flex-box flex-end"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_12___default.a,{className:"border-rest",size:"large",onClick:function(){return e(t,l,n)}},react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("GLOBAL_CANCEL")),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_12___default.a,{className:"btn-confirm ml-sm ",size:"large",type:"primary",htmlType:"submit"},react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("TRADE_ORDER_BTN"))))),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"shop-down flex-box flex-between"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span",{className:"payways flex-box flex-alignItem flex-item"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_component_PayIcon__WEBPACK_IMPORTED_MODULE_24__.a,{name:t.payMode,small:!0})),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("p",{className:"fz-sm gray"},react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("TRADE_ORDER_TIME",{timeLimit:r.timeLimit})))):react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"item-def flex-box flex-alignItem"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"item-icon flex-box flex-box-center"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_14___default.a,{className:classnames__WEBPACK_IMPORTED_MODULE_21___default()("checkUser-icon","icon-".concat(t.unit)),type:t.unit})),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"item-price"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("p",{className:"green"},Object(_utils_utils__WEBPACK_IMPORTED_MODULE_22__.c)(t.price)," CNY/",t.unit),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span",{className:"opacity-5"},react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("TRADE_LIMIT"),"："),Object(_utils_utils__WEBPACK_IMPORTED_MODULE_22__.c)(t.minLimit)," - ",Object(_utils_utils__WEBPACK_IMPORTED_MODULE_22__.c)(t.maxLimit)," ")),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"item-mode"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_component_PayIcon__WEBPACK_IMPORTED_MODULE_24__.a,{name:t.payMode})),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"item-btn tr"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_12___default.a,{type:"primary",size:"large",onClick:function(){return e(t,l,n)}},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span",{className:"blue main-pd"},[react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("RELEASEADS_SELL_SET"),react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("RELEASEADS_BUY_ON")][l])))))}),CheckUser=(_dec=antd_lib_form__WEBPACK_IMPORTED_MODULE_16___default.a.create(),_dec2=Object(dva__WEBPACK_IMPORTED_MODULE_18__.connect)(function(_){var e=_.trade,a=_.user,t=_.business,r=_.global;_.loading;return{global:r,trade:e,user:a,business:t}}),_dec(_class=_dec2(_class=function(_PureComponent){function CheckUser(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this,CheckUser),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(CheckUser).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default()(e)),"changeHandle",function(_,a,t){var r=0,l=e.props.trade.preInfo,E=["amount","money"][_];0===_&&""!==a?(r=parseFloat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_22__.f)("".concat(a,"/").concat(l.price))).toFixed(8),e.setState({status:_})):1===_&&""!==a&&(r=parseFloat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_22__.f)("".concat(a,"*").concat(l.price))).toFixed(2),e.setState({status:_})),t.setFieldsValue(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()({},E,""===a?"":r))}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default()(e)),"submitHanlde",function(_,a,t,r){var l=e.state.status,E=e.props,n=E.history,s=E.dispatch,i=E.trade.preInfo,u=E.user.userSetting,c=E.global.lang;a.preventDefault(),r.validateFields(function(e,a){e?antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error(react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("GLOBAL_EMPTY")):1!==u.realVerified&&0==+t?(antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error(react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("GLOBAL_AUTONYME")),n.push("/".concat(c,"/user/identity"))):u.mobilePhone&&1===u.fundsVerified?a.money>_.maxLimit||a.money<_.minLimit?antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error(react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("TRADE_PURCHASED",{maxLimit:_.maxLimit,minLimit:_.minLimit})):(1===l&&(a.money=parseFloat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_22__.f)("".concat(a.amount,"*").concat(i.price))).toFixed(8)),s({type:"trade/saveBuySell",payload:{money:a.money,amount:+a.amount,coinId:_.coinId,price:_.price,id:_.advertiseId,type:+t,mode:0,remark:+a.amount},callback:function(_){n.push("/".concat(c,"/payment/user/").concat(_.data,"/").concat(l))}})):(antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error(react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("TRADE_BIND_PHONE")),n.push("/".concat(c,"/user/safety")))})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default()(e)),"shopHandle",function(_,a,t){var r=e.props,l=r.dispatch;r.user.isLogin?(t.resetFields(),Promise.all([l({type:"trade/editAdvertiseCheckUser",payload:_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({status:a},_)}),l({type:"trade/fetchGetPreInfo",payload:{id:_.advertiseId}})])):antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error(react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("GLOBAL_LOGIN_ERR"))}),e.state={status:0},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(CheckUser,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(CheckUser,[{key:"componentDidMount",value:function(){var _=this.props,e=_.match.params,a=_.user.isLogin,t=_.dispatch;t({type:"trade/fetchGetAdvertiseMember",payload:{name:e.userId}}),a&&t({type:"user/fetchGetUserSetting"})}},{key:"render",value:function(){var _=this.props.trade,e=_.userAdvertiseInfo,a=_.preInfo,t={shopHandle:this.shopHandle,submitHanlde:this.submitHanlde,changeHandle:this.changeHandle};return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_layouts___WEBPACK_IMPORTED_MODULE_20__.a,{className:"trade checkUser"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("section",{className:"user-info"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"user-top flex-box flex-alignItem"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"flex-box flex-alignItem"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"avatar user-avatar"},e.username&&e.username.charAt(0)),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"user-data"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("p",{className:"name"},e.username),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("p",{className:"time"},react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("TRADE_REGISTRATION"),"：",e.createTime))),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("dl",{className:"flex-box flex-alignItem user-statistics flex-end"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("dd",{className:"item"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("p",{className:"count mr-sm"},e.transactions,react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("small",null,react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("TRADE_NEXT"))),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("p",{className:"opacity-5"},react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("TRADE_ASSEMBLY"))))),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"user-down flex-box flex-alignItem flex-end"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span",{className:classnames__WEBPACK_IMPORTED_MODULE_21___default()("".concat(1===e.emailVerified?"yellow":"white opacity-5"))},react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("TRADE_MAILBOX")," ",react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_14___default.a,{type:"check-circle"})),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span",{className:classnames__WEBPACK_IMPORTED_MODULE_21___default()("".concat(1===e.phoneVerified?"yellow":"white opacity-5"))},react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("TRADE_MOBILE")," ",react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_14___default.a,{type:"check-circle"})),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span",{className:classnames__WEBPACK_IMPORTED_MODULE_21___default()("".concat(1===e.realVerified?"yellow":"white opacity-5"))},react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("TRADE_REAL")," ",react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_14___default.a,{type:"check-circle"}))))),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("section",{className:"checkUser-wrap container"},react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h3",{className:"title"},react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("TRADE_SALE_ON")),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"checkUser-box"},e.sell.map(function(_){return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(Item,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({key:_.advertiseId,item:_,preInfo:a,status:1},t))})),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h3",{className:"title"},react_intl_universal__WEBPACK_IMPORTED_MODULE_19___default.a.get("TRADE_BUY_ON")),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"checkUser-box"},e.buy.map(function(_){return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(Item,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({key:_.advertiseId,item:_,preInfo:a,status:0},t))}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),CheckUser}(react__WEBPACK_IMPORTED_MODULE_17__.PureComponent))||_class)||_class),_default=CheckUser,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(Item,"Item","D:\\www\\bbtoken02\\src\\pages\\Trade\\CheckUser\\CheckUser.js"),reactHotLoader.register(CheckUser,"CheckUser","D:\\www\\bbtoken02\\src\\pages\\Trade\\CheckUser\\CheckUser.js"),reactHotLoader.register(_default,"default","D:\\www\\bbtoken02\\src\\pages\\Trade\\CheckUser\\CheckUser.js"),leaveModule(module))}.call(this,__webpack_require__(19)(module))},884:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(114),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(115),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(116),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(117),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(118),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(44),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),dva_router__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(33),dva_router__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_7__),dva__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(91),dva__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_8__),react_document_title__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(885),react_document_title__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_document_title__WEBPACK_IMPORTED_MODULE_9__),prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),_dec,_class,_class2,_temp,enterModule;enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var Index=(_dec=Object(dva__WEBPACK_IMPORTED_MODULE_8__.connect)(function(_){return{global:_.global}}),Object(dva_router__WEBPACK_IMPORTED_MODULE_7__.withRouter)(_class=_dec((_temp=_class2=function(_PureComponent){function Index(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Index),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Index).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Index,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Index,[{key:"componentDidMount",value:function(){var _=this.props;(0,_.dispatch)({type:"global/add",payload:{config:{content:_.content,black:_.black,white:_.white,footMarginTop:_.footMarginTop}}})}},{key:"componentWillUnmount",value:function(){var _=this.props;(0,_.dispatch)({type:"global/add",payload:{url:_.match.url}})}},{key:"render",value:function(){var _=this.props,e=_.children,a=_.className,t=_.title;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_document_title__WEBPACK_IMPORTED_MODULE_9___default.a,{title:t||"BDAEX"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:a},e))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Index}(react__WEBPACK_IMPORTED_MODULE_6__.PureComponent),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_class2,"propTypes",{content:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,black:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,white:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,footMarginTop:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_class2,"defaultProps",{content:!1,black:!1,white:!1}),_class=_temp))||_class)||_class),_default=Index,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(Index,"Index","D:\\www\\bbtoken02\\src\\layouts\\index.js"),reactHotLoader.register(_default,"default","D:\\www\\bbtoken02\\src\\layouts\\index.js"),leaveModule(module))}).call(this,__webpack_require__(19)(module))}}]);