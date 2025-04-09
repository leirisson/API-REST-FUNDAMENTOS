export default {
    client : "sqlite",
    connection : {
        filename: "./src/database/database.db"
    },
    useNullAsDefault:true,
    migrations : {
        extends :"ts",
        directory : "./src/database/migrations"
    },
}