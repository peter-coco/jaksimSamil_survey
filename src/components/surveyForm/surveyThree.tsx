import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as Styles from './suveyForm.style';

const SurveyThree = ({
  setSurveyForm,
  setCountFirst,
  setCountSecond,
}: {
  setSurveyForm: Function;
  setCountFirst: Function;
  setCountSecond: Function;
}) => {
  const image = '/images/survey3.jpeg';
  const onClickFirstAnswer = () => {
    setCountFirst((pre: number) => pre + 1);
    setSurveyForm(4);
  };
  const onClickSecondAnswer = () => {
    setCountSecond((pre: number) => pre + 1);
    setSurveyForm(4);
  };
  return (
    <Styles.SurveyWrap>
      <Styles.Image src={image} alt="survey-image3" />
      <Styles.Description>
        할 일을 계속하다 보니
        <br />
        쉬고 싶다는 생각이 커져 버렸다.
        <br /> 이때 나의 행동은?
      </Styles.Description>
      <Styles.SelectWrap>
        <Styles.Select onClick={onClickFirstAnswer}>할 일을 끝까지 하고 쉰다.</Styles.Select>
        <Styles.Select onClick={onClickSecondAnswer}>조금 쉬다가 할 일을 한다.</Styles.Select>
      </Styles.SelectWrap>
    </Styles.SurveyWrap>
  );
};

export default SurveyThree;
