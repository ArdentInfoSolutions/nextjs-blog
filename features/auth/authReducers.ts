import { loginWithGoogle, logout } from './authThunks';
import { AuthState } from './authSlice';

export const authExtraReducers = (builder: any) => {
    builder
      .addCase(loginWithGoogle.pending, (state: AuthState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state: AuthState, action: any) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginWithGoogle.rejected, (state: AuthState, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state: AuthState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state: AuthState) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state: AuthState, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  };