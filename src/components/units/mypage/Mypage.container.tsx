import { useAuth } from 'src/components/commons/hooks/custom/useAuth'
import MypageUI from './Mypage.presenter'

export default function Mypage(): JSX.Element {
  useAuth()
  return <MypageUI />
}
