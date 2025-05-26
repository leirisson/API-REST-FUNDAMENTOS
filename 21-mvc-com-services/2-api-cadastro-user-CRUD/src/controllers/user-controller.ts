import { Request, Response } from 'express'


export class UserController {

    async index(request: Request, response: Response): Promise<any> {
        try {
            return response.json({ message: "api it's -> ok" })
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}