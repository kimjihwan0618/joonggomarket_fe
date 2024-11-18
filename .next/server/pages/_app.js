"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_commons_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9928);
/* harmony import */ var src_commons_styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3139);
/* harmony import */ var src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9500);
/* harmony import */ var src_components_commons_layout_Layout_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9474);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_commons_apollo__WEBPACK_IMPORTED_MODULE_1__, src_commons_styles_global__WEBPACK_IMPORTED_MODULE_2__, _emotion_react__WEBPACK_IMPORTED_MODULE_3__, src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_4__, src_components_commons_layout_Layout_index__WEBPACK_IMPORTED_MODULE_5__]);
([_src_components_commons_apollo__WEBPACK_IMPORTED_MODULE_1__, src_commons_styles_global__WEBPACK_IMPORTED_MODULE_2__, _emotion_react__WEBPACK_IMPORTED_MODULE_3__, src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_4__, src_components_commons_layout_Layout_index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function MyApp({ Component  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recoil__WEBPACK_IMPORTED_MODULE_6__.RecoilRoot, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_commons_apollo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
                theme: src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.Global, {
                        styles: src_commons_styles_global__WEBPACK_IMPORTED_MODULE_2__/* .globalStyles */ .W
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_Layout_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {})
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ globalStyles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3139);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9500);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_0__, _theme__WEBPACK_IMPORTED_MODULE_1__]);
([_emotion_react__WEBPACK_IMPORTED_MODULE_0__, _theme__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const globalStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background: none;
    list-style: none;
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'NotoSansKR';
    color: #000;
  }
  input[readonly] {
    background: ${_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.gray06 */ .Z.colors.gray06};
  }
  /* 전역스타일 초기화로 ant modal 스타일 조정 */
  .ant-modal-root * {
    border: inherit;
    outline: inherit;
    list-style: inherit;
    font-size: inherit;
    font-family: inherit;
    color: currentColor;
    box-sizing: inherit;
  }
  .ant-btn-primary {
    color: white;
  }
  /* 전역스타일 초기화로 ant modal 스타일 조정 */

  /* 전체 스크롤바 */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  /* 스크롤바 트랙 */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* 스크롤바 핸들 */
  ::-webkit-scrollbar-thumb {
    background: ${_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.gray03 */ .Z.colors.gray03};
    border-radius: 10px;
  }

  main {
    width: 70%;
    margin: 80px auto 60px;
    min-width: 920px;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('/fonts/NotoSansKR-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('/fonts/NotoSansKR-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('/fonts/NotoSansKR-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('/fonts/NotoSansKR-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9928:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ApolloSetting)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_upload_client_createUploadLink_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3302);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_commons_stores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3600);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4394);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_lib_getAccessToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apollo_upload_client_createUploadLink_mjs__WEBPACK_IMPORTED_MODULE_2__, src_commons_stores__WEBPACK_IMPORTED_MODULE_5__, src_lib_getAccessToken__WEBPACK_IMPORTED_MODULE_7__]);
