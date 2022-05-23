import React from 'react';
import PaginationItem from '../../Buttons/PaginationItem';
import Container from './styles';

export default function Pagination({ pages, currentPage, onChange = () => {} }) {
  function pageList() {
    const content = [];

    for (let i = 0; i < pages; i++) {
      content.push({
        id: i,
        page: i + 1,
        isActive: currentPage === (i + 1)
      });
    }

    return content;
  }

  return (
    <Container>
      {pageList().map(({ id, page, isActive }) => (
        <PaginationItem key={id} page={page} isActive={isActive} onChange={onChange} />
      ))}
    </Container>
  );
}
