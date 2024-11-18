"use strict";
exports.id = 516;
exports.ids = [516];
exports.modules = {

/***/ 5097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ FETCH_USED_ITEM),
/* harmony export */   "L": () => (/* binding */ useQueryFetchUsedItem)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const FETCH_USED_ITEM = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      soldAt
      seller {
        _id
        name
        picture
      }
      updatedAt
      useditemAddress {
        lat
        lng
        address
        addressDetail
        zipcode
      }
      remarks
      pickedCount
      price
      images
      contents
      tags
    }
  }
`;
const useQueryFetchUsedItem = (useditemId)=>{
    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(FETCH_USED_ITEM, {
        variables: {
            useditemId
        },
        skip: !useditemId
    });
    return {
        data
    };
};


/***/ }),

/***/ 3913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ KakaoMapUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function KakaoMapUI({ lat , lng , draggable =true  }) {
    const mapContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: map1 , 1: setMap  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: marker1 , 1: setMarker  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8292b4a2cbcab98c0266432f2f42247b&autoload=false&libraries=services`;
        script.onload = ()=>{
            window.kakao.maps.load(()=>{
                const options = {
                    center: new window.kakao.maps.LatLng(lat, lng),
                    level: 3,
                    draggable
                };
                const map = new window.kakao.maps.Map(mapContainer.current, options);
                setMap(map);
                // 마커 생성 및 추가
                const markerPosition = new window.kakao.maps.LatLng(lat, lng);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
                setMarker(marker);
            });
        };
        document.head.appendChild(script);
    }, []);
    // 위도와 경도가 변경될 때마다 지도 중심과 마커 위치를 업데이트
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (map1 && marker1) {
            const newCenter = new window.kakao.maps.LatLng(lat, lng);
            map1.setCenter(newCenter) // 지도 중심 변경
            ;
            map1.setLevel(3) // 줌 레벨 설정
            ;
            marker1.setPosition(newCenter) // 마커 위치 변경
            ;
        }
    }, [
        lat,
        lng,
        map1,
        marker1
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: mapContainer,
        style: {
            width: '100%',
            height: '100%'
        }
    }));
};


/***/ })

};
;