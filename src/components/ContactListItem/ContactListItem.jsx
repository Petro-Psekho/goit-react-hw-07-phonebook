import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { MdDeleteForever } from 'react-icons/md';
import { useGetContactsQuery } from 'services/contactsApi';

import {
  ListItem,
  DeleteContactItem,
  ContactItem,
} from 'components/ContactListItem/ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const { data, error, isLoading } = useGetContactsQuery();
  console.log(data);

  const dispatch = useDispatch();
  return (
    <ListItem key={id}>
      <ContactItem>
        {name}: {number}
      </ContactItem>

      <DeleteContactItem onClick={() => dispatch(deleteContact({ id: id }))}>
        <MdDeleteForever size={20} color={'lightCoral'} />
      </DeleteContactItem>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
