import { configureStore } from "@reduxjs/toolkit"
import blogsReducer from "../Reducers/blogsReducer"
import userReducer from "../Reducers/usersReducer"

const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        user: userReducer
    }
})

export default store;
