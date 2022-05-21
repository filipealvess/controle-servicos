import React, { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import IconButton from '../../Buttons/IconButton';
import Label from '../Label';
import Container, { Input } from './styles';

export default function Field({ label, placeholder, type = 'text', tip }) {
  const [icon, setIcon] = useState(<Eye size={18} />);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [inputType, setIinputType] = useState(type);

  useEffect(() => {
    if (type === 'password') {
      setIcon(passwordIsVisible ? <EyeOff size={18} /> : <Eye size={18} />);
      setIinputType(passwordIsVisible ? 'text' : 'password');
    }
  }, [type, passwordIsVisible]);

  function handleButtonClick() {
    setPasswordIsVisible(!passwordIsVisible);
  }

  return (
    <Label text={label} tip={tip}>
      <Container>
        <Input type={inputType} placeholder={placeholder} />

        {
          type === 'password' &&
          <IconButton onClick={handleButtonClick}>
            {icon}
          </IconButton>
        }
      </Container>
    </Label>
  );
}