import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { firebaseDB } from '../config/firebase';
import { Link } from 'react-router-dom';

const HomeWrap = styled.div`
  width: 80%;
  max-width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: space-evenly;
`;
const Description = styled.div`
  font-weight: 900;
  font-size: 24px;
  display: flex;
  align-items: center;
`;
const Writer = styled.div`
  font-size: 14px;
  color: #bcbcbc;
`;
const Select = styled.div`
  width: 303px;
  height: 82px;
  border-radius: 50px;
  background: #ffac71;
  border: 3px solid #4f4f4f;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 18px;
  color: black;
  cursor: pointer;

  &:focus-within {
    background-color: #84644c;
  }
  &:hover {
    background-color: #84644c;
  }
`;
const Image = styled.img`
  width: 360px;
  height: 222px;
`;

const Home = () => {
  const image = '/images/home.png';
  const [participatorCount, setParticipatorCount] = useState(0);
  useEffect(() => {
    // console.log(process.env.NEXT_PUBLIC_FIREBASE_APIKEY);
    const bucket = firebaseDB.collection('bucket');
    // bucket.add({ result_type: 'A' });
    bucket.get().then((docs) => {
      // console.log(docs.size);
      setParticipatorCount(docs.size);
    });
  }, []);
  return (
    <HomeWrap>
      <Image src={image} alt="image1" />
      <Description>
        나의 작심삼일
        <br />
        극복 확률은?
      </Description>
      <Writer>REPLACE</Writer>
      <Link to="/introduce" style={{ textDecorationLine: 'none' }}>
        <Select>테스트 시작!</Select>
      </Link>
      <div style={{ fontSize: '18px', fontWeight: '900' }}>참여자 수</div>
      <div style={{ fontSize: '18px', fontWeight: '900' }}>{participatorCount}</div>
    </HomeWrap>
  );
};

export default Home;
