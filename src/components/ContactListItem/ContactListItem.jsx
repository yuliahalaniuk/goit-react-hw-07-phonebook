import React from 'react';
import PropTypes from 'prop-types';

import css from './ContactListItem.module.css';
import { deleteContacts } from '../../redux/contactsOperations';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      <span>
        <span className={css.contactItemName}>{name}:</span> {number}
      </span>
      <button
        className={css.contactItemBtn}
        type="button"
        onClick={() => {
          dispatch(deleteContacts(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.prorTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ContactListItem;
