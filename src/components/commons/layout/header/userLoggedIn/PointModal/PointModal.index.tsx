import { Modal } from 'antd'
import Image from 'next/image'
import type { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import * as S from './PointModal.styles'
import Button02 from 'src/components/commons/buttons/02/Button02.index'
import theme from 'src/commons/styles/theme'
import { useMutationCreatePointTransactionOfLoading } from 'src/components/commons/hooks/mutations/usedItem/useMutationCreatePointTransactionOfLoading'

declare const window: typeof globalThis & {
  IMP: any
}

interface IPointModalUIProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function PointModalUI(props: IPointModalUIProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState('')
  const { createPointTransactionOfLoading, loading } = useMutationCreatePointTransactionOfLoading()

  const onChangePoint = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPoint(event.target.value)
  }

  const onClickAddPoint = () => {
    const IMP = window.IMP
    IMP.init('imp49910675')
    IMP.request_pay(
      {
        pg: 'kakaopay',
        pay_method: 'card',
        merchant_uid: `payment-${new Date().getTime()}`, // 주문 고유 번호
        name: '마우스',
        amount: selectedPoint,
        buyer_email: 'admin@joonggomarket.com',
        buyer_name: '김지환',
        buyer_tel: '010-5838-5146',
        buyer_addr: '경기도 용인시 기흥구',
        buyer_postcode: '01181',
        m_redirect_url: 'http://localhost:3000/markets', // 모바일에서는 결제시, 페이지 주소가 바뀜. 따라서, 결제 끝나고 돌아갈 주소 입력해야함
      },
      async function (response: any) {
        const { success, imp_uid } = response
        if (success) {
          await createPointTransactionOfLoading(imp_uid)
        } else {
          Modal.error({ content: '카카오페이 결제를 정상적으로 처리하지 못하였습니다.' })
        }
      }
    )
  }

  return (
    <>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <Modal
        open={props.isOpen}
        // onOk={onClickSellingOk}
        // okButtonProps={{ disabled: loading }}
        confirmLoading={loading}
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
                onClick={onClickAddPoint}
                background={theme.colors.main}
                name={'충전하기'}
              />
            </S.Bottom>
          </S.ContentInner>
        </S.Content>
      </Modal>
    </>
  )
}
