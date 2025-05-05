import type { Dispatch } from "redux"
import { UserActionTypes, type User, type UserActons } from "../reducers/userReducer"

export const getUsers = () => {
  return async (dispatch: Dispatch<UserActons>) => {
    dispatch({ type: UserActionTypes.USER_FETCHING })
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
      const users: User[] = await resp.json()
      // throw new Error('Просто ошибка')
      dispatch({ type: UserActionTypes.USER_SUCCESS, payload: users })
    } catch (error) {     
      if (error instanceof Error) {
        dispatch({ type: UserActionTypes.USER_ERROR, payload: error.message })
      }
    }
  }
}

// export const removeTask = (id: number) => {

// }

// export const removeAllTasck = () => {

// }

/**
 * ToDo лист:
 * Редактирование
 * Отметка о выполнении
 * При создании указывать время, до которого задачяа должна быть выполнена
 * Статус просроченности
 * Удаление отдельной задачи
 * Отчистка всего листа задач
 * Таймер до завершения каждой задачи
 * 
 * И все это на react и redux (rtk)
 * (Для UI моно использовать готовые билиотеки)
 */