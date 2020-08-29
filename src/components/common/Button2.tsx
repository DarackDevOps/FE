import React from 'react';
import styled from 'styled-components';

const StyledButton2 = styled.div`
  display: inline-block;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: #000000;
  outline: none;
  cursor: pointer;
  background: #ffffff;
  margin-right: 10px;
`;

const Button2 = (props: any) => <StyledButton2 {...props} />;

export default Button2;
