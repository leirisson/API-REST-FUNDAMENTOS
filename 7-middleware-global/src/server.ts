import express from 'express'
import { meuMiddleware } from './middlewares/meuMiddleware'

const port = 3334

const app = express()

app.use(meuMiddleware)

app.get('/produtos', (request, response) => {
    response.send("Passando por middleware global ")
})

app.listen(port, () => console.log('Server rodadno ...'))