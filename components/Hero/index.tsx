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
  ProgressBarContainer,
  SubmitButton,
} from './styles';

const Hero = ({
  title,
  subtitle,
  imageSize,
  previousStep,
  children,
  percentage,
  onClick,
}: {
  title: string;
  subtitle: string;
  imageSize: string;
  previousStep?: any;
  children: any;
  percentage?: string;
  onClick?: any;
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
      {previousStep && (
        <StyledBackIconContainer>
          <a onClick={previousStep}>
            <StyledBackIcon />
          </a>
        </StyledBackIconContainer>
      )}
      <StyledDescomplicaIconContainer>
        <a href="https://descomplica.com.br" target="_blank" rel="noreferrer">
          <StyledDescomplicaIcon />
        </a>
        {percentage && (
          <ProgressBarContainer>
            <StyledProgressBar>
              <BackBar />
              <ProgressBar percentage={percentage} />
            </StyledProgressBar>
          </ProgressBarContainer>
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
      {onClick && <SubmitButton onClick={onClick}>Continuar</SubmitButton>}
    </Container>
  );
};

export default Hero;
