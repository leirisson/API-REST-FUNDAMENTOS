import { Request, Response } from "express";




export class LivroController {
    async create(request: Request, response: Response) {
        response.status(201).json({id : request.user?.id})
    }
}