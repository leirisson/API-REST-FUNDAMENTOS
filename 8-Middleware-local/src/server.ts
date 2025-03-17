import express from 'express'
import { meuMiddleLocal } from './middlewares/meuMiddleLocal'

const port = 3335
const app = express()


// middleware local em um rota especifica.
app.get('/produtos', meuMiddleLocal, (request, response) => {
    response.status(200).send('ok')
})

app.listen(port, () => console.log('server is ruing...🎉✨'))