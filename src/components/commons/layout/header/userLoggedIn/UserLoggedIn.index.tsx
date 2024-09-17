import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { accessTokenState } from 'src/commons/stores'
import ProfileUI from './Profile/Profile.index'
import ButtonsUI from './Buttons/Buttons.index'

export default function UserLoggedIn(): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [isHidden, setIsHidden] = useState(false)

  const profileButtonRef = useRef<HTMLButtonElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (profileButtonRef.current && !profileButtonRef.current.contains(event.target as Node)) {
      setIsHidden(false)
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsHidden(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      {accessToken ? (
        <ProfileUI
          profileButtonRef={profileButtonRef}
          isHidden={isHidden}
          setIsHidden={setIsHidden}
        />
      ) : (
        <ButtonsUI />
      )}
    </>
  )
}
