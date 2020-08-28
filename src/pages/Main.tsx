import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import back1 from '../images/MainImages/back1.jpg';
//import back2 from '../images/MainImages/back2.jpg';
import '../index.css';

// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from 'pure-react-carousel';
import Fade from 'react-reveal/Fade';

const Photo = styled.img`
  width: auto;
  height: auto;
  max-width: 250px;
  max-height: 250px;
  margin-left: 20px;
`;
const PhotoBlock = styled.div`
  margin: 0 auto;
  width: 1200px;
`;
const Block = styled.div`
  text-align: center;
  padding: 40px;
  color: #ffffff;
  font-family: 'Alata', sans-serif;
`;

const Main = () => {
  return (
    <>
      {/* <CarouselProvider
        naturalSlideHeight={125}
        naturalSlideWidth={100}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>first slide.</Slide>
          <Slide index={1}>first slide.</Slide>
          <Slide index={2}>first slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider> */}
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

      <PhotoBlock>
        <Fade left>
          <h3>SAMSUNG - SERVIECE CENTER.</h3>
        </Fade>
        <Photo src={require('../images/1.jpg')} />
        <Photo src={require('../images/2.jpg')} />
        <h3>1,2번내용입니다.</h3>
      </PhotoBlock>
      <PhotoBlock>
        <Photo src={require('../images/3.jpg')} />
        <Photo src={require('../images/4.jpg')} />
        <div>
          <h3>3,4번내용입니다.</h3>
        </div>
      </PhotoBlock>

      <h3>3,4번내용입니다.</h3>

      <h3>3,4번내용입니다.</h3>

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
