import { List, Items, BtnDelete } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';

const ContactList = ({ contacts, onDelete, deliting }) => {
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();
  const changedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <List>
      {changedContacts.map(({ id, name, number }) => (
        <Items key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <BtnDelete type="submit" onClick={() => onDelete(id)}>
            {deliting ? 'Deleting...' : 'Delete'}
          </BtnDelete>
        </Items>
      ))}
    </List>
  );
};
export default ContactList;
