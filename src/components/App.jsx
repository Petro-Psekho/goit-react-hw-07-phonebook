import { useSelector } from 'react-redux';
import { getContactsItems } from 'redux/contactsSlice';
import { Toaster } from 'react-hot-toast';

import {
  Container,
  Title,
  ContactsTitle,
  FindContactsTitle,
} from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
// import { useGetContactsQuery } from 'services/contactsApi';

export default function App() {
  const contactsItems = useSelector(getContactsItems);

  // const { data, error, isLoading } = useGetContactsQuery();
  // console.log(data);

  return (
    <Container>
      <div>
        <Title>Phonebook</Title>
        <ContactForm />

        <ContactsTitle>Contacts</ContactsTitle>
        <FindContactsTitle>Find contacts by name</FindContactsTitle>
        <Filter />
        {contactsItems.length ? <ContactList /> : <p>No any contacts</p>}
      </div>
      <Toaster />
    </Container>
  );
}
