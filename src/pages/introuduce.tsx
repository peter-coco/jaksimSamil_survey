import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const IntroduceWrap = styled.div`
  width: 80%;
  max-width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* gap: 50px; */
  align-items: center;
  justify-content: space-evenly;
`;
const Description = styled.div`
  font-weight: 900;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Select = styled.div`
  width: 303px;
  height: 82px;
  border-radius: 50px;
  background: #ffffff;
  border: 1px solid #7d7d7d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 18px;
  cursor: pointer;
  color: black;

  &:focus-within {
    background-color: #a6a6a6;
    color: #676767;
  }
  &:hover {
    background-color: #a6a6a6;
    color: #676767;
  }
`;
const Introduce = () => {
  return (
    <IntroduceWrap>
      <Description>
        작심삼일로
        <br /> 허송세월하고 있던 나<br />
        <br />
        <br /> 하루하루가 똑같고,
        <br /> 삶에 무기력해진
        <br /> 자신을 보며 다짐한다.
        <br />
        <br />
        <br /> 그래!
        <br /> 내일부터 다시 태어나겠어!!!
        <br />
        <br />
        <br /> 내가 진짜 해낸다!
      </Description>
      <Link to="/survey" style={{ textDecorationLine: 'none' }}>
        <Select onClick={() => {}}>내일로 이동하기</Select>
      </Link>
    </IntroduceWrap>
  );
};

export default Introduce;
