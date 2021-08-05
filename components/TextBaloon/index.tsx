import React, { FC } from 'react';
import { StyledBaloonContainer, StyledBaloon } from './styles';

interface IBaloonProps {
  children: any;
}

const TextBaloon: FC<IBaloonProps> = ({ children }) => {
  return <StyledBaloonContainer>
      <StyledBaloon>
        {children}
      </StyledBaloon>
    </StyledBaloonContainer>;
};

export default TextBaloon;
