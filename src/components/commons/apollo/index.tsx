import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { accessTokenState } from 'src/commons/stores'

const GLOBAL_STATE = new InMemoryCache()

interface IApolloSettingProps {
  children: JSX.Element
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const uploadLink = createUploadLink({
    uri: 'https://backendonline.codebootcamp.co.kr/graphql',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  })

  useEffect(() => {
    const result = localStorage.getItem('accessToken')
    setAccessToken(result ?? '')
  }, [])

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
