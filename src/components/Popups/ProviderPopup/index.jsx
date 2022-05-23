import React, { useEffect, useState } from 'react';
import { Briefcase, Mail, Phone, X } from 'react-feather';
import { formatPhone } from '../../../controllers/providerController';
import IconButton from '../../Buttons/IconButton';
import Container, {
  Avatar,
  Content,
  Header,
  Name,
  Profile,
  Section,
  SectionHeader,
  SectionTitle,
  Text
} from './styles';

export default function ProviderPopup({ provider, isVisible, onClose = () => {} }) {
  const [isActive, setIsActive] = useState(isVisible);

  useEffect(() => setIsActive(isVisible), [isVisible]);

  function handleClose() {
    setIsActive(false);
    setTimeout(onClose, 300);
  }

  if (!provider) {
    return <div></div>;
  }

  return (
    <Container isVisible={isVisible} isAnimated={isActive}>
      <Content>
        <Header>
          <Text>Informações do Prestador</Text>
          <IconButton onClick={handleClose}><X /></IconButton>
        </Header>

        <Profile>
          <Avatar src={provider.avatar} />
          <Name>{provider.name}</Name>
        </Profile>

        <Section>
          <SectionHeader>
            <Phone size={14} strokeWidth={3} />
            <SectionTitle>Telefone</SectionTitle>
          </SectionHeader>

          <section>
            <p>{formatPhone(`${provider.phone}`)}</p>
          </section>
        </Section>

        <Section>
          <SectionHeader>
            <Mail size={14} strokeWidth={3} />
            <SectionTitle>E-mail</SectionTitle>
          </SectionHeader>

          <section>
            <p>{provider.email}</p>
          </section>
        </Section>

        <Section>
          <SectionHeader>
            <Briefcase size={14} strokeWidth={3} />
            <SectionTitle>Serviços</SectionTitle>
          </SectionHeader>

          <section>
            {provider.services && provider.services.map((service, index) => (
              <p key={index}>{service}</p>
            ))}
          </section>
        </Section>
      </Content>
    </Container>
  );
}
