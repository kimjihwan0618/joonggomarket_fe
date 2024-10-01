import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from '@apollo/client'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { accessTokenState, restoreAccessTokenLoadable } from 'src/commons/stores'
import { onError } from '@apollo/client/link/error'
import { getAccessToken } from 'src/lib/getAccessToken'

const GLOBAL_STATE = new InMemoryCache()

interface IApolloSettingProps {
  children: JSX.Element
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const refreshToken = useRecoilValueLoadable(restoreAccessTokenLoadable)
  const uploadLink = createUploadLink({
    uri: 'http://backend-practice.codebootcamp.co.kr/graphql',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  useEffect(() => {
    void refreshToken.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? '')
    })
  }, [])

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== 'undefined') {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err?.extensions?.code === 'UNAUTHENTICATED') {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? '')
              // 3. 재발급 받은 accessToken으로 방급 실패한 쿼리 재요청하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization : Bearer asdasc.. => 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새걸로 바꿔치기
                },
              })
            })
          ).flatMap(() => forward(operation)) // 3-3. 방금 수정한 쿼리 재요청하기
        }
      }
    }
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: GLOBAL_STATE,
  })

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
