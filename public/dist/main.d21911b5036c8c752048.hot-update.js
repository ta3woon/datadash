webpackHotUpdate("main",{

/***/ "./public/src/routes.jsx":
/*!*******************************!*\
  !*** ./public/src/routes.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\t\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _OldMain = __webpack_require__(/*! ./containers/OldMain */ \"./public/src/containers/OldMain.jsx\");\n\nvar _OldMain2 = _interopRequireDefault(_OldMain);\n\nvar _NavBar = __webpack_require__(/*! ./components/NavBar */ \"./public/src/components/NavBar.jsx\");\n\nvar _NavBar2 = _interopRequireDefault(_NavBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import { Route, IndexRoute} from 'react-router';\n\n\n// ROUTES\n\nvar Routes = function (_React$Component) {\n\t\t_inherits(Routes, _React$Component);\n\n\t\tfunction Routes() {\n\t\t\t\t_classCallCheck(this, Routes);\n\n\t\t\t\treturn _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));\n\t\t}\n\n\t\t_createClass(Routes, [{\n\t\t\t\tkey: 'render',\n\t\t\t\tvalue: function render() {\n\t\t\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t\t\t\t_reactRouterDom.Switch,\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Intro }),\n\t\t\t\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/oldMain', component: _OldMain2.default }),\n\t\t\t\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _NavBar2.default })\n\t\t\t\t\t\t);\n\t\t\t\t}\n\t\t}]);\n\n\t\treturn Routes;\n}(_react2.default.Component);\n\n;\n\nexports.default = Routes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL3JvdXRlcy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcHVibGljL3NyYy9yb3V0ZXMuanN4P2VmYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IFJvdXRlLCBJbmRleFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vLyBST1VURVNcblxuaW1wb3J0IE9sZE1haW4gZnJvbSAnLi9jb250YWluZXJzL09sZE1haW4nO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvTmF2QmFyJztcblxuY2xhc3MgUm91dGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICBcdHJldHVybiAoXG5cdCAgPFN3aXRjaD5cblx0ICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SW50cm99IC8+XG5cdCAgICA8Um91dGUgcGF0aD1cIi9vbGRNYWluXCIgY29tcG9uZW50PXtPbGRNYWlufSAvPlxuXHQgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2luRm9ybX0gLz5cblx0ICA8L1N3aXRjaD5cblx0KVxuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOzs7O0FBVEE7QUFDQTtBQVVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/routes.jsx\n");

/***/ })

})