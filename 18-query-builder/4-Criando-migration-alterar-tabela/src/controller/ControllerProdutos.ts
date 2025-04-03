import { Request, Response } from "express";

import { knex } from "../database/knex";

export class ControllerProdutos {

    async getProdutos(request: Request, response:Response){
            const produtos = await knex("produtos").select()
            response.json({produtos})
    }


    async updateProduto(request: Request, response:Response){
        const {nome, preco, descricao} = request.body
        const {id} = request.params

        await knex("produtos").update({nome,preco,descricao}).where({id})

        response.status(409).send()
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

    async deleteProduto(request: Request, response: Response){
        const {id} = request.params

        await knex("produtos").delete().where({id})

        response.status(409).send()
    }
}