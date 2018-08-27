/*  /reducers/modal.js
*/
const modal = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      let hidden = !state.hidden

      return {
        hidden: hidden,
        children: action.payload.children,
        title: action.payload.title
      }

    default:
      return state
  }
}

export default modal
