import { Request, Response } from 'express'
import { UserServices } from '../services/UserService'


export class UserController {

    public userService = new UserServices()
    constructor() {
        this.create = this.create.bind(this) // Garante que `this` funcione corretamente
        this.index = this.index.bind(this)
        this.show = this.show.bind(this)
    }


    async index(request: Request, response: Response): Promise<any> {
        try {
            const getUsers = await this.userService.getUsers()

            return response.json({ usuarios: getUsers })
        } catch (error: any) {
            return response.status(400).json({ error: error.message })
        }
    }

    async show(request: Request, response: Response): Promise<any> {
        try {
            const { id } = request.params
            const user = await this.userService.getUser({ id })
            return response.json({ user })
        } catch (error: any) {
            return response.status(400).json({ error: error.message })
        }

    }

    async create(request: Request, response: Response): Promise<any> {

        const { name, email } = request.body

        try {
            const user = await this.userService.createUser({ name, email })
            return response.status(201).json(user)
        } catch (error: any) {
            return response.status(400).json({ error: error.message })
        }

    }
}
