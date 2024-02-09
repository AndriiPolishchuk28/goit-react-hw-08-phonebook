import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'users/signup',
  async (info, thunkApi) => {
    try {
      const { data } = await axios.post('users/signup', info);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'users/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'users/logout',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('users/logout', credentials);
      token.unset();
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrent = createAsyncThunk(
  'users/current',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const tokenJwt = state.auth.token;
    if (!tokenJwt) thunkApi.rejectWithValue('You dont have a token');
    try {
      token.set(tokenJwt);
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
