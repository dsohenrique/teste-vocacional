import React, { FC } from 'react';
import { StyledBaloonContainer, StyledBaloon } from './styles';

interface IBaloonProps {
  children: any;
  imageSize?: string;
}

const TextBaloon: FC<IBaloonProps> = ({ imageSize, children }) => {
  return <StyledBaloonContainer imageSize={imageSize}>
      <StyledBaloon imageSize={imageSize}>
        {children}
      </StyledBaloon>
    </StyledBaloonContainer>;
};

export default TextBaloon;
