import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useRef, useState } from 'react'
import * as S from '../Header.styles'
import { useRecoilState } from 'recoil'
import { accessTokenState } from 'src/commons/stores'
import { useQueryFetchUserLoggedIn } from 'src/components/commons/hooks/quires/user/useQueryFetchUserLoggedIn'
import Image from 'next/image'
// import ProfileUI from './Profile/Profile.index'
// import ButtonsUI from './Buttons/Buttons.index'

interface IUserLoggedInProps {
  setPointModalisOpen: Dispatch<SetStateAction<boolean>>
}

export default function MobileNavigation(props: IUserLoggedInProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const { data, loading } = useQueryFetchUserLoggedIn()
  // const profileButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {}, [])

  return (
    <>
      <S.MMenuButton onClick={() => setIsOpen((prev) => !prev)} />
      <S.MMenuWrapper data-isOpen={isOpen}>
        <S.MMenuBar data-isOpen={isOpen}>
          <S.MCloseButton onClick={() => setIsOpen((prev) => !prev)} />
          {!loading &&
            (accessToken ? (
              <S.MProfileBox>
                <S.MProfileBoxTop>
                  {data?.fetchUserLoggedIn?.picture ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_S3_STORAGE}${data?.fetchUserLoggedIn?.picture}`}
                      width={56}
                      height={56}
                      alt="프로필 이미지"
                    />
                  ) : (
                    <Image
                      unoptimized
                      src={`/images/ic_profile2.png`}
                      width={56}
                      height={56}
                      alt="프로필 이미지"
                    />
                  )}
                  <S.MProfileInfo>
                    <S.MProfileName>
                      <span>{data?.fetchUserLoggedIn.name}</span>
                      <S.MArrowRight />
                    </S.MProfileName>
                    <S.MProfileMail>{data?.fetchUserLoggedIn.email}</S.MProfileMail>
                  </S.MProfileInfo>
                </S.MProfileBoxTop>
                <S.MProfileBoxBottom></S.MProfileBoxBottom>
              </S.MProfileBox>
            ) : (
              // 로그인 회원가입 버튼 Wrapper 공간
              <></>
            ))}
        </S.MMenuBar>
      </S.MMenuWrapper>
    </>
  )
}
