import { AuthConfig } from '../interfaces/Athconfig'

export const authConfig: AuthConfig = {
    jwt: {
        secret: process.env.AUTH_SECRET || 'default',
        expiresIn: '1d',
    },
}