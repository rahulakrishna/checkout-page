export default function getProperTextFieldLabel(field) {
  switch (field) {
    case 'firstName': {
      return 'First Name';
    }
    case 'lastName': {
      return 'Last Name';
    }
    case 'addressLine1': {
      return 'Address Line 1';
    }
    case 'addressLine2': {
      return 'Address Line 2';
    }
    case 'city': {
      return 'City';
    }
    case 'state': {
      return 'State';
    }
    case 'zipCode': {
      return 'ZIP Code';
    }
    case 'country': {
      return 'Country';
    }
    default: {
      return null;
    }
  }
}
