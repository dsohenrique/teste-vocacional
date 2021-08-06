import styled from 'styled-components';

export const StyledActionButton = styled.button<{ isDark?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 60px;
  font-weight: 800;
  width: 300px;
  background-color: ${(props) => props.isDark ? '#111111' : '#ffffff'};
  border: 2px solid ${(props) => props.isDark ? '#ffffff' : 'transparent'};
  color: ${(props) => props.isDark ? '#ffffff' : '#111111'};
  box-shadow: none;
  border-radius: 35px;
  transition: 0.3s;
  font-family: Aprova;
  font-size: 20px;
  &:hover {
    background-color: ${(props) => props.isDark ? '#ffffff' : '#00e88f'};
    border: 2px solid ${(props) => props.isDark ? 'transparent' : '#ffffff'};
    color: ${(props) => props.isDark ? '#00e88f' : '#ffffff'};
  }
  @media only screen and (max-width: 600px) {
    width: 200px;
    font-size: 14px;
  }
`;
