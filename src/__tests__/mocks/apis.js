import { graphql } from 'graphql'

const gql = graphql.link('http://mock.com/graphql')

export const apis = [
  gql.query('fetchBoards', (req, res, ctx) => {
    return res(
      ctx.data({
        fetchBoards: [
          { _id: '1', title: '게시글 1', writer: '작성자 1', createdAt: new Date(), likeCount: 10 },
          { _id: '2', title: '게시글 2', writer: '작성자 2', createdAt: new Date(), likeCount: 5 },
        ],
      })
    )
  }),
]

export default apis
