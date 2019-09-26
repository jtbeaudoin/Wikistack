const PORT = 3000
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const models = require('./models/index')
const morgan = require('morgan')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/user', require('./routes/user'))
app.use('/wiki', require('./routes/wiki'))
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res, next) => {
  res.redirect('/wiki')
})

const syncing = async () => {
  await models.db.sync()
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
  })
}
syncing()


