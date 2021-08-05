import styled from 'styled-components';
import DescomplicaIcon from './descomplicaIcon';
import WomanIcon from './womanIcon';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 20px);
  justify-content: space-between;
  padding: 0px 54px 0px 0px;
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
  font-family: Aprova Sans;
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
  font-family: Aprova Sans;
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
  padding: 46px 0px 0px 46px;
  @media only screen and (max-width: 600px) {
    padding: 0px;
    position: relative;
    display: flex;
    justify-content: center;
  }
`;

export const StyledDescomplicaIcon = styled(DescomplicaIcon)``;

export const StyledWomanIconContainer = styled.div`
  position: relative;
  > * {
    &:first-child {
      display: none;
    }
    &:last-child {
      display: initial;
    }
  }
  @media only screen and (max-width: 600px) {
    > * {
      &:first-child {
        display: initial;
      }
      &:last-child {
      display: none;
      }
    }
  }
`;

export const StyledWomanIcon = styled(WomanIcon)``;

export const BackgroundImage = styled.img`

`;

export const StyledSvg = styled.svg`

`;
