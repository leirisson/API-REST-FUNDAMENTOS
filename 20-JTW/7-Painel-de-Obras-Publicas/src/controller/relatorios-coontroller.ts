import { Request, Response } from 'express'

export class RelatoriosController {
    getAll(request:Request, response:Response){
        response.json({message: 'relatorios emitidos com sucesso.'})
    }
}
