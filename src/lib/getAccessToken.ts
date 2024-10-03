import { GraphQLClient, gql } from 'graphql-request'
import { IMutation } from 'src/commons/types/generated/types'

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`

export const getAccessToken = async (): Promise<string | undefined> => {
  try {
    // const graphQLClient = new GraphQLClient('http://localhost:3456/graphql', {
    //   credentials: 'include',
    // })
    const graphQLClient = new GraphQLClient('https://backendonline.codebootcamp.co.kr/graphql', {
      credentials: 'include',
    })
    const result =
      await graphQLClient.request<Pick<IMutation, 'restoreAccessToken'>>(RESTORE_ACCESS_TOKEN)
    const newAccessToken = result.restoreAccessToken.accessToken
    return newAccessToken
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}
