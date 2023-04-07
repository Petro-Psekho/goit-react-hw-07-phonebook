import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Toaster, toast } from 'react-hot-toast';

import { fetchContacts } from 'redux/contacts/operations';
import { useContacts, useLoading, useError } from 'hooks';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Spinner } from 'components/Spinner/Spinner';

import {
  Container,
  Title,
  ContactsTitle,
  FindContactsTitle,
  TadaDiv,
} from 'components/App.styled';

export default function App() {
  const contactsItems = useContacts();
  const isLoading = useLoading();
  const error = useError();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error === 'ERR_BAD_REQUEST') {
      toast.error('Something went wrong, try again later');
      return;
    }
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Container>
      {isLoading && <Spinner />}

      <div>
        <Title>Phonebook</Title>
        <TadaDiv>
          <ContactForm />
        </TadaDiv>

        <ContactsTitle>Contacts</ContactsTitle>
        <FindContactsTitle>Find contacts by name</FindContactsTitle>
        <Filter />
        {contactsItems.length ? <ContactList /> : <p>No any contacts</p>}
      </div>
      <Toaster />
    </Container>
  );
}
