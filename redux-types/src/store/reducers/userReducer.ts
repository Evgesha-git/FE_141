export interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface Geo {
  lat: number,
  lng: number
}

export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo
}

export interface User {
  id: number,
  name: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company
}

export interface userState {
  users: User[],
  loading: boolean,
  error: null | string
}

export enum UserActionTypes {
  USER_FETCHING = 'USER_FETCHING',
  USER_SUCCESS = 'USER_SUCCESS',
  USER_ERROR = 'USER_ERROR'
}

type FetchingUser = {
  type: UserActionTypes.USER_FETCHING,
}

type SuccessUser = {
  type: UserActionTypes.USER_SUCCESS,
  payload: User[]
}

type ErrorUser = {
  type: UserActionTypes.USER_ERROR,
  payload: string
}

export type UserActons = FetchingUser | SuccessUser | ErrorUser

const initialState: userState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = (state: userState = initialState, action: UserActons): userState => {
  switch (action.type) {
    case UserActionTypes.USER_FETCHING:
      return { ...state, error: null, loading: true }
    case UserActionTypes.USER_SUCCESS:
      return { ...state, error: null, loading: false, users: action.payload }
    case UserActionTypes.USER_ERROR:
      return { ...state, error: action.payload, loading: false, users: [] }
    default:
      return state
  }
}