import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  padding: 80px 101px;
  width: 62.5%;
  margin: 101px auto;
  min-width: 920px;
  min-height: 700px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const BoardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(189, 189, 189, 1);
`;

export const WriterInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.dl`
  margin-left: 12px;
  dt {
    font-size: 24px;
    font-weight: 500;
  }
  dd {
    font-size: 16px;
    margin-left: 0px;
    color: rgba(130, 130, 130, 1);
  }
`;

export const ContentsWrapper = styled.div`
  margin-top: 80px;
`;

export const ContentsTitle = styled.h3`
  font-weight: 700;
  font-size: 36px;
`;

export const ContentsMain = styled.div`
  margin-top: 40px;
  p {
    font-size: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 87px auto 0;
  button:nth-of-type(2) {
    margin: 0 24px;
  }
`;
export const BoardActionButton = styled.button`
  padding: 14px 16px;
  box-sizing: border-box;
  color: white;
  white-space: nowrap;
  height: 52px;
  width: 179px;
  background: #ffffff;
  border: 1px solid rgba(189, 189, 189, 1);
  color: #000;
  font-weight: 500;
  outline: none;
`;
