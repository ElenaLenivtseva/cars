import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


  
export const registerSlice = createSlice({
  name: "register",
  initialState: [],
  reducers: {
    sendForm(state, action){

    }
  },
  extraReducers: (builder) => {
    
  },
});

// export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

// export default registerSlice.reducer;
