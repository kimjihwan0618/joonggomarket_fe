import * as S from './BoardCommentList.styles'
import { IBoardCommentListUIProps } from './BoardCommentList.types'
import { Modal } from 'antd'
import CommentItem from 'src/components/units/board/detail/comment/item'

export default function BoardCommentListUI(props: IBoardCommentListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <Modal
        title="비밀번호를 입력해주세요."
        open={props.isOpen}
        onOk={props.onClickCommentDeleteOk}
        onCancel={props.handlePasswordModal}
      >
        <S.PasswordInput
          value={props.passwordCheck}
          onChange={(e) => props.setPasswordCheck(e.target.value)}
          type="password"
        />
      </Modal>
      {props?.comments?.map((comment, idx) => (
        <CommentItem key={comment._id} idx={idx} comment={comment} props={props} />
      ))}
    </S.Wrapper>
  )
}
