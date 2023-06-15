import { FilterContainer, FilterLable, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';
export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
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
