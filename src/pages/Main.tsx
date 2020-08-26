import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import back1 from '../images/MainImages/back1.jpg';
//import back2 from '../images/MainImages/back2.jpg';

import Ultra from '../images/MainImages/galaxyUltra.jpg';
import Bespoke from '../images/MainImages/bespoke.jpg';
import ChefCollection from '../images/MainImages/chefCollection.jpg';
import Watch from '../images/MainImages/galaxyWatch.jpg';
import Button from '../components/common/Button';
import '../index.css';
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';

const Photo = styled.img`
  width: auto;
  // height: auto;
  max-width: 100%;
  // max-height: 300px;

  //margin-left: 20px;
`;

const Block = styled.div`
  text-align: center;
  padding: 40px;
  color: #ffffff;
  font-family: 'Alata', sans-serif;
`;
const Center = styled.div`
  //text-align: center;
`;
const Wrap = styled.div`
  position: relative;
  padding: 2%;
`;
const InsideStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  text-align: left;
`;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Main = () => {
  return (
    <>
      <div>
        <Slider settings>
          <Wrap>
            {/* <Photo src={Fold} /> */}
            <InsideStyles>
              <h2>당신에게</h2>
              <h2>꼭 맞는 갤럭시는?</h2>
              <p>성능도 크기도 다양한 갤럭시 스마트폰.</p>
              <p>한눈에 쉽게 비교해보세요.</p>
              <Button>시작하기</Button>
            </InsideStyles>
            <Photo src={Ultra} />
          </Wrap>
          <Wrap>
            {/* <Photo src={Fold} /> */}
            <InsideStyles>
              <h2>당신에게</h2>
              <h2>꼭 맞는 갤럭시는?</h2>
              <p>성능도 크기도 다양한 갤럭시 스마트폰.</p>
              <p>한눈에 쉽게 비교해보세요.</p>
              <Button>시작하기</Button>
            </InsideStyles>
            <Photo src={Watch} />
          </Wrap>

          <Wrap>
            {/* <Photo src={Fold} /> */}
            <InsideStyles>
              <h2>당신에게</h2>
              <h2>꼭 맞는 갤럭시는?</h2>
              <p>성능도 크기도 다양한 갤럭시 스마트폰.</p>
              <p>한눈에 쉽게 비교해보세요.</p>
              <Button>시작하기</Button>
            </InsideStyles>
            <Photo src={ChefCollection} />
          </Wrap>
          <Wrap>
            {/* <Photo src={Fold} /> */}
            <InsideStyles>
              <h2>당신에게</h2>
              <h2>꼭 맞는 갤럭시는?</h2>
              <p>성능도 크기도 다양한 갤럭시 스마트폰.</p>
              <p>한눈에 쉽게 비교해보세요.</p>
              <Button>시작하기</Button>
            </InsideStyles>
            <Photo src={Bespoke} />
          </Wrap>
        </Slider>
      </div>
      <Parallax
        bgImage={back1}
        //시차효과강도
        strength={600}
      >
        <Block>
          <h2>DISCOVERY</h2>
          <p>LOOKING FOR!</p>
        </Block>
        <div style={{ height: '300px' }} />
      </Parallax>

      <Fade left>
        <h3>SAMSUNG - SERVIECE CENTER.</h3>
      </Fade>
      <Fade left>
        <section>
          <h3>SAMSUNG - SERVIECE CENTER.</h3>
        </section>
      </Fade>
      <Fade left>
        <section>
          <h3>SAMSUNG - SERVIECE CENTER.</h3>
        </section>
      </Fade>
    </>
  );
};
export default Main;
