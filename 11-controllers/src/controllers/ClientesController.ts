import { Request, Response } from "express";

const clientes: object[] = []

export class ClientesController {
    
    index(request: Request, response:Response){
        response.status(200).json({"clientes" : clientes})
    }

    create(request: Request, response: Response){
        const {name, email} = request.body

      

        const cliente = {name, email}

        clientes.push(cliente)

        response.status(201).send('ok')
    }
}