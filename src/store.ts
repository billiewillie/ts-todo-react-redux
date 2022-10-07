import { configureStore, combineReducers } from '@reduxjs/toolkit';
import asyncTodoReducer from 'features/AsyncTodo/asyncTodoSlice';

const rootReducer = combineReducers({
  asyncTodo: asyncTodoReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;