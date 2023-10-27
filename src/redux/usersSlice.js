import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  return await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json()
  );
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: false,
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default usersSlice.reducer;