import { FC } from 'react'
import Button01 from 'src/components/commons/buttons/01/Button01.index'
import { useMoveToPage } from 'src/components/commons/hooks/custom/useMoveToPage'
import theme from 'src/commons/styles/theme'

const Custom404: FC = () => {
  const { moveToPage } = useMoveToPage()

  return (
    <div
      style={{
        textAlign: 'center',
        margin: '50px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: '2.6rem', color: theme.colors.gray02 }}>
        찾으시는 페이지가 없습니다.
      </h1>
      <div style={{ margin: '30px 0', lineHeight: '24px' }}>
        <p style={{ fontSize: '1.6rem', color: theme.colors.gray03 }}>
          요청하신 페이지를 찾을 수 없습니다.
          <br />
          입력하신 경로가 정확한지 다시 한번 확인해 주시기 바랍니다.
        </p>
      </div>
      <Button01
        background={theme.colors.main}
        onClick={moveToPage(`/`)}
        name={'홈으로'}
        width="04"
      />
    </div>
  )
}

export default Custom404
