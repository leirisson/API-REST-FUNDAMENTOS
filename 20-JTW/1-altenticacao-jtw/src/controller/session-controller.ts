import { Request, Response } from 'express'
import { AppError } from '../utils/AppError'



export class SessionsController {
    async create(request: Request, response: Response) {

        // recuperando os dados
        const { username, password } = request.body

        const fakeUser = {
            id: 1,
            username: "leirisson",
            password: "123456"
        }

        if (username !== fakeUser.username || password !== fakeUser.password) {
            throw new AppError("E-mail  e/ou senha incorreta", 401)
        }

        

        response.json({ msg: 'teste' })
    }
}