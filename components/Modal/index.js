/*  /components/Modal/index.js
*/
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../../actions'
import Wrapper from './Wrapper'

const Modal = ({ hidden, modal, model, children, title }) => {
  if (hidden) return <div className='hidden' />

  return (
    <Wrapper>
      <div className='modal'>
        <div className='modal-header'>
          <h3 className='title'>{title}</h3>
          <i className='fas fa-times close' onClick={modal} />
        </div>
        <div className='modal-body'>
          {children }
          <button onClick={modal}>Close</button>
        </div>
      </div>
    </Wrapper>
  )
}

/* -------------------------------------------------------------------------------- */

Modal.propTypes = {
  hidden: PropTypes.bool.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    hidden: state.modal.hidden,
    children: state.modal.children,
    title: state.modal.title
  }),

  dispatch => ({
    modal: (props) => {
      dispatch(action.modal.toggleModal(props))
    }
  })
)(Modal)
