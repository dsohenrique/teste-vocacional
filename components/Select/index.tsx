import React, { FC } from 'react';
import { Select, Option } from './styles';

interface ISelect {
  options: [];
}

export const SelectionCard: FC<ISelect> = ({ options }) => {
  return (
    <Select>
      {options.map((option, index) => (
        <Option key={index}>{option}</Option>
      ))}
    </Select>
  );
};
