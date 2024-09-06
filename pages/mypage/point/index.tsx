import MypageLayoutUI from 'src/components/units/mypage/MypageLayout.index'
import MyPointUI from 'src/components/units/mypage/point/Point.index'

export default function MyPointPage(): JSX.Element {
  return (
    <MypageLayoutUI page="/point">
      <MyPointUI />
    </MypageLayoutUI>
  )
}
