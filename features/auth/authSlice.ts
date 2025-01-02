import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authExtraReducers } from './authReducers';

export interface AuthState {
  user: {
        uid: string;
        name: string;
        email: string;
        photoURL: string;
    } | null;
    token: string | null,
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
    reducers: {},
    extraReducers : authExtraReducers,
});


export default authSlice.reducer;
