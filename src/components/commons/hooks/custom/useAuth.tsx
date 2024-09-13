import { useEffect } from 'react'
import { useMoveToPage } from './useMoveToPage'
import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { accessTokenState, restoreAccessTokenLoadable } from 'src/commons/stores'
import { Modal } from 'antd'

export const useAuth = (): void => {
  const { moveToPage } = useMoveToPage()
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const refreshToken = useRecoilValueLoadable(restoreAccessTokenLoadable)
  useEffect(() => {
    void refreshToken.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined && !accessToken) {
        Modal.warning({ content: '로그인후 이용 가능합니다!' })
        moveToPage(`/login`)()
      }
    })
  }, [])
}
