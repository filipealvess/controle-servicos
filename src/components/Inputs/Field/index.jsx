import React, { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import IconButton from '../../Buttons/IconButton';
import Label from '../Label';
import Container, { Input } from './styles';

export default function Field({
  label,
  placeholder,
  type = 'text',
  tip,
  required = false
}) {
  const [icon, setIcon] = useState(<Eye size={18} />);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [inputType, setIinputType] = useState(type);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (type === 'password') {
      setIcon(passwordIsVisible ? <EyeOff size={18} /> : <Eye size={18} />);
      setIinputType(passwordIsVisible ? 'text' : 'password');
    }
  }, [type, passwordIsVisible]);

  return (
    <Label text={label} tip={tip}>
      <Container isActive={isActive}>
        <Input
          type={inputType}
          placeholder={placeholder}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          required={required}
        />

        {type === 'password' && (
          <IconButton onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
            {icon}
          </IconButton>
        )}
      </Container>
    </Label>
  );
}
