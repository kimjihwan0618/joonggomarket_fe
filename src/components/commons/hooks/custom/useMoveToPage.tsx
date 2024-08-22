import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { vistedPageState } from 'src/commons/stores'

interface IUseMoveToPageReturn {
  moveToPage: (path: string) => () => void
  vistedPage: string
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter()
  const [vistedPage, setVisitedPage] = useRecoilState(vistedPageState)

  const moveToPage = (path: string) => () => {
    if (path !== '/login' && path !== 'sign-up') setVisitedPage(path)
    // localStorage.setItem("vistedPage", path) 로컬스토리지도 가능
    void router.push(path)
  }

  return {
    vistedPage,
    moveToPage,
  }
}
