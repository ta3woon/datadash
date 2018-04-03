webpackHotUpdate("main",{

/***/ "./public/src/containers/App.jsx":
/*!***************************************!*\
  !*** ./public/src/containers/App.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ../../assets/css/App.css */ \"./public/assets/css/App.css\");\n\nvar _NavBar = __webpack_require__(/*! ../components/NavBar */ \"./public/src/components/NavBar.jsx\");\n\nvar _NavBar2 = _interopRequireDefault(_NavBar);\n\nvar _OldMain = __webpack_require__(/*! ./OldMain */ \"./public/src/containers/OldMain.jsx\");\n\nvar _OldMain2 = _interopRequireDefault(_OldMain);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import logo from './logo.svg';\n\n\nvar leftItems = [{ as: \"a\", content: \"Home\", key: \"home\" }, { as: \"a\", content: \"Dashboards\", key: \"Dashboards\" }, { as: \"a\", content: \"Help\", key: \"Help\" }];\nvar rightItems = [{ as: \"a\", content: \"Login\", key: \"login\" }, { as: \"a\", content: \"Register\", key: \"register\" }];\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'App' },\n        _react2.default.createElement(_NavBar2.default, { leftItems: leftItems, rightItems: rightItems })\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbnRhaW5lcnMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc3JjL2NvbnRhaW5lcnMvQXBwLmpzeD82OTYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgbG9nbyBmcm9tICcuL2xvZ28uc3ZnJztcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9BcHAuY3NzJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xuaW1wb3J0IE9sZE1haW4gZnJvbSAnLi9PbGRNYWluJztcblxuY29uc3QgbGVmdEl0ZW1zID0gW1xuICB7IGFzOiBcImFcIiwgY29udGVudDogXCJIb21lXCIsIGtleTogXCJob21lXCIgfSxcbiAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiRGFzaGJvYXJkc1wiLCBrZXk6IFwiRGFzaGJvYXJkc1wiIH0sXG4gIHsgYXM6IFwiYVwiLCBjb250ZW50OiBcIkhlbHBcIiwga2V5OiBcIkhlbHBcIiB9XG5dO1xuY29uc3QgcmlnaHRJdGVtcyA9IFtcbiAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiTG9naW5cIiwga2V5OiBcImxvZ2luXCIgfSxcbiAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiUmVnaXN0ZXJcIiwga2V5OiBcInJlZ2lzdGVyXCIgfVxuXTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8TmF2QmFyIGxlZnRJdGVtcz17bGVmdEl0ZW1zfSByaWdodEl0ZW1zPXtyaWdodEl0ZW1zfSAvPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFKQTtBQUNBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTs7OztBQVJBO0FBQ0E7QUFVQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/containers/App.jsx\n");

/***/ })

})