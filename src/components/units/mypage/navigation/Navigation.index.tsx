import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import * as S from './Navigation.styles'
import Image from 'next/image'
import { useQueryFetchUserLoggedIn } from 'src/components/commons/hooks/quires/user/useQueryFetchUserLoggedIn'
import { ChangeEvent, useRef } from 'react'
import { useMutationUploadFile } from 'src/components/commons/hooks/mutations/file/useMutationUploadFile'
import { useMutationUpdateUser } from 'src/components/commons/hooks/mutations/user/useMutationUpdateUser'

const MAPAGE_SUB_PAGES = [
  { link: '/market', name: '내 장터', icon: '/ic_shopping_cart_02' },
  { link: '/point', name: '포인트 내역', icon: '/ic_savings_02' },
  { link: '/profile', name: '내 프로필', icon: '/ic_profile_02' },
]

interface IMypageNavigationUIProps {
  page: '/market' | '/point' | '/profile'
}

export default function MypageNavigation(props: IMypageNavigationUIProps): JSX.Element {
  const { moveToPage } = useMoveToPage()
  const fileRef = useRef<HTMLInputElement>(null)
  const { uploadFile, loading: uploadFileLoading } = useMutationUploadFile()
  const { data } = useQueryFetchUserLoggedIn()
  const { updateUser, loading: updateUserLoading } = useMutationUpdateUser()

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0]
    const result = await uploadFile({ file })
    result?.data?.uploadFile.url && updateUser({ picture: result?.data?.uploadFile.url })
  }

  return (
    <S.Wrapper>
      <S.UploadFileHidden type="file" ref={fileRef} onChange={onChangeFile} />
      <S.PageTitle>MYPAGE</S.PageTitle>
      <S.ProfileImageBox>
        <S.ImageBox>
          {uploadFileLoading || updateUserLoading ? (
            <Image unoptimized src="/loading.gif" width={120} height={120} />
          ) : data?.fetchUserLoggedIn?.picture ? (
            <Image
              unoptimized
              onClick={() => fileRef.current?.click()}
              src={`${process.env.NEXT_PUBLIC_S3_STORAGE}${data?.fetchUserLoggedIn?.picture}`}
              width={120}
              height={120}
            />
          ) : (
            <Image
              unoptimized
              onClick={() => fileRef.current?.click()}
              src="/images/ic_profile.png"
              width={120}
              height={120}
            />
          )}
        </S.ImageBox>
      </S.ProfileImageBox>
      <S.InfoBox>
        <S.Name>{data?.fetchUserLoggedIn.name}</S.Name>
        <S.PointText>
          <Image unoptimized src="/images/ic_savings_02_on.png" width={24} height={24} />
          <S.Point>
            {new Intl.NumberFormat('en-US').format(data?.fetchUserLoggedIn.userPoint?.amount)}원
          </S.Point>
        </S.PointText>
      </S.InfoBox>
      <S.SubMenuList>
        {MAPAGE_SUB_PAGES.map((menu) => (
          <S.MenuItem
            data-isactive={props.page === menu.link}
            onClick={moveToPage(`/mypage${menu.link}`)}
          >
            <S.ImageWrapper>
              <Image
                unoptimized
                src={
                  props.page === menu.link
                    ? `/images${menu.icon}_on.png`
                    : `/images${menu.icon}.png`
                }
                width={24}
                height={24}
              />
            </S.ImageWrapper>
            <S.Text data-active={props.page === menu.link}>{menu.name}</S.Text>
          </S.MenuItem>
        ))}
      </S.SubMenuList>
    </S.Wrapper>
  )
}
