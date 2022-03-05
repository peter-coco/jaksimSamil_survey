import React, { useEffect, useState } from 'react';
import * as Styles from './suveyForm.style';

const SurveyFour = ({
  setSurveyForm,
  setCountFirst,
  setCountSecond,
}: {
  setSurveyForm: Function;
  setCountFirst: Function;
  setCountSecond: Function;
}) => {
  const image = '/images/survey4.jpeg';
  const onClickFirstAnswer = () => {
    setCountFirst((pre: number) => pre + 1);
    setSurveyForm(5);
  };
  const onClickSecondAnswer = () => {
    setCountSecond((pre: number) => pre + 1);
    setSurveyForm(5);
  };

  return (
    <Styles.SurveyWrap>
      <Styles.Image src={image} alt="survey-image4" />
      <Styles.Description>
        도저히 풀리지 않는 문제가 생겨버렸다.
        <br />
        하지만 몇 시간째 제자리걸음이다.
        <br />
        이때 나의 행동은?
      </Styles.Description>
      <Styles.SelectWrap>
        <Styles.Select onClick={onClickFirstAnswer}>
          어떤 부분에서 막혔는지 확인하고
          <br /> 표시한 후 넘어간다.
        </Styles.Select>
        <Styles.Select onClick={onClickSecondAnswer}>풀릴 때까지 계속 시도를 해본다.</Styles.Select>
      </Styles.SelectWrap>
    </Styles.SurveyWrap>
  );
};

export default SurveyFour;
