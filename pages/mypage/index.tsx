import MypageWrapperUI from 'src/components/units/mypage/Mypage.index'
import MypageNavigation from 'src/components/units/mypage/navigation/Navagation.index'
import { Outlet } from 'react-router-dom'

export default function Mypage(): JSX.Element {
  return (
    <MypageWrapperUI>
      <MypageNavigation />
      <Outlet />
    </MypageWrapperUI>
  )
}
