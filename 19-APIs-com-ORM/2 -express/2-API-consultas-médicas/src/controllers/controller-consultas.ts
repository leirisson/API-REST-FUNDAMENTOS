import { Request, Response, NextFunction } from 'express'
import { prisma } from '../database/prisma'
import { z } from 'zod'


export class ConsultasController {
    async index(request: Request, response: Response, next: NextFunction) {

        const consultas = await prisma.consulta.findMany()

        response.json(consultas)
    }


}