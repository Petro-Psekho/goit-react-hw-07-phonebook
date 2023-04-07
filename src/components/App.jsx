import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Toaster, toast } from 'react-hot-toast';

import {
  selectContactsItems,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';

import { fetchContacts } from 'redux/contacts/operations';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import {
  Container,
  Title,
  ContactsTitle,
  FindContactsTitle,
} from 'components/App.styled';

export default function App() {
  const contactsItems = useSelector(selectContactsItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error === 'ERR_BAD_REQUEST') {
      toast.error('There are some problems! Try again later.');
      return;
    }
    if (error) {
      toast.error(error);
    }
  }, [error]);

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
