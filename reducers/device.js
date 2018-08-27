/*  /reducers/sandbox.js
*/
import C from '../store/constants'

const about = (state = {}, action) => {
  switch (action.type) {
    case C.FETCH_DEVICES:
      return {
        ...state,
        hits: action.payload.hits.hits,
        loading: false
      }

    case C.SEARCH_DEVICES:
      return {
        ...state,
        hits: action.payload.hits.hits,
        loading: false
      }

    case C.ADD_DEVICE:
      return state

    default:
      return state
  }
}

export default about
