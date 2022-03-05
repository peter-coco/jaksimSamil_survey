import React, { useEffect } from 'react';
declare global {
  interface Window {
    Kakao: any;
  }
}
const KakaoShareButton = () => {
  useEffect(() => {
    initKakao();
  }, []);

  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
    }
  };

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다

    window.Kakao.Link.sendDefault({
      // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
      objectType: 'feed',
      content: {
        title: '작심삼일 심리테스트',
        description: '#작심삼일 #심리테스트 #메타인지',
        imageUrl:
          'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      social: {
        likeCount: 77,
        commentCount: 55,
        sharedCount: 333,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  return <div onClick={createKakaoButton}>카카오톡 공유</div>;
};

export default KakaoShareButton;
