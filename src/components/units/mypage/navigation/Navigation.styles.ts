import styled from '@emotion/styled'

export const Wrapper = styled.div`
  flex-shrink: 0;
  padding-right: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.colors.gray06};
`
export const PageTitle = styled.h2`
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 40px;
`
export const ProfileImageBox = styled.div`
  width: 96px;
  height: 96px;
  text-align: center;
`
export const InfoBox = styled.div``
export const Name = styled.h4`
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 14px;
  text-align: center;
`
export const PointText = styled.div`
  display: flex;
  align-items: center;
`
export const Point = styled.p`
  margin-left: 6px;
  font-weight: bold;
  font-size: 1.6rem;
`
export const SubMenuList = styled.ul`
  margin-top: 60px;
`
export const MenuItem = styled.li`
  margin-bottom: 24px;
  cursor: pointer;
  display: flex;
  &:last-of-type {
    margin-bottom: 0px;
  }
  font-weight: ${(props) => props['data-active'] && 'bold !important'};
`
export const Text = styled.p`
  margin-left: 8px;
  color: ${(props) => (props['data-active'] ? '#000' : props.theme.colors.gray03)};
  font-weight: ${(props) => (props['data-active'] ? 'bold' : '500')};
  font-size: 1.8rem;
  white-space: nowrap;
`
