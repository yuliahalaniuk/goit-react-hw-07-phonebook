import { configureStore } from '@reduxjs/toolkit';

import contactsSliceReducer from '../redux/contactsSlice';

export const store = configureStore({
  reducer: contactsSliceReducer,
});
