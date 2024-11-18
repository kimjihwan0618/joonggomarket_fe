"use strict";
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 5691:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "yA": () => (/* binding */ SignupFormBox),
/* harmony export */   "V1": () => (/* binding */ PageTitle),
/* harmony export */   "xM": () => (/* binding */ PageBackButton)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100vw;
  height: 100vh;
  background: url(/images/login_bg.jpg) no-repeat 50% 50%;
  background-size: auto 130%;
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: block;
    content: '';
  }
`;
const SignupFormBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 10;
  -webkit-transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  dl {
    margin-bottom: 21px;
  }
`;
const PageTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].h1`
  margin-bottom: 60px;
  font-size: 2.8rem;
  font-weight: bold;
  color: white;
`;
const PageBackButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  position: absolute;
  z-index: 15;
  top: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 6px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;