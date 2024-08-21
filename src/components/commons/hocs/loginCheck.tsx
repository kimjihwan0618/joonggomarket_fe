import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const loginCheck = (Component: any) => (props: any) => {
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      void router.replace(`/login?redirect=${router.asPath}`)
    }
  }, [])

  return <Component {...props} />
}
