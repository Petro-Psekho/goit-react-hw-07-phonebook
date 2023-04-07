import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsApi from 'services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const contactsItems = await contactsApi.getContacts();
      return contactsItems;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const saveContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const contactToAdd = await contactsApi.addContact({ name, number });
      return contactToAdd;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const contactToDelete = await contactsApi.deleteContact(id);
      return contactToDelete;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
