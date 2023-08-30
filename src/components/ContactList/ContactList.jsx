import React from 'react';
import css from './ContactList.module.css';
import ContactListItem from 'components/ContactListItem/ContactListItem';

import { getContacts, getFilter, getLoading } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const filterText = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const isLoading = useSelector(getLoading);
  const getVisibleContacts = () => {
    const normalizedFilter = filterText.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.contactList}>
          {getVisibleContacts().map(({ id, name, phone }) => (
            <ContactListItem key={id} id={id} name={name} number={phone} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
