import { IUser } from "../repositories/IUser"
import { IUserRepository } from '../repositories/IUserRepository'

export class UserService {
    constructor(
        private repository: IUserRepository
    ) { }

    create(data: IUser) {
        return this.repository.create(data)
    }

    showUnique(email: string){
        return this.repository.findUnique(email)
    }

}