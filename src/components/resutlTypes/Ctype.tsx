import { useEffect, useState } from 'react';
import * as Styles from './resultType.style';
import { firebaseDB } from '../../config/firebase';
import { Link } from 'react-router-dom';
import KakaoShareButton from '../kakaoShare';

const Ctype = () => {
  const ReusltTypeImage = '/images/resultC.jpeg';

  const [resultCPercent, setResultCPercent] = useState(0);
  useEffect(() => {
    // console.log(process.env.NEXT_PUBLIC_FIREBASE_APIKEY);
    const bucket = firebaseDB.collection('bucket');
    // bucket.add({ result_type: 'A' });
    let Ccount = 0;
    bucket.get().then((docs) => {
      docs.forEach((doc) => {
        const result = doc.data();
        if (result.result_type === 'C') {
          Ccount++;
        }
      });
      setResultCPercent((Ccount / docs.size) * 100);
    });
  }, []);
  return (
    <Styles.ResultTypeWrap>
      <Styles.ImageWrap>
        <Styles.Image src={ReusltTypeImage} />
      </Styles.ImageWrap>
      <Styles.ResultPercent>
        전체 테스트 참여자 중 <span style={{ color: '#FFBBD2' }}>{`${resultCPercent}%`}</span>가
        같은 유형입니다.
      </Styles.ResultPercent>
      <Styles.ResultTitle>
        당신이 작심삼일을
        <br /> 극복할 확률은 40%
      </Styles.ResultTitle>
      <Styles.ResultSubTitle bgColor={'#FFBBD2'} fontColor={'white'}>
        종종 자신을 잘 몰라서 헤매는 나!
      </Styles.ResultSubTitle>
      <Styles.ResultReportWrap>
        <Styles.ResultReport>• 관심 있는 분야에 대해 전문가예요.</Styles.ResultReport>
        <Styles.ResultReport>• 내가 어떤 부분이 부족한지 헷갈릴 때가 있어요.</Styles.ResultReport>
        <Styles.ResultReport>
          • 어떤 걸 먼저 해야 할 지 몰라 답답함을 느끼곤 해요.
        </Styles.ResultReport>
        <Styles.ResultReport>
          • 해야 할 일이 많아서 머리가 아플 때가 종종 있어요.
        </Styles.ResultReport>{' '}
        <Styles.ResultReport>• 주로 친구에게 결정을 넘기곤 해요.</Styles.ResultReport>
      </Styles.ResultReportWrap>
      <Styles.Divider />
      <Styles.SolutionTitle fontColor={'#FFBBD2'}>작심삼일을 극복한 내 모습은</Styles.SolutionTitle>
      <Styles.SolutionReportWrap>
        <Styles.SolutionReport>• 내가 어떤 부분이 부족한지 알 수 있어요.</Styles.SolutionReport>
        <Styles.SolutionReport>
          • 해야 할 일과 하지 말아야 할 일을 구분할 수 있어요.
        </Styles.SolutionReport>
        <Styles.SolutionReport>• 중요한 결정을 할 때 선택할 수 있어요.</Styles.SolutionReport>
        <Styles.SolutionReport>
          • 내가 하고 싶은 일이 무엇인지 찾을 수 있어요.
        </Styles.SolutionReport>
      </Styles.SolutionReportWrap>
      <Styles.OptionWrap>
        <Link to="/" style={{ textDecorationLine: 'none' }}>
          <Styles.Replay>다시하기</Styles.Replay>
        </Link>
        <KakaoShareButton />
      </Styles.OptionWrap>
    </Styles.ResultTypeWrap>
  );
};

export default Ctype;
