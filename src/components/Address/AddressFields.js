import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import getProperTextFieldLabel from '../../utils/getProperTextFieldLabel';
import { updateAddressField } from '../../actions/addressActions.js';

const getTitle = type => {
  if (type === 'billingAddress') {
    return 'Billing Address';
  } else if (type === 'shippingAddress') {
    return 'Shipping Address';
  }
};

const AddressFields = ({ type, address, updateAddressField }) => {
  const relevantFields = Object.keys(address[type]);
  return (
    <>
      <h3>{getTitle(type)}</h3>
      {relevantFields.map(field => (
        <TextField
          key={field}
          label={getProperTextFieldLabel(field)}
          fullWidth
          value={address[type][field]}
          onChange={e => {
            updateAddressField({
              addressType: type,
              fieldName: field,
              value: e.target.value,
            });
          }}
        />
      ))}
    </>
  );
};

AddressFields.propTypes = {
  type: PropTypes.oneOf(['billingAddress', 'shippingAddress']).isRequired,
};

const mapStateToProps = ({ address }) => ({
  address,
});

const mapDispatchToProps = dispatch => ({
  updateAddressField: ({ addressType, fieldName, value }) =>
    dispatch(updateAddressField({ addressType, fieldName, value })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressFields);
