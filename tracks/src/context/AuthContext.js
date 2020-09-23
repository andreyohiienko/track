import createDataContext from './createDataContext'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'value':
      return state

    default:
      return state
  }
}

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up with that email and password
    // if we sign up, modify our state, and say that we are authencticated
    // if signing up fails, we probably need to reflect an error message
    // somewhere
  }
}

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updating satte
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
  { isSignedin: false },
)
