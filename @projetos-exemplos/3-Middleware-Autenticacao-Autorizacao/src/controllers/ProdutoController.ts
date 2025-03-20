import { Request, Response } from "express";


export class ProdutoController {

    getAll(request: Request, response: Response){
        response.send('Você acessou uma rota protegida!')
    }
}