import Header from 'src/components/commons/layout/header'
import Banner from 'src/components/commons/layout/carousel'
import Navigation from 'src/components/commons/layout/navigation'

interface ILayoutProps {
  children: JSX.Element
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <Banner />
      <Navigation />
      <main> {props.children}</main>
    </>
  )
}
