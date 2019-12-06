import {
  UPDATE_ALL_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
} from '../utils/constants';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ALL_ITEMS: {
      return action.items;
    }
    case DELETE_ITEM: {
      return state.filter(item => item.id !== action.id);
    }
    case ADD_ITEM: {
      return state.concat({
        ...action.item,
        id: state.length + 1,
      });
    }
    case EDIT_ITEM: {
      let editedArray = state;
      editedArray.splice(
        state.indexOf(state.find(item => item.id === action.item.id)),
        1,
        action.item
      );
      return editedArray;
    }
    default: {
      return state;
    }
  }
}
