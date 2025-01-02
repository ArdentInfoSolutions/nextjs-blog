import { fetchPosts } from './postsThunks';
import { PostsState } from './postsSlice';

export const postsExtraReducers = (builder: any) => {
    builder
    .addCase(fetchPosts.pending, (state: PostsState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state: PostsState, action: any) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state: PostsState, action: any) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  };