import { loginCheck } from 'src/components/commons/hocs/loginCheck'
import MypageUI from './Mypage.presenter'

function Mypage(): JSX.Element {
  return <MypageUI />
}

export default loginCheck(Mypage)
