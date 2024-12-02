import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { UseFormGetValues } from 'react-hook-form'
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IQueryFetchBoardCommentsArgs,
} from 'src/commons/types/generated/types'
// import { FETCH_BOARD_COMMENTS } from 'src/components/commons/hooks/quires/board/comment/useQueryFetchBoardComments'
import { IBoardCommentWriterForm } from 'src/components/units/board/detail/comment/write/BoardCommentWrite.schema'

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment($boardId: ID!, $createBoardCommentInput: CreateBoardCommentInput!) {
    createBoardComment(boardId: $boardId, createBoardCommentInput: $createBoardCommentInput) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`
export const useMutationCreateBoardComment = (boardId: IQueryFetchBoardCommentsArgs['boardId']) => {
  const [createBoardCommentMutation] = useMutation<
    Pick<IMutation, 'createBoardComment'>,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT)

  const createBoardComment = async (
    getValues: UseFormGetValues<IBoardCommentWriterForm>
  ): Promise<void> => {
    try {
      const { writer, password, contents, rating } = getValues()
      const result = await createBoardCommentMutation({
        variables: {
          boardId,
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
        },
        update(cache, { data }) {
          const newBoardRef = cache.writeFragment({
            data: {
              __typename: 'BoardComment',
              ...data?.createBoardComment,
            },
            fragment: gql`
              fragment NewBoardComment on BoardComment {
                _id
                writer
                contents
                rating
                updatedAt
              }
            `,
          })

          cache.modify({
            fields: {
              fetchBoardComments(existingBoardComments = []) {
                return [...existingBoardComments, newBoardRef]
              },
            },
          })
        },
        // 리패치 제거
        // FETCH_BOARD_COMMENTS
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return { createBoardComment }
}
