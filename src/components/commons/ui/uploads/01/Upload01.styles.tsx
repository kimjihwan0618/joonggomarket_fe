import styled from '@emotion/styled'

export const ImageBox = styled.div`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResetFileButton = styled.div`
  position: absolute;
  right: -13px;
  top: -13px;
  cursor: pointer;
`

export const ImageUploadButton = styled.button`
  width: 78px;
  height: 78px;
  background: ${({ theme }) => theme.colors.gray04};
  margin-right: 24px;
  border: none;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    color: ${({ theme }) => theme.colors.gray02};
    font-size: 2.4rem;
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray02};
    padding: 0px;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.gray05};
  }
`

export const UploadFileHidden = styled.input`
  display: none;
`
