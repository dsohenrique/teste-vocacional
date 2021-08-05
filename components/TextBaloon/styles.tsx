import styled from 'styled-components';

export const StyledBaloonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const StyledBaloon = styled.div`
  background-color: white;
  min-height: 275px;
  width: 837px;
  border-radius: 65px 65px 65px 0;
  padding: 15px;
  margin: 0px 20px;
  @media only screen and (max-width: 600px) {
    min-height: 150px;
    width: 600px;
    border-radius: 65px;
  }
`;
