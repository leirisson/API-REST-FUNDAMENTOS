import { knex } from '@/database/knex'
import { AppError } from '@/utils/AppError'
import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'


export class TablesSessionController {

    async index(_: Request, response: Response, next: NextFunction) {
        try {

            const sessions = await knex<TableSessionsRepository>("table_sessions")
                .select()
                .orderBy("closed_at")

            return response.json({ sessions })
        } catch (error) {
            next(error)
        }
    }

    async create(request: Request, response: Response, next: NextFunction) {
        try {

            const bodySchema = z.object({
                table_id: z.number(),
            })


            const { table_id } = bodySchema.parse(request.body)

            // recuperando a seção para que verificar se a mesa está aberta
            const session = await knex<TableSessionsRepository>("table_sessions")
                .where({ table_id })
                .orderBy("opened_at", "desc")
                .first()

            // se essa condição for true, signfica que a mesa ainda está aberta e vai ser lançado um erro tratado 
            if (session && !session.closed_at) {
                throw new AppError("this table is already open")
            }


            await knex<TableSessionsRepository>("table_sessions")
                .insert({
                    table_id,
                    opened_at: knex.fn.now()
                })

            return response.status(201)

        } catch (error) {
            next(error)
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        try {

            const id = z.string()
                .transform((value) => Number(value))
                .refine((value) => !isNaN(value), { message: `id must be a number` })
                .parse(request.params.id)


            // recuperando para garantir que a mesma já esteja aberta - uma sação existente

            const session = await knex<TableSessionsRepository>("table_sessions")
                .where({ id })
                .first()

            // verificar se a seção existe 
            if (!session) {
                throw new AppError("session table not found")
            }

            if (session.closed_at) {
                throw new AppError("this session table is already closed")
            }


            await knex<TableSessionsRepository>("table_sessions")
                .update({ closed_at: knex.fn.now() })
                .where({ id })

            return response.json()

        } catch (error) {
            next(error)
        }
    }
}