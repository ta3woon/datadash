webpackHotUpdate("main",{

/***/ "./public/src/containers/OldMain.jsx":
/*!*******************************************!*\
  !*** ./public/src/containers/OldMain.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\n__webpack_require__(/*! ../../assets/css/main/main.css */ \"./public/assets/css/main/main.css\");\n\n__webpack_require__(/*! ../../assets/js/main.js */ \"./public/assets/js/main.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import SignIn from '../components/SignIn'\n\n\nvar HeaderRow = function HeaderRow() {\n  return _react2.default.createElement(\n    'div',\n    { className: '' },\n    _react2.default.createElement(\n      'div',\n      { id: 'user-container' },\n      _react2.default.createElement(\n        'div',\n        { className: 'account-info' },\n        _react2.default.createElement(\n          'div',\n          { id: 'userpic', className: 'tooltip top-bar-avatar' },\n          _react2.default.createElement(\n            'span',\n            { className: 'tooltiptext-right' },\n            'Select avatar for user profile section for user info,',\n            _react2.default.createElement('br', null),\n            'additional dashboard control commands and logging out.'\n          )\n        ),\n        _react2.default.createElement('div', { id: 'username', className: 'top-var-username' })\n      ),\n      _react2.default.createElement(\n        'button',\n        { id: 'sign-out-button', className: '' },\n        'Sign out'\n      )\n    )\n  );\n};\n\nvar NavigationBar = function NavigationBar() {\n  return _react2.default.createElement(\n    'div',\n    { className: 'tab mdl-layout__header-row xtheme-c2' },\n    _react2.default.createElement(\n      'div',\n      { className: 'mdl-tabs mdl-js-tabs mdl-js-ripple-effect' },\n      _react2.default.createElement(\n        'div',\n        { className: 'ilb' },\n        _react2.default.createElement(\n          'div',\n          { xhidden: true, id: 'menu-my-groups', className: 'tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2 is-active' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'dashboard'\n          ),\n          'Dashboards',\n          _react2.default.createElement(\n            'span',\n            { className: 'tooltiptext-bottom' },\n            '\\xA0',\n            _react2.default.createElement('br', null),\n            'Display dashboard panels',\n            _react2.default.createElement('br', null),\n            '\\xA0'\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { hidden: true, id: 'menu-my-top-groups', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'trending_up'\n          ),\n          'My Top Groups'\n        ),\n        _react2.default.createElement(\n          'div',\n          { hidden: true, id: 'menu-recent', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'schedule'\n          ),\n          'Recent Groups'\n        ),\n        _react2.default.createElement(\n          'div',\n          { hidden: true, id: 'menu-show-unregistered', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'screen_lock_portrait'\n          ),\n          'Unregistered'\n        ),\n        _react2.default.createElement(\n          'div',\n          { xhidden: true, id: 'menu-show-help', className: 'tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'help'\n          ),\n          'Help',\n          _react2.default.createElement(\n            'span',\n            { className: 'tooltiptext-bottom' },\n            '\\xA0',\n            _react2.default.createElement('br', null),\n            'Display help panel',\n            _react2.default.createElement('br', null),\n            '\\xA0'\n          )\n        ),\n        _react2.default.createElement(\n          'button',\n          { hidden: true, id: 'new-group-button', className: 'mdl-button mdl-js-button mdl-button--fab mdl-shadow--4dp mdl-js-ripple-effect xtheme-c6' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'add'\n          )\n        )\n      )\n    )\n  );\n};\n\nvar LoginDiv = function LoginDiv(props) {\n  return _react2.default.createElement(\n    'div',\n    { id: 'sign-in-wrapper-container', className: 'mdl-card overflow' },\n    _react2.default.createElement(\n      'div',\n      { id: 'sign-in-buttons-container', className: 'xtooltip' },\n      _react2.default.createElement(\n        'div',\n        { className: 'tooltip overflow' },\n        _react2.default.createElement(\n          'span',\n          { className: 'tooltiptext-bottom' },\n          'Select button to start signing in ...'\n        ),\n        _react2.default.createElement(\n          'button',\n          { id: 'sign-in-email-button', className: 'mdl-button--raised mdl-button mdl-js-button mdl-js-ripple-effect' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'account_circle'\n          ),\n          ' Sign in with Email'\n        ),\n        _react2.default.createElement(\n          'button',\n          { hidden: true, id: 'sign-in-google-button', className: 'mdl-button--raised mdl-button mdl-js-button mdl-js-ripple-effect' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'account_circle'\n          ),\n          ' Sign in with Google'\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { hidden: true, id: 'sign-in-email-container', className: 'mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop tooltip overflow' },\n      _react2.default.createElement(\n        'div',\n        { className: 'xmdl-card__supporting-text' },\n        _react2.default.createElement(\n          'span',\n          { className: 'tooltiptext-bottom' },\n          'Provide email and password to sign in ...'\n        ),\n        _react2.default.createElement('input', { hidden: true, name: 'email' }),\n        _react2.default.createElement('input', { className: 'mdl-textfield__input', style: { display: 'inline', width: 370 }, type: 'email', id: 'email-sign-in-email-textfield', name: 'email', placeholder: ' Email' }),\n        _react2.default.createElement('input', { className: 'mdl-textfield__input', style: { display: 'inline', width: 'auto' }, type: 'password', id: 'email-sign-in-password-textfield', name: 'password', placeholder: ' Password' }),\n        _react2.default.createElement(\n          'div',\n          { id: 'sign-in-buttons' },\n          _react2.default.createElement(\n            'button',\n            { id: 'email-sign-in-submit-button', className: 'mdl-button mdl-js-button mdl-button--raised', name: 'signin' },\n            'Sign In'\n          ),\n          _react2.default.createElement(\n            'button',\n            { id: 'email-sign-in-cancel-button', className: 'mdl-button mdl-js-button mdl-button--raised', name: 'cancel-email' },\n            'CANCEL'\n          ),\n          _react2.default.createElement(\n            'button',\n            { id: 'email-send-password-reset-button', className: 'mdl-button mdl-js-button mdl-button--raised', name: 'verify-email' },\n            'Send Password Reset Email'\n          )\n        )\n      )\n    )\n  );\n};\n\nvar OldMain = function (_React$Component) {\n  _inherits(OldMain, _React$Component);\n\n  function OldMain(props) {\n    _classCallCheck(this, OldMain);\n\n    return _possibleConstructorReturn(this, (OldMain.__proto__ || Object.getPrototypeOf(OldMain)).call(this, props));\n  }\n\n  _createClass(OldMain, [{\n    key: 'render',\n    value: function render() {\n      // console.log(this.props)\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header xtheme-c3' },\n          _react2.default.createElement(\n            'header',\n            { className: 'header mdl-layout__header xtheme-c1' },\n            _react2.default.createElement(HeaderRow, null),\n            _react2.default.createElement(NavigationBar, null)\n          ),\n          _react2.default.createElement(\n            'section',\n            { id: 'page-splash' },\n            _react2.default.createElement('img', { id: 'splash-logo', src: '../../assets/img/dbi2w.png' }),\n            _react2.default.createElement(SignIn, null),\n            _react2.default.createElement(\n              'div',\n              { id: 'version-container', className: 'version-container' },\n              'Version: 0.9.9'\n            )\n          ),\n          _react2.default.createElement(\n            'main',\n            { className: 'mdl-layout__content' },\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content', id: 'add-group-container', style: { display: 'none' } },\n              _react2.default.createElement(\n                'div',\n                { className: 'mdl-cell mdl-cell--12-col mdl-grid' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--12-col-desktop xtheme-c5' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'mdl-card__title xtheme-c4' },\n                    _react2.default.createElement(\n                      'h2',\n                      { className: 'mdl-card__title-text' },\n                      'New Dashboard'\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'mdl-card__supporting-text' },\n                    _react2.default.createElement(\n                      'form',\n                      { id: 'new-group-form', action: '#' },\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-title mdl-textfield__input', type: 'text', id: 'new-group-title' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-title' },\n                          'Title for dashboard'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-group mdl-textfield__input', type: 'text', id: 'new-group-group' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-group' },\n                          'Identifier for dashboard (ie: the \\'group\\' identifier can be the door value)'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('textarea', { className: 'new-group-message mdl-textfield__input', rows: 3, id: 'new-group-message', defaultValue: \"\" }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-message' },\n                          'Message for dashboard'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-group mdl-textfield__input', type: 'text', id: 'new-group-tags' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-tags' },\n                          'Tags for dashboard (single-words, separated by a single space)'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'button',\n                        { id: 'add-group-button', type: 'submit', className: 'add-group-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6' },\n                        'Add Dashboard'\n                      ),\n                      _react2.default.createElement(\n                        'button',\n                        { id: 'new-group-dismiss-button', className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6' },\n                        'Dismiss'\n                      )\n                    )\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'user-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'recent-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'top-user-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'user-profile-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'unregistered-devices-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'help-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return OldMain;\n}(_react2.default.Component);\n\nexports.default = OldMain;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbnRhaW5lcnMvT2xkTWFpbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcHVibGljL3NyYy9jb250YWluZXJzL09sZE1haW4uanN4P2IxYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLy8gaW1wb3J0IFNpZ25JbiBmcm9tICcuLi9jb21wb25lbnRzL1NpZ25JbidcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9tYWluL21haW4uY3NzJztcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2pzL21haW4uanMnO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSZXNwb25zaXZlXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5jb25zdCBIZWFkZXJSb3cgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxkaXYgaWQ9XCJ1c2VyLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtaW5mb1wiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJ1c2VycGljXCIgY2xhc3NOYW1lPVwidG9vbHRpcCB0b3AtYmFyLWF2YXRhclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtcmlnaHRcIj5TZWxlY3QgYXZhdGFyIGZvciB1c2VyIHByb2ZpbGUgc2VjdGlvbiBmb3IgdXNlciBpbmZvLDxiciAvPmFkZGl0aW9uYWwgZGFzaGJvYXJkIGNvbnRyb2wgY29tbWFuZHMgYW5kIGxvZ2dpbmcgb3V0Ljwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJ0b3AtdmFyLXVzZXJuYW1lXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gaWQ9XCJzaWduLW91dC1idXR0b25cIiBjbGFzc05hbWU9XCJcIj5TaWduIG91dDwvYnV0dG9uPiBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBOYXZpZ2F0aW9uQmFyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiIG1kbC1sYXlvdXRfX2hlYWRlci1yb3cgeHRoZW1lLWMyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC10YWJzIG1kbC1qcy10YWJzIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWxiXCI+XG4gICAgICAgICAgPGRpdiB4aGlkZGVuIGlkPVwibWVudS1teS1ncm91cHNcIiBjbGFzc05hbWU9XCJ0b29sdGlwIG92ZXJmbG93IG1kbC10YWJzX190YWIgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jMiBpcy1hY3RpdmVcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZGFzaGJvYXJkPC9pPkRhc2hib2FyZHNcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXB0ZXh0LWJvdHRvbVwiPiZuYnNwOzxiciAvPkRpc3BsYXkgZGFzaGJvYXJkIHBhbmVsczxiciAvPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGhpZGRlbiBpZD1cIm1lbnUtbXktdG9wLWdyb3Vwc1wiIGNsYXNzTmFtZT1cIm1kbC10YWJzX190YWIgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jMlwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj50cmVuZGluZ191cDwvaT5NeSBUb3AgR3JvdXBzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBoaWRkZW4gaWQ9XCJtZW51LXJlY2VudFwiIGNsYXNzTmFtZT1cIm1kbC10YWJzX190YWIgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jMlwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zY2hlZHVsZTwvaT5SZWNlbnQgR3JvdXBzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBoaWRkZW4gaWQ9XCJtZW51LXNob3ctdW5yZWdpc3RlcmVkXCIgY2xhc3NOYW1lPVwibWRsLXRhYnNfX3RhYiBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgeHRoZW1lLWMyXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNjcmVlbl9sb2NrX3BvcnRyYWl0PC9pPlVucmVnaXN0ZXJlZFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgeGhpZGRlbiBpZD1cIm1lbnUtc2hvdy1oZWxwXCIgY2xhc3NOYW1lPVwidG9vbHRpcCBvdmVyZmxvdyBtZGwtdGFic19fdGFiIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzJcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+aGVscDwvaT5IZWxwXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dC1ib3R0b21cIj4mbmJzcDs8YnIgLz5EaXNwbGF5IGhlbHAgcGFuZWw8YnIgLz4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBoaWRkZW4gaWQ9XCJuZXctZ3JvdXAtYnV0dG9uXCIgY2xhc3NOYW1lPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWZhYiBtZGwtc2hhZG93LS00ZHAgbWRsLWpzLXJpcHBsZS1lZmZlY3QgeHRoZW1lLWM2XCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgTG9naW5EaXYgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwic2lnbi1pbi13cmFwcGVyLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cIm1kbC1jYXJkIG92ZXJmbG93XCI+XG5cbiAgICAgIDxkaXYgaWQ9XCJzaWduLWluLWJ1dHRvbnMtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwieHRvb2x0aXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwIG92ZXJmbG93XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtYm90dG9tXCI+U2VsZWN0IGJ1dHRvbiB0byBzdGFydCBzaWduaW5nIGluIC4uLjwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwic2lnbi1pbi1lbWFpbC1idXR0b25cIiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hY2NvdW50X2NpcmNsZTwvaT4gU2lnbiBpbiB3aXRoIEVtYWlsPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBoaWRkZW4gaWQ9XCJzaWduLWluLWdvb2dsZS1idXR0b25cIiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hY2NvdW50X2NpcmNsZTwvaT4gU2lnbiBpbiB3aXRoIEdvb2dsZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGhpZGRlbiBpZD1cInNpZ24taW4tZW1haWwtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwibWRsLWNhcmQgbWRsLXNoYWRvdy0tOGRwIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWNlbGwtLTEyLWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wIHRvb2x0aXAgb3ZlcmZsb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXB0ZXh0LWJvdHRvbVwiPlByb3ZpZGUgZW1haWwgYW5kIHBhc3N3b3JkIHRvIHNpZ24gaW4gLi4uPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCBoaWRkZW4gbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUnLCB3aWR0aDogMzcwfX0gdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbC1zaWduLWluLWVtYWlsLXRleHRmaWVsZFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiIEVtYWlsXCIgLz5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUnLCB3aWR0aDogJ2F1dG8nfX0gdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJlbWFpbC1zaWduLWluLXBhc3N3b3JkLXRleHRmaWVsZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiIFBhc3N3b3JkXCIgLz5cblxuICAgICAgICAgIDxkaXYgaWQ9XCJzaWduLWluLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJlbWFpbC1zaWduLWluLXN1Ym1pdC1idXR0b25cIiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkXCIgbmFtZT1cInNpZ25pblwiPlNpZ24gSW48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJlbWFpbC1zaWduLWluLWNhbmNlbC1idXR0b25cIiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkXCIgbmFtZT1cImNhbmNlbC1lbWFpbFwiPkNBTkNFTDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImVtYWlsLXNlbmQtcGFzc3dvcmQtcmVzZXQtYnV0dG9uXCIgY2xhc3NOYW1lPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZFwiIG5hbWU9XCJ2ZXJpZnktZW1haWxcIj5TZW5kIFBhc3N3b3JkIFJlc2V0IEVtYWlsPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+IFxuXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNsYXNzIE9sZE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWxheW91dCBtZGwtbGF5b3V0IG1kbC1qcy1sYXlvdXQgbWRsLWxheW91dC0tZml4ZWQtaGVhZGVyIHh0aGVtZS1jM1wiPlxuXG4gICAgICAgICAgeyAvKiBTUExBU0ggU0NSRUVOICovIH1cblxuICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyIG1kbC1sYXlvdXRfX2hlYWRlciB4dGhlbWUtYzFcIj5cbiAgICAgICAgICAgIDxIZWFkZXJSb3cgLz5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIC8+XG4gICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICA8c2VjdGlvbiBpZD1cInBhZ2Utc3BsYXNoXCI+XG4gICAgICAgICAgICA8aW1nIGlkPVwic3BsYXNoLWxvZ29cIiBzcmM9XCIuLi8uLi9hc3NldHMvaW1nL2RiaTJ3LnBuZ1wiIC8+XG4gICAgICAgICAgICA8U2lnbkluIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidmVyc2lvbi1jb250YWluZXJcIiBjbGFzc05hbWU9XCJ2ZXJzaW9uLWNvbnRhaW5lclwiPlZlcnNpb246IDAuOS45PC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgey8qIE1haW4gQXBwbGljYXRpb24gQXJlYSAqL31cblxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1kbC1sYXlvdXRfX2NvbnRlbnRcIj5cblxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZGwtZ3JpZCBjb250ZW50XCIgaWQ9XCJhZGQtZ3JvdXAtY29udGFpbmVyXCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIj5cbiAgICAgICAgICAgICAgICB7LyogQ2FyZCBjb250YWluaW5nIHRoZSBpbnB1dHMgdG8gYWRkIGEgbmV3IG1lc3NhZ2VzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLWNhcmQgbWRsLXNoYWRvdy0tOGRwIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWNlbGwtLTgtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3AgeHRoZW1lLWM1XCI+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLWNhcmRfX3RpdGxlIHh0aGVtZS1jNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWRsLWNhcmRfX3RpdGxlLXRleHRcIj5OZXcgRGFzaGJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cIm5ldy1ncm91cC1mb3JtXCIgYWN0aW9uPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibmV3LWdyb3VwLXRpdGxlIG1kbC10ZXh0ZmllbGRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cIm5ldy1ncm91cC10aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBodG1sRm9yPVwibmV3LWdyb3VwLXRpdGxlXCI+VGl0bGUgZm9yIGRhc2hib2FyZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJuZXctZ3JvdXAtZ3JvdXAgbWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwibmV3LWdyb3VwLWdyb3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGh0bWxGb3I9XCJuZXctZ3JvdXAtZ3JvdXBcIj5JZGVudGlmaWVyIGZvciBkYXNoYm9hcmQgKGllOiB0aGUgJ2dyb3VwJyBpZGVudGlmaWVyIGNhbiBiZSB0aGUgZG9vciB2YWx1ZSk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwibmV3LWdyb3VwLW1lc3NhZ2UgbWRsLXRleHRmaWVsZF9faW5wdXRcIiByb3dzPXszfSBpZD1cIm5ldy1ncm91cC1tZXNzYWdlXCIgZGVmYXVsdFZhbHVlPXtcIlwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCIgaHRtbEZvcj1cIm5ldy1ncm91cC1tZXNzYWdlXCI+TWVzc2FnZSBmb3IgZGFzaGJvYXJkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm5ldy1ncm91cC1ncm91cCBtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXctZ3JvdXAtdGFnc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBodG1sRm9yPVwibmV3LWdyb3VwLXRhZ3NcIj5UYWdzIGZvciBkYXNoYm9hcmQgKHNpbmdsZS13b3Jkcywgc2VwYXJhdGVkIGJ5IGEgc2luZ2xlIHNwYWNlKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFkZC1ncm91cC1idXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYWRkLWdyb3VwLWJ1dHRvbiBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJuZXctZ3JvdXAtZGlzbWlzcy1idXR0b25cIiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzbWlzc1xuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgey8qIFNob3cgdGhlIGxpc3Qgb2YgdXNlcidzIGdyb3VwcyAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJ1c2VyLWdyb3Vwcy1saXN0XCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWl0ZW0tY29udGFpbmVyIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIiAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogU2hvdyBhIGxpc3Qgb2YgcmVjZW50IGdyb3VwcyAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJyZWNlbnQtZ3JvdXBzLWxpc3RcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIHsvKiBTaG93IHRoZSBsaXN0IG9mIHRvcCB1c2VyJ3MgZ3JvdXBzICovfVxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWRsLWdyaWQgY29udGVudCBtZGwtdGFic19fcGFuZWxcIiBpZD1cInRvcC11c2VyLWdyb3Vwcy1saXN0XCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWl0ZW0tY29udGFpbmVyIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIiAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogU2hvdyB1c2VyIHByb2ZpbGUgc2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJ1c2VyLXByb2ZpbGUtc2VjdGlvblwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pdGVtLWNvbnRhaW5lciBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCIgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgey8qIFNob3cgdW5yZWdpc3RlcmVkIGRldmljZXMgc2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJ1bnJlZ2lzdGVyZWQtZGV2aWNlcy1zZWN0aW9uXCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWl0ZW0tY29udGFpbmVyIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIiAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogU2hvdyBoZWxwICovfVxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWRsLWdyaWQgY29udGVudCBtZGwtdGFic19fcGFuZWxcIiBpZD1cImhlbHAtc2VjdGlvblwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pdGVtLWNvbnRhaW5lciBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCIgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPbGRNYWluOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFKQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBbEJBO0FBREE7QUFEQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFOQTtBQURBO0FBVkE7QUEyQkE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFRQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcEJBO0FBRkE7QUFOQTtBQUZBO0FBRkE7QUEyQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBdkVBO0FBakJBO0FBREE7QUFtR0E7Ozs7QUE3R0E7QUFDQTtBQStHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/containers/OldMain.jsx\n");

/***/ })

})