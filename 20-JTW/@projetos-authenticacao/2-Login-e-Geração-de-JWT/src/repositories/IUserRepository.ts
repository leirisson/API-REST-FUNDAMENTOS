import { IUser } from './IUser'

export interface IUserRepository {
    create(dataUser: IUser): Promise<void>
    findUnique(email: string): Promise<IUser | null>
}
