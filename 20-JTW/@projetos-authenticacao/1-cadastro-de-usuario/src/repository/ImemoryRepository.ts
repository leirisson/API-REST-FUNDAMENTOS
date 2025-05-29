import { IUser } from "./IUser"
import { IUserRepository } from './IUserRepository'

export class ImemoryRepository implements IUserRepository {
    private users: IUser[] = []

    async create(dataUSer: IUser): Promise<IUser[]> {
        await this.users.push(dataUSer)
        return this.users
    }
}