([apollo_upload_client_createUploadLink_mjs__WEBPACK_IMPORTED_MODULE_2__, src_commons_stores__WEBPACK_IMPORTED_MODULE_5__, src_lib_getAccessToken__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const GLOBAL_STATE = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache();
function ApolloSetting(props) {
    const [accessToken, setAccessToken] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(src_commons_stores__WEBPACK_IMPORTED_MODULE_5__/* .accessTokenState */ .LR);
    const refreshToken = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValueLoadable)(src_commons_stores__WEBPACK_IMPORTED_MODULE_5__/* .restoreAccessTokenLoadable */ .JE);
    const uploadLink = (0,apollo_upload_client_createUploadLink_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])({
        uri: "https://kimjihodo.synology.me:3459/graphql",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Apollo-Require-Preflight': 'true'
        },
        credentials: 'include'
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        void refreshToken.toPromise().then((newAccessToken)=>{
            setAccessToken(newAccessToken !== null && newAccessToken !== void 0 ? newAccessToken : '');
        });
    }, []);
    const errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_6__.onError)(({ graphQLErrors , operation , forward  })=>{
        // 1. 에러를 캐치
        if (typeof graphQLErrors !== 'undefined') {
            for (const err of graphQLErrors){
                var ref;
                // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
                if ((err === null || err === void 0 ? void 0 : (ref = err.extensions) === null || ref === void 0 ? void 0 : ref.code) === 'UNAUTHENTICATED') {
                    return (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.fromPromise)(// 2. refreshToken으로 accessToken을 재발급 받기
                    (0,src_lib_getAccessToken__WEBPACK_IMPORTED_MODULE_7__/* .getAccessToken */ .h)().then((newAccessToken)=>{
                        setAccessToken(newAccessToken !== null && newAccessToken !== void 0 ? newAccessToken : '');
                        // 3. 재발급 받은 accessToken으로 방급 실패한 쿼리 재요청하기
                        operation.setContext({
                            headers: {
                                ...operation.getContext().headers,
                                Authorization: `Bearer ${newAccessToken}`
                            }
                        });
                    })).flatMap(()=>forward(operation)
                    ) // 3-3. 방금 수정한 쿼리 재요청하기
                    ;
                }
            }
        }
    });
    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
        link: _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloLink.from([
            errorLink,
            uploadLink
        ]),
        cache: GLOBAL_STATE
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {
        client: client,
        children: props.children
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useMutationCreatePointTransactionOfLoading)
/* harmony export */ });
/* unused harmony export CREATE_POINT_TRANSACTION_OF_LOADING */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9925);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _quires_user_useQueryFetchUserLoggedIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3174);
/* harmony import */ var _quires_usedItem_mypage_useQueryFetchPointTransactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(475);
/* harmony import */ var _quires_usedItem_mypage_useQueryFetchPointTransactionsOfLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8767);






const CREATE_POINT_TRANSACTION_OF_LOADING = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
    }
  }
`;
const useMutationCreatePointTransactionOfLoading = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [createPointTransactionOfLoadingMutation, { loading  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation)(CREATE_POINT_TRANSACTION_OF_LOADING);
    const createPointTransactionOfLoading = async (impUid)=>{
        try {
            const result = await createPointTransactionOfLoadingMutation({
                variables: {
                    impUid
                },
                refetchQueries: [
                    {
                        query: _quires_user_useQueryFetchUserLoggedIn__WEBPACK_IMPORTED_MODULE_3__/* .FETCH_USER_LOGGEDIN */ .v
                    },
                    {
                        query: _quires_usedItem_mypage_useQueryFetchPointTransactions__WEBPACK_IMPORTED_MODULE_4__/* .FETCH_POINT_TRANSACTIONS */ .T
                    },
                    {
                        query: _quires_usedItem_mypage_useQueryFetchPointTransactionsOfLoading__WEBPACK_IMPORTED_MODULE_5__/* .FETCH_POINT_TRANSACTIONS_OF_LOADING */ .E
                    }, 
                ]
            });
            antd__WEBPACK_IMPORTED_MODULE_1__.Modal.success({
                content: `${new Intl.NumberFormat('en-US').format(result === null || result === void 0 ? void 0 : result.data.createPointTransactionOfLoading.amount)}원 포인트 충전이 완료되었습니다.`
            });
        } catch (error) {
            if (error instanceof Error) antd__WEBPACK_IMPORTED_MODULE_1__.Modal.error({
                content: error.message
            });
        }
    };
    return {
        createPointTransactionOfLoading,
        loading
    };
};


/***/ }),

/***/ 1722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useMutationLogoutUser)
/* harmony export */ });
/* unused harmony export USER_LOGOUT */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const USER_LOGOUT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation {
    logoutUser
  }
`;
const useMutationLogoutUser = ()=>{
    const [logoutUser] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation)(USER_LOGOUT);
    return {
        logoutUser
    };
};


/***/ }),

