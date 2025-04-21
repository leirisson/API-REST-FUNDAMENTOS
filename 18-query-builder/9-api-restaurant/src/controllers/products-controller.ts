import { z } from 'zod'
import { NextFunction, Request, Response } from "express"
import { knex } from '@/database/knex'


export class ProductsController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {

            const {name} = request.query

            console.log(name)

            const products = await knex<ProductTable>("products")
                .select()
                .whereLike("name", `%${name ?? ""}%`)
                .orderBy("name")



            return response.json({ products })
        } catch (error) {
            next(error)
        }
    }

    async createProduct(request: Request, response: Response, next: NextFunction) {
        try {
            const bodySchemaProduct = z.object({
                name: z.string({ required_error: "name is required !" }).trim().min(6),
                price: z.number().gt(0)
            })

            const { name, price } = bodySchemaProduct.parse(request.body)

            await knex<ProductTable>("products").insert({
                name,
                price
            })

            return response.status(201).send()
        } catch (error) {
            next(error)
        }
    }
}


