import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';
import TextBaloon from '../TextBaloon';
import {
  Container,
  StyledIntroContainer,
  StyledIntroTitle,
  StyledIntroSubtitle,
  StyledDescomplicaIconContainer,
  StyledDescomplicaIcon,
  ChildrenContainer,
  StyledBackIconContainer,
  StyledBackIcon,
  StyledProgressBar,
  BackBar,
  ProgressBar,
} from './styles';

const Hero = ({
  title,
  subtitle,
  imageSize,
  previousStep,
  children,
  percentage,
}: {
  title: string;
  subtitle: string;
  imageSize: string;
  previousStep?: any;
  children: any;
  percentage: string;
}) => {
  const [firstEffect, setFirstEffect] = useState(false);
  useEffect(() => {
    setFirstEffect(false);
    if (!title) {
      setFirstEffect(true);
    }
  }, [title, subtitle]);

  return (
    <Container imgSize={imageSize}>
      <StyledDescomplicaIconContainer>
        {previousStep && (
          <StyledBackIconContainer>
            <a onClick={previousStep}>
              <StyledBackIcon />
            </a>
          </StyledBackIconContainer>
        )}
        <a href="https://descomplica.com.br" target="_blank" rel="noreferrer">
          <StyledDescomplicaIcon />
        </a>
        {percentage && (
          <StyledProgressBar>
            <BackBar />
            <ProgressBar percentage="30" />
          </StyledProgressBar>
        )}
      </StyledDescomplicaIconContainer>

      <TextBaloon>
        <StyledIntroContainer>
          {title && (
            <StyledIntroTitle>
              <Typewriter
                string={title}
                delay={20}
                onComplete={() => {
                  setFirstEffect(true);
                }}
                stopBlinkinOnComplete
              />
            </StyledIntroTitle>
          )}
          {subtitle && (
            <StyledIntroSubtitle>
              {firstEffect && (
                <Typewriter
                  string={subtitle}
                  delay={20}
                  onComplete={() => {}}
                  stopBlinkinOnComplete
                />
              )}
            </StyledIntroSubtitle>
          )}
        </StyledIntroContainer>
      </TextBaloon>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default Hero;
