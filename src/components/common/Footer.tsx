import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  bottom: 0;
  left: 0;

  width: 100%;
  background: #868e96;
  display: flex;

  justify-content: center;
`;
const Footer = () => {
  return (
    <FooterBlock>
      <h2>footer입니다.</h2>
    </FooterBlock>
  );
};
export default Footer;
