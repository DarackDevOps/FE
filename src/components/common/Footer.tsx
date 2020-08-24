import React from 'react';
import styled from 'styled-components';
import '../../index.css';

const FooterBlock = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  //display: flex;
  justify-content: center;
  font-family: 'Alata', sans-serif;
  padding: 30px;
  //margin: 50px;
  font-size: 20px;
`;
const Up = styled.div`
  display: flex;
  //margin: 30px;
  //padding: 30px;
`;

//const Down = styled.div``;

const FontBule = styled.div`
  color: bule;
`;
const FontGray = styled.div`
  color: gray;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <Up>
        <div>
          <FontBule>VISIT US</FontBule>
          <FontBule>WEST VILLAGE (NYC)</FontBule>
          <FontGray>28 GREENWICH AVE</FontGray>
          <FontGray> NEW YORK, NY 10011</FontGray>
          <FontGray>212.498.9810</FontGray>
        </div>
        <div>
          <FontBule>MIDTOWN (NYC)</FontBule>
          <FontGray>COMING SOON</FontGray>
          <FontGray>601LEXINGTON AVENUE</FontGray>
          <FontGray>NEW YORK, NY 10022</FontGray>
        </div>
        <div>
          <FontBule>WASHIGNTON DC</FontBule>
          <FontGray>MAH-ZE-DAHR BAKERY AT GASTSBY</FontGray>
          <FontGray>COMING SOON</FontGray>
          <FontGray>1201 HALF STREET SE,</FontGray>
          <FontGray>WASHINGTON DC 20003</FontGray>
        </div>
      </Up>
      <div>
        <FontBule>© 2020 MAHZEDAHR BAKERY LLC BRANDING &</FontBule>
        <FontGray>BRANDING & CREATIVE DIRECTION: J’AIME COHEN</FontGray>
        <FontGray>
          PHOTOGRAPHY: KATE MATHIS, STEPHEN KENT JOHNSON, AND VANESSA REES
        </FontGray>
        <FontGray>WEBSITE DESIGN & DEVELOPMENT: W&CO</FontGray>
      </div>
    </FooterBlock>
  );
};
export default Footer;
