import React, { FC } from 'react';
import { Input } from './styles';

const InputText = ({ placeholder, value, onChange }: { placeholder: any, value: any, onChange: any }) => {
  return (
    <Input placeholder={placeholder}  value={value} onChange={onChange} />
  );
};

export default InputText;
