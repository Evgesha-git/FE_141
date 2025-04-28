/**
 * @typedef {Object} UsersState
 * @property {Array<any>} users
 * @property {boolean} loading
 * @property {null|string} error
 */

/**
 * @type {UsersState}
 */
const initialValue = {
  users: [],
  loading: false,
  error: null
}

/**
 * @enum
 */
export const usersActionTypes = {
  usersFetching: 'USERS_FETCHING',
  usersSeccess: 'USER_SUCCESS',
  userError: 'USER_ERROR',
}

/**
 * 
 * @param {UsersState} state 
 * @param {{type: string, payload: any}} action 
 * @returns {UsersState}
 */
export const usersReducer = (state = initialValue, action) => {
  switch (action.type) {
    case usersActionTypes.usersFetching:
      return { ...state, loading: true, error: null }
    case usersActionTypes.usersSeccess:
      return { ...state, loading: false, users: action.payload }
    case usersActionTypes.userError:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}