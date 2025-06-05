import { Request, Response, NextFunction } from 'express'


export function verifyUserAthorization(role: string[]) {
    return (request: Request, response: Response, next: NextFunction) => {
        if (!request.user || !role.includes(request.user.role)) {
            response.status(401).json({ messge: "não autorizado." })
        }

        console.log(request.user?.role)

        return next()
    }
}