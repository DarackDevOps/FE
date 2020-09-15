import React from 'react';
import { useHistory } from 'react-router-dom';
import KaKaoLogin from 'react-kakao-login';
import btn from './kakao_login_medium_narrow.png';

const { Kakao } = window;

const KakaoLoginBtn = () => {
  const history = useHistory();
  const kakaoLoginClickHandler = () => {
    //카카오 로그인 화면을 팝업.
    Kakao.Auth.login({
      //추가정보 login 함수로 요청할 경우.
      scope: 'profile,account_email,gender',
      //success 콜백함수로 카카오 사용자 토큰을 받을 수 있다.
      success: function (response) {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
            console.log(response);
            console.log(response.kakao_account.email);
            console.log(response.kakao_account.profile.nickname);
          },
          fail: function (error) {
            console.log(error);
          },
        });

        localStorage.setItem('Kakao_token', response.access_token);
        if (response.access_token) {
          alert('환영합니다.');
          //이동.
          history.push('/');
        }
        // });
        //request 를 해야 정보를 가져올 수 있다.
      },
    });
  };

  return (
    <button onClick={kakaoLoginClickHandler}>
      <img src={btn} />
    </button>
  );
};
export default KakaoLoginBtn;
