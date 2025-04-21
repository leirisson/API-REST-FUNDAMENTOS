import {z} from 'zod'
import { NextFunction, Request, Response } from "express"
import { knex } from '@/database/knex'


export class ProductsController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {
           
            return response.json({ message: 'oi' })
        } catch (error) {
            next(error)
        }
    }

    async createProduct(request: Request, response: Response, next: NextFunction) {
        try {
            const bodySchemaProduct = z.object({
                name: z.string({required_error:"name is required !"}).trim().min(6),
                price: z.number().gt(0)
            })

            const {name, price} =  bodySchemaProduct.parse(request.body)

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


