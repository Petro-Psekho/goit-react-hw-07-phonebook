import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilterValue } from 'redux/filter/selectors';

import { FilterInput } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  return (
    <label>
      <FilterInput
        name="filter"
        type="text"
        value={filterValue}
        onChange={filterInputValue =>
          dispatch(setFilter(filterInputValue.currentTarget.value))
        }
      />
    </label>
  );
};
