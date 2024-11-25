import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchBoardArgs } from 'src/commons/types/generated/types'

export const FETCH_USER_LOGGEDIN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
      }
    }
  }
`

export const useQueryFetchUserLoggedIn = () => {
  const { data, loading } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGEDIN)
  return { data, loading }
}
