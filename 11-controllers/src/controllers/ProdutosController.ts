import { Request, Response } from "express";

export class ProdutosController {

    index(request: Request, response: Response){
        response.status(200).send("todos os produtos.");
    }
    
    create(request: Request, response:Response){
        const {name, price} = request.body

        response.send(`name ${name} - price: ${price}`)
    }
}