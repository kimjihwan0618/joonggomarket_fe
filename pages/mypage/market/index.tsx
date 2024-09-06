import MyMarketUI from 'src/components/units/mypage/market/Market.index'
import MypageLayoutUI from 'src/components/units/mypage/MypageLayout.index'

export default function MyMarketPage(): JSX.Element {
  return (
    <MypageLayoutUI page="/market">
      <MyMarketUI />
    </MypageLayoutUI>
  )
}
