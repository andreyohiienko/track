import createDataContext from './createDataContext'

const locationReduer = (state, action) => {
  switch (action.type) {
    case 'value':
      break

    default:
      break
  }
}

const startRecording = (dispatch) => () => {}
const stopRecording = (dispatch) => () => {}
const addLocation = (dispatch) => () => {}

export const { Context, Provider } = createDataContext(
  locationReduer,
  {
    startRecording,
    stopRecording,
    addLocation,
  },
  { recording: false, locations: [], currentLocation: null },
)
