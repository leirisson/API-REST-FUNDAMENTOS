import { knex } from "@/database/knex"
import { Request, Response, NextFunction } from "express"
import z from "zod"


export class UserController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {

            const users = await knex<UserRepository>("users")
            .select()
            .orderBy("nome","asc")

            response.json({ users })
        } catch (error) {
            next(error)
        }
    }

    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const bodySchema = z.object({
                nome : z.string().min(3),
                email : z.string(),
                senha: z.string().min(8)
            })

            const {nome, email, senha} = bodySchema.parse(request.body)

            await knex<UserRepository>("users")
            .insert({
                nome,
                email,
                senha
            })

            response.status(201).json()

        } catch (error) {
            next(error)
        }
    }
}