declare namespace Express {
    export interface Request {
        user?: {
            id: string,
            name?: string,
            email?: string,
            password?: string,
            curso?: string,
            role?: string 

        }
    }
}