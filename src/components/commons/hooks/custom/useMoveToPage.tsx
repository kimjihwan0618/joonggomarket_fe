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
    if (path !== '/login' && path !== '/signup') {
      setVisitedPage(path)
    }
    void router.push(path)
  }

  return {
    vistedPage,
    moveToPage,
  }
}
