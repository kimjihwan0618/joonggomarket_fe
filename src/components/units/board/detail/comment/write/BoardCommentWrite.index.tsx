import * as S from './BoardCommentWrite.styles'
import Image from 'next/image'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import theme from 'src/commons/styles/theme'
import { useMutationUpdateBoardComment } from 'src/components/commons/hooks/mutations/board/comment/useMutationUpdateBoardComment'
import { useRouter } from 'next/router'
import { useMutationCreateBoardComment } from 'src/components/commons/hooks/mutations/board/comment/useMutationCreateBoardComment'
import type { IBoardComment } from 'src/commons/types/generated/types'
import type { Dispatch, MouseEvent } from 'react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { IBoardCommentWriterForm, schema } from './BoardCommentWrite.schema'
import InputWithError from 'src/components/commons/inputs/02/InputWithError.index'
import TextAreaWithError from 'src/components/commons/textareas/01/TextAreaWithError.index'
import { useUpdateForm } from 'src/components/commons/hooks/custom/useUpdateForm'

export interface IBoardCommentWriteUIProps {
  isEdit: boolean
  data?: IBoardComment
  handleCommentToggle?: (event: MouseEvent<HTMLButtonElement>) => void
  setIsEdit?: Dispatch<React.SetStateAction<boolean>>
}

const ACTIVE_OPTION = {
  shouldDirty: true,
  shouldValidate: true,
}

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps): JSX.Element {
  const router = useRouter()
  const boardId = typeof router.query.boardId === 'string' ? router.query.boardId : ''
  const { createBoardComment } = useMutationCreateBoardComment(boardId)
  const { updateBoardComment } = useMutationUpdateBoardComment(boardId)
  const { register, formState, setValue, getValues, watch } = useForm<IBoardCommentWriterForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const { handleFormUpdate } = useUpdateForm({
    setValue,
    updateKeys: ['rating', 'writer', 'contents'],
    fetchData: props.data,
  })

  const onClickCommentUpdate = async (): Promise<void> => {
    updateBoardComment({ getValues, boardCommentId: props.data._id })
    props.setIsEdit(false)
  }

  const onClickCommentCreate = async (): Promise<void> => {
    createBoardComment(getValues)
    setValue('rating', 1, ACTIVE_OPTION)
    setValue('writer', '', ACTIVE_OPTION)
    setValue('contents', '', ACTIVE_OPTION)
    setValue('password', '', ACTIVE_OPTION)
  }

  const onClickRating = (rating: number): void => {
    setValue('rating', rating, ACTIVE_OPTION)
  }

  useEffect(() => {
    props?.isEdit ? handleFormUpdate() : setValue('rating', 5, ACTIVE_OPTION)
  }, [props?.data])

  return (
    <S.Wrapper data-isedit={props.isEdit}>
      {!props.isEdit && (
        <S.CommentTitle>
          <Image src={'/images/ic_comment.png'} width={20} height={20} />
          <h3>댓글</h3>
        </S.CommentTitle>
      )}
      <S.InputWrapper>
        <InputWithError
          register={register('writer')}
          readOnly={props.isEdit}
          placeholder="작성자"
          width="180px"
        />
        <InputWithError
          register={register('password')}
          type="password"
          placeholder="비밀번호"
          width="180px"
        />
        <S.Rating>
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index}>
              <Image
                onClick={() => onClickRating(index + 1)}
                id={`rating${index + 1}`}
                src={
                  Number(getValues('rating')) < index + 1
                    ? '/images/ic_star-gray.png'
                    : '/images/ic_star-yellow.png'
                }
                width={20}
                height={20}
              />
            </div>
          ))}
        </S.Rating>
        <S.CommentWrapper>
          <TextAreaWithError
            style={{ border: 'none' }}
            register={register('contents')}
            height={'108px'}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <S.CommentFooter>
            <S.CommentSizeLimit>{watch('contents')?.length ?? 0}/100</S.CommentSizeLimit>
            <S.CommentButtonsWrapper>
              {props.isEdit && (
                <Button01
                  onClick={props.handleCommentToggle}
                  background={theme.colors.gray05}
                  name={'취소'}
                  width="03"
                />
              )}
              <Button01
                disabled={!formState.isValid}
                onClick={props.isEdit ? onClickCommentUpdate : onClickCommentCreate}
                background={props.isEdit ? theme.colors.main : theme.colors.dark01}
                color={!props.isEdit && 'white'}
                name={`${props.isEdit ? '수정' : '등록'}하기`}
                width="02"
              />
            </S.CommentButtonsWrapper>
          </S.CommentFooter>
        </S.CommentWrapper>
      </S.InputWrapper>
    </S.Wrapper>
  )
}
