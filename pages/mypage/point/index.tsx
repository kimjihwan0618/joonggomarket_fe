import { useAuth } from 'src/components/commons/hooks/custom/useAuth'
import MypageLayoutUI from 'src/components/units/mypage/MypageLayout.index'
import MyPointUI from 'src/components/units/mypage/point/Point.index'

export default function MyPointPage(): JSX.Element {
  useAuth()
  return (
    <MypageLayoutUI page="/point">
      <MyPointUI />
    </MypageLayoutUI>
  )
}
