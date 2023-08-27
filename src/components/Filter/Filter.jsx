import React from 'react';
import css from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.filterTitle}>
      Filter
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={e => {
          dispatch(filterContacts(e.target.value));
        }}
      ></input>
    </label>
  );
};

export default Filter;
