import { useEffect, useState } from 'react';

import * as Styles from './resultType.style';
import { firebaseDB } from '../../config/firebase';
import { Link } from 'react-router-dom';
import KakaoShareButton from '../kakaoShare';

const Btype = () => {
  const ReusltTypeImage = '/images/resultB.jpeg';
  const [resultBPercent, setResultBPercent] = useState(0);
  useEffect(() => {
    // console.log(process.env.NEXT_PUBLIC_FIREBASE_APIKEY);
    const bucket = firebaseDB.collection('bucket');
    // bucket.add({ result_type: 'A' });
    let Bcount = 0;
    bucket.get().then((docs) => {
      docs.forEach((doc) => {
        const result = doc.data();
        if (result.result_type === 'B') {
          Bcount++;
        }
      });
      setResultBPercent((Bcount / docs.size) * 100);
    });
  }, []);
  return (
    <Styles.ResultTypeWrap>
      <Styles.ImageWrap>
        <Styles.Image src={ReusltTypeImage} />
      </Styles.ImageWrap>
      <Styles.ResultPercent>
        전체 테스트 참여자 중 <span style={{ color: '#FFAC71' }}>{`${resultBPercent}%`}</span>가
        같은 유형입니다.
      </Styles.ResultPercent>
      <Styles.ResultTitle>
        당신이 작심삼일을
        <br /> 극복할 확률은 60%
      </Styles.ResultTitle>
      <Styles.ResultSubTitle bgColor={'#FFAC71'} fontColor={'white'}>
        알지만 계속 하고싶은 나!
      </Styles.ResultSubTitle>
      <Styles.ResultReportWrap>
        <Styles.ResultReport>• 내가 어떤 부분이 부족한지 알고 있어요.</Styles.ResultReport>
        <Styles.ResultReport>
          • 해야 할 일과 하지말아야 할 일을 구분할 수 있어요.
        </Styles.ResultReport>
        <Styles.ResultReport>• 눈 앞에 있는 유혹에 쉽게 흔들리고는 해요.</Styles.ResultReport>
        <Styles.ResultReport>• 해야할 일을 하지 못해 종종 죄책감이 들어요.</Styles.ResultReport>
        <Styles.ResultReport>
          • 결정할 때 내가 하고 싶은 선택보다 친구의 선택을 들어줘요.
        </Styles.ResultReport>
      </Styles.ResultReportWrap>
      <Styles.Divider />
      <Styles.SolutionTitle fontColor={'#FFAC71'}>작심삼일을 극복한 내 모습은</Styles.SolutionTitle>
      <Styles.SolutionReportWrap>
        <Styles.SolutionReport>
          • 내가 할 일 중 무엇이 중요한지 선택할 수 있어요.
        </Styles.SolutionReport>
        <Styles.SolutionReport>
          • 상대방에게 하기 싫은 걸 분명히 말할 수 있어요.
        </Styles.SolutionReport>
        <Styles.SolutionReport>• 눈앞에 있는 유혹에 쉽게 흔들리지 않아요.</Styles.SolutionReport>
        <Styles.SolutionReport>• 나의 부족한 부분을 채워나갈 줄 알아요.</Styles.SolutionReport>
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
export default Btype;
