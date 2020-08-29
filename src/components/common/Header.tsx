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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
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
  }
  .right {
  }
`;

//페이지의 콘텐츠가 6rem 아래 나타나도록 해주는 컴포넌트
const Spacer = styled.div`
  height: 4rem;
`;

//로고 링크
const Title = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

//메인 메뉴
const MainMenu = styled.ul`
  list-style-type: none;
`;
const LiMain = styled.li`
  float: left;
  margin-right: 30px;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;

  position: relative;
  &:hover {
    color: white;
    background: black;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <ul className="logo">
            <Title>
              <Link to="/">
                <h3>SAMSUNG - SERVICE CENTER</h3>
              </Link>
            </Title>
          </ul>
          <MainMenu>
            <LiMain>
              <Link to="/business">Smartphone</Link>
            </LiMain>
            <LiMain>
              <Link to="/bespoke">Bespoke</Link>
            </LiMain>
            <LiMain>
              <Link to="/Map">Map</Link>
            </LiMain>
            <LiMain>
              <Link to="/Board">Board</Link>
            </LiMain>
            <LiMain>
              <Link to="/Qanda">Q&A</Link>
            </LiMain>
          </MainMenu>
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
