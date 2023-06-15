import { FilterContainer, FilterLable, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';

import { setFilter } from '../../redux/filterSlice';
export function Filter() {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const valueFilter = evt.currentTarget.value.trim();
    dispatch(setFilter(valueFilter));
  };

  return (
    <FilterContainer>
      <FilterLable>
        Find contacts by name <br />
        <FilterInput
          type="text"
          placeholder="Search..."
          onChange={handleChange}
        />
      </FilterLable>
    </FilterContainer>
  );
}

export default Filter;
