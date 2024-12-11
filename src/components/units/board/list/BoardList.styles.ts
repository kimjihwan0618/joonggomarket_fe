import styled from '@emotion/styled'

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

export const BestBoardsSectionTitle = styled.h3`
  font-size: 3.6rem;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
`

export const BestBoardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`
export const BestBoardItem = styled.div`
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.15);
  border-radius: 14px;
  height: auto;
  padding: 10px;
  width: 25%;
  margin-right: 24px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.05s ease-in-out;
  &:last-of-type {
    margin-right: 0px;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.2);
  }
`

export const ItemImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  /* box-sizing: border-box; */
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray06};
`

export const BoardInfo = styled.dl`
  padding: 20px 20px 6px 20px;
`

export const Title = styled.dt`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Detail = styled.dd`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Writer = styled.li`
  font-size: 1.6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const CreatedAt = styled.li`
  color: ${({ theme }) => theme.colors.gray03};
  font-size: 1.2rem;
  margin-top: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ThumbBox = styled.div``
export const ThumbCount = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
`
