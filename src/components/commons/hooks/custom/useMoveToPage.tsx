import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { vistedPageState } from 'src/commons/stores'

const SKIP_PAGE_HISTORY = ['/login', '/signup']

interface IUseMoveToPageReturn {
  moveToPage: (path: string) => () => void
  moveToBack: (path: string) => () => void
  vistedPage: string
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter()
  const [vistedPage, setVisitedPage] = useRecoilState(vistedPageState)

  const moveToPage = (path: string) => () => {
    if (!SKIP_PAGE_HISTORY.includes(path)) {
      setVisitedPage(path)
    }
    void router.push(path)
  }

  const moveToBack = (path: string) => () => {
    if (!vistedPage) {
      setVisitedPage(path)
      void router.push(path)
    } else {
      window.history.go(-1)
    }
  }

  return {
    vistedPage,
    moveToPage,
    moveToBack,
  }
}
