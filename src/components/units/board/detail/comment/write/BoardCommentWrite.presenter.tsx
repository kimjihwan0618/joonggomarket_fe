import * as S from './BoardCommentWrite.styles';
import Image from 'next/image';

export default function BoardCommentWriteUI({
  onClickRating,
  rating,
  contents,
  onInputContents,
  onInputUserInfo,
  onClickSubmit,
  password,
  writer,
  isEdit,
}) {
  return (
    <S.Wrapper isEdit={isEdit}>
      {!isEdit && (
        <S.CommentTitle>
          <Image src={'/images/ic_comment.png'} width={20} height={20} />
          <h3>댓글</h3>
        </S.CommentTitle>
      )}
      <S.InputWrapper>
        <S.WriteInput
          value={writer}
          id="writerInput"
          onInput={onInputUserInfo}
          placeholder="작성자"
        />
        <S.PasswordInput
          value={password}
          id="pwInput"
          onInput={onInputUserInfo}
          placeholder="비밀번호"
        />
        <S.Rating>
          {Array.from({ length: 5 }, (_, index) =>
            rating < index + 1 ? (
              <div key={index}>
                <Image
                  onClick={onClickRating}
                  id={`rating${index + 1}`}
                  src={'/images/ic_star-gray.png'}
                  width={20}
                  height={20}
                />
              </div>
            ) : (
              <div key={index}>
                <Image
                  onClick={onClickRating}
                  id={`rating${index + 1}`}
                  src={'/images/ic_star-yellow.png'}
                  width={20}
                  height={20}
                />
              </div>
            )
          )}
        </S.Rating>
        <S.CommentWrapper>
          <S.CommentTextArea
            isEdit={isEdit}
            value={contents}
            onInput={onInputContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <S.CommentFooter>
            <S.CommentSizeLimit>{contents.length}/100</S.CommentSizeLimit>
            <S.RegisterButton isEdit={isEdit} onClick={onClickSubmit}>
              {isEdit ? '수정' : '등록'}하기
            </S.RegisterButton>
          </S.CommentFooter>
        </S.CommentWrapper>
      </S.InputWrapper>
    </S.Wrapper>
  );
}
