webpackHotUpdate("main",{

/***/ "./public/src/components/NavBar.jsx":
/*!******************************************!*\
  !*** ./public/src/components/NavBar.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// const leftItems = [\n//   { as: \"a\", content: \"Home\", key: \"home\" },\n//   { as: \"a\", content: \"Users\", key: \"users\" }\n// ];\n// const rightItems = [\n//   { as: \"a\", content: \"Login\", key: \"login\" },\n//   { as: \"a\", content: \"Register\", key: \"register\" }\n// ];\n\n// const NavBarMobile = ({\n//   children,\n//   leftItems,\n//   onPusherClick,\n//   onToggle,\n//   rightItems,\n//   visible\n// }) => (\n//   <Sidebar.Pushable>\n//     <Sidebar\n//       as={Menu}\n//       animation=\"overlay\"\n//       icon=\"labeled\"\n//       inverted\n//       items={leftItems}\n//       vertical\n//       visible={visible}\n//     />\n//     <Sidebar.Pusher\n//       dimmed={visible}\n//       onClick={onPusherClick}\n//       style={{ minHeight: \"100vh\" }}\n//     >\n//       <Menu fixed=\"top\" inverted>\n//         <Menu.Item>\n//           <Image size=\"mini\" src=\"https://react.semantic-ui.com/logo.png\" />\n//         </Menu.Item>\n//         <Menu.Item onClick={onToggle}>\n//           <Icon name=\"sidebar\" />\n//         </Menu.Item>\n//         <Menu.Menu position=\"right\">\n//           {_.map(rightItems, item => <Menu.Item {...item} />)}\n//         </Menu.Menu>\n//       </Menu>\n//       {children}\n//     </Sidebar.Pusher>\n//   </Sidebar.Pushable>\n// );\n\nvar NavBarDesktop = function NavBarDesktop(_ref) {\n  var leftItems = _ref.leftItems,\n      rightItems = _ref.rightItems;\n  return _react2.default.createElement(\n    _semanticUiReact.Menu,\n    { fixed: 'top', inverted: true },\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Item,\n      null,\n      _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'https://react.semantic-ui.com/logo.png' })\n    ),\n    _lodash2.default.map(leftItems, function (item) {\n      return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n    }),\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Menu,\n      { position: 'right' },\n      _lodash2.default.map(rightItems, function (item) {\n        return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n      })\n    )\n  );\n};\n\nvar NavBarChildren = function NavBarChildren(_ref2) {\n  var children = _ref2.children;\n  return _react2.default.createElement(\n    _semanticUiReact.Container,\n    { style: { marginTop: \"5em\" } },\n    children\n  );\n};\n\nvar NavBar = function (_React$Component) {\n  _inherits(NavBar, _React$Component);\n\n  function NavBar(props) {\n    _classCallCheck(this, NavBar);\n\n    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));\n\n    _this.state = {\n      visible: false\n    };\n    _this.handlePusher = _this.handlePusher.bind(_this);\n    _this.handleToggle = _this.handleToggle.bind(_this);\n    return _this;\n  }\n\n  _createClass(NavBar, [{\n    key: 'handlePusher',\n    value: function handlePusher() {\n      var visible = this.state.visible;\n\n      if (visible) this.setState({ visible: false });\n    }\n  }, {\n    key: 'handleToggle',\n    value: function handleToggle() {\n      this.setState({ visible: !this.state.visible });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          leftItems = _props.leftItems,\n          rightItems = _props.rightItems;\n      var visible = this.state.visible;\n\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_semanticUiReact.Responsive, _semanticUiReact.Responsive.onlyMobile),\n        _react2.default.createElement(_semanticUiReact.Responsive, { minWidth: _semanticUiReact.Responsive.onlyTablet.minWidth })\n      );\n    }\n  }]);\n\n  return NavBar;\n}(_react2.default.Component);\n\nexports.default = NavBar;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeD85YzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIEljb24sXG4gIEltYWdlLFxuICBNZW51LFxuICBTaWRlYmFyLFxuICBSZXNwb25zaXZlXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG4vLyBjb25zdCBsZWZ0SXRlbXMgPSBbXG4vLyAgIHsgYXM6IFwiYVwiLCBjb250ZW50OiBcIkhvbWVcIiwga2V5OiBcImhvbWVcIiB9LFxuLy8gICB7IGFzOiBcImFcIiwgY29udGVudDogXCJVc2Vyc1wiLCBrZXk6IFwidXNlcnNcIiB9XG4vLyBdO1xuLy8gY29uc3QgcmlnaHRJdGVtcyA9IFtcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiTG9naW5cIiwga2V5OiBcImxvZ2luXCIgfSxcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiUmVnaXN0ZXJcIiwga2V5OiBcInJlZ2lzdGVyXCIgfVxuLy8gXTtcblxuLy8gY29uc3QgTmF2QmFyTW9iaWxlID0gKHtcbi8vICAgY2hpbGRyZW4sXG4vLyAgIGxlZnRJdGVtcyxcbi8vICAgb25QdXNoZXJDbGljayxcbi8vICAgb25Ub2dnbGUsXG4vLyAgIHJpZ2h0SXRlbXMsXG4vLyAgIHZpc2libGVcbi8vIH0pID0+IChcbi8vICAgPFNpZGViYXIuUHVzaGFibGU+XG4vLyAgICAgPFNpZGViYXJcbi8vICAgICAgIGFzPXtNZW51fVxuLy8gICAgICAgYW5pbWF0aW9uPVwib3ZlcmxheVwiXG4vLyAgICAgICBpY29uPVwibGFiZWxlZFwiXG4vLyAgICAgICBpbnZlcnRlZFxuLy8gICAgICAgaXRlbXM9e2xlZnRJdGVtc31cbi8vICAgICAgIHZlcnRpY2FsXG4vLyAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuLy8gICAgIC8+XG4vLyAgICAgPFNpZGViYXIuUHVzaGVyXG4vLyAgICAgICBkaW1tZWQ9e3Zpc2libGV9XG4vLyAgICAgICBvbkNsaWNrPXtvblB1c2hlckNsaWNrfVxuLy8gICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX1cbi8vICAgICA+XG4vLyAgICAgICA8TWVudSBmaXhlZD1cInRvcFwiIGludmVydGVkPlxuLy8gICAgICAgICA8TWVudS5JdGVtPlxuLy8gICAgICAgICAgIDxJbWFnZSBzaXplPVwibWluaVwiIHNyYz1cImh0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2xvZ28ucG5nXCIgLz5cbi8vICAgICAgICAgPC9NZW51Lkl0ZW0+XG4vLyAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17b25Ub2dnbGV9PlxuLy8gICAgICAgICAgIDxJY29uIG5hbWU9XCJzaWRlYmFyXCIgLz5cbi8vICAgICAgICAgPC9NZW51Lkl0ZW0+XG4vLyAgICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxuLy8gICAgICAgICAgIHtfLm1hcChyaWdodEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbi8vICAgICAgICAgPC9NZW51Lk1lbnU+XG4vLyAgICAgICA8L01lbnU+XG4vLyAgICAgICB7Y2hpbGRyZW59XG4vLyAgICAgPC9TaWRlYmFyLlB1c2hlcj5cbi8vICAgPC9TaWRlYmFyLlB1c2hhYmxlPlxuLy8gKTtcblxuY29uc3QgTmF2QmFyRGVza3RvcCA9ICh7IGxlZnRJdGVtcywgcmlnaHRJdGVtcyB9KSA9PiAoXG4gIDxNZW51IGZpeGVkPVwidG9wXCIgaW52ZXJ0ZWQ+XG4gICAgPE1lbnUuSXRlbT5cbiAgICAgIDxJbWFnZSBzaXplPVwibWluaVwiIHNyYz1cImh0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2xvZ28ucG5nXCIgLz5cbiAgICA8L01lbnUuSXRlbT5cbiAgICB7Xy5tYXAobGVmdEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgIHtfLm1hcChyaWdodEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICA8L01lbnUuTWVudT5cbiAgPC9NZW51PlxuKTtcblxuY29uc3QgTmF2QmFyQ2hpbGRyZW4gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVlbVwiIH19PntjaGlsZHJlbn08L0NvbnRhaW5lcj5cbik7XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfTsgICBcbiAgICB0aGlzLmhhbmRsZVB1c2hlciA9IHRoaXMuaGFuZGxlUHVzaGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGUgPSB0aGlzLmhhbmRsZVRvZ2dsZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlUHVzaGVyKCkge1xuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodmlzaWJsZSkgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogIXRoaXMuc3RhdGUudmlzaWJsZSB9KVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBsZWZ0SXRlbXMsIHJpZ2h0SXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxSZXNwb25zaXZlIHsuLi5SZXNwb25zaXZlLm9ubHlNb2JpbGV9PlxuICAgICAgICAgIHsgLyo8TmF2QmFyTW9iaWxlXG4gICAgICAgICAgICBsZWZ0SXRlbXM9e2xlZnRJdGVtc31cbiAgICAgICAgICAgIG9uUHVzaGVyQ2xpY2s9e3RoaXMuaGFuZGxlUHVzaGVyfVxuICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgICAgcmlnaHRJdGVtcz17cmlnaHRJdGVtc31cbiAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgICAgPiBcbiAgICAgICAgICAgIDxOYXZCYXJDaGlsZHJlbj57Y2hpbGRyZW59PC9OYXZCYXJDaGlsZHJlbj5cbiAgICAgICAgICA8L05hdkJhck1vYmlsZT5cbiAgICAgICAgICAqKi8gfVxuICAgICAgICA8L1Jlc3BvbnNpdmU+XG4gICAgICAgIDxSZXNwb25zaXZlIG1pbldpZHRoPXtSZXNwb25zaXZlLm9ubHlUYWJsZXQubWluV2lkdGh9PlxuICAgICAgICAgIHsgLyo8TmF2QmFyRGVza3RvcCBsZWZ0SXRlbXM9e2xlZnRJdGVtc30gcmlnaHRJdGVtcz17cmlnaHRJdGVtc30gLz5cbiAgICAgICAgICA8TmF2QmFyQ2hpbGRyZW4+e2NoaWxkcmVufTwvTmF2QmFyQ2hpbGRyZW4+ICoqLyB9XG4gICAgICAgIDwvUmVzcG9uc2l2ZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFMQTtBQURBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFOQTtBQU9BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBWUE7QUFiQTtBQW1CQTs7OztBQTVDQTtBQUNBO0FBOENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/components/NavBar.jsx\n");

/***/ })

})