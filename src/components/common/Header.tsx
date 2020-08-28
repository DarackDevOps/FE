import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

//responsive 에서 반응형도 만들어보기
const HeaderBlock = styled.div`
  //position: fixed;
  width: 100%;
  //display: flex;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;

  // 일정비율로 거리 벌림
  justify-content: space-between;

  .logo {
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 2px;
    //float: left;
  }
  .menuBar {
    //float: left;
    //margin-right: 5rem;
  }
  .right {
    //float: right;
  }
`;

//페이지의 콘텐츠가 6rem 아래 나타나도록 해주는 컴포넌트
const Spacer = styled.div`
  height: 6rem;
`;

//로고 링크
const Title = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
//메뉴 링크
const Menu = styled.li`
  list-style-type: none;
  padding: 20px;
  float: left;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          {/* <div className="logo">
            <ul>
              <Title>
                <Link to="/">SAMSUNG - SERVICE CENTER</Link>
              </Title>
            </ul>
            <div>SAMSUNG - SERVICE CENTER</div>
          </div> */}

          <ul className="logo">
            <Title>
              <Link to="/">
                <h3>SAMSUNG - SERVICE CENTER</h3>
              </Link>
            </Title>
          </ul>

          <ul className="menuBar">
            <Menu>
              <Link to="/business">Business</Link>
            </Menu>
            <Menu>
              <Link to="/Map">Map</Link>
            </Menu>
            <Menu>
              <Link to="/Board">Board</Link>
            </Menu>
            <Menu>
              <Link to="/Qanda">Q&A</Link>
            </Menu>
          </ul>
          <div className="right">
            <Button>로그인</Button>
          </div>
        </Wrapper>
      </HeaderBlock>
      {/* <Spacer /> */}
    </>
  );
};

export default Header;
