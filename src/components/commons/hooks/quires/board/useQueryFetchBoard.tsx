import { gql, useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsArgs,
} from 'src/commons/types/generated/types'

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
      updatedAt
      boardAddress {
        _id
        zipcode
        address
        addressDetail
        createdAt
        updatedAt
      }
      user {
        _id
        email
        name
        picture
        createdAt
        updatedAt
      }
    }
  }
`

export const useQueryFetchBoard = (boardId: IQueryFetchBoardArgs['boardId']) => {
  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId },
    skip: !boardId,
  })

  return { data }
}
