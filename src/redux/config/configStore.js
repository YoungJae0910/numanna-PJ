import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../modules/userSlice"
import questSlice from "../modules/questSlice"
import mapSelectorReducer from "../modules/mapSelectorSlice"

const store = configureStore({
    reducer: {
        userSlice: userSlice,
        questSlice: questSlice,
        mapSelector: mapSelectorReducer
    }
})

export default store
