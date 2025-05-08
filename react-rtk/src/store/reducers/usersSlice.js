import { createSlice } from "@reduxjs/toolkit"
import fetchUserData from "../actionCreators/asyncUsers"

const initialState = {
  users: [],
  loading: false,
  error: null
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true
    },
    setError(state, action) {
      state.loading = false,
      state.error = action.payload
    },
    setUser(state, action) {
      if (state.users.length) {
        state.users = [...state.users, action.payload]
      } else {
        state.users = [action.payload]
      }
    },
    setUsers(state, action) {
      state.loading = false
      state.users = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

const usersReducer = usersSlice.reducer
export default usersReducer