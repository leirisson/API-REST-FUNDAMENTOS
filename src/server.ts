import express from 'express'

const PORT = 3334

const app = express()

app.get('/', (request, response) => {
    response.send('hello express')
})

app.listen(PORT, () => {
    console.log('Servidor está funcionando.')
})