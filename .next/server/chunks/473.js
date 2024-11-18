"use strict";
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 9473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sY": () => (/* binding */ useMutationUploadFile)
/* harmony export */ });
/* unused harmony exports checkValidationImage, UPLOAD_FILE */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


const MAX_FILE_SIZE = 5 * 1024 * 1024;
function checkValidationImage(file) {
    if ((file === null || file === void 0 ? void 0 : file.size) === undefined) {
        antd__WEBPACK_IMPORTED_MODULE_1__.Modal.error({
            content: '파일이 없습니다.'
        });
        return false;
    }
    if (file.size > MAX_FILE_SIZE) {
        antd__WEBPACK_IMPORTED_MODULE_1__.Modal.error({
            content: '파일이 너무 큽니다. (제한 : 5MB'
        });
        return false;
    }
    if (!file.type.includes('png') && !file.type.includes('jpeg') && !file.type.includes('jpg')) {
        antd__WEBPACK_IMPORTED_MODULE_1__.Modal.error({
            content: '파일 확장자가 올바르지 않습니다. (png, jpeg, jpg만 가능'
        });
        return false;
    }
    return true;
}
const UPLOAD_FILE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const useMutationUploadFile = ()=>{
    const [uploadFileMutation] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation)(UPLOAD_FILE);
    const uploadFile = async (props)=>{
        try {
            const isValid = checkValidationImage(props.file);
            if (!isValid) return;
            const result = await uploadFileMutation({
                variables: {
                    file: props.file
                }
            });
            return result;
        } catch (error) {
            if (error instanceof Error) antd__WEBPACK_IMPORTED_MODULE_1__.Modal.error({
                content: error.message
            });
        }
    };
    return {
        uploadFile
    };
};


/***/ })

};
;