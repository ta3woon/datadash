webpackHotUpdate("main",{

/***/ "./public/src/containers/OldMain.jsx":
/*!*******************************************!*\
  !*** ./public/src/containers/OldMain.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\n__webpack_require__(/*! ../../assets/css/main/main.css */ \"./public/assets/css/main/main.css\");\n\n__webpack_require__(/*! ../../assets/js/main.js */ \"./public/assets/js/main.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import SignIn from '../components/SignIn'\n\n\nvar HeaderRow = function HeaderRow() {\n  _react2.default.createElement(\n    'div',\n    { className: 'mdl-layout__header-row titlebar' },\n    _react2.default.createElement(\n      'h3',\n      { id: 'header-logo', className: 'tooltip header-logo' },\n      _react2.default.createElement(\n        'span',\n        { id: 'header-text' },\n        'DTIG Data Dashboard'\n      ),\n      _react2.default.createElement(\n        'span',\n        { className: 'tooltiptext-bottom' },\n        '\\xA0',\n        _react2.default.createElement('br', null),\n        'Select \\'Dashboards\\' or \\'Help\\' from underneath this bubble or',\n        _react2.default.createElement('br', null),\n        'select the avatar in the top right for user profile information',\n        _react2.default.createElement('br', null),\n        '\\xA0'\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { id: 'user-container' },\n      _react2.default.createElement(\n        'div',\n        { xhidden: true, id: 'userpic', className: 'tooltip top-bar-avatar' },\n        _react2.default.createElement(\n          'span',\n          { className: 'tooltiptext-left' },\n          'Select avatar for user profile section for user info,',\n          _react2.default.createElement('br', null),\n          'additional dashboard control commands and logging out.'\n        )\n      ),\n      _react2.default.createElement('div', { hidden: true, id: 'username', className: 'top-var-username' })\n    )\n  );\n};\n\nvar NavigationBar = function NavigationBar() {\n  _react2.default.createElement(\n    'div',\n    { className: 'tab mdl-layout__header-row xtheme-c2' },\n    _react2.default.createElement(\n      'div',\n      { className: 'mdl-tabs mdl-js-tabs mdl-js-ripple-effect' },\n      _react2.default.createElement(\n        'div',\n        { className: 'ilb' },\n        _react2.default.createElement(\n          'div',\n          { xhidden: true, id: 'menu-my-groups', className: 'tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2 is-active' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'dashboard'\n          ),\n          'Dashboards',\n          _react2.default.createElement(\n            'span',\n            { className: 'tooltiptext-bottom' },\n            '\\xA0',\n            _react2.default.createElement('br', null),\n            'Display dashboard panels',\n            _react2.default.createElement('br', null),\n            '\\xA0'\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { hidden: true, id: 'menu-my-top-groups', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'trending_up'\n          ),\n          'My Top Groups'\n        ),\n        _react2.default.createElement(\n          'div',\n          { hidden: true, id: 'menu-recent', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'schedule'\n          ),\n          'Recent Groups'\n        ),\n        _react2.default.createElement(\n          'div',\n          { hidden: true, id: 'menu-show-unregistered', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'screen_lock_portrait'\n          ),\n          'Unregistered'\n        ),\n        _react2.default.createElement(\n          'div',\n          { xhidden: true, id: 'menu-show-help', className: 'tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'help'\n          ),\n          'Help',\n          _react2.default.createElement(\n            'span',\n            { className: 'tooltiptext-bottom' },\n            '\\xA0',\n            _react2.default.createElement('br', null),\n            'Display help panel',\n            _react2.default.createElement('br', null),\n            '\\xA0'\n          )\n        ),\n        _react2.default.createElement(\n          'button',\n          { hidden: true, id: 'new-group-button', className: 'mdl-button mdl-js-button mdl-button--fab mdl-shadow--4dp mdl-js-ripple-effect xtheme-c6' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'add'\n          )\n        )\n      )\n    )\n  );\n};\n\nvar LoginDiv = function LoginDiv() {\n  _react2.default.createElement(\n    _semanticUiReact.Container,\n    null,\n    'HELLO'\n  );\n};\n\nvar OldMain = function (_React$Component) {\n  _inherits(OldMain, _React$Component);\n\n  function OldMain(props) {\n    _classCallCheck(this, OldMain);\n\n    return _possibleConstructorReturn(this, (OldMain.__proto__ || Object.getPrototypeOf(OldMain)).call(this, props));\n  }\n\n  // <SignIn></SignIn>\n  // <HeaderRow></HeaderRow>\n  // <NavigationBar></NavigationBar>\n\n  _createClass(OldMain, [{\n    key: 'render',\n    value: function render() {\n      // console.log(this.props)\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header xtheme-c3' },\n          _react2.default.createElement(\n            'section',\n            { id: 'page-splash' },\n            _react2.default.createElement('img', { id: 'splash-logo', src: '../../assets/img/dbi2w.png' }),\n            _react2.default.createElement(\n              'div',\n              { id: 'version-container', className: 'version-container' },\n              'Version: 0.9.9'\n            )\n          ),\n          _react2.default.createElement('header', { className: 'header mdl-layout__header xtheme-c1' }),\n          _react2.default.createElement(\n            'main',\n            { className: 'mdl-layout__content' },\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content', id: 'add-group-container', style: { display: 'none' } },\n              _react2.default.createElement(\n                'div',\n                { className: 'mdl-cell mdl-cell--12-col mdl-grid' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--12-col-desktop xtheme-c5' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'mdl-card__title xtheme-c4' },\n                    _react2.default.createElement(\n                      'h2',\n                      { className: 'mdl-card__title-text' },\n                      'New Dashboard'\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'mdl-card__supporting-text' },\n                    _react2.default.createElement(\n                      'form',\n                      { id: 'new-group-form', action: '#' },\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-title mdl-textfield__input', type: 'text', id: 'new-group-title' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-title' },\n                          'Title for dashboard'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-group mdl-textfield__input', type: 'text', id: 'new-group-group' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-group' },\n                          'Identifier for dashboard (ie: the \\'group\\' identifier can be the door value)'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('textarea', { className: 'new-group-message mdl-textfield__input', rows: 3, id: 'new-group-message', defaultValue: \"\" }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-message' },\n                          'Message for dashboard'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-group mdl-textfield__input', type: 'text', id: 'new-group-tags' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-tags' },\n                          'Tags for dashboard (single-words, separated by a single space)'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'button',\n                        { id: 'add-group-button', type: 'submit', className: 'add-group-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6' },\n                        'Add Dashboard'\n                      ),\n                      _react2.default.createElement(\n                        'button',\n                        { id: 'new-group-dismiss-button', className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6' },\n                        'Dismiss'\n                      )\n                    )\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'user-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'recent-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'top-user-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'user-profile-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'unregistered-devices-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'help-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return OldMain;\n}(_react2.default.Component);\n\nexports.default = OldMain;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbnRhaW5lcnMvT2xkTWFpbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcHVibGljL3NyYy9jb250YWluZXJzL09sZE1haW4uanN4P2IxYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLy8gaW1wb3J0IFNpZ25JbiBmcm9tICcuLi9jb21wb25lbnRzL1NpZ25JbidcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9tYWluL21haW4uY3NzJztcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2pzL21haW4uanMnO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSZXNwb25zaXZlXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5jb25zdCBIZWFkZXJSb3cgPSAoKSA9PiB7XG4gIDxkaXYgY2xhc3NOYW1lPVwibWRsLWxheW91dF9faGVhZGVyLXJvdyB0aXRsZWJhclwiPlxuICAgIDxoMyBpZD1cImhlYWRlci1sb2dvXCIgY2xhc3NOYW1lPVwidG9vbHRpcCBoZWFkZXItbG9nb1wiPjxzcGFuIGlkPVwiaGVhZGVyLXRleHRcIj5EVElHIERhdGEgRGFzaGJvYXJkPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtYm90dG9tXCI+Jm5ic3A7PGJyIC8+U2VsZWN0ICdEYXNoYm9hcmRzJyBvciAnSGVscCcgZnJvbSB1bmRlcm5lYXRoIHRoaXMgYnViYmxlIG9yPGJyIC8+c2VsZWN0IHRoZSBhdmF0YXIgaW4gdGhlIHRvcCByaWdodCBmb3IgdXNlciBwcm9maWxlIGluZm9ybWF0aW9uPGJyIC8+Jm5ic3A7PC9zcGFuPlxuICAgIDwvaDM+XG4gICAgPGRpdiBpZD1cInVzZXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IHhoaWRkZW4gaWQ9XCJ1c2VycGljXCIgY2xhc3NOYW1lPVwidG9vbHRpcCB0b3AtYmFyLWF2YXRhclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dC1sZWZ0XCI+U2VsZWN0IGF2YXRhciBmb3IgdXNlciBwcm9maWxlIHNlY3Rpb24gZm9yIHVzZXIgaW5mbyw8YnIgLz5hZGRpdGlvbmFsIGRhc2hib2FyZCBjb250cm9sIGNvbW1hbmRzIGFuZCBsb2dnaW5nIG91dC48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaGlkZGVuIGlkPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJ0b3AtdmFyLXVzZXJuYW1lXCIgLz5cbiAgICAgIHsvKiAgICAgICAgPGJ1dHRvbiBoaWRkZW4gaWQ9XCJzaWduLW91dC1idXR0b25cIiBjbGFzcz1cIm1kbC1idXR0b24tLXJhaXNlZCBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5TaWduIG91dDwvYnV0dG9uPiAqL31cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG59XG5cbmNvbnN0IE5hdmlnYXRpb25CYXIgPSAoKSA9PiB7XG4gIDxkaXYgY2xhc3NOYW1lPVwidGFiIG1kbC1sYXlvdXRfX2hlYWRlci1yb3cgeHRoZW1lLWMyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGFicyBtZGwtanMtdGFicyBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbGJcIj5cbiAgICAgICAgPGRpdiB4aGlkZGVuIGlkPVwibWVudS1teS1ncm91cHNcIiBjbGFzc05hbWU9XCJ0b29sdGlwIG92ZXJmbG93IG1kbC10YWJzX190YWIgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jMiBpcy1hY3RpdmVcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmRhc2hib2FyZDwvaT5EYXNoYm9hcmRzXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtYm90dG9tXCI+Jm5ic3A7PGJyIC8+RGlzcGxheSBkYXNoYm9hcmQgcGFuZWxzPGJyIC8+Jm5ic3A7PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBoaWRkZW4gaWQ9XCJtZW51LW15LXRvcC1ncm91cHNcIiBjbGFzc05hbWU9XCJtZGwtdGFic19fdGFiIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzJcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnRyZW5kaW5nX3VwPC9pPk15IFRvcCBHcm91cHNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaGlkZGVuIGlkPVwibWVudS1yZWNlbnRcIiBjbGFzc05hbWU9XCJtZGwtdGFic19fdGFiIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzJcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNjaGVkdWxlPC9pPlJlY2VudCBHcm91cHNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaGlkZGVuIGlkPVwibWVudS1zaG93LXVucmVnaXN0ZXJlZFwiIGNsYXNzTmFtZT1cIm1kbC10YWJzX190YWIgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jMlwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2NyZWVuX2xvY2tfcG9ydHJhaXQ8L2k+VW5yZWdpc3RlcmVkXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHhoaWRkZW4gaWQ9XCJtZW51LXNob3ctaGVscFwiIGNsYXNzTmFtZT1cInRvb2x0aXAgb3ZlcmZsb3cgbWRsLXRhYnNfX3RhYiBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgeHRoZW1lLWMyXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwPC9pPkhlbHBcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dC1ib3R0b21cIj4mbmJzcDs8YnIgLz5EaXNwbGF5IGhlbHAgcGFuZWw8YnIgLz4mbmJzcDs8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGhpZGRlbiBpZD1cIm5ldy1ncm91cC1idXR0b25cIiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tZmFiIG1kbC1zaGFkb3ctLTRkcCBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzZcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG59XG5cbmNvbnN0IExvZ2luRGl2ID0gKCkgPT4ge1xuICA8Q29udGFpbmVyPkhFTExPPC9Db250YWluZXI+XG59O1xuXG5jbGFzcyBPbGRNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG5cbiAgLy8gPFNpZ25Jbj48L1NpZ25Jbj5cbiAgLy8gPEhlYWRlclJvdz48L0hlYWRlclJvdz5cbiAgLy8gPE5hdmlnYXRpb25CYXI+PC9OYXZpZ2F0aW9uQmFyPlxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tbGF5b3V0IG1kbC1sYXlvdXQgbWRsLWpzLWxheW91dCBtZGwtbGF5b3V0LS1maXhlZC1oZWFkZXIgeHRoZW1lLWMzXCI+XG5cbiAgICAgICAgICB7IC8qIFNQTEFTSCBTQ1JFRU4gKi8gfVxuXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJwYWdlLXNwbGFzaFwiPlxuICAgICAgICAgICAgPGltZyBpZD1cInNwbGFzaC1sb2dvXCIgc3JjPVwiLi4vLi4vYXNzZXRzL2ltZy9kYmkydy5wbmdcIiAvPlxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwidmVyc2lvbi1jb250YWluZXJcIiBjbGFzc05hbWU9XCJ2ZXJzaW9uLWNvbnRhaW5lclwiPlZlcnNpb246IDAuOS45PC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgbWRsLWxheW91dF9faGVhZGVyIHh0aGVtZS1jMVwiPlxuXG4gICAgICAgICAgPC9oZWFkZXI+XG5cblxuICAgICAgICAgIHsvKiBNYWluIEFwcGxpY2F0aW9uIEFyZWEgKi99XG5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtZGwtbGF5b3V0X19jb250ZW50XCI+XG5cblxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWRsLWdyaWQgY29udGVudFwiIGlkPVwiYWRkLWdyb3VwLWNvbnRhaW5lclwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgey8qIENhcmQgY29udGFpbmluZyB0aGUgaW5wdXRzIHRvIGFkZCBhIG5ldyBtZXNzYWdlcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1jYXJkIG1kbC1zaGFkb3ctLThkcCBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1jZWxsLS04LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wIHh0aGVtZS1jNVwiPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1jYXJkX190aXRsZSB4dGhlbWUtYzRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+TmV3IERhc2hib2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJuZXctZ3JvdXAtZm9ybVwiIGFjdGlvbj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm5ldy1ncm91cC10aXRsZSBtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXctZ3JvdXAtdGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCIgaHRtbEZvcj1cIm5ldy1ncm91cC10aXRsZVwiPlRpdGxlIGZvciBkYXNoYm9hcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibmV3LWdyb3VwLWdyb3VwIG1kbC10ZXh0ZmllbGRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cIm5ldy1ncm91cC1ncm91cFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBodG1sRm9yPVwibmV3LWdyb3VwLWdyb3VwXCI+SWRlbnRpZmllciBmb3IgZGFzaGJvYXJkIChpZTogdGhlICdncm91cCcgaWRlbnRpZmllciBjYW4gYmUgdGhlIGRvb3IgdmFsdWUpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIm5ldy1ncm91cC1tZXNzYWdlIG1kbC10ZXh0ZmllbGRfX2lucHV0XCIgcm93cz17M30gaWQ9XCJuZXctZ3JvdXAtbWVzc2FnZVwiIGRlZmF1bHRWYWx1ZT17XCJcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGh0bWxGb3I9XCJuZXctZ3JvdXAtbWVzc2FnZVwiPk1lc3NhZ2UgZm9yIGRhc2hib2FyZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJuZXctZ3JvdXAtZ3JvdXAgbWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwibmV3LWdyb3VwLXRhZ3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCIgaHRtbEZvcj1cIm5ldy1ncm91cC10YWdzXCI+VGFncyBmb3IgZGFzaGJvYXJkIChzaW5nbGUtd29yZHMsIHNlcGFyYXRlZCBieSBhIHNpbmdsZSBzcGFjZSk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGQtZ3JvdXAtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImFkZC1ncm91cC1idXR0b24gbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZCBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibmV3LWdyb3VwLWRpc21pc3MtYnV0dG9uXCIgY2xhc3NOYW1lPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZCBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc21pc3NcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIHsvKiBTaG93IHRoZSBsaXN0IG9mIHVzZXIncyBncm91cHMgKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZGwtZ3JpZCBjb250ZW50IG1kbC10YWJzX19wYW5lbFwiIGlkPVwidXNlci1ncm91cHMtbGlzdFwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pdGVtLWNvbnRhaW5lciBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCIgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgey8qIFNob3cgYSBsaXN0IG9mIHJlY2VudCBncm91cHMgKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZGwtZ3JpZCBjb250ZW50IG1kbC10YWJzX19wYW5lbFwiIGlkPVwicmVjZW50LWdyb3Vwcy1saXN0XCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWl0ZW0tY29udGFpbmVyIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIiAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogU2hvdyB0aGUgbGlzdCBvZiB0b3AgdXNlcidzIGdyb3VwcyAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJ0b3AtdXNlci1ncm91cHMtbGlzdFwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pdGVtLWNvbnRhaW5lciBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCIgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgey8qIFNob3cgdXNlciBwcm9maWxlIHNlY3Rpb24gKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZGwtZ3JpZCBjb250ZW50IG1kbC10YWJzX19wYW5lbFwiIGlkPVwidXNlci1wcm9maWxlLXNlY3Rpb25cIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIHsvKiBTaG93IHVucmVnaXN0ZXJlZCBkZXZpY2VzIHNlY3Rpb24gKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZGwtZ3JpZCBjb250ZW50IG1kbC10YWJzX19wYW5lbFwiIGlkPVwidW5yZWdpc3RlcmVkLWRldmljZXMtc2VjdGlvblwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pdGVtLWNvbnRhaW5lciBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCIgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgey8qIFNob3cgaGVscCAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnQgbWRsLXRhYnNfX3BhbmVsXCIgaWQ9XCJoZWxwLXNlY3Rpb25cIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2xkTWFpbjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBSkE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBSkE7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFsQkE7QUFEQTtBQURBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQU9BO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwQkE7QUFGQTtBQU5BO0FBRkE7QUFGQTtBQTJDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUF2RUE7QUFqQkE7QUFEQTtBQW1HQTs7OztBQWpIQTtBQUNBO0FBbUhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/containers/OldMain.jsx\n");

/***/ })

})