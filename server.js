require('dotenv').config()

const express = require('express')

const app = express()

const port = process.env.PORT || 8080

const email = require('./email')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/email', email)

app.listen(port, () => {
    console.log(`start! express server on port ${port}`)
})