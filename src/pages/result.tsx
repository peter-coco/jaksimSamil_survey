import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Atype from '../components/resutlTypes/Atype';
import Btype from '../components/resutlTypes/Btype';
import Ctype from '../components/resutlTypes/Ctype';
import Dtype from '../components/resutlTypes/Dtype';

const ResultWrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Result = ({ resultType }: { resultType: string }) => {
  return (
    <ResultWrap>
      {resultType === 'A' && <Atype />}
      {resultType === 'B' && <Btype />}
      {resultType === 'C' && <Ctype />}
      {resultType === 'D' && <Dtype />}
    </ResultWrap>
  );
};

export default Result;
