import styled, { css } from 'styled-components';

export const Aptitude = styled.div<{ isOpen: boolean }>(
  ({ isOpen = false }) => css`
    height: ${isOpen ? '375px' : '55px'};
    transition: height 250ms linear;
    max-width: 954px;
    width: 90%;
    border-radius: 8px;
    background-color: white;
    padding: 14px 12px;
    border: 1px solid #cacdce;
    svg {
      transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
      transition: transform 250ms linear;
      align-self: center;
      padding: 0px 14px;
      cursor: pointer;
      user-select: none;
    }
  `
);

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  align-items: center;
`;

export const Percentage = styled.div`
  background-color: #00e88f;
  color: black;
  font-family: Aprova;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -1px;
  text-align: center;
  height: 53px;
  width: 67px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.span`
  font-family: Aprova;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -1px;
  text-align: left;
  color: black;
  user-select: none;
  flex: 1;
  padding-inline: 20px;
  align-self: center;
`;

export const Content = styled.div<{ isOpen: boolean }>(
  ({ isOpen = false }) => css`
    display: flex;
    opacity: ${isOpen ? '1' : '0'};
    transition: opacity ${isOpen ? '1.4s' : '50ms'}; linear;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: calc(806px - 102px);
    margin: 0 auto;
    padding: 6px 102px;
  `
);

export const Text = styled.span`
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.800000011920929px;
  text-align: left;
`;

export const Professions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const Profession = styled.div`
  height: 107px;
  width: 239px;
  border-radius: 20px;
  background-color: #f5f5f5;
  font-family: Aprova;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -1px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: #999 -7px 6px 0px -2px;
  margin-top: 41px;
`;
