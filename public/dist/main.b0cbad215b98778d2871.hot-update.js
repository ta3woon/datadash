webpackHotUpdate("main",{

/***/ "./public/src/components/NavBar.jsx":
/*!******************************************!*\
  !*** ./public/src/components/NavBar.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// const leftItems = [\n//   { as: \"a\", content: \"Home\", key: \"home\" },\n//   { as: \"a\", content: \"Users\", key: \"users\" }\n// ];\n// const rightItems = [\n//   { as: \"a\", content: \"Login\", key: \"login\" },\n//   { as: \"a\", content: \"Register\", key: \"register\" }\n// ];\n\n// const NavBarMobile = ({\n//   children,\n//   leftItems,\n//   onPusherClick,\n//   onToggle,\n//   rightItems,\n//   visible\n// }) => (\n//   <Sidebar.Pushable>\n//     <Sidebar\n//       as={Menu}\n//       animation=\"overlay\"\n//       icon=\"labeled\"\n//       inverted\n//       items={leftItems}\n//       vertical\n//       visible={visible}\n//     />\n//     <Sidebar.Pusher\n//       dimmed={visible}\n//       onClick={onPusherClick}\n//       style={{ minHeight: \"100vh\" }}\n//     >\n//       <Menu fixed=\"top\" inverted>\n//         <Menu.Item>\n//           <Image size=\"mini\" src=\"https://react.semantic-ui.com/logo.png\" />\n//         </Menu.Item>\n//         <Menu.Item onClick={onToggle}>\n//           <Icon name=\"sidebar\" />\n//         </Menu.Item>\n//         <Menu.Menu position=\"right\">\n//           {_.map(rightItems, item => <Menu.Item {...item} />)}\n//         </Menu.Menu>\n//       </Menu>\n//       {children}\n//     </Sidebar.Pusher>\n//   </Sidebar.Pushable>\n// );\n\nvar NavBarDesktop = function NavBarDesktop(_ref) {\n  var leftItems = _ref.leftItems,\n      rightItems = _ref.rightItems;\n  return _react2.default.createElement(\n    _semanticUiReact.Menu,\n    { fixed: 'top', inverted: true },\n    _react2.default.createElement(_semanticUiReact.Menu.Item, null),\n    _lodash2.default.map(leftItems, function (item) {\n      return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n    }),\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Menu,\n      { position: 'right' },\n      _lodash2.default.map(rightItems, function (item) {\n        return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n      })\n    )\n  );\n};\n\nvar NavBarChildren = function NavBarChildren(_ref2) {\n  var children = _ref2.children;\n  return _react2.default.createElement(\n    _semanticUiReact.Container,\n    { style: { marginTop: \"5em\" } },\n    children\n  );\n};\n\nvar NavBar = function (_React$Component) {\n  _inherits(NavBar, _React$Component);\n\n  function NavBar(props) {\n    _classCallCheck(this, NavBar);\n\n    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));\n\n    _this.state = {\n      visible: false\n    };\n    _this.handlePusher = _this.handlePusher.bind(_this);\n    _this.handleToggle = _this.handleToggle.bind(_this);\n    return _this;\n  }\n\n  _createClass(NavBar, [{\n    key: 'handlePusher',\n    value: function handlePusher() {\n      var visible = this.state.visible;\n\n      if (visible) this.setState({ visible: false });\n    }\n  }, {\n    key: 'handleToggle',\n    value: function handleToggle() {\n      this.setState({ visible: !this.state.visible });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          leftItems = _props.leftItems,\n          rightItems = _props.rightItems;\n      var visible = this.state.visible;\n\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_semanticUiReact.Responsive, _semanticUiReact.Responsive.onlyMobile),\n        _react2.default.createElement(\n          _semanticUiReact.Responsive,\n          { minWidth: _semanticUiReact.Responsive.onlyTablet.minWidth },\n          _react2.default.createElement(NavBarDesktop, { leftItems: leftItems, rightItems: rightItems }),\n          _react2.default.createElement(\n            NavBarChildren,\n            null,\n            children\n          ),\n          'hello'\n        )\n      );\n    }\n  }]);\n\n  return NavBar;\n}(_react2.default.Component);\n\nexports.default = NavBar;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeD85YzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIEljb24sXG4gIEltYWdlLFxuICBNZW51LFxuICBTaWRlYmFyLFxuICBSZXNwb25zaXZlXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG4vLyBjb25zdCBsZWZ0SXRlbXMgPSBbXG4vLyAgIHsgYXM6IFwiYVwiLCBjb250ZW50OiBcIkhvbWVcIiwga2V5OiBcImhvbWVcIiB9LFxuLy8gICB7IGFzOiBcImFcIiwgY29udGVudDogXCJVc2Vyc1wiLCBrZXk6IFwidXNlcnNcIiB9XG4vLyBdO1xuLy8gY29uc3QgcmlnaHRJdGVtcyA9IFtcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiTG9naW5cIiwga2V5OiBcImxvZ2luXCIgfSxcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiUmVnaXN0ZXJcIiwga2V5OiBcInJlZ2lzdGVyXCIgfVxuLy8gXTtcblxuLy8gY29uc3QgTmF2QmFyTW9iaWxlID0gKHtcbi8vICAgY2hpbGRyZW4sXG4vLyAgIGxlZnRJdGVtcyxcbi8vICAgb25QdXNoZXJDbGljayxcbi8vICAgb25Ub2dnbGUsXG4vLyAgIHJpZ2h0SXRlbXMsXG4vLyAgIHZpc2libGVcbi8vIH0pID0+IChcbi8vICAgPFNpZGViYXIuUHVzaGFibGU+XG4vLyAgICAgPFNpZGViYXJcbi8vICAgICAgIGFzPXtNZW51fVxuLy8gICAgICAgYW5pbWF0aW9uPVwib3ZlcmxheVwiXG4vLyAgICAgICBpY29uPVwibGFiZWxlZFwiXG4vLyAgICAgICBpbnZlcnRlZFxuLy8gICAgICAgaXRlbXM9e2xlZnRJdGVtc31cbi8vICAgICAgIHZlcnRpY2FsXG4vLyAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuLy8gICAgIC8+XG4vLyAgICAgPFNpZGViYXIuUHVzaGVyXG4vLyAgICAgICBkaW1tZWQ9e3Zpc2libGV9XG4vLyAgICAgICBvbkNsaWNrPXtvblB1c2hlckNsaWNrfVxuLy8gICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX1cbi8vICAgICA+XG4vLyAgICAgICA8TWVudSBmaXhlZD1cInRvcFwiIGludmVydGVkPlxuLy8gICAgICAgICA8TWVudS5JdGVtPlxuLy8gICAgICAgICAgIDxJbWFnZSBzaXplPVwibWluaVwiIHNyYz1cImh0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2xvZ28ucG5nXCIgLz5cbi8vICAgICAgICAgPC9NZW51Lkl0ZW0+XG4vLyAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17b25Ub2dnbGV9PlxuLy8gICAgICAgICAgIDxJY29uIG5hbWU9XCJzaWRlYmFyXCIgLz5cbi8vICAgICAgICAgPC9NZW51Lkl0ZW0+XG4vLyAgICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxuLy8gICAgICAgICAgIHtfLm1hcChyaWdodEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbi8vICAgICAgICAgPC9NZW51Lk1lbnU+XG4vLyAgICAgICA8L01lbnU+XG4vLyAgICAgICB7Y2hpbGRyZW59XG4vLyAgICAgPC9TaWRlYmFyLlB1c2hlcj5cbi8vICAgPC9TaWRlYmFyLlB1c2hhYmxlPlxuLy8gKTtcblxuY29uc3QgTmF2QmFyRGVza3RvcCA9ICh7IGxlZnRJdGVtcywgcmlnaHRJdGVtcyB9KSA9PiAoXG4gIDxNZW51IGZpeGVkPVwidG9wXCIgaW52ZXJ0ZWQ+XG4gICAgPE1lbnUuSXRlbT5cblxuICAgIDwvTWVudS5JdGVtPlxuICAgIHtfLm1hcChsZWZ0SXRlbXMsIGl0ZW0gPT4gPE1lbnUuSXRlbSB7Li4uaXRlbX0gLz4pfVxuICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAge18ubWFwKHJpZ2h0SXRlbXMsIGl0ZW0gPT4gPE1lbnUuSXRlbSB7Li4uaXRlbX0gLz4pfVxuICAgIDwvTWVudS5NZW51PlxuICA8L01lbnU+XG4pO1xuXG5jb25zdCBOYXZCYXJDaGlsZHJlbiA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPENvbnRhaW5lciBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNWVtXCIgfX0+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxuKTtcblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9OyAgIFxuICAgIHRoaXMuaGFuZGxlUHVzaGVyID0gdGhpcy5oYW5kbGVQdXNoZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZSA9IHRoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVQdXNoZXIoKSB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh2aXNpYmxlKSB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSk7XG4gIH07XG5cbiAgaGFuZGxlVG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiAhdGhpcy5zdGF0ZS52aXNpYmxlIH0pXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGxlZnRJdGVtcywgcmlnaHRJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFJlc3BvbnNpdmUgey4uLlJlc3BvbnNpdmUub25seU1vYmlsZX0+XG4gICAgICAgICAgeyAvKjxOYXZCYXJNb2JpbGVcbiAgICAgICAgICAgIGxlZnRJdGVtcz17bGVmdEl0ZW1zfVxuICAgICAgICAgICAgb25QdXNoZXJDbGljaz17dGhpcy5oYW5kbGVQdXNoZXJ9XG4gICAgICAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgICByaWdodEl0ZW1zPXtyaWdodEl0ZW1zfVxuICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgICA+IFxuICAgICAgICAgICAgPE5hdkJhckNoaWxkcmVuPntjaGlsZHJlbn08L05hdkJhckNoaWxkcmVuPlxuICAgICAgICAgIDwvTmF2QmFyTW9iaWxlPlxuICAgICAgICAgICoqLyB9XG4gICAgICAgIDwvUmVzcG9uc2l2ZT5cbiAgICAgICAgPFJlc3BvbnNpdmUgbWluV2lkdGg9e1Jlc3BvbnNpdmUub25seVRhYmxldC5taW5XaWR0aH0+XG4gICAgICAgICAgPE5hdkJhckRlc2t0b3AgbGVmdEl0ZW1zPXtsZWZ0SXRlbXN9IHJpZ2h0SXRlbXM9e3JpZ2h0SXRlbXN9IC8+XG4gICAgICAgICAgPE5hdkJhckNoaWxkcmVuPntjaGlsZHJlbn08L05hdkJhckNoaWxkcmVuPlxuICAgICAgICAgIGhlbGxvXG4gICAgICAgIDwvUmVzcG9uc2l2ZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBTEE7QUFEQTtBQUNBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTkE7QUFPQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFiQTtBQW9CQTs7OztBQTdDQTtBQUNBO0FBK0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/components/NavBar.jsx\n");

/***/ })

})