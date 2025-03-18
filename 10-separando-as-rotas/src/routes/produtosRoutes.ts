import { Router } from "express";
import { myMiddleware } from "../middleware/myMiddleware";


export const produtosRouter = Router()


produtosRouter.get('/', myMiddleware, (request, response) => {

    response.status(200).send('todos os produtos')
})


produtosRouter.get('/:id', (request, response) => {
    const {id} = request.params

    response.status(200).send(`id: ${id}`)
})



produtosRouter.post('/', (request, response) => {
    const {name, price} = request.body

    response.status(201).json({
        name,
        price
    })
})
