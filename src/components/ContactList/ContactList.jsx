import React from 'react';
import css from './ContactList.module.css';
import ContactListItem from 'components/ContactListItem/ContactListItem';

import { getContacts, getFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filterText = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getVisibleContacts = () => {
    const normalizedFilter = filterText.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul className={css.contactList}>
      {getVisibleContacts().map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
