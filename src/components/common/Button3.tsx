import React from 'react';
import styled from 'styled-components';

const StyledButton3 = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.7rem 2rem;
  color: black;
  outline: none;
  cursor: pointer;
  //margin-right: 10px;
`;

const Button3 = (props: any) => <StyledButton3 {...props} />;

export default Button3;
