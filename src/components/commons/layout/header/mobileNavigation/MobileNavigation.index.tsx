import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useRef, useState } from 'react'
import * as S from '../Header.styles'
import { useRecoilState } from 'recoil'
import { accessTokenState } from 'src/commons/stores'
import { useQueryFetchUserLoggedIn } from 'src/components/commons/hooks/quires/user/useQueryFetchUserLoggedIn'
import Image from 'next/image'
import { menuState } from 'src/commons/stores'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import { useMutationLogout } from 'src/components/commons/hooks/mutations/user/useMutationLogout'
import ButtonsUI from '../userLoggedIn/Buttons/Buttons.index'
import Button02 from 'src/components/commons/buttons/02/Button02.index'
import theme from 'src/commons/styles/theme'

interface IUserLoggedInProps {
  setPointModalisOpen: Dispatch<SetStateAction<boolean>>
}

export default function MobileNavigation(props: IUserLoggedInProps): JSX.Element {
  const { logoutUser } = useMutationLogout()
  const [isOpen, setIsOpen] = useState(false)
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const { data, loading } = useQueryFetchUserLoggedIn()
  const [menus] = useRecoilState(menuState)
  const { moveToPage } = useMoveToPage()
  const [basePath, setBasePath] = useState('')

  return (
    <>
      <S.MMenuButton onClick={() => setIsOpen((prev) => !prev)} />
      <S.MMenuWrapper data-isOpen={isOpen}>
        <S.MMenuBar data-isOpen={isOpen}>
          <S.MMenuBarInner>
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
                    <S.MProfileInfo
                      onClick={() => {
                        moveToPage('/mypage/market')()
                        setIsOpen(false)
                      }}
                    >
                      <S.MProfileName>
                        <span>{data?.fetchUserLoggedIn.name}</span>
                        <S.MArrowRight />
                      </S.MProfileName>
                      <S.MProfileMail>{data?.fetchUserLoggedIn.email}</S.MProfileMail>
                    </S.MProfileInfo>
                  </S.MProfileBoxTop>
                  <S.MProfileBoxBottom>
                    <S.MProfilePointTitle>포인트</S.MProfilePointTitle>
                    <S.MProfilePointText>
                      <span>
                        {new Intl.NumberFormat('en-US').format(
                          data?.fetchUserLoggedIn.userPoint?.amount
                        )}
                      </span>
                      &nbsp;원
                    </S.MProfilePointText>
                  </S.MProfileBoxBottom>
                </S.MProfileBox>
              ) : (
                <S.MButtonWrapper>
                  <Button02 fullWidth onClick={moveToPage('/login')} name={'로그인'} />
                  <Button02
                    fullWidth
                    onClick={moveToPage('/signup')}
                    background={theme.colors.main}
                    name={'회원가입'}
                  />
                </S.MButtonWrapper>
              ))}
            <S.MMenuList>
              {menus.map((menu, idx) => (
                <S.MMenu
                  onClick={() => {
                    moveToPage(menu.path)()
                    setIsOpen(false)
                  }}
                  data-active={basePath === menu.path.replace('/', '')}
                >
                  <span>{menu.name}</span>
                  <S.MArrowRight />
                </S.MMenu>
              ))}
            </S.MMenuList>
          </S.MMenuBarInner>
          {accessToken && (
            <S.MLogoutButton onClick={logoutUser}>
              <S.MLogoutButtonText>로그아웃</S.MLogoutButtonText>
              <Image unoptimized src={`/images/ic_logout.png`} width={24} height={24} />
            </S.MLogoutButton>
          )}
        </S.MMenuBar>
      </S.MMenuWrapper>
    </>
  )
}
