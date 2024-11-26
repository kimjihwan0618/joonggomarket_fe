import Head from 'next/head'
import Signup from 'src/components/units/auth/signup/Signup.index'

export default function SingupPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>중고마켓 | 회원가입</title>
        <meta name="description" content="중고마켓 회원가입 페이지입니다." />
        <meta property="og:title" content="중고마켓 | 회원가입" />
        <meta property="og:description" content="중고마켓 회원가입 페이지입니다." />
      </Head>
      <Signup />
    </>
  )
}
