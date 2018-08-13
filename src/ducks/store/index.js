import { createStore } from 'redux'
import rootReducer from '../reducers'

const store = createStore(rootReducer)

export default store

// https://github.com/rwieruch/react-redux-firebase-authentication/blob/master/src/components/App/index.js
