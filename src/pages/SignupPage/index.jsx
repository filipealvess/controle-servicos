import React, { useEffect, useState } from 'react';
import Field from '../../components/Inputs/Field';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SizedBox from '../../components/Sections/SizedBox';
import AuthPageTemplate from '../../components/Templates/AuthPageTemplate';

export default function SignupPage() {
  const [buttonIsVisible, setButtonIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const nameIsEmpty = name.length === 0;
    const emailIsEmpty = email.length === 0;
    const passwordIsEmpty = password.length === 0;

    if (nameIsEmpty || emailIsEmpty || passwordIsEmpty) {
      setButtonIsVisible(false);
    } else {
      setButtonIsVisible(true);
    }
  }, [email, name, password]);

  return (
    <AuthPageTemplate currentPage="signup">
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

      <PrimaryButton text="Criar Conta" disabled={!buttonIsVisible} />
    </AuthPageTemplate>
  );
}
