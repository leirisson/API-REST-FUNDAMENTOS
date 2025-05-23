import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { authConfig } from '../configs/auth'
import  ITokePayload  from '../interfaces/ITokePayload'


export function ensureAuthenticathed(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization

    if (!authHeader) {
        response.status(401).json({ msg: "sem o token" })
    }

    const [, token] = authHeader?.split(' ') // o split retorna um array [bear, token] eu estou pegando a posição [1] que é o token e descartando o bear


    // valida o se o token do usuario é valido
    const { sub: user_id, role } = verify(token, authConfig.jwt.secret) as ITokePayload

    // passa o id do usuario na requisição 
    request.user = {
        id: String(user_id),
        role
    }

    return next()
}