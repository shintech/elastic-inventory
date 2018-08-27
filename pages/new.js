/*  /pages/new.js
*/
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import Form from '../components/Form'
import Layout from '../layouts/Main'

const NewDevice = ({ createNewDevice }) => {
  /* eslint-disable */
  return (
    <Layout title='create new Device'>
      <Form createNewDevice={createNewDevice} />
    </Layout>
  )
 /* eslint-enable */
}

/* -------------------------------------------------------------------------------- */

NewDevice.propTypes = {
  createNewDevice: PropTypes.func.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    state
  }),

  dispatch => ({
    createNewDevice: (attrs) => {
      dispatch(action.device.addDevice(attrs))
    }
  })
)(NewDevice)
