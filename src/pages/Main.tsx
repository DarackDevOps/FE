import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import back1 from '../images/MainImages/back1.jpg';
import back2 from '../images/MainImages/back2.jpg';

import Ultra from '../images/MainImages/galaxyUltra.jpg';
import Bespoke from '../images/MainImages/bespoke.jpg';
import ChefCollection from '../images/MainImages/chefCollection.jpg';
import Watch from '../images/MainImages/galaxyWatch.jpg';
import Button from '../components/common/Button';
import Button2 from '../components/common/Button2';
import '../index.css';
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Photo = styled.img`
  height: auto;
  // height: auto;
  width: 100%;
  // max-height: 300px;
  //margin-left: 20px;
`;

const Block = styled.div`
  text-align: center;
  padding: 40px;
  color: #ffffff;
  font-family: 'Alata', sans-serif;
`;

const Wrap = styled.div`
  position: relative;
  padding: 2%;
`;

const InsideStyles = styled.div`
  position: absolute;
  top: 55%;
  left: 73%;
  transform: translate(-50%, -50%);
  text-align: left;
  color: #ffffff;
`;
const InsideStyles2 = styled.div`
  position: absolute;
  top: 42%;
  left: 23%;
  transform: translate(-50%, -50%);
  text-align: left;
  color: #ffffff;
`;
const InsideStyles3 = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: center;
`;
const InsideStyles4 = styled.div`
  position: absolute;
  top: 40%;
  left: 25%;
  transform: translate(-50%, -50%);
  text-align: right;
`;

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 5000,
  cssEase: 'linear',
  pauseOnHover: true,
  appendDots: (dots) => (
    <div
      style={{
        padding: '70px',
      }}
    >
      <ul style={{ margin: '0px' }}> {dots} </ul>
    </div>
  ),
};
const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
  }
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
<<<<<<< HEAD
      <div>
        <StyledSlider {...settings}>
          <Wrap>
            {/* <Photo src={Fold} /> */}
            <InsideStyles2>
              <h1>
                GALAXY Note20 |<br />
                20 Ultra 5G 런칭
              </h1>
              <p>더 알아보기</p>
              <Button2>구매혜택 보기</Button2>
            </InsideStyles2>
            <Photo src={Ultra} />
          </Wrap>
          <Wrap>
            {/* <Photo src={Fold} /> */}
            <InsideStyles3>
              <h1>Galaxy Watch3 런칭</h1>
              <p>삼성닷컴 단독 혜택을 지금 바로 만나보세요</p>
              <Button2>구매 혜택 보기</Button2>
            </InsideStyles3>
            <Photo src={Watch} />
          </Wrap>
          <Wrap>
            {/* <Photo src={Fold} /> */}
            <InsideStyles>
              <h1>
                2020 NEW
                <br />
                셰프컬렉션 런칭
              </h1>
              <p>
                완벽을 소유하다
                <br />
                셰프컬렉션을 삼성닷컴 단독 혜택으로 만나보세요
              </p>
              <p>더 알아보기</p>
              <Button2>구매 혜택 보기</Button2>
            </InsideStyles>
            <Photo src={ChefCollection} />
          </Wrap>
          <Wrap>
            {/* <Photo src={Fold} /> */}
            <InsideStyles4>
              <h1>
                2020 NEW
                <br />
                BESPOKE 런칭
              </h1>
              <p>
                새로운 컬러의 BESPOKE 냉장고와
                <br />
                BESPOKE 식기세척기를 지금 바로 만나보세요
              </p>
              <Button>더 알아보기</Button>
            </InsideStyles4>
            <Photo src={Bespoke} />
          </Wrap>
        </StyledSlider>
      </div>
=======
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
>>>>>>> 62389cf3c36ac19a63875e22de1b367f6e91f4a2
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
