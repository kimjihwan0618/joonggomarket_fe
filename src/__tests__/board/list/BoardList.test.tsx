import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import BoardListUI from 'src/components/units/board/list/BoardList.index'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client'
import { fetch } from 'cross-fetch'
import { ThemeProvider } from '@emotion/react'
import theme from 'src/commons/styles/theme'
import 'matchmedia-polyfill'
import 'matchmedia-polyfill/matchMedia.addListener'
// react slick test 코드 돌리기위한 lib

describe('Board List 페이지 패치테스트', () => {
  it('더미데이터 화면 렌더링 테스트', async () => {
    const client = new ApolloClient({
      link: new HttpLink({ uri: 'http://mock.com/graphql', fetch }),
      cache: new InMemoryCache(),
    })

    render(
      <RecoilRoot>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            {/* <Layout> */}
            <BoardListUI />
            {/* </Layout> */}
          </ThemeProvider>
        </ApolloProvider>
      </RecoilRoot>
    )

    // Wait for the elements to appear
    await screen.findByText('작성자 1')
    await screen.findByText('작성자 2')
  })
})
