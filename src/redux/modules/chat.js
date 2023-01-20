// src/redux/modules/counterSlice.js
import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: uuidv4(),
    text: "안녕하세요~",
  },
];

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChat: (state, action) => {
      return [...state, action.payload];
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addChat } = chatSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default chatSlice.reducer;
