import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 50%;
  height: 75%;
`;

const Business = () => {
  return <Image src={require('../images/5.jpg')} />;
};
export default Business;
