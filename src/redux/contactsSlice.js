// contactsSlice.js

import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

const handleFetchContactsSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: action.payload,
  };
};

const handleAddContactsSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [action.payload, ...state.items],
  };
};

const handleDeleteContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.filter(item => item.id !== action.payload.id),
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled]: handleFetchContactsSuccess,
    [addContact.fulfilled]: handleAddContactsSuccess,
    [deleteContact.fulfilled]: handleDeleteContactSuccess,
  },
});

export const contactsReducer = contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: (state, action) => {
//       state.items = [...state.items, action.payload];
//     },
//     deleteContact: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     resetContacts: state => {
//       state.items = initialState.items;
//     },
//   },
// });

// export const { addContact, deleteContact, resetContacts } =
//   contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
