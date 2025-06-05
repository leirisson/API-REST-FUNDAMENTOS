import { Request, Response, NextFunction } from "express"
import { verify } from 'jsonwebtoken'
import { authConfig } from '../config/auth'
import { TokenPayload } from '../interfaces/TokenPayload'

export function ensureAthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization

    if (!authHeader) {
        response.status(401).json({ message: "token não informado" })
    }

    const [, token]: any = authHeader?.split(' ')

    // verificado se o token é valido
    const { secret } = authConfig.jwt
    const { sub: user_id, role, userName } = verify(token, secret) as TokenPayload

    request.user = {
        id: String(user_id),
        name: userName,
        role,
    }

    return next()
}