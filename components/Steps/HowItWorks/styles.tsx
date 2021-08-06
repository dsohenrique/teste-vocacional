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
  padding: 20px;
  width: 100%;
  text-align: left;
  flex-direction: column;
  gap: 10px;
  position: relative;
  height: fit-content;
  width: 706px;
  color: #111111;
  font-family: InterUI;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.6px;
  @media only screen and (max-width: 600px) {
    min-height: 150px;
    max-width: 96vw;
    background-color: rgba(0, 0, 0, 0.6);
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;
