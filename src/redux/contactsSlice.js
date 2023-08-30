import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contactsOperations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    isisError: null,
  },

  filter: '',
};

const contactsSlice = createSlice({
  name: 'phonebook',

  initialState,

  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.contacts.isError = null;
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.contacts.isError = action.payload;
      state.contacts.isLoading = false;
    },

    [addContacts.pending]: (state, action) => {
      state.contacts.isError = null;
      state.contacts.isLoading = true;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.contacts.items.push(action.payload);
      state.contacts.isLoading = false;
    },
    [addContacts.rejected]: (state, action) => {
      state.contacts.isError = action.payload;
      state.contacts.isLoading = false;
    },

    [deleteContacts.pending]: (state, action) => {
      state.contacts.isError = null;
      state.contacts.isLoading = true;
    },
    [deleteContacts.fulfilled]: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
      state.contacts.isLoading = false;
    },
    [deleteContacts.rejected]: (state, action) => {
      state.contacts.isError = action.payload;
      state.contacts.isLoading = false;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
