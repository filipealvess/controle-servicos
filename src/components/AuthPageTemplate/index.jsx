import React from 'react';
import Header from '../Header';
import Tabs from '../Tabs';
import Container, { Form } from './styles';

export default function AuthPageTemplate({ children, currentPage = 'login' }) {
  return (
    <Container>
      <Header />
      <Tabs currentPage={currentPage} />

      <Form>
        {children}
      </Form>
    </Container>
  );
}
