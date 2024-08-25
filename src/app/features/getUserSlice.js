import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const gettodo = createAsyncThunk("gettodo", async (args , {rejectWithValue}) => {

    const response = await fetch('https://66c9b35d59f4350f064d32c1.mockapi.io/crud');
    try {
        const result = await response.json();
        return result; 
    } catch (error) {
        return rejectWithValue(error)
    }      
})

export const createtodo = createAsyncThunk ("createUser" , async (data , {rejectWithValue}) => {

    const response = await fetch('https://66c9b35d59f4350f064d32c1.mockapi.io/crud', {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const todoSlice = createSlice({
    name : "todo",
    initialState : {
        todos : [],
        loading : false,
        error : null
    },

    extraReducers : builder => {
        builder
        .addCase(gettodo.pending, (state) => {
            state.loading = true
        })
        .addCase(gettodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
        })
        .addCase(gettodo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createtodo.pending ,  (state) => {
            state.loading = true;
        })
        .addCase(createtodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos.push(action.payload)
        })
        .addCase(createtodo.rejected , (state, action) => {
            state.loading = false;
            state.todos = action.payload.message;
        })
    }
})

export default todoSlice.reducer


