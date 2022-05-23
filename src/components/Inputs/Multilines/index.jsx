import React from 'react';
import Label from '../Label';
import Input from './styles';

export default function Multilines({
  label,
  placeholder,
  tip,
  required = false,
  value = '',
  onChange = () => {}
}) {
  return (
    <Label text={label} tip={tip}>
      <Input
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </Label>
  );
}
