"use strict";
exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 2409:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UsedItemUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9316);
/* harmony import */ var _UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3035);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__, _UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__]);
([src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__, _UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function UsedItemUI(props) {
    var ref, ref1;
    const { moveToPage  } = (0,src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__/* .useMoveToPage */ .G)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__/* .UsedItem */ .Yc, {
        onClick: moveToPage(`/markets/${props.usedItem._id}`),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__/* .ItemImageBox2 */ .TF, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    unoptimized: true,
                    src: props.usedItem.images.filter((imagePath)=>imagePath !== '' && imagePath.includes('.')
                    ).length !== 0 ? `${"https://s3.ap-northeast-2.amazonaws.com/joonggomarket.files"}${props.usedItem.images.filter((imagePath)=>imagePath !== '' && imagePath.includes('.')
                    )[0]}` : '/images/ic-noimage.jpg',
                    objectFit: "cover",
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__/* .UsedItemInfo2 */ .aS, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__/* .LeftInfo */ .M0, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__/* .Title2 */ .Rn, {
                                children: props.usedItem.name.replaceAll(props.keyword, `!@#${props.keyword}!@#`).split('!@#').map((el2)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            color: el2 === props.keyword ? 'red' : 'black'
                                        },
                                        children: el2
                                    })
                                )
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__/* .Remarks2 */ .R2, {
                                children: props.usedItem.remarks
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__/* .Tags */ .$G, {
                                children: props.usedItem.tags
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__/* .SellerPicked */ .aF, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__/* .Seller */ .Zk, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                unoptimized: true,
                                                src: ((ref = props.usedItem.seller) === null || ref === void 0 ? void 0 : ref.picture) && ((ref1 = props.usedItem.seller.picture) === null || ref1 === void 0 ? void 0 : ref1.includes('.')) ? `${"https://s3.ap-northeast-2.amazonaws.com/joonggomarket.files"}${props.usedItem.seller.picture}` : '/images/ic_profile2.png',
                                                width: 24,
                                                height: 24,
                                                alt: "프로필 아이콘"
                                            }),
                                            "\xa0\xa0",
                                            props.usedItem.seller.name
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__/* .Picked */ .eP, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                unoptimized: true,
                                                src: '/images/ic_favorite.png',
                                                width: 24,
                                                height: 24,
                                                alt: "하트"
                                            }),
                                            "\xa0\xa0",
                                            props.usedItem.pickedCount
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__/* .Price2 */ .xU, {
                        children: [
                            new Intl.NumberFormat('en-US').format(props.usedItem.price),
                            "원"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UsedItem_styles__WEBPACK_IMPORTED_MODULE_3__/* .IsSold */ .ud, {
                        "data-sold": props.usedItem.soldAt !== null,
                        children: props.usedItem.soldAt ? '판매완료' : '판매중'
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3035:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yc": () => (/* binding */ UsedItem),
/* harmony export */   "TF": () => (/* binding */ ItemImageBox2),
/* harmony export */   "aS": () => (/* binding */ UsedItemInfo2),
/* harmony export */   "M0": () => (/* binding */ LeftInfo),
/* harmony export */   "Rn": () => (/* binding */ Title2),
/* harmony export */   "R2": () => (/* binding */ Remarks2),
/* harmony export */   "$G": () => (/* binding */ Tags),
/* harmony export */   "aF": () => (/* binding */ SellerPicked),
/* harmony export */   "Zk": () => (/* binding */ Seller),
/* harmony export */   "eP": () => (/* binding */ Picked),
/* harmony export */   "xU": () => (/* binding */ Price2),
/* harmony export */   "ud": () => (/* binding */ IsSold)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const UsedItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme  })=>theme.colors.gray04
};
  padding: 20px 0;
  cursor: pointer;
  &:hover {
    background: ${({ theme  })=>theme.colors.gray07
};
  }
  height: 160px;
`;
const ItemImageBox2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  width: 140px;
  height: 140px;
`;
const UsedItemInfo2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  width: calc(100% - 200px);
  align-items: center;
  margin-left: 40px;
  justify-content: space-between;
