import * as S from './UsedItemWrite.styles'
import uuid4 from 'uuid4'
import Uploads01 from 'src/components/commons/uploads/01/Upload01.index'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import theme from 'src/commons/styles/theme'
import { useForm } from 'react-hook-form'
import { IUsedItemWriteForm, schema } from './UsedItemWrite.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useImageInput } from 'src/components/commons/hooks/custom/useImageInput'
import { useRouter } from 'next/router'
import { useUpdateForm } from 'src/components/commons/hooks/custom/useUpdateForm'
import { useDaumPostModal } from 'src/components/commons/hooks/custom/useDaumPostModal'
import { IQuery } from 'src/commons/types/generated/types'
import InputWithError from 'src/components/commons/inputs/02/InputWithError.index'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import TextEditorUI from 'src/components/commons/toast-ui-editor/TextEditorUI'
import KakaoMapUI from 'src/components/commons/kakaomap/KakaomapUI'

export interface IUsedItemWriteUIProps {
  isEdit: boolean
  data?: Pick<IQuery, 'fetchUseditem'>
}

export default function UsedItemWriteUI(props: IUsedItemWriteUIProps): JSX.Element {
  const router = useRouter()
  const {
    handleModalToggle,
    DaumPostModal,
    postModalOpen,
    address,
    zonecode,
    setAddress,
    setZoneCode,
  } = useDaumPostModal()
  const { moveToBack } = useMoveToPage()
  const { fileUrls, onChangeFileUrls, onClickReset, setFileUrls } = useImageInput(3)
  const { register, formState, setValue, getValues } = useForm<IUsedItemWriteForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  // const { createBoard } = useMutationCreateBoard({ getValues, fileUrls })
  // const { updateBoard } = useMutationUpdateBoard({ getValues, fileUrls })
  const { handleFormUpdate } = useUpdateForm({
    setValue,
    updateKeys: ['name', 'remarks', 'price', 'tags'],
    fetchData: props.data?.fetchUseditem,
  })

  // useEffect(() => {
  //   setValue('zipcode', zonecode)
  //   setValue('address', address)
  // }, [address, zonecode])

  useEffect(() => {
    const fetchUseditem = props.data?.fetchUseditem
    if (fetchUseditem) {
      handleFormUpdate()
    }
    if (fetchUseditem?.images?.length > 0) {
      const images = fetchUseditem.images
      const filledImages: string[] = [images[0] || '', images[1] || '', images[2] || '']
      setFileUrls(filledImages)
    }
    // const fetchAddress = fetchUseditem?.boardAddress?.address
    // const fetchZipCode = fetchUseditem?.boardAddress?.zipcode
    // fetchAddress && setAddress(fetchAddress)
    // fetchZipCode && setZoneCode(fetchZipCode)
  }, [props.data?.fetchUseditem])

  return (
    <>
      {postModalOpen && <DaumPostModal />}
      <S.ContentWrapper>
        <S.ContentTitle>상품 {props.isEdit ? '수정' : '등록'}</S.ContentTitle>
        <S.FormWrapper>
          <InputWithError
            register={register('name')}
            placeholder="상품명을 작성해주세요."
            label={'상품명'}
            error={formState.errors.name?.message}
          />
          <S.TextEditorWrapper>
            <S.TextEditorLabel>상품설명</S.TextEditorLabel>
            <TextEditorUI />
          </S.TextEditorWrapper>
          <InputWithError
            register={register('remarks')}
            placeholder="한줄요약을 작성해주세요."
            label={'한줄요약'}
            error={formState.errors.remarks?.message}
          />
          <InputWithError
            width="48.78%"
            type="number"
            register={register('price')}
            placeholder="판매 가격을 입력해주세요."
            label={'판매가격'}
            error={formState.errors.price?.message}
          />
          <InputWithError
            width="48.78%"
            register={register('tags')}
            placeholder="#태그 #태그 #태그"
            label={'태그입력'}
            error={formState.errors.price?.message}
          />
          <S.MapAddressWrapper>
            {/* <S.MapWrapper>
              <KakaoMapUI lat={0} lng={0} />
            </S.MapWrapper> */}
            <S.AddressWrapper></S.AddressWrapper>
          </S.MapAddressWrapper>
          {/* <S.PostAddressWrapper>
            <InputWithError
              register={register('zipcode')}
              placeholder="우편번호"
              width="100px"
              readOnly
              label={'주소'}
            />
            <Button01
              onClick={handleModalToggle}
              name={'우편번호 검색'}
              color="white"
              background={theme.colors.dark01}
            />
            <InputWithError register={register('address')} readOnly />
            <InputWithError
              register={register('addressDetail')}
              readOnly={zonecode === null ? true : false}
              placeholder="상세주소를 입력해주세요."
            />
          </S.PostAddressWrapper> */}
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
            <S.ItemTitle>메인 사진 설정</S.ItemTitle>
            <S.RadioItem>
              <input id="main-photo1" type="radio" value={'사진1'} name="main-set" />
              <label htmlFor="main-photo1">사진1</label>
              <input id="main-photo2" type="radio" value={'사진2'} name="main-set" />
              <label htmlFor="main-photo2">사진2</label>
              <input id="main-photo3" type="radio" value={'사진3'} name="main-set" />
              <label htmlFor="main-photo3">사진3</label>
            </S.RadioItem>
          </S.FormItem>
        </S.FormWrapper>
        <S.ButtonWrapper>
          <Button01
            onClick={moveToBack(`/boards/${router.query.boardId}`)}
            background={theme.colors.gray04}
            name={'취소하기'}
            width="03"
          />
          <Button01
            disabled={!formState.isValid}
            // onClick={props.isEdit ? updateBoard : createBoard}
            onClick={() => console.log('굿')}
            background={theme.colors.main}
            name={`${props.isEdit ? '수정' : '등록'}하기`}
            width="03"
          />
        </S.ButtonWrapper>
      </S.ContentWrapper>
    </>
  )
}
