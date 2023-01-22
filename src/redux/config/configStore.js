import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../modules/userSlice"
import questSlice from "../modules/questSlice"

const store = configureStore({
    reducer: { userSlice: userSlice, questSlice: questSlice }
})

export default store
