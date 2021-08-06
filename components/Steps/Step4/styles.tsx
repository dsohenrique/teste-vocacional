import styled from 'styled-components';

const fadeIn = `
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.8s;
`;

export const FormContainer = styled.div`
  display: flex;
  padding: 20px 0px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 52px;
  position: relative;
  height: fit-content;
  width: 837px;
  border-radius: 65px 65px 65px 0;
  @media only screen and (max-width: 600px) {
    gap: 10px;
    min-height: 150px;
    max-width: 96vw;
    border-radius: 65px;
  }
  animation: ${fadeIn};
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
