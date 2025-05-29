import {
    Request,
    Response,
    NextFunction
} from 'express'

import { TokenPayload } from '../model/TokenPayload'

import { verify } from 'jsonwebtoken'
import { authConfig } from '../config/auth'

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization

    if (!authHeader) {
        response.json({ erro: "mensagem não existe token de autenticação." })
    }


    const [, token] = authHeader?.split(' ')


    const { sub: user_id, role } = verify(token, authConfig.jwt.secret) as TokenPayload

    request.user = {
        id: String(user_id),
        role,
    }
    return next()
}