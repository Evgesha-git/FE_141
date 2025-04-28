import { combineReducers } from 'redux'
import { cashReducer } from './cashReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
  cash: cashReducer,
  users: usersReducer
})