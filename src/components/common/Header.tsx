import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

//responsive 에서 반응형도 만들어보기
const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
  }
`;

//페이지의 콘텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
const Spacer = styled.div`
  height: 4rem;
`;

const Title = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

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
              <Link to="/">SAMSUNG - SERVICE CENTER</Link>
            </Title>
          </ul>

          <ul>
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
      <Spacer />
    </>
  );
};

export default Header;
