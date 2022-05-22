import React from 'react';
import Form from '../../Sections/Form';
import Header from '../../Sections/Header';
import Tabs from '../../Sections/Tabs';
import Container from './styles';

export default function AuthPageTemplate({
  children,
  currentPage = 'login',
  onSubmit = () => {}
}) {
  return (
    <Container>
      <Header />
      <Tabs currentPage={currentPage} />

      <Form onSubmit={onSubmit}>
        {children}
      </Form>
    </Container>
  );
}
