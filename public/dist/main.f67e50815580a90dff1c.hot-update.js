webpackHotUpdate("main",{

/***/ "./public/src/components/NavBar.jsx":
/*!******************************************!*\
  !*** ./public/src/components/NavBar.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\n__webpack_require__(/*! ../../assets/css/NavBar.css */ \"./public/assets/css/NavBar.css\");\n\nvar _OldMain = __webpack_require__(/*! ../containers/OldMain */ \"./public/src/containers/OldMain.jsx\");\n\nvar _OldMain2 = _interopRequireDefault(_OldMain);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import * as routes from '../constants/routes';\n// import SignIn from './SignIn';\n\n\n// const leftItems = [\n//   { as: \"a\", content: \"Home\", key: \"home\" },\n//   { as: \"a\", content: \"Users\", key: \"users\" }\n// ];\n// const rightItems = [\n//   { as: \"a\", content: \"Login\", key: \"login\" },\n//   { as: \"a\", content: \"Register\", key: \"register\" }\n// ];\n\nvar brandOptions = [{ key: 'DTIG', value: 'DTIG', text: 'DTIG Dashboard', href: 'https://dtig-data-dashboard.firebaseapp.com/' }, { key: 'MAC', value: 'MAC', text: 'MAC Dashboard', href: 'https://mac-modiface-c4d8f.firebaseapp.com/' }, { key: 'Clinique', value: 'Clinique Dashboard', text: 'Clinique' }];\n\nvar NavBarMobile = function NavBarMobile(_ref) {\n  var children = _ref.children,\n      leftItems = _ref.leftItems,\n      onPusherClick = _ref.onPusherClick,\n      onToggle = _ref.onToggle,\n      rightItems = _ref.rightItems,\n      visible = _ref.visible;\n  return _react2.default.createElement(\n    _semanticUiReact.Sidebar.Pushable,\n    { as: _semanticUiReact.Segment },\n    _react2.default.createElement(\n      _semanticUiReact.Sidebar,\n      {\n        as: _semanticUiReact.Menu,\n        animation: 'push',\n        width: 'wide',\n        icon: 'labeled',\n        vertical: true,\n        inverted: true,\n        visible: visible\n      },\n      _react2.default.createElement(\n        'div',\n        { className: 'brand-options' },\n        _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Switch Dashboard', search: true, selection: true, options: brandOptions })\n      ),\n      _lodash2.default.map(leftItems, function (item) {\n        return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n      })\n    ),\n    _react2.default.createElement(\n      _semanticUiReact.Sidebar.Pusher,\n      {\n        onClick: onPusherClick\n      },\n      _react2.default.createElement(\n        _semanticUiReact.Menu,\n        { fixed: 'top' },\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          { onClick: onToggle },\n          _react2.default.createElement(_semanticUiReact.Icon, { name: 'sidebar' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Item,\n          null,\n          _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Menu.Menu,\n          { position: 'right' },\n          _react2.default.createElement(\n            _semanticUiReact.Menu.Item,\n            null,\n            'Login'\n          ),\n          _react2.default.createElement(\n            _semanticUiReact.Menu.Item,\n            null,\n            'Register'\n          )\n        )\n      ),\n      children,\n      _react2.default.createElement(\n        _semanticUiReact.Segment,\n        { basic: true },\n        _react2.default.createElement(_OldMain2.default, null)\n      )\n    )\n  );\n};\n\nvar NavBarDesktop = function NavBarDesktop(_ref2) {\n  var leftItems = _ref2.leftItems,\n      rightItems = _ref2.rightItems;\n  return _react2.default.createElement(\n    _semanticUiReact.Menu,\n    { fixed: 'top' },\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Item,\n      null,\n      _react2.default.createElement(_semanticUiReact.Image, { size: 'mini', src: 'assets/img/logo-test2.png' })\n    ),\n    _lodash2.default.map(leftItems, function (item) {\n      return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n    }),\n    _react2.default.createElement(\n      _semanticUiReact.Menu.Menu,\n      { position: 'right' },\n      _lodash2.default.map(rightItems, function (item) {\n        return _react2.default.createElement(_semanticUiReact.Menu.Item, item);\n      })\n    )\n  );\n};\n\nvar NavBarChildren = function NavBarChildren(_ref3) {\n  var children = _ref3.children;\n  return _react2.default.createElement(\n    _semanticUiReact.Container,\n    { style: { marginTop: \"52px\" } },\n    children\n  );\n};\n\nvar NavBar = function (_React$Component) {\n  _inherits(NavBar, _React$Component);\n\n  function NavBar(props) {\n    _classCallCheck(this, NavBar);\n\n    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));\n\n    _this.state = {\n      visible: false\n    };\n    _this.handlePusher = _this.handlePusher.bind(_this);\n    _this.handleToggle = _this.handleToggle.bind(_this);\n    return _this;\n  }\n\n  _createClass(NavBar, [{\n    key: 'handlePusher',\n    value: function handlePusher() {\n      var visible = this.state.visible;\n\n      if (visible) this.setState({ visible: false });\n    }\n  }, {\n    key: 'handleToggle',\n    value: function handleToggle() {\n      this.setState({ visible: !this.state.visible });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          leftItems = _props.leftItems,\n          rightItems = _props.rightItems;\n      var visible = this.state.visible;\n      // console.log(this.props)\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _semanticUiReact.Responsive,\n          null,\n          _react2.default.createElement(\n            NavBarMobile,\n            {\n              leftItems: leftItems,\n              onPusherClick: this.handlePusher,\n              onToggle: this.handleToggle,\n              rightItems: rightItems,\n              visible: visible\n            },\n            _react2.default.createElement(\n              NavBarChildren,\n              null,\n              children\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NavBar;\n}(_react2.default.Component);\n\nexports.default = NavBar;\n\n// <div>\n//   <Responsive {...Responsive.onlyMobile}>\n//     <NavBarMobile\n//       leftItems={leftItems}\n//       onPusherClick={this.handlePusher}\n//       onToggle={this.handleToggle}\n//       rightItems={rightItems}\n//       visible={visible}\n//     >\n//       <NavBarChildren>{children}</NavBarChildren>\n//     </NavBarMobile>\n//   </Responsive>\n//   <Responsive minWidth={Responsive.onlyTablet.minWidth}>\n//     <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />\n//     <NavBarChildren>{children}</NavBarChildren>\n//   </Responsive>\n// </div>//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeD85YzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9OYXZCYXIuY3NzJztcbmltcG9ydCBPbGRNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvT2xkTWFpbic7XG4vLyBpbXBvcnQgKiBhcyByb3V0ZXMgZnJvbSAnLi4vY29uc3RhbnRzL3JvdXRlcyc7XG4vLyBpbXBvcnQgU2lnbkluIGZyb20gJy4vU2lnbkluJztcblxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBJY29uLFxuICBJbWFnZSxcbiAgTWVudSxcbiAgU2lkZWJhcixcbiAgU2VnbWVudCxcbiAgQnV0dG9uLFxuICBIZWFkZXIsXG4gIERyb3Bkb3duLFxuICBSZXNwb25zaXZlXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG4vLyBjb25zdCBsZWZ0SXRlbXMgPSBbXG4vLyAgIHsgYXM6IFwiYVwiLCBjb250ZW50OiBcIkhvbWVcIiwga2V5OiBcImhvbWVcIiB9LFxuLy8gICB7IGFzOiBcImFcIiwgY29udGVudDogXCJVc2Vyc1wiLCBrZXk6IFwidXNlcnNcIiB9XG4vLyBdO1xuLy8gY29uc3QgcmlnaHRJdGVtcyA9IFtcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiTG9naW5cIiwga2V5OiBcImxvZ2luXCIgfSxcbi8vICAgeyBhczogXCJhXCIsIGNvbnRlbnQ6IFwiUmVnaXN0ZXJcIiwga2V5OiBcInJlZ2lzdGVyXCIgfVxuLy8gXTtcblxuY29uc3QgYnJhbmRPcHRpb25zID0gWyBcbiAgeyBrZXk6ICdEVElHJywgdmFsdWU6ICdEVElHJywgdGV4dDogJ0RUSUcgRGFzaGJvYXJkJywgaHJlZjogJ2h0dHBzOi8vZHRpZy1kYXRhLWRhc2hib2FyZC5maXJlYmFzZWFwcC5jb20vJyB9LCBcbiAgeyBrZXk6ICdNQUMnLCB2YWx1ZTogJ01BQycsIHRleHQ6ICdNQUMgRGFzaGJvYXJkJywgaHJlZjogJ2h0dHBzOi8vbWFjLW1vZGlmYWNlLWM0ZDhmLmZpcmViYXNlYXBwLmNvbS8nIH0sIFxuICB7IGtleTogJ0NsaW5pcXVlJywgdmFsdWU6ICdDbGluaXF1ZSBEYXNoYm9hcmQnLCB0ZXh0OiAnQ2xpbmlxdWUnIH1cbl1cblxuY29uc3QgTmF2QmFyTW9iaWxlID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxlZnRJdGVtcyxcbiAgb25QdXNoZXJDbGljayxcbiAgb25Ub2dnbGUsXG4gIHJpZ2h0SXRlbXMsXG4gIHZpc2libGVcbn0pID0+IChcbiAgPFNpZGViYXIuUHVzaGFibGUgYXM9e1NlZ21lbnR9PlxuICAgIDxTaWRlYmFyXG4gICAgICBhcz17TWVudX1cbiAgICAgIGFuaW1hdGlvbj1cInB1c2hcIlxuICAgICAgd2lkdGg9XCJ3aWRlXCJcbiAgICAgIGljb249XCJsYWJlbGVkXCJcbiAgICAgIHZlcnRpY2FsXG4gICAgICBpbnZlcnRlZFxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kLW9wdGlvbnNcIj5cbiAgICAgICAgPERyb3Bkb3duIHBsYWNlaG9sZGVyPSdTd2l0Y2ggRGFzaGJvYXJkJyBzZWFyY2ggc2VsZWN0aW9uIG9wdGlvbnM9e2JyYW5kT3B0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAge18ubWFwKGxlZnRJdGVtcywgaXRlbSA9PiA8TWVudS5JdGVtIHsuLi5pdGVtfSAvPil9XG4gICAgPC9TaWRlYmFyPlxuICAgIDxTaWRlYmFyLlB1c2hlclxuICAgICAgb25DbGljaz17b25QdXNoZXJDbGlja31cbiAgICA+XG4gICAgICA8TWVudSBmaXhlZD1cInRvcFwiID5cbiAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXtvblRvZ2dsZX0+XG4gICAgICAgICAgPEljb24gbmFtZT1cInNpZGViYXJcIiAvPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICA8SW1hZ2Ugc2l6ZT1cIm1pbmlcIiBzcmM9XCJhc3NldHMvaW1nL2xvZ28tdGVzdDIucG5nXCIgLz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICAgIDxNZW51Lkl0ZW0+TG9naW48L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtPlJlZ2lzdGVyPC9NZW51Lkl0ZW0+XG4gICAgICAgIDwvTWVudS5NZW51PlxuICAgICAgPC9NZW51PlxuICAgICAge2NoaWxkcmVufVxuICAgIDxTZWdtZW50IGJhc2ljPlxuICAgICAgPE9sZE1haW4gLz5cbiAgICA8L1NlZ21lbnQ+XG4gICAgPC9TaWRlYmFyLlB1c2hlcj5cbiAgPC9TaWRlYmFyLlB1c2hhYmxlPlxuKTtcblxuY29uc3QgTmF2QmFyRGVza3RvcCA9ICh7IGxlZnRJdGVtcywgcmlnaHRJdGVtcyB9KSA9PiAoXG4gIDxNZW51IGZpeGVkPVwidG9wXCIgPlxuICAgIDxNZW51Lkl0ZW0+XG4gICAgICA8SW1hZ2Ugc2l6ZT1cIm1pbmlcIiBzcmM9XCJhc3NldHMvaW1nL2xvZ28tdGVzdDIucG5nXCIgLz5cbiAgICA8L01lbnUuSXRlbT5cbiAgICB7Xy5tYXAobGVmdEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgIHtfLm1hcChyaWdodEl0ZW1zLCBpdGVtID0+IDxNZW51Lkl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICA8L01lbnUuTWVudT5cbiAgPC9NZW51PlxuKTtcblxuY29uc3QgTmF2QmFyQ2hpbGRyZW4gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPENvbnRhaW5lciBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNTJweFwiIH19PntjaGlsZHJlbn08L0NvbnRhaW5lcj5cbik7XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfTsgICBcbiAgICB0aGlzLmhhbmRsZVB1c2hlciA9IHRoaXMuaGFuZGxlUHVzaGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGUgPSB0aGlzLmhhbmRsZVRvZ2dsZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlUHVzaGVyKCkge1xuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodmlzaWJsZSkgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogIXRoaXMuc3RhdGUudmlzaWJsZSB9KVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBsZWZ0SXRlbXMsIHJpZ2h0SXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFJlc3BvbnNpdmU+XG4gICAgICAgICAgPE5hdkJhck1vYmlsZVxuICAgICAgICAgICAgbGVmdEl0ZW1zPXtsZWZ0SXRlbXN9XG4gICAgICAgICAgICBvblB1c2hlckNsaWNrPXt0aGlzLmhhbmRsZVB1c2hlcn1cbiAgICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICAgIHJpZ2h0SXRlbXM9e3JpZ2h0SXRlbXN9XG4gICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOYXZCYXJDaGlsZHJlbj57Y2hpbGRyZW59PC9OYXZCYXJDaGlsZHJlbj5cbiAgICAgICAgICA8L05hdkJhck1vYmlsZT5cbiAgICAgICAgPC9SZXNwb25zaXZlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG5cblxuLy8gPGRpdj5cbi8vICAgPFJlc3BvbnNpdmUgey4uLlJlc3BvbnNpdmUub25seU1vYmlsZX0+XG4vLyAgICAgPE5hdkJhck1vYmlsZVxuLy8gICAgICAgbGVmdEl0ZW1zPXtsZWZ0SXRlbXN9XG4vLyAgICAgICBvblB1c2hlckNsaWNrPXt0aGlzLmhhbmRsZVB1c2hlcn1cbi8vICAgICAgIG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbi8vICAgICAgIHJpZ2h0SXRlbXM9e3JpZ2h0SXRlbXN9XG4vLyAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuLy8gICAgID5cbi8vICAgICAgIDxOYXZCYXJDaGlsZHJlbj57Y2hpbGRyZW59PC9OYXZCYXJDaGlsZHJlbj5cbi8vICAgICA8L05hdkJhck1vYmlsZT5cbi8vICAgPC9SZXNwb25zaXZlPlxuLy8gICA8UmVzcG9uc2l2ZSBtaW5XaWR0aD17UmVzcG9uc2l2ZS5vbmx5VGFibGV0Lm1pbldpZHRofT5cbi8vICAgICA8TmF2QmFyRGVza3RvcCBsZWZ0SXRlbXM9e2xlZnRJdGVtc30gcmlnaHRJdGVtcz17cmlnaHRJdGVtc30gLz5cbi8vICAgICA8TmF2QmFyQ2hpbGRyZW4+e2NoaWxkcmVufTwvTmF2QmFyQ2hpbGRyZW4+XG4vLyAgIDwvUmVzcG9uc2l2ZT5cbi8vIDwvZGl2PiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBSUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFaQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFQQTtBQVlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWhCQTtBQWZBO0FBUkE7QUFDQTtBQTZDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFMQTtBQURBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFOQTtBQU9BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQURBO0FBREE7QUFjQTs7OztBQXhDQTtBQUNBO0FBMENBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/components/NavBar.jsx\n");

/***/ })

})