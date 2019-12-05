import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AddressSection from './components/Address/AddressSection';
import ItemsList from './components/Items/ItemsList';

function App() {
  return (
    <Container maxWidth="md">
      <Grid item xs={12}>
        <h1>Check out</h1>
      </Grid>
      <Grid item xs={12}>
        <AddressSection />
      </Grid>
      <Grid item xs={12}>
        <ItemsList />
      </Grid>
    </Container>
  );
}

export default App;
