const cds = require('@sap/cds')

cds.on('bootstrap', app => {
  app.get('/health', (_, res) => {
    console.log('Health endpoint is called. Sending response...')
    res.status(200).send('Success')
    console.log('Done.')
  })
})

module.exports = cds.server