import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  role: null,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
