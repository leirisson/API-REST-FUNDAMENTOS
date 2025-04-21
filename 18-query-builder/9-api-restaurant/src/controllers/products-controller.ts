import { number, z } from 'zod'
import { NextFunction, Request, Response } from "express"
import { knex } from '@/database/knex'
import { AppError } from '@/utils/AppError'


export class ProductsController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {

            const { name } = request.query

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

    async updateProduct(request: Request, response: Response, next: NextFunction) {
        try {

            const id = z.string()
                .transform((value) => Number(value))
                .refine((value) => !isNaN(value), { message: "id must a number" })
                .parse(request.params.id)

            const bodySchema = z.object({
                name: z.string({ required_error: "name is required !" }).trim().min(6),
                price: z.number().gte(0)
            })

            const { name, price } = bodySchema.parse(request.body)

            const product = await knex<ProductTable>("products")
            .select()
            .where({id})
            .first()

            if(!product){
                throw new AppError("product not found.")
            }

            await knex<ProductTable>("products").update({ name, price, updated_at: knex.fn.now() })
                .where({ id })

            return response.status(200).send()
        } catch (error) {
            next(error)
        }
    }

    async deleteProduct(request: Request, response: Response, next: NextFunction) {
       try {
        const id = z
        .string()
        .transform((value) => Number(value)).refine((value) => !isNaN(value), {message: "id must be a number."})
        .parse(request.params.id)


        const product = await knex<ProductTable>("products")
        .select()
        .where({id})
        .first()

        if(!product){
            throw new AppError("Product not found.")
        }

        await knex<ProductTable>("products").delete().where({ id })

        return response.send()
       } catch (error) {
        next(error)
       }
    }
}


