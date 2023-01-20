import chat from "../modules/chat";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { chat: chat },
});

export default store;
