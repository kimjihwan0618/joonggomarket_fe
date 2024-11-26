import Head from 'next/head'
import BoardListUI from 'src/components/units/board/list/BoardList.index'

export default function BoardListPage() {
  return (
    <>
      <Head>
        <title>중고마켓 | 자유게시판</title>
        <meta name="description" content="유저인증없이 자유롭게 게시판을 사용해보세요." />
        <meta property="og:title" content="중고마켓 | 자유게시판" />
        <meta property="og:description" content="유저인증없이 자유롭게 게시판을 사용해보세요." />
      </Head>
      <BoardListUI />
    </>
  )
}
