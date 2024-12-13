import * as S from 'src/components/commons/layout/header/Header.styles'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useMoveToPage } from '../../hooks/custom/useMoveToPage'
import { useRouter } from 'next/router'
import UserLoggedIn from './userLoggedIn/UserLoggedIn.index'
import PointModalUI from './userLoggedIn/PointModal/PointModal.index'
import MobileNavigation from './mobileNavigation/MobileNavigation.index'
import { useRecoilState } from 'recoil'
import { menuState } from 'src/commons/stores'

export default function Header(): JSX.Element {
  const [menus] = useRecoilState(menuState)
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
            <Link href="/">
              <S.Logo>
                <Image
                  unoptimized
                  src={`/images/logo_dark.png`}
                  alt="joongomarket 로고"
                  width={155}
                  height={13}
                />
              </S.Logo>
            </Link>
            {/* 태블릿 & PC뷰 */}
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
          {/* // 태블릿 & PC뷰 */}
          {/* 모바일 네비게이션 */}
          <MobileNavigation setPointModalisOpen={setPointModalisOpen} />
          {/* // 모바일 네비게이션 */}
        </S.HeaderInner>
      </S.Header>
    </>
  )
}
