import Head from 'next/head'
import Login from 'src/components/units/auth/login/Login.index'

export default function LoginPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>중고마켓 | 로그인</title>
        <meta name="description" content="중고마켓 로그인 페이지입니다." />
        <meta property="og:title" content="중고마켓 | 로그인" />
        <meta property="og:description" content="중고마켓 로그인 페이지입니다." />
      </Head>
      <Login />
    </>
  )
}
