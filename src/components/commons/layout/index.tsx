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
      {!HIDDEN_LAYOUTS.includes(router.pathname) && <Header />}
      {!HIDDEN_LAYOUTS.includes(router.pathname) && <Banner />}
      {!HIDDEN_LAYOUTS.includes(router.pathname) && <Navigation />}
      {!HIDDEN_LAYOUTS.includes(router.pathname) ? (
        <main> {props.children}</main>
      ) : (
        <>{props.children}</>
      )}
    </>
  )
}
