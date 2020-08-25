import React from "react";
import styled from 'styled-components';
import Write from '../components/board/Write'
//import Post from '../components/board/Post';

const CustomerSound = styled.div`
    width: 90%;
    height : 50px;
    background : black;
    margin : 10px 3%;
`;

const Title = styled.h1< { color?: string } >`
    color : ${props => props.color || 'white' };
    text-align: center;
`;

const Subheading = styled(Title)`
      font-size : 3em;
      font-weight: 500;
      padding: 10px;
      margin-top: 1%;
      margin-bottom: 1%;
`

const Board = () => {
  return (
    <div>
    <CustomerSound>
      <Title>고객의 소리</Title>
    </CustomerSound>
    <Subheading as="p" color="black">Board</Subheading>
    <Write></Write>
  </div>
  ); 
};
export default Board;
 