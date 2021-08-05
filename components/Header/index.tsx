/* eslint-disable @next/next/no-page-custom-font */
import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

const fontRepo = 'https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Aprova';
    src:url('${fontRepo}/aprova-sans/Aprova-Regular.woff2') format('woff2'), 
    url('${fontRepo}/aprova-sans/Aprova-Regular.woff') format('woff'), 
    url('${fontRepo}/aprova-sans/Aprova-Regular.otf') format('opentype'), 
    url('${fontRepo}/aprova-sans/Aprova-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face{
    font-family: 'Aprova';
    src:url('${fontRepo}/aprova-sans/Aprova-Bold.woff2') format('woff2'), 
    url('${fontRepo}/aprova-sans/Aprova-Bold.woff') format('woff'), 
    url('${fontRepo}/aprova-sans/Aprova-Bold.otf') format('opentype'), 
    url('${fontRepo}/aprova-sans/Aprova-Bold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  } 
  
  @font-face {
    font-family: "InterUI";
    src: url(${fontRepo}/inter-ui/Inter-UI-Regular.woff2)
        format("woff2"),
      url(${fontRepo}/inter-ui/Inter-UI-Regular.woff)
        format("woff");
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: "VanguardCF";
    src: url(${fontRepo}/vanguard/Vanguard-CF-Bold.otf)
      format("opentype");
    font-style: normal;
  }
  
  html,
  body {
    font-family: "Aprova", sans-serif;
    background-color: #000000;
  }

  h1, h2, h3, h4, h5, p {
    font-family: "Aprova", sans-serif;
  }
`;

const Header: FC = () => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
  </Helmet>
);

export default Header;
