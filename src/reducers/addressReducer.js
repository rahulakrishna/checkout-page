import { UPDATE_ADDRESS, UPDATE_ADDRESS_FIELD } from '../utils/constants';

const initialState = {
  billingAddress: {
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  },
  shippingAddress: {
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ADDRESS: {
      const { addressType, address } = action;
      return {
        ...state,
        [addressType]: {
          ...address,
        },
      };
    }
    case UPDATE_ADDRESS_FIELD: {
      const { addressType, fieldName, value } = action;

      return {
        ...state,
        [addressType]: {
          ...state[addressType],
          [fieldName]: value,
        },
      };
    }
    default: {
      return state;
    }
  }
}
