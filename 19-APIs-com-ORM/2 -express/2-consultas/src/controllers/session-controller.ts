import { Request, Response } from 'express'
import { authConfig } from '../configs/auth'
import { sign, Jwt } from 'jsonwebtoken'


export class SessionController {
    async index(request: Request, response: Response) {
        response.json({ msg: "ok" })
    }

    async create(request: Request, response: Response) {
        try {
            const { name, password } = request.body

            const fake_user = {
                id: "1",
                name: "leirisson",
                password: "12345",
                role: "admin"
            }

            if (name !== fake_user.name || password !== fake_user.password) {
                return response.status(401).json({
                    error: 'Usuário ou senha inválidos!'
                })
            }

            const { secret, expiresIn } = authConfig.jwt
            const token = sign({role: fake_user.role},
                secret,
                {
                    expiresIn,
                    subject: String(fake_user.id),
                    algorithm: 'HS256'
                }
            )


            response.status(201).json({token})
        } catch (error) {
            console.error(error)
            response.status(500).json({ error: 'Erro interno do servidor' })
        }
    }
}