import React from 'react';
import KaKaoLogin from 'react-kakao-login';
import btn from './kakao_login_medium_narrow.png';
import KakaoLogin from 'react-kakao-login';

const { Kakao } = window;

const KaKaoLogoutBtn = () => {
  const kakaoLogoutClickHandler = () => {
    if (!Kakao.Auth.getAccessToken()) {
      console.log('Not loggeed in');
    }
    Kakao.Auth.logout(function () {
      console.log(Kakao.Auth.getAccessToken());
    });
  };
  return (
    <button onClick={kakaoLogoutClickHandler}>
      <img src={btn} />
    </button>
  );
};
export default KaKaoLogoutBtn;
