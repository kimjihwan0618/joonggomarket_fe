import { AppProps } from 'next/app'
import ApolloSetting from '../src/components/commons/apollo'
import { globalStyles } from 'src/commons/styles/global'
import { ThemeProvider } from '@emotion/react'
import { Global } from '@emotion/react'
import theme from 'src/commons/styles/theme'
import Layout from 'src/components/commons/layout'
import { RecoilRoot } from 'recoil'

function MyApp({ Component }: AppProps) {
  return (
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
  )
}

export default MyApp
