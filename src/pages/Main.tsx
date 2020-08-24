import React from 'react';
import styled from 'styled-components';

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

const Main = () => {
  return (
    <>
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
