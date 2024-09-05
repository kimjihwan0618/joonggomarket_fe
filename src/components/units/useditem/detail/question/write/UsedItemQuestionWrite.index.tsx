import * as S from './UsedItemQuestionWrite.styles'
import Image from 'next/image'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import theme from 'src/commons/styles/theme'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useUpdateForm } from 'src/components/commons/hooks/custom/useUpdateForm'
import type { IUseditemQuestion } from 'src/commons/types/generated/types'
import type { Dispatch, MouseEvent } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IUsedItemQuestionWriteForm, schema } from './UsedItemQuestionWrite.schema'
import TextAreaWithError from 'src/components/commons/textareas/01/TextAreaWithError.index'
import { useMutationCreateUsedItemQuestion } from 'src/components/commons/hooks/mutations/usedItem/question/useMutationCreateUsedItemQuestion'
import { useMutationUpdateUsedItemQuestion } from 'src/components/commons/hooks/mutations/usedItem/question/useMutationUpdateUsedItemQuestion'
import { useQueryFetchUserLoggedIn } from 'src/components/commons/hooks/quires/user/useQueryFetchUserLoggedIn'

export interface IUsedItemQuestionWriteUIProps {
  isEdit: boolean
  data?: IUseditemQuestion
  handleCommentToggle?: (event: MouseEvent<HTMLButtonElement>) => void
  setIsEdit?: Dispatch<React.SetStateAction<boolean>>
}

const ACTIVE_OPTION = {
  shouldDirty: true,
  shouldValidate: true,
}

export default function UsedItemQuestionWriteUI(props: IUsedItemQuestionWriteUIProps): JSX.Element {
  const router = useRouter()
  const useditemId = typeof router.query.useditemId === 'string' ? router.query.useditemId : ''
  const { data } = useQueryFetchUserLoggedIn()
  const { createUsedItemQuestion } = useMutationCreateUsedItemQuestion(useditemId)
  const { updateUsedItemQuestion } = useMutationUpdateUsedItemQuestion(useditemId)
  const { register, formState, setValue, getValues, watch } = useForm<IUsedItemQuestionWriteForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const { handleFormUpdate } = useUpdateForm({
    setValue,
    updateKeys: ['user.name', 'contents'],
    fetchData: props.data,
  })

  const onClickQuestionUpdate = async (): Promise<void> => {
    updateUsedItemQuestion({ getValues, useditemQuestionId: props.data._id })
    props.setIsEdit(false)
  }

  const onClickQuestionCreate = async (): Promise<void> => {
    createUsedItemQuestion(getValues)
    setValue('contents', '', ACTIVE_OPTION)
  }

  useEffect(() => {
    handleFormUpdate()
  }, [])

  return (
    <S.Wrapper data-isedit={props.isEdit}>
      {!props.isEdit ? (
        <S.CommentTitle>
          <Image src={'/images/ic_comment.png'} width={20} height={20} />
          <h3>문의하기</h3>
        </S.CommentTitle>
      ) : (
        <S.UserImageBox>
          <Image
            src={
              data?.fetchUserLoggedIn?.picture
                ? `https://storage.googleapis.com/${data?.fetchUserLoggedIn?.picture}`
                : '/images/ic_profile.png'
            }
            width={40}
            height={40}
          />
        </S.UserImageBox>
      )}
      <S.InputWrapper data-isedit={props.isEdit}>
        {props.isEdit && <S.Writer>유저명</S.Writer>}
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
                onClick={props.isEdit ? onClickQuestionUpdate : onClickQuestionCreate}
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
