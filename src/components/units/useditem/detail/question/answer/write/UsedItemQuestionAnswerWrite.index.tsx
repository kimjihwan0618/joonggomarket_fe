import * as S from './UsedItemQuestionAnswerWrite.styles'
import Image from 'next/image'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import theme from 'src/commons/styles/theme'
import { useEffect } from 'react'
import { useUpdateForm } from 'src/components/commons/hooks/custom/useUpdateForm'
import type {
  IUseditemQuestionAnswer,
  IMutationCreateUseditemQuestionAnswerArgs,
} from 'src/commons/types/generated/types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IUsedItemQuestionWriteForm, schema } from './UsedItemQuestionAnswerWrite.schema'
import TextAreaWithError from 'src/components/commons/textareas/01/TextAreaWithError.index'
import { useQueryFetchUserLoggedIn } from 'src/components/commons/hooks/quires/user/useQueryFetchUserLoggedIn'
import { useMutationCreateUseditemQuestionAnswer } from 'src/components/commons/hooks/mutations/usedItem/question/answer/useMutationCreateUseditemQuestionAnswer'
import { useMutationUpdateUseditemQuestionAnswer } from 'src/components/commons/hooks/mutations/usedItem/question/answer/useMutationUpdateUseditemQuestionAnswer'

export interface IUsedItemQuestionAnswerWriteUIProps {
  updateAnswerToggle?: () => void
  createAnswerToggle?: () => void
  data?: IUseditemQuestionAnswer
  isEdit?: boolean
  useditemQuestionId?: IMutationCreateUseditemQuestionAnswerArgs['useditemQuestionId']
}

const ACTIVE_OPTION = {
  shouldDirty: true,
  shouldValidate: true,
}

export default function UsedItemQuestionAnswerWriteUI(
  props: IUsedItemQuestionAnswerWriteUIProps
): JSX.Element {
  const { data } = useQueryFetchUserLoggedIn()
  const { createUsedItemQuestionAnswer } = useMutationCreateUseditemQuestionAnswer()
  const { updateUsedItemQuestionAnswer } = useMutationUpdateUseditemQuestionAnswer()

  const { register, formState, setValue, getValues, watch } = useForm<IUsedItemQuestionWriteForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const { handleFormUpdate } = useUpdateForm({
    setValue,
    updateKeys: ['contents'],
    fetchData: props.data,
  })

  const onClickQuestionUpdate = async (): Promise<void> => {
    updateUsedItemQuestionAnswer({
      contents: getValues('contents'),
      useditemQuestionId: props.useditemQuestionId,
      useditemQuestionAnswerId: props?.data?._id,
    })
    setValue('contents', '', ACTIVE_OPTION)
    props.updateAnswerToggle()
  }

  const onClickQuestionCreate = async (): Promise<void> => {
    createUsedItemQuestionAnswer({
      contents: getValues('contents'),
      useditemQuestionId: props.useditemQuestionId,
    })
    setValue('contents', '', ACTIVE_OPTION)
    props.createAnswerToggle()
  }

  useEffect(() => {
    if (props?.data) handleFormUpdate()
  }, [props?.data])

  return (
    <S.Wrapper>
      <S.Inner>
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
          <S.Writer>{data?.fetchUserLoggedIn?.name}</S.Writer>
        </S.UserImageBox>
        <S.InputWrapper>
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
                <Button01
                  onClick={props.isEdit ? props.updateAnswerToggle : props.createAnswerToggle}
                  background={theme.colors.gray05}
                  name={'취소'}
                  width="03"
                />
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
      </S.Inner>
    </S.Wrapper>
  )
}
