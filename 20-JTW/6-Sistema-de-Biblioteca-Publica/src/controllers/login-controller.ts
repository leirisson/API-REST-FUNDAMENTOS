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
            role: "admin"
        }


        const { email, password } = request.body

        if (FakeUserAdmin.email !== email || FakeUserAdmin.password !== password) {
            response.status(401).json({ erro: "e-mail ou senha incorres" })
        }

        const { secret, expiresIn } = authConfig.jwt

        const token = sign(
            {
                userName: FakeUserAdmin.name,
                role: FakeUserAdmin.role 
            },
            secret,
            {
                expiresIn: expiresIn,
                subject: String(FakeUserAdmin.id)
            } as any )


        response.json({ token })
    }
}