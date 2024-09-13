import { atom, selector } from 'recoil'
import { getAccessToken } from 'src/lib/getAccessToken'

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
