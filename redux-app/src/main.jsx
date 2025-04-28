import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import { composeWithDevTools } from '@redux-devtools/extension'
import { store } from './store/index.js'

// const initialValue = {
//   cash: 5
// }

// // action = {type, payload}

// /**
//  * 
//  * @param {{cash: number}} state 
//  * @param {{type: string, payload: number}} action 
//  * @returns {{cash: number}}
//  */
// const cashReducer = (state = initialValue, action) => {
//   switch (action.type) {
//     case 'ADD_CASH':
//       return { ...state, cash: state.cash + action.payload }
//     case 'GET_CASH':
//       return { ...state, cash: state.cash - action.payload }
//     default:
//       return state
//   }
// }

// const store = createStore(cashReducer, composeWithDevTools())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
)
