import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px 198px;
  max-width: 954px;
  margin: 0 auto;
`;

export const Desco = styled.svg`
  position: absolute;
  inset: 20px;
`;

export const Balloon = styled.div`
  position: relative;
  background-color: #00e88f;
  color: black;
  min-height: 200px;
  height: fit-content;
  width: 100%;
  border-radius: 65px 65px 65px 0;

  @media only screen and (max-width: 600px) {
    min-height: 150px;
    max-width: 96vw;
    border-radius: 65px;
  }
`;

export const BalloonTitle = styled.span`
  font-family: Aprova;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -1.600000023841858px;
  text-align: center;
  margin: 0 auto;
  padding: 60px;
  position: absolute;
  width: 90%;

  b {
    font-weight: 700;
  }
`;

export const ProfileTitle = styled.span`
  font-family: Aprova;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -1.600000023841858px;
  text-align: left;
  margin-top: 60px;

  border-bottom: solid 2px #00c974;
`;

export const Description = styled.div`
  //styleName: font / body / large / regular;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.800000011920929px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ProfessionTitle = styled.span`
  //styleName: font / h4 / black;
  font-family: Aprova;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -1.600000023841858px;
  text-align: left;
  border-bottom: solid 2px #00c974;
  margin-top: 95px;
`;

export const ProfessionDescription = styled.span`
  //styleName: font / body / large / regular;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.800000011920929px;
  text-align: left;
  margin-top: 21px;
`;
export const Professions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
`;

export const Personalities = styled.span`
  margin-top: 112px;
  border-bottom: solid 2px #00c974;
  font-family: Aprova;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -1.600000023841858px;
  text-align: left;
`;
export const PersonalitiesList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Personality = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 61px;
  span {
    //styleName: font / h6 / bold;
    font-family: Aprova;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -1px;
    text-align: center;
  }
`;

export const YourAptitude = styled.span`
  //styleName: font / h4 / black;
  font-family: Aprova;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -1.600000023841858px;
  text-align: left;
  margin-top: 145px;
`;
export const StyledApititudes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 46px;
`;
