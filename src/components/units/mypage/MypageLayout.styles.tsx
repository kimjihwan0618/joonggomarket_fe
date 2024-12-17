import styled from '@emotion/styled'
import theme from 'src/commons/styles/theme'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${theme.media.screen3} {
    flex-direction: column;
  }
`
export const MypageContentWrapper = styled.div`
  padding-left: 40px;
  width: 100%;
  ${theme.media.screen3} {
    padding-left: 0px;
  }
`
