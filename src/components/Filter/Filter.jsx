import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { useFilter } from 'hooks';

import { FilterInput } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useFilter();
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
