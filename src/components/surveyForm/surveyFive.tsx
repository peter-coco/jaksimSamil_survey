import React, { useEffect, useState } from 'react';
import * as Styles from './suveyForm.style';
import { firebaseDB } from '../../config/firebase';

const SurveyFive = ({ countFirst, countSecond }: { countFirst: number; countSecond: number }) => {
  const image = '/images/survey5.jpeg';
  const onClickFirstAnswer = async () => {
    // a, b, d, c
    if (countFirst + 1 === 5) {
      const bucket = firebaseDB.collection('bucket');
      await bucket.add({ result_type: 'A' });
      window.location.href = '/result/A';
    } else if (countFirst + 1 >= 3) {
      const bucket = firebaseDB.collection('bucket');
      await bucket.add({ result_type: 'B' });
      window.location.href = '/result/B';
    } else if (countSecond === 5) {
      const bucket = firebaseDB.collection('bucket');
      await bucket.add({ result_type: 'D' });
      window.location.href = '/result/D';
    } else if (countSecond >= 3) {
      const bucket = firebaseDB.collection('bucket');
      await bucket.add({ result_type: 'C' });
      window.location.href = '/result/C';
    }
  };
  const onClickSecondAnswer = async () => {
    if (countFirst === 5) {
      const bucket = firebaseDB.collection('bucket');
      await bucket.add({ result_type: 'A' });
      window.location.href = '/result/A';
    } else if (countFirst >= 3) {
      const bucket = firebaseDB.collection('bucket');
      await bucket.add({ result_type: 'B' });
      window.location.href = '/result/B';
    } else if (countSecond + 1 === 5) {
      const bucket = firebaseDB.collection('bucket');
      await bucket.add({ result_type: 'D' });
      window.location.href = '/result/D';
    } else if (countSecond + 1 >= 3) {
      const bucket = firebaseDB.collection('bucket');
      await bucket.add({ result_type: 'C' });
      window.location.href = '/result/C';
    }
  };

  return (
    <Styles.SurveyWrap>
      <Styles.Image src={image} alt="survey-image5" />
      <Styles.Description>
        갓생을 결심한 하루가 지나가고 있다. <br />
        무언가를 해냈다는 뿌듯함이 든다. <br />
        이때 나의 행동은?
      </Styles.Description>
      <Styles.SelectWrap>
        <Styles.Select onClick={onClickFirstAnswer}>
          오늘 하루에 대한 일기를 쓰며
          <br /> 되돌아본다.
        </Styles.Select>
        <Styles.Select onClick={onClickSecondAnswer}>일단 피곤하니 자자.</Styles.Select>
      </Styles.SelectWrap>
    </Styles.SurveyWrap>
  );
};

export default SurveyFive;
