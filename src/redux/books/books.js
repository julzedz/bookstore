/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types/types';

const initialState = {
  bookList: {},
};

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rWQMlu9nxXha6w1Sl8Xk/books';

export const fetchBooks = createAsyncThunk(
  types.FETCH_BOOKS,
  async (thunkAPI) => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
export const addBooks = createAsyncThunk(
  types.ADD_BOOK,
  async (payload, thunkAPI) => {
    await axios.post(URL, payload);
    return thunkAPI.dispatch(fetchBooks());
  },
);

export const removeBook = createAsyncThunk(
  types.REMOVE_BOOK,
  async (payload, thunkAPI) => {
    await axios.delete(`${URL}/${payload}`);
    return thunkAPI.dispatch(fetchBooks());
  },
);

const bookSlice = createSlice({
  name: 'GetBookSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      state.bookList = action.payload;
    },
  },
});

export default bookSlice.reducer;
