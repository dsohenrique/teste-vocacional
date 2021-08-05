import React from 'react';
import TextBaloon from '../TextBaloon';
import { Container, StyledIntroContainer, StyledIntroTitle, StyledIntroSubtitle, StyledDescomplicaIconContainer, StyledDescomplicaIcon } from './styles'

const Hero = ({ title, subtitle, imageSize, children }: { title?: string, subtitle?: string, imageSize: 'big' | 'small', children: any }) => 
(<Container imgSize={imageSize}>
    <StyledDescomplicaIconContainer>
      <StyledDescomplicaIcon />
    </StyledDescomplicaIconContainer>
    <TextBaloon>
      <StyledIntroContainer>
        {title && <StyledIntroTitle>{title}</StyledIntroTitle>}
        {subtitle && <StyledIntroSubtitle>{subtitle}</StyledIntroSubtitle>}
      </StyledIntroContainer>
    </TextBaloon>
    {children}
  </Container>)

export default Hero;
