import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #234;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2025 E-mart Grocery Web App. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
