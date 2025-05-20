import {Request, Response, NextFunction} from 'express'


export class ProductController {
    async index(request:Request, response:Response, next:NextFunction){
        response.send('ok')
    }


    async create(request:Request, response:Response, next:NextFunction){
        response.send('CREATED')
    }
}