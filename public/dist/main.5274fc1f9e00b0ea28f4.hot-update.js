webpackHotUpdate("main",{

/***/ "./public/src/components/authentication/SignIn.jsx":
/*!*********************************************************!*\
  !*** ./public/src/components/authentication/SignIn.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar LoginForm = function LoginForm() {\n  return _react2.default.createElement(\n    'div',\n    { className: 'login-form' },\n    _react2.default.createElement(\n      _semanticUiReact.Grid,\n      {\n        textAlign: 'center',\n        style: { height: '100%' },\n        verticalAlign: 'middle'\n      },\n      _react2.default.createElement(\n        _semanticUiReact.Grid.Column,\n        { style: { maxWidth: 450 } },\n        _react2.default.createElement(\n          _semanticUiReact.Header,\n          { as: 'h2', color: 'yellow', textAlign: 'center' },\n          'DTIG Data Dashboard'\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Form,\n          { size: 'large' },\n          _react2.default.createElement(\n            _semanticUiReact.Segment,\n            { stacked: true },\n            _react2.default.createElement(_semanticUiReact.Form.Input, {\n              fluid: true,\n              icon: 'user',\n              iconPosition: 'left',\n              placeholder: 'E-mail address'\n            }),\n            _react2.default.createElement(_semanticUiReact.Form.Input, {\n              fluid: true,\n              icon: 'lock',\n              iconPosition: 'left',\n              placeholder: 'Password',\n              type: 'password'\n            }),\n            _react2.default.createElement(\n              _semanticUiReact.Button,\n              { color: 'yellow', fluid: true, size: 'large' },\n              'Login'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Message,\n          null,\n          'New to us? ',\n          _react2.default.createElement(\n            'a',\n            { href: '#' },\n            'Sign Up'\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = LoginForm;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvYXV0aGVudGljYXRpb24vU2lnbkluLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc3JjL2NvbXBvbmVudHMvYXV0aGVudGljYXRpb24vU2lnbkluLmpzeD85ZjhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEdyaWQsIEhlYWRlciwgSW1hZ2UsIE1lc3NhZ2UsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4tZm9ybSc+XG4gICAgey8qXG4gICAgICBIZWFkcyB1cCEgVGhlIHN0eWxlcyBiZWxvdyBhcmUgbmVjZXNzYXJ5IGZvciB0aGUgY29ycmVjdCByZW5kZXIgb2YgdGhpcyBleGFtcGxlLlxuICAgICAgWW91IGNhbiBkbyBzYW1lIHdpdGggQ1NTLCB0aGUgbWFpbiBpZGVhIGlzIHRoYXQgYWxsIHRoZSBlbGVtZW50cyB1cCB0byB0aGUgYEdyaWRgXG4gICAgICBiZWxvdyBtdXN0IGhhdmUgYSBoZWlnaHQgb2YgMTAwJS5cbiAgICAqL31cblxuICAgIDxHcmlkXG4gICAgICB0ZXh0QWxpZ249J2NlbnRlcidcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19XG4gICAgICB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnXG4gICAgPlxuICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IG1heFdpZHRoOiA0NTAgfX0+XG4gICAgICAgIDxIZWFkZXIgYXM9J2gyJyBjb2xvcj0neWVsbG93JyB0ZXh0QWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgRFRJRyBEYXRhIERhc2hib2FyZFxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPEZvcm0gc2l6ZT0nbGFyZ2UnPlxuICAgICAgICAgIDxTZWdtZW50IHN0YWNrZWQ+XG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICBpY29uPSd1c2VyJ1xuICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFLW1haWwgYWRkcmVzcydcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICBpY29uPSdsb2NrJ1xuICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcbiAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSd5ZWxsb3cnIGZsdWlkIHNpemU9J2xhcmdlJz5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8TWVzc2FnZT5cbiAgICAgICAgICBOZXcgdG8gdXM/IDxhIGhyZWY9JyMnPlNpZ24gVXA8L2E+XG4gICAgICAgIDwvTWVzc2FnZT5cbiAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgPC9HcmlkPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFmQTtBQURBO0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBdkJBO0FBTEE7QUFQQTtBQURBO0FBQ0E7QUEyQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/src/components/authentication/SignIn.jsx\n");

/***/ })

})