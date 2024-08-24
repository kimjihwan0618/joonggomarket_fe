import * as S from './BoardWrite.styles'
import { IBoardWriteUIProps } from './BoardWrite.types'
import { Modal } from 'antd'
import DaumPostcodeEmbed from 'react-daum-postcode'
import { uuid4 } from 'uuid4'
import Uploads01 from 'src/components/commons/uploads/01/Upload01.container'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import theme from 'src/commons/styles/theme'

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  return (
    <>
      {props.addressSearchHandler.isOpen && (
        <Modal
          open={true}
          onOk={props.addressSearchHandler.handleModalOpen}
          onCancel={props.addressSearchHandler.handleModalOpen}
        >
          <DaumPostcodeEmbed onComplete={props.addressSearchHandler.handleGetAddress} />
        </Modal>
      )}
      <S.ContentWrapper>
        <S.ContentTitle>게시물 {props.isEdit ? '수정' : '등록'}</S.ContentTitle>
        <S.FormWrapper>
          <S.FormItem style={{ width: '48.78%' }}>
            <S.ItemTitle>작성자</S.ItemTitle>
            <S.ItemInput
              disabled={!!props.data?.fetchBoard.writer}
              readOnly={!!props.data?.fetchBoard.writer}
              defaultValue={props.data?.fetchBoard.writer ?? ''}
              onChange={(e) => {
                props.onChangeFormInput(
                  e,
                  props.setWriter,
                  props.setWriterError,
                  '작성자를 입력해주세요'
                )
              }}
              type="text"
              placeholder="이름을 적어주세요."
            />
            <S.FormItemError>{props.writerError}</S.FormItemError>
          </S.FormItem>
          <S.FormItem style={{ width: '48.78%' }}>
            <S.ItemTitle>비밀번호</S.ItemTitle>
            <S.ItemInput
              onChange={(e) => {
                props.onChangeFormInput(
                  e,
                  props.setPassword,
                  props.setPasswordError,
                  '비밀번호를 입력해주세요'
                )
              }}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
            <S.FormItemError>{props.passwordError}</S.FormItemError>
          </S.FormItem>
          <S.FormItem style={{ width: '100%' }}>
            <S.ItemTitle>제목</S.ItemTitle>
            <S.ItemInput
              defaultValue={props.data?.fetchBoard.title}
              onChange={(e) => {
                props.onChangeFormInput(
                  e,
                  props.setTitle,
                  props.setTitleError,
                  '제목을 입력해주세요'
                )
              }}
              type="text"
              placeholder="제목을 작성해주세요."
            />
            <S.FormItemError>{props.titleError}</S.FormItemError>
          </S.FormItem>
          <S.FormItem style={{ width: '100%' }}>
            <S.ItemTitle>내용</S.ItemTitle>
            <S.ItemTextArea
              defaultValue={props.data?.fetchBoard.contents}
              onChange={(e) => {
                props.onChangeFormInput(
                  e,
                  props.setContents,
                  props.setContentsError,
                  '내용을 입력해주세요'
                )
              }}
              placeholder="내용을 작성해주세요."
            />
            <S.FormItemError>{props.contentsError}</S.FormItemError>
          </S.FormItem>
          <S.PostSearchItem>
            <S.FormItem style={{ width: '78px' }}>
              <S.ItemTitle>주소</S.ItemTitle>
              <S.ItemInput
                value={props.addressSearchHandler.zipcode}
                readOnly
                placeholder="07251"
              />
            </S.FormItem>
            <Button01
              onClick={props.addressSearchHandler.handleModalOpen}
              name={'우편번호 검색'}
              color="white"
              background={theme.colors.dark01}
            />
            <S.FormItem style={{ width: '100%' }}>
              <S.DetailAddressInput value={props.addressSearchHandler.address} readOnly />
            </S.FormItem>
            <S.FormItem style={{ width: '100%' }}>
              <S.DetailAddressInput
                defaultValue={props.data?.fetchBoard?.boardAddress?.addressDetail}
                onChange={(e) => {
                  props.onChangeFormInput(
                    e,
                    props.addressSearchHandler.setAddressDetail,
                    null,
                    '제목을 입력해주세요'
                  )
                }}
                placeholder="상세주소를 입력해주세요."
              />
            </S.FormItem>
          </S.PostSearchItem>
          <S.FormItem style={{ width: '100%' }}>
            <S.ItemTitle>유튜브</S.ItemTitle>
            <S.ItemInput
              defaultValue={props.data?.fetchBoard?.youtubeUrl}
              onChange={(e) => {
                props.onChangeFormInput(e, props.setYoutubeUrl, null, '제목을 입력해주세요')
              }}
              type="text"
              placeholder="링크를 복사해주세요."
            />
          </S.FormItem>
          <S.FormItem style={{ width: '100%' }}>
            <S.ItemTitle>사진 첨부</S.ItemTitle>
            <S.ImagesWrapper>
              {props.fileUrls.map((el, index) => (
                <Uploads01
                  key={uuid4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                  onClickReset={props.onClickReset}
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
            onClick={props.onClickUndo}
            background={theme.colors.gray04}
            name={'취소하기'}
            width="03"
          />
          <Button01
            disabled={!props.formValidation}
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            background={!props.formValidation ? theme.colors.gray04 : theme.colors.main}
            name={`${props.isEdit ? '수정' : '등록'}하기`}
            width="03"
          />
        </S.ButtonWrapper>
      </S.ContentWrapper>
    </>
  )
}
