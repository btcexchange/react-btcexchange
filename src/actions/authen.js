import { Actions } from 'utils/constants'
import firebase from 'modules/firebase'

export const signUp = (email, password) => (dispatch) => {
  dispatch({
    type: Actions.SIGN_IN,
    payload: { email }
  })
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({
        type: Actions.SIGN_IN_SUCCESS,
        payload: { email }
      })
      dispatch(getCurrentUser())
    })
    .catch(error => {
      const { code, message } = error
      dispatch({
        type: Actions.SIGN_IN_FAIL,
        payload: { error }
      })
      alert(`Sign up has an error, ${code} ${message}`)
    })
}

export const signIn = (email, password) => (dispatch) => {
  dispatch({
    type: Actions.SIGN_IN,
    payload: { email }
  })
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({
        type: Actions.SIGN_IN_SUCCESS,
        payload: { email }
      })
      dispatch(getCurrentUser())
    })
    .catch(error => {
      const { code, message } = error
      dispatch({
        type: Actions.SIGN_IN_FAIL,
        payload: { error }
      })
      alert(`Sign up has an error, ${code} ${message}`)
    })
}

export const getCurrentUser = () => (dispatch) => {
  dispatch({
    type: Actions.CURRENT_USER_LOADING
  })
  const user = firebase.auth().currentUser
  dispatch({
    type: Actions.CURRENT_USER_SUCCESS,
    payload: { user }
  })
}
