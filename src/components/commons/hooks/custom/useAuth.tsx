import { useEffect } from 'react'
import { useMoveToPage } from './useMoveToPage'

export const useAuth = (): void => {
  const { moveToPage } = useMoveToPage()
  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      moveToPage(`/login`)()
    }
  }, [])
}
