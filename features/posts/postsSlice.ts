import { createSlice } from '@reduxjs/toolkit';
import { postsExtraReducers } from './postsReducers';

export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: postsExtraReducers,
});

export default postsSlice.reducer;
