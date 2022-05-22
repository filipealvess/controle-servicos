import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';
import Form from '../../components/Sections/Form';
import Field from '../../components/Inputs/Field';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SizedBox from '../../components/Sections/SizedBox';
import Multilines from '../../components/Inputs/Multilines';
import { createService, formatPrice } from '../../controllers/serviceController';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AlertPopup from '../../components/Popups/AlertPopup';

export default function NewServicePage() {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(() => formatPrice(''));
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const nameIsNotEmpty = name.length > 0;
    const descriptionIsNotEmpty = description.length > 0;
    const priceIsNotEmpty = Number(price.replace(/\D/g, '')) > 0;

    setButtonIsActive(nameIsNotEmpty && descriptionIsNotEmpty && priceIsNotEmpty);
  }, [description, name, price]);

  async function handleFormSubmit(event) {
    event.preventDefault();
    const cleanPrice = Number(price.replace(/\D/g, ''));
    const data = await createService(user.id, description, name, cleanPrice);

    if (data) {
      sessionStorage.setItem('one-service-was-created', true);
      navigate('/servicos');
    } else {
      setPopupIsVisible(true);
    }
  }

  return (
    <DashboardTemplate currentPage="services">
      <DashboardHeader
        title="Novo Serviço"
        route="/servicos"
        hasCancelButton
      />

      <Form onSubmit={handleFormSubmit}>
        <Field
          label="Nome"
          placeholder="Nome do serviço"
          required
          value={name}
          onChange={({ target }) => setName(target.value)}
        />

        <Multilines
          label="Descrição"
          placeholder="Descrição do serviço"
          required
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />

        <Field
          label="Preço padrão"
          placeholder="R$ 0,00"
          tip="Poderá ser alterado para cada prestador posteriormente."
          required
          value={price}
          onChange={({ target }) => setPrice(formatPrice(target.value))}
        />

        <SizedBox height={40} />

        <PrimaryButton text="Salvar" disabled={!buttonIsActive} />

        <AlertPopup
          title="Erro no cadastro"
          description="Não foi possível cadastrar o serviço, tente novamente mais tarde"
          isVisible={popupIsVisible}
          onClose={() => setPopupIsVisible(false)}
        />
      </Form>
    </DashboardTemplate>
  );
}
