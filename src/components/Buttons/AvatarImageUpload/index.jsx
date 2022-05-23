import React from 'react';
import { UserPlus } from 'react-feather';
import Container, { Content, Image } from './styles';

export default function AvatarImageUpload({ onSelect = () => {}, src = '' }) {
  return (
    <Container>
      {src.length === 0 && (
        <Content>
          <UserPlus color="#FFFFFF" size={32} />
        </Content>
      )}

      {src.length > 0 && <Image src={src} />}

      <input type="file" hidden onChange={onSelect} accept=".png, .jpg, .jpeg" />
    </Container>
  );
}
