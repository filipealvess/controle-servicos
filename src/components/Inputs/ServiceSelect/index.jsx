import React, { useState } from 'react';
import { CheckSquare, Square } from 'react-feather';
import { formatPrice } from '../../../controllers/serviceController';
import Container, { CheckBox, Price } from './styles';

export default function ServiceSelect({ service, onChange = () => {} }) {
  const [isChecked, setIsChecked] = useState(false);
  const [price, setPrice] = useState(formatPrice(`${service.price}`));

  function handleSelection() {
    onChange({ ...service, isSelected: !isChecked });
    setIsChecked(!isChecked);
  }
  
  function handlePriceChange({ target }) {
    const newPrice = formatPrice(target.value);

    onChange({ ...service, isSelected: isChecked, price: newPrice });
    setPrice(newPrice);
  }

  return (
    <Container isChecked={isChecked}>
      <CheckBox onClick={handleSelection}>
        {isChecked ? <CheckSquare size={18} /> : <Square size={18} />}
        {service.name}
      </CheckBox>

      <Price
        value={price}
        onChange={handlePriceChange}
        disabled={!isChecked}
      />
    </Container>
  );
}
