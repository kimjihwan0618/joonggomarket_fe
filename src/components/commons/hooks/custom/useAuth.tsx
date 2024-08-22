import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useAuth = (): void => {
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      void router.replace(`/login?redirect=${router.asPath}`)
    }
  }, [])
}
