import { useSelector } from 'react-redux';
import { selectError } from 'redux/contacts/selectors';

export const useError = () => useSelector(selectError);
