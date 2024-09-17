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
import { useMutationCreateUsedItem } from 'src/components/commons/hooks/mutations/usedItem/useMutationCreateUsedItem'
import { useMutationUpdateUsedItem } from 'src/components/commons/hooks/mutations/usedItem/useMutationUpdateUsedItem'

const ACTIVE_OPTION = {
  shouldDirty: true,
  shouldValidate: true,
}

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
    lat,
    lng,
    setLat,
    setLng,
  } = useDaumPostModal()
  const { moveToBack } = useMoveToPage()
  const { fileUrls, onChangeFileUrls, onClickReset, setFileUrls } = useImageInput(3)
  const { register, formState, setValue, getValues } = useForm<IUsedItemWriteForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const { createUsedItem } = useMutationCreateUsedItem({ getValues, fileUrls })
  const { updateUsedItem } = useMutationUpdateUsedItem({ getValues, fileUrls })
  const { handleFormUpdate } = useUpdateForm({
    setValue,
    updateKeys: ['name', 'remarks', 'price', 'tags', 'contents', 'useditemAddress.addressDetail'],
    fetchData: props.data?.fetchUseditem,
  })

  const onChangeContents = (value: string) => {
    setValue('contents', value === '<p><br></p>' ? '<p>최소 내용을 입력해주세요!!</p>' : value)
  }

  useEffect(() => {
    setValue('zipcode', zonecode)
    setValue('address', address)
    setValue('lat', lat)
    setValue('lng', lng)
  }, [address, zonecode, lat, lng])

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
    const fetchAddress = fetchUseditem?.useditemAddress?.address
    const fetchZipCode = fetchUseditem?.useditemAddress?.zipcode
    const fetchLat = fetchUseditem?.useditemAddress?.lat
    const fetchLng = fetchUseditem?.useditemAddress?.lng
    const fetchTags = fetchUseditem?.tags
    fetchAddress && setAddress(fetchAddress)
    fetchZipCode && setZoneCode(fetchZipCode)
    fetchLat && setLat(fetchLat)
    fetchLng && setLng(fetchLng)
    fetchTags && setValue('tags', fetchTags.join(''), ACTIVE_OPTION)
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
            error={formState.errors.tags?.message}
          />
          <S.TextEditorWrapper>
            <S.TextEditorLabel>상품설명</S.TextEditorLabel>
            <TextEditorUI value={getValues('contents')} onChange={onChangeContents} />
          </S.TextEditorWrapper>

          <S.MapAddressWrapper>
            <S.MapWrapper>
              <KakaoMapUI draggable={false} lat={lat} lng={lng} />
            </S.MapWrapper>
            <S.AddressWrapper>
              <S.GpsWrapper>
                <S.PostItem>
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
                </S.PostItem>
                <S.LatLng>
                  <InputWithError
                    register={register('lat')}
                    readOnly={true}
                    type="number"
                    placeholder="위도(LAT)"
                    label="위도"
                    width="100px"
                  />
                  <InputWithError
                    register={register('lng')}
                    readOnly={true}
                    type="number"
                    placeholder="경도(LNG)"
                    label="경도"
                    width="100px"
                  />
                </S.LatLng>
              </S.GpsWrapper>
              <S.Address>
                <InputWithError width="100%" label="주소" register={register('address')} readOnly />
                <InputWithError
                  width="100%"
                  register={register('addressDetail')}
                  readOnly={zonecode === null ? true : false}
                  placeholder="상세주소를 입력해주세요."
                />
              </S.Address>
            </S.AddressWrapper>
          </S.MapAddressWrapper>
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
        </S.FormWrapper>
        <S.ButtonWrapper>
          <Button01
            onClick={moveToBack(`/markets/${router.query.useditemId}`)}
            background={theme.colors.gray04}
            name={'취소하기'}
            width="03"
          />
          <Button01
            disabled={!formState.isValid}
            onClick={props.isEdit ? updateUsedItem : createUsedItem}
            background={theme.colors.main}
            name={`${props.isEdit ? '수정' : '등록'}하기`}
            width="03"
          />
        </S.ButtonWrapper>
      </S.ContentWrapper>
    </>
  )
}
