/* /actions/modal.js
*/
import C from '../store/constants'

export function toggleModal ({ title, children }) {
  return {
    type: C.TOGGLE_MODAL,
    payload: { title, children }
  }
}

export default {
  toggleModal
}
