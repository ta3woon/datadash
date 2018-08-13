webpackHotUpdate("main",{

/***/ "./public/src/containers/OldMain.jsx":
/*!*******************************************!*\
  !*** ./public/src/containers/OldMain.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _SignIn = __webpack_require__(/*! ../components/authentication/SignIn */ \"./public/src/components/authentication/SignIn.jsx\");\n\nvar _SignIn2 = _interopRequireDefault(_SignIn);\n\n__webpack_require__(/*! ../../assets/css/main/main.css */ \"./public/assets/css/main/main.css\");\n\n__webpack_require__(/*! ../../assets/js/main.js */ \"./public/assets/js/main.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import SignIn from '../components/SignIn'\n\n\nvar HeaderRow = function HeaderRow() {\n  return _react2.default.createElement(\n    'div',\n    { className: '' },\n    _react2.default.createElement(\n      'div',\n      { id: 'user-container' },\n      _react2.default.createElement(\n        'div',\n        { className: 'account-info' },\n        _react2.default.createElement(\n          'div',\n          { id: 'userpic', className: 'tooltip top-bar-avatar' },\n          _react2.default.createElement(\n            'span',\n            { className: 'tooltiptext-right' },\n            'Select avatar for user profile section for user info,',\n            _react2.default.createElement('br', null),\n            'additional dashboard control commands and logging out.'\n          )\n        ),\n        _react2.default.createElement('div', { id: 'username', className: 'top-var-username' })\n      ),\n      _react2.default.createElement(\n        'button',\n        { id: 'sign-out-button', className: '' },\n        'Sign out'\n      )\n    )\n  );\n};\n\nvar NavigationBar = function NavigationBar() {\n  return _react2.default.createElement(\n    'div',\n    { className: 'tab mdl-layout__header-row xtheme-c2' },\n    _react2.default.createElement(\n      'div',\n      { className: 'mdl-tabs mdl-js-tabs mdl-js-ripple-effect' },\n      _react2.default.createElement(\n        'div',\n        { className: 'ilb' },\n        _react2.default.createElement(\n          'div',\n          { xhidden: true, id: 'menu-my-groups', className: 'tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2 is-active' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'dashboard'\n          ),\n          'Dashboards',\n          _react2.default.createElement(\n            'span',\n            { className: 'tooltiptext-bottom' },\n            '\\xA0',\n            _react2.default.createElement('br', null),\n            'Display dashboard panels',\n            _react2.default.createElement('br', null),\n            '\\xA0'\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { hidden: true, id: 'menu-my-top-groups', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'trending_up'\n          ),\n          'My Top Groups'\n        ),\n        _react2.default.createElement(\n          'div',\n          { hidden: true, id: 'menu-recent', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'schedule'\n          ),\n          'Recent Groups'\n        ),\n        _react2.default.createElement(\n          'div',\n          { hidden: true, id: 'menu-show-unregistered', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'screen_lock_portrait'\n          ),\n          'Unregistered'\n        ),\n        _react2.default.createElement(\n          'div',\n          { xhidden: true, id: 'menu-show-help', className: 'tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'help'\n          ),\n          'Help',\n          _react2.default.createElement(\n            'span',\n            { className: 'tooltiptext-bottom' },\n            '\\xA0',\n            _react2.default.createElement('br', null),\n            'Display help panel',\n            _react2.default.createElement('br', null),\n            '\\xA0'\n          )\n        ),\n        _react2.default.createElement(\n          'button',\n          { hidden: true, id: 'new-group-button', className: 'mdl-button mdl-js-button mdl-button--fab mdl-shadow--4dp mdl-js-ripple-effect xtheme-c6' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'add'\n          )\n        )\n      )\n    )\n  );\n};\n\nvar LoginDiv = function LoginDiv(props) {\n  return _react2.default.createElement(\n    'div',\n    { id: 'sign-in-wrapper-container', className: 'mdl-card overflow' },\n    _react2.default.createElement(\n      'div',\n      { id: 'sign-in-buttons-container', className: 'xtooltip' },\n      _react2.default.createElement(\n        'div',\n        { className: 'tooltip overflow' },\n        _react2.default.createElement(\n          'span',\n          { className: 'tooltiptext-bottom' },\n          'Select button to start signing in ...'\n        ),\n        _react2.default.createElement(\n          'button',\n          { id: 'sign-in-email-button', className: 'mdl-button--raised mdl-button mdl-js-button mdl-js-ripple-effect' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'account_circle'\n          ),\n          ' Sign in with Email'\n        ),\n        _react2.default.createElement(\n          'button',\n          { hidden: true, id: 'sign-in-google-button', className: 'mdl-button--raised mdl-button mdl-js-button mdl-js-ripple-effect' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'account_circle'\n          ),\n          ' Sign in with Google'\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { hidden: true, id: 'sign-in-email-container', className: 'mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop tooltip overflow' },\n      _react2.default.createElement(\n        'div',\n        { className: 'xmdl-card__supporting-text' },\n        _react2.default.createElement(\n          'span',\n          { className: 'tooltiptext-bottom' },\n          'Provide email and password to sign in ...'\n        ),\n        _react2.default.createElement('input', { hidden: true, name: 'email' }),\n        _react2.default.createElement('input', { className: 'mdl-textfield__input', style: { display: 'inline', width: 370 }, type: 'email', id: 'email-sign-in-email-textfield', name: 'email', placeholder: ' Email' }),\n        _react2.default.createElement('input', { className: 'mdl-textfield__input', style: { display: 'inline', width: 'auto' }, type: 'password', id: 'email-sign-in-password-textfield', name: 'password', placeholder: ' Password' }),\n        _react2.default.createElement(\n          'div',\n          { id: 'sign-in-buttons' },\n          _react2.default.createElement(\n            'button',\n            { id: 'email-sign-in-submit-button', className: 'mdl-button mdl-js-button mdl-button--raised', name: 'signin' },\n            'Sign In'\n          ),\n          _react2.default.createElement(\n            'button',\n            { id: 'email-sign-in-cancel-button', className: 'mdl-button mdl-js-button mdl-button--raised', name: 'cancel-email' },\n            'CANCEL'\n          ),\n          _react2.default.createElement(\n            'button',\n            { id: 'email-send-password-reset-button', className: 'mdl-button mdl-js-button mdl-button--raised', name: 'verify-email' },\n            'Send Password Reset Email'\n          )\n        )\n      )\n    )\n  );\n};\n\n// const ContentArea = () => {          \n// <main className=\"mdl-layout__content\">\n\n\n//   <section className=\"mdl-grid content\" id=\"add-group-container\" style={{display: 'none'}}>\n\n//     <div className=\"mdl-cell mdl-cell--12-col mdl-grid\">\n//       {/* Card containing the inputs to add a new messages */}\n//       <div className=\"mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--12-col-desktop xtheme-c5\">\n\n//         <div className=\"mdl-card__title xtheme-c4\">\n//           <h2 className=\"mdl-card__title-text\">New Dashboard</h2>\n//         </div>\n\n//         <div className=\"mdl-card__supporting-text\">\n\n//           <form id=\"new-group-form\" action=\"#\">\n//             <div className=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n//               <input className=\"new-group-title mdl-textfield__input\" type=\"text\" id=\"new-group-title\" />\n//               <label className=\"mdl-textfield__label\" htmlFor=\"new-group-title\">Title for dashboard</label>\n//             </div>\n//             <div className=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n//               <input className=\"new-group-group mdl-textfield__input\" type=\"text\" id=\"new-group-group\" />\n//               <label className=\"mdl-textfield__label\" htmlFor=\"new-group-group\">Identifier for dashboard (ie: the 'group' identifier can be the door value)</label>\n//             </div>\n//             <div className=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n//               <textarea className=\"new-group-message mdl-textfield__input\" rows={3} id=\"new-group-message\" defaultValue={\"\"} />\n//               <label className=\"mdl-textfield__label\" htmlFor=\"new-group-message\">Message for dashboard</label>\n//             </div>\n//             <div className=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n//               <input className=\"new-group-group mdl-textfield__input\" type=\"text\" id=\"new-group-tags\" />\n//               <label className=\"mdl-textfield__label\" htmlFor=\"new-group-tags\">Tags for dashboard (single-words, separated by a single space)</label>\n//             </div>\n//             <button id=\"add-group-button\" type=\"submit\" className=\"add-group-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6\">\n//               Add Dashboard\n//             </button>\n//             <button id=\"new-group-dismiss-button\" className=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6\">\n//               Dismiss\n//             </button>\n//           </form>\n//         </div>\n\n//       </div>\n//     </div>\n//   </section>\n\n//   {/* Show the list of user's groups */}\n//   <section className=\"mdl-grid content mdl-tabs__panel\" id=\"user-groups-list\" style={{display: 'none'}}>\n//     <div className=\"content-item-container mdl-cell mdl-cell--12-col mdl-grid\" />\n//   </section>\n\n//   {/* Show a list of recent groups */}\n//   <section className=\"mdl-grid content mdl-tabs__panel\" id=\"recent-groups-list\" style={{display: 'none'}}>\n//     <div className=\"content-item-container mdl-cell mdl-cell--12-col mdl-grid\" />\n//   </section>\n\n//   {/* Show the list of top user's groups */}\n//   <section className=\"mdl-grid content mdl-tabs__panel\" id=\"top-user-groups-list\" style={{display: 'none'}}>\n//     <div className=\"content-item-container mdl-cell mdl-cell--12-col mdl-grid\" />\n//   </section>\n\n//   {/* Show user profile section */}\n//   <section className=\"mdl-grid content mdl-tabs__panel\" id=\"user-profile-section\" style={{display: 'none'}}>\n//     <div className=\"content-item-container mdl-cell mdl-cell--12-col mdl-grid\" />\n//   </section>\n\n//   {/* Show unregistered devices section */}\n//   <section className=\"mdl-grid content mdl-tabs__panel\" id=\"unregistered-devices-section\" style={{display: 'none'}}>\n//     <div className=\"content-item-container mdl-cell mdl-cell--12-col mdl-grid\" />\n//   </section>\n\n//   {/* Show help */}\n//   <section className=\"mdl-grid content mdl-tabs__panel\" id=\"help-section\" style={{display: 'none'}}>\n//     <div className=\"content-item-container mdl-cell mdl-cell--12-col mdl-grid\" />\n//   </section>\n//</main>\n// }\n\n// <img id=\"splash-logo\" src=\"../../assets/img/dbi2w.png\" />\n\n// <header className=\"header mdl-layout__header xtheme-c1\">\n//   <HeaderRow />\n//   <NavigationBar />\n// </header>\n\nvar OldMain = function (_React$Component) {\n  _inherits(OldMain, _React$Component);\n\n  function OldMain(props) {\n    _classCallCheck(this, OldMain);\n\n    return _possibleConstructorReturn(this, (OldMain.__proto__ || Object.getPrototypeOf(OldMain)).call(this, props));\n  }\n\n  _createClass(OldMain, [{\n    key: 'render',\n    value: function render() {\n      // console.log(this.props)\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: '' },\n          _react2.default.createElement(\n            'section',\n            { id: 'page-splash' },\n            _react2.default.createElement(_SignIn2.default, null),\n            _react2.default.createElement(\n              'div',\n              { id: 'version-container', className: 'version-container' },\n              'Version: 0.9.9'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return OldMain;\n}(_react2.default.Component);\n\nexports.default = OldMain;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbnRhaW5lcnMvT2xkTWFpbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcHVibGljL3NyYy9jb250YWluZXJzL09sZE1haW4uanN4P2IxYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBTaWduSW4gZnJvbSAnLi4vY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi9TaWduSW4nO1xuXG4vLyBpbXBvcnQgU2lnbkluIGZyb20gJy4uL2NvbXBvbmVudHMvU2lnbkluJ1xuaW1wb3J0ICcuLi8uLi9hc3NldHMvY3NzL21haW4vbWFpbi5jc3MnO1xuaW1wb3J0ICcuLi8uLi9hc3NldHMvanMvbWFpbi5qcyc7XG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFJlc3BvbnNpdmVcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmNvbnN0IEhlYWRlclJvdyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGRpdiBpZD1cInVzZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1pbmZvXCI+XG4gICAgICAgICAgPGRpdiBpZD1cInVzZXJwaWNcIiBjbGFzc05hbWU9XCJ0b29sdGlwIHRvcC1iYXItYXZhdGFyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dC1yaWdodFwiPlNlbGVjdCBhdmF0YXIgZm9yIHVzZXIgcHJvZmlsZSBzZWN0aW9uIGZvciB1c2VyIGluZm8sPGJyIC8+YWRkaXRpb25hbCBkYXNoYm9hcmQgY29udHJvbCBjb21tYW5kcyBhbmQgbG9nZ2luZyBvdXQuPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cInRvcC12YXItdXNlcm5hbWVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInNpZ24tb3V0LWJ1dHRvblwiIGNsYXNzTmFtZT1cIlwiPlNpZ24gb3V0PC9idXR0b24+IFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IE5hdmlnYXRpb25CYXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWIgbWRsLWxheW91dF9faGVhZGVyLXJvdyB4dGhlbWUtYzJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRhYnMgbWRsLWpzLXRhYnMgbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbGJcIj5cbiAgICAgICAgICA8ZGl2IHhoaWRkZW4gaWQ9XCJtZW51LW15LWdyb3Vwc1wiIGNsYXNzTmFtZT1cInRvb2x0aXAgb3ZlcmZsb3cgbWRsLXRhYnNfX3RhYiBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgeHRoZW1lLWMyIGlzLWFjdGl2ZVwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5kYXNoYm9hcmQ8L2k+RGFzaGJvYXJkc1xuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtYm90dG9tXCI+Jm5ic3A7PGJyIC8+RGlzcGxheSBkYXNoYm9hcmQgcGFuZWxzPGJyIC8+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaGlkZGVuIGlkPVwibWVudS1teS10b3AtZ3JvdXBzXCIgY2xhc3NOYW1lPVwibWRsLXRhYnNfX3RhYiBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgeHRoZW1lLWMyXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnRyZW5kaW5nX3VwPC9pPk15IFRvcCBHcm91cHNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGhpZGRlbiBpZD1cIm1lbnUtcmVjZW50XCIgY2xhc3NOYW1lPVwibWRsLXRhYnNfX3RhYiBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgeHRoZW1lLWMyXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNjaGVkdWxlPC9pPlJlY2VudCBHcm91cHNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGhpZGRlbiBpZD1cIm1lbnUtc2hvdy11bnJlZ2lzdGVyZWRcIiBjbGFzc05hbWU9XCJtZGwtdGFic19fdGFiIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzJcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2NyZWVuX2xvY2tfcG9ydHJhaXQ8L2k+VW5yZWdpc3RlcmVkXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiB4aGlkZGVuIGlkPVwibWVudS1zaG93LWhlbHBcIiBjbGFzc05hbWU9XCJ0b29sdGlwIG92ZXJmbG93IG1kbC10YWJzX190YWIgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jMlwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwPC9pPkhlbHBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXB0ZXh0LWJvdHRvbVwiPiZuYnNwOzxiciAvPkRpc3BsYXkgaGVscCBwYW5lbDxiciAvPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGhpZGRlbiBpZD1cIm5ldy1ncm91cC1idXR0b25cIiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tZmFiIG1kbC1zaGFkb3ctLTRkcCBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBMb2dpbkRpdiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJzaWduLWluLXdyYXBwZXItY29udGFpbmVyXCIgY2xhc3NOYW1lPVwibWRsLWNhcmQgb3ZlcmZsb3dcIj5cblxuICAgICAgPGRpdiBpZD1cInNpZ24taW4tYnV0dG9ucy1jb250YWluZXJcIiBjbGFzc05hbWU9XCJ4dG9vbHRpcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXAgb3ZlcmZsb3dcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dC1ib3R0b21cIj5TZWxlY3QgYnV0dG9uIHRvIHN0YXJ0IHNpZ25pbmcgaW4gLi4uPC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWduLWluLWVtYWlsLWJ1dHRvblwiIGNsYXNzTmFtZT1cIm1kbC1idXR0b24tLXJhaXNlZCBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFjY291bnRfY2lyY2xlPC9pPiBTaWduIGluIHdpdGggRW1haWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGhpZGRlbiBpZD1cInNpZ24taW4tZ29vZ2xlLWJ1dHRvblwiIGNsYXNzTmFtZT1cIm1kbC1idXR0b24tLXJhaXNlZCBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFjY291bnRfY2lyY2xlPC9pPiBTaWduIGluIHdpdGggR29vZ2xlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgaGlkZGVuIGlkPVwic2lnbi1pbi1lbWFpbC1jb250YWluZXJcIiBjbGFzc05hbWU9XCJtZGwtY2FyZCBtZGwtc2hhZG93LS04ZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtY2VsbC0tMTItY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3AgdG9vbHRpcCBvdmVyZmxvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtYm90dG9tXCI+UHJvdmlkZSBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gc2lnbiBpbiAuLi48L3NwYW4+XG4gICAgICAgICAgPGlucHV0IGhpZGRlbiBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZScsIHdpZHRoOiAzNzB9fSB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsLXNpZ24taW4tZW1haWwtdGV4dGZpZWxkXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCIgRW1haWxcIiAvPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZScsIHdpZHRoOiAnYXV0byd9fSB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImVtYWlsLXNpZ24taW4tcGFzc3dvcmQtdGV4dGZpZWxkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCIgUGFzc3dvcmRcIiAvPlxuXG4gICAgICAgICAgPGRpdiBpZD1cInNpZ24taW4tYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImVtYWlsLXNpZ24taW4tc3VibWl0LWJ1dHRvblwiIGNsYXNzTmFtZT1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWRcIiBuYW1lPVwic2lnbmluXCI+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImVtYWlsLXNpZ24taW4tY2FuY2VsLWJ1dHRvblwiIGNsYXNzTmFtZT1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWRcIiBuYW1lPVwiY2FuY2VsLWVtYWlsXCI+Q0FOQ0VMPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiZW1haWwtc2VuZC1wYXNzd29yZC1yZXNldC1idXR0b25cIiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkXCIgbmFtZT1cInZlcmlmeS1lbWFpbFwiPlNlbmQgUGFzc3dvcmQgUmVzZXQgRW1haWw8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gXG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gY29uc3QgQ29udGVudEFyZWEgPSAoKSA9PiB7ICAgICAgICAgIFxuLy8gPG1haW4gY2xhc3NOYW1lPVwibWRsLWxheW91dF9fY29udGVudFwiPlxuXG4gICAgICAgICAgXG4vLyAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnRcIiBpZD1cImFkZC1ncm91cC1jb250YWluZXJcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCI+XG4vLyAgICAgICB7LyogQ2FyZCBjb250YWluaW5nIHRoZSBpbnB1dHMgdG8gYWRkIGEgbmV3IG1lc3NhZ2VzICovfVxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtY2FyZCBtZGwtc2hhZG93LS04ZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtY2VsbC0tOC1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcCB4dGhlbWUtYzVcIj5cblxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1jYXJkX190aXRsZSB4dGhlbWUtYzRcIj5cbi8vICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWRsLWNhcmRfX3RpdGxlLXRleHRcIj5OZXcgRGFzaGJvYXJkPC9oMj5cbi8vICAgICAgICAgPC9kaXY+XG5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0XCI+XG5cbi8vICAgICAgICAgICA8Zm9ybSBpZD1cIm5ldy1ncm91cC1mb3JtXCIgYWN0aW9uPVwiI1wiPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWxcIj5cbi8vICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm5ldy1ncm91cC10aXRsZSBtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXctZ3JvdXAtdGl0bGVcIiAvPlxuLy8gICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBodG1sRm9yPVwibmV3LWdyb3VwLXRpdGxlXCI+VGl0bGUgZm9yIGRhc2hib2FyZDwvbGFiZWw+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJuZXctZ3JvdXAtZ3JvdXAgbWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwibmV3LWdyb3VwLWdyb3VwXCIgLz5cbi8vICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCIgaHRtbEZvcj1cIm5ldy1ncm91cC1ncm91cFwiPklkZW50aWZpZXIgZm9yIGRhc2hib2FyZCAoaWU6IHRoZSAnZ3JvdXAnIGlkZW50aWZpZXIgY2FuIGJlIHRoZSBkb29yIHZhbHVlKTwvbGFiZWw+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XG4vLyAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJuZXctZ3JvdXAtbWVzc2FnZSBtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHJvd3M9ezN9IGlkPVwibmV3LWdyb3VwLW1lc3NhZ2VcIiBkZWZhdWx0VmFsdWU9e1wiXCJ9IC8+XG4vLyAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGh0bWxGb3I9XCJuZXctZ3JvdXAtbWVzc2FnZVwiPk1lc3NhZ2UgZm9yIGRhc2hib2FyZDwvbGFiZWw+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJuZXctZ3JvdXAtZ3JvdXAgbWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwibmV3LWdyb3VwLXRhZ3NcIiAvPlxuLy8gICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBodG1sRm9yPVwibmV3LWdyb3VwLXRhZ3NcIj5UYWdzIGZvciBkYXNoYm9hcmQgKHNpbmdsZS13b3Jkcywgc2VwYXJhdGVkIGJ5IGEgc2luZ2xlIHNwYWNlKTwvbGFiZWw+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGQtZ3JvdXAtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImFkZC1ncm91cC1idXR0b24gbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZCBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzZcIj5cbi8vICAgICAgICAgICAgICAgQWRkIERhc2hib2FyZFxuLy8gICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibmV3LWdyb3VwLWRpc21pc3MtYnV0dG9uXCIgY2xhc3NOYW1lPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZCBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzZcIj5cbi8vICAgICAgICAgICAgICAgRGlzbWlzc1xuLy8gICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgPC9mb3JtPlxuLy8gICAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgIDwvc2VjdGlvbj5cblxuLy8gICB7LyogU2hvdyB0aGUgbGlzdCBvZiB1c2VyJ3MgZ3JvdXBzICovfVxuLy8gICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZGwtZ3JpZCBjb250ZW50IG1kbC10YWJzX19wYW5lbFwiIGlkPVwidXNlci1ncm91cHMtbGlzdFwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWl0ZW0tY29udGFpbmVyIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIiAvPlxuLy8gICA8L3NlY3Rpb24+XG5cbi8vICAgey8qIFNob3cgYSBsaXN0IG9mIHJlY2VudCBncm91cHMgKi99XG4vLyAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJyZWNlbnQtZ3JvdXBzLWxpc3RcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pdGVtLWNvbnRhaW5lciBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCIgLz5cbi8vICAgPC9zZWN0aW9uPlxuXG4vLyAgIHsvKiBTaG93IHRoZSBsaXN0IG9mIHRvcCB1c2VyJ3MgZ3JvdXBzICovfVxuLy8gICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZGwtZ3JpZCBjb250ZW50IG1kbC10YWJzX19wYW5lbFwiIGlkPVwidG9wLXVzZXItZ3JvdXBzLWxpc3RcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pdGVtLWNvbnRhaW5lciBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCIgLz5cbi8vICAgPC9zZWN0aW9uPlxuXG4vLyAgIHsvKiBTaG93IHVzZXIgcHJvZmlsZSBzZWN0aW9uICovfVxuLy8gICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZGwtZ3JpZCBjb250ZW50IG1kbC10YWJzX19wYW5lbFwiIGlkPVwidXNlci1wcm9maWxlLXNlY3Rpb25cIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pdGVtLWNvbnRhaW5lciBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCIgLz5cbi8vICAgPC9zZWN0aW9uPlxuXG4vLyAgIHsvKiBTaG93IHVucmVnaXN0ZXJlZCBkZXZpY2VzIHNlY3Rpb24gKi99XG4vLyAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJ1bnJlZ2lzdGVyZWQtZGV2aWNlcy1zZWN0aW9uXCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4vLyAgIDwvc2VjdGlvbj5cblxuLy8gICB7LyogU2hvdyBoZWxwICovfVxuLy8gICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZGwtZ3JpZCBjb250ZW50IG1kbC10YWJzX19wYW5lbFwiIGlkPVwiaGVscC1zZWN0aW9uXCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4vLyAgIDwvc2VjdGlvbj5cbi8vPC9tYWluPlxuLy8gfVxuXG4gICAgICAgICAgICAvLyA8aW1nIGlkPVwic3BsYXNoLWxvZ29cIiBzcmM9XCIuLi8uLi9hc3NldHMvaW1nL2RiaTJ3LnBuZ1wiIC8+XG5cbiAgICAgICAgICAvLyA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBtZGwtbGF5b3V0X19oZWFkZXIgeHRoZW1lLWMxXCI+XG4gICAgICAgICAgLy8gICA8SGVhZGVyUm93IC8+XG4gICAgICAgICAgLy8gICA8TmF2aWdhdGlvbkJhciAvPlxuICAgICAgICAgIC8vIDwvaGVhZGVyPlxuY2xhc3MgT2xkTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuXG4gICAgICAgICAgeyAvKiBTUExBU0ggU0NSRUVOICovIH1cblxuXG5cbiAgICAgICAgICA8c2VjdGlvbiBpZD1cInBhZ2Utc3BsYXNoXCI+XG5cbiAgICAgICAgICAgIDxTaWduSW4gLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ2ZXJzaW9uLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInZlcnNpb24tY29udGFpbmVyXCI+VmVyc2lvbjogMC45Ljk8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICB7LyogTWFpbiBBcHBsaWNhdGlvbiBBcmVhICovfVxuXG5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9sZE1haW47Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUpBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFsQkE7QUFEQTtBQURBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU5BO0FBREE7QUFWQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU5BO0FBREE7QUFzQkE7Ozs7QUFoQ0E7QUFDQTtBQWtDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/containers/OldMain.jsx\n");

/***/ })

})