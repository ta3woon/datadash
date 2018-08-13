webpackHotUpdate("main",{

/***/ "./public/src/components/NavBar.jsx":
/*!******************************************!*\
  !*** ./public/src/components/NavBar.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\n__webpack_require__(/*! ../../assets/css/NavBar.css */ \"./public/assets/css/NavBar.css\");\n\nvar _OldMain = __webpack_require__(/*! ../containers/OldMain */ \"./public/src/containers/OldMain.jsx\");\n\nvar _OldMain2 = _interopRequireDefault(_OldMain);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import SignIn from './SignIn';\n\n\n// const leftItems = [\n//   { as: \"a\", content: \"Home\", key: \"home\" },\n//   { as: \"a\", content: \"Users\", key: \"users\" }\n// ];\n// const rightItems = [\n//   { as: \"a\", content: \"Login\", key: \"login\" },\n//   { as: \"a\", content: \"Register\", key: \"register\" }\n// ];\n\nvar NavBarMobile = function NavBarMobile(_ref) {\n  var children = _ref.children,\n      leftItems = _ref.leftItems,\n      onPusherClick = _ref.onPusherClick,\n      onToggle = _ref.onToggle,\n      rightItems = _ref.rightItems,\n      visible = _ref.visible;\n  return _react2.default.createElement(\n    _semanticUiReact.Sidebar.Pushable,\n    { as: _semanticUiReact.Segment },\n    _react2.default.createElement(\n      _semanticUiReact.Sidebar,\n      {\n        as: _semanticUiReact.Menu,\n        animation: 'push',\n        width: 'wide',\n        icon: 'labeled',\n        vertical: true,\n        inverted: true,\n        visible: visible\n      },\n      'heloo',\n      _lodash2.default.map(leftItems, function (item) {\n        return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n      })\n    ),\n    _react2.default.createElement(\n      _semanticUiReact.Sidebar.Pusher,\n      {\n        onClick: onPusherClick\n      },\n      _react2.default.createElement(\n        _semanticUiReact.Menu,\n        { fixed: 'top' },\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          { onClick: onToggle },\n          _react2.default.createElement(_semanticUiReact.Icon, { name: 'sidebar' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          null,\n          _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Menu,\n          { position: 'right' },\n          _react2.default.createElement(\n            _semanticUiReact.Menu.Item,\n            null,\n            'Login'\n          ),\n          _react2.default.createElement(\n            _semanticUiReact.Menu.Item,\n            null,\n            'Register'\n          )\n        )\n      ),\n      children,\n      _react2.default.createElement(\n        _semanticUiReact.Segment,\n        { basic: true },\n        _react2.default.createElement(_OldMain2.default, null)\n      )\n    )\n  );\n};\n\nvar NavBarDesktop = function NavBarDesktop(_ref2) {\n  var leftItems = _ref2.leftItems,\n      rightItems = _ref2.rightItems;\n  return _react2.default.createElement(\n    _semanticUiReact.Menu,\n    { fixed: 'top' },\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Item,\n      null,\n      _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n    ),\n    _lodash2.default.map(leftItems, function (item) {\n      return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n    }),\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Menu,\n      { position: 'right' },\n      _lodash2.default.map(rightItems, function (item) {\n        return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n      })\n    )\n  );\n};\n\nvar NavBarChildren = function NavBarChildren(_ref3) {\n  var children = _ref3.children;\n  return _react2.default.createElement(\n    _semanticUiReact.Container,\n    { style: { marginTop: \"52px\" } },\n    children\n  );\n};\n\nvar NavBar = function (_React$Component) {\n  _inherits(NavBar, _React$Component);\n\n  function NavBar(props) {\n    _classCallCheck(this, NavBar);\n\n    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));\n\n    _this.state = {\n      visible: false\n    };\n    _this.handlePusher = _this.handlePusher.bind(_this);\n    _this.handleToggle = _this.handleToggle.bind(_this);\n    return _this;\n  }\n\n  _createClass(NavBar, [{\n    key: 'handlePusher',\n    value: function handlePusher() {\n      var visible = this.state.visible;\n\n      if (visible) this.setState({ visible: false });\n    }\n  }, {\n    key: 'handleToggle',\n    value: function handleToggle() {\n      this.setState({ visible: !this.state.visible });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          leftItems = _props.leftItems,\n          rightItems = _props.rightItems;\n      var visible = this.state.visible;\n      // console.log(this.props)\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _semanticUiReact.Responsive,\n          null,\n          _react2.default.createElement(\n            NavBarMobile,\n            {\n              leftItems: leftItems,\n              onPusherClick: this.handlePusher,\n              onToggle: this.handleToggle,\n              rightItems: rightItems,\n              visible: visible\n            },\n            _react2.default.createElement(\n              NavBarChildren,\n              null,\n              children\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NavBar;\n}(_react2.default.Component);\n\nexports.default = NavBar;\n\n// <div>\n//   <Responsive {...Responsive.onlyMobile}>\n//     <NavBarMobile\n//       leftItems={leftItems}\n//       onPusherClick={this.handlePusher}\n//       onToggle={this.handleToggle}\n//       rightItems={rightItems}\n//       visible={visible}\n//     >\n//       <NavBarChildren>{children}</NavBarChildren>\n//     </NavBarMobile>\n//   </Responsive>\n//   <Responsive minWidth={Responsive.onlyTablet.minWidth}>\n//     <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />\n//     <NavBarChildren>{children}</NavBarChildren>\n//   </Responsive>\n// </div>//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeD85YzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9OYXZCYXIuY3NzJztcbmltcG9ydCBPbGRNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvT2xkTWFpbic7XG4vLyBpbXBvcnQgU2lnbkluIGZyb20gJy4vU2lnbkluJztcblxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBJY29uLFxuICBJbWFnZSxcbiAgTWVudSxcbiAgU2lkZWJhcixcbiAgU2VnbWVudCxcbiAgQnV0dG9uLFxuICBIZWFkZXIsXG4gIFJlc3BvbnNpdmVcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbi8vIGNvbnN0IGxlZnRJdGVtcyA9IFtcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiSG9tZVwiLCBrZXk6IFwiaG9tZVwiIH0sXG4vLyAgIHsgYXM6IFwiYVwiLCBjb250ZW50OiBcIlVzZXJzXCIsIGtleTogXCJ1c2Vyc1wiIH1cbi8vIF07XG4vLyBjb25zdCByaWdodEl0ZW1zID0gW1xuLy8gICB7IGFzOiBcImFcIiwgY29udGVudDogXCJMb2dpblwiLCBrZXk6IFwibG9naW5cIiB9LFxuLy8gICB7IGFzOiBcImFcIiwgY29udGVudDogXCJSZWdpc3RlclwiLCBrZXk6IFwicmVnaXN0ZXJcIiB9XG4vLyBdO1xuXG5jb25zdCBOYXZCYXJNb2JpbGUgPSAoe1xuICBjaGlsZHJlbixcbiAgbGVmdEl0ZW1zLFxuICBvblB1c2hlckNsaWNrLFxuICBvblRvZ2dsZSxcbiAgcmlnaHRJdGVtcyxcbiAgdmlzaWJsZVxufSkgPT4gKFxuICA8U2lkZWJhci5QdXNoYWJsZSBhcz17U2VnbWVudH0+XG4gICAgPFNpZGViYXJcbiAgICAgIGFzPXtNZW51fVxuICAgICAgYW5pbWF0aW9uPVwicHVzaFwiXG4gICAgICB3aWR0aD1cIndpZGVcIlxuICAgICAgaWNvbj1cImxhYmVsZWRcIlxuICAgICAgdmVydGljYWxcbiAgICAgIGludmVydGVkXG4gICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgID5cbiAgICBoZWxvb1xuICAgIHtfLm1hcChsZWZ0SXRlbXMsIGl0ZW0gPT4gPE1lbnUuSXRlbSB7Li4uaXRlbX0gLz4pfVxuICAgIDwvU2lkZWJhcj5cbiAgICA8U2lkZWJhci5QdXNoZXJcbiAgICAgIG9uQ2xpY2s9e29uUHVzaGVyQ2xpY2t9XG4gICAgPlxuICAgICAgPE1lbnUgZml4ZWQ9XCJ0b3BcIiA+XG4gICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17b25Ub2dnbGV9PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJzaWRlYmFyXCIgLz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgPEltYWdlIHNpemU9XCJtaW5pXCIgc3JjPVwiYXNzZXRzL2ltZy9sb2dvLXRlc3QyLnBuZ1wiIC8+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgICA8TWVudS5JdGVtPkxvZ2luPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbT5SZWdpc3RlcjwvTWVudS5JdGVtPlxuICAgICAgICA8L01lbnUuTWVudT5cbiAgICAgIDwvTWVudT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8U2VnbWVudCBiYXNpYz5cbiAgICAgIDxPbGRNYWluIC8+XG4gICAgPC9TZWdtZW50PlxuICAgIDwvU2lkZWJhci5QdXNoZXI+XG4gIDwvU2lkZWJhci5QdXNoYWJsZT5cbik7XG5cbmNvbnN0IE5hdkJhckRlc2t0b3AgPSAoeyBsZWZ0SXRlbXMsIHJpZ2h0SXRlbXMgfSkgPT4gKFxuICA8TWVudSBmaXhlZD1cInRvcFwiID5cbiAgICA8TWVudS5JdGVtPlxuICAgICAgPEltYWdlIHNpemU9XCJtaW5pXCIgc3JjPVwiYXNzZXRzL2ltZy9sb2dvLXRlc3QyLnBuZ1wiIC8+XG4gICAgPC9NZW51Lkl0ZW0+XG4gICAge18ubWFwKGxlZnRJdGVtcywgaXRlbSA9PiA8TWVudS5JdGVtIHsuLi5pdGVtfSAvPil9XG4gICAgPE1lbnUuTWVudSBwb3NpdGlvbj1cInJpZ2h0XCI+XG4gICAgICB7Xy5tYXAocmlnaHRJdGVtcywgaXRlbSA9PiA8TWVudS5JdGVtIHsuLi5pdGVtfSAvPil9XG4gICAgPC9NZW51Lk1lbnU+XG4gIDwvTWVudT5cbik7XG5cbmNvbnN0IE5hdkJhckNoaWxkcmVuID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjUycHhcIiB9fT57Y2hpbGRyZW59PC9Db250YWluZXI+XG4pO1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH07ICAgXG4gICAgdGhpcy5oYW5kbGVQdXNoZXIgPSB0aGlzLmhhbmRsZVB1c2hlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlID0gdGhpcy5oYW5kbGVUb2dnbGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVB1c2hlcigpIHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHZpc2libGUpIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgfTtcblxuICBoYW5kbGVUb2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6ICF0aGlzLnN0YXRlLnZpc2libGUgfSlcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgbGVmdEl0ZW1zLCByaWdodEl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxSZXNwb25zaXZlPlxuICAgICAgICAgIDxOYXZCYXJNb2JpbGVcbiAgICAgICAgICAgIGxlZnRJdGVtcz17bGVmdEl0ZW1zfVxuICAgICAgICAgICAgb25QdXNoZXJDbGljaz17dGhpcy5oYW5kbGVQdXNoZXJ9XG4gICAgICAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgICByaWdodEl0ZW1zPXtyaWdodEl0ZW1zfVxuICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TmF2QmFyQ2hpbGRyZW4+e2NoaWxkcmVufTwvTmF2QmFyQ2hpbGRyZW4+XG4gICAgICAgICAgPC9OYXZCYXJNb2JpbGU+XG4gICAgICAgIDwvUmVzcG9uc2l2ZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuXG5cbi8vIDxkaXY+XG4vLyAgIDxSZXNwb25zaXZlIHsuLi5SZXNwb25zaXZlLm9ubHlNb2JpbGV9PlxuLy8gICAgIDxOYXZCYXJNb2JpbGVcbi8vICAgICAgIGxlZnRJdGVtcz17bGVmdEl0ZW1zfVxuLy8gICAgICAgb25QdXNoZXJDbGljaz17dGhpcy5oYW5kbGVQdXNoZXJ9XG4vLyAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4vLyAgICAgICByaWdodEl0ZW1zPXtyaWdodEl0ZW1zfVxuLy8gICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbi8vICAgICA+XG4vLyAgICAgICA8TmF2QmFyQ2hpbGRyZW4+e2NoaWxkcmVufTwvTmF2QmFyQ2hpbGRyZW4+XG4vLyAgICAgPC9OYXZCYXJNb2JpbGU+XG4vLyAgIDwvUmVzcG9uc2l2ZT5cbi8vICAgPFJlc3BvbnNpdmUgbWluV2lkdGg9e1Jlc3BvbnNpdmUub25seVRhYmxldC5taW5XaWR0aH0+XG4vLyAgICAgPE5hdkJhckRlc2t0b3AgbGVmdEl0ZW1zPXtsZWZ0SXRlbXN9IHJpZ2h0SXRlbXM9e3JpZ2h0SXRlbXN9IC8+XG4vLyAgICAgPE5hdkJhckNoaWxkcmVuPntjaGlsZHJlbn08L05hdkJhckNoaWxkcmVuPlxuLy8gICA8L1Jlc3BvbnNpdmU+XG4vLyA8L2Rpdj4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQU5BO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBVkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBUEE7QUFZQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFoQkE7QUFiQTtBQVJBO0FBQ0E7QUEyQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBTEE7QUFEQTtBQUNBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTkE7QUFPQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFEQTtBQURBO0FBY0E7Ozs7QUF4Q0E7QUFDQTtBQTBDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/components/NavBar.jsx\n");

/***/ })

})