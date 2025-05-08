import { usersSlice } from "../reducers/usersSlice";

export const getUserData = () => {
  return async (dispatch) => {
    try {
      dispatch(usersSlice.actions.setLoading())
      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await resp.json()
      dispatch(usersSlice.actions.setUsers(data))
    } catch (error) {
      dispatch(usersSlice.actions.setError(error.message))
    }
  }
}