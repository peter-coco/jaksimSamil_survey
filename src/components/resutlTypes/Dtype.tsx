import { useEffect, useState } from 'react';

import * as Styles from './resultType.style';
import { firebaseDB } from '../../config/firebase';
import { Link } from 'react-router-dom';
import KakaoShareButton from '../kakaoShare';
import KakaoAdfit from '../kakaoAdfit';
const Dtype = () => {
  const ReusltTypeImage = '/images/resultD.jpeg';

  const [resultDPercent, setResultDPercent] = useState(0);
  useEffect(() => {
    // console.log(process.env.NEXT_PUBLIC_FIREBASE_APIKEY);
    const bucket = firebaseDB.collection('bucket');
    // bucket.add({ result_type: 'A' });
    let Dcount = 0;
    bucket.get().then((docs) => {
      docs.forEach((doc) => {
        const result = doc.data();
        if (result.result_type === 'D') {
          Dcount++;
        }
      });
      const percentage = Number(((Dcount / docs.size) * 100).toFixed(2));
      setResultDPercent(percentage);
    });
  }, []);

  return (
    <Styles.ResultTypeWrap>
      <Styles.ImageWrap>
        <Styles.Image src={ReusltTypeImage} />
      </Styles.ImageWrap>
      <Styles.ResultPercent>
        전체 테스트 참여자 중 <span style={{ color: '#009FD5' }}>{`${resultDPercent}%`}</span>가
        같은 유형입니다.
      </Styles.ResultPercent>
      <Styles.ResultTitle>
        당신이 작심삼일을
        <br /> 극복할 확률은 10%
      </Styles.ResultTitle>
      <Styles.ResultSubTitle bgColor={'#009FD5'} fontColor={'white'}>
        나에 대해 몰라도 너무 모르는 나!
      </Styles.ResultSubTitle>
      <Styles.ResultReportWrap>
        <Styles.ResultReport>
          • 관심 있는 게 너무 많지만 뭘 잘하는지는 잘 몰라요.
        </Styles.ResultReport>{' '}
        <Styles.ResultReport>• 잘하는 것과 좋아하는 것으로 고민할 때가 많아요.</Styles.ResultReport>
        <Styles.ResultReport>• 해야 할 일이 많으면 폰을 하거나 딴짓을 해요.</Styles.ResultReport>
        <Styles.ResultReport>• 충동적으로 일을 벌이곤 해요.</Styles.ResultReport>
        <Styles.ResultReport>• 누군가가 결정해주길 기다리고 있어요.</Styles.ResultReport>
      </Styles.ResultReportWrap>
      <Styles.Divider />
      <Styles.SolutionTitle fontColor={'#009FD5'}>작심삼일을 극복한 내 모습은</Styles.SolutionTitle>
      <Styles.SolutionReportWrap>
        <Styles.SolutionReport>• 심 있는 분야에 전문가가 돼요. </Styles.SolutionReport>
        <Styles.SolutionReport>• 잘하는 것과 좋아하는 것을 구분할 수 있어요.</Styles.SolutionReport>
        <Styles.SolutionReport>• 이것저것 시도해 볼 수 있는 추진력이 생겨요.</Styles.SolutionReport>
        <Styles.SolutionReport>• 결정할 때 먼저 의견을 제시할 수 있어요.</Styles.SolutionReport>
      </Styles.SolutionReportWrap>
      <Styles.OptionWrap>
        <Link to="/" style={{ textDecorationLine: 'none' }}>
          <Styles.Replay>다시하기</Styles.Replay>
        </Link>
        <KakaoShareButton />
      </Styles.OptionWrap>
      <KakaoAdfit />
    </Styles.ResultTypeWrap>
  );
};

export default Dtype;
