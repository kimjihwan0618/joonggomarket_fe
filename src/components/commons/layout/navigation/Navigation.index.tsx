import { useRouter } from 'next/router'
import * as S from 'src/components/commons/layout/navigation/Navigation.styles'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useMoveToPage } from '../../hooks/custom/useMoveToPage'

const menus = [
  { name: '자유게시판', path: '/boards' },
  { name: '중고마켓', path: '/markets' },
  { name: '마이페이지', path: '/mypage' },
]

export default function Navigation(): JSX.Element {
  const { pathname } = useRouter()
  const [basePath, setBasePath] = useState('')
  const { moveToPage } = useMoveToPage()

  useEffect(() => {
    setBasePath(pathname.split('/')[1])
  }, [pathname])

  return (
    <S.Wrapper>
      <S.Navigation>
        <S.MenuList>
          {menus.map((menu, idx) => (
            <S.MenuButton
              onClick={moveToPage(menu.path)}
              data-active={basePath === menu.path.replace('/', '')}
            >
              {menu.name}
            </S.MenuButton>
          ))}
        </S.MenuList>
      </S.Navigation>
    </S.Wrapper>
  )
}
