import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}