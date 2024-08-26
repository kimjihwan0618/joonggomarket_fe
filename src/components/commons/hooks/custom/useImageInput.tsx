import { useState } from 'react'

export const useImageInput = () => {
  const [fileUrls, setFileUrls] = useState(['', '', ''])

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
  }

  const onClickReset = (index: number): void => {
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = ''
    setFileUrls(newFileUrls)
  }

  return {
    fileUrls,
    onChangeFileUrls,
    onClickReset,
  }
}
