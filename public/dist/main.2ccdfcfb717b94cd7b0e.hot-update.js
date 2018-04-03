webpackHotUpdate("main",{

/***/ "./public/src/containers/OldMain.jsx":
/*!*******************************************!*\
  !*** ./public/src/containers/OldMain.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ../../assets/css/main/main.css */ \"./public/assets/css/main/main.css\");\n\n__webpack_require__(/*! ../../assets/js/main.js */ \"./public/assets/js/main.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HeaderRow = function HeaderRow() {\n  _react2.default.createElement(\n    'div',\n    { className: 'mdl-layout__header-row titlebar' },\n    _react2.default.createElement(\n      'h3',\n      { id: 'header-logo', className: 'tooltip header-logo' },\n      _react2.default.createElement(\n        'span',\n        { id: 'header-text' },\n        'DTIG Data Dashboard'\n      ),\n      _react2.default.createElement(\n        'span',\n        { className: 'tooltiptext-bottom' },\n        '\\xA0',\n        _react2.default.createElement('br', null),\n        'Select \\'Dashboards\\' or \\'Help\\' from underneath this bubble or',\n        _react2.default.createElement('br', null),\n        'select the avatar in the top right for user profile information',\n        _react2.default.createElement('br', null),\n        '\\xA0'\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { id: 'user-container' },\n      _react2.default.createElement(\n        'div',\n        { xhidden: true, id: 'userpic', className: 'tooltip top-bar-avatar' },\n        _react2.default.createElement(\n          'span',\n          { className: 'tooltiptext-left' },\n          'Select avatar for user profile section for user info,',\n          _react2.default.createElement('br', null),\n          'additional dashboard control commands and logging out.'\n        )\n      ),\n      _react2.default.createElement('div', { hidden: true, id: 'username', className: 'top-var-username' })\n    )\n  );\n};\n\nvar NavigationBar = function NavigationBar() {\n  _react2.default.createElement(\n    'div',\n    { className: 'tab mdl-layout__header-row xtheme-c2' },\n    _react2.default.createElement(\n      'div',\n      { className: 'mdl-tabs mdl-js-tabs mdl-js-ripple-effect' },\n      _react2.default.createElement(\n        'div',\n        { className: 'ilb' },\n        _react2.default.createElement(\n          'div',\n          { xhidden: true, id: 'menu-my-groups', className: 'tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2 is-active' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'dashboard'\n          ),\n          'Dashboards',\n          _react2.default.createElement(\n            'span',\n            { className: 'tooltiptext-bottom' },\n            '\\xA0',\n            _react2.default.createElement('br', null),\n            'Display dashboard panels',\n            _react2.default.createElement('br', null),\n            '\\xA0'\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { hidden: true, id: 'menu-my-top-groups', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'trending_up'\n          ),\n          'My Top Groups'\n        ),\n        _react2.default.createElement(\n          'div',\n          { hidden: true, id: 'menu-recent', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'schedule'\n          ),\n          'Recent Groups'\n        ),\n        _react2.default.createElement(\n          'div',\n          { hidden: true, id: 'menu-show-unregistered', className: 'mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'screen_lock_portrait'\n          ),\n          'Unregistered'\n        ),\n        _react2.default.createElement(\n          'div',\n          { xhidden: true, id: 'menu-show-help', className: 'tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'help'\n          ),\n          'Help',\n          _react2.default.createElement(\n            'span',\n            { className: 'tooltiptext-bottom' },\n            '\\xA0',\n            _react2.default.createElement('br', null),\n            'Display help panel',\n            _react2.default.createElement('br', null),\n            '\\xA0'\n          )\n        ),\n        _react2.default.createElement(\n          'button',\n          { hidden: true, id: 'new-group-button', className: 'mdl-button mdl-js-button mdl-button--fab mdl-shadow--4dp mdl-js-ripple-effect xtheme-c6' },\n          _react2.default.createElement(\n            'i',\n            { className: 'material-icons' },\n            'add'\n          )\n        )\n      )\n    )\n  );\n};\n\nvar SignIn = function SignIn() {};\n\nvar OldMain = function (_Component) {\n  _inherits(OldMain, _Component);\n\n  function OldMain() {\n    _classCallCheck(this, OldMain);\n\n    return _possibleConstructorReturn(this, (OldMain.__proto__ || Object.getPrototypeOf(OldMain)).apply(this, arguments));\n  }\n\n  _createClass(OldMain, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header xtheme-c3' },\n          _react2.default.createElement(\n            'section',\n            { id: 'page-splash' },\n            _react2.default.createElement('img', { id: 'splash-logo', src: '../../assets/img/dbi2w.png' }),\n            _react2.default.createElement(\n              'div',\n              { id: 'version-container', className: 'version-container' },\n              'Version: 0.9.9'\n            )\n          ),\n          _react2.default.createElement(\n            'header',\n            { className: 'header mdl-layout__header xtheme-c1' },\n            _react2.default.createElement(HeaderRow, null)\n          ),\n          _react2.default.createElement(\n            'main',\n            { className: 'mdl-layout__content' },\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content', id: 'add-group-container', style: { display: 'none' } },\n              _react2.default.createElement(\n                'div',\n                { className: 'mdl-cell mdl-cell--12-col mdl-grid' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--12-col-desktop xtheme-c5' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'mdl-card__title xtheme-c4' },\n                    _react2.default.createElement(\n                      'h2',\n                      { className: 'mdl-card__title-text' },\n                      'New Dashboard'\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'mdl-card__supporting-text' },\n                    _react2.default.createElement(\n                      'form',\n                      { id: 'new-group-form', action: '#' },\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-title mdl-textfield__input', type: 'text', id: 'new-group-title' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-title' },\n                          'Title for dashboard'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-group mdl-textfield__input', type: 'text', id: 'new-group-group' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-group' },\n                          'Identifier for dashboard (ie: the \\'group\\' identifier can be the door value)'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('textarea', { className: 'new-group-message mdl-textfield__input', rows: 3, id: 'new-group-message', defaultValue: \"\" }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-message' },\n                          'Message for dashboard'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'div',\n                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },\n                        _react2.default.createElement('input', { className: 'new-group-group mdl-textfield__input', type: 'text', id: 'new-group-tags' }),\n                        _react2.default.createElement(\n                          'label',\n                          { className: 'mdl-textfield__label', htmlFor: 'new-group-tags' },\n                          'Tags for dashboard (single-words, separated by a single space)'\n                        )\n                      ),\n                      _react2.default.createElement(\n                        'button',\n                        { id: 'add-group-button', type: 'submit', className: 'add-group-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6' },\n                        'Add Dashboard'\n                      ),\n                      _react2.default.createElement(\n                        'button',\n                        { id: 'new-group-dismiss-button', className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6' },\n                        'Dismiss'\n                      )\n                    )\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'user-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'recent-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'top-user-groups-list', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'user-profile-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'unregistered-devices-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'mdl-grid content mdl-tabs__panel', id: 'help-section', style: { display: 'none' } },\n              _react2.default.createElement('div', { className: 'content-item-container mdl-cell mdl-cell--12-col mdl-grid' })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return OldMain;\n}(_react.Component);\n\nexports.default = OldMain;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbnRhaW5lcnMvT2xkTWFpbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcHVibGljL3NyYy9jb250YWluZXJzL09sZE1haW4uanN4P2IxYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9tYWluL21haW4uY3NzJztcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2pzL21haW4uanMnO1xuXG5jb25zdCBIZWFkZXJSb3cgPSAoKSA9PiB7XG4gIDxkaXYgY2xhc3NOYW1lPVwibWRsLWxheW91dF9faGVhZGVyLXJvdyB0aXRsZWJhclwiPlxuICAgIDxoMyBpZD1cImhlYWRlci1sb2dvXCIgY2xhc3NOYW1lPVwidG9vbHRpcCBoZWFkZXItbG9nb1wiPjxzcGFuIGlkPVwiaGVhZGVyLXRleHRcIj5EVElHIERhdGEgRGFzaGJvYXJkPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtYm90dG9tXCI+Jm5ic3A7PGJyIC8+U2VsZWN0ICdEYXNoYm9hcmRzJyBvciAnSGVscCcgZnJvbSB1bmRlcm5lYXRoIHRoaXMgYnViYmxlIG9yPGJyIC8+c2VsZWN0IHRoZSBhdmF0YXIgaW4gdGhlIHRvcCByaWdodCBmb3IgdXNlciBwcm9maWxlIGluZm9ybWF0aW9uPGJyIC8+Jm5ic3A7PC9zcGFuPlxuICAgIDwvaDM+XG4gICAgPGRpdiBpZD1cInVzZXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IHhoaWRkZW4gaWQ9XCJ1c2VycGljXCIgY2xhc3NOYW1lPVwidG9vbHRpcCB0b3AtYmFyLWF2YXRhclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dC1sZWZ0XCI+U2VsZWN0IGF2YXRhciBmb3IgdXNlciBwcm9maWxlIHNlY3Rpb24gZm9yIHVzZXIgaW5mbyw8YnIgLz5hZGRpdGlvbmFsIGRhc2hib2FyZCBjb250cm9sIGNvbW1hbmRzIGFuZCBsb2dnaW5nIG91dC48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaGlkZGVuIGlkPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJ0b3AtdmFyLXVzZXJuYW1lXCIgLz5cbiAgICAgIHsvKiAgICAgICAgPGJ1dHRvbiBoaWRkZW4gaWQ9XCJzaWduLW91dC1idXR0b25cIiBjbGFzcz1cIm1kbC1idXR0b24tLXJhaXNlZCBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5TaWduIG91dDwvYnV0dG9uPiAqL31cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG59XG5cbmNvbnN0IE5hdmlnYXRpb25CYXIgPSAoKSA9PiB7XG4gIDxkaXYgY2xhc3NOYW1lPVwidGFiIG1kbC1sYXlvdXRfX2hlYWRlci1yb3cgeHRoZW1lLWMyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGFicyBtZGwtanMtdGFicyBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbGJcIj5cbiAgICAgICAgPGRpdiB4aGlkZGVuIGlkPVwibWVudS1teS1ncm91cHNcIiBjbGFzc05hbWU9XCJ0b29sdGlwIG92ZXJmbG93IG1kbC10YWJzX190YWIgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jMiBpcy1hY3RpdmVcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmRhc2hib2FyZDwvaT5EYXNoYm9hcmRzXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQtYm90dG9tXCI+Jm5ic3A7PGJyIC8+RGlzcGxheSBkYXNoYm9hcmQgcGFuZWxzPGJyIC8+Jm5ic3A7PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBoaWRkZW4gaWQ9XCJtZW51LW15LXRvcC1ncm91cHNcIiBjbGFzc05hbWU9XCJtZGwtdGFic19fdGFiIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzJcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnRyZW5kaW5nX3VwPC9pPk15IFRvcCBHcm91cHNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaGlkZGVuIGlkPVwibWVudS1yZWNlbnRcIiBjbGFzc05hbWU9XCJtZGwtdGFic19fdGFiIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzJcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNjaGVkdWxlPC9pPlJlY2VudCBHcm91cHNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaGlkZGVuIGlkPVwibWVudS1zaG93LXVucmVnaXN0ZXJlZFwiIGNsYXNzTmFtZT1cIm1kbC10YWJzX190YWIgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IHh0aGVtZS1jMlwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2NyZWVuX2xvY2tfcG9ydHJhaXQ8L2k+VW5yZWdpc3RlcmVkXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHhoaWRkZW4gaWQ9XCJtZW51LXNob3ctaGVscFwiIGNsYXNzTmFtZT1cInRvb2x0aXAgb3ZlcmZsb3cgbWRsLXRhYnNfX3RhYiBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgeHRoZW1lLWMyXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwPC9pPkhlbHBcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dC1ib3R0b21cIj4mbmJzcDs8YnIgLz5EaXNwbGF5IGhlbHAgcGFuZWw8YnIgLz4mbmJzcDs8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGhpZGRlbiBpZD1cIm5ldy1ncm91cC1idXR0b25cIiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tZmFiIG1kbC1zaGFkb3ctLTRkcCBtZGwtanMtcmlwcGxlLWVmZmVjdCB4dGhlbWUtYzZcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG59XG5cbmNvbnN0IFNpZ25JbiA9ICgpID0+IHtcblxufVxuXG5jbGFzcyBPbGRNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tbGF5b3V0IG1kbC1sYXlvdXQgbWRsLWpzLWxheW91dCBtZGwtbGF5b3V0LS1maXhlZC1oZWFkZXIgeHRoZW1lLWMzXCI+XG5cbiAgICAgICAgICB7IC8qIFNQTEFTSCBTQ1JFRU4gKi8gfVxuXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJwYWdlLXNwbGFzaFwiPlxuICAgICAgICAgICAgPGltZyBpZD1cInNwbGFzaC1sb2dvXCIgc3JjPVwiLi4vLi4vYXNzZXRzL2ltZy9kYmkydy5wbmdcIiAvPlxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwidmVyc2lvbi1jb250YWluZXJcIiBjbGFzc05hbWU9XCJ2ZXJzaW9uLWNvbnRhaW5lclwiPlZlcnNpb246IDAuOS45PC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgbWRsLWxheW91dF9faGVhZGVyIHh0aGVtZS1jMVwiPlxuICAgICAgICAgICAgPEhlYWRlclJvdz48L0hlYWRlclJvdz5cblxuICAgICAgICAgIDwvaGVhZGVyPlxuXG5cbiAgICAgICAgICB7LyogTWFpbiBBcHBsaWNhdGlvbiBBcmVhICovfVxuXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWRsLWxheW91dF9fY29udGVudFwiPlxuXG5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kbC1ncmlkIGNvbnRlbnRcIiBpZD1cImFkZC1ncm91cC1jb250YWluZXJcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiPlxuICAgICAgICAgICAgICAgIHsvKiBDYXJkIGNvbnRhaW5pbmcgdGhlIGlucHV0cyB0byBhZGQgYSBuZXcgbWVzc2FnZXMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtY2FyZCBtZGwtc2hhZG93LS04ZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtY2VsbC0tOC1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcCB4dGhlbWUtYzVcIj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtY2FyZF9fdGl0bGUgeHRoZW1lLWM0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtZGwtY2FyZF9fdGl0bGUtdGV4dFwiPk5ldyBEYXNoYm9hcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwibmV3LWdyb3VwLWZvcm1cIiBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJuZXctZ3JvdXAtdGl0bGUgbWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwibmV3LWdyb3VwLXRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGh0bWxGb3I9XCJuZXctZ3JvdXAtdGl0bGVcIj5UaXRsZSBmb3IgZGFzaGJvYXJkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm5ldy1ncm91cC1ncm91cCBtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXctZ3JvdXAtZ3JvdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCIgaHRtbEZvcj1cIm5ldy1ncm91cC1ncm91cFwiPklkZW50aWZpZXIgZm9yIGRhc2hib2FyZCAoaWU6IHRoZSAnZ3JvdXAnIGlkZW50aWZpZXIgY2FuIGJlIHRoZSBkb29yIHZhbHVlKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJuZXctZ3JvdXAtbWVzc2FnZSBtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHJvd3M9ezN9IGlkPVwibmV3LWdyb3VwLW1lc3NhZ2VcIiBkZWZhdWx0VmFsdWU9e1wiXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBodG1sRm9yPVwibmV3LWdyb3VwLW1lc3NhZ2VcIj5NZXNzYWdlIGZvciBkYXNoYm9hcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibmV3LWdyb3VwLWdyb3VwIG1kbC10ZXh0ZmllbGRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cIm5ldy1ncm91cC10YWdzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGh0bWxGb3I9XCJuZXctZ3JvdXAtdGFnc1wiPlRhZ3MgZm9yIGRhc2hib2FyZCAoc2luZ2xlLXdvcmRzLCBzZXBhcmF0ZWQgYnkgYSBzaW5nbGUgc3BhY2UpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWRkLWdyb3VwLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhZGQtZ3JvdXAtYnV0dG9uIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWpzLXJpcHBsZS1lZmZlY3QgeHRoZW1lLWM2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm5ldy1ncm91cC1kaXNtaXNzLWJ1dHRvblwiIGNsYXNzTmFtZT1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWpzLXJpcHBsZS1lZmZlY3QgeHRoZW1lLWM2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNtaXNzXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogU2hvdyB0aGUgbGlzdCBvZiB1c2VyJ3MgZ3JvdXBzICovfVxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWRsLWdyaWQgY29udGVudCBtZGwtdGFic19fcGFuZWxcIiBpZD1cInVzZXItZ3JvdXBzLWxpc3RcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIHsvKiBTaG93IGEgbGlzdCBvZiByZWNlbnQgZ3JvdXBzICovfVxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWRsLWdyaWQgY29udGVudCBtZGwtdGFic19fcGFuZWxcIiBpZD1cInJlY2VudC1ncm91cHMtbGlzdFwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pdGVtLWNvbnRhaW5lciBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sIG1kbC1ncmlkXCIgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgey8qIFNob3cgdGhlIGxpc3Qgb2YgdG9wIHVzZXIncyBncm91cHMgKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZGwtZ3JpZCBjb250ZW50IG1kbC10YWJzX19wYW5lbFwiIGlkPVwidG9wLXVzZXItZ3JvdXBzLWxpc3RcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIHsvKiBTaG93IHVzZXIgcHJvZmlsZSBzZWN0aW9uICovfVxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWRsLWdyaWQgY29udGVudCBtZGwtdGFic19fcGFuZWxcIiBpZD1cInVzZXItcHJvZmlsZS1zZWN0aW9uXCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWl0ZW0tY29udGFpbmVyIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIiAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogU2hvdyB1bnJlZ2lzdGVyZWQgZGV2aWNlcyBzZWN0aW9uICovfVxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWRsLWdyaWQgY29udGVudCBtZGwtdGFic19fcGFuZWxcIiBpZD1cInVucmVnaXN0ZXJlZC1kZXZpY2VzLXNlY3Rpb25cIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbCBtZGwtZ3JpZFwiIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIHsvKiBTaG93IGhlbHAgKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZGwtZ3JpZCBjb250ZW50IG1kbC10YWJzX19wYW5lbFwiIGlkPVwiaGVscC1zZWN0aW9uXCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWl0ZW0tY29udGFpbmVyIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIiAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9sZE1haW47Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFKQTtBQUpBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQWxCQTtBQURBO0FBREE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwQkE7QUFGQTtBQU5BO0FBRkE7QUFGQTtBQTJDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUF2RUE7QUFsQkE7QUFEQTtBQW9HQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/src/containers/OldMain.jsx\n");

/***/ })

})