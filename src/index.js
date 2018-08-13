import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Helmet } from 'react-helmet'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createHashHistory'
import thunk from 'redux-thunk'
import 'es6-promise/auto'
import 'setimmediate'
import 'chartist-plugin-tooltip'

import { LocaleProvider } from 'antd'
import enGB from 'antd/lib/locale-provider/en_GB'
import registerServiceWorker from 'registerServiceWorker'

import Layout from 'components/LayoutComponents/Layout'
import reducer from 'ducks'

import 'resources/_antd.less' // redefinition AntDesign variables
import 'bootstrap/dist/css/bootstrap.min.css' // bootstrap styles

import 'resources/AntStyles/AntDesign/antd.cleanui.scss'
import 'resources/CleanStyles/Core/core.cleanui.scss'
import 'resources/CleanStyles/Vendors/vendors.cleanui.scss'

import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'

const history = createHistory()
const router = routerMiddleware(history)
const middlewares = [router, thunk]
const isLogger = false
if (isLogger && process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const firebaseConfig = {
  apiKey: 'AIzaSyD7y8kIAwE4EMQ6d6iDDQrMZaeW9ckVhJM',
  authDomain: 'dtig-data-dashboard.firebaseapp.com',
  databaseURL: 'https://dtig-data-dashboard.firebaseio.com',
  projectId: 'dtig-data-dashboard',
  storageBucket: 'dtig-data-dashboard.appspot.com',
  messagingSenderId: '601848630693',
}

const reactReduxFirebaseConfig = { userProfile: 'users' } // react-redux-firebase config

const firebaseIntitialize = firebase.initializeApp(firebaseConfig)

// const createStoreWithFirebase = compose(
//   reactReduxFirebase(firebase, config)
// )(createStore)

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middlewares),
    reactReduxFirebase(firebaseIntitialize, reactReduxFirebaseConfig),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider locale={enGB}>
        <div>
          <Helmet titleTemplate="DTIG Data Dashboard - %s" />
          <Layout />
        </div>
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()

export default history
