import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { pendingTasksReducer } from 'react-redux-spinner'
import { firebaseReducer } from 'react-redux-firebase'

import app from './app'
import login from './login'

export default combineReducers({
  routing: routerReducer,
  pendingTasks: pendingTasksReducer,
  firebase: firebaseReducer,
  app,
  login,
})
