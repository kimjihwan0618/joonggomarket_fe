import { Modal } from 'antd'

export const useTextCopy = () => {
  const onCopyLink = (): void => {
    const url = window.location.href
    if (navigator.clipboard) {
      // 추가된 코드
      navigator.clipboard
        .writeText(url)
        .then(() => {
          Modal.success({ content: 'URL이 클립보드에 복사되었습니다!' })
        })
        .catch((err) => {
          Modal.error({ content: '클립보드 복사에 실패했습니다.' })
        })
    } else {
      Modal.error({ content: 'URL 복사는 HTTPS 환경에서만 지원됩니다.' }) // 추가된 코드
    }
  }
  return {
    onCopyLink,
  }
}
