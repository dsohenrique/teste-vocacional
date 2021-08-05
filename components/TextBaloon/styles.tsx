import styled from 'styled-components';

export const StyledBaloonContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const StyledBaloon = styled.div`
  background-color: white;
  min-height: 200px;
  height: fit-content;
  width: 837px;
  border-radius: 65px 65px 65px 0;
  @media only screen and (max-width: 600px) {
    min-height: 150px;
    max-width: 96vw;
    border-radius: 65px;
  }
`;
