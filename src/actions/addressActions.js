import { UPDATE_ADDRESS, UPDATE_ADDRESS_FIELD } from '../utils/constants';

export const updateAddress = ({ addressType, address }) => ({
  type: UPDATE_ADDRESS,
  addressType,
  address,
});

export const updateAddressField = ({ addressType, fieldName, value }) => ({
  type: UPDATE_ADDRESS_FIELD,
  addressType,
  fieldName,
  value,
});
