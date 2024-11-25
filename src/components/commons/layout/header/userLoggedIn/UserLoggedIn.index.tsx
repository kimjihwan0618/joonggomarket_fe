import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { accessTokenState } from 'src/commons/stores'
import ProfileUI from './Profile/Profile.index'
import ButtonsUI from './Buttons/Buttons.index'
import { useQueryFetchUserLoggedIn } from 'src/components/commons/hooks/quires/user/useQueryFetchUserLoggedIn'

interface IUserLoggedInProps {
  setPointModalisOpen: Dispatch<SetStateAction<boolean>>
}

export default function UserLoggedIn(props: IUserLoggedInProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [isHidden, setIsHidden] = useState(false)
  const profileButtonRef = useRef<HTMLButtonElement>(null)
  const { data, loading } = useQueryFetchUserLoggedIn()

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
      {!loading &&
        (accessToken ? (
          <ProfileUI
            profileButtonRef={profileButtonRef}
            isHidden={isHidden}
            setIsHidden={setIsHidden}
            setPointModalisOpen={props.setPointModalisOpen}
            data={data}
          />
        ) : (
          <ButtonsUI />
        ))}
    </>
  )
}
