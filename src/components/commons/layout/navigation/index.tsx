import { useRouter } from 'next/router'
import * as S from 'src/components/commons/layout/navigation/Navigation.styles'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navigation(): JSX.Element {
  const { pathname } = useRouter()
  const [basePath, setBasePath] = useState('')

  useEffect(() => {
    setBasePath(pathname.split('/')[1])
  }, [pathname])

  return (
    <S.Wrapper>
      <S.Navigation>
        <S.MenuList>
          <Link href={'/boards'}>
            <S.MenuButton data-active={basePath === 'boards'}>자유게시판</S.MenuButton>
          </Link>
          <Link href={'/boards22'}>
            <S.MenuButton data-active={basePath === 'boards22'}>중고마켓</S.MenuButton>
          </Link>
          <Link href={'/boards33'}>
            <S.MenuButton data-active={basePath === 'boards33'}>마이페이지</S.MenuButton>
          </Link>
        </S.MenuList>
      </S.Navigation>
    </S.Wrapper>
  )
}