/***/ 475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ FETCH_POINT_TRANSACTIONS),
/* harmony export */   "f": () => (/* binding */ useQueryFetchPointTransactions)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const FETCH_POINT_TRANSACTIONS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      createdAt
      status
      amount
      balance
    }
  }
`;
const useQueryFetchPointTransactions = ()=>{
    const result = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(FETCH_POINT_TRANSACTIONS);
    return result;
};


/***/ }),

/***/ 8767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ FETCH_POINT_TRANSACTIONS_OF_LOADING),
/* harmony export */   "X": () => (/* binding */ useQueryFetchPointTransactionsOfLoading)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const FETCH_POINT_TRANSACTIONS_OF_LOADING = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      createdAt
      impUid
      amount
      balance
    }
  }
`;
const useQueryFetchPointTransactionsOfLoading = ()=>{
    const result = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(FETCH_POINT_TRANSACTIONS_OF_LOADING);
    return result;
};


/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ FETCH_USER_LOGGEDIN),
/* harmony export */   "l": () => (/* binding */ useQueryFetchUserLoggedIn)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const FETCH_USER_LOGGEDIN = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
      }
    }
  }
`;
const useQueryFetchUserLoggedIn = ()=>{
    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(FETCH_USER_LOGGEDIN);
    return {
        data
    };
};


/***/ }),

/***/ 9474:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_commons_layout_header_Header_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7575);
/* harmony import */ var src_components_commons_layout_carousel_Carousel_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6072);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9925);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_commons_layout_header_Header_index__WEBPACK_IMPORTED_MODULE_1__, src_components_commons_layout_carousel_Carousel_index__WEBPACK_IMPORTED_MODULE_2__]);
([src_components_commons_layout_header_Header_index__WEBPACK_IMPORTED_MODULE_1__, src_components_commons_layout_carousel_Carousel_index__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const HIDDEN_LAYOUTS = [
    '/login',
    '/signup'
];
function Layout(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !HIDDEN_LAYOUTS.includes(router.pathname) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_header_Header_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            !HIDDEN_LAYOUTS.includes(router.pathname) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_carousel_Carousel_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            !HIDDEN_LAYOUTS.includes(router.pathname) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    " ",
                    props.children
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: props.children
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SimpleSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_commons_layout_carousel_Carousel_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2481);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_commons_layout_carousel_Carousel_styles__WEBPACK_IMPORTED_MODULE_3__]);
src_components_commons_layout_carousel_Carousel_styles__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const items = [
    {
        title: 'CAROUSEL DESIGN1',
        description: '줄바꿈 1\n줄바꿈 2',
        src: `/images/banner01.png`
    },
    {
        title: 'CAROUSEL DESIGN2',
        description: '줄바꿈 1\n줄바꿈 2',
        src: `/images/banner02.png`
    },
    {
        title: 'CAROUSEL DESIGN3',
        description: '줄바꿈 1\n줄바꿈 2',
        src: `/images/banner03.png`
    }, 
];
function SimpleSlider() {
    const handleBeforeChange = (oldIndex, newIndex)=>{
    // console.log(`슬라이드가 변경됩니다: ${oldIndex} -> ${newIndex}`)
    };
    const SETTINGS = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: handleBeforeChange
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_carousel_Carousel_styles__WEBPACK_IMPORTED_MODULE_3__/* .Wrapper */ .im, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_carousel_Carousel_styles__WEBPACK_IMPORTED_MODULE_3__/* .Carousel */ .lr, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                ...SETTINGS,
                children: items.map((obj, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_carousel_Carousel_styles__WEBPACK_IMPORTED_MODULE_3__/* .ContentWrapper */ .vs, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                unoptimized: true,
                                src: obj.src,
                                alt: "Banner Image",
                                layout: "fill",
                                objectFit: 'cover'
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_carousel_Carousel_styles__WEBPACK_IMPORTED_MODULE_3__/* .ContentInner */ .hm, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_carousel_Carousel_styles__WEBPACK_IMPORTED_MODULE_3__/* .ContentTitle */ .wW, {
                                        children: obj.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_carousel_Carousel_styles__WEBPACK_IMPORTED_MODULE_3__/* .ContentDescription */ .Te, {
                                        children: obj.description
                                    })
                                ]
                            })
                        ]
                    }, idx)
                )
            })
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2481:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "lr": () => (/* binding */ Carousel),
/* harmony export */   "vs": () => (/* binding */ ContentWrapper),
/* harmony export */   "hm": () => (/* binding */ ContentInner),
/* harmony export */   "wW": () => (/* binding */ ContentTitle),
/* harmony export */   "Te": () => (/* binding */ ContentDescription)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: 400px;
  margin-top: 70px;
`;
const Carousel = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  margin: 0 auto;
  p,
  h3 {
    color: white;
  }
  .slick-prev {
    left: 18%; /* 좌측 위치 조정 */
    z-index: 1; /* 버튼이 슬라이드 위에 표시되도록 설정 */
    width: 48px;
    height: 48px;
  }

  .slick-next {
    right: 18%; /* 우측 위치 조정 */
    z-index: 1; /* 버튼이 슬라이드 위에 표시되도록 설정 */
  }
  .slick-next:before,
  .slick-prev:before {
    font-size: 48px;
    color: white;
  }
  .slick-dots {
    bottom: 40px;
  }
  .slick-dots button {
    font-size: 0; /* 버튼 텍스트 제거 */
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 8px;
    height: 8px;
    padding: 0;
    border: 1px solid white;
    cursor: pointer;
    outline: none;
  }

  .slick-dots .slick-active button {
    background: white; /* 활성화된 동그라미 버튼 색상 */
  }
