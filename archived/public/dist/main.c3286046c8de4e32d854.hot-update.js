webpackHotUpdate("main",{

/***/ "./public/src/components/NavBar.jsx":
/*!******************************************!*\
  !*** ./public/src/components/NavBar.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// const leftItems = [\n//   { as: \"a\", content: \"Home\", key: \"home\" },\n//   { as: \"a\", content: \"Users\", key: \"users\" }\n// ];\n// const rightItems = [\n//   { as: \"a\", content: \"Login\", key: \"login\" },\n//   { as: \"a\", content: \"Register\", key: \"register\" }\n// ];\n\nvar NavBarMobile = function NavBarMobile(_ref) {\n  var children = _ref.children,\n      leftItems = _ref.leftItems,\n      onPusherClick = _ref.onPusherClick,\n      onToggle = _ref.onToggle,\n      rightItems = _ref.rightItems,\n      visible = _ref.visible;\n  return _react2.default.createElement(\n    _semanticUiReact.Sidebar.Pushable,\n    null,\n    _react2.default.createElement(_semanticUiReact.Sidebar, {\n      as: _semanticUiReact.Menu,\n      animation: 'overlay',\n      icon: 'labeled',\n      inverted: true,\n      items: leftItems,\n      vertical: true,\n      visible: visible\n    }),\n    _react2.default.createElement(\n      _semanticUiReact.Sidebar.Pusher,\n      {\n        dimmed: visible,\n        onClick: onPusherClick,\n        style: { minHeight: \"100vh\" }\n      },\n      _react2.default.createElement(\n        _semanticUiReact.Menu,\n        { fixed: 'top' },\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          null,\n          _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          { onClick: onToggle },\n          _react2.default.createElement(_semanticUiReact.Icon, { name: 'sidebar' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Menu,\n          { position: 'right' },\n          _lodash2.default.map(rightItems, function (item) {\n            return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n          })\n        )\n      ),\n      children\n    )\n  );\n};\n\nvar NavBarDesktop = function NavBarDesktop(_ref2) {\n  var leftItems = _ref2.leftItems,\n      rightItems = _ref2.rightItems;\n  return _react2.default.createElement(\n    _semanticUiReact.Menu,\n    { fixed: 'top' },\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Item,\n      null,\n      _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n    ),\n    _lodash2.default.map(leftItems, function (item) {\n      return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n    }),\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Menu,\n      { position: 'right' },\n      _lodash2.default.map(rightItems, function (item) {\n        return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n      })\n    )\n  );\n};\n\nvar NavBarChildren = function NavBarChildren(_ref3) {\n  var children = _ref3.children;\n  return _react2.default.createElement(\n    _semanticUiReact.Container,\n    { style: { marginTop: \"5em\" } },\n    children\n  );\n};\n\nvar NavBar = function (_React$Component) {\n  _inherits(NavBar, _React$Component);\n\n  function NavBar(props) {\n    _classCallCheck(this, NavBar);\n\n    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));\n\n    _this.state = {\n      visible: false\n    };\n    _this.handlePusher = _this.handlePusher.bind(_this);\n    _this.handleToggle = _this.handleToggle.bind(_this);\n    return _this;\n  }\n\n  _createClass(NavBar, [{\n    key: 'handlePusher',\n    value: function handlePusher() {\n      var visible = this.state.visible;\n\n      if (visible) this.setState({ visible: false });\n    }\n  }, {\n    key: 'handleToggle',\n    value: function handleToggle() {\n      this.setState({ visible: !this.state.visible });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          leftItems = _props.leftItems,\n          rightItems = _props.rightItems;\n      var visible = this.state.visible;\n\n      console.log(this.props);\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _semanticUiReact.Responsive,\n          _semanticUiReact.Responsive.onlyMobile,\n          _react2.default.createElement(\n            NavBarMobile,\n            {\n              leftItems: leftItems,\n              onPusherClick: this.handlePusher,\n              onToggle: this.handleToggle,\n              rightItems: rightItems,\n              visible: visible\n            },\n            _react2.default.createElement(\n              NavBarChildren,\n              null,\n              children\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Responsive,\n          { minWidth: _semanticUiReact.Responsive.onlyTablet.minWidth },\n          _react2.default.createElement(NavBarDesktop, { leftItems: leftItems, rightItems: rightItems }),\n          _react2.default.createElement(\n            NavBarChildren,\n            null,\n            children\n          )\n        )\n      );\n    }\n  }]);\n\n  return NavBar;\n}(_react2.default.Component);\n\nexports.default = NavBar;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeD85YzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIEljb24sXG4gIEltYWdlLFxuICBNZW51LFxuICBTaWRlYmFyLFxuICBSZXNwb25zaXZlXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG4vLyBjb25zdCBsZWZ0SXRlbXMgPSBbXG4vLyAgIHsgYXM6IFwiYVwiLCBjb250ZW50OiBcIkhvbWVcIiwga2V5OiBcImhvbWVcIiB9LFxuLy8gICB7IGFzOiBcImFcIiwgY29udGVudDogXCJVc2Vyc1wiLCBrZXk6IFwidXNlcnNcIiB9XG4vLyBdO1xuLy8gY29uc3QgcmlnaHRJdGVtcyA9IFtcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiTG9naW5cIiwga2V5OiBcImxvZ2luXCIgfSxcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiUmVnaXN0ZXJcIiwga2V5OiBcInJlZ2lzdGVyXCIgfVxuLy8gXTtcblxuY29uc3QgTmF2QmFyTW9iaWxlID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxlZnRJdGVtcyxcbiAgb25QdXNoZXJDbGljayxcbiAgb25Ub2dnbGUsXG4gIHJpZ2h0SXRlbXMsXG4gIHZpc2libGVcbn0pID0+IChcbiAgPFNpZGViYXIuUHVzaGFibGU+XG4gICAgPFNpZGViYXJcbiAgICAgIGFzPXtNZW51fVxuICAgICAgYW5pbWF0aW9uPVwib3ZlcmxheVwiXG4gICAgICBpY29uPVwibGFiZWxlZFwiXG4gICAgICBpbnZlcnRlZFxuICAgICAgaXRlbXM9e2xlZnRJdGVtc31cbiAgICAgIHZlcnRpY2FsXG4gICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgIC8+XG4gICAgPFNpZGViYXIuUHVzaGVyXG4gICAgICBkaW1tZWQ9e3Zpc2libGV9XG4gICAgICBvbkNsaWNrPXtvblB1c2hlckNsaWNrfVxuICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX1cbiAgICA+XG4gICAgICA8TWVudSBmaXhlZD1cInRvcFwiID5cbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICA8SW1hZ2Ugc2l6ZT1cIm1pbmlcIiBzcmM9XCJhc3NldHMvaW1nL2xvZ28tdGVzdDIucG5nXCIgLz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17b25Ub2dnbGV9PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJzaWRlYmFyXCIgLz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICAgIHtfLm1hcChyaWdodEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICAgICAgPC9NZW51Lk1lbnU+XG4gICAgICA8L01lbnU+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TaWRlYmFyLlB1c2hlcj5cbiAgPC9TaWRlYmFyLlB1c2hhYmxlPlxuKTtcblxuY29uc3QgTmF2QmFyRGVza3RvcCA9ICh7IGxlZnRJdGVtcywgcmlnaHRJdGVtcyB9KSA9PiAoXG4gIDxNZW51IGZpeGVkPVwidG9wXCIgPlxuICAgIDxNZW51Lkl0ZW0+XG4gICAgICA8SW1hZ2Ugc2l6ZT1cIm1pbmlcIiBzcmM9XCJhc3NldHMvaW1nL2xvZ28tdGVzdDIucG5nXCIgLz5cbiAgICA8L01lbnUuSXRlbT5cbiAgICB7Xy5tYXAobGVmdEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgIHtfLm1hcChyaWdodEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICA8L01lbnUuTWVudT5cbiAgPC9NZW51PlxuKTtcblxuY29uc3QgTmF2QmFyQ2hpbGRyZW4gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVlbVwiIH19PntjaGlsZHJlbn08L0NvbnRhaW5lcj5cbik7XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfTsgICBcbiAgICB0aGlzLmhhbmRsZVB1c2hlciA9IHRoaXMuaGFuZGxlUHVzaGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGUgPSB0aGlzLmhhbmRsZVRvZ2dsZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlUHVzaGVyKCkge1xuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodmlzaWJsZSkgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogIXRoaXMuc3RhdGUudmlzaWJsZSB9KVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBsZWZ0SXRlbXMsIHJpZ2h0SXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFJlc3BvbnNpdmUgey4uLlJlc3BvbnNpdmUub25seU1vYmlsZX0+XG4gICAgICAgICAgPE5hdkJhck1vYmlsZVxuICAgICAgICAgICAgbGVmdEl0ZW1zPXtsZWZ0SXRlbXN9XG4gICAgICAgICAgICBvblB1c2hlckNsaWNrPXt0aGlzLmhhbmRsZVB1c2hlcn1cbiAgICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICAgIHJpZ2h0SXRlbXM9e3JpZ2h0SXRlbXN9XG4gICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOYXZCYXJDaGlsZHJlbj57Y2hpbGRyZW59PC9OYXZCYXJDaGlsZHJlbj5cbiAgICAgICAgICA8L05hdkJhck1vYmlsZT5cbiAgICAgICAgPC9SZXNwb25zaXZlPlxuICAgICAgICA8UmVzcG9uc2l2ZSBtaW5XaWR0aD17UmVzcG9uc2l2ZS5vbmx5VGFibGV0Lm1pbldpZHRofT5cbiAgICAgICAgICA8TmF2QmFyRGVza3RvcCBsZWZ0SXRlbXM9e2xlZnRJdGVtc30gcmlnaHRJdGVtcz17cmlnaHRJdGVtc30gLz5cbiAgICAgICAgICA8TmF2QmFyQ2hpbGRyZW4+e2NoaWxkcmVufTwvTmF2QmFyQ2hpbGRyZW4+XG4gICAgICAgIDwvUmVzcG9uc2l2ZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFQQTtBQVdBO0FBaEJBO0FBVkE7QUFSQTtBQUNBO0FBc0NBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBREE7QUFDQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQU5BO0FBT0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFEQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBWkE7QUFrQkE7Ozs7QUE1Q0E7QUFDQTtBQWdEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/components/NavBar.jsx\n");

/***/ })

})