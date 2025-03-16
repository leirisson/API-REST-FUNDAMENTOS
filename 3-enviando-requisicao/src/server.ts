import express from 'express'

const PORT = 3336

const app = express()

const pessoas = [
    { nome: "Carlos", idade: 25, cidade: "São Paulo" },
    { nome: "Ana", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Mariana", idade: 22, cidade: "Belo Horizonte" },
    { nome: "Rafael", idade: 28, cidade: "Curitiba" },
    { nome: "Fernanda", idade: 35, cidade: "Porto Alegre" }
]

app.get('/pessoas', (request, response) => {
     
    response.status(200).send(pessoas)
})

app.listen(PORT, () => console.log('Server is ruing !!!!'))