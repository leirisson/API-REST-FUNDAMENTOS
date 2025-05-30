export interface IUser {
    id?: string
    name: string
    email: string
    hashPassWord: string
    createdAt?: Date | string
    updatedAt?: Date | string
}