import React from 'react';
import ProviderItem from '../ProviderItem';
import Grid from './styles';

export default function ProvidersGrid({ providers = [] }) {
  return (
    <Grid>
      {providers.map(provider => (
        <ProviderItem provider={provider} key={provider.id} />
      ))}
    </Grid>
  );
}
