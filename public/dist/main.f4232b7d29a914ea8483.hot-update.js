webpackHotUpdate("main",{

/***/ "./public/src/containers/OldMain.jsx":
/*!*******************************************!*\
  !*** ./public/src/containers/OldMain.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ../../assets/css/main1.css */ \"./public/assets/css/main1.css\");\n\n__webpack_require__(/*! ../../assets/js/main.js */ \"./public/assets/js/main.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar OldMain = function (_Component) {\n  _inherits(OldMain, _Component);\n\n  function OldMain() {\n    _classCallCheck(this, OldMain);\n\n    return _possibleConstructorReturn(this, (OldMain.__proto__ || Object.getPrototypeOf(OldMain)).apply(this, arguments));\n  }\n\n  _createClass(OldMain, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'p',\n          null,\n          '\\'test\\''\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header xtheme-c3' },\n          _react2.default.createElement(\n            'section',\n            { id: 'page-splash' },\n            _react2.default.createElement('img', { id: 'splash-logo', src: '../../assets/img/dbi2w.png' }),\n            _react2.default.createElement(\n              'h2',\n              { className: 'logo', id: 'splash-subtext' },\n              'DTIG\\xA0\\xA0Data\\xA0\\xA0Dashboard'\n            ),\n            _react2.default.createElement(\n              'div',\n              { id: 'sign-in-wrapper-container', className: 'mdl-card overflow' },\n              _react2.default.createElement(\n                'div',\n                { id: 'sign-in-buttons-container', className: 'xtooltip' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'tooltip overflow' },\n                  _react2.default.createElement(\n                    'span',\n                    { className: 'tooltiptext-bottom' },\n                    'Select button to start signing in ...'\n                  ),\n                  _react2.default.createElement(\n                    'button',\n                    { id: 'sign-in-email-button', className: 'mdl-button--raised mdl-button mdl-js-button mdl-js-ripple-effect' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'account_circle'\n                    ),\n                    ' Sign in with Email'\n                  ),\n                  _react2.default.createElement(\n                    'button',\n                    { hidden: true, id: 'sign-in-google-button', className: 'mdl-button--raised mdl-button mdl-js-button mdl-js-ripple-effect' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'account_circle'\n                    ),\n                    ' Sign in with Google'\n                  )\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                { hidden: true, id: 'sign-in-email-container', className: 'mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop tooltip overflow' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'xmdl-card__supporting-text' },\n                  _react2.default.createElement(\n                    'span',\n                    { className: 'tooltiptext-bottom' },\n                    'Provide email and password to sign in ...'\n                  ),\n                  _react2.default.createElement('input', { hidden: true, name: 'email' }),\n                  _react2.default.createElement('input', { className: 'mdl-textfield__input', style: { display: 'inline', width: 370 }, type: 'email', id: 'email-sign-in-email-textfield', name: 'email', placeholder: ' Email' }),\n                  _react2.default.createElement('input', { className: 'mdl-textfield__input', style: { display: 'inline', width: 'auto' }, type: 'password', id: 'email-sign-in-password-textfield', name: 'password', placeholder: ' Password' }),\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement(\n                    'div',\n                    { id: 'sign-in-buttons' },\n                    _react2.default.createElement(\n                      'button',\n                      { id: 'email-sign-in-submit-button', className: 'mdl-button mdl-js-button mdl-button--raised', name: 'signin' },\n                      'Sign In'\n                    ),\n                    _react2.default.createElement(\n                      'button',\n                      { id: 'email-sign-in-cancel-button', className: 'mdl-button mdl-js-button mdl-button--raised', name: 'cancel-email' },\n                      'CANCEL'\n                    ),\n                    _react2.default.createElement(\n                      'button',\n                      { id: 'email-send-password-reset-button', className: 'mdl-button mdl-js-button mdl-button--raised', name: 'verify-email' },\n                      'Send Password Reset Email'\n                    )\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { id: 'version-container', className: 'version-container' },\n              'Version: 0.9.9'\n            )\n          ),\n          _react2.default.createElement(\n            'header',\n            { className: 'header mdl-layout__header xtheme-c1' },\n            _react2.default.createElement(\n              'div',\n              { className: 'mdl-layout__header-row titlebar' },\n              _react2.default.createElement(\n                'h3',\n                { id: 'header-logo', className: 'tooltip header-logo' },\n                _react2.default.createElement(\n                  'span',\n                  { id: 'header-text' },\n                  'DTIG Data Dashboard'\n                ),\n                _react2.default.createElement(\n                  'span',\n                  { className: 'tooltiptext-bottom' },\n                  '\\xA0',\n                  _react2.default.createElement('br', null),\n                  'Select \\'Dashboards\\' or \\'Help\\' from underneath this bubble or',\n                  _react2.default.createElement('br', null),\n                  'select the avatar in the top right for user profile information',\n                  _react2.default.createElement('br', null),\n                  '\\xA0'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                { id: 'user-container' },\n                _react2.default.createElement(\n                  'div',\n                  { xhidden: true, id: 'userpic', className: 'tooltip top-bar-avatar' },\n                  _react2.default.createElement(\n                    'span',\n                    { className: 'tooltiptext-left' },\n                    'Select avatar for user profile section for user info,',\n                    _react2.default.createElement('br', null),\n                    'additional dashboard control commands and logging out.'\n                  )\n                ),\n                _react2.default.createElement('div', { hidden: true, id: 'username', className: 'top-var-username' })\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'tab mdl-layout__header-row xtheme-c2' },\n              _react2.default.createElement(\n                'div',\n                { className: 'mdl-tabs mdl-js-tabs mdl-js-ripple-effect' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'ilb' },\n                  _react2.default.createElement(\n                    'div',\n                    { xhidden: true, id: 'menu-my-groups', className: 'tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2 is-active' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'dashboard'\n                    ),\n                    'Dashboards',\n                    _react2.default.createElement(\n                      'span',\n                      { className: 'tooltiptext-bottom' },\n                      '\\xA0',\n                      _react2.default.createElement('br', null),\n                      'Display dashboard panels',\n                      _react2.default.createElement('br', null),\n                      '\\xA0'\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { hidden: true, id: 'menu-my-top-groups', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'trending_up'\n                    ),\n                    'My Top Groups'\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { hidden: true, id: 'menu-recent', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'schedule'\n                    ),\n                    'Recent Groups'\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { hidden: true, id: 'menu-show-unregistered', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'screen_lock_portrait'\n                    ),\n                    'Unregistered'\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { xhidden: true, id: 'menu-show-help', className: 'tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'help'\n                    ),\n                    'Help',\n                    _react2.default.createElement(\n                      'span',\n                      { className: 'tooltiptext-bottom' },\n                      '\\xA0',\n                      _react2.default.createElement('br', null),\n                      'Display help panel',\n                      _react2.default.createElement('br', null),\n                      '\\xA0'\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'button',\n                    { hidden: true, id: 'new-group-button', className: 'mdl-button mdl-js-button mdl-button--fab mdl-shadow--4dp mdl-js-ripple-effect xtheme-c6' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'add'\n                    )\n                  )\n                )\n              )\n            )\n          ),\n          _react2.default.createElement(\n            'main',\n            { className: 'mdl-layout__content' },\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content', id: 'add-group-container', style: { display: 'none' } },\n              _react2.default.createElement(\n                'div',\n                { className: 'mdl-cell mdl-cell--12-col mdl-grid' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--12-col-desktop xtheme-c5' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'mdl-card__title xtheme-c4' },\n                    _react2.default.createElement(\n                      'h2',\n                      { className: 'mdl-card__title-text' },\n                      'New Dashboard'\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'mdl-card__supporting-text' },\n                    _react2.default.createElement(\n                      'form',\n                      { id: 'new-group-form', action: '#' },\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-title mdl-textfield__input', type: 'text', id: 'new-group-title' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-title' },\n                          'Title for dashboard'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-group mdl-textfield__input', type: 'text', id: 'new-group-group' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-group' },\n                          'Identifier for dashboard (ie: the \\'group\\' identifier can be the door value)'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('textarea', { className: 'new-group-message mdl-textfield__input', rows: 3, id: 'new-group-message', defaultValue: \"\" }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-message' },\n                          'Message for dashboard'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-group mdl-textfield__input', type: 'text', id: 'new-group-tags' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-tags' },\n                          'Tags for dashboard (single-words, separated by a single space)'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'button',\n                        { id: 'add-group-button', type: 'submit', className: 'add-group-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6' },\n                        'Add Dashboard'\n                      ),\n                      _react2.default.createElement(\n                        'button',\n                        { id: 'new-group-dismiss-button', className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6' },\n                        'Dismiss'\n                      )\n                    )\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'user-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'recent-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'top-user-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'user-profile-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'unregistered-devices-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'help-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return OldMain;\n}(_react.Component);\n\nexports.default = OldMain;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbnRhaW5lcnMvT2xkTWFpbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcHVibGljL3NyYy9jb250YWluZXJzL09sZE1haW4uanN4P2IxYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9tYWluMS5jc3MnO1xuaW1wb3J0ICcuLi8uLi9hc3NldHMvanMvbWFpbi5qcyc7XG5cbmNsYXNzIE9sZE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICBcdDxkaXY+XG4gICAgXHRcdDxwPid0ZXN0JzwvcD5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tbGF5b3V0IG1kbC1sYXlvdXQgbWRsLWpzLWxheW91dCBtZGwtbGF5b3V0LS1maXhlZC1oZWFkZXIgeHRoZW1lLWMzXCI+XG4gICAgICAgIHsvKiBTcGxhc2ggU2NyZWVuICovfVxuICAgICAgICA8c2VjdGlvbiBpZD1cInBhZ2Utc3BsYXNoXCI+XG4gICAgICAgICAgPGltZyBpZD1cInNwbGFzaC1sb2dvXCIgc3JjPVwiLi4vLi4vYXNzZXRzL2ltZy9kYmkydy5wbmdcIiAvPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsb2dvXCIgaWQ9XCJzcGxhc2gtc3VidGV4dFwiPkRUSUcmbmJzcDsmbmJzcDtEYXRhJm5ic3A7Jm5ic3A7RGFzaGJvYXJkPC9oMj5cbiAgICAgICAgICB7Lyogc2lnbiBpbiBpdGVtcyBjb250YWluZXIgKi99XG4gICAgICAgICAgPGRpdiBpZD1cInNpZ24taW4td3JhcHBlci1jb250YWluZXJcIiBjbGFzc05hbWU9XCJtZGwtY2FyZCBvdmVyZmxvd1wiPlxuICAgICAgICAgICAgey8qIHNpZ24gaW4gYnV0dG9ucyBjb250YWluZXIgKi99XG4gICAgICAgICAgICA8ZGl2IGlkPVwic2lnbi1pbi1idXR0b25zLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInh0b29sdGlwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcCBvdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXB0ZXh0LWJvdHRvbVwiPlNlbGVjdCBidXR0b24gdG8gc3RhcnQgc2lnbmluZyBpbiAuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNpZ24taW4tZW1haWwtYnV0dG9uXCIgY2xhc3NOYW1lPVwibWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YWNjb3VudF9jaXJjbGU8L2k+IFNpZ24gaW4gd2l0aCBFbWFpbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaGlkZGVuIGlkPVwic2lnbi1pbi1nb29nbGUtYnV0dG9uXCIgY2xhc3NOYW1lPVwibWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YWNjb3VudF9jaXJjbGU8L2k+IFNpZ24gaW4gd2l0aCBHb29nbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBzaWduIGluIGVtYWlsIGZvcm0gY29udGFpbmVyICovfVxuICAgICAgICAgICAgPGRpdiBoaWRkZW4gaWQ9XCJzaWduLWluLWVtYWlsLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cIm1kbC1jYXJkIG1kbC1zaGFkb3ctLThkcCBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1jZWxsLS0xMi1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcCB0b29sdGlwIG92ZXJmbG93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieG1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dC1ib3R0b21cIj5Qcm92aWRlIGVtYWlsIGFuZCBwYXNzd29yZCB0byBzaWduIGluIC4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaGlkZGVuIG5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lJywgd2lkdGg6IDM3MH19IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWwtc2lnbi1pbi1lbWFpbC10ZXh0ZmllbGRcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIiBFbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lJywgd2lkdGg6ICdhdXRvJ319IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwiZW1haWwtc2lnbi1pbi1wYXNzd29yZC10ZXh0ZmllbGRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIiBQYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNpZ24taW4tYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImVtYWlsLXNpZ24taW4tc3VibWl0LWJ1dHRvblwiIGNsYXNzTmFtZT1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWRcIiBuYW1lPVwic2lnbmluXCI+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImVtYWlsLXNpZ24taW4tY2FuY2VsLWJ1dHRvblwiIGNsYXNzTmFtZT1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWRcIiBuYW1lPVwiY2FuY2VsLWVtYWlsXCI+Q0FOQ0VMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZW1haWwtc2VuZC1wYXNzd29yZC1yZXNldC1idXR0b25cIiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkXCIgbmFtZT1cInZlcmlmeS1lbWFpbFwiPlNlbmQgUGFzc3dvcmQgUmVzZXQgRW1haWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cInZlcnNpb24tY29udGFpbmVyXCIgY2xhc3NOYW1lPVwidmVyc2lvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIFZlcnNpb246IDAuOS45XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgey8qIEhlYWRlciBzZWN0aW9uIGNvbnRhaW5pbmcgbG9nbyBhbmQgbWVudSAqL31cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgbWRsLWxheW91dF9faGVhZGVyIHh0aGVtZS1jMVwiPlxuICAgICAgICAgIHsvKiBIZWFkZXIgUm93ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLWxheW91dF9faGVhZGVyLXJvdyB0aXRsZWJhclwiPlxuICAgICAgICAgICAgPGgzIGlkPVwiaGVhZGVyLWxvZ29cIiBjbGFzc05hbWU9XCJ0b29sdGlwIGhlYWRlci1sb2dvXCI+PHNwYW4gaWQ9XCJoZWFkZXItdGV4dFwiPkRUSUcgRGF0YSBEYXNoYm9hcmQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXB0ZXh0LWJvdHRvbVwiPiZuYnNwOzxiciAvPlNlbGVjdCAnRGFzaGJvYXJkcycgb3IgJ0hlbHAnIGZyb20gdW5kZXJuZWF0aCB0aGlzIGJ1YmJsZSBvcjxiciAvPnNlbGVjdCB0aGUgYXZhdGFyIGluIHRoZSB0b3AgcmlnaHQgZm9yIHVzZXIgcHJvZmlsZSBpbmZvcm1hdGlvbjxiciAvPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidXNlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiB4aGlkZGVuIGlkPVwidXNlcnBpY1wiIGNsYXNzTmFtZT1cInRvb2x0aXAgdG9wLWJhci1hdmF0YXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dC1sZWZ0XCI+U2VsZWN0IGF2YXRhciBmb3IgdXNlciBwcm9maWxlIHNlY3Rpb24gZm9yIHVzZXIgaW5mbyw8YnIgLz5hZGRpdGlvbmFsIGRhc2hib2FyZCBjb250cm9sIGNvbW1hbmRzIGFuZCBsb2dnaW5nIG91dC48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGhpZGRlbiBpZD1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwidG9wLXZhci11c2VybmFtZVwiIC8+XG4gICAgICAgICAgICAgIHsvKiAgICAgICAgPGJ1dHRvbiBoaWRkZW4gaWQ9XCJzaWduLW91dC1idXR0b25cIiBjbGFzcz1cIm1kbC1idXR0b24tLXJhaXNlZCBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5TaWduIG91dDwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uIEJhciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYiBtZGwtbGF5b3V0X19oZWFkZXItcm93IHh0aGVtZS1jMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGFicyBtZGwtanMtdGFicyBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlsYlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgeGhpZGRlbiBpZD1cIm1lbnUtbXktZ3JvdXBzXCIgY2xhc3NOYW1lPVwidG9vbHRpcCBvdmVyZmxvdyBtZGwtdGFic19fdGFiIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzIgaXMtYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmRhc2hib2FyZDwvaT5EYXNoYm9hcmRzXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dC1ib3R0b21cIj4mbmJzcDs8YnIgLz5EaXNwbGF5IGRhc2hib2FyZCBwYW5lbHM8YnIgLz4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBoaWRkZW4gaWQ9XCJtZW51LW15LXRvcC1ncm91cHNcIiBjbGFzc05hbWU9XCJtZGwtdGFic19fdGFiIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzJcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dHJlbmRpbmdfdXA8L2k+TXkgVG9wIEdyb3Vwc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaGlkZGVuIGlkPVwibWVudS1yZWNlbnRcIiBjbGFzc05hbWU9XCJtZGwtdGFic19fdGFiIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzJcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2NoZWR1bGU8L2k+UmVjZW50IEdyb3Vwc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaGlkZGVuIGlkPVwibWVudS1zaG93LXVucmVnaXN0ZXJlZFwiIGNsYXNzTmFtZT1cIm1kbC10YWJzX190YWIgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jMlwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zY3JlZW5fbG9ja19wb3J0cmFpdDwvaT5VbnJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHhoaWRkZW4gaWQ9XCJtZW51LXNob3ctaGVscFwiIGNsYXNzTmFtZT1cInRvb2x0aXAgb3ZlcmZsb3cgbWRsLXRhYnNfX3RhYiBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgeHRoZW1lLWMyXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmhlbHA8L2k+SGVscFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtYm90dG9tXCI+Jm5ic3A7PGJyIC8+RGlzcGxheSBoZWxwIHBhbmVsPGJyIC8+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaGlkZGVuIGlkPVwibmV3LWdyb3VwLWJ1dHRvblwiIGNsYXNzTmFtZT1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1mYWIgbWRsLXNoYWRvdy0tNGRwIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jNlwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICB7LyogTWFpbiBBcHBsaWNhdGlvbiBBcmVhICovfVxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtZGwtbGF5b3V0X19jb250ZW50XCI+XG4gICAgICAgICAgey8qIFNob3cgdGhlIGFkZCBncm91cCBmb3JtICovfVxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnRcIiBpZD1cImFkZC1ncm91cC1jb250YWluZXJcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCI+XG4gICAgICAgICAgICAgIHsvKiBDYXJkIGNvbnRhaW5pbmcgdGhlIGlucHV0cyB0byBhZGQgYSBuZXcgbWVzc2FnZXMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLWNhcmQgbWRsLXNoYWRvdy0tOGRwIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWNlbGwtLTgtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3AgeHRoZW1lLWM1XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtY2FyZF9fdGl0bGUgeHRoZW1lLWM0XCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWRsLWNhcmRfX3RpdGxlLXRleHRcIj5OZXcgRGFzaGJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwibmV3LWdyb3VwLWZvcm1cIiBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm5ldy1ncm91cC10aXRsZSBtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXctZ3JvdXAtdGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGh0bWxGb3I9XCJuZXctZ3JvdXAtdGl0bGVcIj5UaXRsZSBmb3IgZGFzaGJvYXJkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm5ldy1ncm91cC1ncm91cCBtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXctZ3JvdXAtZ3JvdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGh0bWxGb3I9XCJuZXctZ3JvdXAtZ3JvdXBcIj5JZGVudGlmaWVyIGZvciBkYXNoYm9hcmQgKGllOiB0aGUgJ2dyb3VwJyBpZGVudGlmaWVyIGNhbiBiZSB0aGUgZG9vciB2YWx1ZSk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwibmV3LWdyb3VwLW1lc3NhZ2UgbWRsLXRleHRmaWVsZF9faW5wdXRcIiByb3dzPXszfSBpZD1cIm5ldy1ncm91cC1tZXNzYWdlXCIgZGVmYXVsdFZhbHVlPXtcIlwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGh0bWxGb3I9XCJuZXctZ3JvdXAtbWVzc2FnZVwiPk1lc3NhZ2UgZm9yIGRhc2hib2FyZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJuZXctZ3JvdXAtZ3JvdXAgbWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwibmV3LWdyb3VwLXRhZ3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGh0bWxGb3I9XCJuZXctZ3JvdXAtdGFnc1wiPlRhZ3MgZm9yIGRhc2hib2FyZCAoc2luZ2xlLXdvcmRzLCBzZXBhcmF0ZWQgYnkgYSBzaW5nbGUgc3BhY2UpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGQtZ3JvdXAtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImFkZC1ncm91cC1idXR0b24gbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZCBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzZcIj5cbiAgICAgICAgICAgICAgICAgICAgICBBZGQgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibmV3LWdyb3VwLWRpc21pc3MtYnV0dG9uXCIgY2xhc3NOYW1lPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZCBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzZcIj5cbiAgICAgICAgICAgICAgICAgICAgICBEaXNtaXNzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICB7LyogU2hvdyB0aGUgbGlzdCBvZiB1c2VyJ3MgZ3JvdXBzICovfVxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJ1c2VyLWdyb3Vwcy1saXN0XCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pdGVtLWNvbnRhaW5lciBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCIgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgey8qIFNob3cgYSBsaXN0IG9mIHJlY2VudCBncm91cHMgKi99XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWRsLWdyaWQgY29udGVudCBtZGwtdGFic19fcGFuZWxcIiBpZD1cInJlY2VudC1ncm91cHMtbGlzdFwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIHsvKiBTaG93IHRoZSBsaXN0IG9mIHRvcCB1c2VyJ3MgZ3JvdXBzICovfVxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJ0b3AtdXNlci1ncm91cHMtbGlzdFwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIHsvKiBTaG93IHVzZXIgcHJvZmlsZSBzZWN0aW9uICovfVxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJ1c2VyLXByb2ZpbGUtc2VjdGlvblwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIHsvKiBTaG93IHVucmVnaXN0ZXJlZCBkZXZpY2VzIHNlY3Rpb24gKi99XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWRsLWdyaWQgY29udGVudCBtZGwtdGFic19fcGFuZWxcIiBpZD1cInVucmVnaXN0ZXJlZC1kZXZpY2VzLXNlY3Rpb25cIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWl0ZW0tY29udGFpbmVyIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIiAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICB7LyogU2hvdyBoZWxwICovfVxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJoZWxwLXNlY3Rpb25cIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWl0ZW0tY29udGFpbmVyIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIiAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgXHQ8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9sZE1haW47Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBUEE7QUFEQTtBQVZBO0FBMEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE5QkE7QUFtQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUpBO0FBSkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBbEJBO0FBREE7QUFEQTtBQWZBO0FBMkNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwQkE7QUFEQTtBQUpBO0FBRkE7QUFEQTtBQXFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUEzREE7QUFoRkE7QUFKQTtBQXlKQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/src/containers/OldMain.jsx\n");

/***/ })

})