import { after } from "node:test";

export default {
    client : "sqlite3",
    connection : {
        filename: "./src/database/database.db"
    },
    // habilitando a restrição de chaves do relacionamento
    pool:{
        afterCreate: (connection: any, done:any) => {
            connection.run("PRAGMA foreign_keys = ON")
            done()
        },
    },

    useNullAsDefault: true,
    migrations: {
        extensions: "ts",
        directory: "./src/database/migrations"
    },
    seeds: {
        extension: "ts",
        directory: "./src/database/seeds"
    }
}