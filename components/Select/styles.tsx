import styled from 'styled-components';

export const Select = styled.select`
  height: 88px;
  width: 512px;
  border-radius: 8px;
  font-family: Aprova;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.800000011920929px;
  text-align: left;
  outline: none;
  max-width: 834px;
  width: 100%;
  color: #636769;
  appearance: none;

  &:before,
  &:after {
    box-sizing: border-box;
    content: '';
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`;

export const Option = styled.option``;
