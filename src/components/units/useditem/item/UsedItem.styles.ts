import styled from '@emotion/styled'

export const UsedItem = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.gray04};
  padding: 20px 0;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.gray07};
  }
  height: 160px;
`

export const ItemImageBox2 = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
`

export const UsedItemInfo2 = styled.div`
  display: flex;
  width: calc(100% - 200px);
  align-items: center;
  margin-left: 40px;
  justify-content: space-between;
`

export const LeftInfo = styled.ul``

export const Title2 = styled.li`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 2.4rem;
  span {
    font-weight: 500;
    font-size: 2.4rem;
  }
`

export const Remarks2 = styled.li`
  margin-bottom: 8px;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray02};
`

export const Tags = styled.li`
  font-weight: 500;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.gray04};
  margin-bottom: 24px;
`

export const SellerPicked = styled.li`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.gray02};
  display: flex;
  align-items: center;
`

export const Seller = styled.p`
  display: flex;
  align-items: center;
  & > span {
    border-radius: 100px;
  }
`

export const Picked = styled.p`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

export const Price2 = styled.p`
  font-weight: bold;
  font-size: 2.4rem;
  text-align: right;
`

export const IsSold = styled.p`
  position: absolute;
  font-size: 1.4rem;
  font-weight: 500;
  position: absolute;
  right: 5px;
  top: 20px;
  color: ${(props) => props['data-sold'] && props.theme.colors.main};
`
