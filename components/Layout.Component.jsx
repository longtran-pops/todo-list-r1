import React, { Component } from 'react';
// import Header from './Header.component';
import Meta from './Meta.Component';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  white: '#FFFFFF',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyleComp = styled.div`
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.grey};
`;

const GridContainer = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 3rem;
`;

const GlobalStyled = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 12px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Roboto', sans-serif;
  }
`;

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <StyleComp>
        <Meta />
        <GridContainer>{props.children}</GridContainer>
      </StyleComp>
    </ThemeProvider>
  );
};

export default Layout;
