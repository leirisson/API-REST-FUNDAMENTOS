export const authConfig = {
    jwt : {
        secret: process.env.AUTH_SECRET || "defaut",
        expiresIn: "1d"
    }
}