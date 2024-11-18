"use strict";
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 9500:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const theme = {
    colors: {
        main: '#ffd600',
        gray01: '#333333',
        gray02: '#4f4f4f',
        gray03: '#828282',
        gray04: '#bdbdbd',
        gray05: '#e0e0e0',
        gray06: '#f2f2f2',
        gray07: '#f5f5f5',
        dark01: '#161616'
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1495:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button01)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button01_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4663);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9500);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Button01_styles__WEBPACK_IMPORTED_MODULE_1__, src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_3__]);
([_Button01_styles__WEBPACK_IMPORTED_MODULE_1__, src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function Button01(props) {
    var _disabled, _background, _width, _color;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Button01_styles__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
        onClick: props.onClick,
        disabled: (_disabled = props.disabled) !== null && _disabled !== void 0 ? _disabled : false,
        "data-background": (_background = props.background) !== null && _background !== void 0 ? _background : 'white',
        "data-width": (_width = props.width) !== null && _width !== void 0 ? _width : '01',
        children: [
            props.iconSrc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                unoptimized: true,
                src: props.iconSrc,
                width: 18,
                height: 18
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button01_styles__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .x, {
                "data-disabled": props.disabled,
                "data-color": (_color = props.color) !== null && _color !== void 0 ? _color : src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.dark01 */ .Z.colors.dark01,
                children: props.name
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4663:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button),
/* harmony export */   "x": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const width = {
    '01': '14px 16px',
    '02': '14px 32px',
    '03': '14px 48px',
    '04': '14px 64px'
};
const Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  padding: ${(props)=>width[props['data-width']]
};
  background: ${(props)=>props.disabled ? props.theme.colors.gray05 : props['data-background']
};
  border: ${(props)=>props['data-background'] === 'white' && '1px solid rgba(189, 189, 189, 1)'
};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  cursor: ${(props)=>!props.disabled && 'pointer'
};
  &:hover {
    opacity: ${(props)=>!props.disabled && '.65'
};
  }
  & > span {
    margin-right: 8px !important;
  }
`;
const Text = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-weight: 500;
  color: ${(props)=>props['data-disabled'] ? props.theme.colors.gray03 : props['data-color']
};
  /* color: ${(props)=>props['data-color']
}; */
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;