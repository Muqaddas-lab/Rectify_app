import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../src/redux/slices/postsSlice'
import counterReducer from './redux/slices/counterSlice';
import authReducer from './redux/slices/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    posts: postsReducer,
  },
});


