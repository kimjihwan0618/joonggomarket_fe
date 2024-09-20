import { useState } from 'react'

export const useImageInput = (count: number) => {
  const [fileUrls, setFileUrls] = useState<string[]>(new Array(count).fill('').map(() => ''))
  const [files, setFiles] = useState<File[]>([])

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls: string[] = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
  }

  const onChangeFile = (file: File, index: number): void => {
    const newFiles: File[] = [...files]
    newFiles[index] = file
    setFiles(newFiles)
  }

  const onClickReset = (index: number): void => {
    const newFileUrls: string[] = [...fileUrls]
    const newFiles: File[] = [...files]
    newFileUrls[index] = ''
    newFiles[index] = null
    setFileUrls(newFileUrls)
    setFiles(newFiles)
  }

  return {
    fileUrls,
    setFileUrls,
    files,
    onChangeFile,
    onChangeFileUrls,
    onClickReset,
  }
}
