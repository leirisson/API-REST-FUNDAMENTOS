import { Router } from "express";
import { myMiddleware2 } from "../middlewares/my-middleware2";


const protudosRoutes = Router()


// parametros não nomeados
protudosRoutes.get('/:id',myMiddleware2 ,(request, response) => {
    const {id} = request.params
    response.status(200).json({id})
})

// parametros nomeados
protudosRoutes.get('', (request, response) => {
    //  /produtos?page=1&limit=10
    const {page, limit} = request.query

    response.send(`Pagina: ${page} de ${limit}`)
})



protudosRoutes.post('', myMiddleware2, (request, resposne) => {
    const {name, price, } = request.body
   

     resposne.status(201).json({name, price, user_id: request.user_id })
})

export {protudosRoutes}