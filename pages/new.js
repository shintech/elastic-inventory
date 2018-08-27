/*  /pages/new.js
*/
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import Layout from '../layouts/Main'
import Grid from '../layouts/Grid'
import { withRouter } from 'next/router'

const NewDevice = ({ createNewDevice, router }) => {
  let _serial, _model, _manufacturer, _facility

  const submit = e => {
    e.preventDefault()

    let serial = _serial.value
    let model = _model.value
    let manufacturer = _manufacturer.value
    let facility = _facility.value

    createNewDevice(router, { serial, model, manufacturer, facility })
  }

  /* eslint-disable */
  return (
    <Layout title='create new Device'>
      <Grid>
        <form onSubmit={submit}>
          <ul className='form-style'>
            <li className='form-group'>
              <select ref={input => _facility = input}>
                 <option value="101">101</option>            
                 <option value="102">102</option>            
                 <option value="103">103</option>            
                 <option value="104">104</option>            
                 <option value="105">105</option>            
                 <option value="106">106</option>            
              </select>
            </li>
            
            <li className='form-group'>
              <input ref={input => _serial = input} type='text' placeholder='Serial....' />
            </li>

            <li className='form-group'>
              <input ref={input => _model = input} type='text' placeholder='Model....' />
            </li>
            
            <li className='form-group'>
              <input ref={input => _manufacturer = input} type='text' placeholder='Manufacturer....' />
            </li>
            
            <li>
              <button type='button' className='close'>Close</button>
              <button type='submit' className='submit'>Submit</button>
            </li>
          </ul>
        </form>
      </Grid>
    </Layout>
  )
 /* eslint-enable */
}

/* -------------------------------------------------------------------------------- */

NewDevice.propTypes = {
  createNewDevice: PropTypes.func.isRequired
}

/* -------------------------------------------------------------------------------- */

export default withRouter(connect(
  state => ({
    state
  }),

  dispatch => ({
    createNewDevice: (router, attrs) => {
      dispatch(action.device.addDevice(router, attrs))
    }
  })
)(NewDevice))
