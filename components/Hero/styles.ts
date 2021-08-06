import styled, { css } from 'styled-components';
import DescomplicaIcon from './descomplicaIcon';
import BackIcon from './BackIcon';

export const Container = styled.div<{ imgSize: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 20px);
  padding: 0px 54px 0px 0px;
  background-image: url(https://d3awytnmmfk53d.cloudfront.net/landings/static/images/new-normal/Hero/professor_hansen.png);
  background-position: bottom left;
  background-size: 500px;
  background-repeat: no-repeat;
  @media only screen and (max-width: 1024px) {
    padding: 0px;
  }
`;

export const StyledIntroContainer = styled.div`
  padding: 38px 52px;
  color: black;
  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const StyledIntroTitle = styled.h2`
  font-family: Aprova;
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 64px;
  letter-spacing: -2.4px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -2px;
  }
`;

export const StyledIntroSubtitle = styled.h4`
  font-family: Aprova;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  letter-spacing: -1.6px;
  line-height: 44px;
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 25px;
    line-height: 44px;
    letter-spacing: -1.6px;
  }
`;

export const StyledDescomplicaIconContainer = styled.div`
  padding: 10px 0px 0px 20px;
  @media only screen and (max-width: 600px) {
    padding: 10px 0px;
    position: relative;
  }
`;

export const StyledDescomplicaIcon = styled(DescomplicaIcon)``;

export const StyledBackIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`;

export const StyledBackIcon = styled(BackIcon)``;

export const BackgroundImage = styled.img``;

export const StyledSvg = styled.svg``;

export const ChildrenContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  gap: 10px;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    padding: 0px;
  }
`;

export const StyledProgressBar = styled.div`
  position: absolute;
  width: 70%;
  height: 10px;
  inset-inline: 10px;
  inset-block: 22px;
  margin: 0 auto;
  div {
    border-radius: 10px;
  }
  @media only screen and (max-width: 1000px) {
    width: 50%;
  }
`;

export const BackBar = styled.div`
  position: absolute;
  background-color: #666;
  width: 100%;
  height: 100%;
`;

export const ProgressBar = styled.div<{ percentage?: string }>(
  ({ percentage = '0' }) => css`
    position: absolute;
    background-color: white;
    width: ${percentage}%;
    height: 100%;
    transition: width 250ms ease;
  `
);
