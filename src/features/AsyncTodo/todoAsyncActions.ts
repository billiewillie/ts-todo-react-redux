import { createAsyncThunk } from '@reduxjs/toolkit'
import { Todo } from 'types'
import { TodoSlice } from './asyncTodoSlice';

export const fetchAllTodos = createAsyncThunk<
  Todo[],
  undefined,
  { state: { asyncTodo: TodoSlice } }
>('todos/fetchTodos',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    return await response.json();
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().asyncTodo;

      if (status === 'loading') {
        return false;
      }
    },
  });

export const createTodo = createAsyncThunk<
  Todo,
  string
>('todo/createTodo',
  async (text) => {
    const newTodo: Required<Omit<Todo, 'id'>> = {
      title: text,
      userId: 1,
      completed: false,
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });

    return await response.json();
  });

export const toggleTodo = createAsyncThunk<
  Todo,
  Todo['id'],
  { state: { asyncTodo: TodoSlice }, rejectValue: string }
>('todo/toggleTodo',
  async (id, { getState, rejectWithValue }) => {
    const todo = getState().asyncTodo.list.find(el => el.id === id);
    if (todo) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: !todo.completed
        }),
      });

      if (!response.ok) {
        return rejectWithValue('Impossible to update');
      }

      return await response.json();
    }
  });

export const removeTodo = createAsyncThunk<
  Todo['id'],
  Todo['id'],
  { rejectValue: string }
>('todo/removeTodo',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      return rejectWithValue('Impossible to update');
    }

    return id;
  });