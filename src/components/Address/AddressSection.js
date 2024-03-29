import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AddressFields from './AddressFields';
import data from '../../utils/data.json';
import { updateAddress } from '../../actions/addressActions';
import { updateAllDates } from '../../actions/dateActions';
import SelectDate from './Date/SelectDate';

const useStyles = makeStyles({
  padding32: {
    padding: '32px',
  },
});

const AddressSection = ({ updateAddress, updateAllDates }) => {
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
    updateAllDates({
      dates: {
        orderDate: data.orderDate,
        expectedDeliveryDate: data.expectedDeliveryDate,
      },
    });
  }, [updateAddress, updateAllDates]);
  const classes = useStyles();
  return (
    <Paper className={classes.padding32}>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <AddressFields type="billingAddress" />
        </Grid>
        <Grid item xs={12} md={6}>
          <AddressFields type="shippingAddress" />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectDate type="orderDate" />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectDate type="expectedDeliveryDate" />
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  updateAddress: ({ addressType, address }) =>
    dispatch(updateAddress({ addressType, address })),
  updateAllDates: ({ dates }) => dispatch(updateAllDates({ dates })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressSection);
