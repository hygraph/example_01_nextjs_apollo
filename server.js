const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const port = process.env.PORT || 3000

app.prepare()
.then(() => {
  const server = express()

  server.use('/static', express.static('static'))

  server.get('/artists', (req, res) => {
    return app.render(req, res, '/artists')
  })

  server.get('/artists/:slug', (req, res) => {
    return app.render(req, res, '/artists/details', { slug: req.params.slug })
  })

  server.get('/reviews', (req, res) => {
    return app.render(req, res, '/')
  })

  server.get('/reviews/:slug', (req, res) => {
    return app.render(req, res, '/reviews/details', { slug: req.params.slug })
  })

  server.get('/records', (req, res) => {
    return app.render(req, res, '/records')
  })

  server.get('/records/:slug', (req, res) => {
    return app.render(req, res, '/records/details', { slug: req.params.slug })
  })

  server.get('*', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
