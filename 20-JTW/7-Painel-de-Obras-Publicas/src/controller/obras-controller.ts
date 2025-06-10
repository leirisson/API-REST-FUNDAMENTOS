import { Request, Response } from 'express'

export class ObrasController {
    create(request: Request, response: Response) {
        response.status(201).json({ message: `id do usuario ${request.user?.id}` })
    }

    update(request: Request, response: Response) {
        const { id } = request.params

        if(!id){
             response.status(400).json({message: "obra não encontrada" })
            
        }

        response.json({ message: "fiscalizada com sucesso !" })
       
    }
}