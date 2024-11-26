import { AppProps } from 'next/app'
import ApolloSetting from '../src/components/commons/apollo'
import { globalStyles } from 'src/commons/styles/global'
import { ThemeProvider } from '@emotion/react'
import { Global } from '@emotion/react'
import theme from 'src/commons/styles/theme'
import Layout from 'src/components/commons/layout/Layout.index'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'

function MyApp({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>중고마켓</title>
        <meta name="description" content="중고거래를 위한 플랫폼 중고마켓입니다." />
        <meta property="og:image" content="/images/logo_dark.png"></meta>
        <meta property="og:title" content="중고마켓"></meta>
        <meta property="og:description" content="중고거래를 위한 플랫폼 중고마켓입니다."></meta>
        <meta property="site_name" content="중고마켓"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <ApolloSetting>
          <ThemeProvider theme={theme}>
            <Global styles={globalStyles} />
            <Layout>
              <Component />
            </Layout>
          </ThemeProvider>
        </ApolloSetting>
      </RecoilRoot>
    </>
  )
}

export default MyApp
