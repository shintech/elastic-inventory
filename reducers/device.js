/*  /reducers/sandbox.js
*/
import C from '../store/constants'

const about = (state = {}, action) => {
  switch (action.type) {
    case C.FETCH_DEVICES:
      return {
        ...state,
        ...action.payload,
        loading: false
      }

    case C.SEARCH_DEVICES:

      const fuck = {
        ...state,
        ...action.payload,
        loading: false
      }

      return fuck

    case C.ADD_DEVICE:
      return {
        payload: 'success',
        loading: false
      }

    default:
      return state
  }
}

export default about