`;
const LeftInfo = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].ul``;
const Title2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].li`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 2.4rem;
  span {
    font-weight: 500;
    font-size: 2.4rem;
  }
`;
const Remarks2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].li`
  margin-bottom: 8px;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme  })=>theme.colors.gray02
};
`;
const Tags = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].li`
  font-weight: 500;
  font-size: 1.6rem;
  color: ${({ theme  })=>theme.colors.gray04
};
  margin-bottom: 24px;
`;
const SellerPicked = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].li`
  font-size: 1.6rem;
  color: ${({ theme  })=>theme.colors.gray02
};
  display: flex;
  align-items: center;
`;
const Seller = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  display: flex;
  align-items: center;
  & > span {
    border-radius: 100px;
  }
`;
const Picked = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const Price2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-weight: bold;
  font-size: 2.4rem;
  text-align: right;
`;
const IsSold = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  position: absolute;
  font-size: 1.4rem;
  font-weight: 500;
  position: absolute;
  right: 5px;
  top: 20px;
  color: ${(props)=>props['data-sold'] && props.theme.colors.main
};
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "Mw": () => (/* binding */ BestUsedItemSectionTitle),
/* harmony export */   "zY": () => (/* binding */ BestUsedItemWrapper),
/* harmony export */   "Ty": () => (/* binding */ BestUsedItem),
/* harmony export */   "oI": () => (/* binding */ ItemImageBox),
/* harmony export */   "rl": () => (/* binding */ UsedItemInfo1),
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "uo": () => (/* binding */ InfoBottom),
/* harmony export */   "Mi": () => (/* binding */ Remarks),
/* harmony export */   "tA": () => (/* binding */ Price),
/* harmony export */   "vm": () => (/* binding */ PickedItem),
/* harmony export */   "XN": () => (/* binding */ PickedCount),
/* harmony export */   "zU": () => (/* binding */ UsedItemSearchWrapper),
/* harmony export */   "_8": () => (/* binding */ SearchWrapper),
/* harmony export */   "LM": () => (/* binding */ TabsItem),
/* harmony export */   "OK": () => (/* binding */ Tab),
/* harmony export */   "hw": () => (/* binding */ UsedItemsWrapper),
/* harmony export */   "z": () => (/* binding */ Bottom)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  max-width: 1200px;
`;
const BestUsedItemSectionTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].h3`
  font-size: 3.6rem;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
`;
const BestUsedItemWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`;
const BestUsedItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  /* height: 391px; */
  width: 25%;
  margin-right: 24px;
  overflow: hidden;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0px;
  }
`;
const ItemImageBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  width: 100%;
  height: 160px;
  padding: 20px;
  border-bottom: 1px solid ${({ theme  })=>theme.colors.gray06
};
`;
const UsedItemInfo1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].dl`
  padding: 20px;
`;
const Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].dt`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoBottom = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].dd`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Remarks = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 1.2rem;
  color: ${({ theme  })=>theme.colors.gray02
};
`;
const Price = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 1.8rem;
  font-weight: bold;
`;
const PickedItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const PickedCount = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 1.2rem;
  margin-top: 2px;
`;
const UsedItemSearchWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const SearchWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const TabsItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].ul`
  display: flex;
  align-items: center;
  margin-left: 28px;
`;
const Tab = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].li`
  font-size: 1.8rem;
  white-space: nowrap;
  font-weight: ${(props)=>props['data-isactive'] ? 'bold' : '400'
};
  color: ${(props)=>props['data-isactive'] ? '#000' : props.theme.colors.gray04
};
  border-bottom: 2px solid
    ${(props)=>props['data-isactive'] ? props.theme.colors.main : 'white'
};
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0px;
  }
  cursor: ${(props)=>!props['data-isactive'] && 'pointer'
};
`;
const UsedItemsWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  padding-right: 20px;
  max-height: 800px;
  overflow-y: auto;
`;
const Bottom = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme  })=>theme.colors.gray04
};
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;