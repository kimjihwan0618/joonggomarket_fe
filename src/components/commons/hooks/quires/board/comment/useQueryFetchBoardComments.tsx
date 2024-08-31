import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchBoardCommentsArgs } from 'src/commons/types/generated/types'

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`

export const useQueryFetchBoardComments = (boardId: IQueryFetchBoardCommentsArgs['boardId']) => {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchBoardComments'>,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId },
    skip: !boardId,
  })
  return { data, fetchMore }
}
