import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Fade from 'react-reveal/Fade';

import img1 from '../images/Bespoke/1.jpg';
import img2 from '../images/Bespoke/2.jpg';
import img3 from '../images/Bespoke/3.jpg';
import img9 from '../images/Bespoke/9.jpg';
import img10 from '../images/Bespoke/10.jpg';
import img11 from '../images/Bespoke/11.jpg';
import img12 from '../images/Bespoke/12.jpg';
import img13 from '../images/Bespoke/13.jpg';
import img14 from '../images/Bespoke/14.jpg';
import img15 from '../images/Bespoke/15.jpg';
import img16 from '../images/Bespoke/16.jpg';

const Image = styled.img`
  width: 100%;
  height: auto;
`;
const Image2 = styled.img`
  width: 35%;
  height: 35%;
  margin-top: 6%;
  margin-left: 10%;
`;
const Image3 = styled.img`
  width: 35%;
  height: 35%;
  margin-left: 55%;
`;
const Image10 = styled.img`
  margin-top: 8%;
  width: 79%;
  text-align: center;
  margin-bottom: 8%;
`;
const Image11 = styled.img`
  margin: 1%;
  width: 18%;
  height: auto;
`;
const Wrap = styled.div`
  position: relative;
  text-align: center;
`;
const Wrap2 = styled.div`
  position: relative;
`;
const Wrap3 = styled.div`
  margin-top: 3%;
  position: relative;
  text-align: center;
  margin-bottom: 3%;
`;
const Wrap4 = styled.div``;
const InsideStyles = styled.div`
  position: absolute;
  top: 40%;
  left: 30%;
  transform: translate(-50%, -50%);
  text-align: left;
`;
const InsideStyles2 = styled.div`
  position: absolute;
  top: 35%;
  left: 68%;
  transform: translate(-50%, -50%);
  text-align: left;
`;
const InsideStyles3 = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  text-align: right;
`;
const InsideStyles4 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const InsideStyles5 = styled.div`
  position: absolute;
  top: 38%;
  left: 23%;
  transform: translate(-50%, -50%);
  text-align: left;
`;

const ViloetBar = styled.div`
  background-color: #b8abca;
  height: 80px;
  width: 100%;
`;

const Text = styled.h1`
  color: #28372a;
`;
const Text2 = styled.h1`
  color: #5d292b;
`;

const Bespoke = () => {
  return (
    <>
      <Wrap>
        <Image src={img1} />
        <InsideStyles>
          <p>모두에겐 자신만의 BESPOKE가 있다</p>
          <h1>2020 NEW BESPOKE 런칭</h1>
          <Button>조합하여 구매하기</Button>
        </InsideStyles>
      </Wrap>

      <ViloetBar></ViloetBar>
      <Wrap2>
        <Image2 src={img2} />
        <InsideStyles2>
          <Fade bottom>
            <p>삼성닷컴 단독 행사</p>
            <h1>BESPOKE 냉장고 구매 혜택</h1>
            <p>
              닷컴 단독 4% 추가 할인은 기본. 드롱기 2종 SET 사은품까지!
              <br /> 지금 바로 삼성닷컴에서 만나보세요.
            </p>
            <p>구매 혜택 보기</p>
          </Fade>
        </InsideStyles2>
      </Wrap2>
      <Wrap2>
        <Image3 src={img3} />
        <InsideStyles3>
          <Fade bottom>
            <p>삼성닷컴 단독 행사</p>
            <h1>
              2020 NEW BESPOKE
              <br />
              식기세척기 런칭
            </h1>
            <p>
              나만의 취향을 담은 7가지 컬러의 BESPOKE 식기세척기와
              <br />
              주방을 완벽하게 해줄 다양한 구매 혜택을 만나보세요.
            </p>
            <p>구매 혜택 보기</p>
          </Fade>
        </InsideStyles3>
      </Wrap2>
      <Wrap>
        <Image src={img9} />
        <InsideStyles4>
          <Fade bottom>
            <Text>MY BESPOKE</Text>
            <Text2>BOUTIQUE</Text2>
            <p>
              비스포크를 사랑하는 사람들을 위한 공간.
              <br />
              비스포크 부티크 오픈!
              <br />
              구매하신 비스포크 인증하고 선물도 받으세요.
            </p>
            <p>나의 비스포크 인증하기</p>
          </Fade>
        </InsideStyles4>
      </Wrap>
      <Wrap>
        <Image10 src={img10} />
        <InsideStyles5>
          <Fade bottom>
            <h1>
              BESPOKE
              <br />
              City Special Edition
            </h1>
            <p>
              도시의 컬러를 그대로 담은 BESPOKE 와 함께
              <br />
              일상을 여행의 설렘으로 채워보세요.
            </p>
            <p>Special Edition 구매하기</p>
          </Fade>
        </InsideStyles5>
      </Wrap>
      <Wrap>
        <Fade bottom>
          <h1>
            BESPOKE 갤러리
            <br />
            #나만의조합 #나만의디자인 #내주방에핏 #가전을나답게
          </h1>
          <p>
            취향대로 꾸민 공간 속에서 만나는 BESPOKE 냉장고.
            <br />
            당신만의 인테리어를 위한 영감을 얻고 싶다면?
          </p>
        </Fade>
      </Wrap>
      <Wrap3>
        <Fade bottom>
          <Wrap4>
            <Image11 src={img11} />
            <Image11 src={img12} />
            <Image11 src={img13} />
          </Wrap4>
        </Fade>
        <br />
        <Fade bottom>
          <Wrap4>
            <Image11 src={img14} />
            <Image11 src={img15} />
            <Image11 src={img16} />
          </Wrap4>
        </Fade>
      </Wrap3>
    </>
  );
};
export default Bespoke;
