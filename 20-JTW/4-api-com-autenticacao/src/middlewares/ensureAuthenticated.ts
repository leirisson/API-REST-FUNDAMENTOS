import { Request, Response, NextFunction } from 'express'
import IToken from '../interfaces/IToken'
import { verify } from 'jsonwebtoken'
import { authConfig } from '../configs/auth'


export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction) {

    const authHeader = request.headers.authorization


    if (!authHeader) {
        response.status(401).json({ message: "token não informado" })
    }

    const [, tokenValue]: string[] = authHeader?.split(' ');


    const { sub: user_id } = verify(tokenValue, authConfig.jwt.secret)

    request.user = {
        id: String(user_id)
    }

    return next()
}