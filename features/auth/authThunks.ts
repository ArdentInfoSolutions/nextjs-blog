import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, googleProvider } from '../../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

// Async thunk for login
export const loginWithGoogle = createAsyncThunk('auth/loginWithGoogle', async (_, { rejectWithValue }) => {
    try {
            const result = await signInWithPopup(auth, googleProvider);
            const token = await result.user.getIdToken(); // Retrieve the token here
            const { uid, displayName, email, photoURL } = result.user;
            return {
                uid,
                name: displayName || '',
                email: email || '',
                photoURL: photoURL || '',
                token, // Include the token in the returned payload
            };
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to login');
        }
    });
  
// Async thunk for logout
export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      return null; // Return null to reset the user
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to logout');
    }
  });