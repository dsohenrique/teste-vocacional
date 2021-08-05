import React, { FC } from 'react';
import { StyledBaloon } from './styles';

interface IBaloonProps {
  children: any;
}

export const TextBaloon: FC<IBaloonProps> = ({ children }) => {
  return <StyledBaloon>{children}</StyledBaloon>;
};