`;
const ContentWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden; /* 이미지가 컨테이너를 벗어나지 않도록 설정 */
`;
const ContentInner = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: 100%;
  width: 70%;
  min-width: 920px;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
const ContentTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].h3`
  font-size: 4.8rem;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: center;
`;
const ContentDescription = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  white-space: pre-wrap;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7995);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9316);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9925);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _userLoggedIn_UserLoggedIn_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2558);
/* harmony import */ var _userLoggedIn_PointModal_PointModal_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6420);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__, _hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_5__, _userLoggedIn_UserLoggedIn_index__WEBPACK_IMPORTED_MODULE_7__, _userLoggedIn_PointModal_PointModal_index__WEBPACK_IMPORTED_MODULE_8__]);
([src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__, _hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_5__, _userLoggedIn_UserLoggedIn_index__WEBPACK_IMPORTED_MODULE_7__, _userLoggedIn_PointModal_PointModal_index__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const menus = [
    {
        name: '자유게시판',
        path: '/boards'
    },
    {
        name: '중고마켓',
        path: '/markets'
    }, 
];
function Header() {
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { 0: pointModalisOpen , 1: setPointModalisOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: basePath , 1: setBasePath  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
    const { moveToPage  } = (0,_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_5__/* .useMoveToPage */ .G)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setBasePath(pathname.split('/')[1]);
    }, [
        pathname
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_userLoggedIn_PointModal_PointModal_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                isOpen: pointModalisOpen,
                setIsOpen: setPointModalisOpen
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h4, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .HeaderInner */ .AB, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .LogoNavigationWrapper */ .rl, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    href: "/boards",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .Logo */ .TR, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            unoptimized: true,
                                            src: `/images/logo_dark.png`,
                                            alt: "joongomarket 로고",
                                            width: 155,
                                            height: 13
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .W_, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .MenuList */ .qy, {
                                        children: menus.map((menu, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .Menu */ .v2, {
                                                onClick: moveToPage(menu.path),
                                                "data-active": basePath === menu.path.replace('/', ''),
                                                children: menu.name
                                            })
                                        )
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_userLoggedIn_UserLoggedIn_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            setPointModalisOpen: setPointModalisOpen
                        })
                    ]
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h4": () => (/* binding */ Header),
/* harmony export */   "AB": () => (/* binding */ HeaderInner),
/* harmony export */   "TR": () => (/* binding */ Logo),
/* harmony export */   "W4": () => (/* binding */ ButtonWrapper),
/* harmony export */   "rl": () => (/* binding */ LogoNavigationWrapper),
/* harmony export */   "W_": () => (/* binding */ Navigation),
/* harmony export */   "qy": () => (/* binding */ MenuList),
/* harmony export */   "v2": () => (/* binding */ Menu),
/* harmony export */   "WV": () => (/* binding */ ProfileBoxWrapper),
/* harmony export */   "BF": () => (/* binding */ ProfileButton),
/* harmony export */   "PX": () => (/* binding */ ProfileBox),
/* harmony export */   "OZ": () => (/* binding */ ProfileInfo),
/* harmony export */   "R2": () => (/* binding */ ImgSettingButton),
/* harmony export */   "OP": () => (/* binding */ TextWrapper),
/* harmony export */   "VG": () => (/* binding */ Name),
/* harmony export */   "E9": () => (/* binding */ Point),
/* harmony export */   "oc": () => (/* binding */ ProfileButtonWrapper),
/* harmony export */   "hb": () => (/* binding */ AddPointButton),
/* harmony export */   "sv": () => (/* binding */ LogoutButton)
/* harmony export */ });
/* unused harmony export MypageButton */
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3139);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_1__]);
([_emotion_react__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const ProfileButtonStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  height: 50px;
  line-height: 64px;
  padding: 10px 36px;
  border-bottom: 1px solid rgba(239, 239, 239, 1);
  font-weight: bold;
  font-size: 1.4rem;
  display: flex;
  cursor: pointer;
  text-indent: 12px;
  align-items: center;
  &:last-of-type {
    border-bottom: 0px;
  }
`;
const Header = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].header`
  background: rgba(255, 255, 255, 0.95);
  height: 70px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
`;
const HeaderInner = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 70%;
  min-width: 920px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].h1`
  cursor: pointer;
  margin-right: 36px;
`;
const ButtonWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  align-items: center;
  button:first-of-type {
    margin-right: 16px;
  }
`;
const LogoNavigationWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  align-items: center;
`;
const Navigation = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].nav``;
const MenuList = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].ul`
  display: flex;
  align-items: center;
`;
const Menu = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].li`
  font-size: 1.6rem;
  font-weight: ${(props)=>props['data-active'] ? 700 : 500
};
  color: ${(props)=>props['data-active'] ? props.theme.colors.gray01 : props.theme.colors.gray04
};
  margin-right: 16px;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0px;
  }
`;
const ProfileBoxWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
`;
const ProfileButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  display: flex;
  align-items: center;
  width: 112px;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background: ${({ theme  })=>theme.colors.gray06
};
  }
  & > span {
    border-radius: 100px;
  }
