import React from "react";
import styled from "styled-components";
const Photo = styled.img`
  width: auto;
  height: auto;
  max-width: 250px;
  max-height: 250px;
  margin: 30px;
`;
const PhotoBlock = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

const Main = () => {
  return (
    <>
      <PhotoBlock>
        <Photo src={require("../images/1.jpg")} />
        <Photo src={require("../images/2.jpg")} />
        <h3>1,2번내용입니다.</h3>
      </PhotoBlock>
      <PhotoBlock>
        <Photo src={require("../images/3.jpg")} />
        <Photo src={require("../images/4.jpg")} />
        <div>
          <h3>3,4번내용입니다.</h3>
        </div>
      </PhotoBlock>
    </>
  );
};
export default Main;
