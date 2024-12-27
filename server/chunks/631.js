"use strict";
exports.id = 631;
exports.ids = [631];
exports.modules = {

/***/ 4349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMoveToPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9316);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_commons_stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3600);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useMoveToPage__WEBPACK_IMPORTED_MODULE_1__, src_commons_stores__WEBPACK_IMPORTED_MODULE_3__]);
([_useMoveToPage__WEBPACK_IMPORTED_MODULE_1__, src_commons_stores__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useAuth = ()=>{
    const { moveToPage  } = (0,_useMoveToPage__WEBPACK_IMPORTED_MODULE_1__/* .useMoveToPage */ .G)();
    const [accessToken, setAccessToken] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(src_commons_stores__WEBPACK_IMPORTED_MODULE_3__/* .accessTokenState */ .LR);
    const refreshToken = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValueLoadable)(src_commons_stores__WEBPACK_IMPORTED_MODULE_3__/* .restoreAccessTokenLoadable */ .JE);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        void refreshToken.toPromise().then((newAccessToken)=>{
            if (newAccessToken === undefined && !accessToken) {
                antd__WEBPACK_IMPORTED_MODULE_4__.Modal.warning({
                    content: '로그인후 이용 가능합니다!'
                });
                moveToPage(`/login`)();
            }
        });
    }, []);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useMutationUpdateUser)
/* harmony export */ });
/* unused harmony export UPDATE_USER */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _quires_user_useQueryFetchUserLoggedIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3174);



const UPDATE_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      name
      picture
    }
  }
`;
const useMutationUpdateUser = ()=>{
    const [updateUserMutation, { loading  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation)(UPDATE_USER);
    const updateUser = async (props)=>{
        try {
            const result = await updateUserMutation({
                variables: {
                    updateUserInput: {
                        picture: props.picture
                    }
                },
                update (cache, { data  }) {
                    if (!data) return; // 데이터가 없으면 아무 작업도 하지 않음
                    // 기존 캐시에서 fetchUserLoggedIn 데이터를 가져오기
                    const existingData = cache.readQuery({
                        query: _quires_user_useQueryFetchUserLoggedIn__WEBPACK_IMPORTED_MODULE_2__/* .FETCH_USER_LOGGEDIN */ .v
                    });
                    if (existingData === null || existingData === void 0 ? void 0 : existingData.fetchUserLoggedIn) {
                        cache.writeQuery({
                            query: _quires_user_useQueryFetchUserLoggedIn__WEBPACK_IMPORTED_MODULE_2__/* .FETCH_USER_LOGGEDIN */ .v,
                            data: {
                                fetchUserLoggedIn: {
                                    ...existingData.fetchUserLoggedIn,
                                    picture: data.updateUser.picture
                                }
                            }
                        });
                    }
                }
            });
        } catch (error) {
            if (error instanceof Error) antd__WEBPACK_IMPORTED_MODULE_1__.Modal.error({
                content: error.message
            });
        }
    };
    return {
        updateUser,
        loading
    };
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
    const { data , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(FETCH_USER_LOGGEDIN);
    return {
        data,
        loading
    };
};


/***/ }),

/***/ 5850:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MypageLayoutUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MypageLayout_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5973);
/* harmony import */ var _navigation_Navigation_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7148);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MypageLayout_styles__WEBPACK_IMPORTED_MODULE_1__, _navigation_Navigation_index__WEBPACK_IMPORTED_MODULE_2__]);
([_MypageLayout_styles__WEBPACK_IMPORTED_MODULE_1__, _navigation_Navigation_index__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function MypageLayoutUI(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_MypageLayout_styles__WEBPACK_IMPORTED_MODULE_1__/* .Wrapper */ .i, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navigation_Navigation_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                page: props.page
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MypageLayout_styles__WEBPACK_IMPORTED_MODULE_1__/* .MypageContentWrapper */ .q, {
                children: props.children
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5973:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ Wrapper),
/* harmony export */   "q": () => (/* binding */ MypageContentWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4115);
/* harmony import */ var src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9500);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled__WEBPACK_IMPORTED_MODULE_0__, src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__]);
([_emotion_styled__WEBPACK_IMPORTED_MODULE_0__, src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: space-between;
  ${src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.screen3 */ .Z.media.screen3} {
    flex-direction: column;
  }
`;
const MypageContentWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding-left: 40px;
  width: 100%;
  ${src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.screen3 */ .Z.media.screen3} {
    padding-left: 0px;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7148:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MypageNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9316);
