import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { useFilter } from 'hooks';

import { FilterInput, FilterInputWrap } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useFilter();
  return (
    <FilterInputWrap>
      <FilterInput
        name="filter"
        type="text"
        value={filterValue}
        placeholder="Find contacts by name ..."
        onChange={filterInputValue =>
          dispatch(setFilter(filterInputValue.currentTarget.value))
        }
      />
    </FilterInputWrap>
  );
};
