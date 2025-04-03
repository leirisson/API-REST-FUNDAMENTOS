import { Request, Response } from "express";

import { knex } from "../database/knex";

export class ControllerProdutos {

    async getProdutos(request: Request, response:Response){
            response.send('lista de todos os  produtos')
    }

    async createProduto(request:Request, response:Response){
        const {nome, preco, descricao} = request.body
        
        await knex("produtos").insert({
            nome,
            preco,
            descricao
        })


        response.status(201).send()
    }
}