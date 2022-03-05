import styled from 'styled-components';

export const ResultTypeWrap = styled.div`
  width: 100%;
  max-width: 303px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: center; */
  /* justify-content: center; */
  gap: 10px;
`;
export const ImageWrap = styled.div`
  width: 100%;
  height: 222px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  width: 360px;
  height: 222px;
`;
export const ResultPercent = styled.div`
  font-family: Sansita Swashed;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  color: #c4c4c4;
  text-align: center;
`;
export const ResultTitle = styled.div`
  font-family: Sansita Swashed;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
export const ResultSubTitle = styled.div<{ bgColor: string; fontColor: string }>`
  width: 100%;
  height: 30px;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.bgColor};
  font-size: 18px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ResultReportWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const ResultReport = styled.div`
  font-size: 12px;
  font-family: Sansita Swashed;
  font-style: normal;
  font-weight: 600;
`;
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c4c4c4;
`;
export const SolutionTitle = styled.div<{ fontColor: string }>`
  font-family: Sansita Swashed;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.fontColor};
`;
export const SolutionReportWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const SolutionReport = styled.div`
  font-family: Sansita Swashed;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
`;
export const OptionWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  position: relative;
`;
export const Replay = styled.button`
  height: 64px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 0;

  &:focus-within {
    background-color: #a6a6a6;
    color: #676767;
  }
  &:hover {
    background-color: #a6a6a6;
    color: #676767;
  }
  width: 86px;
`;
export const ShareResult = styled.button`
  height: 64px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 0;

  &:focus-within {
    background-color: #a6a6a6;
    color: #676767;
  }
  &:hover {
    background-color: #a6a6a6;
    color: #676767;
  }
  width: 70%;
`;
