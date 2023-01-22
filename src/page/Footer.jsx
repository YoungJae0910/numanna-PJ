import React from 'react';
import styled from 'styled-components';
import { Container, Box } from '@mui/material';
import logo_empty from '../assets/logo_empty.png';
import numanna_logo from '../assets/numanna_logo.png';
import { Logo } from '../page/Header';

const Footer = () => {
  return (
    <FooterWrap>
      <Container
        maxWidth='lg'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Logo>
            <img src={logo_empty} alt='로고' height='40px' />
            <img src={numanna_logo} alt='글씨로고' height='40px' />
          </Logo>
        </Box>
        <Box>
          <CopyRight>Copyright 2023. Numanna All rights reserved.</CopyRight>
        </Box>
      </Container>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.footer`
  width: 100%;
  background-color: #f2f2f2;
  margin-top: 3rem;
`;

const CopyRight = styled.p`
  font-size: 12px;
  color: #555;
`;
