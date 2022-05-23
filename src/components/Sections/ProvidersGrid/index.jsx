import React from 'react';
import Pagination from '../Pagination';
import ProviderItem from '../ProviderItem';
import Grid from './styles';

export default function ProvidersGrid({
  providers = [],
  pages = 0,
  currentPage = 0,
  onChangePage = () => {}
}) {
  return (
    <div>
      {pages > 0 && (
        <Pagination pages={pages} currentPage={currentPage} onChange={onChangePage} />
      )}

      <Grid>
        {providers.map(provider => (
          <ProviderItem provider={provider} key={provider.id} />
        ))}
      </Grid>
    </div>
  );
}
