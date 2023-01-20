import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../modules/userSlice";

const store = configureStore({
  reducer: { userSlice: userSlice },
});

export default store;
