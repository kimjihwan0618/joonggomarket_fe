"use strict";
exports.id = 971;
exports.ids = [971];
exports.modules = {

/***/ 6249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useMutationCreateBoard)
/* harmony export */ });
/* unused harmony export CREATE_BOARD */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9316);
/* harmony import */ var src_components_commons_hooks_quires_board_useQueryFetchBoards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9754);
/* harmony import */ var _file_useMutationUploadFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9473);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__]);
src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const CREATE_BOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
    }
  }
`;
const useMutationCreateBoard = (props)=>{
    const { moveToPage  } = (0,src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__/* .useMoveToPage */ .G)();
    const { uploadFile  } = (0,_file_useMutationUploadFile__WEBPACK_IMPORTED_MODULE_4__/* .useMutationUploadFile */ .sY)();
    const [createBoardMutation] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation)(CREATE_BOARD);
    const createBoard = async ()=>{
        const { addressDetail , writer , password , title , contents , youtubeUrl , address , zipcode  } = props.getValues();
        try {
            var ref4, ref1;
            var _url;
            const images = await (await Promise.all(props.files.map((el)=>uploadFile({
                    file: el
                })
            ))).map((res)=>{
                var ref;
                return (_url = res === null || res === void 0 ? void 0 : (ref = res.data) === null || ref === void 0 ? void 0 : ref.uploadFile.url) !== null && _url !== void 0 ? _url : '';
            });
            const boardAddress = {
                address,
                addressDetail,
                zipcode
            };
            const createBoardInput = {
                writer,
                password,
                title,
                contents,
                images,
                youtubeUrl,
                boardAddress
            };
            const result = await createBoardMutation({
                variables: {
                    createBoardInput
                },
                refetchQueries: [
                    {
                        query: src_components_commons_hooks_quires_board_useQueryFetchBoards__WEBPACK_IMPORTED_MODULE_3__/* .FETCH_BOARDS */ .X
                    }, 
                ]
            });
            if (result === null || result === void 0 ? void 0 : (ref4 = result.data) === null || ref4 === void 0 ? void 0 : (ref1 = ref4.createBoard) === null || ref1 === void 0 ? void 0 : ref1._id) {
                var ref2, ref3;
                antd__WEBPACK_IMPORTED_MODULE_1__.Modal.success({
                    content: '게시글이 등록되었습니다.'
                });
                moveToPage(`/boards/${result === null || result === void 0 ? void 0 : (ref2 = result.data) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.createBoard) === null || ref3 === void 0 ? void 0 : ref3._id}`)();
            }
        } catch (error) {
            if (error instanceof Error) antd__WEBPACK_IMPORTED_MODULE_1__.Modal.error({
                content: error.message
            });
        }
    };
    return {
        createBoard
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useMutationUpdateBoard)
/* harmony export */ });
/* unused harmony export UPDATE_BOARD */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9316);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9925);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_components_commons_hooks_quires_board_useQueryFetchBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1601);
/* harmony import */ var _file_useMutationUploadFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9473);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__]);
src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const UPDATE_BOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $boardId: ID!, $password: String!) {
    updateBoard(updateBoardInput: $updateBoardInput, boardId: $boardId, password: $password) {
      _id
      title
      contents
      writer
    }
  }
`;
const useMutationUpdateBoard = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { uploadFile  } = (0,_file_useMutationUploadFile__WEBPACK_IMPORTED_MODULE_5__/* .useMutationUploadFile */ .sY)();
    const { moveToPage  } = (0,src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_2__/* .useMoveToPage */ .G)();
    const [updateBoardMutation] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation)(UPDATE_BOARD);
    const updateBoard = async ()=>{
        const { addressDetail , password , title , contents , youtubeUrl , address , zipcode  } = props.getValues();
        try {
            var ref4, ref1;
            var _url;
            const imagesResult = await (await Promise.all(props.files.map((el)=>el instanceof File && uploadFile({
                    file: el
                })
            ))).map((res)=>{
                var ref;
                return (_url = res === null || res === void 0 ? void 0 : (ref = res.data) === null || ref === void 0 ? void 0 : ref.uploadFile.url) !== null && _url !== void 0 ? _url : '';
            });
            const images = props.fileUrls.map((el, index)=>{
                if (imagesResult[index]) {
                    return imagesResult[index];
                } else {
                    return el.replace("https://s3.ap-northeast-2.amazonaws.com/joonggomarket.files", '');
                }
            });
            const boardAddress = {
                address,
                addressDetail,
                zipcode
            };
            const updateBoardInput = {
                title,
                contents,
                images,
                youtubeUrl,
                boardAddress
            };
            if (typeof router.query.boardId !== 'string') {
                antd__WEBPACK_IMPORTED_MODULE_1__.Modal.error({
                    content: '시스템에 문제가 있습니다.'
                });
                return;
            }
            const result = await updateBoardMutation({
                variables: {
                    boardId: router.query.boardId,
                    password: password,
                    updateBoardInput
                },
                refetchQueries: [
                    {
                        query: src_components_commons_hooks_quires_board_useQueryFetchBoard__WEBPACK_IMPORTED_MODULE_4__/* .FETCH_BOARD */ .u,
                        variables: {
                            boardId: router.query.boardId
                        }
                    }, 
                ]
            });
            if (result === null || result === void 0 ? void 0 : (ref4 = result.data) === null || ref4 === void 0 ? void 0 : (ref1 = ref4.updateBoard) === null || ref1 === void 0 ? void 0 : ref1._id) {
                var ref2, ref3;
                antd__WEBPACK_IMPORTED_MODULE_1__.Modal.success({
                    content: '게시글이 수정되었습니다.'
                });
                moveToPage(`/boards/${result === null || result === void 0 ? void 0 : (ref2 = result.data) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.updateBoard) === null || ref3 === void 0 ? void 0 : ref3._id}`)();
            }
        } catch (error) {
            if (error instanceof Error) antd__WEBPACK_IMPORTED_MODULE_1__.Modal.error({
                content: error.message
            });
        }
    };
    return {
        updateBoard
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BoardWriteUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BoardWrite_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6915);
/* harmony import */ var uuid4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1696);
/* harmony import */ var uuid4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_commons_uploads_01_Upload01_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2427);
/* harmony import */ var src_components_commons_buttons_01_Button01_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1495);
/* harmony import */ var src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9500);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5641);
/* harmony import */ var _BoardWrite_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(250);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1908);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_components_commons_hooks_custom_useImageInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5042);
/* harmony import */ var src_components_commons_hooks_mutations_board_useMutationCreateBoard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6249);
/* harmony import */ var src_components_commons_hooks_mutations_board_useMutationUpdateBoard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8996);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9925);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_components_commons_hooks_custom_useUpdateForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5445);
/* harmony import */ var src_components_commons_hooks_custom_useDaumPostModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6496);
/* harmony import */ var src_components_commons_inputs_02_InputWithError_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3533);
/* harmony import */ var src_components_commons_textareas_01_TextAreaWithError_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7203);
/* harmony import */ var src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9316);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BoardWrite_styles__WEBPACK_IMPORTED_MODULE_1__, src_components_commons_uploads_01_Upload01_index__WEBPACK_IMPORTED_MODULE_3__, src_components_commons_buttons_01_Button01_index__WEBPACK_IMPORTED_MODULE_4__, src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__, src_components_commons_hooks_mutations_board_useMutationCreateBoard__WEBPACK_IMPORTED_MODULE_11__, src_components_commons_hooks_mutations_board_useMutationUpdateBoard__WEBPACK_IMPORTED_MODULE_12__, src_components_commons_inputs_02_InputWithError_index__WEBPACK_IMPORTED_MODULE_16__, src_components_commons_textareas_01_TextAreaWithError_index__WEBPACK_IMPORTED_MODULE_17__, src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_18__]);
([_BoardWrite_styles__WEBPACK_IMPORTED_MODULE_1__, src_components_commons_uploads_01_Upload01_index__WEBPACK_IMPORTED_MODULE_3__, src_components_commons_buttons_01_Button01_index__WEBPACK_IMPORTED_MODULE_4__, src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__, src_components_commons_hooks_mutations_board_useMutationCreateBoard__WEBPACK_IMPORTED_MODULE_11__, src_components_commons_hooks_mutations_board_useMutationUpdateBoard__WEBPACK_IMPORTED_MODULE_12__, src_components_commons_inputs_02_InputWithError_index__WEBPACK_IMPORTED_MODULE_16__, src_components_commons_textareas_01_TextAreaWithError_index__WEBPACK_IMPORTED_MODULE_17__, src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















function BoardWriteUI(props) {
    var ref12, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const { handleModalToggle , DaumPostModal , postModalOpen , address , zonecode , setAddress , setZoneCode ,  } = (0,src_components_commons_hooks_custom_useDaumPostModal__WEBPACK_IMPORTED_MODULE_15__/* .useDaumPostModal */ .O)(false);
    const { moveToBack  } = (0,src_components_commons_hooks_custom_useMoveToPage__WEBPACK_IMPORTED_MODULE_18__/* .useMoveToPage */ .G)();
    const { fileUrls , onChangeFileUrls , onClickReset , setFileUrls , files , onChangeFile  } = (0,src_components_commons_hooks_custom_useImageInput__WEBPACK_IMPORTED_MODULE_10__/* .useImageInput */ .j)(3);
    const { register , formState , setValue , getValues  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__.yupResolver)(_BoardWrite_schema__WEBPACK_IMPORTED_MODULE_7__/* .schema */ .f),
        mode: 'onChange'
    });
    const { createBoard  } = (0,src_components_commons_hooks_mutations_board_useMutationCreateBoard__WEBPACK_IMPORTED_MODULE_11__/* .useMutationCreateBoard */ .g)({
        getValues,
        files
    });
    const { updateBoard  } = (0,src_components_commons_hooks_mutations_board_useMutationUpdateBoard__WEBPACK_IMPORTED_MODULE_12__/* .useMutationUpdateBoard */ .D)({
        getValues,
        fileUrls,
        files
    });
    const { handleFormUpdate  } = (0,src_components_commons_hooks_custom_useUpdateForm__WEBPACK_IMPORTED_MODULE_14__/* .useUpdateForm */ .o)({
        setValue,
        updateKeys: [
            'writer',
            'title',
            'contents',
            'boardAddress.addressDetail',
            'youtubeUrl'
        ],
        fetchData: (ref12 = props.data) === null || ref12 === void 0 ? void 0 : ref12.fetchBoard
    });
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        setValue('zipcode', zonecode);
        setValue('address', address);
    }, [
        address,
        zonecode
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        var ref, ref9, ref10, ref11;
        const fetchBoard = (ref = props.data) === null || ref === void 0 ? void 0 : ref.fetchBoard;
        if (fetchBoard) {
            handleFormUpdate();
        }
        if ((fetchBoard === null || fetchBoard === void 0 ? void 0 : (ref9 = fetchBoard.images) === null || ref9 === void 0 ? void 0 : ref9.length) > 0) {
            const images = fetchBoard.images;
            const filledImages = [
                images[0] || '',
                images[1] || '',
                images[2] || ''
            ].map((image)=>image !== '' ? `${"https://s3.ap-northeast-2.amazonaws.com/joonggomarket.files"}${image}` : ''
            );
            setFileUrls(filledImages);
        }
        const fetchAddress = fetchBoard === null || fetchBoard === void 0 ? void 0 : (ref10 = fetchBoard.boardAddress) === null || ref10 === void 0 ? void 0 : ref10.address;
        const fetchZipCode = fetchBoard === null || fetchBoard === void 0 ? void 0 : (ref11 = fetchBoard.boardAddress) === null || ref11 === void 0 ? void 0 : ref11.zipcode;
        fetchAddress && setAddress(fetchAddress);
        fetchZipCode && setZoneCode(fetchZipCode);
    }, [
        (ref1 = props.data) === null || ref1 === void 0 ? void 0 : ref1.fetchBoard
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            postModalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DaumPostModal, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BoardWrite_styles__WEBPACK_IMPORTED_MODULE_1__/* .ContentWrapper */ .vs, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BoardWrite_styles__WEBPACK_IMPORTED_MODULE_1__/* .ContentTitle */ .wW, {
                        children: [
                            "게시물 ",
                            props.isEdit ? '수정' : '등록'
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BoardWrite_styles__WEBPACK_IMPORTED_MODULE_1__/* .FormWrapper */ .n5, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_inputs_02_InputWithError_index__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                width: "48.78%",
                                register: register('writer'),
                                disabled: !!((ref2 = props.data) === null || ref2 === void 0 ? void 0 : ref2.fetchBoard.writer),
                                readOnly: !!((ref3 = props.data) === null || ref3 === void 0 ? void 0 : ref3.fetchBoard.writer),
                                placeholder: "이름을 적어주세요.",
                                label: '작성자',
                                error: (ref4 = formState.errors.writer) === null || ref4 === void 0 ? void 0 : ref4.message
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_inputs_02_InputWithError_index__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                width: "48.78%",
                                type: "password",
                                register: register('password'),
                                placeholder: "비밀번호를 입력해주세요.",
                                label: '비밀번호',
                                error: (ref5 = formState.errors.password) === null || ref5 === void 0 ? void 0 : ref5.message
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_inputs_02_InputWithError_index__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                register: register('title'),
                                placeholder: "제목을 작성해주세요.",
                                label: '제목',
                                error: (ref6 = formState.errors.title) === null || ref6 === void 0 ? void 0 : ref6.message
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_textareas_01_TextAreaWithError_index__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                label: "내용",
                                register: register('contents'),
                                placeholder: "내용을 작성해주세요",
                                height: "480px",
                                error: (ref7 = formState.errors.contents) === null || ref7 === void 0 ? void 0 : ref7.message
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BoardWrite_styles__WEBPACK_IMPORTED_MODULE_1__/* .PostAddressWrapper */ .Wb, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_inputs_02_InputWithError_index__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        register: register('zipcode'),
                                        placeholder: "우편번호",
                                        width: "100px",
                                        readOnly: true,
                                        label: '주소'
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_buttons_01_Button01_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        onClick: handleModalToggle,
                                        name: '우편번호 검색',
                                        color: "white",
                                        background: src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.dark01 */ .Z.colors.dark01
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_inputs_02_InputWithError_index__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        register: register('address'),
                                        readOnly: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_inputs_02_InputWithError_index__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        register: register('addressDetail'),
                                        readOnly: zonecode === null ? true : false,
                                        placeholder: "상세주소를 입력해주세요."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_inputs_02_InputWithError_index__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                label: '유튜브',
                                register: register('youtubeUrl'),
                                placeholder: "유튜브 링크를 입력해주세요",
                                error: (ref8 = formState.errors.youtubeUrl) === null || ref8 === void 0 ? void 0 : ref8.message
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BoardWrite_styles__WEBPACK_IMPORTED_MODULE_1__/* .FormItem */ .xJ, {
                                style: {
                                    width: '100%'
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BoardWrite_styles__WEBPACK_IMPORTED_MODULE_1__/* .ItemTitle */ .XQ, {
                                        children: "사진 첨부"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BoardWrite_styles__WEBPACK_IMPORTED_MODULE_1__/* .ImagesWrapper */ .RD, {
                                        children: fileUrls.map((el, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_uploads_01_Upload01_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                index: index,
                                                fileUrl: el,
                                                onChangeFileUrls: onChangeFileUrls,
                                                onChangeFile: onChangeFile,
                                                onClickReset: onClickReset
                                            }, uuid4__WEBPACK_IMPORTED_MODULE_2___default()())
                                        )
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BoardWrite_styles__WEBPACK_IMPORTED_MODULE_1__/* .ButtonWrapper */ .W4, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_buttons_01_Button01_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                onClick: moveToBack(`/boards/${router.query.boardId}`),
                                background: src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.dark01 */ .Z.colors.dark01,
                                color: 'white',
                                name: '취소하기',
                                width: "03"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_commons_buttons_01_Button01_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                disabled: !formState.isValid,
                                onClick: props.isEdit ? updateBoard : createBoard,
                                background: src_commons_styles_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.main */ .Z.colors.main,
                                name: `${props.isEdit ? '수정' : '등록'}하기`,
                                width: "03"
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

/***/ 250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ schema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const schema = yup__WEBPACK_IMPORTED_MODULE_0__.object({
    writer: yup__WEBPACK_IMPORTED_MODULE_0__.string().required('작성자를 입력해주세요.'),
    password: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(4, '비밀번호는 최소 4자리 이상으로 입력해주세요.').max(15, '비밀번호는 최대 15자리 이하로 입력해주세요.').required('비밀번호는 필수 입력입니다.'),
    title: yup__WEBPACK_IMPORTED_MODULE_0__.string().required('제목을 입력해주세요.'),
    contents: yup__WEBPACK_IMPORTED_MODULE_0__.string().required('내용을 입력해주세요.'),
    youtubeUrl: yup__WEBPACK_IMPORTED_MODULE_0__.string().url('올바른 URL 형식이 아닙니다').notRequired(),
    address: yup__WEBPACK_IMPORTED_MODULE_0__.string().notRequired(),
    addressDetail: yup__WEBPACK_IMPORTED_MODULE_0__.string().notRequired(),
    zipcode: yup__WEBPACK_IMPORTED_MODULE_0__.string().notRequired()
}).required();


/***/ }),

/***/ 6915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vs": () => (/* binding */ ContentWrapper),
/* harmony export */   "wW": () => (/* binding */ ContentTitle),
/* harmony export */   "n5": () => (/* binding */ FormWrapper),
/* harmony export */   "xJ": () => (/* binding */ FormItem),
/* harmony export */   "XQ": () => (/* binding */ ItemTitle),
/* harmony export */   "RD": () => (/* binding */ ImagesWrapper),
/* harmony export */   "Wb": () => (/* binding */ PostAddressWrapper),
/* harmony export */   "W4": () => (/* binding */ ButtonWrapper)
/* harmony export */ });
/* unused harmony export RadioItem */
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const ContentWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 40px 75px 60px;
  /* min-width: 920px; */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;
const ContentTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].h2`
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 80px;
  text-align: center;
`;
const FormWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  dl {
    margin-bottom: 21px;
  }
`;
const FormItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const ItemTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  font-size: 1.6rem;
  margin-bottom: 21px;
`;
const ImagesWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
`;
const RadioItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  & > label {
    margin-left: 8px;
  }
  & > label:first-of-type {
    margin-right: 20px;
  }
  & > input[type='radio'] {
    width: 20px;
    height: 20px;
    accent-color: ${({ theme  })=>theme.colors.main
};
    background-color: ${({ theme  })=>theme.colors.main
};
  }
`;
const PostAddressWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  & > button {
    margin-left: 16px;
    margin-top: 21px;
  }
`;
const ButtonWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  button:first-of-type {
    margin-right: 16px;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;