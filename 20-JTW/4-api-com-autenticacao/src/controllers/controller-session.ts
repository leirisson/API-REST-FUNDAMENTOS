import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'
import { authConfig } from '../configs/auth'


export class ControllerSession {
    index(request: Request, response: Response) {
        response.json({ msg: "Listado com sucesso" })
    }
    create(request: Request, response: Response) {

        const { name, password } = request.body

        const fakeUser = {
            id: "1",
            name: "Leirisson",
            password: "123456",
            role: "admin"
        }

        if (name !== fakeUser.name || password !== fakeUser.password) {
            response.status(401).json({ message: "usuario e/ou senha incorretos" })
        }

        const { secret, expiresIn } = authConfig.jwt
        const token = sign(
            {},
            secret, {
            expiresIn,
            subject: String(fakeUser.id)
        }

        )

        response.json({ token })
    }
}