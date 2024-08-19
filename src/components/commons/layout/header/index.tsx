import * as S from 'src/components/commons/layout/header/Header.styles'
import Image from 'next/image'
import Link from 'next/link'
import { accessTokenState } from 'src/commons/stores'
import { useRecoilState } from 'recoil'
import { useEffect, useRef, useState } from 'react'

export default function Header(): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [isHidden, setIsHidden] = useState(false)
  const profileButtonRef = useRef<HTMLButtonElement>(null)

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

  return (
    <S.Header>
      <S.HeaderInner>
        <Link href="/boards">
          <S.Logo>
            <Image src="/images/logo_dark.png" alt="joongomarket 로고" width={210} height={32} />
          </S.Logo>
        </Link>
        {accessToken ? (
          <S.ProfileBoxWrapper>
            <S.ProfileButton ref={profileButtonRef} onClick={onClickProfileButton}>
              <Image src="/images/ic_profile2.png" alt="프로필 이미지" width={48} height={48} />
              <Image src="/images/ic_more.png" alt="아래방향 화살표" width={24} height={24} />
            </S.ProfileButton>
            <S.ProfileBox data-hidden={isHidden}>
              <S.ProfileInfo>
                <S.ImgSettingButton>
                  <Image src="/images/ic_profile2.png" alt="프로필 이미지" width={48} height={48} />
                </S.ImgSettingButton>
                <S.TextWrapper>
                  <S.Name>노원두</S.Name>
                  <S.Point>100,000 P</S.Point>
                </S.TextWrapper>
              </S.ProfileInfo>
              <S.ProfileButtonWrapper>
                <S.AddPointButton>
                  <Image src="/images/ic_savings.png" width={24} height={24} /> 충전하기
                </S.AddPointButton>
                <S.LogoutButton>
                  <Image src="/images/ic_logout.png" width={24} height={24} />
                  로그아웃
                </S.LogoutButton>
              </S.ProfileButtonWrapper>
            </S.ProfileBox>
          </S.ProfileBoxWrapper>
        ) : (
          <S.ButtonWrapper>
            <Link href="/login">
              <S.LodginButton>로그인</S.LodginButton>
            </Link>
            <Link href="/signup">
              <S.JoinButton>회원가입</S.JoinButton>
            </Link>
          </S.ButtonWrapper>
        )}
      </S.HeaderInner>
    </S.Header>
  )
}
