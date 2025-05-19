import { Request, Response, NextFunction } from 'express'
import { prisma } from '../database/prisma'


export class UserController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {
            const users = await prisma.user.findMany()
            response.json({ users })
        } catch (error) {
            next(error)
        }

    }

    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const { name, email } = request.body

            await prisma.user.create({
                data: {
                    name,
                    email
                }
            })

            response.status(201).send()
        } catch (error) {
            next(error)
        }
    }

    async show(request: Request, response: Response, next: NextFunction) {
        try {
            const { id } = request.params

            const user = await prisma.user.findUnique({
                where: { id }
            })

            response.json(user)
        } catch (error) {

        }


    }
}