"use strict";
exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 6537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useTextCopy)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);

const useTextCopy = ()=>{
    const onCopyLink = ()=>{
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(()=>{
            antd__WEBPACK_IMPORTED_MODULE_0__.Modal.success({
                content: 'URL이 클립보드에 복사되었습니다!'
            });
        }).catch((err)=>{
            antd__WEBPACK_IMPORTED_MODULE_0__.Modal.error({
                content: '클립보드 복사에 실패했습니다.'
            });
        });
    };
    return {
        onCopyLink
    };
};


/***/ }),

/***/ 5445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useUpdateForm)
/* harmony export */ });
const ACTIVE_OPTION = {
    shouldDirty: true,
    shouldValidate: true
};
const useUpdateForm = (props)=>{
    const handleFormUpdate = ()=>{
        props.updateKeys.forEach((key)=>{
            if (key.includes('.')) {
                var ref, ref1;
                props.setValue(key.split('.')[1], (ref = props.fetchData) === null || ref === void 0 ? void 0 : (ref1 = ref[key.split('.')[0]]) === null || ref1 === void 0 ? void 0 : ref1[key.split('.')[1]], ACTIVE_OPTION);
            } else {
                var ref2;
                props.setValue(key, (ref2 = props.fetchData) === null || ref2 === void 0 ? void 0 : ref2[key], ACTIVE_OPTION);
            }
        });
    };
    return {
        handleFormUpdate
    };
};


/***/ }),

/***/ 4188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ toYYYYMMDDHHMMSS),
/* harmony export */   "E": () => (/* binding */ toYYYYMMDD)
/* harmony export */ });
const toYYYYMMDDHHMMSS = (dateString)=>{
    const _date = new Date(dateString);
    const year = _date.getFullYear();
    const month = String(_date.getMonth() + 1).padStart(2, '0');
    const day = String(_date.getDate()).padStart(2, '0');
    const hours = String(_date.getHours()).padStart(2, '0');
    const minutes = String(_date.getMinutes()).padStart(2, '0');
    const seconds = String(_date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
const toYYYYMMDD = (date)=>{
    const _date = new Date(date);
    const year = _date.getFullYear();
    const month = String(_date.getMonth() + 1).padStart(2, '0');
    const day = String(_date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};


/***/ })

};
;