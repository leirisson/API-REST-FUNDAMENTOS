import {z} from 'zod'
import { NextFunction, Request, Response } from "express"



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
            
            return response.status(201).json({name, price})
        } catch (error) {
            next(error)
        }
    }
}


