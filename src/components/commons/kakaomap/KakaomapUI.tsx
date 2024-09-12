import { useEffect, useRef, useState } from 'react'

export default function KakaoMapUI({ lat, lng }) {
  const mapContainer = useRef(null)
  const [map, setMap] = useState(null)
  const [marker, setMarker] = useState(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8292b4a2cbcab98c0266432f2f42247b&autoload=false`
    script.onload = () => {
      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng), // 초기 지도 중심
          level: 3, // 지도 줌 레벨
        }
        const map = new window.kakao.maps.Map(mapContainer.current, options)
        setMap(map)

        // 마커 생성 및 추가
        const markerPosition = new window.kakao.maps.LatLng(lat, lng)
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        })
        marker.setMap(map)
        setMarker(marker)
      })
    }
    document.head.appendChild(script)
  }, [])

  // 위도와 경도가 변경될 때마다 지도 중심과 마커 위치를 업데이트
  useEffect(() => {
    if (map && marker) {
      const newCenter = new window.kakao.maps.LatLng(lat, lng)
      map.setCenter(newCenter) // 지도 중심 변경
      map.setLevel(3) // 줌 레벨 설정
      marker.setPosition(newCenter) // 마커 위치 변경
    }
  }, [lat, lng, map, marker])

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }}></div>
}
