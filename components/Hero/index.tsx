import React from 'react';
import TextBaloon from '../TextBaloon';
import { Container, StyledIntroContainer, StyledIntroTitle, StyledIntroSubtitle, StyledDescomplicaIconContainer, StyledDescomplicaIcon, StyledWomanIconContainer, StyledWomanIcon } from './styles'

const Hero = () => <Container>
    <StyledDescomplicaIconContainer>
      <StyledDescomplicaIcon />
    </StyledDescomplicaIconContainer>
    <TextBaloon>
      <StyledIntroContainer>
        <StyledIntroTitle>Olá, eu sou o Descomplikator</StyledIntroTitle>
        <StyledIntroSubtitle>Prepare-se para descobrir grandes coisas sobre o seu futuro!</StyledIntroSubtitle>
      </StyledIntroContainer>
    </TextBaloon>
    <StyledWomanIconContainer>
      <StyledWomanIcon isSmall={true} />
      <StyledWomanIcon isSmall={false} />
    </StyledWomanIconContainer>
  </Container>

export default Hero;
