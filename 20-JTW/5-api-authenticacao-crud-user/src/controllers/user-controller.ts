import { Request, Response } from 'express'


export class ControllerUser {

    index(request: Request, response: Response) {
        response.json({ messgae: 'todos os usuarios' })
    }

    create(request: Request, response: Response) {
        response.json({ messgae: 'criado com suceso o usuarios' })
    }

}