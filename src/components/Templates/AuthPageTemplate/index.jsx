import React from 'react';
import Form from '../../Sections/Form';
import Header from '../../Sections/Header';
import Tabs from '../../Sections/Tabs';
import Container from './styles';

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
