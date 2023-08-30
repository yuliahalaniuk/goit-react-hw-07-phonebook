import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchData = async () => {
  const data = await fetch(
    'https://64d2167df8d60b1743616ee9.mockapi.io/contacts'
  );

  if (!data.ok) {
    throw new Error(`Request failed with status: ${data.status}`);
  }
  return await data.json();
};

// --------------------------------------------

const deleteData = async id => {
  const data = await fetch(
    `https://64d2167df8d60b1743616ee9.mockapi.io/contacts/${id}`,
    {
      method: 'DELETE',
    }
  );

  if (!data.ok) {
    throw new Error(`Request failed with status: ${data.status}`);
  }

  return await data.json();
};

// --------------------------------------------

const addData = async contactToAdd => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contactToAdd),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  const data = await fetch(
    'https://64d2167df8d60b1743616ee9.mockapi.io/contacts',
    options
  );

  if (!data.ok) {
    throw new Error(`Request failed with status: ${data.status}`);
  }

  return await data.json();
};

// --------------------- Thunk ----------------------------

export const fetchContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'phonebook/addContact',
  async (contactToAdd, { rejectWithValue }) => {
    try {
      const response = await addData(contactToAdd);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'phonebook/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteData(id);
      return response.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
