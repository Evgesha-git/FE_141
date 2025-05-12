import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice/userSlice'

export const rootReducer = combineReducers({
  user: userReducer
})