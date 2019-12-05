import {
  UPDATE_ALL_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
} from '../utils/constants';

export const updateAllItems = ({ items }) => ({
  type: UPDATE_ALL_ITEMS,
  items,
});

export const addItem = ({ item }) => ({
  type: ADD_ITEM,
  item,
});

export const deleteItem = ({ id }) => ({
  type: DELETE_ITEM,
  id,
});

export const editItem = ({ item }) => ({
  type: EDIT_ITEM,
  item,
});
