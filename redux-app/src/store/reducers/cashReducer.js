const initialValue = {
  cash: 5
}

// action = {type, payload}

/**
 * 
 * @param {{cash: number}} state 
 * @param {{type: string, payload: number}} action 
 * @returns {{cash: number}}
 */
export const cashReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload }
    case 'GET_CASH':
      return { ...state, cash: state.cash - action.payload }
    default:
      return state
  }
}