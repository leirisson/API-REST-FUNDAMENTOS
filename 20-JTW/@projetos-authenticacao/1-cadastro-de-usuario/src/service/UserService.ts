import { IUserRepository } from '../repository/IUserRepository'
import { IUser } from '../repository/IUser'

export class UserService {
    constructor(
        private repo: IUserRepository
    ) { }

    create(dataUser: IUser){
        return this.repo.create(dataUser)
    }
}