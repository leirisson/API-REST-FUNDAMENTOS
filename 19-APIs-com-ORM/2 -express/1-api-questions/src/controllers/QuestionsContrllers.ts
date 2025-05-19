import { Request, Response, NextFunction } from 'express'
import { prisma } from '../database/prisma'
import { title } from 'process'



export class QuestionsController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {
            const questions = await prisma.question.findMany({
                where: {
                    title: {
                        contains: request.query.title?.toString().trim(),
                        mode: "insensitive"
                    },
                },
                orderBy: {
                    title: "asc"
                }

            })
            response.json({ questions })
        } catch (error) {
            next()
        }
    }

    async create(request: Request, response: Response, next: NextFunction) {
        const { title, content, user_id } = request.body

        console.log(title, content, user_id)

        await prisma.question.create({
            data: {
                title,
                content,
                userId: user_id

            }
        })
        response.status(201).json()
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const { id } = request.params
        const { title, content } = request.body

        await prisma.question.update({
            data: {
                title,
                content
            },
            where: {
                id,
            }
        })

        response.status(204).json()
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const { id } = request.params

        await prisma.question.delete({
            where:{
                id
            }
        })
        response.status(204).json()
    }

}