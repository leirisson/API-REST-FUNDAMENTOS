import { Request, Response } from "express";


export class ProdutoController {

    getAll(request: Request, response: Response){
        response.json({ mensagem: "olá mundo !" });
    }
}