import express from 'express'
import { MyMiddleware } from './middlewares/my-middleware'
import { myMiddleware2 } from './middlewares/my-middleware2'


const PORT = 3334

const app = express()
app.use(express.json())

// midle global 
// app.use(MyMiddleware)


// parametros não nomeados
app.get('/produtos/:id',myMiddleware2 ,(request, response) => {
    const {id} = request.params
    response.status(200).json({id})
})

// parametros nomeados
app.get('/produtos', (request, response) => {
    //  /produtos?page=1&limit=10
    const {page, limit} = request.query

    response.send(`Pagina: ${page} de ${limit}`)
})



app.post('/produtos', myMiddleware2, (request, resposne) => {
    const {name, price, } = request.body
   

     resposne.status(201).json({name, price, user_id: request.user_id })
})

app.listen(PORT, () => {
    console.log('Servidor está funcionando.')
})