import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: {},
   token: null,
   isLoggedIn: false,
   isLoading: true,
};

const auth = createSlice({
   name: "auth",
   initialState,
   reducers: {
      SET_LOGGED_IN: (state, action) => {
         console.log(action.payload);
      },
   },
});

export const { SET_LOGGED_IN } = auth.actions;

export default auth.reducer;
