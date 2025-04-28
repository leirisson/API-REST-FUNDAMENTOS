import { knex } from '@/database/knex'
import { AppError } from '@/utils/AppError'
import { Request, Response, NextFunction } from 'express'
import z from 'zod'

export class OrderController {

    async index(request: Request, response: Response, next: NextFunction) {
        try {
            const { table_session_id } = request.params
            //juntado as tabelas com join
            const order = await knex<OrderRepository>("orders")
                .select(
                    "orders.id",
                    "orders.table_session_id",
                    "orders.product_id",
                    "products.name",
                    "orders.price",
                    "orders.quantity",
                    knex.raw("(orders.quantity * orders.price) AS total"),
                    "orders.created_at",
                    "orders.updated_at"
                )
                .join("products", "products.id", "orders.product_id")
                .where({ table_session_id })
                .orderBy("orders.created_at", "desc")
            return response.json(order)
        } catch (error) {
            next(error)
        }
    }

    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const bodySchema = z.object({
                table_session_id: z.number(),
                product_id: z.number(),
                quantity: z.number()
            })

            const { table_session_id, product_id, quantity } = bodySchema.parse(request.body)
            const session = await knex<TableSessionsRepository>("table_sessions").where({ id: table_session_id }).first()
            if (!session) {
                throw new AppError("session table not found.")
            }
            if (session.closed_at) {
                throw new AppError("this table is closed.")
            }

            const product = await knex<ProductTable>("products").where({ id: product_id }).first()

            if (!product) {
                throw new AppError("Product not found.")
            }


            const order = await knex<OrderRepository>("orders").insert(
                {
                    table_session_id,
                    product_id,
                    quantity,
                    price: product.price,

                }
            )


            return response.status(201).json()

        } catch (error) {
            next(error)
        }
    }

    // esse metodo vai mostrar o resulmmo da consta da mesa
    async show(request: Request, response: Response, next: NextFunction) {
        try {


            // convertendo o id para number 
            const table_session_id = z.string()
            .transform((value) => Number(value))
            .refine((value) => !isNaN(value), {message: 'ID is required'})
            .parse(request.params.table_session_id)

           

            const order = await knex<OrderRepository>("orders")
            .select(
                knex.raw("COALESCE(SUM(orders.price * orders.quantity), 0) AS total"), // uitlilizando COALESCENCE
                knex.raw("COALESCE(SUM(orders.quantity), 0) AS quantity")
            )
            .where({ table_session_id })
            return response.json(order)
        } catch (error) {
            next(error)
        }
    }
}