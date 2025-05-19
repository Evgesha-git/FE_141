import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsesData = createAsyncThunk(
  'users/fetchUsersData',
  async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    return resp.json()
  }
)

export default fetchUsesData