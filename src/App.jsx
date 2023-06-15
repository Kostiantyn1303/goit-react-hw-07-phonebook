import { ContactForm } from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { AppContainer, Title, Subtitle } from './App.styled';
import {
  useFetchContactsQuery,
  useDeleteContactsMutation,
} from 'redux/contactsSlice';
import Loader from 'components/Loading/Loading';

export function App() {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContacts, { isLoading: isDeliting }] =
    useDeleteContactsMutation();

  return (
    <AppContainer>
      {isFetching && <Loader />}
      <Title>Phonebook</Title>
      <ContactForm contacts={data} />

      <Subtitle>Contacts</Subtitle>

      <Filter />
      {data && (
        <ContactList
          contacts={data}
          onDelete={deleteContacts}
          deliting={isDeliting}
        />
      )}
    </AppContainer>
  );
}
