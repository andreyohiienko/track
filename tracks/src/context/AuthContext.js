import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signin':
    case 'signup':
      return { errorMessage: '', token: action.payload }
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    default:
      return state
  }
}

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'signin', payload: token })
    navigate('TrackList')
  } else {
    navigate('Signup')
  }
}

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = (dispatch) => async ({ email, password }) => {
  // make api request to sign up with that email and password
  try {
    // if we sign up, modify our state, and say that we are authencticated
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signup', payload: response.data.token })

    // navigate to main flow
    navigate('TrackList')
  } catch (error) {
    // if signing up fails, we probably need to reflect an error message
    // somewhere
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up.',
    })
  }
}

const signin = (dispatch) => async ({ email, password }) => {
  // Try to signin
  try {
    // Handle success by updating state
    const response = await trackerApi.post('/signin', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })

    // navigate to main flow
    navigate('TrackList')
  } catch (error) {
    // handle failure by showing errror message (somehow)
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in',
    })
  }
}

const signout = (dispatch) => {
  return ({ email, password }) => {
    // somehow sign out!!
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' },
)
