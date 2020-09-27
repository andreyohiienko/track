import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'some':
      return state

    default:
      return state
  }
}

const fetchTracks = (dispatch) => () => {}

const createTrack = (dispatch) => (name, locations) => {
  // make a request to out api
  console.log(name, locations.length)
}

export const { Provider, Context } = createDataContext(
  trackReducer,
  {
    fetchTracks,
    createTrack,
  },
  [],
)
