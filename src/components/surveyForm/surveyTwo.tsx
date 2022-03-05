import React, { useEffect, useState } from 'react';
import * as Styles from './suveyForm.style';

const SurveyTwo = ({
  setSurveyForm,
  setCountFirst,
  setCountSecond,
}: {
  setSurveyForm: Function;
  setCountFirst: Function;
  setCountSecond: Function;
}) => {
  const image = '/images/survey2.jpeg';
  const onClickFirstAnswer = () => {
    setCountFirst((pre: number) => pre + 1);
    setSurveyForm(3);
  };
  const onClickSecondAnswer = () => {
    setCountSecond((pre: number) => pre + 1);
    setSurveyForm(3);
  };
  return (
    <Styles.SurveyWrap>
      <Styles.Image src={image} alt="survey-image2" />
      <Styles.Description>
        오늘 할 목록을 작성해보자.
        <br /> 공부, 취미활동, 운동...
        <br /> 할 일이 태산이다. 이때 나의 행동은?
      </Styles.Description>
      <Styles.SelectWrap>
        <Styles.Select onClick={onClickFirstAnswer}>
          우선순위를 정해서
          <br /> 중요한 순서대로 한다.
        </Styles.Select>
        <Styles.Select onClick={onClickSecondAnswer}>
          일단 하고 싶은 일을 먼저 해본다.
        </Styles.Select>
      </Styles.SelectWrap>
    </Styles.SurveyWrap>
  );
};

export default SurveyTwo;
