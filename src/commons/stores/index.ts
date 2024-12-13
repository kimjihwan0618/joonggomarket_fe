import { atom, selector } from 'recoil'
import { getAccessToken } from 'src/lib/getAccessToken'

export const menuState = atom({
  key: 'menuState',
  default: [
    { name: '자유게시판', path: '/boards' },
    { name: '중고마켓', path: '/markets' },
  ],
})

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: '',
})

export const vistedPageState = atom({
  key: 'vistedPageState',
  default: '',
})

export const restoreAccessTokenLoadable = selector({
  key: 'restoreAccessTokenLoadable',
  get: async () => {
    const newAccessToken = await getAccessToken()
    return newAccessToken
  },
})
