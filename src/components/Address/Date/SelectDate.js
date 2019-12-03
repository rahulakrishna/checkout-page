import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DatePicker } from '@material-ui/pickers';
import { updateDate } from '../../../actions/dateActions';

const getLabel = type => {
  if (type === 'orderDate') {
    return 'Order Date';
  } else {
    return 'Expected Delivery Date';
  }
};

const SelectDate = ({ type, date, updateDate }) => {
  return (
    <DatePicker
      label={getLabel(type)}
      value={date[type]}
      onChange={date => updateDate({ dateType: type, date })}
      animateYearScrolling
    />
  );
};

const mapStateToProps = ({ date }) => ({ date });

const mapDispatchToProps = dispatch => ({
  updateDate: ({ dateType, date }) => dispatch(updateDate({ dateType, date })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectDate);
