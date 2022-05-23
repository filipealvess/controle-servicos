import React from 'react';
import ProviderItem from '../ProviderItem';
import Grid from './styles';

export default function ProvidersGrid({ providers = [], onClick = () => {} }) {
  return (
    <Grid>
      {providers.map(provider => (
        <ProviderItem
          provider={provider}
          key={provider.id}
          onClick={onClick}
        />
      ))}
    </Grid>
  );
}
