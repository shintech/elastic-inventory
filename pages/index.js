/*  /pages/sandbox.js
*/
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import Layout from '../layouts/Main'
import Table from '../components/Table'

class Sandbox extends React.Component {
  componentDidMount () {
    this.props.fetchDevices()
  }

  render () {
    const { loading, hits } = this.props

    return (
      <Layout title='sandbox'>
        <form>
          <input type='text' placeholder='Search...' onKeyUp={(e) => { this.props.searchDevices(e.target.value) }} />
        </form>

        {(loading || !hits) ? <h1>Loading...</h1> : <Table hits={hits} /> }
      </Layout>
    )
  }
}

/* -------------------------------------------------------------------------------- */

Sandbox.propTypes = {
  loading: PropTypes.bool.isRequired,
  hits: PropTypes.array
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    loading: state.device.loading,
    hits: state.device.hits
  }),

  dispatch => ({
    searchDevices: (slug) => {
      if (slug.length < 1) return dispatch(action.device.fetchDevices())

      dispatch(action.device.searchDevices(slug))
    },

    fetchDevices: () => {
      dispatch(action.device.fetchDevices())
    },

    createNewDevice: (attrs) => {
      dispatch(action.device.addDevice(attrs))
    }
  })
)(Sandbox)