`;
const ProfileBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  display: ${(props)=>!props['data-hidden'] ? 'none' : 'block'
};
  right: 0;
  bottom: -300%;
  border-radius: 16px;
  background: white;
  width: 258px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
const ProfileInfo = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  align-items: center;
  padding: 20px 26px;
  border-bottom: 1px solid black;
  cursor: pointer;
  &:hover {
    background: ${({ theme  })=>theme.colors.gray06
};
  }
`;
const ImgSettingButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  position: relative;
  width: 48px;
  height: 48px;
  margin-right: 12px;
  & > span {
    border-radius: 100px;
  }
`;
const TextWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].dl``;
const Name = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].dt`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 4px;
`;
const Point = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].dd`
  font-size: 1.6rem;
  font-weight: bold;
`;
const ProfileButtonWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].ul`
  display: flex;
  flex-direction: column;
`;
const AddPointButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  ${ProfileButtonStyles}
  color: ${({ theme  })=>theme.colors.gray04
};
  &:hover {
    background: ${({ theme  })=>theme.colors.gray06
};
  }
`;
const LogoutButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  ${ProfileButtonStyles}
  color: ${({ theme  })=>theme.colors.gray04
};
  &:hover {
    background: ${({ theme  })=>theme.colors.gray06
};
  }
