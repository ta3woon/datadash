webpackHotUpdate("main",{

/***/ "./public/src/components/NavBar.jsx":
/*!******************************************!*\
  !*** ./public/src/components/NavBar.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\n__webpack_require__(/*! ../../assets/css/NavBar.css */ \"./public/assets/css/NavBar.css\");\n\nvar _OldMain = __webpack_require__(/*! ../containers/OldMain */ \"./public/src/containers/OldMain.jsx\");\n\nvar _OldMain2 = _interopRequireDefault(_OldMain);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// const leftItems = [\n//   { as: \"a\", content: \"Home\", key: \"home\" },\n//   { as: \"a\", content: \"Users\", key: \"users\" }\n// ];\n// const rightItems = [\n//   { as: \"a\", content: \"Login\", key: \"login\" },\n//   { as: \"a\", content: \"Register\", key: \"register\" }\n// ];\n\nvar NavBarMobile = function NavBarMobile(_ref) {\n  var children = _ref.children,\n      leftItems = _ref.leftItems,\n      onPusherClick = _ref.onPusherClick,\n      onToggle = _ref.onToggle,\n      rightItems = _ref.rightItems,\n      visible = _ref.visible;\n  return _react2.default.createElement(\n    _semanticUiReact.Sidebar.Pushable,\n    { as: _semanticUiReact.Segment },\n    _react2.default.createElement(_semanticUiReact.Sidebar, {\n      as: _semanticUiReact.Menu,\n      animation: 'push',\n      width: 'thin',\n      icon: 'labeled',\n      items: leftItems,\n      vertical: true,\n      visible: visible\n    }),\n    _react2.default.createElement(\n      _semanticUiReact.Sidebar.Pusher,\n      {\n        dimmed: visible,\n        onClick: onPusherClick,\n        style: { minHeight: \"100vh\" }\n      },\n      _react2.default.createElement(\n        _semanticUiReact.Menu,\n        { fixed: 'top' },\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          null,\n          _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          { onClick: onToggle },\n          _react2.default.createElement(_semanticUiReact.Icon, { name: 'sidebar' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Menu,\n          { position: 'right' },\n          _lodash2.default.map(rightItems, function (item) {\n            return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n          })\n        )\n      ),\n      children\n    ),\n    _react2.default.createElement(\n      _semanticUiReact.Segment,\n      { basic: true },\n      _react2.default.createElement(\n        'div',\n        null,\n        'Test test test'\n      )\n    )\n  );\n};\n\nvar NavBarDesktop = function NavBarDesktop(_ref2) {\n  var leftItems = _ref2.leftItems,\n      rightItems = _ref2.rightItems;\n  return _react2.default.createElement(\n    _semanticUiReact.Menu,\n    { fixed: 'top' },\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Item,\n      null,\n      _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n    ),\n    _lodash2.default.map(leftItems, function (item) {\n      return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n    }),\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Menu,\n      { position: 'right' },\n      _lodash2.default.map(rightItems, function (item) {\n        return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n      })\n    )\n  );\n};\n\nvar NavBarChildren = function NavBarChildren(_ref3) {\n  var children = _ref3.children;\n  return _react2.default.createElement(\n    _semanticUiReact.Container,\n    { style: { marginTop: \"52px\" } },\n    children\n  );\n};\n\nvar NavBar = function (_React$Component) {\n  _inherits(NavBar, _React$Component);\n\n  function NavBar(props) {\n    _classCallCheck(this, NavBar);\n\n    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));\n\n    _this.state = {\n      visible: true\n    };\n    _this.handlePusher = _this.handlePusher.bind(_this);\n    _this.handleToggle = _this.handleToggle.bind(_this);\n    return _this;\n  }\n\n  _createClass(NavBar, [{\n    key: 'handlePusher',\n    value: function handlePusher() {\n      var visible = this.state.visible;\n\n      if (visible) this.setState({ visible: false });\n    }\n  }, {\n    key: 'handleToggle',\n    value: function handleToggle() {\n      this.setState({ visible: !this.state.visible });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          leftItems = _props.leftItems,\n          rightItems = _props.rightItems;\n      var visible = this.state.visible;\n      // console.log(this.props)\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _semanticUiReact.Responsive,\n          { minWidth: _semanticUiReact.Responsive.onlyTablet.minWidth },\n          _react2.default.createElement(\n            NavBarMobile,\n            {\n              leftItems: leftItems,\n              onPusherClick: this.handlePusher,\n              onToggle: this.handleToggle,\n              rightItems: rightItems,\n              visible: visible\n            },\n            _react2.default.createElement(\n              NavBarChildren,\n              null,\n              children\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NavBar;\n}(_react2.default.Component);\n\nexports.default = NavBar;\n\n// <div>\n//   <Responsive {...Responsive.onlyMobile}>\n//     <NavBarMobile\n//       leftItems={leftItems}\n//       onPusherClick={this.handlePusher}\n//       onToggle={this.handleToggle}\n//       rightItems={rightItems}\n//       visible={visible}\n//     >\n//       <NavBarChildren>{children}</NavBarChildren>\n//     </NavBarMobile>\n//   </Responsive>\n//   <Responsive minWidth={Responsive.onlyTablet.minWidth}>\n//     <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />\n//     <NavBarChildren>{children}</NavBarChildren>\n//   </Responsive>\n// </div>//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeD85YzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9OYXZCYXIuY3NzJztcbmltcG9ydCBPbGRNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvT2xkTWFpbic7XG5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgSWNvbixcbiAgSW1hZ2UsXG4gIE1lbnUsXG4gIFNpZGViYXIsXG4gIFNlZ21lbnQsXG4gIEJ1dHRvbixcbiAgSGVhZGVyLFxuICBSZXNwb25zaXZlXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG4vLyBjb25zdCBsZWZ0SXRlbXMgPSBbXG4vLyAgIHsgYXM6IFwiYVwiLCBjb250ZW50OiBcIkhvbWVcIiwga2V5OiBcImhvbWVcIiB9LFxuLy8gICB7IGFzOiBcImFcIiwgY29udGVudDogXCJVc2Vyc1wiLCBrZXk6IFwidXNlcnNcIiB9XG4vLyBdO1xuLy8gY29uc3QgcmlnaHRJdGVtcyA9IFtcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiTG9naW5cIiwga2V5OiBcImxvZ2luXCIgfSxcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiUmVnaXN0ZXJcIiwga2V5OiBcInJlZ2lzdGVyXCIgfVxuLy8gXTtcblxuY29uc3QgTmF2QmFyTW9iaWxlID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxlZnRJdGVtcyxcbiAgb25QdXNoZXJDbGljayxcbiAgb25Ub2dnbGUsXG4gIHJpZ2h0SXRlbXMsXG4gIHZpc2libGVcbn0pID0+IChcbiAgPFNpZGViYXIuUHVzaGFibGUgYXM9e1NlZ21lbnR9PlxuICAgIDxTaWRlYmFyXG4gICAgICBhcz17TWVudX1cbiAgICAgIGFuaW1hdGlvbj1cInB1c2hcIlxuICAgICAgd2lkdGg9XCJ0aGluXCJcbiAgICAgIGljb249XCJsYWJlbGVkXCJcbiAgICAgIGl0ZW1zPXtsZWZ0SXRlbXN9XG4gICAgICB2ZXJ0aWNhbFxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAvPlxuICAgIDxTaWRlYmFyLlB1c2hlclxuICAgICAgZGltbWVkPXt2aXNpYmxlfVxuICAgICAgb25DbGljaz17b25QdXNoZXJDbGlja31cbiAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogXCIxMDB2aFwiIH19XG4gICAgPlxuICAgICAgPE1lbnUgZml4ZWQ9XCJ0b3BcIiA+XG4gICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgPEltYWdlIHNpemU9XCJtaW5pXCIgc3JjPVwiYXNzZXRzL2ltZy9sb2dvLXRlc3QyLnBuZ1wiIC8+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e29uVG9nZ2xlfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwic2lkZWJhclwiIC8+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgICB7Xy5tYXAocmlnaHRJdGVtcywgaXRlbSA9PiA8TWVudS5JdGVtIHsuLi5pdGVtfSAvPil9XG4gICAgICAgIDwvTWVudS5NZW51PlxuICAgICAgPC9NZW51PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2lkZWJhci5QdXNoZXI+XG4gICAgPFNlZ21lbnQgYmFzaWM+XG4gICAgICA8ZGl2PlRlc3QgdGVzdCB0ZXN0PC9kaXY+XG4gICAgPC9TZWdtZW50PlxuICA8L1NpZGViYXIuUHVzaGFibGU+XG4pO1xuXG5jb25zdCBOYXZCYXJEZXNrdG9wID0gKHsgbGVmdEl0ZW1zLCByaWdodEl0ZW1zIH0pID0+IChcbiAgPE1lbnUgZml4ZWQ9XCJ0b3BcIiA+XG4gICAgPE1lbnUuSXRlbT5cbiAgICAgIDxJbWFnZSBzaXplPVwibWluaVwiIHNyYz1cImFzc2V0cy9pbWcvbG9nby10ZXN0Mi5wbmdcIiAvPlxuICAgIDwvTWVudS5JdGVtPlxuICAgIHtfLm1hcChsZWZ0SXRlbXMsIGl0ZW0gPT4gPE1lbnUuSXRlbSB7Li4uaXRlbX0gLz4pfVxuICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAge18ubWFwKHJpZ2h0SXRlbXMsIGl0ZW0gPT4gPE1lbnUuSXRlbSB7Li4uaXRlbX0gLz4pfVxuICAgIDwvTWVudS5NZW51PlxuICA8L01lbnU+XG4pO1xuXG5jb25zdCBOYXZCYXJDaGlsZHJlbiA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPENvbnRhaW5lciBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNTJweFwiIH19PntjaGlsZHJlbn08L0NvbnRhaW5lcj5cbik7XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9OyAgIFxuICAgIHRoaXMuaGFuZGxlUHVzaGVyID0gdGhpcy5oYW5kbGVQdXNoZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZSA9IHRoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVQdXNoZXIoKSB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh2aXNpYmxlKSB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSk7XG4gIH07XG5cbiAgaGFuZGxlVG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiAhdGhpcy5zdGF0ZS52aXNpYmxlIH0pXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGxlZnRJdGVtcywgcmlnaHRJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UmVzcG9uc2l2ZSBtaW5XaWR0aD17UmVzcG9uc2l2ZS5vbmx5VGFibGV0Lm1pbldpZHRofT5cbiAgICAgICAgICA8TmF2QmFyTW9iaWxlXG4gICAgICAgICAgICBsZWZ0SXRlbXM9e2xlZnRJdGVtc31cbiAgICAgICAgICAgIG9uUHVzaGVyQ2xpY2s9e3RoaXMuaGFuZGxlUHVzaGVyfVxuICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgICAgcmlnaHRJdGVtcz17cmlnaHRJdGVtc31cbiAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE5hdkJhckNoaWxkcmVuPntjaGlsZHJlbn08L05hdkJhckNoaWxkcmVuPlxuICAgICAgICAgIDwvTmF2QmFyTW9iaWxlPlxuICAgICAgICA8L1Jlc3BvbnNpdmU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuXG5cbi8vIDxkaXY+XG4vLyAgIDxSZXNwb25zaXZlIHsuLi5SZXNwb25zaXZlLm9ubHlNb2JpbGV9PlxuLy8gICAgIDxOYXZCYXJNb2JpbGVcbi8vICAgICAgIGxlZnRJdGVtcz17bGVmdEl0ZW1zfVxuLy8gICAgICAgb25QdXNoZXJDbGljaz17dGhpcy5oYW5kbGVQdXNoZXJ9XG4vLyAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4vLyAgICAgICByaWdodEl0ZW1zPXtyaWdodEl0ZW1zfVxuLy8gICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbi8vICAgICA+XG4vLyAgICAgICA8TmF2QmFyQ2hpbGRyZW4+e2NoaWxkcmVufTwvTmF2QmFyQ2hpbGRyZW4+XG4vLyAgICAgPC9OYXZCYXJNb2JpbGU+XG4vLyAgIDwvUmVzcG9uc2l2ZT5cbi8vICAgPFJlc3BvbnNpdmUgbWluV2lkdGg9e1Jlc3BvbnNpdmUub25seVRhYmxldC5taW5XaWR0aH0+XG4vLyAgICAgPE5hdkJhckRlc2t0b3AgbGVmdEl0ZW1zPXtsZWZ0SXRlbXN9IHJpZ2h0SXRlbXM9e3JpZ2h0SXRlbXN9IC8+XG4vLyAgICAgPE5hdkJhckNoaWxkcmVuPntjaGlsZHJlbn08L05hdkJhckNoaWxkcmVuPlxuLy8gICA8L1Jlc3BvbnNpdmU+XG4vLyA8L2Rpdj4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQVBBO0FBV0E7QUFoQkE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBNUJBO0FBUkE7QUFDQTtBQXlDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFMQTtBQURBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFOQTtBQU9BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQURBO0FBREE7QUFjQTs7OztBQXhDQTtBQUNBO0FBMkNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/components/NavBar.jsx\n");

/***/ })

})