import React from 'react';
import Label from '../Label';
import Input from './styles';

export default function Multilines({ label, placeholder, tip }) {
  return (
    <Label text={label} tip={tip}>
      <Input placeholder={placeholder} />
    </Label>
  );
}
