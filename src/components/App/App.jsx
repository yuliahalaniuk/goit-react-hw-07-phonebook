import React, { useEffect } from 'react';

import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../../redux/contactsOperations';
import { getError } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isError = useSelector(getError);

  if (isError) {
    return (
      <p className={css.errorMessageWrap}>
        <span className={css.errorMessageMain}>Opps...</span>
        <span className={css.errorMessage}>
          {isError}. Please reload the page.
        </span>
      </p>
    );
  }

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactForm />

        <h2 className={css.contactListTitle}>Contacts</h2>

        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
