import styled from 'styled-components';

export const SurveyWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;
export const Description = styled.div`
  font-weight: 900;
  font-size: 18px;
  max-width: 303px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
export const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Select = styled.button`
  width: 303px;
  height: 82px;
  border-radius: 50px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  background-color: white;
  &:focus-within {
    background-color: #a6a6a6;
    color: #676767;
  }
  &:hover {
    background-color: #a6a6a6;
    color: #676767;
  }
  cursor: pointer;
`;
export const Image = styled.img`
  width: 360px;
  height: 222px;
`;
