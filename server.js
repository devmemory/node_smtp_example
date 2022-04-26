require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const port = process.env.PORT || 8080

const emailHandler = require('./email')

app.post('/send-mail', async (req, res) => {
    const data = req.body

    if (emailHandler.validation(data)) {
        try {
            const result = await emailHandler.send(data)

            res.send({ message: 'Success to send a message', result })
        } catch (e) {
            res.send({ e })
        }
    } else {
        res.send({ message: 'Failed to send a message', data })
    }
})

app.listen(port, () => {
    console.log(`start! express server on port ${port}`)
})