/* harmony import */ var _Navigation_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7458);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var src_components_commons_hooks_quires_user_useQueryFetchUserLoggedIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3174);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_components_commons_hooks_mutations_file_useMutationUploadFile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9473);
/* harmony import */ var src_components_commons_hooks_mutations_user_useMutationUpdateUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5493);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_1__, _Navigation_styles__WEBPACK_IMPORTED_MODULE_2__]);
([src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_1__, _Navigation_styles__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const MAPAGE_SUB_PAGES = [
    {
        link: '/market',
        name: '내 장터',
        icon: '/ic_shopping_cart_02'
    },
    {
        link: '/point',
        name: '포인트 내역',
        icon: '/ic_savings_02'
    },
    {
        link: '/profile',
        name: '내 프로필',
        icon: '/ic_profile_02'
    }, 
];
function MypageNavigation(props) {
    var ref5, ref1, ref2;
    const { moveToPage  } = (0,src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_1__/* .useMoveToPage */ .G)();
    const fileRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const { uploadFile , loading: uploadFileLoading  } = (0,src_components_commons_hooks_mutations_file_useMutationUploadFile__WEBPACK_IMPORTED_MODULE_6__/* .useMutationUploadFile */ .sY)();
    const { data  } = (0,src_components_commons_hooks_quires_user_useQueryFetchUserLoggedIn__WEBPACK_IMPORTED_MODULE_4__/* .useQueryFetchUserLoggedIn */ .l)();
    const { updateUser , loading: updateUserLoading  } = (0,src_components_commons_hooks_mutations_user_useMutationUpdateUser__WEBPACK_IMPORTED_MODULE_7__/* .useMutationUpdateUser */ .x)();
    const onChangeFile = async (event)=>{
        var ref, ref3, ref4;
        const file = (ref = event.target.files) === null || ref === void 0 ? void 0 : ref[0];
        const result = await uploadFile({
            file
        });
        (result === null || result === void 0 ? void 0 : (ref3 = result.data) === null || ref3 === void 0 ? void 0 : ref3.uploadFile.url) && updateUser({
            picture: result === null || result === void 0 ? void 0 : (ref4 = result.data) === null || ref4 === void 0 ? void 0 : ref4.uploadFile.url
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__/* .Wrapper */ .im, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__/* .UploadFileHidden */ .Ww, {
                type: "file",
                ref: fileRef,
                onChange: onChangeFile
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__/* .PageTitle */ .V1, {
                children: "MYPAGE"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__/* .ProfileImageBox */ .Vy, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__/* .ImageBox */ .FS, {
                    children: uploadFileLoading || updateUserLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        unoptimized: true,
                        src: "/loading.gif",
                        width: 120,
                        height: 120
                    }) : (data === null || data === void 0 ? void 0 : (ref5 = data.fetchUserLoggedIn) === null || ref5 === void 0 ? void 0 : ref5.picture) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        unoptimized: true,
                        onClick: ()=>{
                            var ref;
                            return (ref = fileRef.current) === null || ref === void 0 ? void 0 : ref.click();
                        },
                        src: `${"https://s3.ap-northeast-2.amazonaws.com/joonggomarket.files"}${data === null || data === void 0 ? void 0 : (ref1 = data.fetchUserLoggedIn) === null || ref1 === void 0 ? void 0 : ref1.picture}`,
                        width: 120,
                        height: 120
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        unoptimized: true,
                        onClick: ()=>{
                            var ref;
                            return (ref = fileRef.current) === null || ref === void 0 ? void 0 : ref.click();
                        },
                        src: "/images/ic_profile.png",
                        width: 120,
                        height: 120
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__/* .InfoBox */ .vD, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__/* .Name */ .VG, {
                        children: data === null || data === void 0 ? void 0 : data.fetchUserLoggedIn.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__/* .PointText */ .oF, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                unoptimized: true,
                                src: "/images/ic_savings_02_on.png",
                                width: 24,
                                height: 24
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__/* .Point */ .E9, {
                                children: [
                                    new Intl.NumberFormat('en-US').format((ref2 = data === null || data === void 0 ? void 0 : data.fetchUserLoggedIn.userPoint) === null || ref2 === void 0 ? void 0 : ref2.amount),
                                    "원"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__/* .SubMenuList */ .Cv, {
                children: MAPAGE_SUB_PAGES.map((menu)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__/* .MenuItem */ .sN, {
                        "data-isactive": props.page === menu.link,
                        onClick: moveToPage(`/mypage${menu.link}`),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__/* .ImageWrapper */ .fb, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    unoptimized: true,
                                    src: props.page === menu.link ? `/images${menu.icon}_on.png` : `/images${menu.icon}.png`,
                                    width: 24,
                                    height: 24
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv, {
                                "data-active": props.page === menu.link,
                                children: menu.name
                            })
                        ]
                    })
                )
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7458:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "V1": () => (/* binding */ PageTitle),
/* harmony export */   "Vy": () => (/* binding */ ProfileImageBox),
/* harmony export */   "FS": () => (/* binding */ ImageBox),
/* harmony export */   "vD": () => (/* binding */ InfoBox),
/* harmony export */   "VG": () => (/* binding */ Name),
/* harmony export */   "oF": () => (/* binding */ PointText),
/* harmony export */   "E9": () => (/* binding */ Point),
/* harmony export */   "Cv": () => (/* binding */ SubMenuList),
/* harmony export */   "sN": () => (/* binding */ MenuItem),
/* harmony export */   "fb": () => (/* binding */ ImageWrapper),
/* harmony export */   "xv": () => (/* binding */ Text),
/* harmony export */   "Ww": () => (/* binding */ UploadFileHidden)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4115);
/* harmony import */ var src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9500);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled__WEBPACK_IMPORTED_MODULE_0__, src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__]);
([_emotion_styled__WEBPACK_IMPORTED_MODULE_0__, src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  flex-shrink: 0;
  padding-right: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid ${({ theme: theme1  })=>theme1.colors.gray06
};
  ${src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.screen3 */ .Z.media.screen3} {
    padding-right: 0px;
    border-right: none;
    margin-bottom: 40px;
  }
`;
const PageTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].h2`
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 40px;
  ${src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.screen3 */ .Z.media.screen3} {
    margin-bottom: 20px;
  }
  ${src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.screen3 */ .Z.media.screen3} {
    font-size: 3.6rem;
  }
`;
const ProfileImageBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 140px;
  height: 140px;
  text-align: center;
`;
const ImageBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  cursor: pointer;
  &:after {
    content: '';
    display: block;
    width: 28px;
    height: 28px;
    background: url(/images/ic_profile_img_setting_on.png) no-repeat 50% 50%;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  & > span {
    border-radius: 100px;
  }
`;
const InfoBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const Name = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].h4`
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 14px;
  text-align: center;
`;
const PointText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
`;
const Point = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  margin-left: 6px;
  font-weight: bold;
  font-size: 2rem;
  ${src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.screen3 */ .Z.media.screen3} {
    font-size: 2rem;
  }
`;
const SubMenuList = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].ul`
  margin-top: 60px;
  ${src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.screen3 */ .Z.media.screen3} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 40px;
  }
`;
const MenuItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].li`
  margin-bottom: 24px;
  cursor: pointer;
  display: flex;
  &:last-of-type {
    margin-bottom: 0px;
  }
  font-weight: ${(props)=>props['data-active'] && 'bold !important'
};
  ${src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.screen3 */ .Z.media.screen3} {
    margin-bottom: 0px;
    flex-direction: column;
    width: 33.33%;
    justify-content: center;
    align-items: center;
    /* padding-right: 6px;
    margin-right: 6px; */
    border-right: 1px solid ${({ theme: theme2  })=>theme2.colors.gray05
};
    background: ${(props)=>props['data-isactive'] && src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.gray08 */ .Z.colors.gray08
};
    padding: 10px 0;
  }
`;
const ImageWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const Text = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  margin-left: 8px;
  color: ${(props)=>props['data-active'] ? '#000' : props.theme.colors.gray03
};
  font-weight: ${(props)=>props['data-active'] ? 'bold' : '500'
};
  font-size: 1.8rem;
  white-space: nowrap;
  ${src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.screen3 */ .Z.media.screen3} {
    margin: 0px;
    margin-top: 10px;
  }
`;
const UploadFileHidden = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].input`
  display: none;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;