import MypageLayoutUI from 'src/components/units/mypage/MypageLayout.index'
import MyProfileUI from 'src/components/units/mypage/profile/Profile.index'

export default function MyProfilePage(): JSX.Element {
  return (
    <MypageLayoutUI page="/profile">
      <MyProfileUI />
    </MypageLayoutUI>
  )
}
