import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'

export const setupStore = () =>
  configureStore({
    reducer: rootReducer
  })