`;
const MypageButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  ${ProfileButtonStyles}
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ButtonsUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9500);
/* harmony import */ var src_components_commons_buttons_02_Button02_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6882);
/* harmony import */ var src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9316);
/* harmony import */ var src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7995);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__, src_components_commons_buttons_02_Button02_index__WEBPACK_IMPORTED_MODULE_2__, src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_3__, src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_4__]);
([src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__, src_components_commons_buttons_02_Button02_index__WEBPACK_IMPORTED_MODULE_2__, src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_3__, src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ButtonsUI() {
    const { moveToPage  } = (0,src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_3__/* .useMoveToPage */ .G)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_4__/* .ButtonWrapper */ .W4, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_buttons_02_Button02_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                onClick: moveToPage('/login'),
                name: '로그인'
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_buttons_02_Button02_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                onClick: moveToPage('/signup'),
                background: src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.main */ .Z.colors.main,
                name: '회원가입'
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6420:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PointModalUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PointModal_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2053);
/* harmony import */ var src_components_commons_buttons_02_Button02_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6882);
/* harmony import */ var src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9500);
/* harmony import */ var src_components_commons_hooks_mutations_usedItem_useMutationCreatePointTransactionOfLoading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8113);
/* harmony import */ var src_components_commons_hooks_quires_user_useQueryFetchUserLoggedIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__, src_components_commons_buttons_02_Button02_index__WEBPACK_IMPORTED_MODULE_5__, src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_6__]);
([_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__, src_components_commons_buttons_02_Button02_index__WEBPACK_IMPORTED_MODULE_5__, src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function PointModalUI(props) {
    const { 0: selectedPoint , 1: setSelectedPoint  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
    const { createPointTransactionOfLoading , loading  } = (0,src_components_commons_hooks_mutations_usedItem_useMutationCreatePointTransactionOfLoading__WEBPACK_IMPORTED_MODULE_7__/* .useMutationCreatePointTransactionOfLoading */ .x)();
    const { data  } = (0,src_components_commons_hooks_quires_user_useQueryFetchUserLoggedIn__WEBPACK_IMPORTED_MODULE_8__/* .useQueryFetchUserLoggedIn */ .l)();
    const onChangePoint = (event)=>{
        setSelectedPoint(event.target.value);
    };
    const onClickAddPoint = ()=>{
        const IMP = window.IMP;
        IMP.init("imp31236121");
        IMP.request_pay({
            pg: 'kakaopay',
            pay_method: 'card',
            merchant_uid: `payment-${new Date().getTime()}`,
            name: '테스트 결제입니다. 실제 돈이 나가지 않아요!',
            amount: selectedPoint,
            buyer_email: data.fetchUserLoggedIn.email,
            buyer_name: data.fetchUserLoggedIn.name,
            buyer_tel: '010-5838-5146',
            buyer_addr: '경기도 용인시 기흥구',
            buyer_postcode: '01181',
            m_redirect_url: "https://joonggomarket.site/markets"
        }, async function(response) {
            const { success , imp_uid  } = response;
            console.log(response);
            if (success) {
                await createPointTransactionOfLoading(imp_uid);
            } else {
                antd__WEBPACK_IMPORTED_MODULE_1__.Modal.error({
                    content: '카카오페이 결제를 정상적으로 처리하지 못하였습니다.'
                });
            }
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "https://cdn.iamport.kr/v1/iamport.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Modal, {
                open: props.isOpen,
                // onOk={onClickSellingOk}
                // okButtonProps={{ disabled: loading }}
                confirmLoading: loading,
                onCancel: ()=>props.setIsOpen(false)
                ,
                onClose: ()=>props.setIsOpen(false)
                ,
                footer: null,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .Content */ .VY, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .ContentInner */ .hm, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                unoptimized: true,
                                src: `/images/ic_point_add.png`,
                                width: 79.07,
                                height: 54
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .Title */ .Dx, {
                                children: "충전하실 금액을 선택해주세요!"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .PointSelect */ .p1, {
                                onChange: onChangePoint,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .Point */ .E9, {
                                        value: '',
                                        children: "포인트 선택"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .Point */ .E9, {
                                        value: 100,
                                        children: "100"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .Point */ .E9, {
                                        value: 500,
                                        children: "500"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .Point */ .E9, {
                                        value: 2000,
                                        children: "2,000"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .Point */ .E9, {
                                        value: 5000,
                                        children: "5,000"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .Point */ .E9, {
                                        value: 10000,
                                        children: "10,000"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .Point */ .E9, {
                                        value: 30000,
                                        children: "30,000"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .Point */ .E9, {
                                        value: 50000,
                                        children: "50,000"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .Point */ .E9, {
                                        value: 100000,
                                        children: "100,000"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PointModal_styles__WEBPACK_IMPORTED_MODULE_4__/* .Bottom */ .z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_buttons_02_Button02_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    fullWidth: true,
                                    disabled: selectedPoint === '',
                                    onClick: onClickAddPoint,
                                    background: src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].colors.main */ .Z.colors.main,
                                    name: '충전하기'
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VY": () => (/* binding */ Content),
/* harmony export */   "hm": () => (/* binding */ ContentInner),
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "z": () => (/* binding */ Bottom),
/* harmony export */   "p1": () => (/* binding */ PointSelect),
/* harmony export */   "E9": () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const Content = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding-top: 16px;
`;
const ContentInner = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].h3`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  margin: 40px 0;
`;
const Bottom = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  margin-top: 40px;
`;
const PointSelect = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].select`
  width: 100%;
  height: 52px;
  border-bottom: 2px solid black;
