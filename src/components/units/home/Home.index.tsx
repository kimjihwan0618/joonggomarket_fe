import { useEffect } from 'react'
import * as S from './Home.styles'
import { useRouter } from 'next/router'

export default function HomeUI(): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    router.push('/boards')
  }, [router])

  return <S.Wrapper>중고마켓 사이트에 오신걸 환영합니다!</S.Wrapper>
}
