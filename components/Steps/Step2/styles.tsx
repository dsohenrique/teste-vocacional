import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  position: relative;
  height: fit-content;
  width: 837px;
  border-radius: 65px 65px 65px 0;
  @media only screen and (max-width: 600px) {
    min-height: 150px;
    max-width: 96vw;
    border-radius: 65px;
  }
`;
