import { openDB } from "./database";

async function initDB(){
    const db = await openDB()
    await db.exec(`
        CREATE TABLE IF NOT EXISTS projetos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        text TEXT NOT NULL,
        Data_de_inicio TEXT NOT NULL 
        data_de_conclusao TEXT NOT NULL
        status BOOLEAN
        )
        `)
}

initDB()