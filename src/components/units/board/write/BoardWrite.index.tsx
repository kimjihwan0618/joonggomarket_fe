import * as S from './BoardWrite.styles'
import uuid4 from 'uuid4'
import Uploads01 from 'src/components/commons/uploads/01/Upload01.index'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import theme from 'src/commons/styles/theme'
import { useForm } from 'react-hook-form'
import { IBoardWriterForm, schema } from './BoardWrite.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useImageInput } from 'src/components/commons/hooks/custom/useImageInput'
import { useMutationCreateBoard } from 'src/components/commons/hooks/mutations/board/useMutationCreateBoard'
import { useMutationUpdateBoard } from 'src/components/commons/hooks/mutations/board/useMutationUpdateBoard'
import { useRouter } from 'next/router'
import { useUpdateForm } from 'src/components/commons/hooks/custom/useUpdateForm'
import { useDaumPostModal } from 'src/components/commons/hooks/custom/useDaumPostModal'
import { IQuery } from 'src/commons/types/generated/types'
import InputWithError from 'src/components/commons/inputs/02/InputWithError.index'
import TextAreaWithError from 'src/components/commons/textareas/01/TextAreaWithError.index'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useQueryFetchBoard } from 'src/components/commons/hooks/quires/board/useQueryFetchBoard'
import { Modal } from 'antd'

export interface IBoardWriteUIProps {
  isEdit: boolean
}

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  const router = useRouter()
  const boardId = typeof router.query.boardId === 'string' ? router.query.boardId : ''
  const { data, error } = useQueryFetchBoard(boardId)
  const {
    handleModalToggle,
    DaumPostModal,
    postModalOpen,
    address,
    zonecode,
    setAddress,
    setZoneCode,
  } = useDaumPostModal(false)
  const { moveToBack, moveToPage } = useMoveToPage()
  const { fileUrls, onChangeFileUrls, onClickReset, setFileUrls, files, onChangeFile } =
    useImageInput(3)
  const { register, formState, setValue, getValues } = useForm<IBoardWriterForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const { createBoard, loading: createLoading } = useMutationCreateBoard({ getValues, files })
  const { updateBoard, loading: updateLoading } = useMutationUpdateBoard({
    getValues,
    fileUrls,
    files,
  })
  const { handleFormUpdate } = useUpdateForm({
    setValue,
    updateKeys: ['writer', 'title', 'contents', 'boardAddress.addressDetail', 'youtubeUrl'],
    fetchData: data?.fetchBoard,
  })

  useEffect(() => {
    setValue('zipcode', zonecode)
    setValue('address', address)
  }, [address, zonecode])

  useEffect(() => {
    if (error) {
      Modal.warning({ content: '유효한 게시글이 아닙니다.' })
      moveToPage(`/boards`)()
    }
    const fetchBoard = data?.fetchBoard
    if (fetchBoard) {
      handleFormUpdate()
    }
    if (fetchBoard?.images?.length > 0) {
      const images = fetchBoard.images
      const filledImages: string[] = [images[0] || '', images[1] || '', images[2] || ''].map(
        (image) => (image !== '' ? `${process.env.NEXT_PUBLIC_S3_STORAGE}${image}` : '')
      )
      setFileUrls(filledImages)
    }
    const fetchAddress = fetchBoard?.boardAddress?.address
    const fetchZipCode = fetchBoard?.boardAddress?.zipcode
    fetchAddress && setAddress(fetchAddress)
    fetchZipCode && setZoneCode(fetchZipCode)
  }, [data?.fetchBoard, error])

  return (
    <>
      {postModalOpen && <DaumPostModal />}
      <S.ContentWrapper>
        <S.ContentTitle>게시물 {props.isEdit ? '수정' : '등록'}</S.ContentTitle>
        <S.FormWrapper>
          <InputWithError
            width="48.78%"
            register={register('writer')}
            disabled={!!data?.fetchBoard.writer}
            readOnly={!!data?.fetchBoard.writer}
            placeholder="이름을 적어주세요."
            label={'작성자'}
            error={formState.errors.writer?.message}
          />
          <InputWithError
            width="48.78%"
            type="password"
            register={register('password')}
            placeholder="비밀번호를 입력해주세요."
            label={'비밀번호'}
            error={formState.errors.password?.message}
          />
          <InputWithError
            register={register('title')}
            placeholder="제목을 작성해주세요."
            label={'제목'}
            error={formState.errors.title?.message}
          />
          <TextAreaWithError
            label="내용"
            register={register('contents')}
            placeholder="내용을 작성해주세요"
            height="480px"
            error={formState.errors.contents?.message}
          />
          <S.PostAddressWrapper>
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
          </S.PostAddressWrapper>
          <InputWithError
            label={'유튜브'}
            register={register('youtubeUrl')}
            placeholder="유튜브 링크를 입력해주세요"
            error={formState.errors.youtubeUrl?.message}
          />
          <S.FormItem style={{ width: '100%' }}>
            <S.ItemTitle>사진 첨부</S.ItemTitle>
            <S.ImagesWrapper>
              {fileUrls.map((el, index) => (
                <Uploads01
                  key={uuid4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={onChangeFileUrls}
                  onChangeFile={onChangeFile}
                  onClickReset={onClickReset}
                />
              ))}
            </S.ImagesWrapper>
          </S.FormItem>
        </S.FormWrapper>
        <S.ButtonWrapper>
          <Button01
            onClick={moveToBack(`/boards/${router.query.boardId}`)}
            background={theme.colors.dark01}
            color={'white'}
            name={'취소하기'}
            width="03"
          />
          <Button01
            disabled={!formState.isValid || createLoading || updateLoading}
            isLoading={createLoading || updateLoading}
            onClick={props.isEdit ? updateBoard : createBoard}
            background={theme.colors.main}
            name={`${props.isEdit ? '수정' : '등록'}하기`}
            width="03"
          />
        </S.ButtonWrapper>
      </S.ContentWrapper>
    </>
  )
}
