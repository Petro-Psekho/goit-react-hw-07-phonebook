import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filter/selectors';

export const useFilter = () => useSelector(getFilterValue);
