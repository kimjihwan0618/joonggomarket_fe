import { Modal } from 'antd'
import { useState } from 'react'
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode'

export const useDaumPostModal = () => {
  const [postModalOpen, setPostModalOpen] = useState(false)
  const [address, setAddress] = useState<Address['address']>(null)
  const [zonecode, setZoneCode] = useState<Address['zonecode']>(null)
  const handleModalToggle = (): void => {
    setPostModalOpen((prev) => !prev)
  }

  const handleGetAddress = (data: Address): void => {
    setPostModalOpen((prev) => !prev)
    if (data) {
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
  }
}
