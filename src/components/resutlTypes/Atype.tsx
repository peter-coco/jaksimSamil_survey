import { useEffect, useState } from 'react';
import * as Styles from './resultType.style';
import { firebaseDB } from '../../config/firebase';
import { Helmet } from 'react-helmet';
import KakaoShareButton from '../kakaoShare';
import { Link } from 'react-router-dom';
import KakaoAdfit from '../kakaoAdfit';

const Atype = () => {
  const ReusltTypeImage = '/images/resultA.jpeg';
  const [resultAPercent, setResultAPercent] = useState(0);
  useEffect(() => {
    // console.log(process.env.NEXT_PUBLIC_FIREBASE_APIKEY);
    const bucket = firebaseDB.collection('bucket');
    // bucket.add({ result_type: 'A' });
    let Acount = 0;
    bucket.get().then((docs) => {
      docs.forEach((doc) => {
        const result = doc.data();
        if (result.result_type === 'A') {
          Acount++;
        }
      });
      const percentage = Number(((Acount / docs.size) * 100).toFixed(2));
      setResultAPercent(percentage);
    });
  }, []);

  return (
    <Styles.ResultTypeWrap>
      <Styles.ImageWrap>
        <Styles.Image src={ReusltTypeImage} />
      </Styles.ImageWrap>
      <Styles.ResultPercent>
        전체 테스트 참여자 중 <span style={{ color: '#67D07A' }}>{`${resultAPercent}%`}</span>가
        같은 유형입니다.
      </Styles.ResultPercent>
      <Styles.ResultTitle>
        당신이 작심삼일을 <br />
        극복할 확률은 100%
      </Styles.ResultTitle>
      <Styles.ResultSubTitle bgColor={'#67D07A'} fontColor={'white'}>
        나에 대해 너무 잘 알고 있는 나!
      </Styles.ResultSubTitle>
      <Styles.ResultReportWrap>
        <Styles.ResultReport>• 한번 결정한 일은 끝까지 해내요.</Styles.ResultReport>
        <Styles.ResultReport>• 나의 부족한 부분을 채워나갈 줄 알아요.</Styles.ResultReport>
        <Styles.ResultReport>
          {' '}
          • 종종 친구들 사이에서 호불호가 확실하다는 말을 들어요.
        </Styles.ResultReport>
        <Styles.ResultReport>
          {' '}
          • 다른 사람에게 결정을 넘기지 않고 스스로 결정해요.
        </Styles.ResultReport>{' '}
        <Styles.ResultReport>• 눈앞에 있는 유혹에 쉽게 흔들리지 않아요.</Styles.ResultReport>
      </Styles.ResultReportWrap>
      <Styles.Divider />
      <Styles.SolutionTitle fontColor={'#67D07A'}>작심삼일을 극복한 내 모습은</Styles.SolutionTitle>
      <Styles.SolutionReportWrap>
        <Styles.SolutionReport>
          • 내가 하려는 일을 체계적으로 관리할 수 있어요.
        </Styles.SolutionReport>
        <Styles.SolutionReport>• 상대방을 배려할 줄 알아서 인기가 많아요. </Styles.SolutionReport>
        <Styles.SolutionReport>• 늘 겸손한 자세를 유지해요.</Styles.SolutionReport>
        <Styles.SolutionReport>
          • 내가 해낼 수 있는 일을 강도별로 설정할 수 있어요.
        </Styles.SolutionReport>
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

export default Atype;
