import { useAuth } from 'src/components/commons/hooks/custom/useAuth'
import MypageLayoutUI from 'src/components/units/mypage/MypageLayout.index'
import MyProfileUI from 'src/components/units/mypage/profile/Profile.index'

export default function MyProfilePage(): JSX.Element {
  useAuth()
  return (
    <MypageLayoutUI page="/profile">
      <MyProfileUI />
    </MypageLayoutUI>
  )
}
