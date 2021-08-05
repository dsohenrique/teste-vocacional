import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  height: 295px;
  width: 239px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: #999 -8px 12px 0px -3px;
`;

export const Icon = styled.div`
  height: auto;
  width: auto;
`;

export const Title = styled.span`
  font-family: Aprova;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -1px;
  text-align: center;
  color: black;
`;

export const MinorCard = styled.div`
  height: 119px;
  width: 259px;
  border-radius: 20px;
  box-shadow: #999 -7px 6px 0px -3px;
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MinorTitle = styled.span`
  font-family: Aprova;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -1.2000000476837158px;
  color: black;
`;
