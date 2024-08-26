import * as S from './BoardWrite.styles'
import { IBoardWriteUIProps } from './BoardWrite.types'
import { Modal } from 'antd'
import DaumPostcodeEmbed from 'react-daum-postcode'
import uuid4 from 'uuid4'
import Uploads01 from 'src/components/commons/uploads/01/Upload01.container'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import theme from 'src/commons/styles/theme'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useForm } from 'react-hook-form'
import { IBoardWriterForm, schema } from './BoardWrite.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import type { Address } from 'react-daum-postcode'
import { useImageInput } from 'src/components/commons/hooks/custom/useImageInput'

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  const { moveToPage } = useMoveToPage()
  const { fileUrls, onChangeFileUrls, onClickReset } = useImageInput()
  const { register, handleSubmit, formState, setValue } = useForm<IBoardWriterForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const [isOpen, setIsOpen] = useState(false)

  const handleModalOpen = (): void => {
    setIsOpen((prev) => !prev)
  }

  const handleGetAddress = (data: Address): void => {
    setIsOpen((prev) => !prev)
    if (data) {
      setValue('address', data.address)
      setValue('zipcode', data.zonecode)
    } else {
      Modal.warning({ content: '주소를 정상적으로 읽어오지 못했습니다.' })
    }
  }

  const onClickUndo = (): void => {
    props.isEdit ? moveToPage(`/boards/${props?.data?.fetchBoard?._id}`)() : moveToPage(`/boards`)()
  }

  return (
    <>
      {isOpen && (
        <Modal open={true} onOk={handleModalOpen} onCancel={handleModalOpen}>
          <DaumPostcodeEmbed onComplete={handleGetAddress} />
        </Modal>
      )}
      <S.ContentWrapper>
        <S.ContentTitle>게시물 {props.isEdit ? '수정' : '등록'}</S.ContentTitle>
        <S.FormWrapper>
          <S.FormItem style={{ width: '48.78%' }}>
            <S.ItemTitle>작성자</S.ItemTitle>
            <S.ItemInput
              // disabled={!!props.data?.fetchBoard.writer}
              // readOnly={!!props.data?.fetchBoard.writer}
              // defaultValue={props.data?.fetchBoard.writer ?? ''}
              {...register('writer')}
              placeholder="이름을 적어주세요."
            />
            <S.FormItemError>{formState.errors.writer?.message}</S.FormItemError>
          </S.FormItem>
          <S.FormItem style={{ width: '48.78%' }}>
            <S.ItemTitle>비밀번호</S.ItemTitle>
            <S.ItemInput
              type="password"
              {...register('password')}
              placeholder="비밀번호를 입력해주세요."
            />
            <S.FormItemError>{formState.errors.password?.message}</S.FormItemError>
          </S.FormItem>
          <S.FormItem style={{ width: '100%' }}>
            <S.ItemTitle>제목</S.ItemTitle>
            <S.ItemInput
              // defaultValue={props.data?.fetchBoard.title}
              placeholder="제목을 작성해주세요."
              {...register('title')}
            />
            <S.FormItemError>{formState.errors.title?.message}</S.FormItemError>
          </S.FormItem>
          <S.FormItem style={{ width: '100%' }}>
            <S.ItemTitle>내용</S.ItemTitle>
            <S.ItemTextArea
              // defaultValue={props.data?.fetchBoard.contents}
              placeholder="내용을 작성해주세요."
              {...register('contents')}
            />
            <S.FormItemError>{formState.errors.contents?.message}</S.FormItemError>
          </S.FormItem>
          <S.PostSearchItem>
            <S.FormItem style={{ width: '78px' }}>
              <S.ItemTitle>주소</S.ItemTitle>
              <S.ItemInput {...register('zipcode')} readOnly placeholder="우편번호" />
            </S.FormItem>
            <Button01
              onClick={handleModalOpen}
              name={'우편번호 검색'}
              color="white"
              background={theme.colors.dark01}
            />
            <S.FormItem style={{ width: '100%' }}>
              <S.DetailAddressInput {...register('address')} readOnly />
            </S.FormItem>
            <S.FormItem style={{ width: '100%' }}>
              <S.DetailAddressInput
                // defaultValue={props.data?.fetchBoard?.boardAddress?.addressDetail}
                placeholder="상세주소를 입력해주세요."
                {...register('addressDetail')}
              />
            </S.FormItem>
          </S.PostSearchItem>
          <S.FormItem style={{ width: '100%' }}>
            <S.ItemTitle>유튜브</S.ItemTitle>
            <S.ItemInput
              // defaultValue={props.data?.fetchBoard?.youtubeUrl}
              placeholder="링크를 복사해주세요."
              {...register('youtubeUrl')}
            />
          </S.FormItem>
          <S.FormItem style={{ width: '100%' }}>
            <S.ItemTitle>사진 첨부</S.ItemTitle>
            <S.ImagesWrapper>
              {fileUrls.map((el, index) => (
                <Uploads01
                  key={uuid4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={onChangeFileUrls}
                  onClickReset={onClickReset}
                />
              ))}
            </S.ImagesWrapper>
          </S.FormItem>
          <S.FormItem style={{ width: '100%' }}>
            <S.ItemTitle>메인 설정</S.ItemTitle>
            <S.RadioItem>
              <input id="youtube" type="radio" value={'유튜브'} name="main-set"></input>
              <label htmlFor="youtube">유튜브</label>
              <input id="photo" type="radio" value={'사진'} name="main-set"></input>
              <label htmlFor="photo">사진</label>
            </S.RadioItem>
          </S.FormItem>
        </S.FormWrapper>
        <S.ButtonWrapper>
          <Button01
            onClick={onClickUndo}
            background={theme.colors.gray04}
            name={'취소하기'}
            width="03"
          />
          <Button01
            disabled={!formState.isValid}
            onClick={() => {}}
            // onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            background={!formState.isValid ? theme.colors.gray04 : theme.colors.main}
            name={`${props.isEdit ? '수정' : '등록'}하기`}
            width="03"
          />
        </S.ButtonWrapper>
      </S.ContentWrapper>
    </>
  )
}
