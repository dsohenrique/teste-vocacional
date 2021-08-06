import styled from 'styled-components';

export const Alternative = styled.div<{ selected: boolean }>`
  max-width: 855px;
  width: 100%;
  border-radius: 20px;
  cursor: pointer;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 20px;
  box-shadow: #04c974 -10px 11px 0px -3px;
  height: auto;
  span {
    font-family: Aprova;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.800000011920929px;
    text-align: left;
    width: 716px;
  }
  span:first-child {
    border: 3px solid #04c974;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 8px;
    color: #313435;
    font-family: Aprova;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.800000011920929px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  transition: 0.4s;
  ${props => props.selected ? `background-color: lightgray;
  transform: translate(-2px,4px);`: ''}
  ${props => !props.selected && `&:hover {
    transform: translate(2px,-4px);
  }`}

  @media only screen and (max-width: 768px) {
    width: 80%;
    span {
      font-size: 18px;
    }
  }
`;
