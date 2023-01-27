import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    googleMapsLink: ""
}

const mapSelectorSlice = createSlice({
    name: "mapSelector",
    initialState,
    reducers: {
        setGoogleMapsLink: (state, action) => {
            state.googleMapsLink = action.payload
        }
    }
})

export const { setGoogleMapsLink } = mapSelectorSlice.actions
export default mapSelectorSlice.reducer
