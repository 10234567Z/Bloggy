import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    signedIn: false,
    username: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.signedIn = true
            state.username = action.payload
        },
        signOut: (state) => {
            state.signedIn = false
            state.username = ""
        }
    }
})

export default userSlice.reducer
export const { signIn, signOut } = userSlice.actions