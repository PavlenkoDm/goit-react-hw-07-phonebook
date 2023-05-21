import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer, //contactsSlice.reducer
        filter: filterSlice.reducer,
    },
});
