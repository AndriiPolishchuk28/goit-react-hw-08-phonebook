import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contactsScope: contactsReducer,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const reducer = (state = initialState, { payload, type }) => {
//   switch (type) {
//     case 'contact/add':
//       return {
//         ...state,
//         contacts: [...state.contacts, payload],
//       };
//     case 'contact/delete':
//       return {
//         ...state,
//         contacts: state.contacts.filter(elem => elem.id !== payload),
//       };
//     case 'filter':
//       return {
//         ...state,
//         filter: payload,
//       };

//     default:
//       return state;
//   }
// };
