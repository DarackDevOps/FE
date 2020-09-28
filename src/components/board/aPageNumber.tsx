import React, { useState, useEffect } from 'react';
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

const Apagenumber = ({ paginate }) => {
  const [pageNum, setPageNum] = useState([]);
  // const [postPageNum, setPostPageNum] = useState([]);
  const [font, setFont] = useState('black');

  const changeColor = () => {
    setFont('red');
  };

  const query = `
  query {
    getTotalPosts
  }
`;

  useEffect(() => {
    fetch(`http://localhost:8000/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setPageNum(data.getTotalPosts);
      });
  }, [pageNum.length]);

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
