const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const { Nuxt, Builder } = require('nuxt')

const app = express()

// Import and Set Nuxt.js options
const nuxtConfig = require('../nuxt.config.js')

// Register variable to global
const SuperGlobal = require('./global')
SuperGlobal.registerGlobal()

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(nuxtConfig)
  const { host, port } = nuxt.options.server

  // Build only in dev mode
  await nuxt.ready()
  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Use common middleware
  app.use(bodyParser.json()) // parse application/json
  app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
  app.use(cookieParser()) // parse HTTP request cookies
  app.use(compression()) // compress all responses

  // Use custom middleware
  try {
    app.use(require('./middleware/ctx')())
  } catch (error) {
    console.error('Server error: ', error)
    // global.app.Logger.error('Server error: ', error)
  }

  // Dispatch routers
  require('./apps/routes')(app)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
}
start()
