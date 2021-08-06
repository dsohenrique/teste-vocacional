import React, { FC } from 'react';
import { Input } from './styles';

const InputText = ({ value, onChange }: { value: any, onChange: any }) => {
  return (
    <Input value={value} onChange={onChange} />
  );
};

export default InputText;
