webpackHotUpdate("main",{

/***/ "./public/src/components/NavBar.jsx":
/*!******************************************!*\
  !*** ./public/src/components/NavBar.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\n__webpack_require__(/*! ../../assets/css/NavBar.css */ \"./public/assets/css/NavBar.css\");\n\nvar _OldMain = __webpack_require__(/*! ../containers/OldMain */ \"./public/src/containers/OldMain.jsx\");\n\nvar _OldMain2 = _interopRequireDefault(_OldMain);\n\nvar _SignIn = __webpack_require__(/*! ./SignIn */ \"./public/src/components/SignIn.jsx\");\n\nvar _SignIn2 = _interopRequireDefault(_SignIn);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// const leftItems = [\n//   { as: \"a\", content: \"Home\", key: \"home\" },\n//   { as: \"a\", content: \"Users\", key: \"users\" }\n// ];\n// const rightItems = [\n//   { as: \"a\", content: \"Login\", key: \"login\" },\n//   { as: \"a\", content: \"Register\", key: \"register\" }\n// ];\n\nvar NavBarMobile = function NavBarMobile(_ref) {\n  var children = _ref.children,\n      leftItems = _ref.leftItems,\n      onPusherClick = _ref.onPusherClick,\n      onToggle = _ref.onToggle,\n      rightItems = _ref.rightItems,\n      visible = _ref.visible;\n  return _react2.default.createElement(\n    _semanticUiReact.Sidebar.Pushable,\n    { as: _semanticUiReact.Segment },\n    _react2.default.createElement(_semanticUiReact.Sidebar, {\n      as: _semanticUiReact.Menu,\n      animation: 'push',\n      width: 'thin',\n      icon: 'labeled',\n      items: leftItems,\n      vertical: true,\n      visible: visible\n    }),\n    _react2.default.createElement(\n      _semanticUiReact.Sidebar.Pusher,\n      {\n        onClick: onPusherClick\n      },\n      _react2.default.createElement(\n        _semanticUiReact.Menu,\n        { fixed: 'top' },\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          { onClick: onToggle },\n          _react2.default.createElement(_semanticUiReact.Icon, { name: 'sidebar' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          null,\n          _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Menu,\n          { position: 'right' },\n          _react2.default.createElement(\n            _semanticUiReact.Menu.Item,\n            { onClick: undefined.show(LoginForm) },\n            'Login'\n          ),\n          _react2.default.createElement(\n            _semanticUiReact.Menu.Item,\n            null,\n            'Register'\n          )\n        )\n      ),\n      children,\n      _react2.default.createElement(\n        _semanticUiReact.Segment,\n        { basic: true },\n        _react2.default.createElement(_OldMain2.default, null)\n      )\n    )\n  );\n};\n\nvar LoginForm = function LoginForm() {\n  return _react2.default.createElement(\n    _semanticUiReact.Modal,\n    { size: size, open: open, onClose: undefined.close },\n    _react2.default.createElement(\n      _semanticUiReact.Modal.Header,\n      null,\n      'Login'\n    ),\n    _react2.default.createElement(\n      _semanticUiReact.Modal.Content,\n      { image: true },\n      _react2.default.createElement(\n        'div',\n        { className: 'login-form' },\n        _react2.default.createElement(\n          'style',\n          null,\n          '\\n          body > div,\\n          body > div > div,\\n          body > div > div > div.login-form {\\n            height: 100%;\\n          }\\n        '\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Modal.Description,\n          null,\n          _react2.default.createElement(\n            Grid,\n            {\n              textAlign: 'center',\n              style: { height: '100%' },\n              verticalAlign: 'middle'\n            },\n            _react2.default.createElement(\n              Grid.Column,\n              { style: { maxWidth: 450 } },\n              _react2.default.createElement(\n                _semanticUiReact.Header,\n                { as: 'h2', color: 'teal', textAlign: 'center' },\n                ' ',\n                'Log-in to your account'\n              ),\n              _react2.default.createElement(\n                Form,\n                { size: 'large' },\n                _react2.default.createElement(\n                  _semanticUiReact.Segment,\n                  { stacked: true },\n                  _react2.default.createElement(Form.Input, {\n                    fluid: true,\n                    icon: 'user',\n                    iconPosition: 'left',\n                    placeholder: 'E-mail address'\n                  }),\n                  _react2.default.createElement(Form.Input, {\n                    fluid: true,\n                    icon: 'lock',\n                    iconPosition: 'left',\n                    placeholder: 'Password',\n                    type: 'password'\n                  }),\n                  _react2.default.createElement(\n                    _semanticUiReact.Button,\n                    { color: 'teal', fluid: true, size: 'large' },\n                    'Login'\n                  )\n                )\n              ),\n              _react2.default.createElement(\n                Message,\n                null,\n                'New to us? ',\n                _react2.default.createElement(\n                  'a',\n                  { href: '#' },\n                  'Sign Up'\n                )\n              )\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nvar NavBarDesktop = function NavBarDesktop(_ref2) {\n  var leftItems = _ref2.leftItems,\n      rightItems = _ref2.rightItems;\n  return _react2.default.createElement(\n    _semanticUiReact.Menu,\n    { fixed: 'top' },\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Item,\n      null,\n      _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n    ),\n    _lodash2.default.map(leftItems, function (item) {\n      return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n    }),\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Menu,\n      { position: 'right' },\n      _lodash2.default.map(rightItems, function (item) {\n        return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n      })\n    )\n  );\n};\n\nvar NavBarChildren = function NavBarChildren(_ref3) {\n  var children = _ref3.children;\n  return _react2.default.createElement(\n    _semanticUiReact.Container,\n    { style: { marginTop: \"52px\" } },\n    children\n  );\n};\n\nvar NavBar = function (_React$Component) {\n  _inherits(NavBar, _React$Component);\n\n  function NavBar(props) {\n    _classCallCheck(this, NavBar);\n\n    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));\n\n    _this.state = {\n      visible: false\n    };\n    _this.handlePusher = _this.handlePusher.bind(_this);\n    _this.handleToggle = _this.handleToggle.bind(_this);\n    return _this;\n  }\n\n  _createClass(NavBar, [{\n    key: 'handlePusher',\n    value: function handlePusher() {\n      var visible = this.state.visible;\n\n      if (visible) this.setState({ visible: false });\n    }\n  }, {\n    key: 'handleToggle',\n    value: function handleToggle() {\n      this.setState({ visible: !this.state.visible });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          leftItems = _props.leftItems,\n          rightItems = _props.rightItems;\n      var visible = this.state.visible;\n      // console.log(this.props)\n\n      var _state = this.state,\n          open = _state.open,\n          size = _state.size;\n\n      state = { open: false };\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _semanticUiReact.Responsive,\n          null,\n          _react2.default.createElement(\n            NavBarMobile,\n            {\n              leftItems: leftItems,\n              onPusherClick: this.handlePusher,\n              onToggle: this.handleToggle,\n              rightItems: rightItems,\n              visible: visible\n            },\n            _react2.default.createElement(\n              NavBarChildren,\n              null,\n              children\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NavBar;\n}(_react2.default.Component);\n\nexports.default = NavBar;\n\n// <div>\n//   <Responsive {...Responsive.onlyMobile}>\n//     <NavBarMobile\n//       leftItems={leftItems}\n//       onPusherClick={this.handlePusher}\n//       onToggle={this.handleToggle}\n//       rightItems={rightItems}\n//       visible={visible}\n//     >\n//       <NavBarChildren>{children}</NavBarChildren>\n//     </NavBarMobile>\n//   </Responsive>\n//   <Responsive minWidth={Responsive.onlyTablet.minWidth}>\n//     <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />\n//     <NavBarChildren>{children}</NavBarChildren>\n//   </Responsive>\n// </div>//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeD85YzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9OYXZCYXIuY3NzJztcbmltcG9ydCBPbGRNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvT2xkTWFpbic7XG5pbXBvcnQgU2lnbkluIGZyb20gJy4vU2lnbkluJztcblxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBJY29uLFxuICBJbWFnZSxcbiAgTWVudSxcbiAgU2lkZWJhcixcbiAgU2VnbWVudCxcbiAgQnV0dG9uLFxuICBIZWFkZXIsXG4gIE1vZGFsLFxuICBSZXNwb25zaXZlXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG4vLyBjb25zdCBsZWZ0SXRlbXMgPSBbXG4vLyAgIHsgYXM6IFwiYVwiLCBjb250ZW50OiBcIkhvbWVcIiwga2V5OiBcImhvbWVcIiB9LFxuLy8gICB7IGFzOiBcImFcIiwgY29udGVudDogXCJVc2Vyc1wiLCBrZXk6IFwidXNlcnNcIiB9XG4vLyBdO1xuLy8gY29uc3QgcmlnaHRJdGVtcyA9IFtcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiTG9naW5cIiwga2V5OiBcImxvZ2luXCIgfSxcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiUmVnaXN0ZXJcIiwga2V5OiBcInJlZ2lzdGVyXCIgfVxuLy8gXTtcblxuY29uc3QgTmF2QmFyTW9iaWxlID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxlZnRJdGVtcyxcbiAgb25QdXNoZXJDbGljayxcbiAgb25Ub2dnbGUsXG4gIHJpZ2h0SXRlbXMsXG4gIHZpc2libGVcbn0pID0+IChcbiAgPFNpZGViYXIuUHVzaGFibGUgYXM9e1NlZ21lbnR9PlxuICAgIDxTaWRlYmFyXG4gICAgICBhcz17TWVudX1cbiAgICAgIGFuaW1hdGlvbj1cInB1c2hcIlxuICAgICAgd2lkdGg9XCJ0aGluXCJcbiAgICAgIGljb249XCJsYWJlbGVkXCJcbiAgICAgIGl0ZW1zPXtsZWZ0SXRlbXN9XG4gICAgICB2ZXJ0aWNhbFxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAvPlxuICAgIDxTaWRlYmFyLlB1c2hlclxuICAgICAgb25DbGljaz17b25QdXNoZXJDbGlja31cbiAgICA+XG4gICAgICA8TWVudSBmaXhlZD1cInRvcFwiID5cbiAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXtvblRvZ2dsZX0+XG4gICAgICAgICAgPEljb24gbmFtZT1cInNpZGViYXJcIiAvPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICA8SW1hZ2Ugc2l6ZT1cIm1pbmlcIiBzcmM9XCJhc3NldHMvaW1nL2xvZ28tdGVzdDIucG5nXCIgLz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17IHRoaXMuc2hvdyhMb2dpbkZvcm0pIH0+TG9naW48L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtPlJlZ2lzdGVyPC9NZW51Lkl0ZW0+XG4gICAgICAgIDwvTWVudS5NZW51PlxuICAgICAgPC9NZW51PlxuICAgICAge2NoaWxkcmVufVxuICAgIDxTZWdtZW50IGJhc2ljPlxuICAgICAgPE9sZE1haW4gLz5cbiAgICA8L1NlZ21lbnQ+XG4gICAgPC9TaWRlYmFyLlB1c2hlcj5cblxuICA8L1NpZGViYXIuUHVzaGFibGU+XG4pO1xuXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiAoXG4gIDxNb2RhbCBzaXplPXtzaXplfSBvcGVuPXtvcGVufSBvbkNsb3NlPXt0aGlzLmNsb3NlfT5cbiAgICA8TW9kYWwuSGVhZGVyPkxvZ2luPC9Nb2RhbC5IZWFkZXI+XG4gICAgPE1vZGFsLkNvbnRlbnQgaW1hZ2U+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4tZm9ybSc+XG4gICAgICAgIHsvKlxuICAgICAgICAgIEhlYWRzIHVwISBUaGUgc3R5bGVzIGJlbG93IGFyZSBuZWNlc3NhcnkgZm9yIHRoZSBjb3JyZWN0IHJlbmRlciBvZiB0aGlzIGV4YW1wbGUuXG4gICAgICAgICAgWW91IGNhbiBkbyBzYW1lIHdpdGggQ1NTLCB0aGUgbWFpbiBpZGVhIGlzIHRoYXQgYWxsIHRoZSBlbGVtZW50cyB1cCB0byB0aGUgYEdyaWRgXG4gICAgICAgICAgYmVsb3cgbXVzdCBoYXZlIGEgaGVpZ2h0IG9mIDEwMCUuXG4gICAgICAgICovfVxuICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICBib2R5ID4gZGl2LFxuICAgICAgICAgIGJvZHkgPiBkaXYgPiBkaXYsXG4gICAgICAgICAgYm9keSA+IGRpdiA+IGRpdiA+IGRpdi5sb2dpbi1mb3JtIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPE1vZGFsLkRlc2NyaXB0aW9uPlxuICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19XG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IG1heFdpZHRoOiA0NTAgfX0+XG4gICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gyJyBjb2xvcj0ndGVhbCcgdGV4dEFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgIHsnICd9TG9nLWluIHRvIHlvdXIgYWNjb3VudFxuICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgPEZvcm0gc2l6ZT0nbGFyZ2UnPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHN0YWNrZWQ+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICBpY29uPSd1c2VyJ1xuICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFLW1haWwgYWRkcmVzcydcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICBpY29uPSdsb2NrJ1xuICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSd0ZWFsJyBmbHVpZCBzaXplPSdsYXJnZSc+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgPE1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgTmV3IHRvIHVzPyA8YSBocmVmPScjJz5TaWduIFVwPC9hPlxuICAgICAgICAgICAgICA8L01lc3NhZ2U+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Nb2RhbC5EZXNjcmlwdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWwuQ29udGVudD5cbiAgPC9Nb2RhbD5cbilcblxuY29uc3QgTmF2QmFyRGVza3RvcCA9ICh7IGxlZnRJdGVtcywgcmlnaHRJdGVtcyB9KSA9PiAoXG4gIDxNZW51IGZpeGVkPVwidG9wXCIgPlxuICAgIDxNZW51Lkl0ZW0+XG4gICAgICA8SW1hZ2Ugc2l6ZT1cIm1pbmlcIiBzcmM9XCJhc3NldHMvaW1nL2xvZ28tdGVzdDIucG5nXCIgLz5cbiAgICA8L01lbnUuSXRlbT5cbiAgICB7Xy5tYXAobGVmdEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgIHtfLm1hcChyaWdodEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICA8L01lbnUuTWVudT5cbiAgPC9NZW51PlxuKTtcblxuY29uc3QgTmF2QmFyQ2hpbGRyZW4gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjUycHhcIiB9fT57Y2hpbGRyZW59PC9Db250YWluZXI+XG4pO1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH07ICAgXG4gICAgdGhpcy5oYW5kbGVQdXNoZXIgPSB0aGlzLmhhbmRsZVB1c2hlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlID0gdGhpcy5oYW5kbGVUb2dnbGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVB1c2hlcigpIHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHZpc2libGUpIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgfTtcblxuICBoYW5kbGVUb2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6ICF0aGlzLnN0YXRlLnZpc2libGUgfSlcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgbGVmdEl0ZW1zLCByaWdodEl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuXG4gICAgY29uc3QgeyBvcGVuLCBzaXplIH0gPSB0aGlzLnN0YXRlO1xuICAgIHN0YXRlID0geyBvcGVuOiBmYWxzZSB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFJlc3BvbnNpdmU+XG4gICAgICAgICAgPE5hdkJhck1vYmlsZVxuICAgICAgICAgICAgbGVmdEl0ZW1zPXtsZWZ0SXRlbXN9XG4gICAgICAgICAgICBvblB1c2hlckNsaWNrPXt0aGlzLmhhbmRsZVB1c2hlcn1cbiAgICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICAgIHJpZ2h0SXRlbXM9e3JpZ2h0SXRlbXN9XG4gICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOYXZCYXJDaGlsZHJlbj57Y2hpbGRyZW59PC9OYXZCYXJDaGlsZHJlbj5cbiAgICAgICAgICA8L05hdkJhck1vYmlsZT5cbiAgICAgICAgPC9SZXNwb25zaXZlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG5cblxuLy8gPGRpdj5cbi8vICAgPFJlc3BvbnNpdmUgey4uLlJlc3BvbnNpdmUub25seU1vYmlsZX0+XG4vLyAgICAgPE5hdkJhck1vYmlsZVxuLy8gICAgICAgbGVmdEl0ZW1zPXtsZWZ0SXRlbXN9XG4vLyAgICAgICBvblB1c2hlckNsaWNrPXt0aGlzLmhhbmRsZVB1c2hlcn1cbi8vICAgICAgIG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbi8vICAgICAgIHJpZ2h0SXRlbXM9e3JpZ2h0SXRlbXN9XG4vLyAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuLy8gICAgID5cbi8vICAgICAgIDxOYXZCYXJDaGlsZHJlbj57Y2hpbGRyZW59PC9OYXZCYXJDaGlsZHJlbj5cbi8vICAgICA8L05hdkJhck1vYmlsZT5cbi8vICAgPC9SZXNwb25zaXZlPlxuLy8gICA8UmVzcG9uc2l2ZSBtaW5XaWR0aD17UmVzcG9uc2l2ZS5vbmx5VGFibGV0Lm1pbldpZHRofT5cbi8vICAgICA8TmF2QmFyRGVza3RvcCBsZWZ0SXRlbXM9e2xlZnRJdGVtc30gcmlnaHRJdGVtcz17cmlnaHRJdGVtc30gLz5cbi8vICAgICA8TmF2QmFyQ2hpbGRyZW4+e2NoaWxkcmVufTwvTmF2QmFyQ2hpbGRyZW4+XG4vLyAgIDwvUmVzcG9uc2l2ZT5cbi8vIDwvZGl2PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBUEE7QUFZQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFoQkE7QUFWQTtBQVJBO0FBQ0E7QUF5Q0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkE7QUFEQTtBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQXZCQTtBQUxBO0FBREE7QUFiQTtBQURBO0FBRkE7QUFEQTtBQUNBO0FBd0RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBREE7QUFDQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQU5BO0FBT0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFEQTtBQWNBOzs7O0FBM0NBO0FBQ0E7QUE2Q0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/src/components/NavBar.jsx\n");

/***/ })

})