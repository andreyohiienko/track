import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signup':
      return { errorMessage: '', token: action.payload }
    default:
      return state
  }
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
    console.log(error)
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up.',
    })
  }
}

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // handle failure by showing errror message (somehow)
  }
}

const signout = (dispatch) => {
  return ({ email, password }) => {
    // somehow sign out!!
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: '' },
)
