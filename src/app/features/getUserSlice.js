import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const gettodo = createAsyncThunk("gettodo", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://66c9b35d59f4350f064d32c1.mockapi.io/crud');
    const result = await response.json();
    return result; 
  } catch (error) {
    return rejectWithValue(error.message);
  }      
});

export const createtodo = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
  try {
    const response = await fetch('https://66c9b35d59f4350f064d32c1.mockapi.io/crud', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updatetodo = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://66c9b35d59f4350f064d32c1.mockapi.io/crud/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Redux slice to manage todos
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(gettodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(gettodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(gettodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createtodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(createtodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
      })
      .addCase(createtodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updatetodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatetodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );
      })
      .addCase(updatetodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default todoSlice.reducer;
