import React from 'react';

import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
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
