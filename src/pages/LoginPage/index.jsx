import React, { useEffect, useState } from 'react';
import AlertPopup from '../../components/Popups/AlertPopup';
import Field from '../../components/Inputs/Field';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SizedBox from '../../components/Sections/SizedBox';
import AuthPageTemplate from '../../components/Templates/AuthPageTemplate';
import { login } from '../../controllers/userController';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();

  useEffect(() => {
    const emailIsNotEmpty = email.length > 0;
    const passwordIsNotEmpty = password.length > 0;

    setButtonIsActive(emailIsNotEmpty && passwordIsNotEmpty);
  }, [email, password]);

  async function handleFormSubmit(event) {
    event.preventDefault();
    const data = await login(email, password);

    if (data) {
      setUser(data);
    } else {
      setPopupIsVisible(true);
    }
  }

  return (
    <AuthPageTemplate onSubmit={handleFormSubmit}>
      <Field
        label="E-mail"
        placeholder="Seu e-mail"
        type="email"
        required
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />

      <Field
        label="Senha"
        placeholder="******"
        type="password"
        required
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <SizedBox height={40} />

      <PrimaryButton text="Entrar" disabled={!buttonIsActive} />

      <AlertPopup
        title="Erro no login"
        description="E-mail e/ou senha estão incorretos"
        isVisible={popupIsVisible}
        onClose={() => setPopupIsVisible(false)}
      />
    </AuthPageTemplate>
  );
}
