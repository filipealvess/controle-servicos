import React from 'react';
import Label from '../../Inputs/Label';
import EmptySection from '../../Sections/EmptySection';

export default function ServicesList({ services = [] }) {
  return (
    <>
      <Label
        text="Serviços"
        tip="Acesse o menu para adicionar um novo serviço ;)"
      />

      {services.length === 0 && (
        <EmptySection description="Nenhum serviço cadastrado" />
      )}
    </>
  );
}
