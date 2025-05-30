import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { UserService } from '../services/UserService'
import { PrismaUserRepository } from '../repositories/PrismaUserRepository'
import { sign } from 'jsonwebtoken'
import { authConfig } from '../config/auth'


const repository = new PrismaUserRepository()
const service = new UserService(repository)

export class LoginController {
    async login(request: Request, response: Response) {

        const { email, password } = request.body

        const userEncontrado = await repository.findUnique(email)


        // Verifica se o usuário existe
        if (!userEncontrado) {
            response.status(401).json({ message: 'Email ou senha inválidos' })
        }

        // Compara a senha informada com o hash armazenado
        const isPasswordValid = await bcrypt.compare(password, String(userEncontrado?.hashPassWord))

        if (!isPasswordValid) {
            response.status(401).json({ message: 'Email ou senha inválidos' })
        }

        const {secret, expiresIn} = authConfig.jwt
        const token = sign({id: userEncontrado?.id, email: (userEncontrado?.email)},
            secret,
            {
                expiresIn,
                subject: userEncontrado?.id
            }
        )

        
        response.json({ token })
    }
}