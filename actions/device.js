/*  /actions/sandbox.js
*/
import fetch from 'isomorphic-fetch'
import C from '../store/constants'

export default {
  searchDevices: function (slug) {
    return async dispatch => {
      let resp = await fetch(`/api/search?slug=${slug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      let payload = await resp.json()

      dispatch({
        type: C.SEARCH_DEVICES,
        payload
      })
    }
  },

  fetchDevices: function () {
    return async dispatch => {
      let resp = await fetch(`/api/inventory`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      let payload = await resp.json()

      dispatch({
        type: C.FETCH_DEVICES,
        payload
      })
    }
  },

  addDevice: function (body) {
    return async dispatch => {
      let payload

      try {
        let resp = await fetch(`/api/inventory`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })

        payload = await resp.json()

        dispatch(addDeviceSuccess(payload))
      } catch (err) {
        dispatch(addDeviceError(err.message))
      }
    }
  }
}

function addDeviceSuccess (device) {
  return {
    type: C.ADD_DEVICE_SUCCESS,
    payload: device
  }
}

function addDeviceError (error) {
  return {
    type: C.ADD_DEVICE_ERROR,
    payload: error
  }
}
