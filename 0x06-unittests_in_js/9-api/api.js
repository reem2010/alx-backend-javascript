const express = require("express")

const app = express()


app.get('/', (req, res) => {
    res.send('Welcome to the payment system')
})

app.get('/cart/:id(\\d+)', (req, res) => {
    id = req.params.id
    res.send(`payment methods for cart ${id}`)
})

app.listen(7865, () => {
    console.log('API available on localhost port 7865')
})
