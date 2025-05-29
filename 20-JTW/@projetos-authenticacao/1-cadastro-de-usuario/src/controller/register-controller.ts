import { Request, Response } from 'express'
import { ImemoryRepository } from '../repository/ImemoryRepository'
import { UserService } from '../service/UserService'
import bcrypt from "bcrypt"

const repository = new ImemoryRepository()
const service = new UserService(repository)


export class RegisterController {
    async register(request: Request, response: Response) {
        // encripitar a senha


        const saltRounds = 10
        const { name, email, password } = request.body
        const salt = await bcrypt.genSalt(saltRounds)
        const password_hash = await bcrypt.hash(password, salt)
        

        const userscreated = await service.create({ name, email, password_hash })
        response.status(201).json({ userscreated })
    }
}