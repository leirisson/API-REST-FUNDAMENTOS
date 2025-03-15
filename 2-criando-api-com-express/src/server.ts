import express from 'express'

const app = express()

const users = [
    {nome: 'Leirisson',  idade:26, cidade:'Coari'},
    {nome: 'Marcelo',  idade:19, cidade:'Manaus'},
    {nome: 'Lucas',  idade:35, cidade:'Tefé'}
]

app.get('/users', (request, response) => {
    
    response.status(200).send(users)
})

app.listen(3335, () => {
    console.log('server is ruing !')
})