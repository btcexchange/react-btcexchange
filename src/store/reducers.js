import { combineReducers } from 'redux'
import { modelReducer, formReducer } from 'react-redux-form'

import locationReducer from './location'
import sessionReducer from './session'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    authen: modelReducer('authen'),
    authenForm: formReducer('authen'),
    session: sessionReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
