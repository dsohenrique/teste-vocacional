import React, { FC } from 'react';
import { Alternative } from './styles';

interface IAlternative {
  number: number;
  text: string;
}

export const AlternativeComponent: FC<IAlternative> = ({ number, text }) => {
  return (
    <Alternative>
      <span>{number}</span>
      <span>{text}</span>
    </Alternative>
  );
};
