import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
import TextBaloon from '../TextBaloon';
import { Container, StyledIntroContainer, StyledIntroTitle, StyledIntroSubtitle, StyledDescomplicaIconContainer, StyledDescomplicaIcon, ChildrenContainer } from './styles'

const Hero = ({ title, subtitle, imageSize, children }: { title: string, subtitle: string, imageSize: string, children: any }) => {
  const [firstEffect, setFirstEffect] = useState(false);
  useEffect(() => {
    setFirstEffect(false);
    if (!title) {
      setFirstEffect(true);
    }
  }, [title,  subtitle])

  return (<Container imgSize={imageSize}>
    <StyledDescomplicaIconContainer>
      <StyledDescomplicaIcon />
    </StyledDescomplicaIconContainer>
    <TextBaloon>
      <StyledIntroContainer>
        {title && <StyledIntroTitle>
          <Typewriter string={title} delay={20} onComplete={() => { setFirstEffect(true) }} stopBlinkinOnComplete />
        </StyledIntroTitle>}
        {subtitle && <StyledIntroSubtitle>
          {firstEffect && <Typewriter string={subtitle} delay={20} onComplete={() => {}} stopBlinkinOnComplete />}
        </StyledIntroSubtitle>}
      </StyledIntroContainer>
    </TextBaloon>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>
  </Container>);
}

export default Hero;
