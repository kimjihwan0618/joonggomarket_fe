import * as S from 'src/components/commons/layout/header/Header.styles'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useMoveToPage } from '../../hooks/custom/useMoveToPage'
import { useRouter } from 'next/router'
import UserLoggedIn from './userLoggedIn/UserLoggedIn.index'
import PointModalUI from './userLoggedIn/PointModal/PointModal.index'

const menus = [
  { name: '자유게시판', path: '/boards' },
  { name: '중고마켓', path: '/markets' },
]

export default function Header(): JSX.Element {
  const { pathname } = useRouter()
  const [pointModalisOpen, setPointModalisOpen] = useState(false)
  const [basePath, setBasePath] = useState('')
  const { moveToPage } = useMoveToPage()

  useEffect(() => {
    setBasePath(pathname.split('/')[1])
  }, [pathname])

  return (
    <>
      <PointModalUI isOpen={pointModalisOpen} setIsOpen={setPointModalisOpen} />
      <S.Header>
        <S.HeaderInner>
          <S.LogoNavigationWrapper>
            <Link href="/boards">
              <S.Logo>
                <Image
                  src="/images/logo_dark.png"
                  alt="joongomarket 로고"
                  width={160}
                  height={24}
                />
              </S.Logo>
            </Link>
            <S.Navigation>
              <S.MenuList>
                {menus.map((menu, idx) => (
                  <S.Menu
                    onClick={moveToPage(menu.path)}
                    data-active={basePath === menu.path.replace('/', '')}
                  >
                    {menu.name}
                  </S.Menu>
                ))}
              </S.MenuList>
            </S.Navigation>
          </S.LogoNavigationWrapper>
          <UserLoggedIn setPointModalisOpen={setPointModalisOpen} />
        </S.HeaderInner>
      </S.Header>
    </>
  )
}
