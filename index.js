const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const users = require('./routes/users')


dotenv.config({ path: './config/config.env' })
const PORT = process.env.PORT || 3001


connectDB()
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Test route http://localhost:3001/
app.get('/', (req, res) => {
    res.send('this is a test route')
})

app.use('/api/v1/users', users)


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
  })
  