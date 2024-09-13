import * as S from 'src/components/commons/layout/header/Header.styles'
import Image from 'next/image'
import Link from 'next/link'
import { accessTokenState } from 'src/commons/stores'
import { useRecoilState } from 'recoil'
import { useEffect, useRef, useState } from 'react'
import { Modal } from 'antd'
import { useMoveToPage } from '../../hooks/custom/useMoveToPage'
import Button02 from '../../buttons/02/Button02.index'
import theme from 'src/commons/styles/theme'
import { useQueryFetchUserLoggedIn } from '../../hooks/quires/user/useQueryFetchUserLoggedIn'
import { useMutationLogoutUser } from '../../hooks/mutations/user/useMutationLogout'
import { useRouter } from 'next/router'
import { useAuth } from '../../hooks/custom/useAuth'

const menus = [
  { name: '자유게시판', path: '/boards' },
  { name: '중고마켓', path: '/markets' },
]

export default function Header(): JSX.Element {
  const router = useRouter()
  const { data } = useQueryFetchUserLoggedIn()
  const { logoutUser } = useMutationLogoutUser()
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [isHidden, setIsHidden] = useState(false)
  const { pathname } = useRouter()
  const [basePath, setBasePath] = useState('')
  const { moveToPage } = useMoveToPage()
  const profileButtonRef = useRef<HTMLButtonElement>(null)

  const onClickLogout = async (): Promise<void> => {
    try {
      const result = await logoutUser()
      if (result?.data?.logoutUser) {
        router.reload()
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  const onClickProfileButton = () => {
    setIsHidden((prev) => !prev)
  }
  const handleClickOutside = (event: MouseEvent) => {
    if (profileButtonRef.current && !profileButtonRef.current.contains(event.target as Node)) {
      setIsHidden(false)
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsHidden(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    setBasePath(pathname.split('/')[1])
  }, [pathname])

  return (
    <S.Header>
      <S.HeaderInner>
        <S.LogoNavigationWrapper>
          <Link href="/boards">
            <S.Logo>
              <Image src="/images/logo_dark.png" alt="joongomarket 로고" width={160} height={24} />
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
        {accessToken ? (
          <S.ProfileBoxWrapper>
            <S.ProfileButton ref={profileButtonRef} onClick={onClickProfileButton}>
              {data?.fetchUserLoggedIn?.picture ? (
                <Image
                  src={`https://storage.googleapis.com/${data?.fetchUserLoggedIn?.picture}`}
                  width={48}
                  height={48}
                  alt="프로필 이미지"
                />
              ) : (
                <Image src="/images/ic_profile2.png" width={48} height={48} alt="프로필 이미지" />
              )}
              <Image src="/images/ic_more.png" alt="아래방향 화살표" width={24} height={24} />
            </S.ProfileButton>
            <S.ProfileBox data-hidden={isHidden}>
              <S.ProfileInfo onClick={moveToPage('/mypage/market')}>
                <S.ImgSettingButton>
                  {data?.fetchUserLoggedIn?.picture ? (
                    <Image
                      src={`https://storage.googleapis.com/${data?.fetchUserLoggedIn?.picture}`}
                      width={40}
                      height={40}
                      alt="프로필 이미지"
                    />
                  ) : (
                    <Image
                      src="/images/ic_profile2.png"
                      width={40}
                      height={40}
                      alt="프로필 이미지"
                    />
                  )}
                </S.ImgSettingButton>
                <S.TextWrapper>
                  <S.Name>{data?.fetchUserLoggedIn.name}</S.Name>
                  <S.Point>{data?.fetchUserLoggedIn.userPoint?.amount}P</S.Point>
                </S.TextWrapper>
              </S.ProfileInfo>
              <S.ProfileButtonWrapper>
                <S.AddPointButton>
                  <Image src="/images/ic_savings.png" width={24} height={24} /> 충전하기
                </S.AddPointButton>
                <S.LogoutButton onClick={onClickLogout}>
                  <Image src="/images/ic_logout.png" width={24} height={24} />
                  로그아웃
                </S.LogoutButton>
              </S.ProfileButtonWrapper>
            </S.ProfileBox>
          </S.ProfileBoxWrapper>
        ) : (
          <S.ButtonWrapper>
            <Button02 onClick={moveToPage('/login')} name={'로그인'} />
            <Button02
              onClick={moveToPage('/signup')}
              background={theme.colors.main}
              name={'회원가입'}
            />
          </S.ButtonWrapper>
        )}
      </S.HeaderInner>
    </S.Header>
  )
}
