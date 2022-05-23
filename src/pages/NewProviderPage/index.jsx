import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';
import AvatarImageUpload from '../../components/Buttons/AvatarImageUpload';
import Form from '../../components/Sections/Form';
import Field from '../../components/Inputs/Field';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import ServicesList from '../../components/Sections/ServicesList';
import SizedBox from '../../components/Sections/SizedBox';
import { formatPhone } from '../../controllers/providerController';
import { useAuth } from '../../context/AuthContext';
import { listServices } from '../../controllers/serviceController';

export default function NewProviderPage() {
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [imageSource, setImageSource] = useState('');
  const [services, setServices] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    async function getServices(userID) {
      const data = await listServices(userID);
      const newServices = data.map(({ id, name, default_price }) => {
        return { id, name, price: default_price, isSelected: false };
      });

      setServices(newServices);
    }

    user && getServices(user.id);
  }, [user]);

  useEffect(() => {
    const nameIsNotEmpty = name.length > 0;
    const phoneIsNotEmpty = phone.length > 0;
    const emailIsNotEmpty = email.length > 0;
    const hasSelectedImage = imageSource.length > 0;
    const hasSelectedServices = services.filter(service => service.isSelected).length > 0;
    const fieldsAreNotEmpty = nameIsNotEmpty && phoneIsNotEmpty && emailIsNotEmpty;

    setButtonIsActive(fieldsAreNotEmpty && hasSelectedImage && hasSelectedServices);
  }, [name, phone, email, imageSource, services]);

  function handleImageSelect({ target }) {
    const image = target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(image);
    reader.onload = ({ target }) => {
      setImageSource(target.result);
    };
  }

  function handleServiceChange(updatedService) {
    const updatedServices = services.map(service => {
      return service.id === updatedService.id ? updatedService : service;
    });

    setServices(updatedServices);
  }

  return (
    <DashboardTemplate currentPage="providers">
      <DashboardHeader
        title="Novo Prestador"
        route="/prestadores"
        hasCancelButton
      />

      <Form>
        <AvatarImageUpload onSelect={handleImageSelect} src={imageSource} />

        <Field
          label="Nome"
          placeholder="Nome do prestador"
          required
          value={name}
          onChange={({ target }) => setName(target.value)}
        />

        <Field
          label="Telefone"
          placeholder="(00) 00000-0000"
          type="tel"
          required
          value={phone}
          onChange={({ target }) => setPhone(formatPhone(target.value))}
        />

        <Field
          label="E-mail"
          placeholder="E-mail do prestador"
          type="email"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        <ServicesList services={services} onChange={handleServiceChange} />

        <SizedBox height={40} />

        <PrimaryButton text="Salvar" disabled={!buttonIsActive} />
      </Form>
    </DashboardTemplate>
  );
}
