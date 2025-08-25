import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import User from "./slices/users/userSlice";

const Store = configureStore({
  reducer: {
    user: User,
  },
});

export default Store;
