import createDataContext from './createDataContext'

const locationReduer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload }
    default:
      break
  }
}

const startRecording = (dispatch) => () => {}
const stopRecording = (dispatch) => () => {}
const addLocation = (dispatch) => (location) => {
  console.log('hi there')
  dispatch({ type: 'add_current_location', payload: location })
}

export const { Context, Provider } = createDataContext(
  locationReduer,
  {
    startRecording,
    stopRecording,
    addLocation,
  },
  { recording: false, locations: [], currentLocation: null },
)
