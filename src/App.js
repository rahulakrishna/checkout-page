import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddressSection from './components/Address/AddressSection';
import ItemsList from './components/Items/ItemsList';

function App({ state }) {
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
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '32px', marginBottom: '32px' }}
        onClick={() => console.log({ state })}
      >
        Check out
      </Button>
    </Container>
  );
}

export const mapStateToProps = state => ({
  state,
});

export const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
