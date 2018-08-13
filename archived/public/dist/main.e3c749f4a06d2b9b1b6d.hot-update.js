webpackHotUpdate("main",{

/***/ "./public/src/components/NavBar.jsx":
/*!******************************************!*\
  !*** ./public/src/components/NavBar.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\n__webpack_require__(/*! ../../assets/css/NavBar.css */ \"./public/assets/css/NavBar.css\");\n\nvar _OldMain = __webpack_require__(/*! ../containers/OldMain */ \"./public/src/containers/OldMain.jsx\");\n\nvar _OldMain2 = _interopRequireDefault(_OldMain);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import SignIn from './SignIn';\n\n\n// const leftItems = [\n//   { as: \"a\", content: \"Home\", key: \"home\" },\n//   { as: \"a\", content: \"Users\", key: \"users\" }\n// ];\n// const rightItems = [\n//   { as: \"a\", content: \"Login\", key: \"login\" },\n//   { as: \"a\", content: \"Register\", key: \"register\" }\n// ];\n\nvar brandOptions = [{ key: 'DTIG', value: 'DTIG', text: 'DTIG' }, { key: 'MAC', value: 'MAC', text: 'MAC' }, { key: 'Clinique', value: 'Clinique', text: 'Clinique' }];\n\nvar NavBarMobile = function NavBarMobile(_ref) {\n  var children = _ref.children,\n      leftItems = _ref.leftItems,\n      onPusherClick = _ref.onPusherClick,\n      onToggle = _ref.onToggle,\n      rightItems = _ref.rightItems,\n      visible = _ref.visible;\n  return _react2.default.createElement(\n    _semanticUiReact.Sidebar.Pushable,\n    { as: _semanticUiReact.Segment },\n    _react2.default.createElement(\n      _semanticUiReact.Sidebar,\n      {\n        as: _semanticUiReact.Menu,\n        animation: 'push',\n        width: 'wide',\n        icon: 'labeled',\n        vertical: true,\n        inverted: true,\n        visible: visible\n      },\n      _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Select Brand', search: true, selection: true, options: brandOptions })\n      ),\n      _lodash2.default.map(leftItems, function (item) {\n        return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n      })\n    ),\n    _react2.default.createElement(\n      _semanticUiReact.Sidebar.Pusher,\n      {\n        onClick: onPusherClick\n      },\n      _react2.default.createElement(\n        _semanticUiReact.Menu,\n        { fixed: 'top' },\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          { onClick: onToggle },\n          _react2.default.createElement(_semanticUiReact.Icon, { name: 'sidebar' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          null,\n          _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Menu,\n          { position: 'right' },\n          _react2.default.createElement(\n            _semanticUiReact.Menu.Item,\n            null,\n            'Login'\n          ),\n          _react2.default.createElement(\n            _semanticUiReact.Menu.Item,\n            null,\n            'Register'\n          )\n        )\n      ),\n      children,\n      _react2.default.createElement(\n        _semanticUiReact.Segment,\n        { basic: true },\n        _react2.default.createElement(_OldMain2.default, null)\n      )\n    )\n  );\n};\n\nvar NavBarDesktop = function NavBarDesktop(_ref2) {\n  var leftItems = _ref2.leftItems,\n      rightItems = _ref2.rightItems;\n  return _react2.default.createElement(\n    _semanticUiReact.Menu,\n    { fixed: 'top' },\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Item,\n      null,\n      _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n    ),\n    _lodash2.default.map(leftItems, function (item) {\n      return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n    }),\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Menu,\n      { position: 'right' },\n      _lodash2.default.map(rightItems, function (item) {\n        return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n      })\n    )\n  );\n};\n\nvar NavBarChildren = function NavBarChildren(_ref3) {\n  var children = _ref3.children;\n  return _react2.default.createElement(\n    _semanticUiReact.Container,\n    { style: { marginTop: \"52px\" } },\n    children\n  );\n};\n\nvar NavBar = function (_React$Component) {\n  _inherits(NavBar, _React$Component);\n\n  function NavBar(props) {\n    _classCallCheck(this, NavBar);\n\n    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));\n\n    _this.state = {\n      visible: false\n    };\n    _this.handlePusher = _this.handlePusher.bind(_this);\n    _this.handleToggle = _this.handleToggle.bind(_this);\n    return _this;\n  }\n\n  _createClass(NavBar, [{\n    key: 'handlePusher',\n    value: function handlePusher() {\n      var visible = this.state.visible;\n\n      if (visible) this.setState({ visible: false });\n    }\n  }, {\n    key: 'handleToggle',\n    value: function handleToggle() {\n      this.setState({ visible: !this.state.visible });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          leftItems = _props.leftItems,\n          rightItems = _props.rightItems;\n      var visible = this.state.visible;\n      // console.log(this.props)\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _semanticUiReact.Responsive,\n          null,\n          _react2.default.createElement(\n            NavBarMobile,\n            {\n              leftItems: leftItems,\n              onPusherClick: this.handlePusher,\n              onToggle: this.handleToggle,\n              rightItems: rightItems,\n              visible: visible\n            },\n            _react2.default.createElement(\n              NavBarChildren,\n              null,\n              children\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NavBar;\n}(_react2.default.Component);\n\nexports.default = NavBar;\n\n// <div>\n//   <Responsive {...Responsive.onlyMobile}>\n//     <NavBarMobile\n//       leftItems={leftItems}\n//       onPusherClick={this.handlePusher}\n//       onToggle={this.handleToggle}\n//       rightItems={rightItems}\n//       visible={visible}\n//     >\n//       <NavBarChildren>{children}</NavBarChildren>\n//     </NavBarMobile>\n//   </Responsive>\n//   <Responsive minWidth={Responsive.onlyTablet.minWidth}>\n//     <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />\n//     <NavBarChildren>{children}</NavBarChildren>\n//   </Responsive>\n// </div>//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeD85YzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9OYXZCYXIuY3NzJztcbmltcG9ydCBPbGRNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvT2xkTWFpbic7XG4vLyBpbXBvcnQgU2lnbkluIGZyb20gJy4vU2lnbkluJztcblxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBJY29uLFxuICBJbWFnZSxcbiAgTWVudSxcbiAgU2lkZWJhcixcbiAgU2VnbWVudCxcbiAgQnV0dG9uLFxuICBIZWFkZXIsXG4gIERyb3Bkb3duLFxuICBSZXNwb25zaXZlXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG4vLyBjb25zdCBsZWZ0SXRlbXMgPSBbXG4vLyAgIHsgYXM6IFwiYVwiLCBjb250ZW50OiBcIkhvbWVcIiwga2V5OiBcImhvbWVcIiB9LFxuLy8gICB7IGFzOiBcImFcIiwgY29udGVudDogXCJVc2Vyc1wiLCBrZXk6IFwidXNlcnNcIiB9XG4vLyBdO1xuLy8gY29uc3QgcmlnaHRJdGVtcyA9IFtcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiTG9naW5cIiwga2V5OiBcImxvZ2luXCIgfSxcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiUmVnaXN0ZXJcIiwga2V5OiBcInJlZ2lzdGVyXCIgfVxuLy8gXTtcblxuY29uc3QgYnJhbmRPcHRpb25zID0gWyBcbiAgeyBrZXk6ICdEVElHJywgdmFsdWU6ICdEVElHJywgdGV4dDogJ0RUSUcnIH0sIFxuICB7IGtleTogJ01BQycsIHZhbHVlOiAnTUFDJywgdGV4dDogJ01BQycgfSwgXG4gIHsga2V5OiAnQ2xpbmlxdWUnLCB2YWx1ZTogJ0NsaW5pcXVlJywgdGV4dDogJ0NsaW5pcXVlJyB9XG5dXG5cbmNvbnN0IE5hdkJhck1vYmlsZSA9ICh7XG4gIGNoaWxkcmVuLFxuICBsZWZ0SXRlbXMsXG4gIG9uUHVzaGVyQ2xpY2ssXG4gIG9uVG9nZ2xlLFxuICByaWdodEl0ZW1zLFxuICB2aXNpYmxlXG59KSA9PiAoXG4gIDxTaWRlYmFyLlB1c2hhYmxlIGFzPXtTZWdtZW50fT5cbiAgICA8U2lkZWJhclxuICAgICAgYXM9e01lbnV9XG4gICAgICBhbmltYXRpb249XCJwdXNoXCJcbiAgICAgIHdpZHRoPVwid2lkZVwiXG4gICAgICBpY29uPVwibGFiZWxlZFwiXG4gICAgICB2ZXJ0aWNhbFxuICAgICAgaW52ZXJ0ZWRcbiAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPERyb3Bkb3duIHBsYWNlaG9sZGVyPSdTZWxlY3QgQnJhbmQnIHNlYXJjaCBzZWxlY3Rpb24gb3B0aW9ucz17YnJhbmRPcHRpb25zfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7Xy5tYXAobGVmdEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICA8L1NpZGViYXI+XG4gICAgPFNpZGViYXIuUHVzaGVyXG4gICAgICBvbkNsaWNrPXtvblB1c2hlckNsaWNrfVxuICAgID5cbiAgICAgIDxNZW51IGZpeGVkPVwidG9wXCIgPlxuICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e29uVG9nZ2xlfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwic2lkZWJhclwiIC8+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgIDxJbWFnZSBzaXplPVwibWluaVwiIHNyYz1cImFzc2V0cy9pbWcvbG9nby10ZXN0Mi5wbmdcIiAvPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj1cInJpZ2h0XCI+XG4gICAgICAgICAgPE1lbnUuSXRlbT5Mb2dpbjwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51Lkl0ZW0+UmVnaXN0ZXI8L01lbnUuSXRlbT5cbiAgICAgICAgPC9NZW51Lk1lbnU+XG4gICAgICA8L01lbnU+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPFNlZ21lbnQgYmFzaWM+XG4gICAgICA8T2xkTWFpbiAvPlxuICAgIDwvU2VnbWVudD5cbiAgICA8L1NpZGViYXIuUHVzaGVyPlxuICA8L1NpZGViYXIuUHVzaGFibGU+XG4pO1xuXG5jb25zdCBOYXZCYXJEZXNrdG9wID0gKHsgbGVmdEl0ZW1zLCByaWdodEl0ZW1zIH0pID0+IChcbiAgPE1lbnUgZml4ZWQ9XCJ0b3BcIiA+XG4gICAgPE1lbnUuSXRlbT5cbiAgICAgIDxJbWFnZSBzaXplPVwibWluaVwiIHNyYz1cImFzc2V0cy9pbWcvbG9nby10ZXN0Mi5wbmdcIiAvPlxuICAgIDwvTWVudS5JdGVtPlxuICAgIHtfLm1hcChsZWZ0SXRlbXMsIGl0ZW0gPT4gPE1lbnUuSXRlbSB7Li4uaXRlbX0gLz4pfVxuICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAge18ubWFwKHJpZ2h0SXRlbXMsIGl0ZW0gPT4gPE1lbnUuSXRlbSB7Li4uaXRlbX0gLz4pfVxuICAgIDwvTWVudS5NZW51PlxuICA8L01lbnU+XG4pO1xuXG5jb25zdCBOYXZCYXJDaGlsZHJlbiA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgICA8Q29udGFpbmVyIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1MnB4XCIgfX0+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxuKTtcblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9OyAgIFxuICAgIHRoaXMuaGFuZGxlUHVzaGVyID0gdGhpcy5oYW5kbGVQdXNoZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZSA9IHRoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVQdXNoZXIoKSB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh2aXNpYmxlKSB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSk7XG4gIH07XG5cbiAgaGFuZGxlVG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiAhdGhpcy5zdGF0ZS52aXNpYmxlIH0pXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGxlZnRJdGVtcywgcmlnaHRJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UmVzcG9uc2l2ZT5cbiAgICAgICAgICA8TmF2QmFyTW9iaWxlXG4gICAgICAgICAgICBsZWZ0SXRlbXM9e2xlZnRJdGVtc31cbiAgICAgICAgICAgIG9uUHVzaGVyQ2xpY2s9e3RoaXMuaGFuZGxlUHVzaGVyfVxuICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgICAgcmlnaHRJdGVtcz17cmlnaHRJdGVtc31cbiAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE5hdkJhckNoaWxkcmVuPntjaGlsZHJlbn08L05hdkJhckNoaWxkcmVuPlxuICAgICAgICAgIDwvTmF2QmFyTW9iaWxlPlxuICAgICAgICA8L1Jlc3BvbnNpdmU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcblxuXG4vLyA8ZGl2PlxuLy8gICA8UmVzcG9uc2l2ZSB7Li4uUmVzcG9uc2l2ZS5vbmx5TW9iaWxlfT5cbi8vICAgICA8TmF2QmFyTW9iaWxlXG4vLyAgICAgICBsZWZ0SXRlbXM9e2xlZnRJdGVtc31cbi8vICAgICAgIG9uUHVzaGVyQ2xpY2s9e3RoaXMuaGFuZGxlUHVzaGVyfVxuLy8gICAgICAgb25Ub2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuLy8gICAgICAgcmlnaHRJdGVtcz17cmlnaHRJdGVtc31cbi8vICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4vLyAgICAgPlxuLy8gICAgICAgPE5hdkJhckNoaWxkcmVuPntjaGlsZHJlbn08L05hdkJhckNoaWxkcmVuPlxuLy8gICAgIDwvTmF2QmFyTW9iaWxlPlxuLy8gICA8L1Jlc3BvbnNpdmU+XG4vLyAgIDxSZXNwb25zaXZlIG1pbldpZHRoPXtSZXNwb25zaXZlLm9ubHlUYWJsZXQubWluV2lkdGh9PlxuLy8gICAgIDxOYXZCYXJEZXNrdG9wIGxlZnRJdGVtcz17bGVmdEl0ZW1zfSByaWdodEl0ZW1zPXtyaWdodEl0ZW1zfSAvPlxuLy8gICAgIDxOYXZCYXJDaGlsZHJlbj57Y2hpbGRyZW59PC9OYXZCYXJDaGlsZHJlbj5cbi8vICAgPC9SZXNwb25zaXZlPlxuLy8gPC9kaXY+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFaQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFQQTtBQVlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWhCQTtBQWZBO0FBUkE7QUFDQTtBQTZDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFMQTtBQURBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFOQTtBQU9BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQURBO0FBREE7QUFjQTs7OztBQXhDQTtBQUNBO0FBMENBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/components/NavBar.jsx\n");

/***/ })

})