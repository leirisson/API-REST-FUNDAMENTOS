import { Request, Response } from 'express'
import { UserService } from '../services/UserService'
import { PrismaUserRepository } from '../repositories/PrismaUserRepository'
import bcrypt from 'bcrypt'

const repository = new PrismaUserRepository()
const service = new UserService(repository)

export class UserController {
    async create(request: Request, response: Response) {
        const saltRounds = 10

        const { name, email, password } = request.body

        const salt = await bcrypt.genSalt(saltRounds)
        const hashPassWord = await bcrypt.hash(password, salt)

        await service.create({ name, email, hashPassWord })

        response.status(201).json()
    }
}