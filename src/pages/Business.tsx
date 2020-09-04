import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';

const Page = styled.div`
  text-align: center;
`;
const Image = styled.img`
  width: 80%;
  height: 80%;
`;
const HalfImage = styled.img`
  width: 45%;
  height: 45%;
`;

const InsideStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  text-align: left;
`;
const InsideStyles2 = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: left;
`;
const Wrap = styled.div`
  position: relative;
  padding: 2%;
`;

const Business = () => {
  return (
    <Page>
      <Wrap>
        <Image src={require('../images/BusinessImages/1.jpg')} />
        <InsideStyles>
          <h2>
            당신에게
            <br />꼭 맞는 갤럭시는?
          </h2>
          <p>
            성능도 크기도 다양한 갤럭시 스마트폰.
            <br />
            한눈에 쉽게 비교해보세요.
          </p>
          <Button>시작하기</Button>
        </InsideStyles>
      </Wrap>
      <Wrap>
        <HalfImage src={require('../images/BusinessImages/4.jpg')} />
        <HalfImage src={require('../images/BusinessImages/5.jpg')} />
      </Wrap>
      <Wrap>
        <Image src={require('../images/BusinessImages/2.jpg')} />
        <InsideStyles>
          <h2>
            갤럭시 S20 | S20+
            <br />
            갤럭시 S20 Ultra 5G
          </h2>
          <h3>당신이 원하던 가장 갤럭시 다운 혁신</h3>
          <p>
            1억 800만 화소, 8K 영상, 100배 줌.
            <br />
            사진의 미래를 바꿀 새로운 스마트폰을 만나보세요.
          </p>
          <Button>자세히 보기</Button>
          <Button>온라인 체험하기</Button>
        </InsideStyles>
      </Wrap>

      <Wrap>
        <Image src={require('../images/BusinessImages/3.jpg')} />
        <InsideStyles2>
          <h2>갤럭시 Z 플립</h2>
          <h3>당신의 미래를 바꿀 새로운 디자인</h3>
          <p>
            유연한 유리 소재로 완성한 대화면,
            <br />
            삼각대 없이 세울 수 있는 카메라, 오래 가는 듀얼 배터리
            <br />
            스마트폰의 새로운 가능성을 확인하세요.
          </p>
          <Button>자세히 보기</Button>
        </InsideStyles2>
      </Wrap>
    </Page>
  );
};
export default Business;
