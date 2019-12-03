import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AddressFields from './AddressFields';
import data from '../../utils/data.json';
import { updateAddress } from '../../actions/addressActions';

const AddressSection = ({ updateAddress }) => {
  useEffect(() => {
    // Get the JSON data and update address here
    updateAddress({
      addressType: 'shippingAddress',
      address: data.shippingAddress,
    });
    updateAddress({
      addressType: 'billingAddress',
      address: data.billingAddress,
    });
  }, [updateAddress]);
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} md={6}>
        <AddressFields type="billingAddress" />
      </Grid>
      <Grid item xs={12} md={6}>
        <AddressFields type="shippingAddress" />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  updateAddress: ({ addressType, address }) =>
    dispatch(updateAddress({ addressType, address })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressSection);
