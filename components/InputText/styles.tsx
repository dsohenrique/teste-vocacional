import styled from 'styled-components';

export const Input = styled.input`
  width: 467px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 20px;
  padding: 16px 20px;
  border: none;
  box-shadow: none;
  margin-bottom: 30px;
  &:active {
    border: none;
    box-shadow: none;
  }
  &:focus {
    border: none;
    box-shadow: none;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const Option = styled.option``;
