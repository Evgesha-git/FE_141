import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({
  users: userReducer
})