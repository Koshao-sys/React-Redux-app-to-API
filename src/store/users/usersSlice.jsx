import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: true,
  error: '',
}

const url = 'https://randomuser.me/api/?results=5';

export const getUsers = createAsyncThunk('user/getUsers', async (_, thunkAPI) => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

const usersSlice = createSlice({
  name: 'name',
  initialState,
  extraReducers: {
    [getUsers.pending]:(state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]:(state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]:(state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export default usersSlice.reducer;