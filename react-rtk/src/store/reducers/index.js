import { combineReducers } from "@reduxjs/toolkit";
import cashReducer from "./cashSlice";
import usersReducer from "./usersSlice";

export const rootReducer = combineReducers({
  cash: cashReducer,
  users: usersReducer
})