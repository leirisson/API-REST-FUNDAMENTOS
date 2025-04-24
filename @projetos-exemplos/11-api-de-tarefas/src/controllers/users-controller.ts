import { knex } from "@/database/knex"
import { Request, Response, NextFunction } from "express"


export class UserController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {

            const users = await knex<UserRepository>("users")
            
            response.json({users})
        } catch (error) {
            next(error)
        }
    }
}