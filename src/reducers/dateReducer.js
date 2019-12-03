import { UPDATE_ALL_DATES, UPDATE_DATE } from '../utils/constants';
const initialState = {
  orderDate: new Date(),
  expectedDeliveryDate: new Date(),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ALL_DATES: {
      const { dates } = action;
      return {
        ...dates,
      };
    }
    case UPDATE_DATE: {
      const { dateType, date } = action;
      return {
        ...state,
        [dateType]: date,
      };
    }
    default: {
      return state;
    }
  }
}
