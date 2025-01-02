import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";
import postsReducer from '../features/posts/postsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
});

export default rootReducer;
