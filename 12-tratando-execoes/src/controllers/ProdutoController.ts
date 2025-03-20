import { Request, Response } from "express";

import { z } from 'zod'

const listProdutos: object[] = []

export class ProdutoController {

    index(request: Request, response: Response) {
        response.json({ produtos: listProdutos })
    }

    create(request: Request, response: Response) {

        const createSchemaBody = z.object({
            name : z.string(),
            price : z.number()

        })

        const {name, price } = createSchemaBody.parse(request.body)

        const product = { name, price }

        listProdutos.push(product)

        response.status(201).json({products : product})
    }
}