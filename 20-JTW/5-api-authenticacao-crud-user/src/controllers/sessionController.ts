import { Request, Response } from 'express'
import { authConfig } from '../config/auth'
import { sign } from 'jsonwebtoken'
import { FakeUser } from '../model/User'


export class SessionController {
    create(request: Request, response: Response) {
        
        const { name, password } = request.body

        const fakeUser: FakeUser = {
            id: "1",
            name: "Leirisson",
            password: "123456",
            role: ["admin"]
        }

        if (name !== fakeUser.name || password !== fakeUser.password) {
            response.status(401).json({ message: "usuario ou senha invalida." })
        }


        const { secret, expiresIn } = authConfig.jwt
        const token = sign({}, secret, {
            expiresIn,
            subject: String(fakeUser.id)
        })

        response.status(201).json({ token })
    }
}