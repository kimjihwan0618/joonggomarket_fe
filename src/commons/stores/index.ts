import { atom } from 'recoil'

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: '',
})

export const vistedPageState = atom({
  key: 'vistedPageState',
  default: '',
})
