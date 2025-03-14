import express from 'express'

const PORT = 3334

const app = express()

app.get('/produtos/:id', (request, response) => {
    const {id} = request.params
    response.send(`produto id: ${id}`)
})

app.listen(PORT, () => {
    console.log('Servidor está funcionando.')
})