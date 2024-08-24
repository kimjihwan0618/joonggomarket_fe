import * as S from './BoardCommentWrite.styles'
import Image from 'next/image'
import { IBoardCommentWriteUIProps } from './BoardCommentWrite.types'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import theme from 'src/commons/styles/theme'

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps): JSX.Element {
  return (
    <S.Wrapper data-isedit={props.isEdit}>
      {!props.isEdit && (
        <S.CommentTitle>
          <Image src={'/images/ic_comment.png'} width={20} height={20} />
          <h3>댓글</h3>
        </S.CommentTitle>
      )}
      <S.InputWrapper>
        <S.WriteInput
          value={props.writer}
          id="writerInput"
          readOnly={props.isEdit}
          onChange={props.onInputUserInfo}
          placeholder="작성자"
        />
        <S.PasswordInput
          value={props.password}
          id="pwInput"
          type="password"
          onChange={props.onInputUserInfo}
          placeholder="비밀번호"
        />
        <S.Rating>
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index}>
              <Image
                onClick={props.onClickRating}
                id={`rating${index + 1}`}
                src={
                  props.rating < index + 1
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
          <S.CommentTextArea
            data-isedit={props.isEdit}
            value={props.contents}
            onInput={props.onInputContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <S.CommentFooter>
            <S.CommentSizeLimit>{props.contents.length}/100</S.CommentSizeLimit>
            <S.CommentButtonsWrapper>
              {props.isEdit && (
                <Button01
                  onClick={props.onClickCommentToggle}
                  background={theme.colors.gray05}
                  name={'취소'}
                  width="03"
                />
              )}
              <Button01
                onClick={props.onClickSubmit}
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
