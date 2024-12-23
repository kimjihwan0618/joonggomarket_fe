import { render, screen } from '@testing-library/react'
import BoardListUI from 'src/components/units/board/list/BoardList.index'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client'
import { fetch } from 'cross-fetch'

it('더미데이터 화면 렌더링 테스트', async () => {
  const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://mock.com/graphql', fetch }),
    cache: new InMemoryCache(),
  })

  render(
    <ApolloProvider client={client}>
      <BoardListUI />
    </ApolloProvider>
  )
  expect(screen.getByText('게시글 1')).toBeDefined()
  expect(screen.getByText('게시글 2')).toBeDefined()
  expect(screen.getByText('작성자 1')).toBeDefined()
  expect(screen.getByText('작성자 2')).toBeDefined()
})
