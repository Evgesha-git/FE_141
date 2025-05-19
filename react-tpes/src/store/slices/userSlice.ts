import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import fetchUsesData from '../extraAction/userExtra'

export interface Geo {
  lat: number,
  lng: number
}

export interface Adress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo
}

export interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Adress,
  phone: string,
  website: string,
  company: Company
}

interface InitValue {
  loading: boolean,
  users: [] | User[],
  error: null | string
}

const initialValue: InitValue = {
  error: null,
  loading: false,
  users: []
}

export const userSlice = createSlice({
  name: 'users',
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsesData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsesData.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload
        state.loading = false
      })
      .addCase(fetchUsesData.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

const userReducer = userSlice.reducer
export default userReducer