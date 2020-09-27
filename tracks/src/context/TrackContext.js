import createDataContext from './createDataContext'

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'some':
      break

    default:
      break
  }
}

const fetchTracks = (dispatch) => () => {}

const createTrack = (dispatch) => () => {}

export const { Provider, Context } = createDataContext(
  trackReducer,
  {
    fetchTracks,
    createTrack,
  },
  [],
)
