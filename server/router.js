const express = require('express')
const router = express.Router()

module.exports = function ({ client }) {
  router.get('/search', (req, res) => {
    res.set('Content-Type', 'application/json')

    client.search({
      index: 'inventory',
      type: 'device',
      from: 0,
      size: 100,
      body: {
        query: {
          multi_match: {
            query: req.query.slug,
            fields: ['serial', 'manufacturer', 'model', 'facility'],
            fuzziness: '1'
          }
        }
      }
    })
      .then(function (resp) {
        res.send(resp)
      })
  })

  router.get('/inventory', (req, res) => {
    client.search({
      index: 'inventory',
      type: 'device',
      from: 0,
      size: 100,
      body: {
        query: {
          match_all: {}
        }
      }
    })

      .then(function (resp) {
        res.send(resp)
      })
      .catch(err => {
        throw new Error(err.message)
      })
  })

  router.post('/inventory', async (req, res) => {
    console.log(req.body)
    await client.index({
      index: 'inventory',
      type: 'device',
      body: req.body
    })

    res.send(req.body)
  })

  return router
}
