webpackHotUpdate("main",{

/***/ "./firebase/auth.js":
/*!**************************!*\
  !*** ./firebase/auth.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.doPasswordUpdate = exports.doPasswordReset = exports.doSignInWithEmailAndPassword = exports.doCreateUserWithEmailAndPassword = undefined;\n\nvar _firebase = __webpack_require__(/*! ./firebase */ \"./firebase/firebase.js\");\n\n// Sign Up\nvar doCreateUserWithEmailAndPassword = exports.doCreateUserWithEmailAndPassword = function doCreateUserWithEmailAndPassword(email, password) {\n  return _firebase.auth.createUserWithEmailAndPassword(email, password);\n};\n\n// Sign In\n// auth.js: The file where the Firebase authentication API will be defined to sign up, sign in, sign out etc. a user in your application. It is the interface between the official Firebase API and your React application.\n\nvar doSignInWithEmailAndPassword = exports.doSignInWithEmailAndPassword = function doSignInWithEmailAndPassword(email, password) {\n  return _firebase.auth.signInWithEmailAndPassword(email, password);\n};\n\n// Password Reset\nvar doPasswordReset = exports.doPasswordReset = function doPasswordReset(email) {\n  return _firebase.auth.sendPasswordResetEmail(email);\n};\n\n// Password Change\nvar doPasswordUpdate = exports.doPasswordUpdate = function doPasswordUpdate(password) {\n  return _firebase.auth.currentUser.updatePassword(password);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9hdXRoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2ZpcmViYXNlL2F1dGguanM/YjhiMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhdXRoLmpzOiBUaGUgZmlsZSB3aGVyZSB0aGUgRmlyZWJhc2UgYXV0aGVudGljYXRpb24gQVBJIHdpbGwgYmUgZGVmaW5lZCB0byBzaWduIHVwLCBzaWduIGluLCBzaWduIG91dCBldGMuIGEgdXNlciBpbiB5b3VyIGFwcGxpY2F0aW9uLiBJdCBpcyB0aGUgaW50ZXJmYWNlIGJldHdlZW4gdGhlIG9mZmljaWFsIEZpcmViYXNlIEFQSSBhbmQgeW91ciBSZWFjdCBhcHBsaWNhdGlvbi5cblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4vZmlyZWJhc2UnO1xuXG4vLyBTaWduIFVwXG5leHBvcnQgY29uc3QgZG9DcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PlxuICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xuXG4vLyBTaWduIEluXG5leHBvcnQgY29uc3QgZG9TaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+XG4gIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcblxuLy8gUGFzc3dvcmQgUmVzZXRcbmV4cG9ydCBjb25zdCBkb1Bhc3N3b3JkUmVzZXQgPSAoZW1haWwpID0+XG4gIGF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCk7XG5cbi8vIFBhc3N3b3JkIENoYW5nZVxuZXhwb3J0IGNvbnN0IGRvUGFzc3dvcmRVcGRhdGUgPSAocGFzc3dvcmQpID0+XG4gIGF1dGguY3VycmVudFVzZXIudXBkYXRlUGFzc3dvcmQocGFzc3dvcmQpOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFSQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase/auth.js\n");

/***/ })

})