import { createSlice } from '@reduxjs/toolkit';
// createSlice() ek helper function hai jo:state banata hai..actions banata hai ..reducers define karta hai.. Yani sab kuch ek jagah manage hota hai.
const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: true, userName: "" },
  reducers: {
    signin: (state) => { state.isAuthenticated = true; },
    logout: (state) => { state.isAuthenticated = false; }
  }
});
export const { signin, logout } = authSlice.actions;
export default authSlice.reducer;


//object-> Data structure with key-value	state-> Current status/data of the component

