import React, { FC } from 'react';
import { Select, Option } from './styles';

interface ISelect {
  options: string[];
  value: any;
  onChange: any;
}

const SelectionCard: FC<ISelect> = ({ options, value, onChange }) => {
  return (
    <Select id="course-select" value={value} onChange={onChange}>
      <Option value="">Selecione uma opção</Option>
      {options.map((option, index) => (
        <Option key={index}>{option}</Option>
      ))}
    </Select>
  );
};

export default SelectionCard;
