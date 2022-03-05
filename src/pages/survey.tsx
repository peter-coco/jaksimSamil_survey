import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SurveyFive from '../components/surveyForm/surveyFive';
import SurveyFour from '../components/surveyForm/surveyFour';
import SurveyOne from '../components/surveyForm/surveyOne';
import SurveyThree from '../components/surveyForm/surveyThree';
import SurveyTwo from '../components/surveyForm/surveyTwo';

const SurveyWrap = styled.div`
  width: 80%;
  max-width: 600px;
  height: 80%;
`;

const Survey = () => {
  const [surveyForm, setSurveyForm] = useState(1);
  const [countFirst, setCountFirst] = useState(0);
  const [countSecond, setCountSecond] = useState(0);

  return (
    <SurveyWrap>
      {surveyForm === 1 && (
        <SurveyOne
          setSurveyForm={setSurveyForm}
          setCountFirst={setCountFirst}
          setCountSecond={setCountSecond}
        />
      )}
      {surveyForm === 2 && (
        <SurveyTwo
          setSurveyForm={setSurveyForm}
          setCountFirst={setCountFirst}
          setCountSecond={setCountSecond}
        />
      )}
      {surveyForm === 3 && (
        <SurveyThree
          setSurveyForm={setSurveyForm}
          setCountFirst={setCountFirst}
          setCountSecond={setCountSecond}
        />
      )}
      {surveyForm === 4 && (
        <SurveyFour
          setSurveyForm={setSurveyForm}
          setCountFirst={setCountFirst}
          setCountSecond={setCountSecond}
        />
      )}
      {surveyForm === 5 && <SurveyFive countFirst={countFirst} countSecond={countSecond} />}
    </SurveyWrap>
  );
};

export default Survey;