`;
const Point = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].option``;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5649:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProfileUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7995);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var src_components_commons_hooks_quires_user_useQueryFetchUserLoggedIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3174);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9925);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9316);
/* harmony import */ var src_components_commons_hooks_mutations_user_useMutationLogout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1722);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__, src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_5__]);
([src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__, src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function ProfileUI(props) {
    var ref5, ref1, ref2, ref3, ref4;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { data  } = (0,src_components_commons_hooks_quires_user_useQueryFetchUserLoggedIn__WEBPACK_IMPORTED_MODULE_3__/* .useQueryFetchUserLoggedIn */ .l)();
    const { moveToPage  } = (0,src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_5__/* .useMoveToPage */ .G)();
    const { logoutUser  } = (0,src_components_commons_hooks_mutations_user_useMutationLogout__WEBPACK_IMPORTED_MODULE_6__/* .useMutationLogoutUser */ .f)();
    const onClickProfileButton = ()=>{
        props.setIsHidden((prev)=>!prev
        );
    };
    const onClickLogout = async ()=>{
        try {
            var ref;
            const result = await logoutUser();
            if (result === null || result === void 0 ? void 0 : (ref = result.data) === null || ref === void 0 ? void 0 : ref.logoutUser) {
                router.reload();
            }
        } catch (error) {
            if (error instanceof Error) antd__WEBPACK_IMPORTED_MODULE_7__.Modal.error({
                content: error.message
            });
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .ProfileBoxWrapper */ .WV, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .ProfileButton */ .BF, {
                ref: props.profileButtonRef,
                onClick: onClickProfileButton,
                children: [
                    (data === null || data === void 0 ? void 0 : (ref5 = data.fetchUserLoggedIn) === null || ref5 === void 0 ? void 0 : ref5.picture) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        src: `${"https://s3.ap-northeast-2.amazonaws.com/joonggomarket.files"}${data === null || data === void 0 ? void 0 : (ref1 = data.fetchUserLoggedIn) === null || ref1 === void 0 ? void 0 : ref1.picture}`,
                        width: 48,
                        height: 48,
                        alt: "프로필 이미지"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        unoptimized: true,
                        src: `/images/ic_profile2.png`,
                        width: 48,
                        height: 48,
                        alt: "프로필 이미지"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        unoptimized: true,
                        src: `/images/ic_more.png`,
                        alt: "아래방향 화살표",
                        width: 24,
                        height: 24
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .ProfileBox */ .PX, {
                "data-hidden": props.isHidden,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .ProfileInfo */ .OZ, {
                        onClick: moveToPage('/mypage/market'),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .ImgSettingButton */ .R2, {
                                children: (data === null || data === void 0 ? void 0 : (ref2 = data.fetchUserLoggedIn) === null || ref2 === void 0 ? void 0 : ref2.picture) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    src: `${"https://s3.ap-northeast-2.amazonaws.com/joonggomarket.files"}${data === null || data === void 0 ? void 0 : (ref3 = data.fetchUserLoggedIn) === null || ref3 === void 0 ? void 0 : ref3.picture}`,
                                    width: 40,
                                    height: 40,
                                    alt: "프로필 이미지"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    unoptimized: true,
                                    src: `/images/ic_profile2.png`,
                                    width: 40,
                                    height: 40,
                                    alt: "프로필 이미지"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .TextWrapper */ .OP, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .Name */ .VG, {
                                        children: data === null || data === void 0 ? void 0 : data.fetchUserLoggedIn.name
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .Point */ .E9, {
                                        children: [
                                            new Intl.NumberFormat('en-US').format((ref4 = data === null || data === void 0 ? void 0 : data.fetchUserLoggedIn.userPoint) === null || ref4 === void 0 ? void 0 : ref4.amount),
                                            "P"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .ProfileButtonWrapper */ .oc, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .AddPointButton */ .hb, {
                                onClick: ()=>props.setPointModalisOpen(true)
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        unoptimized: true,
                                        src: `/images/ic_savings.png`,
                                        width: 24,
                                        height: 24
                                    }),
                                    " 충전하기"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_commons_layout_header_Header_styles__WEBPACK_IMPORTED_MODULE_1__/* .LogoutButton */ .sv, {
                                onClick: onClickLogout,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        unoptimized: true,
                                        src: `/images/ic_logout.png`,
                                        width: 24,
                                        height: 24
                                    }),
                                    "로그아웃"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UserLoggedIn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_commons_stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3600);
/* harmony import */ var _Profile_Profile_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5649);
/* harmony import */ var _Buttons_Buttons_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8963);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_commons_stores__WEBPACK_IMPORTED_MODULE_3__, _Profile_Profile_index__WEBPACK_IMPORTED_MODULE_4__, _Buttons_Buttons_index__WEBPACK_IMPORTED_MODULE_5__]);
([src_commons_stores__WEBPACK_IMPORTED_MODULE_3__, _Profile_Profile_index__WEBPACK_IMPORTED_MODULE_4__, _Buttons_Buttons_index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function UserLoggedIn(props) {
    const [accessToken, setAccessToken] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(src_commons_stores__WEBPACK_IMPORTED_MODULE_3__/* .accessTokenState */ .LR);
    const { 0: isHidden , 1: setIsHidden  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const profileButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleClickOutside = (event)=>{
        if (profileButtonRef.current && !profileButtonRef.current.contains(event.target)) {
            setIsHidden(false);
        }
    };
    const handleKeyDown = (event)=>{
        if (event.key === 'Escape') {
            setIsHidden(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return ()=>{
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: accessToken ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Profile_Profile_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            profileButtonRef: profileButtonRef,
            isHidden: isHidden,
            setIsHidden: setIsHidden,
            setPointModalisOpen: props.setPointModalisOpen
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons_Buttons_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 4394:
/***/ ((module) => {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9925:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 3139:
/***/ ((module) => {

module.exports = import("@emotion/react");;

/***/ }),

/***/ 4115:
/***/ ((module) => {

module.exports = import("@emotion/styled");;

/***/ }),

/***/ 3302:
/***/ ((module) => {

module.exports = import("apollo-upload-client/createUploadLink.mjs");;

/***/ }),

/***/ 3690:
/***/ ((module) => {

module.exports = import("graphql-request");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,316,882], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();