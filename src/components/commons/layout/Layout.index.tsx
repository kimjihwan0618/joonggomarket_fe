import Header from 'src/components/commons/layout/header/Header.index'
import Banner from 'src/components/commons/layout/carousel/Carousel.index'
import { useRouter } from 'next/router'
import FooterUI from './footer/FooterUI'

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
      {!HIDDEN_LAYOUTS.includes(router.pathname) ? (
        <main> {props.children}</main>
      ) : (
        <>{props.children}</>
      )}
      {!HIDDEN_LAYOUTS.includes(router.pathname) && <FooterUI />}
    </>
  )
}
