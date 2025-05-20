import {Request, Response, NextFunction} from 'express'


export class SessionsController {
    async create(request:Request, response:Response, next:NextFunction){
        response.json({msg:'teste'})
    }
}