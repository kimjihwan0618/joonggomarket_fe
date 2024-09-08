import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
`

export const PageTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 40px;
`

export const Form = styled.ul``
export const FormItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Label = styled.label`
  margin-right: 100px;
  font-weight: bold;
  font-size: 1.6rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.gray02};
`

export const Bottom = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`
