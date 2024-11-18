"use strict";
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 9063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useFetchMoreScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useFetchMoreScroll = (props)=>{
    const { 0: fetchedPages , 1: setFetchedPages  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set());
    const onLoadMore = ()=>{
        var ref2;
        if (props.fetchData === undefined) return;
        var _length;
        const currentPage = Math.ceil(((_length = (ref2 = props.fetchData) === null || ref2 === void 0 ? void 0 : ref2[props.fetchListName].length) !== null && _length !== void 0 ? _length : 10) / 10 + 1);
        if (fetchedPages.has(currentPage)) {
            return;
        }
        setFetchedPages((prev)=>new Set(prev).add(currentPage)
        );
        props.fetchMore({
            variables: {
                ...{
                    page: currentPage
                },
                ...props.variables
            },
            updateQuery: (prev, { fetchMoreResult  })=>{
                var ref;
                const prevItems = (ref = prev === null || prev === void 0 ? void 0 : prev[props.fetchListName]) !== null && ref !== void 0 ? ref : [];
                var ref1;
                const newItems = (ref1 = fetchMoreResult === null || fetchMoreResult === void 0 ? void 0 : fetchMoreResult[props.fetchListName]) !== null && ref1 !== void 0 ? ref1 : [];
                if (!newItems.length) {
                    return {
                        [props.fetchListName]: [
                            ...prevItems
                        ]
                    };
                }
                return {
                    [props.fetchListName]: [
                        ...prevItems,
                        ...newItems
                    ]
                };
            }
        });
    };
    const resetPageCache = ()=>{
        setFetchedPages(new Set());
    };
    return {
        onLoadMore,
        resetPageCache
    };
};


/***/ })

};
;