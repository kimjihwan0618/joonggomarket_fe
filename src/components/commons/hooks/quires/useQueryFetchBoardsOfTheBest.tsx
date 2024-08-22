import { gql, useQuery } from '@apollo/client'
import { IQuery } from 'src/commons/types/generated/types'

const FETCH_BOARDS_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      images
      likeCount
      createdAt
      title
      writer
    }
  }
`

export const useQueryFetchBoardsOfTheBest = () => {
  const result = useQuery<Pick<IQuery, 'fetchBoardsOfTheBest'>>(FETCH_BOARDS_BEST)

  return result
}
