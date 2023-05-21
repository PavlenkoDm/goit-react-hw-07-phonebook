import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://6469e68103bb12ac2094fdf4.mockapi.io/api/';

export const getContacts = createAsyncThunk(
    'contacts/getContacts',
    async (_, thunkApi) => {
        try {
            const response = await fetch(`${BASE_URL}/contacts`);
            if (!response.ok) throw new Error('404');
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkApi) => {
        try {
            const response = await fetch(`${BASE_URL}/contacts/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('404');
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkApi) => {
        try {
            const response = await fetch(`${BASE_URL}/contacts`, {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: { 'content-type': 'application/json' },
            });
            if (!response.ok) throw new Error('404');
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

// export const editTodo = createAsyncThunk(
//   'todos/editTodo',
//   async (editedTodo, thunkApi) => {
//     try {
//       const response = await fetch(`${BASE_URL}/todos/${editedTodo.id}`, {
//         method: 'PUT',
//         body: JSON.stringify(editedTodo),
//         headers: { 'content-type': 'application/json' },
//       });
//       if (!response.ok) throw new Error('404');
//       const data = await response.json();

//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
