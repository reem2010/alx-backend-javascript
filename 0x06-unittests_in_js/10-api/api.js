const express = require("express")

const app = express()
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the payment system')
})

app.get('/cart/:id(\\d+)', (req, res) => {
    const id = req.params.id
    res.send(`payment methods for cart ${id}`)
})

app.get('/available_payments', (req, res) => {
    res.send({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      })
})

app.post('/login', (req, res) => {
    const name = req.body.userName
    res.send(`Welcome ${name}`)
})
app.listen(7865, () => {
    console.log('API available on localhost port 7865')
})
