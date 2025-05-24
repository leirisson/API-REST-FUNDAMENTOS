import { Request, Response } from 'express'

export class ControllerSession {
    index(request: Request, response:Response){
        response.json({msg: "Listado com sucesso"})
    }
    create(request: Request, response:Response){
        response.json({msg: "criado com sucesso"})
    }
}