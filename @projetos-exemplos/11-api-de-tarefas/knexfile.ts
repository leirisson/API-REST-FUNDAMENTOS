export default {
    client : "sqlite3",
    connection : {
        filename: "./src/database/database.db"
    },

    useNullAsDefaull: true,
    migrations: {
        extensions: "ts",
        directory: "./src/database/migrations"
    },
    seeds: {
        extension: "ts",
        directory: "./src/database/seeds"
    }
}