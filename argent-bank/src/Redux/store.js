import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../Redux/Action/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
