"use strict";
exports.id = 533;
exports.ids = [533];
exports.modules = {

/***/ 3533:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputWithError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputWithError_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1802);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_InputWithError_styles__WEBPACK_IMPORTED_MODULE_1__]);
_InputWithError_styles__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function InputWithError(props) {
    var _width, _color, _type, _disabled, _readOnly, _placeholder;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputWithError_styles__WEBPACK_IMPORTED_MODULE_1__/* .Wrapper */ .im, {
        "data-width": (_width = props.width) !== null && _width !== void 0 ? _width : '100%',
        children: [
            props.label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputWithError_styles__WEBPACK_IMPORTED_MODULE_1__/* .Label */ .__, {
                children: props.label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputWithError_styles__WEBPACK_IMPORTED_MODULE_1__/* .InputItem */ .O6, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputWithError_styles__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .II, {
                        // onChange={props.onChange}
                        color: (_color = props.color) !== null && _color !== void 0 ? _color : '#000',
                        ...props.register,
                        type: (_type = props.type) !== null && _type !== void 0 ? _type : 'text',
                        disabled: (_disabled = props.disabled) !== null && _disabled !== void 0 ? _disabled : false,
                        readOnly: (_readOnly = props.readOnly) !== null && _readOnly !== void 0 ? _readOnly : false,
                        style: props.style && props.style,
                        placeholder: (_placeholder = props.placeholder) !== null && _placeholder !== void 0 ? _placeholder : ''
                    }),
                    props.error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputWithError_styles__WEBPACK_IMPORTED_MODULE_1__/* .Error */ .jj, {
                        children: props.error
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1802:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "__": () => (/* binding */ Label),
/* harmony export */   "O6": () => (/* binding */ InputItem),
/* harmony export */   "II": () => (/* binding */ Input),
/* harmony export */   "jj": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].dl`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: ${(props)=>props['data-width']
};
`;
const Label = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].dt`
  font-size: 1.6rem;
  margin-bottom: 21px;
`;
const InputItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].dd`
  font-size: 1.6rem;
`;
const Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].input`
  border: 1px solid ${({ theme  })=>theme.colors.gray04
};
  color: ${(props)=>props.color
};
  padding: 14px 16px;
  font-size: 1.6rem;
  height: 52px;
  width: 100%;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: ${({ theme  })=>theme.colors.gray04
};
  }
`;
const Error = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  color: red;
  font-size: 1.6rem;
  margin-top: 4px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;