import React from 'react';
import { UserPlus } from 'react-feather';
import Container, { Content } from './styles';

export default function AvatarImageUpload() {
  return (
    <Container>
      <Content>
        <UserPlus color="#FFFFFF" size={32} />
      </Content>

      <input type="file" hidden />
    </Container>
  );
}
