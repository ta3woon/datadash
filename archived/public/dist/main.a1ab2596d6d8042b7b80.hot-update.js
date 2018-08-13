webpackHotUpdate("main",{

/***/ "./public/src/components/SignIn.jsx":
/*!******************************************!*\
  !*** ./public/src/components/SignIn.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar LoginForm = function LoginForm() {\n  return _react2.default.createElement(\n    'div',\n    { className: 'login-form' },\n    _react2.default.createElement(\n      'style',\n      null,\n      '\\n      body > div,\\n      body > div > div,\\n      body > div > div > div.login-form {\\n        height: 100%;\\n      }\\n    '\n    ),\n    _react2.default.createElement(\n      _semanticUiReact.Grid,\n      {\n        textAlign: 'center',\n        style: { height: '100%' },\n        verticalAlign: 'middle'\n      },\n      _react2.default.createElement(\n        _semanticUiReact.Grid.Column,\n        { style: { maxWidth: 450 } },\n        _react2.default.createElement(\n          _semanticUiReact.Header,\n          { as: 'h2', color: 'yellow', textAlign: 'center' },\n          'DTIG Data Dashboard'\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Form,\n          { size: 'large' },\n          _react2.default.createElement(\n            _semanticUiReact.Segment,\n            { stacked: true },\n            _react2.default.createElement(_semanticUiReact.Form.Input, {\n              fluid: true,\n              icon: 'user',\n              iconPosition: 'left',\n              placeholder: 'E-mail address'\n            }),\n            _react2.default.createElement(_semanticUiReact.Form.Input, {\n              fluid: true,\n              icon: 'lock',\n              iconPosition: 'left',\n              placeholder: 'Password',\n              type: 'password'\n            }),\n            _react2.default.createElement(\n              _semanticUiReact.Button,\n              { color: 'yellow', fluid: true, size: 'large' },\n              'Login'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Message,\n          null,\n          'New to us? ',\n          _react2.default.createElement(\n            'a',\n            { href: '#' },\n            'Sign Up'\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = LoginForm;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvU2lnbkluLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvc3JjL2NvbXBvbmVudHMvU2lnbkluLmpzeD82MmNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEdyaWQsIEhlYWRlciwgSW1hZ2UsIE1lc3NhZ2UsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4tZm9ybSc+XG4gICAgey8qXG4gICAgICBIZWFkcyB1cCEgVGhlIHN0eWxlcyBiZWxvdyBhcmUgbmVjZXNzYXJ5IGZvciB0aGUgY29ycmVjdCByZW5kZXIgb2YgdGhpcyBleGFtcGxlLlxuICAgICAgWW91IGNhbiBkbyBzYW1lIHdpdGggQ1NTLCB0aGUgbWFpbiBpZGVhIGlzIHRoYXQgYWxsIHRoZSBlbGVtZW50cyB1cCB0byB0aGUgYEdyaWRgXG4gICAgICBiZWxvdyBtdXN0IGhhdmUgYSBoZWlnaHQgb2YgMTAwJS5cbiAgICAqL31cbiAgICA8c3R5bGU+e2BcbiAgICAgIGJvZHkgPiBkaXYsXG4gICAgICBib2R5ID4gZGl2ID4gZGl2LFxuICAgICAgYm9keSA+IGRpdiA+IGRpdiA+IGRpdi5sb2dpbi1mb3JtIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8R3JpZFxuICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgdmVydGljYWxBbGlnbj0nbWlkZGxlJ1xuICAgID5cbiAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBtYXhXaWR0aDogNDUwIH19PlxuICAgICAgICA8SGVhZGVyIGFzPSdoMicgY29sb3I9J3llbGxvdycgdGV4dEFsaWduPSdjZW50ZXInPlxuICAgICAgICAgIERUSUcgRGF0YSBEYXNoYm9hcmRcbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxGb3JtIHNpemU9J2xhcmdlJz5cbiAgICAgICAgICA8U2VnbWVudCBzdGFja2VkPlxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgaWNvbj0ndXNlcidcbiAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdsZWZ0J1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRS1tYWlsIGFkZHJlc3MnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgaWNvbj0nbG9jaydcbiAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdsZWZ0J1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXG4gICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0neWVsbG93JyBmbHVpZCBzaXplPSdsYXJnZSc+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPE1lc3NhZ2U+XG4gICAgICAgICAgTmV3IHRvIHVzPyA8YSBocmVmPScjJz5TaWduIFVwPC9hPlxuICAgICAgICA8L01lc3NhZ2U+XG4gICAgICA8L0dyaWQuQ29sdW1uPlxuICAgIDwvR3JpZD5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZBO0FBREE7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUF2QkE7QUFMQTtBQWJBO0FBREE7QUFDQTtBQWlEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/components/SignIn.jsx\n");

/***/ })

})