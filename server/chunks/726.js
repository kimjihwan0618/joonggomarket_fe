"use strict";
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 3726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useMutationLoginUser)
/* harmony export */ });
/* unused harmony export LOGIN_USER */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9316);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_commons_stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3600);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__, src_commons_stores__WEBPACK_IMPORTED_MODULE_4__]);
([src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__, src_commons_stores__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const LOGIN_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
const useMutationLoginUser = ()=>{
    const { moveToPage  } = (0,src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__/* .useMoveToPage */ .G)();
    const [accessToken1, setAccessToken] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(src_commons_stores__WEBPACK_IMPORTED_MODULE_4__/* .accessTokenState */ .LR);
    const [vistedPage, setVisitedPage] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(src_commons_stores__WEBPACK_IMPORTED_MODULE_4__/* .vistedPageState */ .uV);
    const [loginUserMutation, { data  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation)(LOGIN_USER);
    const loginUser = async (props)=>{
        const { email , password  } = props;
        try {
            var ref;
            const result = await loginUserMutation({
                variables: {
                    email,
                    password
                }
            });
            const accessToken = result === null || result === void 0 ? void 0 : (ref = result.data) === null || ref === void 0 ? void 0 : ref.loginUser.accessToken;
            if (accessToken === undefined) {
                antd__WEBPACK_IMPORTED_MODULE_1__.Modal.error({
                    content: '로그인에 실패했습니다!. 다시 시도해 주세요!'
                });
                return false;
            }
            setAccessToken(accessToken);
            if (props.pageMoveFlag) !vistedPage ? moveToPage('/')() : moveToPage(vistedPage)();
            return true;
        } catch (error) {
            if (error instanceof Error) antd__WEBPACK_IMPORTED_MODULE_1__.Modal.error({
                content: error.message
            });
        }
    };
    return {
        loginUser,
        data
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;