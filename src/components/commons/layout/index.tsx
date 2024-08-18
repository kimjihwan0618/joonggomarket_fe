import Header from 'src/components/commons/layout/header'
import Banner from 'src/components/commons/layout/carousel'
import Navigation from 'src/components/commons/layout/navigation'
import { useRouter } from 'next/router'

interface ILayoutProps {
  children: JSX.Element
}

const HIDDEN_LAYOUTS = ['/login', '/signup']

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter()
  return (
    <>
      {!HIDDEN_LAYOUTS.includes(router.asPath) && <Header />}
      {!HIDDEN_LAYOUTS.includes(router.asPath) && <Banner />}
      {!HIDDEN_LAYOUTS.includes(router.asPath) && <Navigation />}
      {!HIDDEN_LAYOUTS.includes(router.asPath) ? (
        <main> {props.children}</main>
      ) : (
        <>{props.children}</>
      )}
    </>
  )
}
