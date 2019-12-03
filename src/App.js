import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AddressSection from './components/Address/AddressSection';

function App() {
  return (
    <Container maxWidth="md">
      <Grid item xs={12}>
        <h1>Check out</h1>
      </Grid>
      <Grid item xs={12}>
        <AddressSection />
      </Grid>
    </Container>
  );
}

export default App;
