import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            // .addCase(getContacts.pending, (state, action) => {
            //     Loading.circle();
            //     state.isLoading = true;
            //     state.error = null;
            // })
            .addCase(getContacts.fulfilled, (state, action) => {
                Loading.remove();
                state.isLoading = false;
                state.items = action.payload;
            })
            // .addCase(getContacts.rejected, (state, action) => {
            //     Loading.remove();
            //     Notify.failure(`${action.payload}`);
            //     state.isLoading = false;
            //     state.error = action.payload;
            // })
            // .addCase(deleteContact.pending, (state, action) => {
            //     Loading.circle();
            //     state.isLoading = true;
            //     state.error = null;
            // })
            .addCase(deleteContact.fulfilled, (state, action) => {
                Loading.remove();
                state.isLoading = false;
                state.items = state.items.filter(
                    item => item.id !== action.payload.id
                );
            })
            // .addCase(deleteContact.rejected, (state, action) => {
            //     Loading.remove();
            //     Notify.failure(`${action.payload}`);
            //     state.isLoading = false;
            //     state.error = action.payload;
            // })
            // .addCase(addContact.pending, (state, action) => {
            //     Loading.circle();
            //     state.isLoading = true;
            //     state.error = null;
            // })
            .addCase(addContact.fulfilled, (state, action) => {
                Loading.remove();
                state.isLoading = false;
                state.items = [...state.items, action.payload];
            })
            // .addCase(addContact.rejected, (state, action) => {
            //     Loading.remove();
            //     Notify.failure(`${action.payload}`);
            //     state.isLoading = false;
            //     state.error = action.payload;
            // })
            .addMatcher(isAnyOf(...getActions('pending')), handlePending)
            .addMatcher(isAnyOf(...getActions('rejected')), handleRej)
            .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled);
    },
});

const handlePending = (state, action) => {
    Loading.circle();
    state.isLoading = true;
    state.err = null;
};

const handleRej = (state, action) => {
    Loading.remove();
    Notify.failure(`${action.payload}`);
    state.isLoading = false;
    state.error = action.payload;
};

const handleFulfilled = state => {
    Loading.remove();
    state.isLoading = false;
};

const extraActions = [getContacts, deleteContact, addContact];

const getActions = type => extraActions.map(action => action[type]);

