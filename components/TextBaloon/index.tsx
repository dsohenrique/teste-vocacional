import React, { FC } from 'react';
import { StyledBaloon } from './styles';

interface IBaloonProps {
  children: any;
}

const TextBaloon: FC<IBaloonProps> = ({ children }) => {
  return <StyledBaloon>{children}</StyledBaloon>;
};

export default TextBaloon;
