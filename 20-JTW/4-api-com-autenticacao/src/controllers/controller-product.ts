import { Request, Response } from 'express'


export class ControllerProduct {
    index(request: Request, response: Response) {
        response.json({ msg: "Listado com sucesso" })
    }

    create(request: Request, response: Response) {
        response.json({ msg: "criado com sucesso" })
    }
}