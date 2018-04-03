webpackHotUpdate("main",{

/***/ "./public/src/containers/OldMain.jsx":
/*!*******************************************!*\
  !*** ./public/src/containers/OldMain.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ../../assets/css/main.css */ \"./public/assets/css/main.css\");\n\n__webpack_require__(/*! ../../assets/js/main.js */ \"./public/assets/js/main.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar OldMain = function (_Component) {\n  _inherits(OldMain, _Component);\n\n  function OldMain() {\n    _classCallCheck(this, OldMain);\n\n    return _possibleConstructorReturn(this, (OldMain.__proto__ || Object.getPrototypeOf(OldMain)).apply(this, arguments));\n  }\n\n  _createClass(OldMain, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header xtheme-c3' },\n          _react2.default.createElement(\n            'section',\n            { id: 'page-splash' },\n            _react2.default.createElement('img', { id: 'splash-logo', src: '../../assets/img/dbi2w.png' }),\n            _react2.default.createElement(\n              'div',\n              { id: 'sign-in-wrapper-container', className: 'mdl-card overflow' },\n              _react2.default.createElement(\n                'div',\n                { id: 'sign-in-buttons-container', className: 'xtooltip' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'tooltip overflow' },\n                  _react2.default.createElement(\n                    'span',\n                    { className: 'tooltiptext-bottom' },\n                    'Select button to start signing in ...'\n                  ),\n                  _react2.default.createElement(\n                    'button',\n                    { id: 'sign-in-email-button', className: 'mdl-button--raised mdl-button mdl-js-button mdl-js-ripple-effect' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'account_circle'\n                    ),\n                    ' Sign in with Email'\n                  ),\n                  _react2.default.createElement(\n                    'button',\n                    { hidden: true, id: 'sign-in-google-button', className: 'mdl-button--raised mdl-button mdl-js-button mdl-js-ripple-effect' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'account_circle'\n                    ),\n                    ' Sign in with Google'\n                  )\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                { hidden: true, id: 'sign-in-email-container', className: 'mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop tooltip overflow' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'xmdl-card__supporting-text' },\n                  _react2.default.createElement(\n                    'span',\n                    { className: 'tooltiptext-bottom' },\n                    'Provide email and password to sign in ...'\n                  ),\n                  _react2.default.createElement('input', { hidden: true, name: 'email' }),\n                  _react2.default.createElement('input', { className: 'mdl-textfield__input', style: { display: 'inline', width: 370 }, type: 'email', id: 'email-sign-in-email-textfield', name: 'email', placeholder: ' Email' }),\n                  _react2.default.createElement('input', { className: 'mdl-textfield__input', style: { display: 'inline', width: 'auto' }, type: 'password', id: 'email-sign-in-password-textfield', name: 'password', placeholder: ' Password' }),\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement(\n                    'div',\n                    { id: 'sign-in-buttons' },\n                    _react2.default.createElement(\n                      'button',\n                      { id: 'email-sign-in-submit-button', className: 'mdl-button mdl-js-button mdl-button--raised', name: 'signin' },\n                      'Sign In'\n                    ),\n                    _react2.default.createElement(\n                      'button',\n                      { id: 'email-sign-in-cancel-button', className: 'mdl-button mdl-js-button mdl-button--raised', name: 'cancel-email' },\n                      'CANCEL'\n                    ),\n                    _react2.default.createElement(\n                      'button',\n                      { id: 'email-send-password-reset-button', className: 'mdl-button mdl-js-button mdl-button--raised', name: 'verify-email' },\n                      'Send Password Reset Email'\n                    )\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { id: 'version-container', className: 'version-container' },\n              'Version: 0.9.9'\n            )\n          ),\n          _react2.default.createElement(\n            'header',\n            { className: 'header mdl-layout__header xtheme-c1' },\n            _react2.default.createElement(\n              'div',\n              { className: 'mdl-layout__header-row titlebar' },\n              _react2.default.createElement(\n                'h3',\n                { id: 'header-logo', className: 'tooltip header-logo' },\n                _react2.default.createElement(\n                  'span',\n                  { id: 'header-text' },\n                  'DTIG Data Dashboard'\n                ),\n                _react2.default.createElement(\n                  'span',\n                  { className: 'tooltiptext-bottom' },\n                  '\\xA0',\n                  _react2.default.createElement('br', null),\n                  'Select \\'Dashboards\\' or \\'Help\\' from underneath this bubble or',\n                  _react2.default.createElement('br', null),\n                  'select the avatar in the top right for user profile information',\n                  _react2.default.createElement('br', null),\n                  '\\xA0'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                { id: 'user-container' },\n                _react2.default.createElement(\n                  'div',\n                  { xhidden: true, id: 'userpic', className: 'tooltip top-bar-avatar' },\n                  _react2.default.createElement(\n                    'span',\n                    { className: 'tooltiptext-left' },\n                    'Select avatar for user profile section for user info,',\n                    _react2.default.createElement('br', null),\n                    'additional dashboard control commands and logging out.'\n                  )\n                ),\n                _react2.default.createElement('div', { hidden: true, id: 'username', className: 'top-var-username' })\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'tab mdl-layout__header-row xtheme-c2' },\n              _react2.default.createElement(\n                'div',\n                { className: 'mdl-tabs mdl-js-tabs mdl-js-ripple-effect' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'ilb' },\n                  _react2.default.createElement(\n                    'div',\n                    { xhidden: true, id: 'menu-my-groups', className: 'tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2 is-active' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'dashboard'\n                    ),\n                    'Dashboards',\n                    _react2.default.createElement(\n                      'span',\n                      { className: 'tooltiptext-bottom' },\n                      '\\xA0',\n                      _react2.default.createElement('br', null),\n                      'Display dashboard panels',\n                      _react2.default.createElement('br', null),\n                      '\\xA0'\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { hidden: true, id: 'menu-my-top-groups', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'trending_up'\n                    ),\n                    'My Top Groups'\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { hidden: true, id: 'menu-recent', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'schedule'\n                    ),\n                    'Recent Groups'\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { hidden: true, id: 'menu-show-unregistered', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'screen_lock_portrait'\n                    ),\n                    'Unregistered'\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { xhidden: true, id: 'menu-show-help', className: 'tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'help'\n                    ),\n                    'Help',\n                    _react2.default.createElement(\n                      'span',\n                      { className: 'tooltiptext-bottom' },\n                      '\\xA0',\n                      _react2.default.createElement('br', null),\n                      'Display help panel',\n                      _react2.default.createElement('br', null),\n                      '\\xA0'\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'button',\n                    { hidden: true, id: 'new-group-button', className: 'mdl-button mdl-js-button mdl-button--fab mdl-shadow--4dp mdl-js-ripple-effect xtheme-c6' },\n                    _react2.default.createElement(\n                      'i',\n                      { className: 'material-icons' },\n                      'add'\n                    )\n                  )\n                )\n              )\n            )\n          ),\n          _react2.default.createElement(\n            'main',\n            { className: 'mdl-layout__content' },\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content', id: 'add-group-container', style: { display: 'none' } },\n              _react2.default.createElement(\n                'div',\n                { className: 'mdl-cell mdl-cell--12-col mdl-grid' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--12-col-desktop xtheme-c5' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'mdl-card__title xtheme-c4' },\n                    _react2.default.createElement(\n                      'h2',\n                      { className: 'mdl-card__title-text' },\n                      'New Dashboard'\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'mdl-card__supporting-text' },\n                    _react2.default.createElement(\n                      'form',\n                      { id: 'new-group-form', action: '#' },\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-title mdl-textfield__input', type: 'text', id: 'new-group-title' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-title' },\n                          'Title for dashboard'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-group mdl-textfield__input', type: 'text', id: 'new-group-group' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-group' },\n                          'Identifier for dashboard (ie: the \\'group\\' identifier can be the door value)'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('textarea', { className: 'new-group-message mdl-textfield__input', rows: 3, id: 'new-group-message', defaultValue: \"\" }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-message' },\n                          'Message for dashboard'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-group mdl-textfield__input', type: 'text', id: 'new-group-tags' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-tags' },\n                          'Tags for dashboard (single-words, separated by a single space)'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'button',\n                        { id: 'add-group-button', type: 'submit', className: 'add-group-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6' },\n                        'Add Dashboard'\n                      ),\n                      _react2.default.createElement(\n                        'button',\n                        { id: 'new-group-dismiss-button', className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6' },\n                        'Dismiss'\n                      )\n                    )\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'user-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'recent-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'top-user-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'user-profile-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'unregistered-devices-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'help-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return OldMain;\n}(_react.Component);\n\nexports.default = OldMain;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbnRhaW5lcnMvT2xkTWFpbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcHVibGljL3NyYy9jb250YWluZXJzL09sZE1haW4uanN4P2IxYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4uLy4uL2Fzc2V0cy9qcy9tYWluLmpzJztcblxuY2xhc3MgT2xkTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWxheW91dCBtZGwtbGF5b3V0IG1kbC1qcy1sYXlvdXQgbWRsLWxheW91dC0tZml4ZWQtaGVhZGVyIHh0aGVtZS1jM1wiPlxuICAgICAgICAgIHsvKiBTcGxhc2ggU2NyZWVuICovfVxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwicGFnZS1zcGxhc2hcIj5cbiAgICAgICAgICAgIDxpbWcgaWQ9XCJzcGxhc2gtbG9nb1wiIHNyYz1cIi4uLy4uL2Fzc2V0cy9pbWcvZGJpMncucG5nXCIgLz5cbiAgICAgICAgICAgIHsvKiBzaWduIGluIGl0ZW1zIGNvbnRhaW5lciAqL31cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWduLWluLXdyYXBwZXItY29udGFpbmVyXCIgY2xhc3NOYW1lPVwibWRsLWNhcmQgb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgey8qIHNpZ24gaW4gYnV0dG9ucyBjb250YWluZXIgKi99XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWduLWluLWJ1dHRvbnMtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwieHRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXAgb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXB0ZXh0LWJvdHRvbVwiPlNlbGVjdCBidXR0b24gdG8gc3RhcnQgc2lnbmluZyBpbiAuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2lnbi1pbi1lbWFpbC1idXR0b25cIiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hY2NvdW50X2NpcmNsZTwvaT4gU2lnbiBpbiB3aXRoIEVtYWlsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGhpZGRlbiBpZD1cInNpZ24taW4tZ29vZ2xlLWJ1dHRvblwiIGNsYXNzTmFtZT1cIm1kbC1idXR0b24tLXJhaXNlZCBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFjY291bnRfY2lyY2xlPC9pPiBTaWduIGluIHdpdGggR29vZ2xlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7Lyogc2lnbiBpbiBlbWFpbCBmb3JtIGNvbnRhaW5lciAqL31cbiAgICAgICAgICAgICAgPGRpdiBoaWRkZW4gaWQ9XCJzaWduLWluLWVtYWlsLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cIm1kbC1jYXJkIG1kbC1zaGFkb3ctLThkcCBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1jZWxsLS0xMi1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcCB0b29sdGlwIG92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtYm90dG9tXCI+UHJvdmlkZSBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gc2lnbiBpbiAuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaGlkZGVuIG5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUnLCB3aWR0aDogMzcwfX0gdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbC1zaWduLWluLWVtYWlsLXRleHRmaWVsZFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiIEVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZScsIHdpZHRoOiAnYXV0byd9fSB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImVtYWlsLXNpZ24taW4tcGFzc3dvcmQtdGV4dGZpZWxkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCIgUGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWduLWluLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImVtYWlsLXNpZ24taW4tc3VibWl0LWJ1dHRvblwiIGNsYXNzTmFtZT1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWRcIiBuYW1lPVwic2lnbmluXCI+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZW1haWwtc2lnbi1pbi1jYW5jZWwtYnV0dG9uXCIgY2xhc3NOYW1lPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZFwiIG5hbWU9XCJjYW5jZWwtZW1haWxcIj5DQU5DRUw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImVtYWlsLXNlbmQtcGFzc3dvcmQtcmVzZXQtYnV0dG9uXCIgY2xhc3NOYW1lPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZFwiIG5hbWU9XCJ2ZXJpZnktZW1haWxcIj5TZW5kIFBhc3N3b3JkIFJlc2V0IEVtYWlsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidmVyc2lvbi1jb250YWluZXJcIiBjbGFzc05hbWU9XCJ2ZXJzaW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICBWZXJzaW9uOiAwLjkuOVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIHsvKiBIZWFkZXIgc2VjdGlvbiBjb250YWluaW5nIGxvZ28gYW5kIG1lbnUgKi99XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgbWRsLWxheW91dF9faGVhZGVyIHh0aGVtZS1jMVwiPlxuICAgICAgICAgICAgey8qIEhlYWRlciBSb3cgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1sYXlvdXRfX2hlYWRlci1yb3cgdGl0bGViYXJcIj5cbiAgICAgICAgICAgICAgPGgzIGlkPVwiaGVhZGVyLWxvZ29cIiBjbGFzc05hbWU9XCJ0b29sdGlwIGhlYWRlci1sb2dvXCI+PHNwYW4gaWQ9XCJoZWFkZXItdGV4dFwiPkRUSUcgRGF0YSBEYXNoYm9hcmQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtYm90dG9tXCI+Jm5ic3A7PGJyIC8+U2VsZWN0ICdEYXNoYm9hcmRzJyBvciAnSGVscCcgZnJvbSB1bmRlcm5lYXRoIHRoaXMgYnViYmxlIG9yPGJyIC8+c2VsZWN0IHRoZSBhdmF0YXIgaW4gdGhlIHRvcCByaWdodCBmb3IgdXNlciBwcm9maWxlIGluZm9ybWF0aW9uPGJyIC8+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidXNlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHhoaWRkZW4gaWQ9XCJ1c2VycGljXCIgY2xhc3NOYW1lPVwidG9vbHRpcCB0b3AtYmFyLWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtbGVmdFwiPlNlbGVjdCBhdmF0YXIgZm9yIHVzZXIgcHJvZmlsZSBzZWN0aW9uIGZvciB1c2VyIGluZm8sPGJyIC8+YWRkaXRpb25hbCBkYXNoYm9hcmQgY29udHJvbCBjb21tYW5kcyBhbmQgbG9nZ2luZyBvdXQuPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaGlkZGVuIGlkPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJ0b3AtdmFyLXVzZXJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxidXR0b24gaGlkZGVuIGlkPVwic2lnbi1vdXQtYnV0dG9uXCIgY2xhc3M9XCJtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+U2lnbiBvdXQ8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBCYXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYiBtZGwtbGF5b3V0X19oZWFkZXItcm93IHh0aGVtZS1jMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC10YWJzIG1kbC1qcy10YWJzIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbGJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgeGhpZGRlbiBpZD1cIm1lbnUtbXktZ3JvdXBzXCIgY2xhc3NOYW1lPVwidG9vbHRpcCBvdmVyZmxvdyBtZGwtdGFic19fdGFiIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzIgaXMtYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZGFzaGJvYXJkPC9pPkRhc2hib2FyZHNcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtYm90dG9tXCI+Jm5ic3A7PGJyIC8+RGlzcGxheSBkYXNoYm9hcmQgcGFuZWxzPGJyIC8+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGhpZGRlbiBpZD1cIm1lbnUtbXktdG9wLWdyb3Vwc1wiIGNsYXNzTmFtZT1cIm1kbC10YWJzX190YWIgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnRyZW5kaW5nX3VwPC9pPk15IFRvcCBHcm91cHNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBoaWRkZW4gaWQ9XCJtZW51LXJlY2VudFwiIGNsYXNzTmFtZT1cIm1kbC10YWJzX190YWIgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNjaGVkdWxlPC9pPlJlY2VudCBHcm91cHNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBoaWRkZW4gaWQ9XCJtZW51LXNob3ctdW5yZWdpc3RlcmVkXCIgY2xhc3NOYW1lPVwibWRsLXRhYnNfX3RhYiBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgeHRoZW1lLWMyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2NyZWVuX2xvY2tfcG9ydHJhaXQ8L2k+VW5yZWdpc3RlcmVkXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgeGhpZGRlbiBpZD1cIm1lbnUtc2hvdy1oZWxwXCIgY2xhc3NOYW1lPVwidG9vbHRpcCBvdmVyZmxvdyBtZGwtdGFic19fdGFiIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwPC9pPkhlbHBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtYm90dG9tXCI+Jm5ic3A7PGJyIC8+RGlzcGxheSBoZWxwIHBhbmVsPGJyIC8+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGhpZGRlbiBpZD1cIm5ldy1ncm91cC1idXR0b25cIiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tZmFiIG1kbC1zaGFkb3ctLTRkcCBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L2k+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICB7LyogTWFpbiBBcHBsaWNhdGlvbiBBcmVhICovfVxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1kbC1sYXlvdXRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIHsvKiBTaG93IHRoZSBhZGQgZ3JvdXAgZm9ybSAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnRcIiBpZD1cImFkZC1ncm91cC1jb250YWluZXJcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIj5cbiAgICAgICAgICAgICAgICB7LyogQ2FyZCBjb250YWluaW5nIHRoZSBpbnB1dHMgdG8gYWRkIGEgbmV3IG1lc3NhZ2VzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLWNhcmQgbWRsLXNoYWRvdy0tOGRwIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWNlbGwtLTgtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3AgeHRoZW1lLWM1XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1jYXJkX190aXRsZSB4dGhlbWUtYzRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+TmV3IERhc2hib2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cIm5ldy1ncm91cC1mb3JtXCIgYWN0aW9uPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibmV3LWdyb3VwLXRpdGxlIG1kbC10ZXh0ZmllbGRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cIm5ldy1ncm91cC10aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBodG1sRm9yPVwibmV3LWdyb3VwLXRpdGxlXCI+VGl0bGUgZm9yIGRhc2hib2FyZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJuZXctZ3JvdXAtZ3JvdXAgbWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwibmV3LWdyb3VwLWdyb3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGh0bWxGb3I9XCJuZXctZ3JvdXAtZ3JvdXBcIj5JZGVudGlmaWVyIGZvciBkYXNoYm9hcmQgKGllOiB0aGUgJ2dyb3VwJyBpZGVudGlmaWVyIGNhbiBiZSB0aGUgZG9vciB2YWx1ZSk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwibmV3LWdyb3VwLW1lc3NhZ2UgbWRsLXRleHRmaWVsZF9faW5wdXRcIiByb3dzPXszfSBpZD1cIm5ldy1ncm91cC1tZXNzYWdlXCIgZGVmYXVsdFZhbHVlPXtcIlwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCIgaHRtbEZvcj1cIm5ldy1ncm91cC1tZXNzYWdlXCI+TWVzc2FnZSBmb3IgZGFzaGJvYXJkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm5ldy1ncm91cC1ncm91cCBtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXctZ3JvdXAtdGFnc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBodG1sRm9yPVwibmV3LWdyb3VwLXRhZ3NcIj5UYWdzIGZvciBkYXNoYm9hcmQgKHNpbmdsZS13b3Jkcywgc2VwYXJhdGVkIGJ5IGEgc2luZ2xlIHNwYWNlKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFkZC1ncm91cC1idXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYWRkLWdyb3VwLWJ1dHRvbiBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJuZXctZ3JvdXAtZGlzbWlzcy1idXR0b25cIiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzbWlzc1xuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICB7LyogU2hvdyB0aGUgbGlzdCBvZiB1c2VyJ3MgZ3JvdXBzICovfVxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWRsLWdyaWQgY29udGVudCBtZGwtdGFic19fcGFuZWxcIiBpZD1cInVzZXItZ3JvdXBzLWxpc3RcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICB7LyogU2hvdyBhIGxpc3Qgb2YgcmVjZW50IGdyb3VwcyAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJyZWNlbnQtZ3JvdXBzLWxpc3RcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICB7LyogU2hvdyB0aGUgbGlzdCBvZiB0b3AgdXNlcidzIGdyb3VwcyAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJ0b3AtdXNlci1ncm91cHMtbGlzdFwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pdGVtLWNvbnRhaW5lciBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCIgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIHsvKiBTaG93IHVzZXIgcHJvZmlsZSBzZWN0aW9uICovfVxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWRsLWdyaWQgY29udGVudCBtZGwtdGFic19fcGFuZWxcIiBpZD1cInVzZXItcHJvZmlsZS1zZWN0aW9uXCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWl0ZW0tY29udGFpbmVyIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIiAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgey8qIFNob3cgdW5yZWdpc3RlcmVkIGRldmljZXMgc2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJ1bnJlZ2lzdGVyZWQtZGV2aWNlcy1zZWN0aW9uXCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWl0ZW0tY29udGFpbmVyIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIiAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgey8qIFNob3cgaGVscCAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJoZWxwLXNlY3Rpb25cIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2xkTWFpbjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBUEE7QUFEQTtBQVZBO0FBMEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE3QkE7QUFrQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUpBO0FBSkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBbEJBO0FBREE7QUFEQTtBQWZBO0FBMkNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwQkE7QUFEQTtBQUpBO0FBRkE7QUFEQTtBQXFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUEzREE7QUEvRUE7QUFEQTtBQXFKQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/src/containers/OldMain.jsx\n");

/***/ })

})