(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{855:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(896),antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__),antd_lib_table__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(898),antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(113),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(114),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(115),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(116),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(117),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(42),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(43),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),dva_router__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(31),dva_router__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_10__),_layouts___WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(863),_Serve_less__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(913),_Serve_less__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_Serve_less__WEBPACK_IMPORTED_MODULE_12__),enterModule;enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var Rate=function(_PureComponent){function Rate(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,Rate),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Rate).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(e)),"pageHandle",function(_,e){}),e.state={},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Rate,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Rate,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_layouts___WEBPACK_IMPORTED_MODULE_11__.a,{className:"serve news container",title:"费率"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("article",{className:"container article"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3",{className:"headline lin-1"},"费率"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{className:"fz-md mt-md mb-md"},"交易手续费"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a,{dataSource:[{key:"1",name:"BTC/USDT",suspend:"0.2%",eat:"0.2%"},{key:"2",name:"ETH/USDT",suspend:"0.2%",eat:"0.2%"},{key:"3",name:"LTC/USDT",suspend:"0.2%",eat:"0.2%"},{key:"4",name:"BCH/BTC",suspend:"0.2%",eat:"0.2%"},{key:"5",name:"BCH/ETH",suspend:"0.2%",eat:"0.2%"},{key:"6",name:"ETH/BTC",suspend:"0.2%",eat:"0.2%"},{key:"7",name:"LTC/BTC",suspend:"0.2%",eat:"0.2%"},{key:"8",name:"LTC/ETH",suspend:"0.2%",eat:"0.2%"}],columns:[{title:"交易对",dataIndex:"name",key:"name"},{title:"挂单",dataIndex:"suspend",key:"suspend"},{title:"吃单",dataIndex:"eat",key:"eat"}],pagination:{hideOnSinglePage:!0}}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{className:"fz-md mt-md mb-md"},"提示"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{className:"opacity-5"}," 1、挂单是你所下的限价单并未与当前挂单成交，并被放在买卖盘中等待成交的摆单，它增加了买卖盘的流动性。"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{className:"opacity-5"},"2、当其他人的摆单主动与你所下的摆单成交，你将支付挂单交易手续费（请注意当其他人的限价单与你的限价单成交，而下单时间又早于你时，你将支付吃单费）。"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{className:"opacity-5"},"3、吃单是你所下的限价单或市价单与当前的挂单直接成交。"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{className:"opacity-5"},"4、当你所下的摆单主动与其他人的摆单成交，你将支付吃单交易手续费。"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{className:"opacity-5 mb-md"},"5、交易手续费将从您的成交总额中扣除。若成交后获得比特币资产，则支付比特币交易手续费。"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{className:"fz-md mt-md mb-md"},"提币限额&提币手续费"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a,{dataSource:[{key:"1",name:"BTC",min:.01,max:200,dayMin:200,fee:"0.001- 0.001"},{key:"2",name:"BCH",min:.1,max:200,dayMin:200,fee:"0.0001"},{key:"3",name:"ETH",min:.015,max:"2,000",dayMin:"2,000",fee:"0.01"},{key:"4",name:"LTC",min:.1,max:"5,000",dayMin:"5,000",fee:"0.001"},{key:"5",name:"USDT",min:200,max:"600,000",dayMin:"600,000",fee:"10"}],columns:[{title:"已认证用户",dataIndex:"name",key:"name"},{title:"单次最小(不包括手续费)",dataIndex:"min",key:"min"},{title:"单次最大",dataIndex:"max",key:"max"},{title:"单日最小",dataIndex:"dayMin",key:"dayMin"},{title:"单笔手续费",dataIndex:"fee",key:"fee"}],pagination:{hideOnSinglePage:!0}})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Rate}(react__WEBPACK_IMPORTED_MODULE_9__.PureComponent),_default=Rate,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(Rate,"Rate","D:\\www_8\\bbtoken02\\src\\pages\\Serve\\Rate\\Rate.js"),reactHotLoader.register(_default,"default","D:\\www_8\\bbtoken02\\src\\pages\\Serve\\Rate\\Rate.js"),leaveModule(module))}.call(this,__webpack_require__(18)(module))},863:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(113),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(114),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(115),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(116),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(117),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(43),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),dva_router__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(31),dva_router__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_7__),dva__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(91),dva__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_8__),react_document_title__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(864),react_document_title__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_document_title__WEBPACK_IMPORTED_MODULE_9__),prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),_dec,_class,_class2,_temp,enterModule;enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var Index=(_dec=Object(dva__WEBPACK_IMPORTED_MODULE_8__.connect)(function(_){return{global:_.global}}),Object(dva_router__WEBPACK_IMPORTED_MODULE_7__.withRouter)(_class=_dec((_temp=_class2=function(_PureComponent){function Index(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Index),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Index).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Index,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Index,[{key:"componentDidMount",value:function(){var _=this.props;(0,_.dispatch)({type:"global/add",payload:{config:{content:_.content,black:_.black,white:_.white,footMarginTop:_.footMarginTop}}})}},{key:"componentWillUnmount",value:function(){var _=this.props;(0,_.dispatch)({type:"global/add",payload:{url:_.match.url}})}},{key:"render",value:function(){var _=this.props,e=_.children,a=_.className,t=_.title;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_document_title__WEBPACK_IMPORTED_MODULE_9___default.a,{title:t||"BDAEX"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:a},e))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Index}(react__WEBPACK_IMPORTED_MODULE_6__.PureComponent),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_class2,"propTypes",{content:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,black:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,white:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,footMarginTop:prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_class2,"defaultProps",{content:!1,black:!1,white:!1}),_class=_temp))||_class)||_class),_default=Index,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(Index,"Index","D:\\www_8\\bbtoken02\\src\\layouts\\index.js"),reactHotLoader.register(_default,"default","D:\\www_8\\bbtoken02\\src\\layouts\\index.js"),leaveModule(module))}).call(this,__webpack_require__(18)(module))},913:function(_,e,a){}}]);