import { Modal } from 'antd'
import Image from 'next/image'
import type { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import * as S from './PointModal.styles'
import Button02 from 'src/components/commons/buttons/02/Button02.index'
import theme from 'src/commons/styles/theme'

interface IPointModalUIProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function PointModalUI(props: IPointModalUIProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState('')

  const onChangePoint = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPoint(event.target.value)
  }

  return (
    <Modal
      open={props.isOpen}
      // onOk={onClickSellingOk}
      // okButtonProps={{ disabled: loading }}
      // confirmLoading={loading}
      onCancel={() => props.setIsOpen(false)}
      onClose={() => props.setIsOpen(false)}
      footer={null}
    >
      <S.Content>
        <S.ContentInner>
          <Image src={'/images/ic_point_add.png'} width={79.07} height={54} />
          <S.Title>충전하실 금액을 선택해주세요!</S.Title>
          <S.PointSelect onChange={onChangePoint}>
            <S.Point value={''}>포인트 선택</S.Point>
            <S.Point value={100}>100</S.Point>
            <S.Point value={500}>500</S.Point>
            <S.Point value={2000}>2,000</S.Point>
            <S.Point value={5000}>5,000</S.Point>
          </S.PointSelect>
          <S.Bottom>
            <Button02
              fullWidth={true}
              disabled={selectedPoint === ''}
              onClick={() => console.log('ㅇㅇ')}
              background={theme.colors.main}
              name={'충전하기'}
            />
          </S.Bottom>
        </S.ContentInner>
      </S.Content>
    </Modal>
  )
}
