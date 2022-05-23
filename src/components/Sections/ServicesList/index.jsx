import React from 'react';
import Label from '../../Inputs/Label';
import ServiceSelect from '../../Inputs/ServiceSelect';
import EmptySection from '../../Sections/EmptySection';

export default function ServicesList({ services = [], onChange = () => {} }) {
  return (
    <>
      <Label
        text="Serviços"
        tip="Acesse o menu para adicionar um novo serviço ;)"
      />

      {services.length === 0 && (
        <EmptySection description="Nenhum serviço cadastrado" />
      )}

      {services.map(service => (
        <ServiceSelect key={service.id} service={service} onChange={onChange} />
      ))}
    </>
  );
}
