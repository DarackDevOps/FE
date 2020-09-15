import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  display: inline-block;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: #343a40;
  &:hover {
    background: #868e96;
  }
<<<<<<< HEAD
<<<<<<< HEAD
  margin-right: 10px;
=======
  margin-left: 10px;
>>>>>>> 62389cf3c36ac19a63875e22de1b367f6e91f4a2
=======
  margin-right: 10px;
>>>>>>> b80d3660eb1ce84267994e87b7f1c4952c8672f4
`;

const Button = (props: any) => <StyledButton {...props} />;

export default Button;
