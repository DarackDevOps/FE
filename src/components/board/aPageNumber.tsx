import React, { useState } from 'react';
import styled from 'styled-components';

const PageNumbers = styled.div`
  display: flex;
  justify-content: center; /*가로에서 가운데에 요소(자식요소)를 배치하겠다*/
  align-items: center; /* 세로에서 가운데에 요소를 배치하겠다 */
`;

const PageNumber = styled.div<{ color: string }>`
  display: inline-block;
  margin: 0% 0.5%;
  color: ${(props) => props.color || 'black'};
`;

const Apagenumber = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNum: number[] = [];
  const [font, setFont] = useState('black');

  const changeColor = () => {
    setFont('red');
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNum.push(i);
  }

  return (
    <nav>
      <PageNumbers>
        {pageNum.map((number) => (
          <PageNumber color={font} onClick={changeColor} key={number}>
            <a
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </a>
          </PageNumber>
        ))}
      </PageNumbers>
    </nav>
  );
};

export default Apagenumber;
