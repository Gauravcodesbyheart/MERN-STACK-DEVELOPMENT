import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/toolSlice';
export const store = configureStore({
    reducer: todoReducer,
});
