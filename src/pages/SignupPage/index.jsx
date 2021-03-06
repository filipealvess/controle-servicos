import React, { useEffect, useState } from 'react';
import Field from '../../components/Inputs/Field';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SizedBox from '../../components/Sections/SizedBox';
import AuthPageTemplate from '../../components/Templates/AuthPageTemplate';
import { createUser } from '../../controllers/userController';
import AlertPopup from '../../components/Popups/AlertPopup';
import { useAuth } from '../../context/AuthContext';

export default function SignupPage() {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();

  useEffect(() => {
    const nameIsNotEmpty = name.length > 0;
    const emailIsNotEmpty = email.length > 0;
    const passwordIsNotEmpty = password.length > 0;

    setButtonIsActive(nameIsNotEmpty && emailIsNotEmpty && passwordIsNotEmpty);
  }, [email, name, password]);

  async function handleFormSubmit(event) {
    event.preventDefault();
    const data = await createUser(name, email, password);

    if (data) {
      setUser(data);
    } else {
      setPopupIsVisible(true);
    }
  }

  return (
    <AuthPageTemplate currentPage="signup" onSubmit={handleFormSubmit}>
      <Field
        label="Nome"
        placeholder="Seu nome"
        value={name}
        onChange={({ target }) => setName(target.value)}
        required
      />

      <Field
        label="E-mail"
        placeholder="Seu e-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        required
      />

      <Field
        label="Senha"
        placeholder="******"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        required
      />

      <SizedBox height={40} />

      <PrimaryButton text="Criar Conta" disabled={!buttonIsActive} />

      <AlertPopup
        title="Erro no cadastro"
        description="J?? existe um usu??rio com o endere??o de e-mail informado"
        isVisible={popupIsVisible}
        onClose={() => setPopupIsVisible(false)}
      />
    </AuthPageTemplate>
  );
}
