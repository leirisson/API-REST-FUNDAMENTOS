import express from 'express'
import { report } from 'process'

const PORT = 3334

const app = express()
app.use(express.json())


// parametros não nomeados
app.get('/produtos/:id', (request, response) => {
    const {id} = request.params
    response.send(`produto id: ${id}`)
})

// parametros nomeados
app.get('/produtos', (request, response) => {
    //  /produtos?page=1&limit=10
    const {page, limit} = request.query

    response.send(`Pagina: ${page} de ${limit}`)
})



app.post('/produtos', (request, resposne) => {
    const {name, price} = request.body

    resposne.status(201).json({name, price})
})

app.listen(PORT, () => {
    console.log('Servidor está funcionando.')
})