import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserData = createAsyncThunk(
  'users/fetchUserData',
  async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    return await resp.json()
  }
)

export default fetchUserData