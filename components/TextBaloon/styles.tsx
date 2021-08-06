import styled from 'styled-components';

export const StyledBaloonContainer = styled.div<{imageSize?: string }>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: ${props => props.imageSize === 'small' ? 'center' : 'flex-end'};
`;

export const StyledBaloon = styled.div<{imageSize?: string }>`
  position: relative;
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
