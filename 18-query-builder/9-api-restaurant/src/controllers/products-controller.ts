import { AppError } from "@/utils/AppError"
import { NextFunction, Request, Response } from "express"



export class ProductsController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {
           
            return response.json({ message: 'oi' })
        } catch (error) {
            next(error)
        }
    }
}


