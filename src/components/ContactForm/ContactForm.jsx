import React, { useState } from 'react';

import css from './ContactForm.module.css';

import { nanoid } from 'nanoid';
import { getContacts } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const addNewContact = ({ name, number }) => {
    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in your contacts.`)
      : dispatch(addContact({ name, number, id: nanoid() }));
  };

  const inputChangeHandle = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.currentTarget.elements;
    addNewContact({ name: name.value, number: number.value, id: nanoid() });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.formInput}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={inputChangeHandle}
          placeholder="Jack Sparrow"
        ></input>
      </label>

      <label className={css.formLabel}>
        Number
        <input
          className={css.formInput}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
          onChange={inputChangeHandle}
          placeholder="+380 000 000 000"
        ></input>
      </label>

      <button type="submit" className={css.addContactBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
