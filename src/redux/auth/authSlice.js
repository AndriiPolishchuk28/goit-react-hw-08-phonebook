import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, fetchCurrent } from './operations';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = {};
      })
      .addCase(fetchCurrent.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshingUser = false;
      })
      .addCase(fetchCurrent.pending, state => {
        state.isRefreshingUser = true;
      })
      .addCase(fetchCurrent.rejected, state => {
        state.isRefreshingUser = false;
      })
      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending),
        (state, { payload }) => (state.error = payload)
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logout.rejected),
        state => (state.error = null)
      ),
});

export const authReducer = authSlice.reducer;
