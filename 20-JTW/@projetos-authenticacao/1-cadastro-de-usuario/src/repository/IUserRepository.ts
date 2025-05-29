import { IUser } from "./IUser";

export interface IUserRepository {
    create(dataUSer: IUser): Promise<IUser[]>
}