import { Request, Response } from "express";

import { knex } from "../database/knex";

export class ControllerProdutos {

    async getProdutos(request: Request, response:Response){
            const produtos = await knex("produtos").select()
            response.json({produtos})
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