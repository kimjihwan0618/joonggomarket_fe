import theme from 'src/commons/styles/theme'

export default function FooterUI(): JSX.Element {
  return (
    <div
      style={{
        background: theme.colors.gray02,
        padding: '30px 0',
        textAlign: 'center',
        lineHeight: 1.62,
        fontSize: '1.4rem',
        color: theme.colors.gray07,
      }}
    >
      본 사이트는 상업적 목적이 아닌 개인 포트폴리오 목적으로 제작되었습니다.
    </div>
  )
}
