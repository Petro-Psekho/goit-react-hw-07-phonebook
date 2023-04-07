import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-hot-toast';

import {
  ListItem,
  DeleteContactItem,
  ContactItem,
} from 'components/ContactListItem/ContactListItem.styled';
import { AnimationPulse } from 'components/Animation/Animation.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
    toast.error(`${name} removed from contacts`);
  };

  return (
    <AnimationPulse>
      <ListItem key={id}>
        <ContactItem>
          {name}: {number}
        </ContactItem>

        <DeleteContactItem onClick={() => removeContact(id)}>
          <MdDeleteForever size={20} color={'lightCoral'} />
        </DeleteContactItem>
      </ListItem>
    </AnimationPulse>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
