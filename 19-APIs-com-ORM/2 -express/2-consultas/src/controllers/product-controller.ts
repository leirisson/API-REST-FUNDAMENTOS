import {Request, Response} from 'express'


export class ProductController{

     index(request:Request, response: Response){
         response.json({msg: "ist ok"})
    }

     create(request: Request, response:Response){
        response.status(201).json({msg: request.user?.role})
    }

}
