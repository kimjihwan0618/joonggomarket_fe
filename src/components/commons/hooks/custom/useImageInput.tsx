import { useState } from 'react'

export const useImageInput = (count: number) => {
  const [fileUrls, setFileUrls] = useState<string[]>(new Array(count).fill('').map(() => ''))

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls: string[] = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
  }

  const onClickReset = (index: number): void => {
    const newFileUrls: string[] = [...fileUrls]
    newFileUrls[index] = ''
    setFileUrls(newFileUrls)
  }

  return {
    fileUrls,
    onChangeFileUrls,
    onClickReset,
    setFileUrls,
  }
}
