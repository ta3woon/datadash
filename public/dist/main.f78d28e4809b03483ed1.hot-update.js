webpackHotUpdate("main",{

/***/ "./public/src/containers/App.jsx":
/*!***************************************!*\
  !*** ./public/src/containers/App.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _routes = __webpack_require__(/*! ../routes.jsx */ \"./public/src/routes.jsx\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\n__webpack_require__(/*! ../../assets/css/App.css */ \"./public/assets/css/App.css\");\n\nvar _NavBar = __webpack_require__(/*! ../components/NavBar */ \"./public/src/components/NavBar.jsx\");\n\nvar _NavBar2 = _interopRequireDefault(_NavBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import OldMain from './OldMain';\n\nvar leftItems = [{ as: \"a\", content: \"Home\", key: \"home\", icon: \"area chart\" }, { as: \"a\", content: \"Dashboards\", key: \"Dashboards\", icon: \"building\" }, { as: \"a\", content: \"Help\", key: \"Help\", icon: \"help circle\" }];\nvar rightItems = [{ as: \"a\", content: \"Login\", key: \"login\" }, { as: \"a\", content: \"Register\", key: \"register\" }];\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'App' },\n        _react2.default.createElement(\n          _reactRouterDom.BrowserRouter,\n          null,\n          _react2.default.createElement(_NavBar2.default, { leftItems: leftItems, rightItems: rightItems })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbnRhaW5lcnMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc3JjL2NvbnRhaW5lcnMvQXBwLmpzeD82OTYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgUm91dGVzIGZyb20gJy4uL3JvdXRlcy5qc3gnO1xuaW1wb3J0ICcuLi8uLi9hc3NldHMvY3NzL0FwcC5jc3MnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcic7XG5cbi8vIGltcG9ydCBPbGRNYWluIGZyb20gJy4vT2xkTWFpbic7XG5cbmNvbnN0IGxlZnRJdGVtcyA9IFtcbiAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiSG9tZVwiLCBrZXk6IFwiaG9tZVwiLCBpY29uOiBcImFyZWEgY2hhcnRcIiB9LFxuICB7IGFzOiBcImFcIiwgY29udGVudDogXCJEYXNoYm9hcmRzXCIsIGtleTogXCJEYXNoYm9hcmRzXCIsIGljb246IFwiYnVpbGRpbmdcIiB9LFxuICB7IGFzOiBcImFcIiwgY29udGVudDogXCJIZWxwXCIsIGtleTogXCJIZWxwXCIsIGljb246IFwiaGVscCBjaXJjbGVcIiB9XG5dO1xuY29uc3QgcmlnaHRJdGVtcyA9IFtcbiAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiTG9naW5cIiwga2V5OiBcImxvZ2luXCIgfSxcbiAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiUmVnaXN0ZXJcIiwga2V5OiBcInJlZ2lzdGVyXCIgfVxuXTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgIDxOYXZCYXIgbGVmdEl0ZW1zPXtsZWZ0SXRlbXN9IHJpZ2h0SXRlbXM9e3JpZ2h0SXRlbXN9IC8+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTs7OztBQVRBO0FBQ0E7QUFXQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/containers/App.jsx\n");

/***/ })

})