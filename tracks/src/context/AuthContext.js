import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }

    default:
      return state
  }
}

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make api request to sign up with that email and password
    try {
      const response = await trackerApi.post('/signup', { email, password })
      console.log(response.data)
    } catch (error) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up.',
      })
    }
    // if we sign up, modify our state, and say that we are authencticated
    // if signing up fails, we probably need to reflect an error message
    // somewhere
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
  { isSignedin: false, errorMessage: '' },
)
