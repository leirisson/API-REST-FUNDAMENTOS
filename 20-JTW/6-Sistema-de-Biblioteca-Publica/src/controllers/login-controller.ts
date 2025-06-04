import { Request, Response, NextFunction } from 'express'
import { sign } from 'jsonwebtoken'
import { authConfig } from '../config/auth'


export class LoginController {
    async login(request: Request, response: Response, _: NextFunction) {

        const FakeUserAdmin = {
            id: "1",
            name: "leirisson",
            email: "leirisson@example.com",
            password: "123456",
            role: ["admin"]
        }

        const FakeUser = {
            id: "1",
            name: "Maria",
            email: "maria@example.com",
            password: "m2@123",
            curso: "informatica",
            role: ["user"]
        }

        const { email, password } = request.body

        if (FakeUserAdmin.email !== email || FakeUserAdmin.password !== password) {
            response.status(401).json({ erro: "e-mail ou senha incorres" })
        }

        const { secret, expiresIn } = authConfig.jwt

        const token = sign({ userName: FakeUserAdmin.name, role: FakeUserAdmin.role },
            secret,
            {
                expiresIn,
                subject: FakeUserAdmin.id
            }
        )

        response.json({ token })
    }
}