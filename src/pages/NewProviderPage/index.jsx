import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';
import AvatarImageUpload from '../../components/Buttons/AvatarImageUpload';
import Form from '../../components/Sections/Form';
import Field from '../../components/Inputs/Field';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import ServicesList from '../../components/Sections/ServicesList';
import SizedBox from '../../components/Sections/SizedBox';
import { clearPhone, createProvider, formatPhone, uploadImage } from '../../controllers/providerController';
import { useAuth } from '../../context/AuthContext';
import { listServices, clearPrice } from '../../controllers/serviceController';
import { useNavigate } from 'react-router-dom';
import AlertPopup from '../../components/Popups/AlertPopup';
import LoadingPopup from '../../components/Popups/LoadingPopup';

export default function NewProviderPage() {
  const [loadingIsVisible, setLoadingIsVisible] = useState(false);
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [imageSource, setImageSource] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [services, setServices] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

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

    setImageFile(image);
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

  async function handleFormSubmit(event) {
    event.preventDefault();
    setLoadingIsVisible(true);

    const extension = imageFile.name.match(/(.png|.jpg|.jpeg)/)[0];
    const imageName = `${Date.now().toString()}${extension}`;
    const src = await uploadImage(imageFile, imageName);
    const providerServices = services.filter(service => service.isSelected)
      .map(({ id, name, price }) => ({ id, name, price: clearPrice(price) }));
    const data = await createProvider(user.id, src, name, clearPhone(phone), email, providerServices);

    setLoadingIsVisible(false);

    if (data) {
      sessionStorage.setItem('one-provider-was-created', JSON.stringify(true));
      navigate('/prestadores');
    } else {
      setPopupIsVisible(true);
    }
  }

  return (
    <DashboardTemplate currentPage="providers">
      <DashboardHeader
        title="Novo Prestador"
        route="/prestadores"
        hasCancelButton
      />

      <Form onSubmit={handleFormSubmit}>
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

      <AlertPopup
        title="Erro no cadastro"
        description="Não foi possível cadastrar o prestador de serviços, tente novamente mais tarde"
        isVisible={popupIsVisible}
        onClose={() => setPopupIsVisible(false)}
      />

      <LoadingPopup isVisible={loadingIsVisible} />
    </DashboardTemplate>
  );
}
