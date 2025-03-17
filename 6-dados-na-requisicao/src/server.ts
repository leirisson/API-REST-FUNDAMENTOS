import express from 'express'

const port = 3333

const app = express()
app.use(express.json())


app.post('/produtos', (request, response) => {
    const {name, price} = request.body

    response.status(201).json({name, price})
})

app.listen(port, () => console.log('server is ruing ... 🐱‍🏍✔✨'))