"use strict";
exports.id = 316;
exports.ids = [316];
exports.modules = {

/***/ 3600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LR": () => (/* binding */ accessTokenState),
/* harmony export */   "uV": () => (/* binding */ vistedPageState),
/* harmony export */   "JE": () => (/* binding */ restoreAccessTokenLoadable)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_lib_getAccessToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_lib_getAccessToken__WEBPACK_IMPORTED_MODULE_1__]);
src_lib_getAccessToken__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const accessTokenState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'accessTokenState',
    default: ''
});
const vistedPageState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'vistedPageState',
    default: ''
});
const restoreAccessTokenLoadable = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({
    key: 'restoreAccessTokenLoadable',
    get: async ()=>{
        const newAccessToken = await (0,src_lib_getAccessToken__WEBPACK_IMPORTED_MODULE_1__/* .getAccessToken */ .h)();
        return newAccessToken;
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useMoveToPage)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9925);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_commons_stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3600);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_commons_stores__WEBPACK_IMPORTED_MODULE_2__]);
src_commons_stores__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SKIP_PAGE_HISTORY = [
    '/login',
    '/signup'
];
const useMoveToPage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const [vistedPage, setVisitedPage] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(src_commons_stores__WEBPACK_IMPORTED_MODULE_2__/* .vistedPageState */ .uV);
    const [accessToken, setAccessToken] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(src_commons_stores__WEBPACK_IMPORTED_MODULE_2__/* .accessTokenState */ .LR);
    const moveToPage = (path)=>()=>{
            if (!SKIP_PAGE_HISTORY.includes(path)) {
                setVisitedPage(path);
            }
            void router.push(path);
        }
    ;
    const moveToBack = (path)=>()=>{
            if (!vistedPage) {
                setVisitedPage(path);
                void router.push(path);
            } else if (!accessToken) {
                window.history.go(-2);
            } else {
                window.history.go(-1);
            }
        }
    ;
    return {
        vistedPage,
        moveToPage,
        moveToBack
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6428:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ getAccessToken)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([graphql_request__WEBPACK_IMPORTED_MODULE_0__]);
graphql_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const RESTORE_ACCESS_TOKEN = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;
const getAccessToken = async ()=>{
    try {
        const graphQLClient = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient("https://kimjihodo.synology.me:3459/graphql", {
            credentials: 'include'
        });
        const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
        const newAccessToken = result.restoreAccessToken.accessToken;
        return newAccessToken;
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;