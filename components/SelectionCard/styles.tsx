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
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -1px;
  text-align: center;
`;
