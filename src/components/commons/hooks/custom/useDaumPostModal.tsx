import { Modal } from 'antd'
import { useState } from 'react'
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode'

declare const window: typeof globalThis & {
  kakao: any
}

export const useDaumPostModal = () => {
  const [postModalOpen, setPostModalOpen] = useState(false)
  const [address, setAddress] = useState<Address['address']>(null)
  const [zonecode, setZoneCode] = useState<Address['zonecode']>(null)
  const [lat, setLat] = useState<number>(0)
  const [lng, setLng] = useState<number>(0)
  const handleModalToggle = (): void => {
    setPostModalOpen((prev) => !prev)
  }

  const handleGetAddress = (data: Address): void => {
    setPostModalOpen((prev) => !prev)
    if (data) {
      const geocoder = new window.kakao.maps.services.Geocoder()
      geocoder.addressSearch(data.roadAddress, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setLat(result[0].y)
          setLng(result[0].x)
        }
      })

      setAddress(data.address)
      setZoneCode(data.zonecode)
    } else {
      Modal.warning({ content: '주소를 정상적으로 읽어오지 못했습니다.' })
    }
  }

  const DaumPostModal = (): JSX.Element => {
    return (
      <Modal open={true} onOk={handleModalToggle} onCancel={handleModalToggle}>
        <DaumPostcodeEmbed onComplete={handleGetAddress} />
      </Modal>
    )
  }

  return {
    handleModalToggle,
    DaumPostModal,
    postModalOpen,
    address,
    zonecode,
    setAddress,
    setZoneCode,
    lat,
    lng,
    setLat,
    setLng,
  }
}
