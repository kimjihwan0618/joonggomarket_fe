"use strict";
exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 1601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ FETCH_BOARD),
/* harmony export */   "H": () => (/* binding */ useQueryFetchBoard)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const FETCH_BOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
      updatedAt
      boardAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;
const useQueryFetchBoard = (boardId)=>{
    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(FETCH_BOARD, {
        variables: {
            boardId
        },
        skip: !boardId
    });
    return {
        data
    };
};


/***/ }),

/***/ 9754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ FETCH_BOARDS),
/* harmony export */   "Y": () => (/* binding */ useQueryFetchBoards)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const FETCH_BOARDS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query fetchBoards($endDate: DateTime, $startDate: DateTime, $search: String, $page: Int) {
    fetchBoards(endDate: $endDate, startDate: $startDate, search: $search, page: $page) {
      _id
      title
      contents
      writer
      createdAt
    }
  }
`;
const useQueryFetchBoards = ()=>{
    const result = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(FETCH_BOARDS);
    return result;
};


/***/ })

};
;