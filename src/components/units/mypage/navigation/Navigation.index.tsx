import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import * as S from './Navigation.styles'
import Image from 'next/image'

const MAPAGE_SUB_PAGES = [
  { link: '/market', name: '내 장터', icon: '/ic_shopping_cart_02' },
  { link: '/point', name: '내 포인트', icon: '/ic_savings_02' },
  { link: '/profile', name: '내 프로필', icon: '/ic_profile_02' },
]

interface IMypageNavigationUIProps {
  page: '/market' | '/point' | 'profile'
}

export default function MypageNavigation(props: IMypageNavigationUIProps): JSX.Element {
  const { moveToPage } = useMoveToPage()

  return (
    <S.Wrapper>
      <S.PageTitle>MYPAGE</S.PageTitle>
      <S.ProfileImageBox>
        <Image src="/images/ic_profile.png" width={80} height={80} />
      </S.ProfileImageBox>
      <S.InfoBox>
        <S.Name>노원두</S.Name>
        <S.PointText>
          <Image src="/images/ic_savings_02_on.png" width={24} height={24} />
          <S.Point>100,000</S.Point>
        </S.PointText>
      </S.InfoBox>
      <S.SubMenuList>
        {MAPAGE_SUB_PAGES.map((menu) => (
          <S.MenuItem onClick={moveToPage(`/mypage${menu.link}`)}>
            <Image
              src={
                props.page === menu.link ? `/images${menu.icon}_on.png` : `/images${menu.icon}.png`
              }
              width={24}
              height={24}
            />
            <S.Text data-active={props.page === menu.link}>{menu.name}</S.Text>
          </S.MenuItem>
        ))}
      </S.SubMenuList>
    </S.Wrapper>
  )
}
