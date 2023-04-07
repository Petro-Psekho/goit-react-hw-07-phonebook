import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Toaster, toast } from 'react-hot-toast';

import { fetchContacts } from 'redux/contacts/operations';
import { useContacts, useLoading, useError } from 'hooks';

import { FaAddressCard } from 'react-icons/fa';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Spinner } from 'components/Spinner/Spinner';

import {
  Container,
  Title,
  ContactsTitle,
  FindContactsTitle,
  TitleWrap,
} from 'components/App.styled';

import { AnimationTada } from 'components/Animation/Animation.styled';

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
        <TitleWrap>
          <FaAddressCard size={32} color={'#0d85fe'} />
          <Title>Phonebook</Title>
        </TitleWrap>

        <AnimationTada>
          <ContactForm />
        </AnimationTada>

        <ContactsTitle>Contacts</ContactsTitle>
        <FindContactsTitle>Find contacts by name</FindContactsTitle>
        <Filter />
        {contactsItems.length ? <ContactList /> : <p>No any contacts</p>}
      </div>
      <Toaster />
    </Container>
  );
}
