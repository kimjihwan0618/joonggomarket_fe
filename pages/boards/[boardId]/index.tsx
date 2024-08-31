import BoardDetail from 'src/components/units/board/detail/BoardDetail.index'
import BoardCommentWrite from 'src/components/units/board//detail/comment/write/BoardCommentWrite.index'
import BoardCommentList from 'src/components/units/board//detail/comment/list/BoardCommentList.index'

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite isEdit={false} />
      <BoardCommentList />
    </>
  )
}
