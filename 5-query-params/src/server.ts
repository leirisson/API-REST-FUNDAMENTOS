import express, { response } from 'express'

const port = 3333

const app = express()

app.get('/produtos', (request, response) => {

    const {page, limit} = request.query
    response.status(200).send(`paginas: ${page} - limite: ${limit}`)

})

app.listen(port, () => {console.log('servidor funcionando ✔✨')})