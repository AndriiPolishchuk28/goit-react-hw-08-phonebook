import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

const postContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

const editContact = async contact => {
  const response = await axios.patch(`/contacts/${contact.id}`, contact.values);
  return response.data;
};

export const getContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      return await fetchContacts();
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/add',
  async (newContact, thunkApi) => {
    try {
      return await postContact(newContact);
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  `contacts/delete`,
  async (id, thunkApi) => {
    try {
      return await deleteContact(id);
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  'contacts/edit',
  async (contact, thunkApi) => {
    try {
      return await editContact(contact);
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
