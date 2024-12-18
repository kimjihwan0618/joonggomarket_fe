import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import type { IMutation, IMutationDeleteBoardArgs } from 'src/commons/types/generated/types'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { FETCH_BOARDS } from '../../quires/board/useQueryFetchBoards'

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!, $password: String!) {
    deleteBoard(boardId: $boardId, password: $password)
  }
`

export const useMutationDeletaBoard = (
  boardId: IMutationDeleteBoardArgs['boardId'],
  password: string
) => {
  const { moveToPage } = useMoveToPage()
  const [deleteBoardMutation, { loading }] = useMutation<
    Pick<IMutation, 'deleteBoard'>,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD)
  const deleteBoard = async (): Promise<void> => {
    try {
      const result = await deleteBoardMutation({
        variables: {
          boardId,
          password,
        },
        update(cache) {
          cache.modify({
            fields: {
              fetchBoardsOfTheBest(existingBoards = [], { readField }) {
                return existingBoards.filter((board) => readField('_id', board) !== boardId)
              },
              fetchBoardsCount(existingCount = 0) {
                return existingCount - 1
              },
            },
          })
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
        // 리패치 제거
        // FETCH_BOARDS, FETCH_BOARDS_BEST
      })
      if (result?.data?.deleteBoard) {
        Modal.success({ content: '해당 게시글이 삭제되었습니다.' })
        moveToPage('/boards')()
      } else {
        Modal.warning({ content: '비밀번호를 확인해주세요!' })
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { deleteBoard, loading }
}
