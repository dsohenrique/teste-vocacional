import React, { FC } from 'react';
import { Alternative } from './styles';

interface IAlternative {
  number: number;
  text: string;
  selected?: boolean;
  onClick?: any;
}

const AlternativeComponent: FC<IAlternative> = ({ number, text, selected, onClick}) => {
  return (
    <Alternative selected={selected || false} onClick={onClick}>
      <span>{number}</span>
      <span>{text}</span>
    </Alternative>
  );
};

export default AlternativeComponent;
