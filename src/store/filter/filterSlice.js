import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
        filter: (state, action) => {
            console.log(action.payload)
            return state = action.payload;
        },
    },
});

export const { filter } = filterSlice.actions;