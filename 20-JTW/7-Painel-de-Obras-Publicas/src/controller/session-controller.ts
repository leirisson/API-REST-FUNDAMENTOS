import { Request, Response } from 'express'
import { authConfig } from '../config/authConfig'
import { sign } from 'jsonwebtoken'
export class SessionController {
    create(request: Request, response: Response) {

        const { name, password } = request.body

        const userEngenheiro = {
            id: '1',
            name: 'leirisson',
            password: '123456',
            role: 'engenheiro'
        }

        const userAdmin = {
            id: '2',
            name: 'raimundo',
            password: '123456',
            role: 'admin'
        }

        const userFiscal = {
            id: '3',
            name: 'francisco',
            password: '123456',
            role: 'fiscal'
        }


        if (userEngenheiro.name !== name || userEngenheiro.password !== password) {
            response.status(401).json({ message: "nome de usuario ou senha incorretas" })
        }

        const { secret, expiresIn } = authConfig.jwt

        const token = sign({}, secret, {
            expiresIn,
            subject: userEngenheiro.id
        })

        response.json({token})
    }
}