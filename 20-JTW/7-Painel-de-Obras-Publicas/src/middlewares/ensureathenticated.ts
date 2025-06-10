import { Request, Response, NextFunction } from 'express'

import { authConfig } from '../config/authConfig'
import {verify} from 'jsonwebtoken'


export function ensureathenticated(request: Request, response: Response, next: NextFunction) {
    
    // verificando se o tojen veio na requisição
    const authHeader = request.headers.authorization
    if(!authHeader){
        response.status(401).json({message: "token não informado."})
    }

    // separando somente o token
    const [,token] = authHeader?.split(' ')

    // verificando a validade do token e extraindo o id do usuario que logou
    const {sub: user_id}  = verify(token, authConfig.jwt.secret)

    //inserindo usuario na requisição
    request.user = {
        id: String(user_id)
    }

    return next()
}