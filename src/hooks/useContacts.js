import { useSelector } from 'react-redux';
import { selectContactsItems } from 'redux/contacts/selectors';

export const useContacts = () => useSelector(selectContactsItems);
