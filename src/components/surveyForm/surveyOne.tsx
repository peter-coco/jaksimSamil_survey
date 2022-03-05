import React, { useEffect, useState } from 'react';
import * as Styles from './suveyForm.style';

const SurveyOne = ({
  setSurveyForm,
  setCountFirst,
  setCountSecond,
}: {
  setSurveyForm: Function;
  setCountFirst: Function;
  setCountSecond: Function;
}) => {
  const image = '/images/survey1.jpeg';

  const onClickFirstAnswer = () => {
    setCountFirst((pre: number) => pre + 1);
    setSurveyForm(2);
  };
  const onClickSecondAnswer = () => {
    setCountSecond((pre: number) => pre + 1);
    setSurveyForm(2);
  };

  return (
    <Styles.SurveyWrap>
      <Styles.Image src={image} alt="survey-image1" />
      <Styles.Description>
        갓생하기로 결심한 첫날이 되었다.
        <br /> 미리 맞춰놓은 알람이 계속 울리고 있다.
        <br /> 이때 나의 행동은?
      </Styles.Description>
      <Styles.SelectWrap>
        <Styles.Select onClick={onClickFirstAnswer}>
          ‘개운하다!’
          <br /> 몸을 일으킨다.{' '}
        </Styles.Select>
        <Styles.Select onClick={onClickSecondAnswer}>
          ‘이때 일어난다고 뭐가 바뀌겠어.
          <br /> 내가 편할 때 일어나야지.’
          <br /> 더 잔다.{' '}
        </Styles.Select>
      </Styles.SelectWrap>
    </Styles.SurveyWrap>
  );
};

export default SurveyOne;
