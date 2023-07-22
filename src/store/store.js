import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import planetReducer from "../reducers/slices/planetSlices";

export default configureStore({
    reducer:{
        auth: authReducer,
        planet: planetReducer

    }
})