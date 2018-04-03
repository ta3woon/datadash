webpackHotUpdate("main",{

/***/ "./public/src/components/NavBar.jsx":
/*!******************************************!*\
  !*** ./public/src/components/NavBar.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\n__webpack_require__(/*! ../../assets/css/NavBar.css */ \"./public/assets/css/NavBar.css\");\n\nvar _OldMain = __webpack_require__(/*! ../containers/OldMain */ \"./public/src/containers/OldMain.jsx\");\n\nvar _OldMain2 = _interopRequireDefault(_OldMain);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// const leftItems = [\n//   { as: \"a\", content: \"Home\", key: \"home\" },\n//   { as: \"a\", content: \"Users\", key: \"users\" }\n// ];\n// const rightItems = [\n//   { as: \"a\", content: \"Login\", key: \"login\" },\n//   { as: \"a\", content: \"Register\", key: \"register\" }\n// ];\n\nvar NavBarMobile = function NavBarMobile(_ref) {\n  var children = _ref.children,\n      leftItems = _ref.leftItems,\n      onPusherClick = _ref.onPusherClick,\n      onToggle = _ref.onToggle,\n      rightItems = _ref.rightItems,\n      visible = _ref.visible;\n  return _react2.default.createElement(\n    _semanticUiReact.Sidebar.Pushable,\n    { as: _semanticUiReact.Segment },\n    _react2.default.createElement(\n      _semanticUiReact.Sidebar,\n      {\n        as: _semanticUiReact.Menu,\n        animation: 'push',\n        width: 'thin',\n        icon: 'labeled',\n        items: leftItems,\n        vertical: true,\n        visible: visible\n      },\n      _react2.default.createElement(\n        _semanticUiReact.Menu,\n        { fixed: 'top' },\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          { onClick: onToggle },\n          _react2.default.createElement(_semanticUiReact.Icon, { name: 'sidebar' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          null,\n          _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Menu,\n          { position: 'right' },\n          _lodash2.default.map(rightItems, function (item) {\n            return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n          })\n        )\n      )\n    ),\n    _react2.default.createElement(\n      _semanticUiReact.Sidebar.Pusher,\n      {\n        onClick: onPusherClick,\n        style: { minHeight: \"100vh\" }\n      },\n      children\n    ),\n    _react2.default.createElement(\n      _semanticUiReact.Segment,\n      { basic: true },\n      _react2.default.createElement(_OldMain2.default, null)\n    )\n  );\n};\n\nvar NavBarDesktop = function NavBarDesktop(_ref2) {\n  var leftItems = _ref2.leftItems,\n      rightItems = _ref2.rightItems;\n  return _react2.default.createElement(\n    _semanticUiReact.Menu,\n    { fixed: 'top' },\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Item,\n      null,\n      _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n    ),\n    _lodash2.default.map(leftItems, function (item) {\n      return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n    }),\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Menu,\n      { position: 'right' },\n      _lodash2.default.map(rightItems, function (item) {\n        return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n      })\n    )\n  );\n};\n\nvar NavBarChildren = function NavBarChildren(_ref3) {\n  var children = _ref3.children;\n  return _react2.default.createElement(\n    _semanticUiReact.Container,\n    { style: { marginTop: \"52px\" } },\n    children\n  );\n};\n\nvar NavBar = function (_React$Component) {\n  _inherits(NavBar, _React$Component);\n\n  function NavBar(props) {\n    _classCallCheck(this, NavBar);\n\n    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));\n\n    _this.state = {\n      visible: false\n    };\n    _this.handlePusher = _this.handlePusher.bind(_this);\n    _this.handleToggle = _this.handleToggle.bind(_this);\n    return _this;\n  }\n\n  _createClass(NavBar, [{\n    key: 'handlePusher',\n    value: function handlePusher() {\n      var visible = this.state.visible;\n\n      if (visible) this.setState({ visible: false });\n    }\n  }, {\n    key: 'handleToggle',\n    value: function handleToggle() {\n      this.setState({ visible: !this.state.visible });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          leftItems = _props.leftItems,\n          rightItems = _props.rightItems;\n      var visible = this.state.visible;\n      // console.log(this.props)\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _semanticUiReact.Responsive,\n          _semanticUiReact.Responsive.onlyMobile,\n          _react2.default.createElement(\n            NavBarMobile,\n            {\n              leftItems: leftItems,\n              onPusherClick: this.handlePusher,\n              onToggle: this.handleToggle,\n              rightItems: rightItems,\n              visible: visible\n            },\n            _react2.default.createElement(\n              NavBarChildren,\n              null,\n              children\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Responsive,\n          { minWidth: _semanticUiReact.Responsive.onlyTablet.minWidth },\n          _react2.default.createElement(NavBarDesktop, { leftItems: leftItems, rightItems: rightItems }),\n          _react2.default.createElement(\n            NavBarChildren,\n            null,\n            children\n          )\n        )\n      );\n    }\n  }]);\n\n  return NavBar;\n}(_react2.default.Component);\n\nexports.default = NavBar;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeD85YzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9OYXZCYXIuY3NzJztcbmltcG9ydCBPbGRNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvT2xkTWFpbic7XG5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgSWNvbixcbiAgSW1hZ2UsXG4gIE1lbnUsXG4gIFNpZGViYXIsXG4gIFNlZ21lbnQsXG4gIEJ1dHRvbixcbiAgSGVhZGVyLFxuICBSZXNwb25zaXZlXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG4vLyBjb25zdCBsZWZ0SXRlbXMgPSBbXG4vLyAgIHsgYXM6IFwiYVwiLCBjb250ZW50OiBcIkhvbWVcIiwga2V5OiBcImhvbWVcIiB9LFxuLy8gICB7IGFzOiBcImFcIiwgY29udGVudDogXCJVc2Vyc1wiLCBrZXk6IFwidXNlcnNcIiB9XG4vLyBdO1xuLy8gY29uc3QgcmlnaHRJdGVtcyA9IFtcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiTG9naW5cIiwga2V5OiBcImxvZ2luXCIgfSxcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiUmVnaXN0ZXJcIiwga2V5OiBcInJlZ2lzdGVyXCIgfVxuLy8gXTtcblxuY29uc3QgTmF2QmFyTW9iaWxlID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxlZnRJdGVtcyxcbiAgb25QdXNoZXJDbGljayxcbiAgb25Ub2dnbGUsXG4gIHJpZ2h0SXRlbXMsXG4gIHZpc2libGVcbn0pID0+IChcbiAgPFNpZGViYXIuUHVzaGFibGUgYXM9e1NlZ21lbnR9PlxuICAgIDxTaWRlYmFyXG4gICAgICBhcz17TWVudX1cbiAgICAgIGFuaW1hdGlvbj1cInB1c2hcIlxuICAgICAgd2lkdGg9XCJ0aGluXCJcbiAgICAgIGljb249XCJsYWJlbGVkXCJcbiAgICAgIGl0ZW1zPXtsZWZ0SXRlbXN9XG4gICAgICB2ZXJ0aWNhbFxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICA+XG4gICAgICA8TWVudSBmaXhlZD1cInRvcFwiID5cbiAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXtvblRvZ2dsZX0+XG4gICAgICAgICAgPEljb24gbmFtZT1cInNpZGViYXJcIiAvPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICA8SW1hZ2Ugc2l6ZT1cIm1pbmlcIiBzcmM9XCJhc3NldHMvaW1nL2xvZ28tdGVzdDIucG5nXCIgLz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICAgIHtfLm1hcChyaWdodEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICAgICAgPC9NZW51Lk1lbnU+XG4gICAgICA8L01lbnU+XG4gICAgPC9TaWRlYmFyPlxuICAgIDxTaWRlYmFyLlB1c2hlclxuICAgICAgb25DbGljaz17b25QdXNoZXJDbGlja31cbiAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogXCIxMDB2aFwiIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2lkZWJhci5QdXNoZXI+XG4gICAgPFNlZ21lbnQgYmFzaWM+XG4gICAgICA8T2xkTWFpbiAvPlxuICAgIDwvU2VnbWVudD5cbiAgPC9TaWRlYmFyLlB1c2hhYmxlPlxuKTtcblxuY29uc3QgTmF2QmFyRGVza3RvcCA9ICh7IGxlZnRJdGVtcywgcmlnaHRJdGVtcyB9KSA9PiAoXG4gIDxNZW51IGZpeGVkPVwidG9wXCIgPlxuICAgIDxNZW51Lkl0ZW0+XG4gICAgICA8SW1hZ2Ugc2l6ZT1cIm1pbmlcIiBzcmM9XCJhc3NldHMvaW1nL2xvZ28tdGVzdDIucG5nXCIgLz5cbiAgICA8L01lbnUuSXRlbT5cbiAgICB7Xy5tYXAobGVmdEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgIHtfLm1hcChyaWdodEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICA8L01lbnUuTWVudT5cbiAgPC9NZW51PlxuKTtcblxuY29uc3QgTmF2QmFyQ2hpbGRyZW4gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjUycHhcIiB9fT57Y2hpbGRyZW59PC9Db250YWluZXI+XG4pO1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH07ICAgXG4gICAgdGhpcy5oYW5kbGVQdXNoZXIgPSB0aGlzLmhhbmRsZVB1c2hlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlID0gdGhpcy5oYW5kbGVUb2dnbGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVB1c2hlcigpIHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHZpc2libGUpIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgfTtcblxuICBoYW5kbGVUb2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6ICF0aGlzLnN0YXRlLnZpc2libGUgfSlcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgbGVmdEl0ZW1zLCByaWdodEl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxSZXNwb25zaXZlIHsuLi5SZXNwb25zaXZlLm9ubHlNb2JpbGV9PlxuICAgICAgICAgIDxOYXZCYXJNb2JpbGVcbiAgICAgICAgICAgIGxlZnRJdGVtcz17bGVmdEl0ZW1zfVxuICAgICAgICAgICAgb25QdXNoZXJDbGljaz17dGhpcy5oYW5kbGVQdXNoZXJ9XG4gICAgICAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgICByaWdodEl0ZW1zPXtyaWdodEl0ZW1zfVxuICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TmF2QmFyQ2hpbGRyZW4+e2NoaWxkcmVufTwvTmF2QmFyQ2hpbGRyZW4+XG4gICAgICAgICAgPC9OYXZCYXJNb2JpbGU+XG4gICAgICAgIDwvUmVzcG9uc2l2ZT5cbiAgICAgICAgPFJlc3BvbnNpdmUgbWluV2lkdGg9e1Jlc3BvbnNpdmUub25seVRhYmxldC5taW5XaWR0aH0+XG4gICAgICAgICAgPE5hdkJhckRlc2t0b3AgbGVmdEl0ZW1zPXtsZWZ0SXRlbXN9IHJpZ2h0SXRlbXM9e3JpZ2h0SXRlbXN9IC8+XG4gICAgICAgICAgPE5hdkJhckNoaWxkcmVuPntjaGlsZHJlbn08L05hdkJhckNoaWxkcmVuPlxuICAgICAgICA8L1Jlc3BvbnNpdmU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQVBBO0FBVEE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUE1QkE7QUFSQTtBQUNBO0FBeUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBREE7QUFDQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQU5BO0FBT0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVpBO0FBa0JBOzs7O0FBNUNBO0FBQ0E7QUErQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/src/components/NavBar.jsx\n");

/***/ })

})