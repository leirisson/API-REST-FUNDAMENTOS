import express, { response } from "express"

const app = express()

const PORT = 3333

app.get('/produtos', (request, response) => {
    response.status(200).send("Hello express")
})

app.get('/produtos/:id', (request, response) => {
    const { id } = request.params

    response.status(200).send(`produto: ${id}`)
})

app.get('/produtos/:id/:user', (request, response) => {
    const {id, user} = request.params

    response.status(200).send(`usuario: ${user} - produtos - ${id}`)
})

app.listen(PORT, () => console.log('servidor no ar !!'))