import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

const fontRepo = 'https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts';

const imports = `
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
`;

const Header: FC = () => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
    {imports}
  </Helmet>
);

export default Header;
