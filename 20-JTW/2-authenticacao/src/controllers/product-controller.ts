import { Request, Response } from 'express'


export class ProductController {

    index(request: Request, response: Response) {
        response.json({ msg: "teste de api" })
    }

    create(request: Request, response: Response) {
        response.json({ msg: "teset de API product" })
    }
}

