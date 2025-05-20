import { Request, Response, NextFunction } from 'express'
import { prisma } from '../database/prisma'
import { z } from 'zod'

export class ControllerMedicos {
    async index(request: Request, response: Response, next: NextFunction) {
        try {
            const medicos = await prisma.medico.findMany()
            response.json(medicos)
        } catch (error) {
            next(error)
        }
    }

    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const createBodySchema = z.object({
                nome: z.string().min(3),
                especialidade: z.string(),
                crm: z.string()
            })

            const {
                nome,
                especialidade,
                crm
                } = createBodySchema.parse(request.body)

            await prisma.medico.create({
                data: {
                    nome,
                    especialidade,
                    crm
                }
            })
            response.status(201).json()
        } catch (error) {
            next(error)
        }
    }

    async show(request: Request, response: Response, next: NextFunction) {
        const IdSchema = z.object({
            id: z.string()
        })

        const { id } = IdSchema.parse(request.params)

        const medico = await prisma.medico.findUnique({
            where: { id }
        })

        response.json({ medico })
    }
}