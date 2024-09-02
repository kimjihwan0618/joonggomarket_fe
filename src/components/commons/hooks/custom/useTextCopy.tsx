import { Modal } from 'antd'

export const useTextCopy = () => {
  const onCopyLink = (): void => {
    const url = window.location.href
    navigator.clipboard
      .writeText(url)
      .then(() => {
        Modal.success({ content: 'URL이 클립보드에 복사되었습니다!' })
      })
      .catch((err) => {
        Modal.error({ content: '클립보드 복사에 실패했습니다.' })
      })
  }
  return {
    onCopyLink,
  }
}
