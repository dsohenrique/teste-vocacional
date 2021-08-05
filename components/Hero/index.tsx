import React from 'react';
import TextBaloon from '../TextBaloon';
import { Container, StyledIntroContainer, StyledIntroTitle, StyledIntroSubtitle, StyledDescomplicaIconContainer, StyledDescomplicaIcon } from './styles'

const Hero = ({ title, subtitle, imageSize, children }) => <Container>
    <StyledDescomplicaIconContainer>
      <StyledDescomplicaIcon />
    </StyledDescomplicaIconContainer>
    <TextBaloon>
      <StyledIntroContainer>
        <StyledIntroTitle>Olá, eu sou o Descomplikator</StyledIntroTitle>
        <StyledIntroSubtitle>Prepare-se para descobrir grandes coisas sobre o seu futuro!</StyledIntroSubtitle>
      </StyledIntroContainer>
    </TextBaloon>
    {children}
  </Container>

export default Hero;
