import { UPDATE_ALL_DATES, UPDATE_DATE } from '../utils/constants';

export const updateAllDates = ({ dates }) => ({
  type: UPDATE_ALL_DATES,
  dates,
});

export const updateDate = ({ dateType, date }) => ({
  type: UPDATE_DATE,
  dateType,
  date,
});
