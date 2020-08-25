import React from 'react';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import Button from '../components/common/Button';

const Block = styled.div`
  margin-left: 55%;
  //top: 30%;
`;
const LeftBlock = styled.div`
  margin-left: 20%;
  //top: 30%;
  color: #ffffff;
`;

const MyComponent = () => (
  <div>
    {/* -----basic config-----*/}
    <Parallax
      //블러
      // blur={0}
      bgImage={require('../images/BusinessImages/1.jpg')}
      bgImageAlt="the cat"
      //시차효과강도
      strength={200}
    >
      <Block>
        <h2>당신에게</h2>
        <h2>꼭 맞는 갤럭시는?</h2>
        <h3>성능도 크기도 다양한 갤럭시 스마트폰.</h3>
        <h3>한눈에 쉽게 비교해보세요.</h3>
        <Button>시작하기</Button>
      </Block>

      <div style={{ height: '200px' }} />
    </Parallax>

    {/* -----dynamic blur-----*/}
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('../images/BusinessImages/3.jpg')}
      //bgImageAlt="the dog"
      strength={200}
    >
      <LeftBlock>
        <h2>갤럭시 Z 플립</h2>

        <h3>당신의 미래를 바꿀 새로운 디자인</h3>
        <h4>유연한 유리 소재로 완성한 대화면,</h4>
        <h4>삼각대 없이 세울 수 있는 카메라, 오래 가는 듀얼 배터리</h4>
        <h4>스마트폰의 새로운 가능성을 확인하세요.</h4>
        <Button>자세히 보기</Button>
      </LeftBlock>
      <div style={{ height: '200px' }} />
    </Parallax>

    {/* -----custom background element-----*/}
    {/* <Parallax strength={300}>
      <div>Use the background component for custom elements</div>
      <Background className="custom-bg">
        <img
          src={require('../images/BusinessImages/1.jpg')}
          alt="fill murray"
        />
      </Background>
    </Parallax> */}

    <Parallax
      //블러
      // blur={0}
      bgImage={require('../images/BusinessImages/2.jpg')}
      //bgImageAlt="the cat"
      //시차효과강도
      strength={200}
    >
      <Block>
        <h2>갤럭시 S20 | S20+</h2>
        <h2>갤럭시 S20 Ultra 5G</h2>
        <h3>당신이 원하던 가장 갤럭시 다운 혁신</h3>
        <h4>1억 800만 화소, 8K 영상, 100배 줌.</h4>
        <h4>사진의 미래를 바꿀 새로운 스마트폰을 만나보세요.</h4>
        <Button>자세히 보기</Button>
        <Button>온라인 체험하기</Button>
      </Block>

      <div style={{ height: '200px' }} />
    </Parallax>

    <Parallax
      bgImage={require('../images/BusinessImages/3.jpg')}
      strength={400}
      renderLayer={(percentage) => (
        <div
          style={{
            position: 'absolute',
            background: `rgba(255, 125, 0, ${percentage * 1})`,
            left: '50%',
            top: '50%',
            width: percentage * 500,
            height: percentage * 500,
          }}
        />
      )}
    >
      <p>... Content</p>
    </Parallax>
  </div>
);
export default MyComponent;
