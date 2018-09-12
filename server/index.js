const express = require('express')
const path = require('path')
const webpack = require('webpack')
const config = require('../webpack.config')

const app = express()
const compiler = webpack(config)

const port = 3000
const pathToHtml = path.resolve('index.html')

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('*', (req, res) => res.sendFile(pathToHtml))

app.listen(port, (err) => {
  if (err) console.log(err)

  console.log(`Server listening on ${port}`)
})
