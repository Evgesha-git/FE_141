import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cash: 5
}

export const cashSlice = createSlice({
  name: 'cash',
  initialState,
  reducers: {
    getCash(state, action) {
      state.cash = state.cash - action.payload
    },
    setCash(state, action) {
      state.cash = state.cash + action.payload
    }
  }
})

const cashReducer = cashSlice.reducer
export default cashReducer