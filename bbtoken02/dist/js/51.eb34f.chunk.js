(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1186:function(_,e,a){"use strict";(function(_){a.d(e,"a",function(){return M});var t,E,r,l=a(1),n=a.n(l),c=a(22),i=a.n(c),s=a(17),u=a.n(s);function M(_){return n.a.createElement("em",{className:i()("".concat("SELL"===_.text?"red":"green"))},"SELL"===_.text?u.a.get("RELEASEADS_SELL_SET"):u.a.get("RELEASEADS_BUY_ON"))}(t=a(4).enterModule)&&t(_),E=a(4).default,r=a(4).leaveModule,E&&(E.register(M,"BuySell","D:\\www\\bbtoken02\\src\\components\\BuySell\\BuySell.js"),r(_))}).call(this,a(20)(_))},1460:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(114),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(115),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(116),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(117),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(118),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),antd_lib_collapse_style__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1071),antd_lib_collapse_style__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(antd_lib_collapse_style__WEBPACK_IMPORTED_MODULE_5__),antd_lib_collapse__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1072),antd_lib_collapse__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),dva_router__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(32),dva_router__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_8__),bizcharts_lib_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1461),bizcharts_lib_core__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(bizcharts_lib_core__WEBPACK_IMPORTED_MODULE_9__),bizcharts_lib_components_Chart__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1624),bizcharts_lib_components_Chart__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(bizcharts_lib_components_Chart__WEBPACK_IMPORTED_MODULE_10__),bizcharts_lib_components_Axis__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1633),bizcharts_lib_components_Axis__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(bizcharts_lib_components_Axis__WEBPACK_IMPORTED_MODULE_11__),bizcharts_lib_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1634),bizcharts_lib_components_Tooltip__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(bizcharts_lib_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__),bizcharts_lib_components_TypedGeom_Line__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1635),bizcharts_lib_components_TypedGeom_Line__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(bizcharts_lib_components_TypedGeom_Line__WEBPACK_IMPORTED_MODULE_13__),bizcharts_lib_components_TypedGeom_Area__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(1639),bizcharts_lib_components_TypedGeom_Area__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(bizcharts_lib_components_TypedGeom_Area__WEBPACK_IMPORTED_MODULE_14__),_antv_data_set__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(1642),_antv_data_set__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_antv_data_set__WEBPACK_IMPORTED_MODULE_15__),dayjs__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(1038),dayjs__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_16__),react_intl_universal__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(17),react_intl_universal__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(react_intl_universal__WEBPACK_IMPORTED_MODULE_17__),_components_BuySell_BuySell__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(1186),_utils_utils__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(15),_class,enterModule;enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var Panel=antd_lib_collapse__WEBPACK_IMPORTED_MODULE_6___default.a.Panel,Entrust=Object(dva_router__WEBPACK_IMPORTED_MODULE_8__.withRouter)(_class=function(_PureComponent){function Entrust(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Entrust),(e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Entrust).call(this,_))).refDepth=react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef(),e.state={depthWidth:0},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Entrust,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Entrust,[{key:"componentDidMount",value:function(){this.setState({depthWidth:this.refDepth.current.offsetWidth})}},{key:"render",value:function(){var _=this.props,e=_.LatestTradeData,a=_.depthList,t=_.ticks,E=_.match.params,r=this.state.depthWidth,l=(new _antv_data_set__WEBPACK_IMPORTED_MODULE_15___default.a).createView().source(a);l.transform({type:"map",callback:function(_){return _.range=[_.SELL,_.BUY],_}}),l.transform({type:"fold",fields:["SELL","BUY"],key:"type",value:"value"});var n={price:{type:"linear",alias:"委托价",ticks:t},range:{type:"linear",alias:"数量"},value:{type:"linear",alias:"数量",min:0}};return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section",{className:"mt-sm flex-box flex-between"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"panel-left "},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_6___default.a,{defaultActiveKey:["1"]},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Panel,{header:react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"flex-box flex-alignItem"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span",{className:"fz-md"},react_intl_universal__WEBPACK_IMPORTED_MODULE_17___default.a.get("EXCHANGE_DEPTH"))),key:"1"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"panel-buy panel-deal panel-depth-map flex-box flex-between",ref:this.refDepth},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(bizcharts_lib_components_Chart__WEBPACK_IMPORTED_MODULE_10___default.a,{width:r,height:400,data:l,scale:n,padding:[20,55,50,20],forceFit:!0},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(bizcharts_lib_components_Axis__WEBPACK_IMPORTED_MODULE_11___default.a,{name:"value",visible:!1,grid:null,position:"right",line:{stroke:"#474955",lineWidth:2},tickLine:{lineWidth:1,stroke:"#ccc",strokeOpacity:.5,length:5,alignWithLabel:!0}}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(bizcharts_lib_components_Tooltip__WEBPACK_IMPORTED_MODULE_12___default.a,{showTitle:!1,itemTpl:"<li data-index={index}><p>委托价:{title}</p>数量:{value}</li>"}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(bizcharts_lib_components_TypedGeom_Area__WEBPACK_IMPORTED_MODULE_14___default.a,{shape:"smooth",position:"price*value",color:["type",["#cf5754","#06c7b7"]],opacity:1,tooltip:!1}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(bizcharts_lib_components_TypedGeom_Line__WEBPACK_IMPORTED_MODULE_13___default.a,{shape:"smooth",position:"price*value",color:["type",["#cf5754","#06c7b7"]],size:1})))))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"panel-right flex-item ml-sm"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_6___default.a,{defaultActiveKey:["1"]},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Panel,{header:react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"flex-box flex-alignItem"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span",{className:"fz-md"},react_intl_universal__WEBPACK_IMPORTED_MODULE_17___default.a.get("EXCHANGE_REAL_TIME"))),key:"1"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"panel-buy"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl",{className:"panel-price panel-time"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt",{className:"panel-price-dt flex-box flex-wrap"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span",{className:"panel-price-item to"},react_intl_universal__WEBPACK_IMPORTED_MODULE_17___default.a.get("RELEASEADS_NUM"),"(",E.name,")"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span",{className:"panel-price-item to"},react_intl_universal__WEBPACK_IMPORTED_MODULE_17___default.a.get("EXCHANGE_PRICE"),"(",E.small,")"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span",{className:"panel-price-item"},react_intl_universal__WEBPACK_IMPORTED_MODULE_17___default.a.get("EXCHANGE_DIRECTION")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span",{className:"panel-price-item"},react_intl_universal__WEBPACK_IMPORTED_MODULE_17___default.a.get("EXCHANGE_TIME"))),e.map(function(_,e){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd",{key:e,className:"panel-price-dd flex-box flex-wrap"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span",{className:"panel-price-item to"},Object(_utils_utils__WEBPACK_IMPORTED_MODULE_19__.i)(_.amount,4)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span",{className:"panel-price-item to"},_.price),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span",{className:"panel-price-item"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_BuySell_BuySell__WEBPACK_IMPORTED_MODULE_18__.a,{text:_.direction})),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span",{className:"panel-price-item"},dayjs__WEBPACK_IMPORTED_MODULE_16___default()(_.time).format("HH:mm:ss")))}))))))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Entrust}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent))||_class,_default=Entrust,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(Panel,"Panel","D:\\www\\bbtoken02\\src\\pages\\Exchange\\component\\RealTime.js"),reactHotLoader.register(Entrust,"Entrust","D:\\www\\bbtoken02\\src\\pages\\Exchange\\component\\RealTime.js"),reactHotLoader.register(_default,"default","D:\\www\\bbtoken02\\src\\pages\\Exchange\\component\\RealTime.js"),leaveModule(module))}.call(this,__webpack_require__(20)(module))}}]);