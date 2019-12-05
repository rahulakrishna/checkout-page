import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import {
  updateAllItems,
  addItem,
  deleteItem,
  editItem,
} from '../../actions/itemsActions';
import data from '../../utils/data.json';

const rows = [
  { value: 'productId', width: '80px', type: 'number' },
  { value: 'productName', width: '160px', type: 'text' },
  { value: 'quantity', width: '70px', type: 'number' },
  { value: 'unitPrice', width: '80px', type: 'number' },
  { value: 'totalPrice', width: '80px', type: 'number' },
  { value: 'notes', width: '104px', type: 'text' },
  { value: 'actions', width: '', type: '' },
];

const getRowTitle = row => {
  switch (row) {
    case 'productId': {
      return 'Product ID';
    }
    case 'productName': {
      return 'Product Name';
    }
    case 'quantity': {
      return 'Quantity';
    }
    case 'unitPrice': {
      return 'Unit Price';
    }
    case 'totalPrice': {
      return 'Total Price';
    }
    case 'notes': {
      return 'Notes';
    }
    case 'actions': {
      return '';
    }
    default: {
      return '';
    }
  }
};

const useStyles = makeStyles({
  marginTopBottom32: {
    marginTop: '32px',
    marginBottom: '32px',
  },
});

const getCellValue = ({ data, row, deleteItem }) => {
  if (row.value === 'totalPrice') {
    return data.unitPrice * data.quantity;
  }
  if (row.value === 'actions') {
    return (
      <>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => deleteItem({ productId: data.id })}
        >
          <DeleteIcon />
        </IconButton>
      </>
    );
  }
  return data[row.value];
};

const Row = ({ data, deleteItem }) => (
  <TableRow>
    {rows.map(row => (
      <TableCell>{getCellValue({ data, row, deleteItem })}</TableCell>
    ))}
  </TableRow>
);

const InputRow = ({ formData, setFormData, addItem, setAddRowMode }) => (
  <>
    {Object.keys(formData).map(field => {
      if (field === 'totalPrice') {
        return (
          <TableCell>
            <TextField
              label={getRowTitle(field)}
              value={formData.unitPrice * formData.quantity}
              disabled
              type={rows.find(row => row.value === field).type}
              multiline={field === 'notes'}
            />
          </TableCell>
        );
      }
      return (
        <TableCell>
          <TextField
            label={getRowTitle(field)}
            fullWidth
            value={formData[field]}
            onChange={e =>
              setFormData({
                ...formData,
                [field]: e.target.value,
              })
            }
            type={rows.find(row => row.value === field).type}
            multiline={field === 'notes'}
          />
        </TableCell>
      );
    })}
    <TableCell>
      <IconButton
        aria-label="submit"
        onClick={() => {
          setAddRowMode(false);
          addItem({ item: formData });
          setFormData({
            productId: '',
            productName: '',
            quantity: '',
            unitPrice: '',
            totalPrice: '',
            notes: '',
          });
        }}
      >
        <SendIcon />
      </IconButton>
    </TableCell>
  </>
);

const ItemsList = ({ items, deleteItem, updateAllItems, addItem }) => {
  useEffect(() => {
    updateAllItems({ items: data.items });
  }, [updateAllItems]);
  const classes = useStyles();
  const [formData, setFormData] = useState({
    productId: '',
    productName: '',
    quantity: '',
    unitPrice: '',
    totalPrice: '',
    notes: '',
  });
  const [addRowMode, setAddRowMode] = useState(false);
  return (
    <Paper className={classes.marginTopBottom32}>
      <Table>
        <TableHead>
          <TableRow>
            {rows.map(row => (
              <TableCell style={{ width: row.width }}>
                {getRowTitle(row.value)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(data => (
            <Row data={data} deleteItem={deleteItem} />
          ))}
          {addRowMode && (
            <InputRow
              formData={formData}
              setFormData={setFormData}
              addItem={addItem}
              setAddRowMode={setAddRowMode}
            />
          )}
        </TableBody>
      </Table>
      {!addRowMode && (
        <Button primary onClick={setAddRowMode}>
          Add Item
        </Button>
      )}
    </Paper>
  );
};

const mapStateToProps = ({ items }) => ({
  items,
});

const mapDispatchToProps = dispatch => ({
  deleteItem: ({ productId }) => dispatch(deleteItem({ productId })),
  updateAllItems: ({ items }) => dispatch(updateAllItems({ items })),
  addItem: ({ item }) => dispatch(addItem({ item })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);
