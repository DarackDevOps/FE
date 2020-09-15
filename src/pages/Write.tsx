import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import Header from '../components/board/Header';
import Form from '../components/board/Form';

/**
 * 함수, 인터페이스 정의
 * props, state 사용법 알기
 */
const MainDiv = styled.div`
  display: block;
  margin: 1% 23%;
  width: 50%;
  border-top: 1px solid #444444;
  border-collapse: collapse;
`;

const Write = () => {
  return (
    <>
      <Header />
      <MainDiv>
        <Form />
      </MainDiv>
    </>
  );
};

export default Write;
