import { Request, Response } from 'express'

export class SessionController {
    index(request: Request, response: Response) {
        response.json({ msg: "teset de API sessions" })
    }

    create(request: Request, response: Response) {

        const fakeUser = {
            name: "leirisson",
            password: '12345',
            role: "admin"
        }


        


        response.json({ msg: "teset de API sessions" })
    }
}